import { TagsApiFactory } from './api/generated/apis/tags-api'
import { apiClient } from './api/client'
import { apiConfiguration } from './api/config'
import type { Tag } from './api/generated/models/tag'
import type { PatchedTag } from './api/generated/models/patched-tag'

const tagsApi = TagsApiFactory(apiConfiguration, undefined, apiClient)

export const tagsService = {
  list: (params?: { search?: string; ordering?: string; page?: number }) =>
    tagsApi.tagsList(params ?? {}),
  create: (tag: Partial<Tag>) => tagsApi.tagsCreate({ tag: tag as any }),
  update: (id: number, payload: PatchedTag) => tagsApi.tagsPartialUpdate({ id, patchedTag: payload as any }),
}
