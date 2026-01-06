# TestScenariosApi

All URIs are relative to *http://localhost:8000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**testScenariosCreate**](#testscenarioscreate) | **POST** /api/v1/test-scenarios/ | |
|[**testScenariosDestroy**](#testscenariosdestroy) | **DELETE** /api/v1/test-scenarios/{id}/ | |
|[**testScenariosList**](#testscenarioslist) | **GET** /api/v1/test-scenarios/ | |
|[**testScenariosPartialUpdate**](#testscenariospartialupdate) | **PATCH** /api/v1/test-scenarios/{id}/ | |
|[**testScenariosRetrieve**](#testscenariosretrieve) | **GET** /api/v1/test-scenarios/{id}/ | |
|[**testScenariosUpdate**](#testscenariosupdate) | **PUT** /api/v1/test-scenarios/{id}/ | |

# **testScenariosCreate**
> TestScenario testScenariosCreate(testScenario)


### Example

```typescript
import {
    TestScenariosApi,
    Configuration,
    TestScenario
} from './api';

const configuration = new Configuration();
const apiInstance = new TestScenariosApi(configuration);

let testScenario: TestScenario; //

const { status, data } = await apiInstance.testScenariosCreate(
    testScenario
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **testScenario** | **TestScenario**|  | |


### Return type

**TestScenario**

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

# **testScenariosDestroy**
> testScenariosDestroy()


### Example

```typescript
import {
    TestScenariosApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TestScenariosApi(configuration);

let id: number; //A unique integer value identifying this test scenario. (default to undefined)

const { status, data } = await apiInstance.testScenariosDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this test scenario. | defaults to undefined|


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

# **testScenariosList**
> PaginatedTestScenarioList testScenariosList()


### Example

```typescript
import {
    TestScenariosApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TestScenariosApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let search: string; //A search term. (optional) (default to undefined)

const { status, data } = await apiInstance.testScenariosList(
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

**PaginatedTestScenarioList**

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

# **testScenariosPartialUpdate**
> TestScenario testScenariosPartialUpdate()


### Example

```typescript
import {
    TestScenariosApi,
    Configuration,
    PatchedTestScenario
} from './api';

const configuration = new Configuration();
const apiInstance = new TestScenariosApi(configuration);

let id: number; //A unique integer value identifying this test scenario. (default to undefined)
let patchedTestScenario: PatchedTestScenario; // (optional)

const { status, data } = await apiInstance.testScenariosPartialUpdate(
    id,
    patchedTestScenario
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedTestScenario** | **PatchedTestScenario**|  | |
| **id** | [**number**] | A unique integer value identifying this test scenario. | defaults to undefined|


### Return type

**TestScenario**

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

# **testScenariosRetrieve**
> TestScenario testScenariosRetrieve()


### Example

```typescript
import {
    TestScenariosApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TestScenariosApi(configuration);

let id: number; //A unique integer value identifying this test scenario. (default to undefined)

const { status, data } = await apiInstance.testScenariosRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this test scenario. | defaults to undefined|


### Return type

**TestScenario**

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

# **testScenariosUpdate**
> TestScenario testScenariosUpdate(testScenario)


### Example

```typescript
import {
    TestScenariosApi,
    Configuration,
    TestScenario
} from './api';

const configuration = new Configuration();
const apiInstance = new TestScenariosApi(configuration);

let id: number; //A unique integer value identifying this test scenario. (default to undefined)
let testScenario: TestScenario; //

const { status, data } = await apiInstance.testScenariosUpdate(
    id,
    testScenario
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **testScenario** | **TestScenario**|  | |
| **id** | [**number**] | A unique integer value identifying this test scenario. | defaults to undefined|


### Return type

**TestScenario**

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

