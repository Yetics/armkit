import { Construct, IConstruct, ISynthesisSession, Node } from 'constructs';
import * as fs from 'fs';
import * as path from 'path';
import { ArmElement } from './arm-element';
import { deepMerge } from './util';

export class ArmStack extends Construct {
  public readonly artifactFile: string;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.artifactFile = `${Node.of(this).uniqueId}.json`;
  }

  public toArm(): any {
    const arm = { };

    const visit = (node: IConstruct) => {
      if (node instanceof ArmElement) {
        deepMerge(arm, node.toArm());
      }

      for (const child of Node.of(node).children) {
        visit(child);
      }
    }

    visit(this);

    return arm
  }

  public onSynthesize(session: ISynthesisSession) {
    const output = path.join(session.outdir, this.artifactFile);
    fs.writeFileSync(output, JSON.stringify(this.toArm(), undefined, 2));
  }
}
