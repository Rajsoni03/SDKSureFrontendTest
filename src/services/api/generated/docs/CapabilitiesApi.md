# CapabilitiesApi

All URIs are relative to *http://localhost:8000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**capabilitiesCreate**](#capabilitiescreate) | **POST** /api/v1/capabilities/ | |
|[**capabilitiesDestroy**](#capabilitiesdestroy) | **DELETE** /api/v1/capabilities/{id}/ | |
|[**capabilitiesList**](#capabilitieslist) | **GET** /api/v1/capabilities/ | |
|[**capabilitiesPartialUpdate**](#capabilitiespartialupdate) | **PATCH** /api/v1/capabilities/{id}/ | |
|[**capabilitiesRetrieve**](#capabilitiesretrieve) | **GET** /api/v1/capabilities/{id}/ | |
|[**capabilitiesUpdate**](#capabilitiesupdate) | **PUT** /api/v1/capabilities/{id}/ | |

# **capabilitiesCreate**
> Capability capabilitiesCreate(capability)

CRUD operations for board capabilities.

### Example

```typescript
import {
    CapabilitiesApi,
    Configuration,
    Capability
} from './api';

const configuration = new Configuration();
const apiInstance = new CapabilitiesApi(configuration);

let capability: Capability; //

const { status, data } = await apiInstance.capabilitiesCreate(
    capability
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **capability** | **Capability**|  | |


### Return type

**Capability**

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

# **capabilitiesDestroy**
> capabilitiesDestroy()

CRUD operations for board capabilities.

### Example

```typescript
import {
    CapabilitiesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CapabilitiesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.capabilitiesDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


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

# **capabilitiesList**
> PaginatedCapabilityList capabilitiesList()

CRUD operations for board capabilities.

### Example

```typescript
import {
    CapabilitiesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CapabilitiesApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let search: string; //A search term. (optional) (default to undefined)

const { status, data } = await apiInstance.capabilitiesList(
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

**PaginatedCapabilityList**

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

# **capabilitiesPartialUpdate**
> Capability capabilitiesPartialUpdate()

CRUD operations for board capabilities.

### Example

```typescript
import {
    CapabilitiesApi,
    Configuration,
    PatchedCapability
} from './api';

const configuration = new Configuration();
const apiInstance = new CapabilitiesApi(configuration);

let id: string; // (default to undefined)
let patchedCapability: PatchedCapability; // (optional)

const { status, data } = await apiInstance.capabilitiesPartialUpdate(
    id,
    patchedCapability
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedCapability** | **PatchedCapability**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Capability**

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

# **capabilitiesRetrieve**
> Capability capabilitiesRetrieve()

CRUD operations for board capabilities.

### Example

```typescript
import {
    CapabilitiesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CapabilitiesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.capabilitiesRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Capability**

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

# **capabilitiesUpdate**
> Capability capabilitiesUpdate(capability)

CRUD operations for board capabilities.

### Example

```typescript
import {
    CapabilitiesApi,
    Configuration,
    Capability
} from './api';

const configuration = new Configuration();
const apiInstance = new CapabilitiesApi(configuration);

let id: string; // (default to undefined)
let capability: Capability; //

const { status, data } = await apiInstance.capabilitiesUpdate(
    id,
    capability
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **capability** | **Capability**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Capability**

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

