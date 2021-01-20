
# Armkit (Azure Cloud Development Kit)

[![Build Status](https://dev.azure.com/aheumaier/armkit/_apis/build/status/Yetics.armkit?branchName=master)](https://dev.azure.com/aheumaier/armkit/_build/latest?definitionId=10&branchName=master)
[![Join the chat at https://gitter.im/Armkit/armkit](https://badges.gitter.im/Armkit/armkit.svg)](https://gitter.im/Armkit/armkit?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![NPM version](https://badge.fury.io/js/armkit.svg)](https://badge.fury.io/js/armkit)

The **Armkit (Azure Cloud Development Kit)** is an open-source software development
framework to define cloud infrastructure in code and provision it through Azure ARM Templates.

It offers a high-level object-oriented abstraction to define Azure resources imperatively using
the power of modern programming languages. Using the Armkit library of
infrastructure constructs, you can easily encapsulate Azure best practices in your
infrastructure definition and share it without worrying about boilerplate logic.

Armkit is available in the following languages:

* JavaScript, TypeScript ([Node.js ≥ 10.3.0](https://nodejs.org/download/release/latest-v10.x/))

-------

Developers use the [Armkit framework] in one of the supported programming languages to define reusable cloud components called [constructs], which are composed together into [stacks], forming an "Armkit app".

They then use the [Armkit CLI](#) to interact with their Armkit app. The CLI allows developers to synthesize artifacts such as Azure ARM Templates, deploy stacks to development Azure accounts and "diff"
against a deployed stack to understand the impact of a code change.

The [Armkit Construct Library](#) includes a module for each Azure service with constructs that offer rich APIs that encapsulate the details of how to use Azure. The Armkit Construct Library aims to reduce the complexity and glue-logic required when integrating various Azure services to achieve your goals on Azure.

The CDK for Azure includes two packages:

* [@armkit/core](https://github.com/Yetics/armkit/tree/development/packages/%40armkit/core) - A library for defining Azure resources using programming constructs.
* [armkit-cli](https://github.com/Yetics/armkit/tree/development/packages/armkit-cli) - A CLI that allows users to run commands to initialize, import, and synthesize CDK for Azure applications.


## Examples

We generated some sample constructs in [examples](./examples/README.md). This   could look like this:

#### **`helloArmkit.ts`**

```ts 
import { Construct } from 'constructs';
import { App, ArmStack } from '@armkit/core';
import {
  ContainerGroups, ContainerGroupPropertiesOsTypeEnum, MicrosoftContainerInstanceContainerGroupsTypeEnum, MicrosoftContainerInstanceContainerGroupsApiVersionEnum
} from './.generated/ContainerInstance'

export class HelloArmkit extends ArmStack {
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
new HelloArmkit(app, 'hello-armkit');
app.synth();
```

For a detailed walkthrough, see the Armkit [Developer Guide](./CONTRIBUTING.md).

## Contributing and Feedback

CDK for Azure is an early experimental project and the development folks would love your feedback to help guide the project.

* Report a [bug](https://github.com/yetics/armkit/issues/new?assignees=&labels=bug&template=bug-report.md&title=) or request a new [feature](https://github.com/yetics/armkit/issues/new?assignees=&labels=enhancement&template=feature-request.md&title=).
* Browse all [open issues](https://github.com/yetics/armkit/issues).
* Public [roadmap](https://github.com/yetics/armkit/projects/1).
* Ask a question on [Stack Overflow](https://stackoverflow.com/questions/tagged/armkit) and tag it with `armkit`
* Come join the Armkit community on [Gitter](https://gitter.im/Armkit/armkit)

We welcome community contributions and pull requests. See [CONTRIBUTING](./CONTRIBUTING.md) for information on how to set up a development environment and submit code.

## Building

Clone the project repository

```bash
git clone https://github.com/Yetics/armkit.git
```

Download dependencies

```bash
cd armkit/
yarn install
```

Build the project and packages

```bash
yarn build

## Roadmap

The [Armkit Roadmap project board] lets developers know about our upcoming features and priorities to help them plan how to best leverage the Armkit and identify opportunities to contribute to the project. See [ROADMAP] for more information and FAQs.

[Armkit Roadmap project board]: https://github.com/Armkit/armkit/projects/1
[Roadmap]: https://github.com/Armkit/armkit/ROADMAP.md

## License

The Armkit is distributed under the [Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

See [LICENSE](./LICENSE) and [NOTICE](./NOTICE) for more information.
