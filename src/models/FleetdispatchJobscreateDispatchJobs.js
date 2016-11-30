/**
 * Samsara API
 * 
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
    root.SamsaraApi.FleetdispatchJobscreateDispatchJobs = factory(root.SamsaraApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FleetdispatchJobscreateDispatchJobs model module.
   * @module models/FleetdispatchJobscreateDispatchJobs
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>FleetdispatchJobscreateDispatchJobs</code>.
   * @alias module:models/FleetdispatchJobscreateDispatchJobs
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>FleetdispatchJobscreateDispatchJobs</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:models/FleetdispatchJobscreateDispatchJobs} obj Optional instance to populate.
   * @return {module:models/FleetdispatchJobscreateDispatchJobs} The populated <code>FleetdispatchJobscreateDispatchJobs</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('external_identifier')) {
        obj['external_identifier'] = ApiClient.convertToType(data['external_identifier'], 'String');
      }
      if (data.hasOwnProperty('driver_id')) {
        obj['driver_id'] = ApiClient.convertToType(data['driver_id'], 'Integer');
      }
      if (data.hasOwnProperty('vehicle_id')) {
        obj['vehicle_id'] = ApiClient.convertToType(data['vehicle_id'], 'Integer');
      }
      if (data.hasOwnProperty('job_state')) {
        obj['job_state'] = ApiClient.convertToType(data['job_state'], 'String');
      }
      if (data.hasOwnProperty('scheduled_arrival_time_ms')) {
        obj['scheduled_arrival_time_ms'] = ApiClient.convertToType(data['scheduled_arrival_time_ms'], 'Integer');
      }
      if (data.hasOwnProperty('started_at_ms')) {
        obj['started_at_ms'] = ApiClient.convertToType(data['started_at_ms'], 'Integer');
      }
      if (data.hasOwnProperty('completed_at_ms')) {
        obj['completed_at_ms'] = ApiClient.convertToType(data['completed_at_ms'], 'Integer');
      }
      if (data.hasOwnProperty('cancelled_at_ms')) {
        obj['cancelled_at_ms'] = ApiClient.convertToType(data['cancelled_at_ms'], 'Integer');
      }
      if (data.hasOwnProperty('job_created_at_ms')) {
        obj['job_created_at_ms'] = ApiClient.convertToType(data['job_created_at_ms'], 'Integer');
      }
      if (data.hasOwnProperty('notes')) {
        obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
      }
      if (data.hasOwnProperty('destination_name')) {
        obj['destination_name'] = ApiClient.convertToType(data['destination_name'], 'String');
      }
      if (data.hasOwnProperty('destination_address')) {
        obj['destination_address'] = ApiClient.convertToType(data['destination_address'], 'String');
      }
      if (data.hasOwnProperty('destination_lat')) {
        obj['destination_lat'] = ApiClient.convertToType(data['destination_lat'], 'Number');
      }
      if (data.hasOwnProperty('destination_lng')) {
        obj['destination_lng'] = ApiClient.convertToType(data['destination_lng'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} external_identifier
   */
  exports.prototype['external_identifier'] = undefined;
  /**
   * @member {Integer} driver_id
   */
  exports.prototype['driver_id'] = undefined;
  /**
   * @member {Integer} vehicle_id
   */
  exports.prototype['vehicle_id'] = undefined;
  /**
   * @member {module:models/FleetdispatchJobscreateDispatchJobs.JobStateEnum} job_state
   */
  exports.prototype['job_state'] = undefined;
  /**
   * @member {Integer} scheduled_arrival_time_ms
   */
  exports.prototype['scheduled_arrival_time_ms'] = undefined;
  /**
   * @member {Integer} started_at_ms
   */
  exports.prototype['started_at_ms'] = undefined;
  /**
   * @member {Integer} completed_at_ms
   */
  exports.prototype['completed_at_ms'] = undefined;
  /**
   * @member {Integer} cancelled_at_ms
   */
  exports.prototype['cancelled_at_ms'] = undefined;
  /**
   * @member {Integer} job_created_at_ms
   */
  exports.prototype['job_created_at_ms'] = undefined;
  /**
   * @member {String} notes
   */
  exports.prototype['notes'] = undefined;
  /**
   * @member {String} destination_name
   */
  exports.prototype['destination_name'] = undefined;
  /**
   * @member {String} destination_address
   */
  exports.prototype['destination_address'] = undefined;
  /**
   * @member {Number} destination_lat
   */
  exports.prototype['destination_lat'] = undefined;
  /**
   * @member {Number} destination_lng
   */
  exports.prototype['destination_lng'] = undefined;


  /**
   * Allowed values for the <code>job_state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.JobStateEnum = {
    /**
     * value: "JobState_Unassigned"
     * @const
     */
    "Unassigned": "JobState_Unassigned",
    /**
     * value: "JobState_Assigned"
     * @const
     */
    "Assigned": "JobState_Assigned",
    /**
     * value: "JobState_Started"
     * @const
     */
    "Started": "JobState_Started",
    /**
     * value: "JobState_Completed"
     * @const
     */
    "Completed": "JobState_Completed",
    /**
     * value: "JobState_Cancelled"
     * @const
     */
    "Cancelled": "JobState_Cancelled"  };


  return exports;
}));


