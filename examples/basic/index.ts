import { Construct } from 'constructs';
import { App, ArmStack } from '@armkit/core';
import { storageAccounts, MicrosoftStorageStorageAccountsTypeEnum, skuNameEnum, MicrosoftStorageStorageAccountsKindEnum, storageAccountPropertiesCreateParametersAccessTierEnum } from './.generated/armkit'

export class HelloArmkit extends ArmStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new storageAccounts(this, 'MyStorage', {
      properties: {
        accessTier: storageAccountPropertiesCreateParametersAccessTierEnum.HOT
      },
      name: 'mystorage452452kda',
      type: MicrosoftStorageStorageAccountsTypeEnum.MICROSOFT_STORAGE_STORAGE_ACCOUNTS,
      sku: {
        name: skuNameEnum.STANDARD_RAGRS
      },
      location: 'westeurope',
      kind: MicrosoftStorageStorageAccountsKindEnum.BLOB_STORAGE
    })
  }
}

const app = new App({ outdir: 'cdk.out' });
new HelloArmkit(app, 'hello-armkit');
app.synth();