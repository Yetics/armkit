import { Construct, IConstruct, ISynthesisSession, Node } from 'constructs';
import * as fs from 'fs';
import * as path from 'path';
import { ArmElement } from './arm-element';
// import { deepMerge } from './util';

interface TemplateSchema {
  "$schema": string,
  contentVersion: string,
  apiProfile: string,
  parameters: {[key: string]: any},
  variables: {[key: string]: any},
  functions: any[],
  resources: any[],
  outputs: {[key: string]: any}
}

export class ArmStack extends Construct {
  public readonly artifactFile: string;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.artifactFile = `${Node.of(this).uniqueId}.json`;
  }

  public toArm(): any {
    const arm: TemplateSchema = {
      "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
      "contentVersion": "0.1.0.0",
      "apiProfile": "2018-06-01-profile",
      "parameters": {},
      "variables": {},
      "functions": [],
      "resources": [],
      "outputs": {}
    };

    const visit = (node: IConstruct) => {
      if (node instanceof ArmElement) {
        arm.resources.push(node.toArm());
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
