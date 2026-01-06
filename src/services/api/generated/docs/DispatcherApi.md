# DispatcherApi

All URIs are relative to *http://localhost:8000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**dispatcherCompleteCreate**](#dispatchercompletecreate) | **POST** /api/v1/dispatcher/complete/ | |
|[**dispatcherCreate**](#dispatchercreate) | **POST** /api/v1/dispatcher/ | |
|[**dispatcherRescheduleCreate**](#dispatcherreschedulecreate) | **POST** /api/v1/dispatcher/reschedule/ | |
|[**dispatcherRetrieve**](#dispatcherretrieve) | **GET** /api/v1/dispatcher/ | |

# **dispatcherCompleteCreate**
> dispatcherCompleteCreate()

Mark a request done/failed and free the board.

### Example

```typescript
import {
    DispatcherApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DispatcherApi(configuration);

const { status, data } = await apiInstance.dispatcherCompleteCreate();
```

### Parameters
This endpoint does not have any parameters.


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
|**200** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dispatcherCreate**
> dispatcherCreate()

Submit a batch of requests for scheduling.

### Example

```typescript
import {
    DispatcherApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DispatcherApi(configuration);

const { status, data } = await apiInstance.dispatcherCreate();
```

### Parameters
This endpoint does not have any parameters.


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
|**201** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dispatcherRescheduleCreate**
> dispatcherRescheduleCreate()

Manually trigger scheduling.

### Example

```typescript
import {
    DispatcherApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DispatcherApi(configuration);

const { status, data } = await apiInstance.dispatcherRescheduleCreate();
```

### Parameters
This endpoint does not have any parameters.


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
|**200** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dispatcherRetrieve**
> dispatcherRetrieve()

Return current dispatcher status and recent requests.

### Example

```typescript
import {
    DispatcherApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DispatcherApi(configuration);

const { status, data } = await apiInstance.dispatcherRetrieve();
```

### Parameters
This endpoint does not have any parameters.


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
|**200** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

