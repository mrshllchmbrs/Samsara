/*
This is an example script to retrieve and print the locations for
all vehicles of a group.

*/
var SamsaraApi = require('samsara_api');

//var accessToken = '<SAMSARA_API_TOKEN>';
//var groupId = <GROUP_ID>;

// Create an instance of the SamsaraApi client.
var apiInstance = new SamsaraApi.DefaultApi();

// Assemble the request parameters
var groupParam = new SamsaraApi.GroupParam(groupId)

var callback = function(error, data, response) {
    if (error) {
	console.error(error);
    } else {
	console.log(JSON.parse(response.text).vehicles);
    }
};

// Call getFleetLocations()
apiInstance.getFleetLocations(accessToken, groupParam, callback);
