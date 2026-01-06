# PatchedTestScenario


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [readonly] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**test_cases** | [**Array&lt;TestCaseSummary&gt;**](TestCaseSummary.md) |  | [optional] [readonly] [default to undefined]
**test_case_ids** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**labels** | [**Array&lt;Label&gt;**](Label.md) |  | [optional] [readonly] [default to undefined]
**label_ids** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**created_by** | **number** |  | [optional] [readonly] [default to undefined]
**updated_by** | **number** |  | [optional] [readonly] [default to undefined]
**created_at** | **string** |  | [optional] [readonly] [default to undefined]
**updated_at** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { PatchedTestScenario } from './api';

const instance: PatchedTestScenario = {
    id,
    name,
    description,
    test_cases,
    test_case_ids,
    labels,
    label_ids,
    created_by,
    updated_by,
    created_at,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
