# Capability


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier | [readonly] [default to undefined]
**name** | **string** | Capability name | [default to undefined]
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
