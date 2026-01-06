import { LabelsApiFactory } from './api/generated/apis/labels-api'
import { apiClient } from './api/client'
import { apiConfiguration } from './api/config'
import type { Label } from './api/generated/models/label'
import type { PatchedLabel } from './api/generated/models/patched-label'

const labelsApi = LabelsApiFactory(apiConfiguration, undefined, apiClient)

export const labelsService = {
  list: (params?: { search?: string; ordering?: string; page?: number }) =>
    labelsApi.labelsList(params ?? {}),
  create: (label: Partial<Label>) => labelsApi.labelsCreate({ label: label as any }),
  update: (id: number, payload: PatchedLabel) =>
    labelsApi.labelsPartialUpdate({ id, patchedLabel: payload as any }),
}
