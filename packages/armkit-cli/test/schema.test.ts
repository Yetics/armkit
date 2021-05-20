import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { ImportArmSchema } from '../lib/import';
import { Language } from '../lib/base'

// Validates the ability to import a given schema into Typescript.
const importerTest = async function (schemaConfig: string) {
  const serviceName = getServiceName(schemaConfig)
  const version = schemaConfig.split('/').shift()
  const workdir = fs.mkdtempSync(path.join(os.tmpdir(), serviceName + '.test'));

  const importer = new ImportArmSchema(`["` + schemaConfig + `"]`);

  await importer.import({ outdir: workdir, targetLanguage: Language.TYPESCRIPT })

  const output = fs.readFileSync(path.join(workdir, serviceName + `-` + version + `.ts`), 'utf-8');
  expect(output).toMatchSnapshot();
}

function getServiceName(schema: string): string {
  const [, fqn] = schema.split('/')
  const name = fqn.split('.').slice(1).join('')
  return name
}
// Load the list of services from schema-config.json.
const serviceList = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'schema-config.json')).toString()) as string[]
test.each(serviceList)('%s.test', importerTest);
