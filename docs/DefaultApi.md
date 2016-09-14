# SamsaraApi.DefaultApi

All URIs are relative to *https://api.samsara.com/v1*

Method | Description
------------- | -------------
[**addFleetAddress**](DefaultApi.md#addFleetAddress) | This method adds an address book entry to the specified group.
[**getFleet**](DefaultApi.md#getFleet) | This method returns a list of the vehicles in the Samsara Cloud and information about them.
[**getFleetDrivers**](DefaultApi.md#getFleetDrivers) | Get all the drivers for the specified group.
[**getFleetHosLogs**](DefaultApi.md#getFleetHosLogs) | Get the HOS (hours of service) logs for the specified driver.
[**getFleetLocations**](DefaultApi.md#getFleetLocations) | This method returns the current location in latitude and longitude of all vehicles in a requested group.
[**getFleetTrips**](DefaultApi.md#getFleetTrips) | This method returns a set of historical trips data for the specified vehicle in the specified time range.
[**getSensors**](DefaultApi.md#getSensors) | This method returns a list of the sensor objects in the Samsara Cloud and information about them.
[**getSensorsHistory**](DefaultApi.md#getSensorsHistory) | This method returns a set of historical data for the specified sensors in the specified time range and at the specified time resolution.
[**getSensorsHumidity**](DefaultApi.md#getSensorsHumidity) | This method returns the current relative humidity for the requested sensors.
[**getSensorsTemperature**](DefaultApi.md#getSensorsTemperature) | This method returns the current ambient temperature (and probe temperature if applicable) for the requested sensors.
[**updateVehicles**](DefaultApi.md#updateVehicles) | This method enables the mutation of metadata for vehicles in the Samsara Cloud.


<a name="addFleetAddress"></a>
# **addFleetAddress**

This method adds an address book entry to the specified group.

### Example
```javascript
var SamsaraApi = require('samsara_api');

var apiInstance = new SamsaraApi.DefaultApi();

var accessToken = "accessToken_example"; // String | Samsara API access token.

var addressParam = new SamsaraApi.AddressParam(); // AddressParam | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addFleetAddress(accessToken, addressParam, callback);
```

### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **accessToken** | **String**| Samsara API access token.
 **addressParam** | [**AddressParam**](params/AddressParam.md)|

### Response

null (empty response body)

<a name="getFleet"></a>
# **getFleet**

This method returns a list of the vehicles in the Samsara Cloud and information about them.

### Example
```javascript
var SamsaraApi = require('samsara_api');

var apiInstance = new SamsaraApi.DefaultApi();

var accessToken = "accessToken_example"; // String | Samsara API access token.

var groupParam = new SamsaraApi.GroupParam(); // GroupParam | Group ID to query.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFleet(accessToken, groupParam, callback);
```

### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **accessToken** | **String**| Samsara API access token.
 **groupParam** | [**GroupParam**](params/GroupParam.md)| Group ID to query.

### Response

[**InlineResponse200**](responses/InlineResponse200.md)

<a name="getFleetDrivers"></a>
# **getFleetDrivers**
> DriversRespose getFleetDrivers(accessToken, groupDriversParam)

Get all the drivers for the specified group.

### Example
```javascript
var SamsaraApi = require('samsara_api');

var apiInstance = new SamsaraApi.DefaultApi();

var accessToken = "accessToken_example"; // String | 

var groupDriversParam = new SamsaraApi.GroupDriversParam(); // GroupDriversParam | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFleetDrivers(accessToken, groupDriversParam, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessToken** | **String**|  | 
 **groupDriversParam** | [**GroupDriversParam**](GroupDriversParam.md)|  | 

### Return type

[**DriversRespose**](DriversRespose.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFleetHosLogs"></a>
# **getFleetHosLogs**
> HosLogsResponse getFleetHosLogs(accessToken, hosLogsParam)

Get the HOS (hours of service) logs for the specified driver.

### Example
```javascript
var SamsaraApi = require('samsara_api');

var apiInstance = new SamsaraApi.DefaultApi();

var accessToken = "accessToken_example"; // String | 

var hosLogsParam = new SamsaraApi.HosLogsParam(); // HosLogsParam | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFleetHosLogs(accessToken, hosLogsParam, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessToken** | **String**|  | 
 **hosLogsParam** | [**HosLogsParam**](HosLogsParam.md)|  | 

### Return type

[**HosLogsResponse**](HosLogsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFleetLocations"></a>
# **getFleetLocations**

This method returns the current location in latitude and longitude of all vehicles in a requested group.

### Example
```javascript
var SamsaraApi = require('samsara_api');

var apiInstance = new SamsaraApi.DefaultApi();

var accessToken = "accessToken_example"; // String | Samsara API access token.

var groupParam = new SamsaraApi.GroupParam(); // GroupParam | Group ID to query.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFleetLocations(accessToken, groupParam, callback);
```

### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **accessToken** | **String**| Samsara API access token.
 **groupParam** | [**GroupParam**](params/GroupParam.md)| Group ID to query.

### Response

[**InlineResponse2001**](responses/InlineResponse2001.md)

<a name="getFleetTrips"></a>
# **getFleetTrips**

This method returns a set of historical trips data for the specified vehicle in the specified time range.

### Example
```javascript
var SamsaraApi = require('samsara_api');

var apiInstance = new SamsaraApi.DefaultApi();

var accessToken = "accessToken_example"; // String | Samsara API access token.

var tripsParam = new SamsaraApi.TripsParam(); // TripsParam | Group ID, vehicle ID and time range to query.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFleetTrips(accessToken, tripsParam, callback);
```

### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **accessToken** | **String**| Samsara API access token.
 **tripsParam** | [**TripsParam**](params/TripsParam.md)| Group ID, vehicle ID and time range to query.

### Response

[**TripResponse**](responses/TripResponse.md)

<a name="getSensors"></a>
# **getSensors**

This method returns a list of the sensor objects in the Samsara Cloud and information about them.

### Example
```javascript
var SamsaraApi = require('samsara_api');

var apiInstance = new SamsaraApi.DefaultApi();

var accessToken = "accessToken_example"; // String | Samsara API access token.

var groupParam = new SamsaraApi.GroupParam(); // GroupParam | Group ID to query.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSensors(accessToken, groupParam, callback);
```

### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **accessToken** | **String**| Samsara API access token.
 **groupParam** | [**GroupParam**](params/GroupParam.md)| Group ID to query.

### Response

[**InlineResponse2002**](responses/InlineResponse2002.md)

<a name="getSensorsHistory"></a>
# **getSensorsHistory**

This method returns a set of historical data for the specified sensors in the specified time range and at the specified time resolution.

### Example
```javascript
var SamsaraApi = require('samsara_api');

var apiInstance = new SamsaraApi.DefaultApi();

var accessToken = "accessToken_example"; // String | Samsara API access token.

var historyParam = new SamsaraApi.HistoryParam(); // HistoryParam | Group ID, time range and resolution, and list of sensor ID, field pairs to query.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSensorsHistory(accessToken, historyParam, callback);
```

### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **accessToken** | **String**| Samsara API access token.
 **historyParam** | [**HistoryParam**](params/HistoryParam.md)| Group ID, time range and resolution, and list of sensor ID, field pairs to query.

### Response

[**SensorHistoryResponse**](responses/SensorHistoryResponse.md)

<a name="getSensorsHumidity"></a>
# **getSensorsHumidity**

This method returns the current relative humidity for the requested sensors.

### Example
```javascript
var SamsaraApi = require('samsara_api');

var apiInstance = new SamsaraApi.DefaultApi();

var accessToken = "accessToken_example"; // String | Samsara API access token.

var sensorParam = new SamsaraApi.SensorParam(); // SensorParam | Group ID and list of sensor IDs to query.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSensorsHumidity(accessToken, sensorParam, callback);
```

### Parameters

Name | Type | Description 
------------- | ------------- | -------------
 **accessToken** | **String**| Samsara API access token.
 **sensorParam** | [**SensorParam**](params/SensorParam.md)| Group ID and list of sensor IDs to query.

### Response

[**HumidityResponse**](responses/HumidityResponse.md)

<a name="getSensorsTemperature"></a>
# **getSensorsTemperature**

This method returns the current ambient temperature (and probe temperature if applicable) for the requested sensors.

### Example
```javascript
var SamsaraApi = require('samsara_api');

var apiInstance = new SamsaraApi.DefaultApi();

var accessToken = "accessToken_example"; // String | Samsara API access token.

var sensorParam = new SamsaraApi.SensorParam(); // SensorParam | Group ID and list of sensor IDs to query.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSensorsTemperature(accessToken, sensorParam, callback);
```

### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **accessToken** | **String**| Samsara API access token.
 **sensorParam** | [**SensorParam**](params/SensorParam.md)| Group ID and list of sensor IDs to query.

### Response

[**TemperatureResponse**](responses/TemperatureResponse.md)

<a name="updateVehicles"></a>
# **updateVehicles**

This method enables the mutation of metadata for vehicles in the Samsara Cloud.

### Example
```javascript
var SamsaraApi = require('samsara_api');

var apiInstance = new SamsaraApi.DefaultApi();

var accessToken = "accessToken_example"; // String | Samsara API access token.

var vehicleUpdateParam = new SamsaraApi.VehicleUpdateParam(); // VehicleUpdateParam | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateVehicles(accessToken, vehicleUpdateParam, callback);
```

### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **accessToken** | **String**| Samsara API access token.
 **vehicleUpdateParam** | [**VehicleUpdateParam**](params/VehicleUpdateParam.md)|

### Response

null (empty response body)
