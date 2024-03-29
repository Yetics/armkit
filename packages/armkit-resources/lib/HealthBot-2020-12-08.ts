      // generated by armkit
      import { ArmResource } from '@yetics/armkit-core';
      import { Construct } from 'constructs';

      /**
       * Microsoft.HealthBot/healthBots
       *
       * @schema Microsoft.HealthBot.healthBots
       */
      export class HealthBots extends ArmResource {
        /**
         * Defines a "Microsoft.HealthBot.healthBots" Arm Template object
         * @param scope the scope in which to define this object
         * @param name a scope-local name for the object
         * @param options configuration options
         */
        public constructor(scope: Construct, name: string, options: HealthBotsOptions) {
          super(scope, name, {
            ...options,
            armResourceType: 'healthBots',
          });
        }
      }

      /**
       * Microsoft.HealthBot/healthBots
       *
       * @schema Microsoft.HealthBot.healthBots
       */
      export interface HealthBotsOptions {
        /**
         * @schema Microsoft.HealthBot.healthBots#apiVersion
         */
        readonly apiVersion?: MicrosoftHealthBotHealthBotsApiVersion;

        /**
         * The geo-location where the resource lives
         *
         * @schema Microsoft.HealthBot.healthBots#location
         */
        readonly location: string;

        /**
         * The name of the Bot resource.
         *
         * @schema Microsoft.HealthBot.healthBots#name
         */
        readonly name: MicrosoftHealthBotHealthBotsNamePattern;

        /**
         * The properties of a HealthBot. The Health Bot Service is a cloud platform that empowers developers in Healthcare organizations to build and deploy their compliant, AI-powered virtual health assistants and health bots, that help them improve processes and reduce costs.
         *
         * @schema Microsoft.HealthBot.healthBots#properties
         */
        readonly properties: HealthBotProperties;

        /**
         * The resource model definition representing SKU
         *
         * @schema Microsoft.HealthBot.healthBots#sku
         */
        readonly sku: Sku;

        /**
         * Resource tags.
         *
         * @schema Microsoft.HealthBot.healthBots#tags
         */
        readonly tags?: MicrosoftHealthBotHealthBotsTags;

        /**
         * @schema Microsoft.HealthBot.healthBots#type
         */
        readonly type: MicrosoftHealthBotHealthBotsType;

      }

      export enum MicrosoftHealthBotHealthBotsApiVersion {
        "MicrosoftHealthBotHealthBotsApiVersion_2020_12_08" = '2020-12-08',
      }

      /**
       * @schema MicrosoftHealthBotHealthBotsName
       */
      export class MicrosoftHealthBotHealthBotsNamePattern {
        public static pattern(value: string): string {
          return value;
        }
      }

      /**
       * The properties of a HealthBot. The Health Bot Service is a cloud platform that empowers developers in Healthcare organizations to build and deploy their compliant, AI-powered virtual health assistants and health bots, that help them improve processes and reduce costs.
       *
       * @schema #/definitions/HealthBotProperties
       */
      export interface HealthBotProperties {
      }

      /**
       * The resource model definition representing SKU
       *
       * @schema #/definitions/Sku
       */
      export interface Sku {
        /**
         * The name of the HealthBot SKU.
         *
         * @schema #/definitions/Sku#name
         */
        readonly name: SkuName;

      }

      /**
       * @schema MicrosoftHealthBotHealthBotsTags
       */
      export interface MicrosoftHealthBotHealthBotsTags {
      }

      export enum MicrosoftHealthBotHealthBotsType {
        "MicrosoftHealthBotHealthBotsType_MICROSOFT_HEALTH_BOT_HEALTH_BOTS" = 'Microsoft.HealthBot/healthBots',
      }

      export enum SkuName {
        "SkuName_F0" = 'F0',
        "SkuName_S1" = 'S1',
        "SkuName_C0" = 'C0',
      }

