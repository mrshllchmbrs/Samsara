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
    define(['ApiClient', 'models/FleetdispatchJobsupdateDispatchJobs'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FleetdispatchJobsupdateDispatchJobs'));
  } else {
    // Browser globals (root is window)
    if (!root.SamsaraApi) {
      root.SamsaraApi = {};
    }
    root.SamsaraApi.UpdateDispatchJobsParam = factory(root.SamsaraApi.ApiClient, root.SamsaraApi.FleetdispatchJobsupdateDispatchJobs);
  }
}(this, function(ApiClient, FleetdispatchJobsupdateDispatchJobs) {
  'use strict';




  /**
   * The UpdateDispatchJobsParam model module.
   * @module models/UpdateDispatchJobsParam
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UpdateDispatchJobsParam</code>.
   * @alias module:models/UpdateDispatchJobsParam
   * @class
   * @param groupId {Integer} 
   * @param dispatchJobs {Array.<module:models/FleetdispatchJobsupdateDispatchJobs>} 
   */
  var exports = function(groupId, dispatchJobs) {
    var _this = this;

    _this['group_id'] = groupId;
    _this['dispatch_jobs'] = dispatchJobs;
  };

  /**
   * Constructs a <code>UpdateDispatchJobsParam</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:models/UpdateDispatchJobsParam} obj Optional instance to populate.
   * @return {module:models/UpdateDispatchJobsParam} The populated <code>UpdateDispatchJobsParam</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('group_id')) {
        obj['group_id'] = ApiClient.convertToType(data['group_id'], 'Integer');
      }
      if (data.hasOwnProperty('dispatch_jobs')) {
        obj['dispatch_jobs'] = ApiClient.convertToType(data['dispatch_jobs'], [FleetdispatchJobsupdateDispatchJobs]);
      }
    }
    return obj;
  }

  /**
   * @member {Integer} group_id
   */
  exports.prototype['group_id'] = undefined;
  /**
   * @member {Array.<module:models/FleetdispatchJobsupdateDispatchJobs>} dispatch_jobs
   */
  exports.prototype['dispatch_jobs'] = undefined;



  return exports;
}));

