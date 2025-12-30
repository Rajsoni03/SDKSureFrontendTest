# RelaysApi

All URIs are relative to *http://localhost:8000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**relaysCreate**](#relayscreate) | **POST** /api/v1/relays/ | |
|[**relaysDestroy**](#relaysdestroy) | **DELETE** /api/v1/relays/{id}/ | |
|[**relaysList**](#relayslist) | **GET** /api/v1/relays/ | |
|[**relaysPartialUpdate**](#relayspartialupdate) | **PATCH** /api/v1/relays/{id}/ | |
|[**relaysRetrieve**](#relaysretrieve) | **GET** /api/v1/relays/{id}/ | |
|[**relaysUpdate**](#relaysupdate) | **PUT** /api/v1/relays/{id}/ | |

# **relaysCreate**
> Relay relaysCreate(relay)

CRUD operations for relays.

### Example

```typescript
import {
    RelaysApi,
    Configuration,
    Relay
} from './api';

const configuration = new Configuration();
const apiInstance = new RelaysApi(configuration);

let relay: Relay; //

const { status, data } = await apiInstance.relaysCreate(
    relay
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **relay** | **Relay**|  | |


### Return type

**Relay**

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **relaysDestroy**
> relaysDestroy()

CRUD operations for relays.

### Example

```typescript
import {
    RelaysApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RelaysApi(configuration);

let id: string; //A UUID string identifying this relay. (default to undefined)

const { status, data } = await apiInstance.relaysDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | A UUID string identifying this relay. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **relaysList**
> PaginatedRelayList relaysList()

CRUD operations for relays.

### Example

```typescript
import {
    RelaysApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RelaysApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let search: string; //A search term. (optional) (default to undefined)

const { status, data } = await apiInstance.relaysList(
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

**PaginatedRelayList**

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

# **relaysPartialUpdate**
> Relay relaysPartialUpdate()

CRUD operations for relays.

### Example

```typescript
import {
    RelaysApi,
    Configuration,
    PatchedRelay
} from './api';

const configuration = new Configuration();
const apiInstance = new RelaysApi(configuration);

let id: string; //A UUID string identifying this relay. (default to undefined)
let patchedRelay: PatchedRelay; // (optional)

const { status, data } = await apiInstance.relaysPartialUpdate(
    id,
    patchedRelay
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedRelay** | **PatchedRelay**|  | |
| **id** | [**string**] | A UUID string identifying this relay. | defaults to undefined|


### Return type

**Relay**

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **relaysRetrieve**
> Relay relaysRetrieve()

CRUD operations for relays.

### Example

```typescript
import {
    RelaysApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RelaysApi(configuration);

let id: string; //A UUID string identifying this relay. (default to undefined)

const { status, data } = await apiInstance.relaysRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | A UUID string identifying this relay. | defaults to undefined|


### Return type

**Relay**

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

# **relaysUpdate**
> Relay relaysUpdate(relay)

CRUD operations for relays.

### Example

```typescript
import {
    RelaysApi,
    Configuration,
    Relay
} from './api';

const configuration = new Configuration();
const apiInstance = new RelaysApi(configuration);

let id: string; //A UUID string identifying this relay. (default to undefined)
let relay: Relay; //

const { status, data } = await apiInstance.relaysUpdate(
    id,
    relay
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **relay** | **Relay**|  | |
| **id** | [**string**] | A UUID string identifying this relay. | defaults to undefined|


### Return type

**Relay**

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

