/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.15.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClientOptions, RequestOptions, ServiceCallback, ServiceClientCredentials } from 'ms-rest';
import * as models from "./models";
import * as operations from "./operations";

declare class IntuneResourceManagementClient {
    /**
     * @class
     * Initializes a new instance of the IntuneResourceManagementClient class.
     * @constructor
     *
     * @param {credentials} credentials - Gets Azure subscription credentials.
     *
     * @param {string} [baseUri] - The base URI of the service.
     *
     * @param {object} [options] - The parameter options
     *
     * @param {Array} [options.filters] - Filters to be added to the request pipeline
     *
     * @param {object} [options.requestOptions] - Options for the underlying request object
     * {@link https://github.com/request/request#requestoptions-callback Options doc}
     *
     * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
     *
     * @param {string} [options.apiVersion] - Service Api Version.
     *
     * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
     *
     * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
     *
     * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
     *
     */
    constructor(credentials: ServiceClientCredentials, baseUri: string, options: ServiceClientOptions);

    credentials: ServiceClientCredentials;

    apiVersion: string;

    acceptLanguage: string;

    longRunningOperationRetryTimeout: number;

    generateClientRequestId: boolean;

    // Operation groups
    ios: operations.Ios;
    android: operations.Android;

            /**
         * Returns location for user tenant.
         *
         * @param {object} [options] Optional Parameters.
         * 
         * @param {object} [options.customHeaders] Headers that will be added to the
         * request
         * 
         * @param {ServiceCallback} [callback] callback function; see ServiceCallback
         * doc in ms-rest index.d.ts for details
         */
        getLocations(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.LocationCollection>): void;
        getLocations(callback: ServiceCallback<models.LocationCollection>): void;

        /**
         * Returns location for given tenant.
         *
         * @param {object} [options] Optional Parameters.
         * 
         * @param {object} [options.customHeaders] Headers that will be added to the
         * request
         * 
         * @param {ServiceCallback} [callback] callback function; see ServiceCallback
         * doc in ms-rest index.d.ts for details
         */
        getLocationByHostName(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Location>): void;
        getLocationByHostName(callback: ServiceCallback<models.Location>): void;

        /**
         * Returns Intune Manageable apps.
         *
         * @param {string} hostName Location hostName for the tenant
         * 
         * @param {object} [options] Optional Parameters.
         * 
         * @param {string} [options.filter] The filter to apply on the operation.
         * 
         * @param {number} [options.top]
         * 
         * @param {string} [options.select] select specific fields in entity.
         * 
         * @param {object} [options.customHeaders] Headers that will be added to the
         * request
         * 
         * @param {ServiceCallback} [callback] callback function; see ServiceCallback
         * doc in ms-rest index.d.ts for details
         */
        getApps(hostName: string, options: { filter? : string, top? : number, select? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ApplicationCollection>): void;
        getApps(hostName: string, callback: ServiceCallback<models.ApplicationCollection>): void;

        /**
         * Get devices for a user.
         *
         * @param {string} hostName Location hostName for the tenant
         * 
         * @param {string} userName user unique Name
         * 
         * @param {object} [options] Optional Parameters.
         * 
         * @param {string} [options.filter] The filter to apply on the operation.
         * 
         * @param {number} [options.top]
         * 
         * @param {string} [options.select] select specific fields in entity.
         * 
         * @param {object} [options.customHeaders] Headers that will be added to the
         * request
         * 
         * @param {ServiceCallback} [callback] callback function; see ServiceCallback
         * doc in ms-rest index.d.ts for details
         */
        getMAMUserDevices(hostName: string, userName: string, options: { filter? : string, top? : number, select? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DeviceCollection>): void;
        getMAMUserDevices(hostName: string, userName: string, callback: ServiceCallback<models.DeviceCollection>): void;

        /**
         * Get a unique device for a user.
         *
         * @param {string} hostName Location hostName for the tenant
         * 
         * @param {string} userName unique user name
         * 
         * @param {string} deviceName device name
         * 
         * @param {object} [options] Optional Parameters.
         * 
         * @param {string} [options.select] select specific fields in entity.
         * 
         * @param {object} [options.customHeaders] Headers that will be added to the
         * request
         * 
         * @param {ServiceCallback} [callback] callback function; see ServiceCallback
         * doc in ms-rest index.d.ts for details
         */
        getMAMUserDeviceByDeviceName(hostName: string, userName: string, deviceName: string, options: { select? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Device>): void;
        getMAMUserDeviceByDeviceName(hostName: string, userName: string, deviceName: string, callback: ServiceCallback<models.Device>): void;

        /**
         * Wipe a device for a user.
         *
         * @param {string} hostName Location hostName for the tenant
         * 
         * @param {string} userName unique user name
         * 
         * @param {string} deviceName device name
         * 
         * @param {object} [options] Optional Parameters.
         * 
         * @param {object} [options.customHeaders] Headers that will be added to the
         * request
         * 
         * @param {ServiceCallback} [callback] callback function; see ServiceCallback
         * doc in ms-rest index.d.ts for details
         */
        wipeMAMUserDevice(hostName: string, userName: string, deviceName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.WipeDeviceOperationResult>): void;
        wipeMAMUserDevice(hostName: string, userName: string, deviceName: string, callback: ServiceCallback<models.WipeDeviceOperationResult>): void;

        /**
         * Returns operationResults.
         *
         * @param {string} hostName Location hostName for the tenant
         * 
         * @param {object} [options] Optional Parameters.
         * 
         * @param {string} [options.filter] The filter to apply on the operation.
         * 
         * @param {number} [options.top]
         * 
         * @param {string} [options.select] select specific fields in entity.
         * 
         * @param {object} [options.customHeaders] Headers that will be added to the
         * request
         * 
         * @param {ServiceCallback} [callback] callback function; see ServiceCallback
         * doc in ms-rest index.d.ts for details
         */
        getOperationResults(hostName: string, options: { filter? : string, top? : number, select? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.OperationResultCollection>): void;
        getOperationResults(hostName: string, callback: ServiceCallback<models.OperationResultCollection>): void;

        /**
         * Returns Intune Tenant level statuses.
         *
         * @param {string} hostName Location hostName for the tenant
         * 
         * @param {object} [options] Optional Parameters.
         * 
         * @param {object} [options.customHeaders] Headers that will be added to the
         * request
         * 
         * @param {ServiceCallback} [callback] callback function; see ServiceCallback
         * doc in ms-rest index.d.ts for details
         */
        getMAMStatuses(hostName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.StatusesDefault>): void;
        getMAMStatuses(hostName: string, callback: ServiceCallback<models.StatusesDefault>): void;

        /**
         * Returns Intune flagged user collection
         *
         * @param {string} hostName Location hostName for the tenant
         * 
         * @param {object} [options] Optional Parameters.
         * 
         * @param {string} [options.filter] The filter to apply on the operation.
         * 
         * @param {number} [options.top]
         * 
         * @param {string} [options.select] select specific fields in entity.
         * 
         * @param {object} [options.customHeaders] Headers that will be added to the
         * request
         * 
         * @param {ServiceCallback} [callback] callback function; see ServiceCallback
         * doc in ms-rest index.d.ts for details
         */
        getMAMFlaggedUsers(hostName: string, options: { filter? : string, top? : number, select? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FlaggedUserCollection>): void;
        getMAMFlaggedUsers(hostName: string, callback: ServiceCallback<models.FlaggedUserCollection>): void;

        /**
         * Returns Intune flagged user details
         *
         * @param {string} hostName Location hostName for the tenant
         * 
         * @param {string} userName Flagged userName
         * 
         * @param {object} [options] Optional Parameters.
         * 
         * @param {string} [options.select] select specific fields in entity.
         * 
         * @param {object} [options.customHeaders] Headers that will be added to the
         * request
         * 
         * @param {ServiceCallback} [callback] callback function; see ServiceCallback
         * doc in ms-rest index.d.ts for details
         */
        getMAMFlaggedUserByName(hostName: string, userName: string, options: { select? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FlaggedUser>): void;
        getMAMFlaggedUserByName(hostName: string, userName: string, callback: ServiceCallback<models.FlaggedUser>): void;

        /**
         * Returns Intune flagged enrolled app collection for the User
         *
         * @param {string} hostName Location hostName for the tenant
         * 
         * @param {string} userName User name for the tenant
         * 
         * @param {object} [options] Optional Parameters.
         * 
         * @param {string} [options.filter] The filter to apply on the operation.
         * 
         * @param {number} [options.top]
         * 
         * @param {string} [options.select] select specific fields in entity.
         * 
         * @param {object} [options.customHeaders] Headers that will be added to the
         * request
         * 
         * @param {ServiceCallback} [callback] callback function; see ServiceCallback
         * doc in ms-rest index.d.ts for details
         */
        getMAMUserFlaggedEnrolledApps(hostName: string, userName: string, options: { filter? : string, top? : number, select? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FlaggedEnrolledAppCollection>): void;
        getMAMUserFlaggedEnrolledApps(hostName: string, userName: string, callback: ServiceCallback<models.FlaggedEnrolledAppCollection>): void;

        /**
         * Returns location for user tenant.
         *
         * @param {string} nextPageLink The NextLink from the previous successful call
         * to List operation.
         * 
         * @param {object} [options] Optional Parameters.
         * 
         * @param {object} [options.customHeaders] Headers that will be added to the
         * request
         * 
         * @param {ServiceCallback} [callback] callback function; see ServiceCallback
         * doc in ms-rest index.d.ts for details
         */
        getLocationsNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.LocationCollection>): void;
        getLocationsNext(nextPageLink: string, callback: ServiceCallback<models.LocationCollection>): void;

        /**
         * Returns Intune Manageable apps.
         *
         * @param {string} nextPageLink The NextLink from the previous successful call
         * to List operation.
         * 
         * @param {object} [options] Optional Parameters.
         * 
         * @param {object} [options.customHeaders] Headers that will be added to the
         * request
         * 
         * @param {ServiceCallback} [callback] callback function; see ServiceCallback
         * doc in ms-rest index.d.ts for details
         */
        getAppsNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ApplicationCollection>): void;
        getAppsNext(nextPageLink: string, callback: ServiceCallback<models.ApplicationCollection>): void;

        /**
         * Get devices for a user.
         *
         * @param {string} nextPageLink The NextLink from the previous successful call
         * to List operation.
         * 
         * @param {object} [options] Optional Parameters.
         * 
         * @param {object} [options.customHeaders] Headers that will be added to the
         * request
         * 
         * @param {ServiceCallback} [callback] callback function; see ServiceCallback
         * doc in ms-rest index.d.ts for details
         */
        getMAMUserDevicesNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DeviceCollection>): void;
        getMAMUserDevicesNext(nextPageLink: string, callback: ServiceCallback<models.DeviceCollection>): void;

        /**
         * Returns operationResults.
         *
         * @param {string} nextPageLink The NextLink from the previous successful call
         * to List operation.
         * 
         * @param {object} [options] Optional Parameters.
         * 
         * @param {object} [options.customHeaders] Headers that will be added to the
         * request
         * 
         * @param {ServiceCallback} [callback] callback function; see ServiceCallback
         * doc in ms-rest index.d.ts for details
         */
        getOperationResultsNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.OperationResultCollection>): void;
        getOperationResultsNext(nextPageLink: string, callback: ServiceCallback<models.OperationResultCollection>): void;

        /**
         * Returns Intune Tenant level statuses.
         *
         * @param {string} nextPageLink The NextLink from the previous successful call
         * to List operation.
         * 
         * @param {object} [options] Optional Parameters.
         * 
         * @param {object} [options.customHeaders] Headers that will be added to the
         * request
         * 
         * @param {ServiceCallback} [callback] callback function; see ServiceCallback
         * doc in ms-rest index.d.ts for details
         */
        getMAMStatusesNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.StatusesDefault>): void;
        getMAMStatusesNext(nextPageLink: string, callback: ServiceCallback<models.StatusesDefault>): void;

        /**
         * Returns Intune flagged user collection
         *
         * @param {string} nextPageLink The NextLink from the previous successful call
         * to List operation.
         * 
         * @param {object} [options] Optional Parameters.
         * 
         * @param {object} [options.customHeaders] Headers that will be added to the
         * request
         * 
         * @param {ServiceCallback} [callback] callback function; see ServiceCallback
         * doc in ms-rest index.d.ts for details
         */
        getMAMFlaggedUsersNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FlaggedUserCollection>): void;
        getMAMFlaggedUsersNext(nextPageLink: string, callback: ServiceCallback<models.FlaggedUserCollection>): void;

        /**
         * Returns Intune flagged enrolled app collection for the User
         *
         * @param {string} nextPageLink The NextLink from the previous successful call
         * to List operation.
         * 
         * @param {object} [options] Optional Parameters.
         * 
         * @param {object} [options.customHeaders] Headers that will be added to the
         * request
         * 
         * @param {ServiceCallback} [callback] callback function; see ServiceCallback
         * doc in ms-rest index.d.ts for details
         */
        getMAMUserFlaggedEnrolledAppsNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FlaggedEnrolledAppCollection>): void;
        getMAMUserFlaggedEnrolledAppsNext(nextPageLink: string, callback: ServiceCallback<models.FlaggedEnrolledAppCollection>): void;
}

export = IntuneResourceManagementClient;
