# BoardsApi

All URIs are relative to *http://localhost:8000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**boardsCreate**](#boardscreate) | **POST** /api/v1/boards/ | |
|[**boardsDestroy**](#boardsdestroy) | **DELETE** /api/v1/boards/{id}/ | |
|[**boardsList**](#boardslist) | **GET** /api/v1/boards/ | |
|[**boardsLogsRetrieve**](#boardslogsretrieve) | **GET** /api/v1/boards/{id}/logs/ | |
|[**boardsPartialUpdate**](#boardspartialupdate) | **PATCH** /api/v1/boards/{id}/ | |
|[**boardsRetrieve**](#boardsretrieve) | **GET** /api/v1/boards/{id}/ | |
|[**boardsUpdate**](#boardsupdate) | **PUT** /api/v1/boards/{id}/ | |

# **boardsCreate**
> Board boardsCreate(board)

CRUD operations for boards.

### Example

```typescript
import {
    BoardsApi,
    Configuration,
    Board
} from './api';

const configuration = new Configuration();
const apiInstance = new BoardsApi(configuration);

let board: Board; //

const { status, data } = await apiInstance.boardsCreate(
    board
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **board** | **Board**|  | |


### Return type

**Board**

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

# **boardsDestroy**
> boardsDestroy()

CRUD operations for boards.

### Example

```typescript
import {
    BoardsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BoardsApi(configuration);

let id: string; //A UUID string identifying this Board. (default to undefined)

const { status, data } = await apiInstance.boardsDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | A UUID string identifying this Board. | defaults to undefined|


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

# **boardsList**
> PaginatedBoardList boardsList()

CRUD operations for boards.

### Example

```typescript
import {
    BoardsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BoardsApi(configuration);

let capabilities: Array<string>; //Unique identifier (optional) (default to undefined)
let isAlive: boolean; // (optional) (default to undefined)
let isLocked: boolean; // (optional) (default to undefined)
let name: string; // (optional) (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let platform: string; // (optional) (default to undefined)
let project: string; // (optional) (default to undefined)
let relayId: string; // (optional) (default to undefined)
let search: string; //A search term. (optional) (default to undefined)
let status: string; // (optional) (default to undefined)
let testFarm: string; // (optional) (default to undefined)
let testPcId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.boardsList(
    capabilities,
    isAlive,
    isLocked,
    name,
    ordering,
    page,
    platform,
    project,
    relayId,
    search,
    status,
    testFarm,
    testPcId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **capabilities** | **Array&lt;string&gt;** | Unique identifier | (optional) defaults to undefined|
| **isAlive** | [**boolean**] |  | (optional) defaults to undefined|
| **isLocked** | [**boolean**] |  | (optional) defaults to undefined|
| **name** | [**string**] |  | (optional) defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **platform** | [**string**] |  | (optional) defaults to undefined|
| **project** | [**string**] |  | (optional) defaults to undefined|
| **relayId** | [**string**] |  | (optional) defaults to undefined|
| **search** | [**string**] | A search term. | (optional) defaults to undefined|
| **status** | [**string**] |  | (optional) defaults to undefined|
| **testFarm** | [**string**] |  | (optional) defaults to undefined|
| **testPcId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**PaginatedBoardList**

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

# **boardsLogsRetrieve**
> Board boardsLogsRetrieve()

CRUD operations for boards.

### Example

```typescript
import {
    BoardsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BoardsApi(configuration);

let id: string; //A UUID string identifying this Board. (default to undefined)

const { status, data } = await apiInstance.boardsLogsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | A UUID string identifying this Board. | defaults to undefined|


### Return type

**Board**

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

# **boardsPartialUpdate**
> Board boardsPartialUpdate()

CRUD operations for boards.

### Example

```typescript
import {
    BoardsApi,
    Configuration,
    PatchedBoard
} from './api';

const configuration = new Configuration();
const apiInstance = new BoardsApi(configuration);

let id: string; //A UUID string identifying this Board. (default to undefined)
let patchedBoard: PatchedBoard; // (optional)

const { status, data } = await apiInstance.boardsPartialUpdate(
    id,
    patchedBoard
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedBoard** | **PatchedBoard**|  | |
| **id** | [**string**] | A UUID string identifying this Board. | defaults to undefined|


### Return type

**Board**

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

# **boardsRetrieve**
> Board boardsRetrieve()

CRUD operations for boards.

### Example

```typescript
import {
    BoardsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BoardsApi(configuration);

let id: string; //A UUID string identifying this Board. (default to undefined)

const { status, data } = await apiInstance.boardsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | A UUID string identifying this Board. | defaults to undefined|


### Return type

**Board**

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

# **boardsUpdate**
> Board boardsUpdate(board)

CRUD operations for boards.

### Example

```typescript
import {
    BoardsApi,
    Configuration,
    Board
} from './api';

const configuration = new Configuration();
const apiInstance = new BoardsApi(configuration);

let id: string; //A UUID string identifying this Board. (default to undefined)
let board: Board; //

const { status, data } = await apiInstance.boardsUpdate(
    id,
    board
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **board** | **Board**|  | |
| **id** | [**string**] | A UUID string identifying this Board. | defaults to undefined|


### Return type

**Board**

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

