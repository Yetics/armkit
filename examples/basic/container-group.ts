import { Construct } from 'constructs';
import { App, ArmStack } from '@armkit/core';
import {
    ContainerGroups, ContainerGroupPropertiesOsTypeEnum, MicrosoftContainerInstanceContainerGroupsTypeEnum, MicrosoftContainerInstanceContainerGroupsApiVersionEnum
} from './.generated/ContainerInstance'

export class HelloContainerGroup extends ArmStack {
    constructor(scope: Construct, id: string) {
        super(scope, id);

        new ContainerGroups(this, 'MyContainerGroup', {
            name: 'azurecdktest',

            location: 'westeurope',
            apiVersion: MicrosoftContainerInstanceContainerGroupsApiVersionEnum['2019_12_01'],
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
                                memoryInGB: 2
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
new HelloContainerGroup(app, 'hello-container-group');
app.synth();