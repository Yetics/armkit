import { Construct, Node } from 'constructs';
import fs = require('fs');

export interface AppOptions {
  readonly outdir?: string;
}

export class App extends Construct {
  public readonly outdir: string;

  constructor(options: AppOptions = {}) {
    super(undefined as any, '');
    this.outdir = options.outdir ?? process.env.ARMKIT_OUTDIR ?? 'dist';
  }

  public synth(): void {
    if (!fs.existsSync(this.outdir)) {
      fs.mkdirSync(this.outdir);
    }

    Node.of(this).synthesize({
      outdir: this.outdir
    });
  }
}