import { TestScenariosApiFactory } from './api/generated/apis/test-scenarios-api'
import { apiConfiguration } from './api/config'
import { apiClient } from './api/client'
import type { TestScenario } from './api/generated/models/test-scenario'
import type { PatchedTestScenario } from './api/generated/models/patched-test-scenario'

const testScenariosApi = TestScenariosApiFactory(apiConfiguration, undefined, apiClient)

export const testScenariosService = {
  list: (params?: { search?: string; ordering?: string; page?: number }) =>
    testScenariosApi.testScenariosList(params ?? {}),
  create: (payload: Partial<TestScenario>) =>
    testScenariosApi.testScenariosCreate({ testScenario: payload as any }),
  update: (id: number, payload: PatchedTestScenario) =>
    testScenariosApi.testScenariosPartialUpdate({ id, patchedTestScenario: payload as any }),
  retrieve: (id: number) => testScenariosApi.testScenariosRetrieve({ id }),
}
