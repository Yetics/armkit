import { Construct } from 'constructs';
import { App, ArmStack } from '@armkit/core';
import {
  ContainerGroups, ContainerGroupPropertiesOsTypeEnum, MicrosoftContainerInstanceContainerGroupsTypeEnum, MicrosoftContainerInstanceContainerGroupsApiVersionEnum
} from './.generated/ContainerInstance'

export class HelloArmkit extends ArmStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new ContainerGroups(this, 'MyContainerGroup', {
      name: 'mycontainerGroup',    
      location: 'westeurope',
      type: MicrosoftContainerInstanceContainerGroupsTypeEnum.MICROSOFT_CONTAINER_INSTANCE_CONTAINER_GROUPS,
      properties: {
        containers: [{
          name: 'ubuntu-server',
          properties: {
            image: 'ubuntu:18.04',
            command: ['sleep infinity'],
            resources: {
              requests: {
                cpu: 1,
                memoryInGB: 2
              },
              limits: {
                cpu: 1,
                memoryInGB: 4
              }
            }

          }
        }],
        osType: ContainerGroupPropertiesOsTypeEnum.LINUX,
      }          
    })
  }
}

const app = new App({ outdir: 'cdk.out' });
new HelloArmkit(app, 'hello-armkit');
app.synth();