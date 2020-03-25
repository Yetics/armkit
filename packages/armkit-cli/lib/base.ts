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

export abstract class ImportBase {
  public abstract get moduleNames(): string[];
  protected abstract async generateTypeScript(code: CodeMaker, moduleName?: string): Promise<void>;

  public async import(options: ImportOptions) {
    const code = new CodeMaker();

    const outdir = path.resolve(options.outdir);
    await fs.mkdirp(outdir);
    const isTypescript = options.targetLanguage === Language.TYPESCRIPT

    for (const name of this.moduleNames) {
      const fileName = `${name}.ts`;
      code.openFile(fileName);
      code.indentation = 2;
      await this.generateTypeScript(code, name);
      code.closeFile(fileName);

      if (isTypescript) {
        await code.save(outdir);
      }
    }
  }
}
