      // generated by armkit
      import { ArmResource } from '@yetics/armkit-core';
      import { Construct } from 'constructs';

      /**
       * Microsoft.Confluent/organizations
       *
       * @schema Microsoft.Confluent.organizations
       */
      export class Organizations extends ArmResource {
        /**
         * Defines a "Microsoft.Confluent.organizations" Arm Template object
         * @param scope the scope in which to define this object
         * @param name a scope-local name for the object
         * @param options configuration options
         */
        public constructor(scope: Construct, name: string, options: OrganizationsOptions) {
          super(scope, name, {
            ...options,
            armResourceType: 'organizations',
          });
        }
      }

      /**
       * Microsoft.Confluent/organizations
       *
       * @schema Microsoft.Confluent.organizations
       */
      export interface OrganizationsOptions {
        /**
         * @schema Microsoft.Confluent.organizations#apiVersion
         */
        readonly apiVersion?: MicrosoftConfluentOrganizationsApiVersion;

        /**
         * Location of Organization resource
         *
         * @schema Microsoft.Confluent.organizations#location
         */
        readonly location?: string;

        /**
         * Organization resource name
         *
         * @schema Microsoft.Confluent.organizations#name
         */
        readonly name: string;

        /**
         * Organization resource properties
         *
         * @schema Microsoft.Confluent.organizations#properties
         */
        readonly properties: OrganizationResourcePropertiesModel;

        /**
         * Organization resource tags
         *
         * @schema Microsoft.Confluent.organizations#tags
         */
        readonly tags?: MicrosoftConfluentOrganizationsTags;

        /**
         * @schema Microsoft.Confluent.organizations#type
         */
        readonly type: MicrosoftConfluentOrganizationsType;

      }

      export enum MicrosoftConfluentOrganizationsApiVersion {
        "MicrosoftConfluentOrganizationsApiVersion_2020_03_01" = '2020-03-01',
      }

      /**
       * Organization resource properties
       *
       * @schema #/definitions/OrganizationResourcePropertiesModel
       */
      export interface OrganizationResourcePropertiesModel {
        /**
         * Confluent offer detail
         *
         * @schema #/definitions/OrganizationResourcePropertiesModel#offerDetail
         */
        readonly offerDetail?: OrganizationResourcePropertiesOfferDetail;

        /**
         * Subscriber detail
         *
         * @schema #/definitions/OrganizationResourcePropertiesModel#userDetail
         */
        readonly userDetail?: OrganizationResourcePropertiesUserDetail;

      }

      /**
       * @schema MicrosoftConfluentOrganizationsTags
       */
      export interface MicrosoftConfluentOrganizationsTags {
      }

      export enum MicrosoftConfluentOrganizationsType {
        "MicrosoftConfluentOrganizationsType_MICROSOFT_CONFLUENT_ORGANIZATIONS" = 'Microsoft.Confluent/organizations',
      }

      /**
       * Confluent offer detail
       *
       * @schema #/definitions/OrganizationResourcePropertiesOfferDetail
       */
      export interface OrganizationResourcePropertiesOfferDetail {
        /**
         * Offer Id
         *
         * @schema #/definitions/OrganizationResourcePropertiesOfferDetail#id
         */
        readonly id?: string;

        /**
         * Offer Plan Id
         *
         * @schema #/definitions/OrganizationResourcePropertiesOfferDetail#planId
         */
        readonly planId?: string;

        /**
         * Offer Plan Name
         *
         * @schema #/definitions/OrganizationResourcePropertiesOfferDetail#planName
         */
        readonly planName?: string;

        /**
         * Publisher Id
         *
         * @schema #/definitions/OrganizationResourcePropertiesOfferDetail#publisherId
         */
        readonly publisherId?: string;

        /**
         * Offer Plan Term unit
         *
         * @schema #/definitions/OrganizationResourcePropertiesOfferDetail#termUnit
         */
        readonly termUnit?: string;

      }

      /**
       * Subscriber detail
       *
       * @schema #/definitions/OrganizationResourcePropertiesUserDetail
       */
      export interface OrganizationResourcePropertiesUserDetail {
        /**
         * Email address
         *
         * @schema #/definitions/OrganizationResourcePropertiesUserDetail#emailAddress
         */
        readonly emailAddress?: OrganizationResourcePropertiesUserDetailEmailAddressPattern;

        /**
         * First name
         *
         * @schema #/definitions/OrganizationResourcePropertiesUserDetail#firstName
         */
        readonly firstName?: string;

        /**
         * Last name
         *
         * @schema #/definitions/OrganizationResourcePropertiesUserDetail#lastName
         */
        readonly lastName?: string;

      }

      /**
       * @schema #/definitions/organizationResourcePropertiesUserDetailEmailAddress
       */
      export class OrganizationResourcePropertiesUserDetailEmailAddressPattern {
        public static pattern(value: string): string {
          return value;
        }
      }

