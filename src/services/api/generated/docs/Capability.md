# Capability


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier | [readonly] [default to undefined]
**name** | [**NameEnum**](NameEnum.md) | Capability name  * &#x60;CMD&#x60; - Command Execution * &#x60;CAMERA&#x60; - Camera Testing * &#x60;DISPLAY&#x60; - Display Output * &#x60;SOUND&#x60; - Sound/Audio * &#x60;FILE&#x60; - File System * &#x60;SENSOR&#x60; - Sensor Reading * &#x60;GPIO&#x60; - GPIO Control * &#x60;ADC&#x60; - Analog-to-Digital * &#x60;NETWORK&#x60; - Network Connectivity | [default to undefined]
**description** | **string** | Detailed description of this capability | [optional] [default to undefined]
**is_active** | **boolean** | Whether this capability can be used | [optional] [default to undefined]
**created_at** | **string** |  | [readonly] [default to undefined]
**updated_at** | **string** |  | [readonly] [default to undefined]

## Example

```typescript
import { Capability } from './api';

const instance: Capability = {
    id,
    name,
    description,
    is_active,
    created_at,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
