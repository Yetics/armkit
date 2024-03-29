var github = require('octonode');
require('dotenv').config();

class SchemaItem {
    name: string;
    path: string;

    version: string;
}

class SchemaRepo {
    constructor (accessToken: string) {
        var client = github.client(accessToken);
        this.RepoClient = client.repo('Azure/azure-resource-manager-schemas'); 
    }

    async loadVersions() {
        let body = await this.RepoClient.contentsAsync('/schemas');
        this.Schemas = (body[0] as SchemaItem[])
            .filter(item => item.name.startsWith('2') && item.name.indexOf('preview') < 0);
        this.Schemas.forEach(item => item.version = item.name);
    }

    async loadServices() {
        for (let i=0; i<this.Schemas.length; i++) {
            let schema = this.Schemas[i];

            let body = await this.RepoClient.contentsAsync(schema.path);
            let services = (body[0] as SchemaItem[]).filter(item => item.name.split('.').length > 2); // Service names are in the form Microsoft.<service>.xxxx.json
        
            services.forEach(service => {
                service.version = schema.name;

                if (!this.Services.has(service.name) ||
                    this.Services.get(service.name).version < service.version) {
                    this.Services.set(service.name, service);
                }
            });
        }
    }

    serviceList(): string[] {
        let result: string[] = [];

        this.Services.forEach((value: SchemaItem, key: string, map) => {
            result.push(`${value.version}/${value.name.substring(0, value.name.length-5)}`);
        })
       
        return result.sort(function(x: string, y: string) : number {
            let xName = x.split('/')[1];
            let yName = y.split('/')[1];
            if (xName < yName) return -1;
            if (xName > yName) return 1;
            return 0;
         });
    }

    RepoClient: any;
    Schemas: SchemaItem[];
    Services: Map<string, SchemaItem> = new Map<string, SchemaItem>();
}

function writeOutput(fileName: string, data: any) {
    let fs = require('fs');
    fs.writeFile(
        fileName, 
        JSON.stringify(data), 
        '', 
        (err) => console.log(err));
}

function getOutputFileName() : string {
    if (process.argv.length > 2) {
        return process.argv[2];
    }
    return 'out/schema-config-repo.json';
}

async function main() {
    let schemaRepo = new SchemaRepo(process.env.GITHUB_ACCESS_TOKEN);
    await schemaRepo.loadVersions();
    await schemaRepo.loadServices();

    writeOutput(getOutputFileName(), schemaRepo.serviceList());
}

main();