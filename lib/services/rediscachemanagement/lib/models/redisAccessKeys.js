/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.15.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the RedisAccessKeys class.
 * @constructor
 * Redis cache access keys.
 * @member {string} [primaryKey] The current primary key that clients can use
 * to authenticate with redis cache.
 * 
 * @member {string} [secondaryKey] The current secondary key that clients can
 * use to authenticate with redis cache.
 * 
 */
function RedisAccessKeys() {
}

/**
 * Defines the metadata of RedisAccessKeys
 *
 * @returns {object} metadata of RedisAccessKeys
 *
 */
RedisAccessKeys.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'RedisAccessKeys',
    type: {
      name: 'Composite',
      className: 'RedisAccessKeys',
      modelProperties: {
        primaryKey: {
          required: false,
          serializedName: 'primaryKey',
          type: {
            name: 'String'
          }
        },
        secondaryKey: {
          required: false,
          serializedName: 'secondaryKey',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = RedisAccessKeys;
