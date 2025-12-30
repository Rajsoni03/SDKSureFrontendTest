import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'

import { useRelays } from '@/hooks/useRelays'
import { RelayCard } from './RelayCard'
import { RelayFormModal } from './RelayFormModal'
import { Button } from '../ui/button'
import { apiCall } from '@/lib/apiHandler'

export function RelaysPage() {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState<string>('')
  const [page, setPage] = useState(1)
  const [showModal, setShowModal] = useState(false)
  const [editing, setEditing] = useState<any | null>(null)

  const filters = useMemo(
    () => ({
      search: search || undefined,
      status: status || undefined,
      page,
      ordering: 'relay_name',
    }),
    [search, status, page],
  )

  const { data, isLoading, isError, refetch, isFetching } = useRelays(filters)
  const relays = data?.results ?? []

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-wide text-emerald-300">Infrastructure</p>
          <h2 className="text-2xl font-semibold theme-text">Relays</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => { setEditing(null); setShowModal(true) }}>Add Relay</Button>
          <Button
            variant="secondary"
            onClick={() => apiCall(() => refetch(), { errorMessage: 'Failed to refresh relays' })}
            disabled={isFetching}
          >
            {isFetching ? 'Refreshing...' : 'Refresh'}
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-3 rounded-2xl border theme-border theme-panel-soft p-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-1 items-center gap-2 rounded-lg border theme-border bg-[var(--panel)] px-3 py-2">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              placeholder="Search relays"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
                setPage(1)
              }}
              className="w-full bg-transparent text-sm theme-text placeholder:text-slate-500 focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xs theme-muted">Status</label>
            <select
              value={status}
              onChange={(e) => {
                setStatus(e.target.value)
                setPage(1)
              }}
              className="rounded-lg border theme-border bg-[var(--panel)] px-3 py-2 text-sm theme-text focus:outline-none"
            >
              <option value="">All</option>
              <option value="ACTIVE">Active</option>
              <option value="INACTIVE">Inactive</option>
              <option value="MAINTENANCE">Maintenance</option>
              <option value="FAULT">Fault</option>
            </select>
          </div>
        </div>

        {isError && (
          <div className="rounded-lg border theme-border bg-red-500/10 p-3 text-sm text-red-100">
            Failed to load relays.
          </div>
        )}

        {isLoading ? (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {[...Array(6)].map((_, idx) => (
              <div key={idx} className="h-36 animate-pulse rounded-2xl border theme-border bg-panel-soft" />
            ))}
          </div>
        ) : relays.length === 0 ? (
          <div className="rounded-xl border theme-border bg-panel-soft p-4 text-sm theme-muted">
            No relays found.
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {relays.map((relay) => (
              <RelayCard
                key={relay.id}
                relay={relay}
                onEdit={(r) => {
                  setEditing(r)
                  setShowModal(true)
                }}
              />
            ))}
          </div>
        )}
      </div>

      <RelayFormModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSaved={() => refetch()}
        editingRelay={editing}
      />
    </div>
  )
}
