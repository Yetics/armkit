              // generated by armkit
              import { ArmResource } from '@yetics/armkit-core';
              import { Construct } from 'constructs';

              /**
               * Microsoft.SignalRService/signalR
               *
               * @schema Microsoft.SignalRService.signalR
               */
              export class SignalR extends ArmResource {
                /**
                 * Defines a "Microsoft.SignalRService.signalR" Arm Template object
                 * @param scope the scope in which to define this object
                 * @param name a scope-local name for the object
                 * @param options configuration options
                 */
                public constructor(scope: Construct, name: string, options: SignalROptions) {
                  super(scope, name, {
                    ...options,
                    armResourceType: 'signalR',
                  });
                }
              }

              /**
               * Microsoft.SignalRService/signalR/privateEndpointConnections
               *
               * @schema Microsoft.SignalRService.signalR_privateEndpointConnections
               */
              export class SignalRPrivateEndpointConnections extends ArmResource {
                /**
                 * Defines a "Microsoft.SignalRService.signalR_privateEndpointConnections" Arm Template object
                 * @param scope the scope in which to define this object
                 * @param name a scope-local name for the object
                 * @param options configuration options
                 */
                public constructor(scope: Construct, name: string, options: SignalRPrivateEndpointConnectionsOptions) {
                  super(scope, name, {
                    ...options,
                    armResourceType: 'signalR_privateEndpointConnections',
                  });
                }
              }

              /**
               * Microsoft.SignalRService/signalR
               *
               * @schema Microsoft.SignalRService.signalR
               */
              export interface SignalROptions {
                /**
                 * @schema Microsoft.SignalRService.signalR#apiVersion
                 */
                readonly apiVersion?: MicrosoftSignalRServiceSignalRApiVersion;

                /**
                 * The kind of the service - e.g. "SignalR", or "RawWebSockets" for "Microsoft.SignalRService/SignalR".
                 *
                 * @schema Microsoft.SignalRService.signalR#kind
                 */
                readonly kind?: MicrosoftSignalRServiceSignalRKind;

                /**
                 * The GEO location of the SignalR service. e.g. West US | East US | North Central US | South Central US.
                 *
                 * @schema Microsoft.SignalRService.signalR#location
                 */
                readonly location?: string;

                /**
                 * The name of the SignalR resource.
                 *
                 * @schema Microsoft.SignalRService.signalR#name
                 */
                readonly name: string;

                /**
                 * A class that describes the properties of the SignalR service that should contain more read-only properties than AzSignalR.Models.SignalRCreateOrUpdateProperties
                 *
                 * @schema Microsoft.SignalRService.signalR#properties
                 */
                readonly properties: SignalRProperties;

                /**
                 * @schema Microsoft.SignalRService.signalR#resources
                 */
                readonly resources?: SignalRPrivateEndpointConnectionsChildResource[];

                /**
                 * The billing information of the SignalR resource.
                 *
                 * @schema Microsoft.SignalRService.signalR#sku
                 */
                readonly sku?: ResourceSku;

                /**
                 * Tags of the service which is a list of key value pairs that describe the resource.
                 *
                 * @schema Microsoft.SignalRService.signalR#tags
                 */
                readonly tags?: MicrosoftSignalRServiceSignalRTags;

                /**
                 * @schema Microsoft.SignalRService.signalR#type
                 */
                readonly type: MicrosoftSignalRServiceSignalRType;

              }

              /**
               * Microsoft.SignalRService/signalR/privateEndpointConnections
               *
               * @schema Microsoft.SignalRService.signalR_privateEndpointConnections
               */
              export interface SignalRPrivateEndpointConnectionsOptions {
                /**
                 * @schema Microsoft.SignalRService.signalR_privateEndpointConnections#apiVersion
                 */
                readonly apiVersion?: MicrosoftSignalRServiceSignalRPrivateEndpointConnectionsApiVersion;

                /**
                 * The name of the private endpoint connection associated with the SignalR resource.
                 *
                 * @schema Microsoft.SignalRService.signalR_privateEndpointConnections#name
                 */
                readonly name: string;

                /**
                 * Private endpoint connection properties
                 *
                 * @schema Microsoft.SignalRService.signalR_privateEndpointConnections#properties
                 */
                readonly properties: PrivateEndpointConnectionProperties;

                /**
                 * @schema Microsoft.SignalRService.signalR_privateEndpointConnections#type
                 */
                readonly type: MicrosoftSignalRServiceSignalRPrivateEndpointConnectionsType;

              }

              export enum MicrosoftSignalRServiceSignalRApiVersion {
                "MicrosoftSignalRServiceSignalRApiVersion_2020_05_01" = '2020-05-01',
              }

              export enum MicrosoftSignalRServiceSignalRKind {
                SIGNAL_R = 'SignalR',
                RAW_WEB_SOCKETS = 'RawWebSockets',
              }

              /**
               * A class that describes the properties of the SignalR service that should contain more read-only properties than AzSignalR.Models.SignalRCreateOrUpdateProperties
               *
               * @schema #/definitions/SignalRProperties
               */
              export interface SignalRProperties {
                /**
                 * Cross-Origin Resource Sharing (CORS) settings.
                 *
                 * @schema #/definitions/SignalRProperties#cors
                 */
                readonly cors?: SignalRCorsSettings;

                /**
                 * List of SignalR featureFlags. e.g. ServiceMode.

FeatureFlags that are not included in the parameters for the update operation will not be modified.
And the response will only include featureFlags that are explicitly set. 
When a featureFlag is not explicitly set, SignalR service will use its globally default value. 
But keep in mind, the default value doesn't mean "false". It varies in terms of different FeatureFlags.
                 *
                 * @schema #/definitions/SignalRProperties#features
                 */
                readonly features?: SignalRFeature[];

                /**
                 * Network ACLs for SignalR
                 *
                 * @schema #/definitions/SignalRProperties#networkACLs
                 */
                readonly networkACLs?: SignalRNetworkAcLs;

                /**
                 * The settings for the Upstream when the Azure SignalR is in server-less mode.
                 *
                 * @schema #/definitions/SignalRProperties#upstream
                 */
                readonly upstream?: ServerlessUpstreamSettings;

              }

              /**
               * Microsoft.SignalRService/signalR/privateEndpointConnections
               *
               * @schema #/definitions/signalR_privateEndpointConnections_childResource
               */
              export interface SignalRPrivateEndpointConnectionsChildResource {
                /**
                 * @schema #/definitions/signalR_privateEndpointConnections_childResource#apiVersion
                 */
                readonly apiVersion: SignalRPrivateEndpointConnectionsChildResourceApiVersion;

                /**
                 * The name of the private endpoint connection associated with the SignalR resource.
                 *
                 * @schema #/definitions/signalR_privateEndpointConnections_childResource#name
                 */
                readonly name: string;

                /**
                 * Private endpoint connection properties
                 *
                 * @schema #/definitions/signalR_privateEndpointConnections_childResource#properties
                 */
                readonly properties: PrivateEndpointConnectionProperties;

                /**
                 * @schema #/definitions/signalR_privateEndpointConnections_childResource#type
                 */
                readonly type: SignalRPrivateEndpointConnectionsChildResourceType;

              }

              /**
               * The billing information of the SignalR resource.
               *
               * @schema #/definitions/ResourceSku
               */
              export interface ResourceSku {
                /**
                 * Optional, integer. The unit count of SignalR resource. 1 by default.

If present, following values are allowed:
    Free: 1
    Standard: 1,2,5,10,20,50,100
                 *
                 * @schema #/definitions/ResourceSku#capacity
                 */
                readonly capacity?: number;

                /**
                 * The name of the SKU. Required.

Allowed values: Standard_S1, Free_F1
                 *
                 * @schema #/definitions/ResourceSku#name
                 */
                readonly name: string;

                /**
                 * Optional tier of this particular SKU. 'Standard' or 'Free'. 

`Basic` is deprecated, use `Standard` instead.
                 *
                 * @schema #/definitions/ResourceSku#tier
                 */
                readonly tier?: ResourceSkuTier;

              }

              /**
               * @schema MicrosoftSignalRServiceSignalRTags
               */
              export interface MicrosoftSignalRServiceSignalRTags {
              }

              export enum MicrosoftSignalRServiceSignalRType {
                "MicrosoftSignalRServiceSignalRType_MICROSOFT_SIGNAL_R_SERVICE_SIGNAL_R" = 'Microsoft.SignalRService/signalR',
              }

              export enum MicrosoftSignalRServiceSignalRPrivateEndpointConnectionsApiVersion {
                "MicrosoftSignalRServiceSignalRPrivateEndpointConnectionsApiVersion_2020_05_01" = '2020-05-01',
              }

              /**
               * Private endpoint connection properties
               *
               * @schema #/definitions/PrivateEndpointConnectionProperties
               */
              export interface PrivateEndpointConnectionProperties {
                /**
                 * Private endpoint
                 *
                 * @schema #/definitions/PrivateEndpointConnectionProperties#privateEndpoint
                 */
                readonly privateEndpoint?: PrivateEndpoint;

                /**
                 * Connection state of the private endpoint connection
                 *
                 * @schema #/definitions/PrivateEndpointConnectionProperties#privateLinkServiceConnectionState
                 */
                readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;

              }

              export enum MicrosoftSignalRServiceSignalRPrivateEndpointConnectionsType {
                "MicrosoftSignalRServiceSignalRPrivateEndpointConnectionsType_MICROSOFT_SIGNAL_R_SERVICE_SIGNAL_R_PRIVATE_ENDPOINT_CONNECTIONS" = 'Microsoft.SignalRService/signalR/privateEndpointConnections',
              }

              /**
               * Cross-Origin Resource Sharing (CORS) settings.
               *
               * @schema #/definitions/SignalRCorsSettings
               */
              export interface SignalRCorsSettings {
                /**
                 * Gets or sets the list of origins that should be allowed to make cross-origin calls (for example: http://example.com:12345). Use "*" to allow all. If omitted, allow all by default.
                 *
                 * @schema #/definitions/SignalRCorsSettings#allowedOrigins
                 */
                readonly allowedOrigins?: string[];

              }

              /**
               * Feature of a SignalR resource, which controls the SignalR runtime behavior.
               *
               * @schema #/definitions/SignalRFeature
               */
              export interface SignalRFeature {
                /**
                 * FeatureFlags is the supported features of Azure SignalR service.
- ServiceMode: Flag for backend server for SignalR service. Values allowed: "Default": have your own backend server; "Serverless": your application doesn't have a backend server; "Classic": for backward compatibility. Support both Default and Serverless mode but not recommended; "PredefinedOnly": for future use.
- EnableConnectivityLogs: "true"/"false", to enable/disable the connectivity log category respectively.
                 *
                 * @schema #/definitions/SignalRFeature#flag
                 */
                readonly flag: SignalRFeatureFlag;

                /**
                 * Optional properties related to this feature.
                 *
                 * @schema #/definitions/SignalRFeature#properties
                 */
                readonly properties?: SignalRFeatureProperties;

                /**
                 * Value of the feature flag. See Azure SignalR service document https://docs.microsoft.com/azure/azure-signalr/ for allowed values.
                 *
                 * @schema #/definitions/SignalRFeature#value
                 */
                readonly value: string;

              }

              /**
               * Network ACLs for SignalR
               *
               * @schema #/definitions/SignalRNetworkACLs
               */
              export interface SignalRNetworkAcLs {
                /**
                 * Default action when no other rule matches.
                 *
                 * @schema #/definitions/SignalRNetworkACLs#defaultAction
                 */
                readonly defaultAction?: SignalRNetworkAcLsDefaultAction;

                /**
                 * ACLs for requests from private endpoints
                 *
                 * @schema #/definitions/SignalRNetworkACLs#privateEndpoints
                 */
                readonly privateEndpoints?: PrivateEndpointAcl[];

                /**
                 * Network ACL
                 *
                 * @schema #/definitions/SignalRNetworkACLs#publicNetwork
                 */
                readonly publicNetwork?: NetworkAcl;

              }

              /**
               * The settings for the Upstream when the Azure SignalR is in server-less mode.
               *
               * @schema #/definitions/ServerlessUpstreamSettings
               */
              export interface ServerlessUpstreamSettings {
                /**
                 * Gets or sets the list of Upstream URL templates. Order matters, and the first matching template takes effects.
                 *
                 * @schema #/definitions/ServerlessUpstreamSettings#templates
                 */
                readonly templates?: UpstreamTemplate[];

              }

              export enum SignalRPrivateEndpointConnectionsChildResourceApiVersion {
                "SignalRPrivateEndpointConnectionsChildResourceApiVersion_2020_05_01" = '2020-05-01',
              }

              export enum SignalRPrivateEndpointConnectionsChildResourceType {
                PRIVATE_ENDPOINT_CONNECTIONS = 'privateEndpointConnections',
              }

              export enum ResourceSkuTier {
                FREE = 'Free',
                BASIC = 'Basic',
                STANDARD = 'Standard',
                PREMIUM = 'Premium',
              }

              /**
               * Private endpoint
               *
               * @schema #/definitions/PrivateEndpoint
               */
              export interface PrivateEndpoint {
                /**
                 * Full qualified Id of the private endpoint
                 *
                 * @schema #/definitions/PrivateEndpoint#id
                 */
                readonly id?: string;

              }

              /**
               * Connection state of the private endpoint connection
               *
               * @schema #/definitions/PrivateLinkServiceConnectionState
               */
              export interface PrivateLinkServiceConnectionState {
                /**
                 * A message indicating if changes on the service provider require any updates on the consumer.
                 *
                 * @schema #/definitions/PrivateLinkServiceConnectionState#actionsRequired
                 */
                readonly actionsRequired?: string;

                /**
                 * The reason for approval/rejection of the connection.
                 *
                 * @schema #/definitions/PrivateLinkServiceConnectionState#description
                 */
                readonly description?: string;

                /**
                 * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
                 *
                 * @schema #/definitions/PrivateLinkServiceConnectionState#status
                 */
                readonly status?: PrivateLinkServiceConnectionStateStatus;

              }

              export enum SignalRFeatureFlag {
                SERVICE_MODE = 'ServiceMode',
                ENABLE_CONNECTIVITY_LOGS = 'EnableConnectivityLogs',
                ENABLE_MESSAGING_LOGS = 'EnableMessagingLogs',
              }

              /**
               * @schema #/definitions/signalRFeatureProperties
               */
              export interface SignalRFeatureProperties {
              }

              export enum SignalRNetworkAcLsDefaultAction {
                ALLOW = 'Allow',
                DENY = 'Deny',
              }

              /**
               * ACL for a private endpoint
               *
               * @schema #/definitions/PrivateEndpointACL
               */
              export interface PrivateEndpointAcl {
                /**
                 * Allowed request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
                 *
                 * @schema #/definitions/PrivateEndpointACL#allow
                 */
                readonly allow?: PrivateEndpointAclAllow[];

                /**
                 * Denied request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
                 *
                 * @schema #/definitions/PrivateEndpointACL#deny
                 */
                readonly deny?: PrivateEndpointAclDeny[];

                /**
                 * Name of the private endpoint connection
                 *
                 * @schema #/definitions/PrivateEndpointACL#name
                 */
                readonly name: string;

              }

              /**
               * Network ACL
               *
               * @schema #/definitions/NetworkACL
               */
              export interface NetworkAcl {
                /**
                 * Allowed request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
                 *
                 * @schema #/definitions/NetworkACL#allow
                 */
                readonly allow?: NetworkAclAllow[];

                /**
                 * Denied request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
                 *
                 * @schema #/definitions/NetworkACL#deny
                 */
                readonly deny?: NetworkAclDeny[];

              }

              /**
               * Upstream template item settings. It defines the Upstream URL of the incoming requests.
The template defines the pattern of the event, the hub or the category of the incoming request that matches current URL template.
               *
               * @schema #/definitions/UpstreamTemplate
               */
              export interface UpstreamTemplate {
                /**
                 * Gets or sets the matching pattern for category names. If not set, it matches any category.
There are 3 kind of patterns supported:
    1. "*", it to matches any category name
    2. Combine multiple categories with ",", for example "connections,messages", it matches category "connections" and "messages"
    3. The single category name, for example, "connections", it matches the category "connections"
                 *
                 * @schema #/definitions/UpstreamTemplate#categoryPattern
                 */
                readonly categoryPattern?: string;

                /**
                 * Gets or sets the matching pattern for event names. If not set, it matches any event.
There are 3 kind of patterns supported:
    1. "*", it to matches any event name
    2. Combine multiple events with ",", for example "connect,disconnect", it matches event "connect" and "disconnect"
    3. The single event name, for example, "connect", it matches "connect"
                 *
                 * @schema #/definitions/UpstreamTemplate#eventPattern
                 */
                readonly eventPattern?: string;

                /**
                 * Gets or sets the matching pattern for hub names. If not set, it matches any hub.
There are 3 kind of patterns supported:
    1. "*", it to matches any hub name
    2. Combine multiple hubs with ",", for example "hub1,hub2", it matches "hub1" and "hub2"
    3. The single hub name, for example, "hub1", it matches "hub1"
                 *
                 * @schema #/definitions/UpstreamTemplate#hubPattern
                 */
                readonly hubPattern?: string;

                /**
                 * Gets or sets the Upstream URL template. You can use 3 predefined parameters {hub}, {category} {event} inside the template, the value of the Upstream URL is dynamically calculated when the client request comes in.
For example, if the urlTemplate is `http://example.com/{hub}/api/{event}`, with a client request from hub `chat` connects, it will first POST to this URL: `http://example.com/chat/api/connect`.
                 *
                 * @schema #/definitions/UpstreamTemplate#urlTemplate
                 */
                readonly urlTemplate: string;

              }

              export enum PrivateLinkServiceConnectionStateStatus {
                PENDING = 'Pending',
                APPROVED = 'Approved',
                REJECTED = 'Rejected',
                DISCONNECTED = 'Disconnected',
              }

              export enum PrivateEndpointAclAllow {
                CLIENT_CONNECTION = 'ClientConnection',
                SERVER_CONNECTION = 'ServerConnection',
                RESTAPI = 'RESTAPI',
              }

              export enum PrivateEndpointAclDeny {
                CLIENT_CONNECTION = 'ClientConnection',
                SERVER_CONNECTION = 'ServerConnection',
                RESTAPI = 'RESTAPI',
              }

              export enum NetworkAclAllow {
                CLIENT_CONNECTION = 'ClientConnection',
                SERVER_CONNECTION = 'ServerConnection',
                RESTAPI = 'RESTAPI',
              }

              export enum NetworkAclDeny {
                CLIENT_CONNECTION = 'ClientConnection',
                SERVER_CONNECTION = 'ServerConnection',
                RESTAPI = 'RESTAPI',
              }

