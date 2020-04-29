
import { Construct } from 'constructs'
import { ArmElement } from './arm-element';

interface ArmResourceProps {
  armResourceType: string
}

export abstract class ArmResource extends ArmElement {
  public readonly armResourceType: string;
  protected readonly _armProperties: any;

  constructor(scope: Construct, id: string, props: ArmResourceProps) {
    super(scope, id)

    this.armResourceType = props.armResourceType;
    this._armProperties = props || {};
  }

  // protected abstract synthesizeAttributes(): { [name: string]: any };

  public toArm(): any {
    return Object.assign({}, this._armProperties, {apiVersion: '2017-06-01'})
  }
}
