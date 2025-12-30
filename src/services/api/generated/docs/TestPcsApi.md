# TestPcsApi

All URIs are relative to *http://localhost:8000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**testPcsCreate**](#testpcscreate) | **POST** /api/v1/test-pcs/ | |
|[**testPcsDestroy**](#testpcsdestroy) | **DELETE** /api/v1/test-pcs/{id}/ | |
|[**testPcsList**](#testpcslist) | **GET** /api/v1/test-pcs/ | |
|[**testPcsPartialUpdate**](#testpcspartialupdate) | **PATCH** /api/v1/test-pcs/{id}/ | |
|[**testPcsRetrieve**](#testpcsretrieve) | **GET** /api/v1/test-pcs/{id}/ | |
|[**testPcsUpdate**](#testpcsupdate) | **PUT** /api/v1/test-pcs/{id}/ | |

# **testPcsCreate**
> TestPC testPcsCreate(testPC)

CRUD operations for test PCs.

### Example

```typescript
import {
    TestPcsApi,
    Configuration,
    TestPC
} from './api';

const configuration = new Configuration();
const apiInstance = new TestPcsApi(configuration);

let testPC: TestPC; //

const { status, data } = await apiInstance.testPcsCreate(
    testPC
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **testPC** | **TestPC**|  | |


### Return type

**TestPC**

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

# **testPcsDestroy**
> testPcsDestroy()

CRUD operations for test PCs.

### Example

```typescript
import {
    TestPcsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TestPcsApi(configuration);

let id: string; //A UUID string identifying this Test PC. (default to undefined)

const { status, data } = await apiInstance.testPcsDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | A UUID string identifying this Test PC. | defaults to undefined|


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

# **testPcsList**
> PaginatedTestPCList testPcsList()

CRUD operations for test PCs.

### Example

```typescript
import {
    TestPcsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TestPcsApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let search: string; //A search term. (optional) (default to undefined)

const { status, data } = await apiInstance.testPcsList(
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

**PaginatedTestPCList**

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

# **testPcsPartialUpdate**
> TestPC testPcsPartialUpdate()

CRUD operations for test PCs.

### Example

```typescript
import {
    TestPcsApi,
    Configuration,
    PatchedTestPC
} from './api';

const configuration = new Configuration();
const apiInstance = new TestPcsApi(configuration);

let id: string; //A UUID string identifying this Test PC. (default to undefined)
let patchedTestPC: PatchedTestPC; // (optional)

const { status, data } = await apiInstance.testPcsPartialUpdate(
    id,
    patchedTestPC
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedTestPC** | **PatchedTestPC**|  | |
| **id** | [**string**] | A UUID string identifying this Test PC. | defaults to undefined|


### Return type

**TestPC**

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

# **testPcsRetrieve**
> TestPC testPcsRetrieve()

CRUD operations for test PCs.

### Example

```typescript
import {
    TestPcsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TestPcsApi(configuration);

let id: string; //A UUID string identifying this Test PC. (default to undefined)

const { status, data } = await apiInstance.testPcsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | A UUID string identifying this Test PC. | defaults to undefined|


### Return type

**TestPC**

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

# **testPcsUpdate**
> TestPC testPcsUpdate(testPC)

CRUD operations for test PCs.

### Example

```typescript
import {
    TestPcsApi,
    Configuration,
    TestPC
} from './api';

const configuration = new Configuration();
const apiInstance = new TestPcsApi(configuration);

let id: string; //A UUID string identifying this Test PC. (default to undefined)
let testPC: TestPC; //

const { status, data } = await apiInstance.testPcsUpdate(
    id,
    testPC
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **testPC** | **TestPC**|  | |
| **id** | [**string**] | A UUID string identifying this Test PC. | defaults to undefined|


### Return type

**TestPC**

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

