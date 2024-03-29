              // generated by armkit
              import { ArmResource } from '@yetics/armkit-core';
              import { Construct } from 'constructs';

              /**
               * Microsoft.RecoveryServices/vaults
               *
               * @schema Microsoft.RecoveryServices.vaults
               */
              export class Vaults extends ArmResource {
                /**
                 * Defines a "Microsoft.RecoveryServices.vaults" Arm Template object
                 * @param scope the scope in which to define this object
                 * @param name a scope-local name for the object
                 * @param options configuration options
                 */
                public constructor(scope: Construct, name: string, options: VaultsOptions) {
                  super(scope, name, {
                    ...options,
                    armResourceType: 'vaults',
                  });
                }
              }

              /**
               * Microsoft.RecoveryServices/vaults/certificates
               *
               * @schema Microsoft.RecoveryServices.vaults_certificates
               */
              export class VaultsCertificates extends ArmResource {
                /**
                 * Defines a "Microsoft.RecoveryServices.vaults_certificates" Arm Template object
                 * @param scope the scope in which to define this object
                 * @param name a scope-local name for the object
                 * @param options configuration options
                 */
                public constructor(scope: Construct, name: string, options: VaultsCertificatesOptions) {
                  super(scope, name, {
                    ...options,
                    armResourceType: 'vaults_certificates',
                  });
                }
              }

              /**
               * Microsoft.RecoveryServices/vaults/extendedInformation
               *
               * @schema Microsoft.RecoveryServices.vaults_extendedInformation
               */
              export class VaultsExtendedInformation extends ArmResource {
                /**
                 * Defines a "Microsoft.RecoveryServices.vaults_extendedInformation" Arm Template object
                 * @param scope the scope in which to define this object
                 * @param name a scope-local name for the object
                 * @param options configuration options
                 */
                public constructor(scope: Construct, name: string, options: VaultsExtendedInformationOptions) {
                  super(scope, name, {
                    ...options,
                    armResourceType: 'vaults_extendedInformation',
                  });
                }
              }

              /**
               * Microsoft.RecoveryServices/vaults
               *
               * @schema Microsoft.RecoveryServices.vaults
               */
              export interface VaultsOptions {
                /**
                 * @schema Microsoft.RecoveryServices.vaults#type
                 */
                readonly type: MicrosoftRecoveryServicesVaultsType;

                /**
                 * @schema Microsoft.RecoveryServices.vaults#apiVersion
                 */
                readonly apiVersion?: MicrosoftRecoveryServicesVaultsApiVersion;

                /**
                 * Required. Gets or sets the sku type.
                 *
                 * @schema Microsoft.RecoveryServices.vaults#sku
                 */
                readonly sku: Sku;

                /**
                 * Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update the request will succeed.
                 *
                 * @schema Microsoft.RecoveryServices.vaults#location
                 */
                readonly location: string;

                /**
                 * Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters.
                 *
                 * @schema Microsoft.RecoveryServices.vaults#tags
                 */
                readonly tags?: { [key: string]: string };

                /**
                 * @schema Microsoft.RecoveryServices.vaults#properties
                 */
                readonly properties: RecoveryServicesPropertiesCreateParameters;

              }

              /**
               * Microsoft.RecoveryServices/vaults/certificates
               *
               * @schema Microsoft.RecoveryServices.vaults_certificates
               */
              export interface VaultsCertificatesOptions {
                /**
                 * @schema Microsoft.RecoveryServices.vaults_certificates#name
                 */
                readonly name: string;

                /**
                 * @schema Microsoft.RecoveryServices.vaults_certificates#type
                 */
                readonly type: MicrosoftRecoveryServicesVaultsCertificatesType;

                /**
                 * @schema Microsoft.RecoveryServices.vaults_certificates#apiVersion
                 */
                readonly apiVersion?: MicrosoftRecoveryServicesVaultsCertificatesApiVersion;

                /**
                 * @schema Microsoft.RecoveryServices.vaults_certificates#properties
                 */
                readonly properties: RawCertificateData;

              }

              /**
               * Microsoft.RecoveryServices/vaults/extendedInformation
               *
               * @schema Microsoft.RecoveryServices.vaults_extendedInformation
               */
              export interface VaultsExtendedInformationOptions {
                /**
                 * @schema Microsoft.RecoveryServices.vaults_extendedInformation#type
                 */
                readonly type: MicrosoftRecoveryServicesVaultsExtendedInformationType;

                /**
                 * @schema Microsoft.RecoveryServices.vaults_extendedInformation#apiVersion
                 */
                readonly apiVersion?: MicrosoftRecoveryServicesVaultsExtendedInformationApiVersion;

                /**
                 * Optional ETag.
                 *
                 * @schema Microsoft.RecoveryServices.vaults_extendedInformation#eTag
                 */
                readonly eTag?: string;

                /**
                 * @schema Microsoft.RecoveryServices.vaults_extendedInformation#properties
                 */
                readonly properties: VaultExtendedInfo;

              }

              export enum MicrosoftRecoveryServicesVaultsType {
                "MicrosoftRecoveryServicesVaultsType_MICROSOFT_RECOVERY_SERVICES_VAULTS" = 'Microsoft.RecoveryServices/vaults',
              }

              export enum MicrosoftRecoveryServicesVaultsApiVersion {
                "MicrosoftRecoveryServicesVaultsApiVersion_2018_01_10" = '2018-01-10',
                "MicrosoftRecoveryServicesVaultsApiVersion_2017_07_01" = '2017-07-01',
                "MicrosoftRecoveryServicesVaultsApiVersion_2016_05_01" = '2016-05-01',
                "MicrosoftRecoveryServicesVaultsApiVersion_2015_12_15" = '2015-12-15',
                "MicrosoftRecoveryServicesVaultsApiVersion_2015_11_10" = '2015-11-10',
                "MicrosoftRecoveryServicesVaultsApiVersion_2015_08_15" = '2015-08-15',
                "MicrosoftRecoveryServicesVaultsApiVersion_2015_08_10" = '2015-08-10',
                "MicrosoftRecoveryServicesVaultsApiVersion_2015_06_10" = '2015-06-10',
                "MicrosoftRecoveryServicesVaultsApiVersion_2015_03_15" = '2015-03-15',
              }

              /**
               * The SKU of the recovery services vault.
               *
               * @schema #/definitions/Sku
               */
              export interface Sku {
                /**
                 * Gets or sets the sku name. Required for vault creation, optional for update. Possible values include: 'RS0'
                 *
                 * @schema #/definitions/Sku#name
                 */
                readonly name: SkuName;

                /**
                 * Gets or sets the sku tier. Required for vault creation, optional for update. Possible values include: 'Standard'
                 *
                 * @schema #/definitions/Sku#tier
                 */
                readonly tier: SkuTier;

              }

              /**
               * @schema #/definitions/RecoveryServicesPropertiesCreateParameters
               */
              export interface RecoveryServicesPropertiesCreateParameters {
              }

              export enum MicrosoftRecoveryServicesVaultsCertificatesType {
                "MicrosoftRecoveryServicesVaultsCertificatesType_MICROSOFT_RECOVERY_SERVICES_VAULTS_CERTIFICATES" = 'Microsoft.RecoveryServices/vaults/certificates',
              }

              export enum MicrosoftRecoveryServicesVaultsCertificatesApiVersion {
                "MicrosoftRecoveryServicesVaultsCertificatesApiVersion_2016_06_01" = '2016-06-01',
              }

              /**
               * Raw certificate data.
               *
               * @schema #/definitions/RawCertificateData
               */
              export interface RawCertificateData {
                /**
                 * Specifies the authentication type.
                 *
                 * @schema #/definitions/RawCertificateData#authType
                 */
                readonly authType?: RawCertificateDataAuthType;

                /**
                 * The base64 encoded certificate raw data string
                 *
                 * @schema #/definitions/RawCertificateData#certificate
                 */
                readonly certificate?: string[];

              }

              export enum MicrosoftRecoveryServicesVaultsExtendedInformationType {
                "MicrosoftRecoveryServicesVaultsExtendedInformationType_MICROSOFT_RECOVERY_SERVICES_VAULTS_EXTENDED_INFORMATION" = 'Microsoft.RecoveryServices/vaults/extendedInformation',
              }

              export enum MicrosoftRecoveryServicesVaultsExtendedInformationApiVersion {
                "MicrosoftRecoveryServicesVaultsExtendedInformationApiVersion_2016_06_01" = '2016-06-01',
              }

              /**
               * Vault extended information.
               *
               * @schema #/definitions/VaultExtendedInfo
               */
              export interface VaultExtendedInfo {
                /**
                 * Integrity key.
                 *
                 * @schema #/definitions/VaultExtendedInfo#integrityKey
                 */
                readonly integrityKey?: string;

                /**
                 * Encryption key.
                 *
                 * @schema #/definitions/VaultExtendedInfo#encryptionKey
                 */
                readonly encryptionKey?: string;

                /**
                 * Encryption key thumbprint.
                 *
                 * @schema #/definitions/VaultExtendedInfo#encryptionKeyThumbprint
                 */
                readonly encryptionKeyThumbprint?: string;

                /**
                 * Algorithm for Vault ExtendedInfo
                 *
                 * @schema #/definitions/VaultExtendedInfo#algorithm
                 */
                readonly algorithm?: string;

              }

              export enum SkuName {
                "SkuName_RS0" = 'RS0',
              }

              export enum SkuTier {
                STANDARD = 'Standard',
              }

              export enum RawCertificateDataAuthType {
                INVALID = 'Invalid',
                ACS = 'ACS',
                AAD = 'AAD',
                ACCESS_CONTROL_SERVICE = 'AccessControlService',
                AZURE_ACTIVE_DIRECTORY = 'AzureActiveDirectory',
              }

