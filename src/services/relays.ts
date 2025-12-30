import { RelaysApiFactory } from './api/generated/apis/relays-api'
import { apiConfiguration } from './api/config'
import { apiClient } from './api/client'
import type { Relay } from './api/generated/models/relay'
import type { PatchedRelay } from './api/generated/models/patched-relay'

const relaysApi = RelaysApiFactory(apiConfiguration, undefined, apiClient)

export const relaysService = {
  list: (params?: { search?: string; ordering?: string; page?: number; status?: string }) =>
    relaysApi.relaysList(params ?? {}),
  create: (relay: Partial<Relay>) => relaysApi.relaysCreate({ relay: relay as any }),
  update: (id: string, payload: PatchedRelay) =>
    relaysApi.relaysPartialUpdate({ id, patchedRelay: payload as any }),
}
