import { TestRunsApiFactory } from './api/generated/apis/test-runs-api'
import { apiConfiguration } from './api/config'
import { apiClient } from './api/client'

const testRunsApi = TestRunsApiFactory(apiConfiguration, undefined, apiClient)

export const testRunsService = {
  list: (params?: {
    label?: number
    name?: string
    ordering?: string
    page?: number
    scenario?: number
    search?: string
  }) => testRunsApi.testRunsList(params ?? {}),
  create: (payload: any) => testRunsApi.testRunsCreate({ testRun: payload as any }),
  update: (id: number, payload: any) => testRunsApi.testRunsPartialUpdate({ id, patchedTestRun: payload as any }),
  retrieve: (id: number) => testRunsApi.testRunsRetrieve({ id }),
}
