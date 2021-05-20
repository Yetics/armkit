      // generated by armkit
      import { ArmResource } from '@yetics/armkit-core';
      import { Construct } from 'constructs';

      /**
       * Microsoft.DomainRegistration/domains
       *
       * @schema Microsoft.DomainRegistration.domains
       */
      export class Domains extends ArmResource {
        /**
         * Defines a "Microsoft.DomainRegistration.domains" Arm Template object
         * @param scope the scope in which to define this object
         * @param name a scope-local name for the object
         * @param options configuration options
         */
        public constructor(scope: Construct, name: string, options: DomainsOptions) {
          super(scope, name, {
            ...options,
            armResourceType: 'domains',
          });
        }
      }

      /**
       * Microsoft.DomainRegistration/domains/domainOwnershipIdentifiers
       *
       * @schema Microsoft.DomainRegistration.domains_domainOwnershipIdentifiers
       */
      export class DomainsDomainOwnershipIdentifiers extends ArmResource {
        /**
         * Defines a "Microsoft.DomainRegistration.domains_domainOwnershipIdentifiers" Arm Template object
         * @param scope the scope in which to define this object
         * @param name a scope-local name for the object
         * @param options configuration options
         */
        public constructor(scope: Construct, name: string, options: DomainsDomainOwnershipIdentifiersOptions) {
          super(scope, name, {
            ...options,
            armResourceType: 'domains_domainOwnershipIdentifiers',
          });
        }
      }

      /**
       * Microsoft.DomainRegistration/domains
       *
       * @schema Microsoft.DomainRegistration.domains
       */
      export interface DomainsOptions {
        /**
         * @schema Microsoft.DomainRegistration.domains#type
         */
        readonly type: MicrosoftDomainRegistrationDomainsType;

        /**
         * @schema Microsoft.DomainRegistration.domains#apiVersion
         */
        readonly apiVersion?: MicrosoftDomainRegistrationDomainsApiVersion;

        /**
         * ARM envelope properties
         *
         * @schema Microsoft.DomainRegistration.domains#properties
         */
        readonly properties: DomainProperties;

        /**
         * @schema Microsoft.DomainRegistration.domains#resources
         */
        readonly resources?: DomainsDomainOwnershipIdentifiersChildResource[];

      }

      /**
       * Microsoft.DomainRegistration/domains/domainOwnershipIdentifiers
       *
       * @schema Microsoft.DomainRegistration.domains_domainOwnershipIdentifiers
       */
      export interface DomainsDomainOwnershipIdentifiersOptions {
        /**
         * @schema Microsoft.DomainRegistration.domains_domainOwnershipIdentifiers#type
         */
        readonly type: MicrosoftDomainRegistrationDomainsDomainOwnershipIdentifiersType;

        /**
         * @schema Microsoft.DomainRegistration.domains_domainOwnershipIdentifiers#apiVersion
         */
        readonly apiVersion?: MicrosoftDomainRegistrationDomainsDomainOwnershipIdentifiersApiVersion;

        /**
         * ARM envelope properties
         *
         * @schema Microsoft.DomainRegistration.domains_domainOwnershipIdentifiers#properties
         */
        readonly properties: DomainOwnershipIdentifierProperties;

      }

      export enum MicrosoftDomainRegistrationDomainsType {
        "MicrosoftDomainRegistrationDomainsType_MICROSOFT_DOMAIN_REGISTRATION_DOMAINS" = 'Microsoft.DomainRegistration/domains',
      }

      export enum MicrosoftDomainRegistrationDomainsApiVersion {
        "MicrosoftDomainRegistrationDomainsApiVersion_2015_04_01" = '2015-04-01',
      }

      /**
       * ARM envelope properties
       *
       * @schema #/definitions/Domain_properties
       */
      export interface DomainProperties {
        /**
         * Administrative contact.
         *
         * @schema #/definitions/Domain_properties#contactAdmin
         */
        readonly contactAdmin?: Contact;

        /**
         * Billing contact.
         *
         * @schema #/definitions/Domain_properties#contactBilling
         */
        readonly contactBilling?: Contact;

        /**
         * Registrant contact.
         *
         * @schema #/definitions/Domain_properties#contactRegistrant
         */
        readonly contactRegistrant?: Contact;

        /**
         * Technical contact.
         *
         * @schema #/definitions/Domain_properties#contactTech
         */
        readonly contactTech?: Contact;

        /**
         * Name servers.
         *
         * @schema #/definitions/Domain_properties#nameServers
         */
        readonly nameServers?: string[];

        /**
         * <code>true</code> if domain privacy is enabled for this domain; otherwise, <code>false</code>.
         *
         * @schema #/definitions/Domain_properties#privacy
         */
        readonly privacy?: boolean;

        /**
         * <code>true</code> if the domain should be automatically renewed; otherwise, <code>false</code>.
         *
         * @schema #/definitions/Domain_properties#autoRenew
         */
        readonly autoRenew?: boolean;

        /**
         * All hostnames derived from the domain and assigned to Azure resources.
         *
         * @schema #/definitions/Domain_properties#managedHostNames
         */
        readonly managedHostNames?: HostName[];

        /**
         * Legal agreement consent.
         *
         * @schema #/definitions/Domain_properties#consent
         */
        readonly consent?: DomainPurchaseConsent;

        /**
         * Reasons why domain is not renewable.
         *
         * @schema #/definitions/Domain_properties#domainNotRenewableReasons
         */
        readonly domainNotRenewableReasons?: DomainPropertiesDomainNotRenewableReasons[];

      }

      /**
       * Microsoft.DomainRegistration/domains/domainOwnershipIdentifiers
       *
       * @schema #/definitions/domains_domainOwnershipIdentifiers_childResource
       */
      export interface DomainsDomainOwnershipIdentifiersChildResource {
        /**
         * @schema #/definitions/domains_domainOwnershipIdentifiers_childResource#type
         */
        readonly type: DomainsDomainOwnershipIdentifiersChildResourceType;

        /**
         * @schema #/definitions/domains_domainOwnershipIdentifiers_childResource#apiVersion
         */
        readonly apiVersion: DomainsDomainOwnershipIdentifiersChildResourceApiVersion;

        /**
         * ARM envelope properties
         *
         * @schema #/definitions/domains_domainOwnershipIdentifiers_childResource#properties
         */
        readonly properties: DomainOwnershipIdentifierProperties;

      }

      export enum MicrosoftDomainRegistrationDomainsDomainOwnershipIdentifiersType {
        "MicrosoftDomainRegistrationDomainsDomainOwnershipIdentifiersType_MICROSOFT_DOMAIN_REGISTRATION_DOMAINS_DOMAIN_OWNERSHIP_IDENTIFIERS" = 'Microsoft.DomainRegistration/domains/domainOwnershipIdentifiers',
      }

      export enum MicrosoftDomainRegistrationDomainsDomainOwnershipIdentifiersApiVersion {
        "MicrosoftDomainRegistrationDomainsDomainOwnershipIdentifiersApiVersion_2015_04_01" = '2015-04-01',
      }

      /**
       * ARM envelope properties
       *
       * @schema #/definitions/DomainOwnershipIdentifier_properties
       */
      export interface DomainOwnershipIdentifierProperties {
        /**
         * Ownership Id.
         *
         * @schema #/definitions/DomainOwnershipIdentifier_properties#ownershipId
         */
        readonly ownershipId?: string;

      }

      /**
       * Contact information for domain registration. If 'Domain Privacy' option is not selected then the contact information is made publicly available through the Whois 
 directories as per ICANN requirements.
       *
       * @schema #/definitions/Contact
       */
      export interface Contact {
        /**
         * Mailing address.
         *
         * @schema #/definitions/Contact#addressMailing
         */
        readonly addressMailing?: Address;

        /**
         * Email address.
         *
         * @schema #/definitions/Contact#email
         */
        readonly email: string;

        /**
         * Fax number.
         *
         * @schema #/definitions/Contact#fax
         */
        readonly fax?: string;

        /**
         * Job title.
         *
         * @schema #/definitions/Contact#jobTitle
         */
        readonly jobTitle?: string;

        /**
         * First name.
         *
         * @schema #/definitions/Contact#nameFirst
         */
        readonly nameFirst: string;

        /**
         * Last name.
         *
         * @schema #/definitions/Contact#nameLast
         */
        readonly nameLast: string;

        /**
         * Middle name.
         *
         * @schema #/definitions/Contact#nameMiddle
         */
        readonly nameMiddle?: string;

        /**
         * Organization.
         *
         * @schema #/definitions/Contact#organization
         */
        readonly organization?: string;

        /**
         * Phone number.
         *
         * @schema #/definitions/Contact#phone
         */
        readonly phone: string;

      }

      /**
       * Details of a hostname derived from a domain.
       *
       * @schema #/definitions/HostName
       */
      export interface HostName {
        /**
         * Name of the hostname.
         *
         * @schema #/definitions/HostName#name
         */
        readonly name?: string;

        /**
         * List of apps the hostname is assigned to. This list will have more than one app only if the hostname is pointing to a Traffic Manager.
         *
         * @schema #/definitions/HostName#siteNames
         */
        readonly siteNames?: string[];

        /**
         * Name of the Azure resource the hostname is assigned to. If it is assigned to a Traffic Manager then it will be the Traffic Manager name otherwise it will be the app name.
         *
         * @schema #/definitions/HostName#azureResourceName
         */
        readonly azureResourceName?: string;

        /**
         * Type of the Azure resource the hostname is assigned to.
         *
         * @schema #/definitions/HostName#azureResourceType
         */
        readonly azureResourceType?: HostNameAzureResourceType;

        /**
         * Type of the DNS record.
         *
         * @schema #/definitions/HostName#customHostNameDnsRecordType
         */
        readonly customHostNameDnsRecordType?: HostNameCustomHostNameDnsRecordType;

        /**
         * Type of the hostname.
         *
         * @schema #/definitions/HostName#hostNameType
         */
        readonly hostNameType?: HostNameHostNameType;

      }

      /**
       * Domain purchase consent object, representing acceptance of applicable legal agreements.
       *
       * @schema #/definitions/DomainPurchaseConsent
       */
      export interface DomainPurchaseConsent {
        /**
         * List of applicable legal agreement keys. This list can be retrieved using ListLegalAgreements API under <code>TopLevelDomain</code> resource.
         *
         * @schema #/definitions/DomainPurchaseConsent#agreementKeys
         */
        readonly agreementKeys?: string[];

        /**
         * Client IP address.
         *
         * @schema #/definitions/DomainPurchaseConsent#agreedBy
         */
        readonly agreedBy?: string;

        /**
         * Timestamp when the agreements were accepted.
         *
         * @schema #/definitions/DomainPurchaseConsent#agreedAt
         */
        readonly agreedAt?: Date;

      }

      export enum DomainPropertiesDomainNotRenewableReasons {
        REGISTRATION_STATUS_NOT_SUPPORTED_FOR_RENEWAL = 'RegistrationStatusNotSupportedForRenewal',
        EXPIRATION_NOT_IN_RENEWAL_TIME_RANGE = 'ExpirationNotInRenewalTimeRange',
        SUBSCRIPTION_NOT_ACTIVE = 'SubscriptionNotActive',
      }

      export enum DomainsDomainOwnershipIdentifiersChildResourceType {
        DOMAIN_OWNERSHIP_IDENTIFIERS = 'domainOwnershipIdentifiers',
      }

      export enum DomainsDomainOwnershipIdentifiersChildResourceApiVersion {
        "DomainsDomainOwnershipIdentifiersChildResourceApiVersion_2015_04_01" = '2015-04-01',
      }

      /**
       * Address information for domain registration.
       *
       * @schema #/definitions/Address
       */
      export interface Address {
        /**
         * Address 1.
         *
         * @schema #/definitions/Address#address1
         */
        readonly address1: string;

        /**
         * Address 2.
         *
         * @schema #/definitions/Address#address2
         */
        readonly address2?: string;

        /**
         * City.
         *
         * @schema #/definitions/Address#city
         */
        readonly city: string;

        /**
         * Country.
         *
         * @schema #/definitions/Address#country
         */
        readonly country: string;

        /**
         * Postal code.
         *
         * @schema #/definitions/Address#postalCode
         */
        readonly postalCode: string;

        /**
         * State.
         *
         * @schema #/definitions/Address#state
         */
        readonly state: string;

      }

      export enum HostNameAzureResourceType {
        WEBSITE = 'Website',
        TRAFFIC_MANAGER = 'TrafficManager',
      }

      export enum HostNameCustomHostNameDnsRecordType {
        C_NAME = 'CName',
        A = 'A',
      }

      export enum HostNameHostNameType {
        VERIFIED = 'Verified',
        MANAGED = 'Managed',
      }
