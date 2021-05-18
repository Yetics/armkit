var github = require('octonode');
require('dotenv').config();

function getRepo(accessToken: string | undefined) {
    var client = github.client(accessToken);
    var ghrepo = client.repo('Azure/azure-resource-manager-schemas');
    return ghrepo;
}

function filterVersions(body) {
    // Only versions that look like a date
    body = body.filter((schema) => schema.name.match(/^[\d-]+$/) != null);

    // Sort descending by name.
    body = body.sort((x, y) => x.name < y.name ? 1 : -1);

    return body;
}

function fromBase64(s: string) {
    let buffer = Buffer.from(s, "base64");
    return buffer.toString("utf8");    
}

async function hasDeploymentTemplate(ghrepo, schema) {
    let body = await ghrepo.contentsAsync(schema.path);
    body = body[0];

    return body.find(file => file.name == 'deploymentTemplate.json') !== undefined;
}

async function getSchemasWithTemplate(ghrepo) {
    let body = await ghrepo.contentsAsync('/schemas');
    body = body[0];

    body = filterVersions(body);
    
    body = body.filter(async schema => await hasDeploymentTemplate(ghrepo, schema));

    return body;
}

async function getTemplateContents(ghrepo, schema) {
    let path = schema.path + '/deploymentTemplate.json';

    let body = await ghrepo.contentsAsync(path);
    body = body[0];

    
    return fromBase64(body.content);
}

function flatten(arr) {
    // Make sure we need it.
    if (arr.find(element => Array.isArray(element)) === undefined) {
        return arr;
    }

    return arr.reduce(function(accumulated, current) {
        if (Array.isArray(current)) {
            return accumulated.concat(current);
        }
        else {
            return accumulated.push(current);
        }
    }, []);
}

function getRefs(items) {
    if (items === undefined) {
        return [];
    }
    else if (items["$ref"]) {
        return [ items["$ref"] ];
    }
    else if (Array.isArray(items)) {
        return flatten(items.map((value, index, array) => getRefs(value)));
    }
    else {
        return getRefs(items["oneOf"]).concat(getRefs(items["allOf"]));
    }
}

function keepLatestVersions(resources) {
    let groups = resources.map(function(resource) {
        return {
            name: resource.substring(55),
            version: resource.substring(44, 54)
        } 
    });

    groups = groups.sort(function(x, y) {
        if (x.name > y.name) return 1; // name ascending
        else if (x.name < y.name) return -1;
        else {
            if (x.version < y.version) return 1; // version descending
            else if (x.version > y.version) return -1;
            else return 0;
        }
    });

    groups = groups.reduce(function(accumulated, current) { 
        if (!accumulated.find((value) => value.name === current.name && value.version >= current.version)) { 
            accumulated.push(current); 
        } 
        return accumulated; 
    }, []);

    return groups.map(group => `${group.version}/${group.name}`);
}

function getResourceList(contents: string) {
    let items = contents['properties'].resources.items;

    // Iterate into the contents and get all the $ref
    let resources = getRefs(items);

    resources = resources
        .filter(resource => resource.startsWith('https://schema.management.azure.com/schemas/2')) // Filter the ones referencing versioned schemas
        .filter(resource => resource.indexOf('preview') < 0) // Exclude preview
        .map(resource => resource.substring(0, resource.indexOf('#')))    // Keep the file reference only
        .reduce(function(accumulated, current) { 
            if (!accumulated.find((value) => value === current)) { 
                accumulated.push(current); 
            } 
            return accumulated; 
        }, []); // Remove duplicates

    return keepLatestVersions(resources);
}

async function main() {
    var ghrepo = getRepo(process.env.GITHUB_ACCESS_TOKEN);
    let schemas = await getSchemasWithTemplate(ghrepo);

    schemas.forEach(async schema => {
        let contents = await getTemplateContents(ghrepo, schema);

        var object = JSON.parse(contents);
        let resourceList = getResourceList(object);

        let fs = require('fs');
        fs.writeFile(
            `out/schema-config${schema.name}.json`, 
            JSON.stringify(resourceList), 
            '', 
            (err) => console.log(err));
    });
   
}

function testFileLoad() {
    let fs = require('fs');

    fs.readFile('sampleDeploymentTemplate.json', 'utf8', function(err, data) {
        if (err) {
            throw Error(err);
        }

        var object = JSON.parse(data);
        let resourceList = getResourceList(object);
        
        console.log(JSON.stringify(resourceList));
    });
}

main();

export {}

