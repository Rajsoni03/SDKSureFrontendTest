# TestScenario


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**test_cases** | [**Array&lt;TestCaseSummary&gt;**](TestCaseSummary.md) |  | [readonly] [default to undefined]
**test_case_ids** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**labels** | [**Array&lt;Label&gt;**](Label.md) |  | [readonly] [default to undefined]
**label_ids** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**created_by** | **number** |  | [readonly] [default to undefined]
**updated_by** | **number** |  | [readonly] [default to undefined]
**created_at** | **string** |  | [readonly] [default to undefined]
**updated_at** | **string** |  | [readonly] [default to undefined]

## Example

```typescript
import { TestScenario } from './api';

const instance: TestScenario = {
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
