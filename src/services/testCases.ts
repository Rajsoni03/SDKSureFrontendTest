import { TestCasesApiFactory } from './api/generated/apis/test-cases-api'
import { apiConfiguration } from './api/config'
import { apiClient } from './api/client'
import type { PatchedTestCase } from './api/generated/models/patched-test-case'
import type { TestCase } from './api/generated/models/test-case'

const testCasesApi = TestCasesApiFactory(apiConfiguration, undefined, apiClient)

export const testCasesService = {
  list: (params?: { search?: string; ordering?: string; page?: number; is_active?: boolean }) =>
    testCasesApi.testCasesList(params ?? {}),
  retrieve: (id: number) => testCasesApi.testCasesRetrieve({ id }),
  create: (payload: Partial<TestCase>) => testCasesApi.testCasesCreate({ testCase: payload as any }),
  update: (id: number, payload: PatchedTestCase) =>
    testCasesApi.testCasesPartialUpdate({ id, patchedTestCase: payload as any }),
}
