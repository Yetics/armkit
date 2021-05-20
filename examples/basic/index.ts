import { Construct } from 'constructs';
import { App, ArmStack } from '@yetics/armkit-core';
import {
  ContainerGroups, ContainerGroupPropertiesOsType, MicrosoftContainerInstanceContainerGroupsType, MicrosoftContainerInstanceContainerGroupsApiVersion
} from './.generated/ContainerInstance-2021-03-01'
import {
  Registries, MicrosoftContainerRegistryRegistriesApiVersion, MicrosoftContainerRegistryRegistriesType, SkuName
} from './.generated/ContainerRegistry-2019-05-01'

export class HelloArmkit extends ArmStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new ContainerGroups(this, 'MyContainerGroup', {
      name: 'azurecdktest',
      location: 'westeurope',
      apiVersion: MicrosoftContainerInstanceContainerGroupsApiVersion["MicrosoftContainerInstanceContainerGroupsApiVersion_2021_03_01"],
      type: MicrosoftContainerInstanceContainerGroupsType.MicrosoftContainerInstanceContainerGroupsType_MICROSOFT_CONTAINER_INSTANCE_CONTAINER_GROUPS,
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
      apiVersion: MicrosoftContainerRegistryRegistriesApiVersion['MicrosoftContainerRegistryRegistriesApiVersion_2019_05_01'],
      type: MicrosoftContainerRegistryRegistriesType.MicrosoftContainerRegistryRegistriesType_MICROSOFT_CONTAINER_REGISTRY_REGISTRIES,
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
new HelloArmkit(app, 'hello-armkit');
app.synth();