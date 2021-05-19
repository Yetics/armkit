import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { ImportArmSchema } from '../lib/import';
import { Language } from '../lib/base'
import AzureServices from './fixtures/azureServices'

// Validates the ability to import a given schema into Typescript.
const importerTest = async function (schemaConfig: string, serviceName: string) {
  const workdir = fs.mkdtempSync(path.join(os.tmpdir(), serviceName + '.test'));
  const importer = new ImportArmSchema(`["` + schemaConfig + `"]`);

  await importer.import({outdir: workdir, targetLanguage: Language.TYPESCRIPT})

  const output = fs.readFileSync(path.join(workdir, serviceName + `.ts`), 'utf-8');
  expect(output).toMatchSnapshot();
}

test.each(AzureServices)('%s.test', importerTest);