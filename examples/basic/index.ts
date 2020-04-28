import { Construct } from 'constructs';
import { App, ArmStack } from '@armkit/core';
import { storageAccounts, MicrosoftStorageStorageAccountsTypeEnum, skuNameEnum, skuTierEnum } from './.generated/armkit'

export class HelloArmkit extends ArmStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new storageAccounts(this, 'MyStorage', {
      name: 'my-storage',
      type: MicrosoftStorageStorageAccountsTypeEnum.MICROSOFT_STORAGE_STORAGE_ACCOUNTS,
      sku: {
        name: skuNameEnum.STANDARD_RAGRS,
        tier: skuTierEnum.PREMIUM
      },
      location: 'foo'
    })
  }
}

const app = new App({ outdir: 'cdk.out' });
new HelloArmkit(app, 'hello-armkit');
app.synth();