import { Construct } from 'constructs';
import { App, ArmStack } from '@armkit/core';
import {
    MicrosoftStorageStorageAccountsTypeEnum,
    StorageAccounts, SkuNameEnum,
    MicrosoftStorageStorageAccountsApiVersionEnum,
    SkuTierEnum, MicrosoftStorageStorageAccountsKindEnum,
    StorageAccountPropertiesCreateParametersAccessTierEnum,
    MicrosoftStorageStorageAccountsBlobServicesApiVersionEnum,
    MicrosoftStorageStorageAccountsBlobServicesContainersTypeEnum,
    ContainerPropertiesPublicAccessEnum
} from './.generated/Storage'

export class HelloContainerGroup extends ArmStack {
    constructor(scope: Construct, id: string) {
        super(scope, id);

        new StorageAccounts(this, 'AzureCDKStorageaccount', {
            name: 'azurecdkstorageaccount',
            location: 'westeurope',
            type: MicrosoftStorageStorageAccountsTypeEnum.MICROSOFT_STORAGE_STORAGE_ACCOUNTS,
            apiVersion: MicrosoftStorageStorageAccountsApiVersionEnum['2019_06_01'],
            sku: {
                name: SkuNameEnum.STANDARD_GRS,
                tier: SkuTierEnum.STANDARD
            },
            kind: MicrosoftStorageStorageAccountsKindEnum.STORAGE_V2,
            properties: {
                accessTier: StorageAccountPropertiesCreateParametersAccessTierEnum.HOT
            },
            resources: [
                  {
                    type: MicrosoftStorageStorageAccountsBlobServicesContainersTypeEnum.MICROSOFT_STORAGE_STORAGE_ACCOUNTS_BLOB_SERVICES_CONTAINERS,
                    apiVersion: MicrosoftStorageStorageAccountsBlobServicesApiVersionEnum['2019_06_01'],
                    name: 'myBlobContainer',
                    properties: {
                        publicAccess: ContainerPropertiesPublicAccessEnum.NONE
                    }
                  }
            ]
        })
    }
}

const app = new App({ outdir: 'cdk.out' });
new HelloContainerGroup(app, 'hello-storage');
app.synth();