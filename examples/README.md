# Armkit Examples


## Building a sample

- Go to `~/armkit/examples/basic`
- Generate cdk libs with `yarn generate`
- Translate to node.js: `yarn build`
- Create the template `node index.js`
- You are ready to deploy:

    ```shell
    ~/armkit$ az deployment group create --resource-group rg-your-resourcegroup --template-file cdk.out/helloarmkit.json
    ```
