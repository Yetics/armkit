import * as fs from 'fs-extra';
import * as path from 'path';
import { CodeMaker } from 'codemaker';

export enum Language {
  TYPESCRIPT = 'typescript',
  PYTHON = 'python',
  DOTNET = 'dotnet',
  JAVA = 'java',
}

export const LANGUAGES = [ Language.TYPESCRIPT, Language.PYTHON ];

export interface ImportOptions {
  readonly targetLanguage: Language;
  readonly outdir: string;
}

export interface SchemaConfig {
  name: string;
  version: string;
  downloadUrl: string;
}

export abstract class ImportBase {
  protected abstract generateTypeScript(code: CodeMaker, config?: SchemaConfig): Promise<void>;
  public readonly schemaConfig: SchemaConfig[];

  constructor(schemaConfig?: string) {
    this.schemaConfig = this.getSchemaConfig(schemaConfig);
  }

  public getSchemaConfig(schemaConfig?: string): SchemaConfig[] {
    const baseUrl = "https://schema.management.azure.com/schemas"
    const config = JSON.parse(schemaConfig || fs.readFileSync(path.join(__dirname, '..', 'schema-config.json')).toString()) as string[]

    return config.map(value => {
      const [version, fqn] = value.split('/')
      const name = fqn.split('.').slice(1).join('')
      const url = `${baseUrl}/${version}/${fqn}.json`

      return {
        version,
        name,
        downloadUrl: url
      } as SchemaConfig
    })
  }

  public async import(options: ImportOptions) {
    const code = new CodeMaker();

    const outdir = path.resolve(options.outdir);
    await fs.mkdirp(outdir);
    const isTypescript = options.targetLanguage === Language.TYPESCRIPT

    for (const config of this.schemaConfig) {
      const fileName = `${config.name}-${config.version}.ts`;
      code.openFile(fileName);
      code.indentation = 2;
      await this.generateTypeScript(code, config);
      code.closeFile(fileName);

      if (isTypescript) {
        await code.save(outdir);
      }
    }
  }
}
