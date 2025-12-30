import { BoardsApiFactory } from './api/generated/apis/boards-api'
import { apiConfiguration } from './api/config'
import { apiClient } from './api/client'
import type { PatchedBoard } from './api/generated/models/patched-board'
import type { Board } from './api/generated/models/board'

const boardsApi = BoardsApiFactory(apiConfiguration, undefined, apiClient)

export const boardsService = {
  list: (params?: {
    capabilities?: string[]
    isAlive?: boolean
    isLocked?: boolean
    name?: string
    ordering?: string
    page?: number
    platform?: string
    project?: string
    relayId?: string
    search?: string
    status?: string
    testFarm?: string
    testPcId?: string
  }) => boardsApi.boardsList(params ?? {}),
  retrieve: (id: string) => boardsApi.boardsRetrieve({ id }),
  create: (board: Partial<Board>) => boardsApi.boardsCreate({ board: board as any }),
  update: (id: string, payload: PatchedBoard) =>
    boardsApi.boardsPartialUpdate({ id, patchedBoard: payload as any }),
}
