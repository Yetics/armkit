import { Construct } from "constructs";
import { App, ArmStack } from "@armkit/core";
import {
  Registries,
  MicrosoftContainerRegistryRegistriesApiVersionEnum,
  MicrosoftContainerRegistryRegistriesTypeEnum,
  SkuNameEnum,
} from "./.generated/ContainerRegistry";

export class HelloContainerRegistry extends ArmStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new Registries(this, "azurecdktest", {
      name: "azurecdktest",
      location: "westeurope",
      apiVersion:
        MicrosoftContainerRegistryRegistriesApiVersionEnum["2019_05_01"],
      type:
        MicrosoftContainerRegistryRegistriesTypeEnum.MICROSOFT_CONTAINER_REGISTRY_REGISTRIES,
      sku: {
        name: SkuNameEnum.BASIC,
      },
      properties: {
        adminUserEnabled: false,
      },
    });
  }
}

const app = new App({ outdir: "cdk.out" });
new HelloContainerRegistry(app, "hello-container-group");
app.synth();
