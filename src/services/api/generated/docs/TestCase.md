# TestCase


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**title** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**test_type** | [**TestType**](TestType.md) |  | [readonly] [default to undefined]
**tags** | [**Array&lt;Label&gt;**](Label.md) |  | [readonly] [default to undefined]
**is_active** | **boolean** |  | [optional] [default to undefined]
**created_by** | **number** |  | [optional] [default to undefined]
**created_at** | **string** |  | [readonly] [default to undefined]
**updated_at** | **string** |  | [readonly] [default to undefined]

## Example

```typescript
import { TestCase } from './api';

const instance: TestCase = {
    id,
    title,
    description,
    test_type,
    tags,
    is_active,
    created_by,
    created_at,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
