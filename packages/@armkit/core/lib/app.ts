import { Construct, Node } from 'constructs';
import fs = require('fs');

export interface AppOptions {
  /**
 * The directory to output Terraform resources.
 *
 * @default - ARMKIT_OUTDIR if defined, otherwise "cdk.out"
 */
  readonly outdir?: string;
  readonly stackTraces?: boolean;
}
/**
 * Represents a armkit application.
 */
export class App extends Construct {
  /**
 * The output directory into which resources will be synthesized.
 */
  public readonly outdir: string;

  /**
 * The stack which will be synthesized. If not set, all stacks will be synthesized.
 */
  public readonly targetStackId: string | undefined

  /**
   * Defines an app
   * @param options configuration options
   */
  constructor(options: AppOptions = {}) {
    super(undefined as any, '');
    this.outdir = process.env.ARMKIT_OUTDIR ?? options.outdir ?? 'cdk.out';
    this.targetStackId = process.env.ARMKIT_TARGET_STACK_ID
  }

  /**
 * Synthesizes all resources to the output directory
 */
  public synth(): void {
    if (!fs.existsSync(this.outdir)) {
      fs.mkdirSync(this.outdir);
    }

    Node.of(this).synthesize({
      outdir: this.outdir
    });
  }
}