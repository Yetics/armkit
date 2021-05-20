    // generated by armkit
    import { ArmResource } from '@yetics/armkit-core';
    import { Construct } from 'constructs';

    /**
     * Microsoft.Cache/redisEnterprise
     *
     * @schema Microsoft.Cache.redisEnterprise
     */
    export class RedisEnterprise extends ArmResource {
      /**
       * Defines a "Microsoft.Cache.redisEnterprise" Arm Template object
       * @param scope the scope in which to define this object
       * @param name a scope-local name for the object
       * @param options configuration options
       */
      public constructor(scope: Construct, name: string, options: RedisEnterpriseOptions) {
        super(scope, name, {
          ...options,
          armResourceType: 'redisEnterprise',
        });
      }
    }

    /**
     * Microsoft.Cache/redisEnterprise/databases
     *
     * @schema Microsoft.Cache.redisEnterprise_databases
     */
    export class RedisEnterpriseDatabases extends ArmResource {
      /**
       * Defines a "Microsoft.Cache.redisEnterprise_databases" Arm Template object
       * @param scope the scope in which to define this object
       * @param name a scope-local name for the object
       * @param options configuration options
       */
      public constructor(scope: Construct, name: string, options: RedisEnterpriseDatabasesOptions) {
        super(scope, name, {
          ...options,
          armResourceType: 'redisEnterprise_databases',
        });
      }
    }

    /**
     * Microsoft.Cache/redisEnterprise/privateEndpointConnections
     *
     * @schema Microsoft.Cache.redisEnterprise_privateEndpointConnections
     */
    export class RedisEnterprisePrivateEndpointConnections extends ArmResource {
      /**
       * Defines a "Microsoft.Cache.redisEnterprise_privateEndpointConnections" Arm Template object
       * @param scope the scope in which to define this object
       * @param name a scope-local name for the object
       * @param options configuration options
       */
      public constructor(scope: Construct, name: string, options: RedisEnterprisePrivateEndpointConnectionsOptions) {
        super(scope, name, {
          ...options,
          armResourceType: 'redisEnterprise_privateEndpointConnections',
        });
      }
    }

    /**
     * Microsoft.Cache/redisEnterprise
     *
     * @schema Microsoft.Cache.redisEnterprise
     */
    export interface RedisEnterpriseOptions {
      /**
       * @schema Microsoft.Cache.redisEnterprise#apiVersion
       */
      readonly apiVersion?: MicrosoftCacheRedisEnterpriseApiVersion;

      /**
       * The geo-location where the resource lives
       *
       * @schema Microsoft.Cache.redisEnterprise#location
       */
      readonly location: string;

      /**
       * The name of the RedisEnterprise cluster.
       *
       * @schema Microsoft.Cache.redisEnterprise#name
       */
      readonly name: string;

      /**
       * Properties of RedisEnterprise clusters, as opposed to general resource properties like location, tags
       *
       * @schema Microsoft.Cache.redisEnterprise#properties
       */
      readonly properties: ClusterProperties;

      /**
       * @schema Microsoft.Cache.redisEnterprise#resources
       */
      readonly resources?: MicrosoftCacheRedisEnterpriseResources[];

      /**
       * SKU parameters supplied to the create RedisEnterprise operation.
       *
       * @schema Microsoft.Cache.redisEnterprise#sku
       */
      readonly sku: Sku;

      /**
       * Resource tags.
       *
       * @schema Microsoft.Cache.redisEnterprise#tags
       */
      readonly tags?: MicrosoftCacheRedisEnterpriseTags;

      /**
       * @schema Microsoft.Cache.redisEnterprise#type
       */
      readonly type: MicrosoftCacheRedisEnterpriseType;

      /**
       * The Availability Zones where this cluster will be deployed.
       *
       * @schema Microsoft.Cache.redisEnterprise#zones
       */
      readonly zones?: string[];

    }

    /**
     * Microsoft.Cache/redisEnterprise/databases
     *
     * @schema Microsoft.Cache.redisEnterprise_databases
     */
    export interface RedisEnterpriseDatabasesOptions {
      /**
       * @schema Microsoft.Cache.redisEnterprise_databases#apiVersion
       */
      readonly apiVersion?: MicrosoftCacheRedisEnterpriseDatabasesApiVersion;

      /**
       * The name of the database.
       *
       * @schema Microsoft.Cache.redisEnterprise_databases#name
       */
      readonly name: string;

      /**
       * Properties of RedisEnterprise databases, as opposed to general resource properties like location, tags
       *
       * @schema Microsoft.Cache.redisEnterprise_databases#properties
       */
      readonly properties: DatabaseProperties;

      /**
       * @schema Microsoft.Cache.redisEnterprise_databases#type
       */
      readonly type: MicrosoftCacheRedisEnterpriseDatabasesType;

    }

    /**
     * Microsoft.Cache/redisEnterprise/privateEndpointConnections
     *
     * @schema Microsoft.Cache.redisEnterprise_privateEndpointConnections
     */
    export interface RedisEnterprisePrivateEndpointConnectionsOptions {
      /**
       * @schema Microsoft.Cache.redisEnterprise_privateEndpointConnections#apiVersion
       */
      readonly apiVersion?: MicrosoftCacheRedisEnterprisePrivateEndpointConnectionsApiVersion;

      /**
       * The name of the private endpoint connection associated with the Azure resource
       *
       * @schema Microsoft.Cache.redisEnterprise_privateEndpointConnections#name
       */
      readonly name: string;

      /**
       * Properties of the PrivateEndpointConnectProperties.
       *
       * @schema Microsoft.Cache.redisEnterprise_privateEndpointConnections#properties
       */
      readonly properties: PrivateEndpointConnectionProperties;

      /**
       * @schema Microsoft.Cache.redisEnterprise_privateEndpointConnections#type
       */
      readonly type: MicrosoftCacheRedisEnterprisePrivateEndpointConnectionsType;

    }

    export enum MicrosoftCacheRedisEnterpriseApiVersion {
      "MicrosoftCacheRedisEnterpriseApiVersion_2021_03_01" = '2021-03-01',
    }

    /**
     * Properties of RedisEnterprise clusters, as opposed to general resource properties like location, tags
     *
     * @schema #/definitions/ClusterProperties
     */
    export interface ClusterProperties {
      /**
       * The minimum TLS version for the cluster to support, e.g. '1.2'.
       *
       * @schema #/definitions/ClusterProperties#minimumTlsVersion
       */
      readonly minimumTlsVersion?: ClusterPropertiesMinimumTlsVersion;

    }

    /**
     * @schema MicrosoftCacheRedisEnterpriseResources
     */
    export class MicrosoftCacheRedisEnterpriseResources {
      public static fromRedisEnterpriseDatabasesChildResource(value: RedisEnterpriseDatabasesChildResource): MicrosoftCacheRedisEnterpriseResources {
        return new MicrosoftCacheRedisEnterpriseResources(value);
      }
      public static fromRedisEnterprisePrivateEndpointConnectionsChildResource(value: RedisEnterprisePrivateEndpointConnectionsChildResource): MicrosoftCacheRedisEnterpriseResources {
        return new MicrosoftCacheRedisEnterpriseResources(value);
      }
      private constructor(value: any) {
        Object.defineProperty(this, 'resolve', { value: () => value });
      }
    }

    /**
     * SKU parameters supplied to the create RedisEnterprise operation.
     *
     * @schema #/definitions/Sku
     */
    export interface Sku {
      /**
       * The size of the RedisEnterprise cluster. Defaults to 2 or 3 depending on SKU. Valid values are (2, 4, 6, ...) for Enterprise SKUs and (3, 9, 15, ...) for Flash SKUs.
       *
       * @default 2 or 3 depending on SKU. Valid values are (2, 4, 6, ...) for Enterprise SKUs and (3, 9, 15, ...) for Flash SKUs.
       * @schema #/definitions/Sku#capacity
       */
      readonly capacity?: number;

      /**
       * The type of RedisEnterprise cluster to deploy. Possible values: (Enterprise_E10, EnterpriseFlash_F300 etc.).
       *
       * @schema #/definitions/Sku#name
       */
      readonly name: SkuName;

    }

    /**
     * @schema MicrosoftCacheRedisEnterpriseTags
     */
    export interface MicrosoftCacheRedisEnterpriseTags {
    }

    export enum MicrosoftCacheRedisEnterpriseType {
      "MicrosoftCacheRedisEnterpriseType_MICROSOFT_CACHE_REDIS_ENTERPRISE" = 'Microsoft.Cache/redisEnterprise',
    }

    export enum MicrosoftCacheRedisEnterpriseDatabasesApiVersion {
      "MicrosoftCacheRedisEnterpriseDatabasesApiVersion_2021_03_01" = '2021-03-01',
    }

    /**
     * Properties of RedisEnterprise databases, as opposed to general resource properties like location, tags
     *
     * @schema #/definitions/DatabaseProperties
     */
    export interface DatabaseProperties {
      /**
       * Specifies whether redis clients can connect using TLS-encrypted or plaintext redis protocols. Default is TLS-encrypted.
       *
       * @default TLS-encrypted.
       * @schema #/definitions/DatabaseProperties#clientProtocol
       */
      readonly clientProtocol?: DatabasePropertiesClientProtocol;

      /**
       * Clustering policy - default is OSSCluster. Specified at create time.
       *
       * @schema #/definitions/DatabaseProperties#clusteringPolicy
       */
      readonly clusteringPolicy?: DatabasePropertiesClusteringPolicy;

      /**
       * Redis eviction policy - default is VolatileLRU.
       *
       * @schema #/definitions/DatabaseProperties#evictionPolicy
       */
      readonly evictionPolicy?: DatabasePropertiesEvictionPolicy;

      /**
       * Optional set of redis modules to enable in this database - modules can only be added at creation time.
       *
       * @schema #/definitions/DatabaseProperties#modules
       */
      readonly modules?: Module[];

      /**
       * Persistence-related configuration for the RedisEnterprise database
       *
       * @schema #/definitions/DatabaseProperties#persistence
       */
      readonly persistence?: Persistence;

      /**
       * TCP port of the database endpoint. Specified at create time. Defaults to an available port.
       *
       * @default an available port.
       * @schema #/definitions/DatabaseProperties#port
       */
      readonly port?: number;

    }

    export enum MicrosoftCacheRedisEnterpriseDatabasesType {
      "MicrosoftCacheRedisEnterpriseDatabasesType_MICROSOFT_CACHE_REDIS_ENTERPRISE_DATABASES" = 'Microsoft.Cache/redisEnterprise/databases',
    }

    export enum MicrosoftCacheRedisEnterprisePrivateEndpointConnectionsApiVersion {
      "MicrosoftCacheRedisEnterprisePrivateEndpointConnectionsApiVersion_2021_03_01" = '2021-03-01',
    }

    /**
     * Properties of the PrivateEndpointConnectProperties.
     *
     * @schema #/definitions/PrivateEndpointConnectionProperties
     */
    export interface PrivateEndpointConnectionProperties {
      /**
       * The Private Endpoint resource.
       *
       * @schema #/definitions/PrivateEndpointConnectionProperties#privateEndpoint
       */
      readonly privateEndpoint?: PrivateEndpoint;

      /**
       * A collection of information about the state of the connection between service consumer and provider.
       *
       * @schema #/definitions/PrivateEndpointConnectionProperties#privateLinkServiceConnectionState
       */
      readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;

      /**
       * The provisioning state of the private endpoint connection resource.
       *
       * @schema #/definitions/PrivateEndpointConnectionProperties#provisioningState
       */
      readonly provisioningState?: PrivateEndpointConnectionPropertiesProvisioningState;

    }

    export enum MicrosoftCacheRedisEnterprisePrivateEndpointConnectionsType {
      "MicrosoftCacheRedisEnterprisePrivateEndpointConnectionsType_MICROSOFT_CACHE_REDIS_ENTERPRISE_PRIVATE_ENDPOINT_CONNECTIONS" = 'Microsoft.Cache/redisEnterprise/privateEndpointConnections',
    }

    export enum ClusterPropertiesMinimumTlsVersion {
      "ClusterPropertiesMinimumTlsVersion_1_0" = '1.0',
      "ClusterPropertiesMinimumTlsVersion_1_1" = '1.1',
      "ClusterPropertiesMinimumTlsVersion_1_2" = '1.2',
    }

    /**
     * Microsoft.Cache/redisEnterprise/databases
     *
     * @schema #/definitions/redisEnterprise_databases_childResource
     */
    export interface RedisEnterpriseDatabasesChildResource {
      /**
       * @schema #/definitions/redisEnterprise_databases_childResource#apiVersion
       */
      readonly apiVersion: RedisEnterpriseDatabasesChildResourceApiVersion;

      /**
       * The name of the database.
       *
       * @schema #/definitions/redisEnterprise_databases_childResource#name
       */
      readonly name: string;

      /**
       * Properties of RedisEnterprise databases, as opposed to general resource properties like location, tags
       *
       * @schema #/definitions/redisEnterprise_databases_childResource#properties
       */
      readonly properties: DatabaseProperties;

      /**
       * @schema #/definitions/redisEnterprise_databases_childResource#type
       */
      readonly type: RedisEnterpriseDatabasesChildResourceType;

    }

    /**
     * Microsoft.Cache/redisEnterprise/privateEndpointConnections
     *
     * @schema #/definitions/redisEnterprise_privateEndpointConnections_childResource
     */
    export interface RedisEnterprisePrivateEndpointConnectionsChildResource {
      /**
       * @schema #/definitions/redisEnterprise_privateEndpointConnections_childResource#apiVersion
       */
      readonly apiVersion: RedisEnterprisePrivateEndpointConnectionsChildResourceApiVersion;

      /**
       * The name of the private endpoint connection associated with the Azure resource
       *
       * @schema #/definitions/redisEnterprise_privateEndpointConnections_childResource#name
       */
      readonly name: string;

      /**
       * Properties of the PrivateEndpointConnectProperties.
       *
       * @schema #/definitions/redisEnterprise_privateEndpointConnections_childResource#properties
       */
      readonly properties: PrivateEndpointConnectionProperties;

      /**
       * @schema #/definitions/redisEnterprise_privateEndpointConnections_childResource#type
       */
      readonly type: RedisEnterprisePrivateEndpointConnectionsChildResourceType;

    }

    export enum SkuName {
      "SkuName_ENTERPRISE_E10" = 'Enterprise_E10',
      "SkuName_ENTERPRISE_E20" = 'Enterprise_E20',
      "SkuName_ENTERPRISE_E50" = 'Enterprise_E50',
      "SkuName_ENTERPRISE_E100" = 'Enterprise_E100',
      "SkuName_ENTERPRISE_FLASH_F300" = 'EnterpriseFlash_F300',
      "SkuName_ENTERPRISE_FLASH_F700" = 'EnterpriseFlash_F700',
      "SkuName_ENTERPRISE_FLASH_F1500" = 'EnterpriseFlash_F1500',
    }

    export enum DatabasePropertiesClientProtocol {
      ENCRYPTED = 'Encrypted',
      PLAINTEXT = 'Plaintext',
    }

    export enum DatabasePropertiesClusteringPolicy {
      ENTERPRISE_CLUSTER = 'EnterpriseCluster',
      OSS_CLUSTER = 'OSSCluster',
    }

    export enum DatabasePropertiesEvictionPolicy {
      ALL_KEYS_LFU = 'AllKeysLFU',
      ALL_KEYS_LRU = 'AllKeysLRU',
      ALL_KEYS_RANDOM = 'AllKeysRandom',
      VOLATILE_LRU = 'VolatileLRU',
      VOLATILE_LFU = 'VolatileLFU',
      VOLATILE_TTL = 'VolatileTTL',
      VOLATILE_RANDOM = 'VolatileRandom',
      NO_EVICTION = 'NoEviction',
    }

    /**
     * Specifies configuration of a redis module
     *
     * @schema #/definitions/Module
     */
    export interface Module {
      /**
       * Configuration options for the module, e.g. 'ERROR_RATE 0.00 INITIAL_SIZE 400'.
       *
       * @schema #/definitions/Module#args
       */
      readonly args?: string;

      /**
       * The name of the module, e.g. 'RedisBloom', 'RediSearch', 'RedisTimeSeries'
       *
       * @schema #/definitions/Module#name
       */
      readonly name: string;

    }

    /**
     * Persistence-related configuration for the RedisEnterprise database
     *
     * @schema #/definitions/Persistence
     */
    export interface Persistence {
      /**
       * Sets whether AOF is enabled.
       *
       * @schema #/definitions/Persistence#aofEnabled
       */
      readonly aofEnabled?: boolean;

      /**
       * Sets the frequency at which data is written to disk.
       *
       * @schema #/definitions/Persistence#aofFrequency
       */
      readonly aofFrequency?: PersistenceAofFrequency;

      /**
       * Sets whether RDB is enabled.
       *
       * @schema #/definitions/Persistence#rdbEnabled
       */
      readonly rdbEnabled?: boolean;

      /**
       * Sets the frequency at which a snapshot of the database is created.
       *
       * @schema #/definitions/Persistence#rdbFrequency
       */
      readonly rdbFrequency?: PersistenceRdbFrequency;

    }

    /**
     * The Private Endpoint resource.
     *
     * @schema #/definitions/PrivateEndpoint
     */
    export interface PrivateEndpoint {
    }

    /**
     * A collection of information about the state of the connection between service consumer and provider.
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

    export enum PrivateEndpointConnectionPropertiesProvisioningState {
      SUCCEEDED = 'Succeeded',
      CREATING = 'Creating',
      DELETING = 'Deleting',
      FAILED = 'Failed',
    }

    export enum RedisEnterpriseDatabasesChildResourceApiVersion {
      "RedisEnterpriseDatabasesChildResourceApiVersion_2021_03_01" = '2021-03-01',
    }

    export enum RedisEnterpriseDatabasesChildResourceType {
      DATABASES = 'databases',
    }

    export enum RedisEnterprisePrivateEndpointConnectionsChildResourceApiVersion {
      "RedisEnterprisePrivateEndpointConnectionsChildResourceApiVersion_2021_03_01" = '2021-03-01',
    }

    export enum RedisEnterprisePrivateEndpointConnectionsChildResourceType {
      PRIVATE_ENDPOINT_CONNECTIONS = 'privateEndpointConnections',
    }

    export enum PersistenceAofFrequency {
      "PersistenceAofFrequency_1S" = '1s',
      ALWAYS = 'always',
    }

    export enum PersistenceRdbFrequency {
      "PersistenceRdbFrequency_1H" = '1h',
      "PersistenceRdbFrequency_6H" = '6h',
      "PersistenceRdbFrequency_12H" = '12h',
    }

    export enum PrivateLinkServiceConnectionStateStatus {
      PENDING = 'Pending',
      APPROVED = 'Approved',
      REJECTED = 'Rejected',
    }
