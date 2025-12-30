# PatchedTestRun


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [readonly] [default to undefined]
**test_case** | **number** |  | [optional] [default to undefined]
**board** | **string** |  | [optional] [default to undefined]
**initiated_by** | **number** |  | [optional] [default to undefined]
**status** | [**TestRunStatusEnum**](TestRunStatusEnum.md) |  | [optional] [default to undefined]
**started_at** | **string** |  | [optional] [readonly] [default to undefined]
**finished_at** | **string** |  | [optional] [readonly] [default to undefined]
**output_log** | **string** |  | [optional] [default to undefined]
**results** | [**Array&lt;TestResult&gt;**](TestResult.md) |  | [optional] [readonly] [default to undefined]
**created_at** | **string** |  | [optional] [readonly] [default to undefined]
**updated_at** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { PatchedTestRun } from './api';

const instance: PatchedTestRun = {
    id,
    test_case,
    board,
    initiated_by,
    status,
    started_at,
    finished_at,
    output_log,
    results,
    created_at,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
