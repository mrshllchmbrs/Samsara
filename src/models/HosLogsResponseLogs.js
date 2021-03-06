/**
 * Samsara API
 * # Introduction The Samsara REST API lets you interact with the Samsara Cloud from anything that can send an HTTP request. With the Samsara API you can build powerful applications and custom solutions with sensor data.  Samsara has endpoints available to track and analyze sensors, vehicles, and entire fleets. If you’re familiar with what you can build with a REST API, the following API reference guide will be your go-to resource.  API access to the Samsara cloud is available to all Samsara administrators. If you’d like to try the API, [contact us](https://www.samsara.com/free-trial). The API is currently in beta and may be subject to frequent changes.  # Connecting to the API There are two ways to connect to the API. If you prefer to use the API in Javascript or Python, we supply SDKs which you can download here: [Javascript SDK](https://github.com/samsarahq/samsara-js), [Python SDK](https://github.com/samsarahq/samsara-python).  If you’d rather use another language to interact with the Samsara API, the endpoints and examples are in the reference guide below.  
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SamsaraApi) {
      root.SamsaraApi = {};
    }
    root.SamsaraApi.HosLogsResponseLogs = factory(root.SamsaraApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The HosLogsResponseLogs model module.
   * @module models/HosLogsResponseLogs
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>HosLogsResponseLogs</code>.
   * @alias module:models/HosLogsResponseLogs
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>HosLogsResponseLogs</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:models/HosLogsResponseLogs} obj Optional instance to populate.
   * @return {module:models/HosLogsResponseLogs} The populated <code>HosLogsResponseLogs</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('groupId')) {
        obj['groupId'] = ApiClient.convertToType(data['groupId'], 'Number');
      }
      if (data.hasOwnProperty('vehicleId')) {
        obj['vehicleId'] = ApiClient.convertToType(data['vehicleId'], 'Number');
      }
      if (data.hasOwnProperty('driverId')) {
        obj['driverId'] = ApiClient.convertToType(data['driverId'], 'Number');
      }
      if (data.hasOwnProperty('logStartMs')) {
        obj['logStartMs'] = ApiClient.convertToType(data['logStartMs'], 'Number');
      }
      if (data.hasOwnProperty('statusType')) {
        obj['statusType'] = ApiClient.convertToType(data['statusType'], 'String');
      }
      if (data.hasOwnProperty('locCity')) {
        obj['locCity'] = ApiClient.convertToType(data['locCity'], 'String');
      }
      if (data.hasOwnProperty('locState')) {
        obj['locState'] = ApiClient.convertToType(data['locState'], 'String');
      }
      if (data.hasOwnProperty('locLat')) {
        obj['locLat'] = ApiClient.convertToType(data['locLat'], 'Number');
      }
      if (data.hasOwnProperty('locLng')) {
        obj['locLng'] = ApiClient.convertToType(data['locLng'], 'Number');
      }
      if (data.hasOwnProperty('locName')) {
        obj['locName'] = ApiClient.convertToType(data['locName'], 'String');
      }
    }
    return obj;
  }

  /**
   * ID of the group.
   * @member {Number} groupId
   */
  exports.prototype['groupId'] = undefined;
  /**
   * ID of the vehicle.
   * @member {Number} vehicleId
   */
  exports.prototype['vehicleId'] = undefined;
  /**
   * ID of the driver.
   * @member {Number} driverId
   */
  exports.prototype['driverId'] = undefined;
  /**
   * The time at which the log/HOS status started in UNIX milliseconds.
   * @member {Number} logStartMs
   */
  exports.prototype['logStartMs'] = undefined;
  /**
   * The Hours of Service status type. One of 'OFF_DUTY', 'SLEEPER_BED', 'DRIVING', 'ON_DUTY'.
   * @member {String} statusType
   */
  exports.prototype['statusType'] = undefined;
  /**
   * City in which the log was recorded.
   * @member {String} locCity
   */
  exports.prototype['locCity'] = undefined;
  /**
   * State in which the log was recorded.
   * @member {String} locState
   */
  exports.prototype['locState'] = undefined;
  /**
   * Latitude at which the log was recorded.
   * @member {Number} locLat
   */
  exports.prototype['locLat'] = undefined;
  /**
   * Longitude at which the log was recorded.
   * @member {Number} locLng
   */
  exports.prototype['locLng'] = undefined;
  /**
   * Name of location at which the log was recorded.
   * @member {String} locName
   */
  exports.prototype['locName'] = undefined;



  return exports;
}));


