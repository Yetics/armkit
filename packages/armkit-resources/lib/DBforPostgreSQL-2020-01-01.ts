      // generated by armkit
      import { ArmResource } from '@yetics/armkit-core';
      import { Construct } from 'constructs';

      /**
       * Microsoft.DBforPostgreSQL/servers/keys
       *
       * @schema Microsoft.DBforPostgreSQL.servers_keys
       */
      export class ServersKeys extends ArmResource {
        /**
         * Defines a "Microsoft.DBforPostgreSQL.servers_keys" Arm Template object
         * @param scope the scope in which to define this object
         * @param name a scope-local name for the object
         * @param options configuration options
         */
        public constructor(scope: Construct, name: string, options: ServersKeysOptions) {
          super(scope, name, {
            ...options,
            armResourceType: 'servers_keys',
          });
        }
      }

      /**
       * Microsoft.DBforPostgreSQL/servers/keys
       *
       * @schema Microsoft.DBforPostgreSQL.servers_keys
       */
      export interface ServersKeysOptions {
        /**
         * @schema Microsoft.DBforPostgreSQL.servers_keys#apiVersion
         */
        readonly apiVersion?: MicrosoftDBforPostgreSqlServersKeysApiVersion;

        /**
         * The name of the PostgreSQL Server key to be operated on (updated or created).
         *
         * @schema Microsoft.DBforPostgreSQL.servers_keys#name
         */
        readonly name: string;

        /**
         * Properties for a key execution.
         *
         * @schema Microsoft.DBforPostgreSQL.servers_keys#properties
         */
        readonly properties: ServerKeyProperties;

        /**
         * @schema Microsoft.DBforPostgreSQL.servers_keys#type
         */
        readonly type: MicrosoftDBforPostgreSqlServersKeysType;

      }

      export enum MicrosoftDBforPostgreSqlServersKeysApiVersion {
        "MicrosoftDBforPostgreSqlServersKeysApiVersion_2020_01_01" = '2020-01-01',
      }

      /**
       * Properties for a key execution.
       *
       * @schema #/definitions/ServerKeyProperties
       */
      export interface ServerKeyProperties {
        /**
         * The key type like 'AzureKeyVault'.
         *
         * @schema #/definitions/ServerKeyProperties#serverKeyType
         */
        readonly serverKeyType: ServerKeyPropertiesServerKeyType;

        /**
         * The URI of the key.
         *
         * @schema #/definitions/ServerKeyProperties#uri
         */
        readonly uri?: string;

      }

      export enum MicrosoftDBforPostgreSqlServersKeysType {
        "MicrosoftDBforPostgreSqlServersKeysType_MICROSOFT_D_BFOR_POSTGRE_SQL_SERVERS_KEYS" = 'Microsoft.DBforPostgreSQL/servers/keys',
      }

      export enum ServerKeyPropertiesServerKeyType {
        AZURE_KEY_VAULT = 'AzureKeyVault',
      }

