
# Armkit (Azure Cloud Development Kit)

![Build Status](TBD)
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

[Examples](https://github.com/Armkit/armkit/examples) |
[Getting Help](#getting-help) |
[Roadmap](https://github.com/Armkit/armkit/blob/master/ROADMAP.md)

Developers use the [Armkit framework] in one of the
supported programming languages to define reusable cloud components called [constructs], which
are composed together into [stacks], forming a "Armkit app".

They then use the [Armkit CLI] to interact with their Armkit app. The CLI allows developers to
synthesize artifacts such as Azure ARM Templates, deploy stacks to development Azure accounts and "diff"
against a deployed stack to understand the impact of a code change.

The [Armkit Construct Library] includes a module for each
Azure service with constructs that offer rich APIs that encapsulate the details of
how to use Azure. The Armkit Construct Library aims to reduce the complexity and
glue-logic required when integrating various Azure services to achieve your goals
on Azure.

## At a glance

Install or update the [Armkit CLI] from npm (requires [Node.js ≥ 10.3.0](https://nodejs.org/download/release/latest-v10.x/)):

```bash
$ npm i -g armkit
```

Initialize a project:

```bash
$ mkdir hello-armkit
$ cd hello-armkit
$ armkit init sample-app --language=typescript
```

This creates a sample project looking like this:

```ts
export class HelloArmkitDeployment extends Armkit.Deployment {
  constructor(scope: Armkit.App, id: string, props?: Armkit.DeploymentProps) {
    super(scope, id, props);
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

For a detailed walkthrough, see the [tutorial] in the Armkit [Developer Guide].

## Getting Help

Please use these community resources for getting help. We use the GitHub issues
for tracking bugs and feature requests.

* Ask a question on [Stack Overflow](https://stackoverflow.com/questions/tagged/armkit)
  and tag it with `armkit`
* Come join the Armkit community on [Gitter](https://gitter.im/Armkit/armkit)
* If it turns out that you may have found a bug,
  please open an [issue](https://github.com/Armkit/armkit/issues/new)

## Contributing

We welcome community contributions and pull requests. See
[CONTRIBUTING](./CONTRIBUTING.md) for information on how to set up a development
environment and submit code.

## Roadmap

The [Armkit Roadmap project board] lets developers know about our upcoming features and priorities to help them plan how to best leverage the Armkit and identify opportunities to contribute to the project. See [ROADMAP] for more information and FAQs.

[Armkit Roadmap project board]: https://github.com/Armkit/armkit/projects/1
[Roadmap]: https://github.com/Armkit/armkit/ROADMAP.md

## License

The Armkit is distributed under the [Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

See [LICENSE](./LICENSE) and [NOTICE](./NOTICE) for more information.
