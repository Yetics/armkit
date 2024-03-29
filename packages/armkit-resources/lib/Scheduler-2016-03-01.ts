              // generated by armkit
              import { ArmResource } from '@yetics/armkit-core';
              import { Construct } from 'constructs';

              /**
               * Microsoft.Scheduler/jobCollections
               *
               * @schema Microsoft.Scheduler.jobCollections
               */
              export class JobCollections extends ArmResource {
                /**
                 * Defines a "Microsoft.Scheduler.jobCollections" Arm Template object
                 * @param scope the scope in which to define this object
                 * @param name a scope-local name for the object
                 * @param options configuration options
                 */
                public constructor(scope: Construct, name: string, options: JobCollectionsOptions) {
                  super(scope, name, {
                    ...options,
                    armResourceType: 'jobCollections',
                  });
                }
              }

              /**
               * Microsoft.Scheduler/jobCollections/jobs
               *
               * @schema Microsoft.Scheduler.jobCollections_jobs
               */
              export class JobCollectionsJobs extends ArmResource {
                /**
                 * Defines a "Microsoft.Scheduler.jobCollections_jobs" Arm Template object
                 * @param scope the scope in which to define this object
                 * @param name a scope-local name for the object
                 * @param options configuration options
                 */
                public constructor(scope: Construct, name: string, options: JobCollectionsJobsOptions) {
                  super(scope, name, {
                    ...options,
                    armResourceType: 'jobCollections_jobs',
                  });
                }
              }

              /**
               * Microsoft.Scheduler/jobCollections
               *
               * @schema Microsoft.Scheduler.jobCollections
               */
              export interface JobCollectionsOptions {
                /**
                 * @schema Microsoft.Scheduler.jobCollections#apiVersion
                 */
                readonly apiVersion?: MicrosoftSchedulerJobCollectionsApiVersion;

                /**
                 * Gets or sets the storage account location.
                 *
                 * @schema Microsoft.Scheduler.jobCollections#location
                 */
                readonly location?: string;

                /**
                 * The job collection name.
                 *
                 * @schema Microsoft.Scheduler.jobCollections#name
                 */
                readonly name: string;

                /**
                 * @schema Microsoft.Scheduler.jobCollections#properties
                 */
                readonly properties: JobCollectionProperties;

                /**
                 * @schema Microsoft.Scheduler.jobCollections#resources
                 */
                readonly resources?: JobCollectionsJobsChildResource[];

                /**
                 * Gets or sets the tags.
                 *
                 * @schema Microsoft.Scheduler.jobCollections#tags
                 */
                readonly tags?: MicrosoftSchedulerJobCollectionsTags;

                /**
                 * @schema Microsoft.Scheduler.jobCollections#type
                 */
                readonly type: MicrosoftSchedulerJobCollectionsType;

              }

              /**
               * Microsoft.Scheduler/jobCollections/jobs
               *
               * @schema Microsoft.Scheduler.jobCollections_jobs
               */
              export interface JobCollectionsJobsOptions {
                /**
                 * @schema Microsoft.Scheduler.jobCollections_jobs#apiVersion
                 */
                readonly apiVersion?: MicrosoftSchedulerJobCollectionsJobsApiVersion;

                /**
                 * The job name.
                 *
                 * @schema Microsoft.Scheduler.jobCollections_jobs#name
                 */
                readonly name: string;

                /**
                 * @schema Microsoft.Scheduler.jobCollections_jobs#properties
                 */
                readonly properties: JobProperties;

                /**
                 * @schema Microsoft.Scheduler.jobCollections_jobs#type
                 */
                readonly type: MicrosoftSchedulerJobCollectionsJobsType;

              }

              export enum MicrosoftSchedulerJobCollectionsApiVersion {
                "MicrosoftSchedulerJobCollectionsApiVersion_2016_03_01" = '2016-03-01',
              }

              /**
               * @schema #/definitions/JobCollectionProperties
               */
              export interface JobCollectionProperties {
                /**
                 * @schema #/definitions/JobCollectionProperties#quota
                 */
                readonly quota?: JobCollectionQuota;

                /**
                 * @schema #/definitions/JobCollectionProperties#sku
                 */
                readonly sku?: Sku;

                /**
                 * Gets or sets the state.
                 *
                 * @schema #/definitions/JobCollectionProperties#state
                 */
                readonly state?: JobCollectionPropertiesState;

              }

              /**
               * Microsoft.Scheduler/jobCollections/jobs
               *
               * @schema #/definitions/jobCollections_jobs_childResource
               */
              export interface JobCollectionsJobsChildResource {
                /**
                 * @schema #/definitions/jobCollections_jobs_childResource#apiVersion
                 */
                readonly apiVersion: JobCollectionsJobsChildResourceApiVersion;

                /**
                 * The job name.
                 *
                 * @schema #/definitions/jobCollections_jobs_childResource#name
                 */
                readonly name: string;

                /**
                 * @schema #/definitions/jobCollections_jobs_childResource#properties
                 */
                readonly properties: JobProperties;

                /**
                 * @schema #/definitions/jobCollections_jobs_childResource#type
                 */
                readonly type: JobCollectionsJobsChildResourceType;

              }

              /**
               * @schema MicrosoftSchedulerJobCollectionsTags
               */
              export interface MicrosoftSchedulerJobCollectionsTags {
              }

              export enum MicrosoftSchedulerJobCollectionsType {
                "MicrosoftSchedulerJobCollectionsType_MICROSOFT_SCHEDULER_JOB_COLLECTIONS" = 'Microsoft.Scheduler/jobCollections',
              }

              export enum MicrosoftSchedulerJobCollectionsJobsApiVersion {
                "MicrosoftSchedulerJobCollectionsJobsApiVersion_2016_03_01" = '2016-03-01',
              }

              /**
               * @schema #/definitions/JobProperties
               */
              export interface JobProperties {
                /**
                 * @schema #/definitions/JobProperties#action
                 */
                readonly action?: JobAction;

                /**
                 * @schema #/definitions/JobProperties#recurrence
                 */
                readonly recurrence?: JobRecurrence;

                /**
                 * Gets or sets the job start time.
                 *
                 * @schema #/definitions/JobProperties#startTime
                 */
                readonly startTime?: Date;

                /**
                 * Gets or set the job state.
                 *
                 * @schema #/definitions/JobProperties#state
                 */
                readonly state?: JobPropertiesState;

              }

              export enum MicrosoftSchedulerJobCollectionsJobsType {
                "MicrosoftSchedulerJobCollectionsJobsType_MICROSOFT_SCHEDULER_JOB_COLLECTIONS_JOBS" = 'Microsoft.Scheduler/jobCollections/jobs',
              }

              /**
               * @schema #/definitions/JobCollectionQuota
               */
              export interface JobCollectionQuota {
                /**
                 * Gets or set the maximum job count.
                 *
                 * @schema #/definitions/JobCollectionQuota#maxJobCount
                 */
                readonly maxJobCount?: number;

                /**
                 * Gets or sets the maximum job occurrence.
                 *
                 * @schema #/definitions/JobCollectionQuota#maxJobOccurrence
                 */
                readonly maxJobOccurrence?: number;

                /**
                 * @schema #/definitions/JobCollectionQuota#maxRecurrence
                 */
                readonly maxRecurrence?: JobMaxRecurrence;

              }

              /**
               * @schema #/definitions/Sku
               */
              export interface Sku {
                /**
                 * Gets or set the SKU.
                 *
                 * @schema #/definitions/Sku#name
                 */
                readonly name?: SkuName;

              }

              export enum JobCollectionPropertiesState {
                ENABLED = 'Enabled',
                DISABLED = 'Disabled',
                SUSPENDED = 'Suspended',
                DELETED = 'Deleted',
              }

              export enum JobCollectionsJobsChildResourceApiVersion {
                "JobCollectionsJobsChildResourceApiVersion_2016_03_01" = '2016-03-01',
              }

              export enum JobCollectionsJobsChildResourceType {
                JOBS = 'jobs',
              }

              /**
               * @schema #/definitions/JobAction
               */
              export interface JobAction {
                /**
                 * @schema #/definitions/JobAction#errorAction
                 */
                readonly errorAction?: JobErrorAction;

                /**
                 * @schema #/definitions/JobAction#queueMessage
                 */
                readonly queueMessage?: StorageQueueMessage;

                /**
                 * @schema #/definitions/JobAction#request
                 */
                readonly request?: HttpRequest;

                /**
                 * @schema #/definitions/JobAction#retryPolicy
                 */
                readonly retryPolicy?: RetryPolicy;

                /**
                 * @schema #/definitions/JobAction#serviceBusQueueMessage
                 */
                readonly serviceBusQueueMessage?: ServiceBusQueueMessage;

                /**
                 * @schema #/definitions/JobAction#serviceBusTopicMessage
                 */
                readonly serviceBusTopicMessage?: ServiceBusTopicMessage;

                /**
                 * Gets or sets the job action type.
                 *
                 * @schema #/definitions/JobAction#type
                 */
                readonly type?: JobActionType;

              }

              /**
               * @schema #/definitions/JobRecurrence
               */
              export interface JobRecurrence {
                /**
                 * Gets or sets the maximum number of times that the job should run.
                 *
                 * @schema #/definitions/JobRecurrence#count
                 */
                readonly count?: number;

                /**
                 * Gets or sets the time at which the job will complete.
                 *
                 * @schema #/definitions/JobRecurrence#endTime
                 */
                readonly endTime?: Date;

                /**
                 * Gets or sets the frequency of recurrence (second, minute, hour, day, week, month).
                 *
                 * @schema #/definitions/JobRecurrence#frequency
                 */
                readonly frequency?: JobRecurrenceFrequency;

                /**
                 * Gets or sets the interval between retries.
                 *
                 * @schema #/definitions/JobRecurrence#interval
                 */
                readonly interval?: number;

                /**
                 * @schema #/definitions/JobRecurrence#schedule
                 */
                readonly schedule?: JobRecurrenceSchedule;

              }

              export enum JobPropertiesState {
                ENABLED = 'Enabled',
                DISABLED = 'Disabled',
                FAULTED = 'Faulted',
                COMPLETED = 'Completed',
              }

              /**
               * @schema #/definitions/JobMaxRecurrence
               */
              export interface JobMaxRecurrence {
                /**
                 * Gets or sets the frequency of recurrence (second, minute, hour, day, week, month).
                 *
                 * @schema #/definitions/JobMaxRecurrence#frequency
                 */
                readonly frequency?: JobMaxRecurrenceFrequency;

                /**
                 * Gets or sets the interval between retries.
                 *
                 * @schema #/definitions/JobMaxRecurrence#interval
                 */
                readonly interval?: number;

              }

              export enum SkuName {
                STANDARD = 'Standard',
                FREE = 'Free',
                "SkuName_P10_PREMIUM" = 'P10Premium',
                "SkuName_P20_PREMIUM" = 'P20Premium',
              }

              /**
               * @schema #/definitions/JobErrorAction
               */
              export interface JobErrorAction {
                /**
                 * @schema #/definitions/JobErrorAction#queueMessage
                 */
                readonly queueMessage?: StorageQueueMessage;

                /**
                 * @schema #/definitions/JobErrorAction#request
                 */
                readonly request?: HttpRequest;

                /**
                 * @schema #/definitions/JobErrorAction#retryPolicy
                 */
                readonly retryPolicy?: RetryPolicy;

                /**
                 * @schema #/definitions/JobErrorAction#serviceBusQueueMessage
                 */
                readonly serviceBusQueueMessage?: ServiceBusQueueMessage;

                /**
                 * @schema #/definitions/JobErrorAction#serviceBusTopicMessage
                 */
                readonly serviceBusTopicMessage?: ServiceBusTopicMessage;

                /**
                 * Gets or sets the job error action type.
                 *
                 * @schema #/definitions/JobErrorAction#type
                 */
                readonly type?: JobErrorActionType;

              }

              /**
               * @schema #/definitions/StorageQueueMessage
               */
              export interface StorageQueueMessage {
                /**
                 * Gets or sets the message.
                 *
                 * @schema #/definitions/StorageQueueMessage#message
                 */
                readonly message?: string;

                /**
                 * Gets or sets the queue name.
                 *
                 * @schema #/definitions/StorageQueueMessage#queueName
                 */
                readonly queueName?: string;

                /**
                 * Gets or sets the SAS key.
                 *
                 * @schema #/definitions/StorageQueueMessage#sasToken
                 */
                readonly sasToken?: string;

                /**
                 * Gets or sets the storage account name.
                 *
                 * @schema #/definitions/StorageQueueMessage#storageAccount
                 */
                readonly storageAccount?: string;

              }

              /**
               * @schema #/definitions/HttpRequest
               */
              export interface HttpRequest {
                /**
                 * @schema #/definitions/HttpRequest#authentication
                 */
                readonly authentication?: HttpAuthentication;

                /**
                 * Gets or sets the request body.
                 *
                 * @schema #/definitions/HttpRequest#body
                 */
                readonly body?: string;

                /**
                 * Gets or sets the headers.
                 *
                 * @schema #/definitions/HttpRequest#headers
                 */
                readonly headers?: HttpRequestHeaders;

                /**
                 * Gets or sets the method of the request.
                 *
                 * @schema #/definitions/HttpRequest#method
                 */
                readonly method?: string;

                /**
                 * Gets or sets the URI of the request.
                 *
                 * @schema #/definitions/HttpRequest#uri
                 */
                readonly uri?: string;

              }

              /**
               * @schema #/definitions/RetryPolicy
               */
              export interface RetryPolicy {
                /**
                 * Gets or sets the number of times a retry should be attempted.
                 *
                 * @schema #/definitions/RetryPolicy#retryCount
                 */
                readonly retryCount?: number;

                /**
                 * Gets or sets the retry interval between retries, specify duration in ISO 8601 format.
                 *
                 * @schema #/definitions/RetryPolicy#retryInterval
                 */
                readonly retryInterval?: string;

                /**
                 * Gets or sets the retry strategy to be used.
                 *
                 * @schema #/definitions/RetryPolicy#retryType
                 */
                readonly retryType?: RetryPolicyRetryType;

              }

              /**
               * @schema #/definitions/ServiceBusQueueMessage
               */
              export interface ServiceBusQueueMessage {
                /**
                 * @schema #/definitions/ServiceBusQueueMessage#authentication
                 */
                readonly authentication?: ServiceBusAuthentication;

                /**
                 * @schema #/definitions/ServiceBusQueueMessage#brokeredMessageProperties
                 */
                readonly brokeredMessageProperties?: ServiceBusBrokeredMessageProperties;

                /**
                 * Gets or sets the custom message properties.
                 *
                 * @schema #/definitions/ServiceBusQueueMessage#customMessageProperties
                 */
                readonly customMessageProperties?: ServiceBusQueueMessageCustomMessageProperties;

                /**
                 * Gets or sets the message.
                 *
                 * @schema #/definitions/ServiceBusQueueMessage#message
                 */
                readonly message?: string;

                /**
                 * Gets or sets the namespace.
                 *
                 * @schema #/definitions/ServiceBusQueueMessage#namespace
                 */
                readonly namespace?: string;

                /**
                 * Gets or sets the queue name.
                 *
                 * @schema #/definitions/ServiceBusQueueMessage#queueName
                 */
                readonly queueName?: string;

                /**
                 * Gets or sets the transport type.
                 *
                 * @schema #/definitions/ServiceBusQueueMessage#transportType
                 */
                readonly transportType?: ServiceBusQueueMessageTransportType;

              }

              /**
               * @schema #/definitions/ServiceBusTopicMessage
               */
              export interface ServiceBusTopicMessage {
                /**
                 * @schema #/definitions/ServiceBusTopicMessage#authentication
                 */
                readonly authentication?: ServiceBusAuthentication;

                /**
                 * @schema #/definitions/ServiceBusTopicMessage#brokeredMessageProperties
                 */
                readonly brokeredMessageProperties?: ServiceBusBrokeredMessageProperties;

                /**
                 * Gets or sets the custom message properties.
                 *
                 * @schema #/definitions/ServiceBusTopicMessage#customMessageProperties
                 */
                readonly customMessageProperties?: ServiceBusTopicMessageCustomMessageProperties;

                /**
                 * Gets or sets the message.
                 *
                 * @schema #/definitions/ServiceBusTopicMessage#message
                 */
                readonly message?: string;

                /**
                 * Gets or sets the namespace.
                 *
                 * @schema #/definitions/ServiceBusTopicMessage#namespace
                 */
                readonly namespace?: string;

                /**
                 * Gets or sets the topic path.
                 *
                 * @schema #/definitions/ServiceBusTopicMessage#topicPath
                 */
                readonly topicPath?: string;

                /**
                 * Gets or sets the transport type.
                 *
                 * @schema #/definitions/ServiceBusTopicMessage#transportType
                 */
                readonly transportType?: ServiceBusTopicMessageTransportType;

              }

              export enum JobActionType {
                HTTP = 'Http',
                HTTPS = 'Https',
                STORAGE_QUEUE = 'StorageQueue',
                SERVICE_BUS_QUEUE = 'ServiceBusQueue',
                SERVICE_BUS_TOPIC = 'ServiceBusTopic',
              }

              export enum JobRecurrenceFrequency {
                MINUTE = 'Minute',
                HOUR = 'Hour',
                DAY = 'Day',
                WEEK = 'Week',
                MONTH = 'Month',
              }

              /**
               * @schema #/definitions/JobRecurrenceSchedule
               */
              export interface JobRecurrenceSchedule {
                /**
                 * Gets or sets the hours of the day that the job should execute at.
                 *
                 * @schema #/definitions/JobRecurrenceSchedule#hours
                 */
                readonly hours?: number[];

                /**
                 * Gets or sets the minutes of the hour that the job should execute at.
                 *
                 * @schema #/definitions/JobRecurrenceSchedule#minutes
                 */
                readonly minutes?: number[];

                /**
                 * Gets or sets the days of the month that the job should execute on. Must be between 1 and 31.
                 *
                 * @schema #/definitions/JobRecurrenceSchedule#monthDays
                 */
                readonly monthDays?: number[];

                /**
                 * Gets or sets the occurrences of days within a month.
                 *
                 * @schema #/definitions/JobRecurrenceSchedule#monthlyOccurrences
                 */
                readonly monthlyOccurrences?: JobRecurrenceScheduleMonthlyOccurrence[];

                /**
                 * Gets or sets the days of the week that the job should execute on.
                 *
                 * @schema #/definitions/JobRecurrenceSchedule#weekDays
                 */
                readonly weekDays?: JobRecurrenceScheduleWeekDays[];

              }

              export enum JobMaxRecurrenceFrequency {
                MINUTE = 'Minute',
                HOUR = 'Hour',
                DAY = 'Day',
                WEEK = 'Week',
                MONTH = 'Month',
              }

              export enum JobErrorActionType {
                HTTP = 'Http',
                HTTPS = 'Https',
                STORAGE_QUEUE = 'StorageQueue',
                SERVICE_BUS_QUEUE = 'ServiceBusQueue',
                SERVICE_BUS_TOPIC = 'ServiceBusTopic',
              }

              /**
               * @schema #/definitions/HttpAuthentication
               */
              export class HttpAuthentication {
                public static fromClientCertAuthentication(value: ClientCertAuthentication): HttpAuthentication {
                  return new HttpAuthentication(value);
                }
                public static fromBasicAuthentication(value: BasicAuthentication): HttpAuthentication {
                  return new HttpAuthentication(value);
                }
                public static fromOAuthAuthentication(value: OAuthAuthentication): HttpAuthentication {
                  return new HttpAuthentication(value);
                }
                private constructor(value: any) {
                  Object.defineProperty(this, 'resolve', { value: () => value });
                }
              }

              /**
               * @schema #/definitions/httpRequestHeaders
               */
              export interface HttpRequestHeaders {
              }

              export enum RetryPolicyRetryType {
                NONE = 'None',
                FIXED = 'Fixed',
              }

              /**
               * @schema #/definitions/ServiceBusAuthentication
               */
              export interface ServiceBusAuthentication {
                /**
                 * Gets or sets the SAS key.
                 *
                 * @schema #/definitions/ServiceBusAuthentication#sasKey
                 */
                readonly sasKey?: string;

                /**
                 * Gets or sets the SAS key name.
                 *
                 * @schema #/definitions/ServiceBusAuthentication#sasKeyName
                 */
                readonly sasKeyName?: string;

                /**
                 * Gets or sets the authentication type.
                 *
                 * @schema #/definitions/ServiceBusAuthentication#type
                 */
                readonly type?: ServiceBusAuthenticationType;

              }

              /**
               * @schema #/definitions/ServiceBusBrokeredMessageProperties
               */
              export interface ServiceBusBrokeredMessageProperties {
                /**
                 * Gets or sets the content type.
                 *
                 * @schema #/definitions/ServiceBusBrokeredMessageProperties#contentType
                 */
                readonly contentType?: string;

                /**
                 * Gets or sets the correlation ID.
                 *
                 * @schema #/definitions/ServiceBusBrokeredMessageProperties#correlationId
                 */
                readonly correlationId?: string;

                /**
                 * Gets or sets the force persistence.
                 *
                 * @schema #/definitions/ServiceBusBrokeredMessageProperties#forcePersistence
                 */
                readonly forcePersistence?: boolean;

                /**
                 * Gets or sets the label.
                 *
                 * @schema #/definitions/ServiceBusBrokeredMessageProperties#label
                 */
                readonly label?: string;

                /**
                 * Gets or sets the message ID.
                 *
                 * @schema #/definitions/ServiceBusBrokeredMessageProperties#messageId
                 */
                readonly messageId?: string;

                /**
                 * Gets or sets the partition key.
                 *
                 * @schema #/definitions/ServiceBusBrokeredMessageProperties#partitionKey
                 */
                readonly partitionKey?: string;

                /**
                 * Gets or sets the reply to.
                 *
                 * @schema #/definitions/ServiceBusBrokeredMessageProperties#replyTo
                 */
                readonly replyTo?: string;

                /**
                 * Gets or sets the reply to session ID.
                 *
                 * @schema #/definitions/ServiceBusBrokeredMessageProperties#replyToSessionId
                 */
                readonly replyToSessionId?: string;

                /**
                 * Gets or sets the scheduled enqueue time UTC.
                 *
                 * @schema #/definitions/ServiceBusBrokeredMessageProperties#scheduledEnqueueTimeUtc
                 */
                readonly scheduledEnqueueTimeUtc?: Date;

                /**
                 * Gets or sets the session ID.
                 *
                 * @schema #/definitions/ServiceBusBrokeredMessageProperties#sessionId
                 */
                readonly sessionId?: string;

                /**
                 * Gets or sets the time to live.
                 *
                 * @schema #/definitions/ServiceBusBrokeredMessageProperties#timeToLive
                 */
                readonly timeToLive?: string;

                /**
                 * Gets or sets the to.
                 *
                 * @schema #/definitions/ServiceBusBrokeredMessageProperties#to
                 */
                readonly to?: string;

                /**
                 * Gets or sets the via partition key.
                 *
                 * @schema #/definitions/ServiceBusBrokeredMessageProperties#viaPartitionKey
                 */
                readonly viaPartitionKey?: string;

              }

              /**
               * @schema #/definitions/serviceBusQueueMessageCustomMessageProperties
               */
              export interface ServiceBusQueueMessageCustomMessageProperties {
              }

              export enum ServiceBusQueueMessageTransportType {
                NOT_SPECIFIED = 'NotSpecified',
                NET_MESSAGING = 'NetMessaging',
                AMQP = 'AMQP',
              }

              /**
               * @schema #/definitions/serviceBusTopicMessageCustomMessageProperties
               */
              export interface ServiceBusTopicMessageCustomMessageProperties {
              }

              export enum ServiceBusTopicMessageTransportType {
                NOT_SPECIFIED = 'NotSpecified',
                NET_MESSAGING = 'NetMessaging',
                AMQP = 'AMQP',
              }

              /**
               * @schema #/definitions/JobRecurrenceScheduleMonthlyOccurrence
               */
              export interface JobRecurrenceScheduleMonthlyOccurrence {
                /**
                 * Gets or sets the day. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday.
                 *
                 * @schema #/definitions/JobRecurrenceScheduleMonthlyOccurrence#day
                 */
                readonly day?: JobRecurrenceScheduleMonthlyOccurrenceDay;

                /**
                 * Gets or sets the occurrence. Must be between -5 and 5.
                 *
                 * @schema #/definitions/JobRecurrenceScheduleMonthlyOccurrence#Occurrence
                 */
                readonly occurrence?: number;

              }

              export enum JobRecurrenceScheduleWeekDays {
                SUNDAY = 'Sunday',
                MONDAY = 'Monday',
                TUESDAY = 'Tuesday',
                WEDNESDAY = 'Wednesday',
                THURSDAY = 'Thursday',
                FRIDAY = 'Friday',
                SATURDAY = 'Saturday',
              }

              /**
               * @schema #/definitions/ClientCertAuthentication
               */
              export interface ClientCertAuthentication {
                /**
                 * Gets or sets the certificate expiration date.
                 *
                 * @schema #/definitions/ClientCertAuthentication#certificateExpirationDate
                 */
                readonly certificateExpirationDate?: Date;

                /**
                 * Gets or sets the certificate subject name.
                 *
                 * @schema #/definitions/ClientCertAuthentication#certificateSubjectName
                 */
                readonly certificateSubjectName?: string;

                /**
                 * Gets or sets the certificate thumbprint.
                 *
                 * @schema #/definitions/ClientCertAuthentication#certificateThumbprint
                 */
                readonly certificateThumbprint?: string;

                /**
                 * Gets or sets the certificate password, return value will always be empty.
                 *
                 * @schema #/definitions/ClientCertAuthentication#password
                 */
                readonly password?: string;

                /**
                 * Gets or sets the pfx certificate. Accepts certification in base64 encoding, return value will always be empty.
                 *
                 * @schema #/definitions/ClientCertAuthentication#pfx
                 */
                readonly pfx?: string;

                /**
                 * @schema #/definitions/ClientCertAuthentication#type
                 */
                readonly type: ClientCertAuthenticationType;

              }

              /**
               * @schema #/definitions/BasicAuthentication
               */
              export interface BasicAuthentication {
                /**
                 * Gets or sets the password, return value will always be empty.
                 *
                 * @schema #/definitions/BasicAuthentication#password
                 */
                readonly password?: string;

                /**
                 * @schema #/definitions/BasicAuthentication#type
                 */
                readonly type: BasicAuthenticationType;

                /**
                 * Gets or sets the username.
                 *
                 * @schema #/definitions/BasicAuthentication#username
                 */
                readonly username?: string;

              }

              /**
               * @schema #/definitions/OAuthAuthentication
               */
              export interface OAuthAuthentication {
                /**
                 * Gets or sets the audience.
                 *
                 * @schema #/definitions/OAuthAuthentication#audience
                 */
                readonly audience?: string;

                /**
                 * Gets or sets the client identifier.
                 *
                 * @schema #/definitions/OAuthAuthentication#clientId
                 */
                readonly clientId?: string;

                /**
                 * Gets or sets the secret, return value will always be empty.
                 *
                 * @schema #/definitions/OAuthAuthentication#secret
                 */
                readonly secret?: string;

                /**
                 * Gets or sets the tenant.
                 *
                 * @schema #/definitions/OAuthAuthentication#tenant
                 */
                readonly tenant?: string;

                /**
                 * @schema #/definitions/OAuthAuthentication#type
                 */
                readonly type: OAuthAuthenticationType;

              }

              export enum ServiceBusAuthenticationType {
                NOT_SPECIFIED = 'NotSpecified',
                SHARED_ACCESS_KEY = 'SharedAccessKey',
              }

              export enum JobRecurrenceScheduleMonthlyOccurrenceDay {
                MONDAY = 'Monday',
                TUESDAY = 'Tuesday',
                WEDNESDAY = 'Wednesday',
                THURSDAY = 'Thursday',
                FRIDAY = 'Friday',
                SATURDAY = 'Saturday',
                SUNDAY = 'Sunday',
              }

              export enum ClientCertAuthenticationType {
                CLIENT_CERTIFICATE = 'ClientCertificate',
              }

              export enum BasicAuthenticationType {
                BASIC = 'Basic',
              }

              export enum OAuthAuthenticationType {
                ACTIVE_DIRECTORY_O_AUTH = 'ActiveDirectoryOAuth',
              }

