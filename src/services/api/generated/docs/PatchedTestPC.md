# PatchedTestPC


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [readonly] [default to undefined]
**hostname** | **string** | Hostname of the PC | [optional] [default to undefined]
**ip_address** | **string** | IP address of the PC | [optional] [default to undefined]
**domain_name** | **string** | FQDN of the PC | [optional] [default to undefined]
**status** | [**TestPCStatusEnum**](TestPCStatusEnum.md) | PC status  * &#x60;ONLINE&#x60; - Online * &#x60;OFFLINE&#x60; - Offline * &#x60;MAINTENANCE&#x60; - Maintenance * &#x60;INITIALIZING&#x60; - Initializing | [optional] [default to undefined]
**os_version** | [**OsVersionEnum**](OsVersionEnum.md) | Operating system version  * &#x60;ubuntu_18_04&#x60; - Ubuntu 18.04 LTS * &#x60;ubuntu_20_04&#x60; - Ubuntu 20.04 LTS * &#x60;ubuntu_22_04&#x60; - Ubuntu 22.04 LTS * &#x60;ubuntu_24_04&#x60; - Ubuntu 24.04 LTS * &#x60;centos_7&#x60; - CentOS 7 * &#x60;centos_8&#x60; - CentOS 8 * &#x60;centos_9&#x60; - CentOS 9 * &#x60;windows_10&#x60; - Windows 10 * &#x60;windows_11&#x60; - Windows 11 * &#x60;macos_ventura&#x60; - macOS Ventura * &#x60;macos_sonoma&#x60; - macOS Sonoma | [optional] [default to undefined]
**disk_mountpoint** | **string** | Primary disk mount point | [optional] [default to undefined]
**location** | **string** | Physical location in lab/datacenter/rack | [optional] [default to undefined]
**comment** | **string** | Additional notes about this PC | [optional] [default to undefined]
**created_at** | **string** |  | [optional] [readonly] [default to undefined]
**updated_at** | **string** |  | [optional] [readonly] [default to undefined]
**last_heartbeat_at** | **string** | Last heartbeat received from this PC | [optional] [readonly] [default to undefined]
**is_online** | **string** |  | [optional] [readonly] [default to undefined]
**is_available_for_testing** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { PatchedTestPC } from './api';

const instance: PatchedTestPC = {
    id,
    hostname,
    ip_address,
    domain_name,
    status,
    os_version,
    disk_mountpoint,
    location,
    comment,
    created_at,
    updated_at,
    last_heartbeat_at,
    is_online,
    is_available_for_testing,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
