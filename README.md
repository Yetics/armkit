# Azure Cloud Development Kit (Azure CDK)

![Build Status](TBD)
[![Gitter](https://badges.gitter.im/Armkit/community.svg)](https://gitter.im/Armkit/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![NPM version](https://badge.fury.io/js/Azure-cdk.svg)](https://badge.fury.io/js/Azure-cdk)

The **Azure Cloud Development Kit (Azure CDK)** is an open-source software development
framework to define cloud infrastructure in code and provision it through Azure ARM Templates.

It offers a high-level object-oriented abstraction to define Azure resources imperatively using
the power of modern programming languages. Using the CDK’s library of
infrastructure constructs, you can easily encapsulate Azure best practices in your
infrastructure definition and share it without worrying about boilerplate logic.

The CDK is available in the following languages:

* JavaScript, TypeScript ([Node.js ≥ 10.3.0](https://nodejs.org/download/release/latest-v10.x/))


-------

[Developer Guide](https://docs.azure.com/cdk/latest/guide) |
[CDK Workshop](https://cdkworkshop.com/) |
[Getting Started](https://docs.Azure.com/cdk/latest/guide/getting_started.html) |
[API Reference](https://docs.Azure.com/cdk/api/latest/docs/Azure-construct-library.html) |
[Examples](https://github.com/Armkit/azure-cdk-examples) |
[Getting Help](#getting-help) |
[RFCs](https://github.com/Armkit/azure-cdk-rfcs) |
[Roadmap](https://github.com/Armkit/azure-cdk/blob/master/ROADMAP.md)

Developers use the [CDK framework] in one of the
supported programming languages to define reusable cloud components called [constructs], which
are composed together into [stacks], forming a "CDK app".

They then use the [Azure CDK CLI] to interact with their CDK app. The CLI allows developers to
synthesize artifacts such as Azure ARM Templates, deploy stacks to development Azure accounts and "diff"
against a deployed stack to understand the impact of a code change.

The [Azure Construct Library] includes a module for each
Azure service with constructs that offer rich APIs that encapsulate the details of
how to use Azure. The Azure Construct Library aims to reduce the complexity and
glue-logic required when integrating various Azure services to achieve your goals
on Azure.

## At a glance

Install or update the [Azure CDK CLI] from npm (requires [Node.js ≥ 10.3.0](https://nodejs.org/download/release/latest-v10.x/)):

```bash
$ npm i -g azure-cdk
```

(See [Manual Installation](./MANUAL_INSTALLATION.md) for installing the CDK from a signed .zip file).

Initialize a project:

```bash
$ mkdir hello-cdk
$ cd hello-cdk
$ cdk init sample-app --language=typescript
```

This creates a sample project looking like this:

```ts
export class HelloCdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const queue = new sqs.Queue(this, 'HelloCdkQueue', {
      visibilityTimeout: cdk.Duration.seconds(300)
    });

    const topic = new sns.Topic(this, 'HelloCdkTopic');

    topic.addSubscription(new subs.SqsSubscription(queue));
  }
}
```

Deploy this to your account:

```bash
$ armkit deploy
```

Use the `armkit` command-line toolkit to interact with your project:

 * `armkit deploy`: deploys your app into an Azure account
 * `armkit synth`: synthesizes an Azure ARM template for your app
 * `armkit diff`: compares your app with the deployed stack

For a detailed walkthrough, see the [tutorial] in the Azure CDK [Developer Guide].

## Getting Help

Please use these community resources for getting help. We use the GitHub issues
for tracking bugs and feature requests.

* Ask a question on [Stack Overflow](https://stackoverflow.com/questions/tagged/azure-cdk)
  and tag it with `azure-cdk`
* Come join the Azure CDK community on [Gitter](https://gitter.im/Armkit/azure-cdk)
* If it turns out that you may have found a bug,
  please open an [issue](https://github.com/Armkit/azure-cdk/issues/new)

## Contributing

We welcome community contributions and pull requests. See
[CONTRIBUTING](./CONTRIBUTING.md) for information on how to set up a development
environment and submit code.

## Roadmap

The [AWS CDK Roadmap project board] lets developers know about our upcoming features and priorities to help them plan how to best leverage the CDK and identify opportunities to contribute to the project. See [ROADMAP] for more information and FAQs.

[Azure CDK Roadmap project board]: https://github.com/orgs/armkit/projects/7
[Roadmap]: (https://github.com/Armkit/azure-cdk/ROADMAP.md)

## License

The Azure CDK is distributed under the [Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

See [LICENSE](./LICENSE) and [NOTICE](./NOTICE) for more information.

[Tutorial]: https://docs.azure.com/cdk/latest/guide/getting_started.html#hello_world_tutorial