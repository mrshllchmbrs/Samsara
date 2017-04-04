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
        obj['driver_id'] = ApiClient.convertToType(data['driver_id'], 'Number');
      }
      if (data.hasOwnProperty('vehicle_id')) {
        obj['vehicle_id'] = ApiClient.convertToType(data['vehicle_id'], 'Number');
      }
      if (data.hasOwnProperty('job_state')) {
        obj['job_state'] = ApiClient.convertToType(data['job_state'], 'String');
      }
      if (data.hasOwnProperty('scheduled_arrival_time_ms')) {
        obj['scheduled_arrival_time_ms'] = ApiClient.convertToType(data['scheduled_arrival_time_ms'], 'Number');
      }
      if (data.hasOwnProperty('started_at_ms')) {
        obj['started_at_ms'] = ApiClient.convertToType(data['started_at_ms'], 'Number');
      }
      if (data.hasOwnProperty('completed_at_ms')) {
        obj['completed_at_ms'] = ApiClient.convertToType(data['completed_at_ms'], 'Number');
      }
      if (data.hasOwnProperty('cancelled_at_ms')) {
        obj['cancelled_at_ms'] = ApiClient.convertToType(data['cancelled_at_ms'], 'Number');
      }
      if (data.hasOwnProperty('job_created_at_ms')) {
        obj['job_created_at_ms'] = ApiClient.convertToType(data['job_created_at_ms'], 'Number');
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
   * A string that can be used to map jobs in the Samsara database to jobs in an external database.
   * @member {String} external_identifier
   */
  exports.prototype['external_identifier'] = undefined;
  /**
   * ID of the driver assigned to the dispatch job.
   * @member {Number} driver_id
   */
  exports.prototype['driver_id'] = undefined;
  /**
   * ID of the vehicle used for the dispatch job.
   * @member {Number} vehicle_id
   */
  exports.prototype['vehicle_id'] = undefined;
  /**
   * The current state of the dispatch job.
   * @member {module:models/FleetdispatchJobscreateDispatchJobs.JobStateEnum} job_state
   */
  exports.prototype['job_state'] = undefined;
  /**
   * The time at which the assigned driver is scheduled to arrive at the job destination.
   * @member {Number} scheduled_arrival_time_ms
   */
  exports.prototype['scheduled_arrival_time_ms'] = undefined;
  /**
   * The time at which the assigned driver started fulfilling the job (e.g. started driving to the destination).
   * @member {Number} started_at_ms
   */
  exports.prototype['started_at_ms'] = undefined;
  /**
   * The time at which the job was marked complete.
   * @member {Number} completed_at_ms
   */
  exports.prototype['completed_at_ms'] = undefined;
  /**
   * The time at which the job was marked cancelled.
   * @member {Number} cancelled_at_ms
   */
  exports.prototype['cancelled_at_ms'] = undefined;
  /**
   * The time at which the job was created.
   * @member {Number} job_created_at_ms
   */
  exports.prototype['job_created_at_ms'] = undefined;
  /**
   * Notes regarding the details of this job.
   * @member {String} notes
   */
  exports.prototype['notes'] = undefined;
  /**
   * The name of the job destination.
   * @member {String} destination_name
   */
  exports.prototype['destination_name'] = undefined;
  /**
   * The address of the job destination, as it would be recognized if provided to maps.google.com
   * @member {String} destination_address
   */
  exports.prototype['destination_address'] = undefined;
  /**
   * Latitude of the destination in decimal degrees.
   * @member {Number} destination_lat
   */
  exports.prototype['destination_lat'] = undefined;
  /**
   * Latitude of the destination in decimal degrees.
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


