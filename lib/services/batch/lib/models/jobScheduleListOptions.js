/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the JobScheduleListOptions class.
 * @constructor
 * Additional parameters for the list operation.
 * @member {string} [filter] An OData $filter clause.
 * 
 * @member {string} [select] An OData $select clause.
 * 
 * @member {string} [expand] An OData $expand clause.
 * 
 * @member {number} [maxResults] The maximum number of items to return in the
 * response.
 * 
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * 
 * @member {string} [clientRequestId] The caller-generated request identity,
 * in the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * 
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id identifier in the response.
 * 
 * @member {date} [ocpDate] The time the request was issued. If not specified,
 * this header will be automatically populated with the current system clock
 * time.
 * 
 */
function JobScheduleListOptions() {
}

/**
 * Defines the metadata of JobScheduleListOptions
 *
 * @returns {object} metadata of JobScheduleListOptions
 *
 */
JobScheduleListOptions.prototype.mapper = function () {
  return {
    required: false,
    type: {
      name: 'Composite',
      className: 'JobScheduleListOptions',
      modelProperties: {
        filter: {
          required: false,
          type: {
            name: 'String'
          }
        },
        select: {
          required: false,
          type: {
            name: 'String'
          }
        },
        expand: {
          required: false,
          type: {
            name: 'String'
          }
        },
        maxResults: {
          required: false,
          type: {
            name: 'Number'
          }
        },
        timeout: {
          required: false,
          defaultValue: 30,
          type: {
            name: 'Number'
          }
        },
        clientRequestId: {
          required: false,
          type: {
            name: 'String'
          }
        },
        returnClientRequestId: {
          required: false,
          type: {
            name: 'Boolean'
          }
        },
        ocpDate: {
          required: false,
          type: {
            name: 'DateTimeRfc1123'
          }
        }
      }
    }
  };
};

module.exports = JobScheduleListOptions;
