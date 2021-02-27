import { Construct } from 'constructs';
import { App, ArmStack } from '@armkit/core';
import {
    MicrosoftNetworkVirtualNetworksApiVersionEnum,
    MicrosoftNetworkVirtualNetworksTypeEnum,
    VirtualNetworks
} from './.generated/Network'

export class HelloNetwork extends ArmStack {
    constructor(scope: Construct, id: string) {
        super(scope, id);

        new VirtualNetworks(this, 'AzureCDKVnet', {
            name: "AzureCDKVnet",
            location: 'westeurope',
            type: MicrosoftNetworkVirtualNetworksTypeEnum.MICROSOFT_NETWORK_VIRTUAL_NETWORKS,
            apiVersion: MicrosoftNetworkVirtualNetworksApiVersionEnum['2020_05_01'],
            properties: {
                addressSpace: {
                    addressPrefixes: [
                        "10.0.0.0/16"
                    ]
                },
                subnets: [
                    {
                        name: 'MySubnet11',
                        properties: {
                            addressPrefix: "10.0.0.1/24"
                        }
                    }
                ]

            }
        })
    }
}

const app = new App({ outdir: 'cdk.out' });
new HelloNetwork(app, 'hello-network');
app.synth();