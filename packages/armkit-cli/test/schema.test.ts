import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { ImportArmSchema } from '../lib/import';
import { CodeMaker } from 'codemaker';
import * as $RefParser from "@apidevtools/json-schema-ref-parser";

test('storage_schema.test', async () => {
  const workdir = fs.mkdtempSync(path.join(os.tmpdir(), 'storage.test'));
  const spec = JSON.parse(fs.readFileSync(path.join(__dirname, 'fixtures', 'storage.json'), 'utf-8'));
  const importer = new ImportArmSchema();
  const code = new CodeMaker()

  const fileName = `storage.ts`;

  code.openFile(fileName);
  code.indentation = 2;
  const resolved = await $RefParser.resolve(spec)
  await importer.make(code, resolved);
  code.closeFile(fileName);

  await code.save(workdir)

  console.log({ spec, workdir, fileName })
  const output = fs.readFileSync(path.join(workdir, fileName), 'utf-8');
  expect(output).toMatchSnapshot();
});