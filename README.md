# Armkit (Azure Cloud Development Kit)

- [Armkit (Azure Cloud Development Kit)](#armkit-azure-cloud-development-kit)
  - [Badges](#badges)
  - [Contributing and Feedback](#contributing-and-feedback)
  - [Summary](#summary)
  - [Background](#background)
  - [Examples](#examples)
    - [**`helloArmkit.ts`**](#helloarmkitts)
  - [Building](#building)
  - [Roadmap](#roadmap)
  - [License](#license)

## Badges

[![Build](https://github.com/Yetics/armkit/actions/workflows/test-build.yml/badge.svg)](https://github.com/Yetics/armkit/actions/workflows/test-build.yml)
[![npm version](https://badge.fury.io/js/%40yetics%2Farmkit-core.svg)](https://badge.fury.io/js/%40yetics%2Farmkit-core)

## Contributing and Feedback

CDK for Azure is an early experimental project and the development folks would love your feedback to help guide the project.

- Report a [bug](https://github.com/yetics/armkit/issues/new?assignees=&labels=bug&template=bug-report.md&title=)
- Request a new [feature](https://github.com/yetics/armkit/issues/new?assignees=&labels=enhancement&template=feature-request.md&title=).
- Browse all [open issues](https://github.com/yetics/armkit/issues).
- Public [roadmap](https://github.com/yetics/armkit/projects/1).
- Ask a question on [Stack Overflow](https://stackoverflow.com/questions/tagged/armkit) and tag it with `armkit`
- Come join the Armkit community on [Slack](https://cdk-dev.slack.com/archives/C01QBE1A3RC)

We welcome community contributions and pull requests. See [CONTRIBUTING](./CONTRIBUTING.md) for information on how to set up a development environment and submit code.

## Summary

`Armkit`, **Azure Cloud Development Kit (CDK),** is an open source software development framework to define cloud Infrastructure as Code (IaC) and provision it through `Azure ARM Templates`.

It offers a high-level object-oriented abstraction to define `Azure` resources imperatively using the power of modern programming languages. Using the `Armkit` library of infrastructure constructs, you can easily encapsulate Azure best practices in your infrastructure definition and share it without worrying about boilerplate logic.

`Armkit` is available in the following languages:

- JavaScript/TypeScript ([Node.js ≥ 12.17.0](https://nodejs.org/download/release/latest-v12.x/))

## Background

Developers use the `Armkit` framework in one of the supported programming
languages to define reusable cloud components called `constructs`, which
are composed together into `stacks`, forming an "`Armkit` app".

They then use the [Armkit CLI](packages/armkit-cli) to interact with their `Armkit` app. The CLI allows developers to synthesize artifacts such as `Azure ARM Templates`, deploy `stacks` to development `Azure` accounts and `diff` against a deployed `stack` to understand the impact of a code change.

The [Armkit Construct Library](packages/@armkit/core) includes a module for each `Azure` service with constructs that offer rich APIs that encapsulate the details of how to use Azure. The `Armkit` Construct Library aims to reduce the complexity and glue-logic required when integrating various `Azure` services to achieve your goals on Azure.

Armkit packages:

- [@armkit/core](https://www.npmjs.com/package/@yetics/armkit-core) - A library that allows users to build Azure applications contructs.
- [armkit-resources](https://www.npmjs.com/package/@yetics/armkit-resources) - A library for defining Azure resources using programming constructs.
- [armkit-cli](https://www.npmjs.com/package/@yetics/armkit-cli) - A CLI that allows users to run commands to initialize, import, and synthesize `Armkit` applications.

## Examples

Some sample `constructs` are in [examples](./examples/basic/README.md). This could look like this:

### **`helloArmkit.ts`**

```ts
import { Construct } from "constructs";
import { App, ArmStack } from "@yetics/armkit-core";
import {
  ContainerGroups,
  ContainerGroupPropertiesOsType,
  MicrosoftContainerInstanceContainerGroupsType,
  MicrosoftContainerInstanceContainerGroupsApiVersion,
} from "./.generated/ContainerInstance-2021-03-01";
import {
  Registries,
  MicrosoftContainerRegistryRegistriesApiVersion,
  MicrosoftContainerRegistryRegistriesType,
  SkuName,
} from "./.generated/ContainerRegistry-2019-05-01";

export class HelloArmkit extends ArmStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new ContainerGroups(this, "MyContainerGroup", {
      name: "azurecdktest",
      location: "westeurope",
      apiVersion:
        MicrosoftContainerInstanceContainerGroupsApiVersion["2021_03_01"],
      type:
        MicrosoftContainerInstanceContainerGroupsType.MICROSOFT_CONTAINER_INSTANCE_CONTAINER_GROUPS,
      properties: {
        containers: [
          {
            name: "ubuntu-server",
            properties: {
              image: "ubuntu:18.04",
              command: ["sleep infinity"],
              resources: {
                requests: {
                  cpu: 1,
                  memoryInGB: 2,
                },
                limits: {
                  cpu: 1,
                  memoryInGB: 2,
                },
              },
            },
          },
        ],
        osType: ContainerGroupPropertiesOsType.LINUX,
      },
    });

    new Registries(this, "azurecdktest", {
      name: "azurecdktest",
      location: "westeurope",
      apiVersion: MicrosoftContainerRegistryRegistriesApiVersion["2019_05_01"],
      type:
        MicrosoftContainerRegistryRegistriesType.MICROSOFT_CONTAINER_REGISTRY_REGISTRIES,
      sku: {
        name: SkuName.BASIC,
      },
      properties: {
        adminUserEnabled: false,
      },
    });
  }
}

const app = new App({ outdir: "cdk.out" });
new HelloArmkit(app, "hello-armkit");
app.synth();
```

For a detailed walk through, see the Armkit [Developer Guide](./CONTRIBUTING.md).

## Building

Clone the project repository

```bash
git clone https://github.com/Yetics/armkit.git
```

Download dependencies and build node.js

```bash
cd armkit/
yarn install
yarn build
```

Build the `examples/basic` package:

Go to `examples/basic`:

```bash
cd /examples/basic
```

Generate the `armkit cdk` libs:

```bash
yarn generate
```

Translate `typescript` to `node.js`:

```bash
yarn build
```

Render ARM template from CDK:

```bash
node index.js
```

Check out the results:

```bash
az deployment group create --resource-group <resource-group-name> --template-file @cdk-out/helloarmkit.json
```

## Roadmap

The [Armkit Roadmap project board](https://github.com/Yetics/armkit/projects) lets developers know about our upcoming
features and priorities to help them plan how to best leverage `Armkit`and identify opportunities to contribute to the project. See [ROADMAP](./ROADMAP.md) for more information and FAQs.

- `Armkit` Roadmap project board: https://github.com/Armkit/armkit/projects/1
- Roadmap: https://github.com/Armkit/armkit/ROADMAP.md

## License

`Armkit` is distributed under the [Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

See [LICENSE](./LICENSE) and [NOTICE](./NOTICE) for more information.
