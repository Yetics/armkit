# Example for Azure based on Typescript

This is based on the provided examples for Azure

## Usage

Install project dependencies

```shell
yarn install
```

Generate CDK for Azure constructs used in the project.

```bash
yarn generate
```

You can now edit the `index.ts` file if you want to modify any code.

Make sure to run az login on the shell where this will run. Alternatively, put client id and secret in configuration for automation scenarios.

Generate Azure Temlate configuration

```bash
yarn build
node index.js
```

The above command will create a folder called `cdktf.out` that contains all Terraform JSON configuration that was generated.

See changes `armkit diff` and deploy via `armkit deploy`.

When you're done run `armkit destroy`.
