# PCStats


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [readonly] [default to undefined]
**test_pc** | **string** | Reference to the TestPC | [default to undefined]
**status** | [**PCStatsStatusEnum**](PCStatsStatusEnum.md) | Overall health  * &#x60;HEALTHY&#x60; - Healthy * &#x60;WARNING&#x60; - Warning * &#x60;CRITICAL&#x60; - Critical * &#x60;UNKNOWN&#x60; - Unknown | [optional] [default to undefined]
**memory_total_gb** | **number** | Total memory in GB | [default to undefined]
**memory_used_gb** | **number** | Used memory in GB | [default to undefined]
**memory_free_gb** | **number** | Free memory in GB | [default to undefined]
**memory_percent** | **number** | Memory usage percentage | [default to undefined]
**disk_total_gb** | **number** | Total disk space in GB | [default to undefined]
**disk_used_gb** | **number** | Used disk space in GB | [default to undefined]
**disk_free_gb** | **number** | Free disk space in GB | [default to undefined]
**disk_percent** | **number** | Disk usage percentage | [default to undefined]
**cpu_percent** | **number** | CPU usage percentage | [default to undefined]
**network_io_read_mb** | **number** | Network read in MB | [optional] [default to undefined]
**network_io_write_mb** | **number** | Network write in MB | [optional] [default to undefined]
**process_count** | **number** | Number of active test processes | [default to undefined]
**thread_count** | **number** | Number of active test threads | [default to undefined]
**timestamp** | **string** | When this stat was recorded | [readonly] [default to undefined]
**is_healthy** | **string** |  | [readonly] [default to undefined]
**memory_available_gb** | **string** |  | [readonly] [default to undefined]

## Example

```typescript
import { PCStats } from './api';

const instance: PCStats = {
    id,
    test_pc,
    status,
    memory_total_gb,
    memory_used_gb,
    memory_free_gb,
    memory_percent,
    disk_total_gb,
    disk_used_gb,
    disk_free_gb,
    disk_percent,
    cpu_percent,
    network_io_read_mb,
    network_io_write_mb,
    process_count,
    thread_count,
    timestamp,
    is_healthy,
    memory_available_gb,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
