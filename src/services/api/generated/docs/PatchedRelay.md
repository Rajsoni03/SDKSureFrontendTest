# PatchedRelay


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [readonly] [default to undefined]
**relay_name** | **string** | Unique name for this relay | [optional] [default to undefined]
**model_type** | [**ModelTypeEnum**](ModelTypeEnum.md) | Type of relay  * &#x60;POWER_EXTENSION&#x60; - Power Extension * &#x60;ETH_008_A&#x60; - Ethernet 008 Type A * &#x60;ETH_008_B&#x60; - Ethernet 008 Type B * &#x60;ETH_016&#x60; - Ethernet 016 * &#x60;CUSTOM&#x60; - Custom | [optional] [default to undefined]
**status** | [**RelayStatusEnum**](RelayStatusEnum.md) | Relay status  * &#x60;ACTIVE&#x60; - Active * &#x60;INACTIVE&#x60; - Inactive * &#x60;MAINTENANCE&#x60; - Maintenance * &#x60;FAULT&#x60; - Fault | [optional] [default to undefined]
**location** | **string** | Physical location (e.g., Rack A, Shelf 2) | [optional] [default to undefined]
**ip_address** | **string** | IP address of the relay | [optional] [default to undefined]
**mac_address** | **string** | MAC address in format XX:XX:XX:XX:XX:XX | [optional] [default to undefined]
**port_count** | **number** | Number of ports on this relay | [optional] [default to undefined]
**created_at** | **string** |  | [optional] [readonly] [default to undefined]
**updated_at** | **string** |  | [optional] [readonly] [default to undefined]
**last_checked_at** | **string** | Last health check timestamp | [optional] [readonly] [default to undefined]
**is_healthy** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { PatchedRelay } from './api';

const instance: PatchedRelay = {
    id,
    relay_name,
    model_type,
    status,
    location,
    ip_address,
    mac_address,
    port_count,
    created_at,
    updated_at,
    last_checked_at,
    is_healthy,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
