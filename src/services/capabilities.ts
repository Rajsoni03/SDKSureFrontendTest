import { CapabilitiesApiFactory } from './api/generated/apis/capabilities-api'
import { apiConfiguration } from './api/config'
import { apiClient } from './api/client'
import type { Capability } from './api/generated/models/capability'
import type { PatchedCapability } from './api/generated/models/patched-capability'

const capabilitiesApi = CapabilitiesApiFactory(apiConfiguration, undefined, apiClient)

export const capabilitiesService = {
  list: (params?: { search?: string; ordering?: string; page?: number; is_active?: boolean }) =>
    capabilitiesApi.capabilitiesList(params ?? {}),
  create: (capability: Partial<Capability>) =>
    capabilitiesApi.capabilitiesCreate({ capability: capability as any }),
  update: (id: string, payload: PatchedCapability) =>
    capabilitiesApi.capabilitiesPartialUpdate({ id, patchedCapability: payload as any }),
}
