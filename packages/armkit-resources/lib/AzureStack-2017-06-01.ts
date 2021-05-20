    // generated by armkit
    import { ArmResource } from '@yetics/armkit-core';
    import { Construct } from 'constructs';

    /**
     * Microsoft.AzureStack/registrations
     *
     * @schema Microsoft.AzureStack.registrations
     */
    export class Registrations extends ArmResource {
      /**
       * Defines a "Microsoft.AzureStack.registrations" Arm Template object
       * @param scope the scope in which to define this object
       * @param name a scope-local name for the object
       * @param options configuration options
       */
      public constructor(scope: Construct, name: string, options: RegistrationsOptions) {
        super(scope, name, {
          ...options,
          armResourceType: 'registrations',
        });
      }
    }

    /**
     * Microsoft.AzureStack/registrations/customerSubscriptions
     *
     * @schema Microsoft.AzureStack.registrations_customerSubscriptions
     */
    export class RegistrationsCustomerSubscriptions extends ArmResource {
      /**
       * Defines a "Microsoft.AzureStack.registrations_customerSubscriptions" Arm Template object
       * @param scope the scope in which to define this object
       * @param name a scope-local name for the object
       * @param options configuration options
       */
      public constructor(scope: Construct, name: string, options: RegistrationsCustomerSubscriptionsOptions) {
        super(scope, name, {
          ...options,
          armResourceType: 'registrations_customerSubscriptions',
        });
      }
    }

    /**
     * Microsoft.AzureStack/registrations
     *
     * @schema Microsoft.AzureStack.registrations
     */
    export interface RegistrationsOptions {
      /**
       * @schema Microsoft.AzureStack.registrations#apiVersion
       */
      readonly apiVersion?: MicrosoftAzureStackRegistrationsApiVersion;

      /**
       * Location of the resource.
       *
       * @schema Microsoft.AzureStack.registrations#location
       */
      readonly location: MicrosoftAzureStackRegistrationsLocation;

      /**
       * Name of the Azure Stack registration.
       *
       * @schema Microsoft.AzureStack.registrations#name
       */
      readonly name: string;

      /**
       * Properties of the Azure Stack registration resource
       *
       * @schema Microsoft.AzureStack.registrations#properties
       */
      readonly properties: RegistrationParameterProperties;

      /**
       * @schema Microsoft.AzureStack.registrations#resources
       */
      readonly resources?: RegistrationsCustomerSubscriptionsChildResource[];

      /**
       * @schema Microsoft.AzureStack.registrations#type
       */
      readonly type: MicrosoftAzureStackRegistrationsType;

    }

    /**
     * Microsoft.AzureStack/registrations/customerSubscriptions
     *
     * @schema Microsoft.AzureStack.registrations_customerSubscriptions
     */
    export interface RegistrationsCustomerSubscriptionsOptions {
      /**
       * @schema Microsoft.AzureStack.registrations_customerSubscriptions#apiVersion
       */
      readonly apiVersion?: MicrosoftAzureStackRegistrationsCustomerSubscriptionsApiVersion;

      /**
       * The entity tag used for optimistic concurrency when modifying the resource.
       *
       * @schema Microsoft.AzureStack.registrations_customerSubscriptions#etag
       */
      readonly etag?: string;

      /**
       * Name of the product.
       *
       * @schema Microsoft.AzureStack.registrations_customerSubscriptions#name
       */
      readonly name: string;

      /**
       * Customer subscription properties.
       *
       * @schema Microsoft.AzureStack.registrations_customerSubscriptions#properties
       */
      readonly properties: CustomerSubscriptionProperties;

      /**
       * @schema Microsoft.AzureStack.registrations_customerSubscriptions#type
       */
      readonly type: MicrosoftAzureStackRegistrationsCustomerSubscriptionsType;

    }

    export enum MicrosoftAzureStackRegistrationsApiVersion {
      "MicrosoftAzureStackRegistrationsApiVersion_2017_06_01" = '2017-06-01',
    }

    export enum MicrosoftAzureStackRegistrationsLocation {
      GLOBAL = 'global',
    }

    /**
     * Properties of the Azure Stack registration resource
     *
     * @schema #/definitions/RegistrationParameterProperties
     */
    export interface RegistrationParameterProperties {
      /**
       * The token identifying registered Azure Stack
       *
       * @schema #/definitions/RegistrationParameterProperties#registrationToken
       */
      readonly registrationToken: string;

    }

    /**
     * Microsoft.AzureStack/registrations/customerSubscriptions
     *
     * @schema #/definitions/registrations_customerSubscriptions_childResource
     */
    export interface RegistrationsCustomerSubscriptionsChildResource {
      /**
       * @schema #/definitions/registrations_customerSubscriptions_childResource#apiVersion
       */
      readonly apiVersion: RegistrationsCustomerSubscriptionsChildResourceApiVersion;

      /**
       * The entity tag used for optimistic concurrency when modifying the resource.
       *
       * @schema #/definitions/registrations_customerSubscriptions_childResource#etag
       */
      readonly etag?: string;

      /**
       * Name of the product.
       *
       * @schema #/definitions/registrations_customerSubscriptions_childResource#name
       */
      readonly name: string;

      /**
       * Customer subscription properties.
       *
       * @schema #/definitions/registrations_customerSubscriptions_childResource#properties
       */
      readonly properties: CustomerSubscriptionProperties;

      /**
       * @schema #/definitions/registrations_customerSubscriptions_childResource#type
       */
      readonly type: RegistrationsCustomerSubscriptionsChildResourceType;

    }

    export enum MicrosoftAzureStackRegistrationsType {
      "MicrosoftAzureStackRegistrationsType_MICROSOFT_AZURE_STACK_REGISTRATIONS" = 'Microsoft.AzureStack/registrations',
    }

    export enum MicrosoftAzureStackRegistrationsCustomerSubscriptionsApiVersion {
      "MicrosoftAzureStackRegistrationsCustomerSubscriptionsApiVersion_2017_06_01" = '2017-06-01',
    }

    /**
     * Customer subscription properties.
     *
     * @schema #/definitions/CustomerSubscriptionProperties
     */
    export interface CustomerSubscriptionProperties {
      /**
       * Tenant Id.
       *
       * @schema #/definitions/CustomerSubscriptionProperties#tenantId
       */
      readonly tenantId?: string;

    }

    export enum MicrosoftAzureStackRegistrationsCustomerSubscriptionsType {
      "MicrosoftAzureStackRegistrationsCustomerSubscriptionsType_MICROSOFT_AZURE_STACK_REGISTRATIONS_CUSTOMER_SUBSCRIPTIONS" = 'Microsoft.AzureStack/registrations/customerSubscriptions',
    }

    export enum RegistrationsCustomerSubscriptionsChildResourceApiVersion {
      "RegistrationsCustomerSubscriptionsChildResourceApiVersion_2017_06_01" = '2017-06-01',
    }

    export enum RegistrationsCustomerSubscriptionsChildResourceType {
      CUSTOMER_SUBSCRIPTIONS = 'customerSubscriptions',
    }
