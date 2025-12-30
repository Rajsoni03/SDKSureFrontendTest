import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'

import { useCapabilities } from '@/hooks/useCapabilities'
import { CapabilityCard } from './CapabilityCard'
import { CapabilityFormModal } from './CapabilityFormModal'
import { Button } from '../ui/button'
import { apiCall } from '@/lib/apiHandler'

export function CapabilitiesPage() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'inactive'>('all')
  const [page, setPage] = useState(1)
  const [showModal, setShowModal] = useState(false)
  const [editingCapability, setEditingCapability] = useState<any | null>(null)

  const filters = useMemo(
    () => ({
      search: search || undefined,
      page,
      is_active: statusFilter === 'all' ? undefined : statusFilter === 'active',
      ordering: 'name',
    }),
    [search, statusFilter, page],
  )

  const { data, isLoading, isError, refetch, isFetching } = useCapabilities(filters)
  const capabilities = data?.results ?? []

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-wide text-emerald-300">Resources</p>
          <h2 className="text-2xl font-semibold theme-text">Capabilities</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => { setEditingCapability(null); setShowModal(true) }}>Add Capability</Button>
          <Button
            variant="secondary"
            onClick={() => apiCall(() => refetch(), { errorMessage: 'Failed to refresh capabilities' })}
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
              placeholder="Search capabilities"
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
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value as any)
                setPage(1)
              }}
              className="rounded-lg border theme-border bg-[var(--panel)] px-3 py-2 text-sm theme-text focus:outline-none"
            >
              <option value="all">All</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>

        {isError && (
          <div className="rounded-lg border theme-border bg-red-500/10 p-3 text-sm text-red-100">
            Failed to load capabilities.
          </div>
        )}

        {isLoading ? (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {[...Array(6)].map((_, idx) => (
              <div key={idx} className="h-32 animate-pulse rounded-2xl border theme-border bg-panel-soft" />
            ))}
          </div>
        ) : capabilities.length === 0 ? (
          <div className="rounded-xl border theme-border bg-panel-soft p-4 text-sm theme-muted">
            No capabilities found.
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((cap) => (
              <CapabilityCard key={cap.id} capability={cap} onEdit={(c) => { setEditingCapability(c); setShowModal(true) }} />
            ))}
          </div>
        )}
      </div>

      <CapabilityFormModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSaved={() => refetch()}
        editingCapability={editingCapability}
      />
    </div>
  )
}
