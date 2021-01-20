# Contributing to the Azure Cloud Development Kit

Thanks for your interest in contributing to the AZURE CDK! ❤️

This document describes how to set up a development environment and submit your contributions. Please read it carefully
and let us know if it's not up-to-date (even better, submit a PR with your  corrections ;-)).

## Requirements

- NodeJS >= 1.13
- Yarn

## Getting Started

Clone the repository:

```shell
~$ git clone https://github.com/yetics/armkit.git
```

To compile the `armkit-cdk` binary for your local machine:

```shell
~/armkit$ yarn install
~/armkit$ yarn build
```

## Building a sample

`armkit` is a typescript core that translates the JSON Azure API schema definition to typescript code.

To define which API we going to tranlate we use either the `SCHEMA_DEFINITION_URL` or `packages/armkit-cli/schema-config.json` to specify targets.

Here is an example:

```shell
~/armkit/packages/armkit-cli$ SCHEMA_DEFINITION_URL=https://schema.management.azure.com/schemas/2018-06-01/Microsoft.DataFactory.json armkit generate
```

Triggering this process we call a `yarn generate` script section from `packages.json`. So we can call `yarn build && yarn generate` in `packages/armkit-cli`
resulting in a `.generated` folder containing the typscript libraries

- Go to `examples/basic`
- Generate cdk libs with `yarn generate`
- Translate to node.js: `yarn build`
- Create the template `node index.js`
- You are ready to deploy:

    ```shell
    ~/armkit$ az deployment group create --resource-group rg-your-resourcegroup --template-file cdk.out/helloarmkit.json
    ```

## Running tests

```shell
 ~/armkit/packages/armkit-cli$ yarn test
```
