import { Construct } from 'constructs';
import { App, ArmStack } from '@armkit/core';
import {
  ContainerGroups, ContainerGroupPropertiesOsType, MicrosoftContainerInstanceContainerGroupsType, MicrosoftContainerInstanceContainerGroupsApiVersion
} from './.generated/ContainerInstance'
import {
  Registries, MicrosoftContainerRegistryRegistriesApiVersion, MicrosoftContainerRegistryRegistriesType, SkuName
} from './.generated/ContainerRegistry'

export class HelloContainerGroup extends ArmStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new ContainerGroups(this, 'MyContainerGroup', {
      name: 'azurecdktest',
      location: 'westeurope',
      apiVersion: MicrosoftContainerInstanceContainerGroupsApiVersion['2019_12_01'],
      type: MicrosoftContainerInstanceContainerGroupsType.MICROSOFT_CONTAINER_INSTANCE_CONTAINER_GROUPS,
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
        osType: ContainerGroupPropertiesOsType.LINUX,
      }
    })

    new Registries(this, 'azurecdktest', {
      name: 'azurecdktest',
      location: 'westeurope',
      apiVersion: MicrosoftContainerRegistryRegistriesApiVersion['2019_05_01'],
      type: MicrosoftContainerRegistryRegistriesType.MICROSOFT_CONTAINER_REGISTRY_REGISTRIES,
      sku: {
        name: SkuName.BASIC
      },
      properties: {
        adminUserEnabled: false
      }
    })
  }
}

const app = new App({ outdir: 'cdk.out' });
new HelloContainerGroup(app, 'hello-containerinstance');
app.synth();