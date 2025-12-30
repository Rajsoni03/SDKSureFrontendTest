import { TestPcsApiFactory } from './api/generated/apis/test-pcs-api'
import { apiConfiguration } from './api/config'
import { apiClient } from './api/client'
import type { TestPC } from './api/generated/models/test-pc'
import type { PatchedTestPC } from './api/generated/models/patched-test-pc'

const testPcsApi = TestPcsApiFactory(apiConfiguration, undefined, apiClient)

export const testPcsService = {
  list: (params?: { search?: string; ordering?: string; page?: number; status?: string }) =>
    testPcsApi.testPcsList(params ?? {}),
  create: (payload: Partial<TestPC>) => testPcsApi.testPcsCreate({ testPC: payload as any }),
  update: (id: string, payload: PatchedTestPC) =>
    testPcsApi.testPcsPartialUpdate({ id, patchedTestPC: payload as any }),
}
