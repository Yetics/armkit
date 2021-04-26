import * as yargs from 'yargs';
import { Language } from '../../base';
import { ImportArmSchema } from '../../import';

class Command implements yargs.CommandModule {
  public readonly command = 'generate';
  public readonly describe = 'Generates typed constructs for ARM templates';
  public readonly aliases = ['gen', 'import'];

  public readonly builder = (args: yargs.Argv) => args
    .option('output', { type: 'string' as 'string', desc: 'output directory', default: '.generated', alias: 'o' })
    .option('input', { type: 'string' as 'string', desc: 'schema input file', alias: 'i' });

  public async handler(argv: any) {
    const importer = new ImportArmSchema();

    void importer.import({
      outdir: argv.output,
      targetLanguage: Language.TYPESCRIPT,
    });
  }
}

module.exports = new Command();
