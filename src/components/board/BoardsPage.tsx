import { useMemo, useState } from 'react'
import { Loader2, Search } from 'lucide-react'

import { useBoards } from '@/hooks/useBoards'
import { BoardCard } from './BoardCard'
import { BoardStatusEnum } from '@/services/api/generated/models/board-status-enum'
import { apiCall } from '@/lib/apiHandler'
import { BoardFormModal } from './BoardFormModal'
import { Button } from '../ui/button'
import type { PlatformEnum } from '@/services/api/generated/models/platform-enum'

const statusOptions = [
  { label: 'All', value: '' },
  { label: 'Idle', value: BoardStatusEnum.IDLE },
  { label: 'Busy', value: BoardStatusEnum.BUSY },
  { label: 'Updating SDK', value: BoardStatusEnum.UPDATING_SDK },
  { label: 'Offline', value: BoardStatusEnum.OFFLINE },
  { label: 'Error', value: BoardStatusEnum.ERROR },
  { label: 'Deactivated', value: BoardStatusEnum.DEACTIVATED },
]

const platformOptions: { label: string; value: PlatformEnum | '' }[] = [
  { label: 'All', value: '' },
  { label: 'TI J721S2', value: 'j721s2' },
  { label: 'TI J721E', value: 'j721e' },
  { label: 'TI J722S', value: 'j722s' },
  { label: 'TI J742S2', value: 'j742s2' },
  { label: 'TI J784S4', value: 'j784s4' },
  { label: 'TI J7200', value: 'j7200' },
  { label: 'TI AM62x', value: 'am62x' },
  { label: 'TI AM62Px', value: 'am62px' },
]

export function BoardsPage() {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState<string>('')
  const [platform, setPlatform] = useState<string>('')
  const [showModal, setShowModal] = useState(false)

  const filters = useMemo(
    () => ({
      search: search || undefined,
      status: status || undefined,
      platform: platform || undefined,
      ordering: '-updated_at',
    }),
    [search, status, platform],
  )

  const { data, isLoading, isError, refetch, isFetching } = useBoards(filters)
  const boards = data?.results ?? []

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-wide text-emerald-300">Inventory</p>
          <h2 className="text-2xl font-semibold theme-text">Boards</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => setShowModal(true)}>Add Board</Button>
          <button
            type="button"
            onClick={() =>
              apiCall(() => refetch(), {
                errorMessage: 'Failed to refresh boards',
              })
            }
            className="inline-flex items-center gap-2 rounded-lg border theme-border bg-panel-soft px-3 py-2 text-sm font-medium theme-text transition hover:border-emerald-400/40"
          >
            {isFetching ? <Loader2 className="h-4 w-4 animate-spin" /> : <span>Refresh</span>}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 rounded-2xl border theme-border theme-panel-soft p-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-1 items-center gap-2 rounded-lg border theme-border bg-[var(--panel)] px-3 py-2">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              placeholder="Search boards by name or serial"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent text-sm theme-text placeholder:text-slate-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <label className="text-xs theme-muted">Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="rounded-lg border theme-border bg-[var(--panel)] px-3 py-2 text-sm theme-text focus:outline-none"
              >
                {statusOptions.map((opt) => (
                  <option key={opt.label} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-xs theme-muted">Platform</label>
              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="rounded-lg border theme-border bg-[var(--panel)] px-3 py-2 text-sm theme-text focus:outline-none"
              >
                {platformOptions.map((opt) => (
                  <option key={opt.label} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {isError && (
          <div className="rounded-lg border theme-border bg-red-500/10 p-3 text-sm text-red-100">
            Failed to load boards. Please check your connection.
          </div>
        )}

        {isLoading ? (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {[...Array(6)].map((_, idx) => (
              <div key={idx} className="h-40 animate-pulse rounded-2xl border theme-border bg-panel-soft" />
            ))}
          </div>
        ) : boards.length === 0 ? (
          <div className="rounded-xl border theme-border bg-panel-soft p-4 text-sm theme-muted">
            No boards found for the current filters.
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {boards.map((board) => (
              <BoardCard key={board.id} board={board} />
            ))}
          </div>
        )}
      </div>

      <BoardFormModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onCreated={() => refetch()}
      />
    </div>
  )
}
