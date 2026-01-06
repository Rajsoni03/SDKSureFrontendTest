# LabelsApi

All URIs are relative to *http://localhost:8000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**labelsCreate**](#labelscreate) | **POST** /api/v1/labels/ | |
|[**labelsDestroy**](#labelsdestroy) | **DELETE** /api/v1/labels/{id}/ | |
|[**labelsList**](#labelslist) | **GET** /api/v1/labels/ | |
|[**labelsPartialUpdate**](#labelspartialupdate) | **PATCH** /api/v1/labels/{id}/ | |
|[**labelsRetrieve**](#labelsretrieve) | **GET** /api/v1/labels/{id}/ | |
|[**labelsUpdate**](#labelsupdate) | **PUT** /api/v1/labels/{id}/ | |

# **labelsCreate**
> Label labelsCreate(label)


### Example

```typescript
import {
    LabelsApi,
    Configuration,
    Label
} from './api';

const configuration = new Configuration();
const apiInstance = new LabelsApi(configuration);

let label: Label; //

const { status, data } = await apiInstance.labelsCreate(
    label
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **label** | **Label**|  | |


### Return type

**Label**

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

# **labelsDestroy**
> labelsDestroy()


### Example

```typescript
import {
    LabelsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LabelsApi(configuration);

let id: number; //A unique integer value identifying this label. (default to undefined)

const { status, data } = await apiInstance.labelsDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this label. | defaults to undefined|


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

# **labelsList**
> PaginatedLabelList labelsList()


### Example

```typescript
import {
    LabelsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LabelsApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let search: string; //A search term. (optional) (default to undefined)

const { status, data } = await apiInstance.labelsList(
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

**PaginatedLabelList**

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

# **labelsPartialUpdate**
> Label labelsPartialUpdate()


### Example

```typescript
import {
    LabelsApi,
    Configuration,
    PatchedLabel
} from './api';

const configuration = new Configuration();
const apiInstance = new LabelsApi(configuration);

let id: number; //A unique integer value identifying this label. (default to undefined)
let patchedLabel: PatchedLabel; // (optional)

const { status, data } = await apiInstance.labelsPartialUpdate(
    id,
    patchedLabel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedLabel** | **PatchedLabel**|  | |
| **id** | [**number**] | A unique integer value identifying this label. | defaults to undefined|


### Return type

**Label**

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

# **labelsRetrieve**
> Label labelsRetrieve()


### Example

```typescript
import {
    LabelsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LabelsApi(configuration);

let id: number; //A unique integer value identifying this label. (default to undefined)

const { status, data } = await apiInstance.labelsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this label. | defaults to undefined|


### Return type

**Label**

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

# **labelsUpdate**
> Label labelsUpdate(label)


### Example

```typescript
import {
    LabelsApi,
    Configuration,
    Label
} from './api';

const configuration = new Configuration();
const apiInstance = new LabelsApi(configuration);

let id: number; //A unique integer value identifying this label. (default to undefined)
let label: Label; //

const { status, data } = await apiInstance.labelsUpdate(
    id,
    label
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **label** | **Label**|  | |
| **id** | [**number**] | A unique integer value identifying this label. | defaults to undefined|


### Return type

**Label**

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

