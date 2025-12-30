import { SystemConfigurationsApiFactory } from './api/generated/apis/system-configurations-api'
import { apiClient } from './api/client'
import { apiConfiguration } from './api/config'
import type { SystemConfiguration } from './api/generated/models/system-configuration'
import type { PatchedSystemConfiguration } from './api/generated/models/patched-system-configuration'

const systemConfigsApi = SystemConfigurationsApiFactory(apiConfiguration, undefined, apiClient)

export const systemConfigurationsService = {
  list: () => systemConfigsApi.systemConfigurationsList(),
  create: (config: Partial<SystemConfiguration>) =>
    systemConfigsApi.systemConfigurationsCreate({ systemConfiguration: config as any }),
  update: (id: number, payload: PatchedSystemConfiguration) =>
    systemConfigsApi.systemConfigurationsPartialUpdate({ id, patchedSystemConfiguration: payload as any }),
}
