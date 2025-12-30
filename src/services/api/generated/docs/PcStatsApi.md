# PcStatsApi

All URIs are relative to *http://localhost:8000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**pcStatsList**](#pcstatslist) | **GET** /api/v1/pc-stats/ | |
|[**pcStatsRetrieve**](#pcstatsretrieve) | **GET** /api/v1/pc-stats/{id}/ | |

# **pcStatsList**
> PaginatedPCStatsList pcStatsList()

Read-only viewset for test PC performance stats.

### Example

```typescript
import {
    PcStatsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PcStatsApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let search: string; //A search term. (optional) (default to undefined)

const { status, data } = await apiInstance.pcStatsList(
    ordering,
    page,
    search
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **search** | [**string**] | A search term. | (optional) defaults to undefined|


### Return type

**PaginatedPCStatsList**

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pcStatsRetrieve**
> PCStats pcStatsRetrieve()

Read-only viewset for test PC performance stats.

### Example

```typescript
import {
    PcStatsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PcStatsApi(configuration);

let id: string; //A UUID string identifying this PC Stats. (default to undefined)

const { status, data } = await apiInstance.pcStatsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | A UUID string identifying this PC Stats. | defaults to undefined|


### Return type

**PCStats**

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

