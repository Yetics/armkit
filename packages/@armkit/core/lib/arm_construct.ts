
import { Construct } from 'constructs'

interface FooOPtions {
  kind: string,
  foo?: number
}
export class ArmConstruct extends Construct {

  constructor(scope: Construct, name: string, _options: FooOPtions) {
    super(scope, name)
  }

}