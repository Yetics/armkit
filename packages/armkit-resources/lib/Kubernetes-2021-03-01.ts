        // generated by armkit
        import { ArmResource } from '@yetics/armkit-core';
        import { Construct } from 'constructs';

        /**
         * Microsoft.Kubernetes/connectedClusters
         *
         * @schema Microsoft.Kubernetes.connectedClusters
         */
        export class ConnectedClusters extends ArmResource {
          /**
           * Defines a "Microsoft.Kubernetes.connectedClusters" Arm Template object
           * @param scope the scope in which to define this object
           * @param name a scope-local name for the object
           * @param options configuration options
           */
          public constructor(scope: Construct, name: string, options: ConnectedClustersOptions) {
            super(scope, name, {
              ...options,
              armResourceType: 'connectedClusters',
            });
          }
        }

        /**
         * Microsoft.Kubernetes/connectedClusters
         *
         * @schema Microsoft.Kubernetes.connectedClusters
         */
        export interface ConnectedClustersOptions {
          /**
           * @schema Microsoft.Kubernetes.connectedClusters#apiVersion
           */
          readonly apiVersion?: MicrosoftKubernetesConnectedClustersApiVersion;

          /**
           * Identity for the connected cluster.
           *
           * @schema Microsoft.Kubernetes.connectedClusters#identity
           */
          readonly identity: ConnectedClusterIdentity;

          /**
           * The geo-location where the resource lives
           *
           * @schema Microsoft.Kubernetes.connectedClusters#location
           */
          readonly location: string;

          /**
           * The name of the Kubernetes cluster on which get is called.
           *
           * @schema Microsoft.Kubernetes.connectedClusters#name
           */
          readonly name: string;

          /**
           * Properties of the connected cluster.
           *
           * @schema Microsoft.Kubernetes.connectedClusters#properties
           */
          readonly properties: ConnectedClusterProperties;

          /**
           * Resource tags.
           *
           * @schema Microsoft.Kubernetes.connectedClusters#tags
           */
          readonly tags?: MicrosoftKubernetesConnectedClustersTags;

          /**
           * @schema Microsoft.Kubernetes.connectedClusters#type
           */
          readonly type: MicrosoftKubernetesConnectedClustersType;

        }

        export enum MicrosoftKubernetesConnectedClustersApiVersion {
          "MicrosoftKubernetesConnectedClustersApiVersion_2021_03_01" = '2021-03-01',
        }

        /**
         * Identity for the connected cluster.
         *
         * @schema #/definitions/ConnectedClusterIdentity
         */
        export interface ConnectedClusterIdentity {
          /**
           * The type of identity used for the connected cluster. The type 'SystemAssigned, includes a system created identity. The type 'None' means no identity is assigned to the connected cluster.
           *
           * @schema #/definitions/ConnectedClusterIdentity#type
           */
          readonly type: ConnectedClusterIdentityType;

        }

        /**
         * Properties of the connected cluster.
         *
         * @schema #/definitions/ConnectedClusterProperties
         */
        export interface ConnectedClusterProperties {
          /**
           * Base64 encoded public certificate used by the agent to do the initial handshake to the backend services in Azure.
           *
           * @schema #/definitions/ConnectedClusterProperties#agentPublicKeyCertificate
           */
          readonly agentPublicKeyCertificate: string;

          /**
           * The Kubernetes distribution running on this connected cluster.
           *
           * @schema #/definitions/ConnectedClusterProperties#distribution
           */
          readonly distribution?: string;

          /**
           * The infrastructure on which the Kubernetes cluster represented by this connected cluster is running on.
           *
           * @schema #/definitions/ConnectedClusterProperties#infrastructure
           */
          readonly infrastructure?: string;

          /**
           * Provisioning state of the connected cluster resource.
           *
           * @schema #/definitions/ConnectedClusterProperties#provisioningState
           */
          readonly provisioningState?: ConnectedClusterPropertiesProvisioningState;

        }

        /**
         * @schema MicrosoftKubernetesConnectedClustersTags
         */
        export interface MicrosoftKubernetesConnectedClustersTags {
        }

        export enum MicrosoftKubernetesConnectedClustersType {
          "MicrosoftKubernetesConnectedClustersType_MICROSOFT_KUBERNETES_CONNECTED_CLUSTERS" = 'Microsoft.Kubernetes/connectedClusters',
        }

        export enum ConnectedClusterIdentityType {
          NONE = 'None',
          SYSTEM_ASSIGNED = 'SystemAssigned',
        }

        export enum ConnectedClusterPropertiesProvisioningState {
          SUCCEEDED = 'Succeeded',
          FAILED = 'Failed',
          CANCELED = 'Canceled',
          PROVISIONING = 'Provisioning',
          UPDATING = 'Updating',
          DELETING = 'Deleting',
          ACCEPTED = 'Accepted',
        }

