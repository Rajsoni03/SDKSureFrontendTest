# PatchedBoard


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [readonly] [default to undefined]
**name** | **string** | Human readable board name | [optional] [default to undefined]
**hardware_serial_number** | **string** | Hardware serial number | [optional] [default to undefined]
**project** | **string** | Project name | [optional] [default to undefined]
**platform** | [**PlatformEnum**](PlatformEnum.md) | Platform name  * &#x60;j721s2&#x60; - TI J721S2 * &#x60;j721e&#x60; - TI J721E * &#x60;j722s&#x60; - TI J722S * &#x60;j742s2&#x60; - TI J742S2 * &#x60;j784s4&#x60; - TI J784S4 * &#x60;j7200&#x60; - TI J7200 * &#x60;am62x&#x60; - TI AM62x * &#x60;am62px&#x60; - TI AM62Px | [optional] [default to undefined]
**device_type** | [**DeviceTypeEnum**](DeviceTypeEnum.md) | Type of device  * &#x60;EVM&#x60; - Evaluation Module * &#x60;SOCKET_BOARD&#x60; - Socket Board * &#x60;BREAKOUT_BOARD&#x60; - Breakout Board * &#x60;CUSTOM&#x60; - Custom | [optional] [default to undefined]
**pg_version** | **string** | Processor SDK or software version | [optional] [default to undefined]
**execution_engine** | **string** | Test execution engine | [optional] [default to undefined]
**test_farm** | [**TestFarmEnum**](TestFarmEnum.md) | Test farm/environment  * &#x60;HLOS&#x60; - HLOS (Linux/QNX) * &#x60;RTOS&#x60; - RTOS (Real-Time OS) * &#x60;BAREMETAL&#x60; - Bare-metal * &#x60;STAGING&#x60; - Staging * &#x60;INTEGRATION&#x60; - Integration | [optional] [default to undefined]
**sdk_version** | **string** | SDK/firmware version | [optional] [default to undefined]
**status** | [**BoardStatusEnum**](BoardStatusEnum.md) | Board status  * &#x60;IDLE&#x60; - Idle * &#x60;BUSY&#x60; - Busy * &#x60;UPDATING_SDK&#x60; - Updating SDK * &#x60;OFFLINE&#x60; - Offline * &#x60;DEACTIVATED&#x60; - Deactivated * &#x60;ERROR&#x60; - Error | [optional] [default to undefined]
**is_alive** | **boolean** | Whether board is responsive | [optional] [default to undefined]
**is_locked** | **boolean** | Whether board is locked for exclusive use | [optional] [default to undefined]
**board_ip** | **string** | IP address of the board | [optional] [default to undefined]
**relay_id** | **string** |  | [optional] [default to undefined]
**relay_number** | **number** | Port number on the relay | [optional] [default to undefined]
**relay** | [**Relay**](Relay.md) |  | [optional] [readonly] [default to undefined]
**test_pc_id** | **string** |  | [optional] [default to undefined]
**test_pc** | [**TestPC**](TestPC.md) |  | [optional] [readonly] [default to undefined]
**location** | **string** | Physical location | [optional] [default to undefined]
**last_sdk_update_at** | **string** | Last SDK update timestamp | [optional] [default to undefined]
**description** | **string** | Additional description | [optional] [default to undefined]
**notes** | **string** | Administrative notes | [optional] [default to undefined]
**created_at** | **string** | Creation timestamp | [optional] [readonly] [default to undefined]
**updated_at** | **string** | Last update timestamp | [optional] [readonly] [default to undefined]
**last_used_at** | **string** | Last test execution timestamp | [optional] [readonly] [default to undefined]
**last_heartbeat_at** | **string** | Last heartbeat timestamp | [optional] [readonly] [default to undefined]
**capabilities** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**capability_details** | [**Array&lt;Capability&gt;**](Capability.md) |  | [optional] [readonly] [default to undefined]
**can_execute_test** | **string** |  | [optional] [readonly] [default to undefined]
**is_healthy** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { PatchedBoard } from './api';

const instance: PatchedBoard = {
    id,
    name,
    hardware_serial_number,
    project,
    platform,
    device_type,
    pg_version,
    execution_engine,
    test_farm,
    sdk_version,
    status,
    is_alive,
    is_locked,
    board_ip,
    relay_id,
    relay_number,
    relay,
    test_pc_id,
    test_pc,
    location,
    last_sdk_update_at,
    description,
    notes,
    created_at,
    updated_at,
    last_used_at,
    last_heartbeat_at,
    capabilities,
    capability_details,
    can_execute_test,
    is_healthy,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
