import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { ImportArmSchema } from '../lib/import';
import { Language } from '../lib/base'

test('container_instance_schema.test', async () => {
  const workdir = fs.mkdtempSync(path.join(os.tmpdir(), 'container_instance.test'));
  const importer = new ImportArmSchema(`["2019-12-01/Microsoft.ContainerInstance"]`);

  await importer.import({outdir: workdir, targetLanguage: Language.TYPESCRIPT})

  const output = fs.readFileSync(path.join(workdir, `ContainerInstance.ts`), 'utf-8');
  expect(output).toMatchSnapshot();
});

test('container_registry_schema.test', async () => {
  const workdir = fs.mkdtempSync(path.join(os.tmpdir(), 'container_registry.test'));
  const importer = new ImportArmSchema(`["2019-05-01/Microsoft.ContainerRegistry"]`);

  await importer.import({outdir: workdir, targetLanguage: Language.TYPESCRIPT})

  const output = fs.readFileSync(path.join(workdir, `ContainerRegistry.ts`), 'utf-8');
  expect(output).toMatchSnapshot();
});



test('storage_schema.test', async () => {
  const workdir = fs.mkdtempSync(path.join(os.tmpdir(), 'storage.test'));
  const importer = new ImportArmSchema(`["2019-06-01/Microsoft.Storage"]`);

  await importer.import({outdir: workdir, targetLanguage: Language.TYPESCRIPT})

  const output = fs.readFileSync(path.join(workdir, `Storage.ts`), 'utf-8');
  expect(output).toMatchSnapshot();
});

// test('container_service_schema.test', async () => {
//   const workdir = fs.mkdtempSync(path.join(os.tmpdir(), 'container_service.test'));
//   const importer = new ImportArmSchema(`["2020-09-01/Microsoft.ContainerService"]`);

//   await importer.import({outdir: workdir, targetLanguage: Language.TYPESCRIPT})

//   const output = fs.readFileSync(path.join(workdir, `ContainerService.ts`), 'utf-8');
//   expect(output).toMatchSnapshot();
// });