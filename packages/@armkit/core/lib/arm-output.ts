import { Construct } from "constructs";
import { ArmElement } from "./arm-element";
import { keysToSnakeCase, deepMerge } from "./util"
import { IArmDependable } from "./arm-dependable";

export interface ArmOutputConfig {
  readonly value: string | number | boolean | any[] | { [key: string]: any } | undefined;
  readonly description?: string;
  readonly sensitive?: boolean;
  readonly dependsOn?: IArmDependable[];
}

export class ArmOutput extends ArmElement {
  public value: string | number | boolean | any[] | { [key: string]: any } | undefined;
  public description?: string;
  public sensitive?: boolean;
  public dependsOn?: IArmDependable[];

  constructor(scope: Construct, id: string, config: ArmOutputConfig) {
    super(scope, id);

    this.value = config.value;
    this.description = config.description;
    this.sensitive = config.sensitive;
    this.dependsOn = config.dependsOn;
  }

  protected synthesizeAttributes(): {[key: string]: any} {
    return {
      value: this.value,
      description: this.description,
      sensitive: this.sensitive,
      dependsOn: this.dependsOn?.map(resource => `\${${resource.fqn}}`)
    }
  }

  public toArm(): any {
    return {
      output: {
        [this.friendlyUniqueId]: deepMerge(keysToSnakeCase(this.synthesizeAttributes()), this.rawOverrides)
      }
    };
  }
}