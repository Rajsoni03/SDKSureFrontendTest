import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { useTestScenarios } from '@/hooks/useTestScenarios'
import { TestScenarioCard } from './TestScenarioCard'
import { apiCall } from '@/lib/apiHandler'
import { Button } from '../ui/button'
import { TestScenarioFormModal } from './TestScenarioFormModal'

export function TestScenariosPage() {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [showModal, setShowModal] = useState(false)
  const [editingScenario, setEditingScenario] = useState<any | null>(null)

  const filters = useMemo(
    () => ({
      search: search || undefined,
      page,
      ordering: 'name',
    }),
    [search, page],
  )

  const { data, isLoading, isError, refetch, isFetching } = useTestScenarios(filters)
  const scenarios = data?.results ?? []

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-wide text-emerald-300">Execution</p>
          <h2 className="text-2xl font-semibold theme-text">Test Scenarios</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            onClick={() => {
              setEditingScenario(null)
              setShowModal(true)
            }}
          >
            Add Scenario
          </Button>
          <Button
            variant="secondary"
            onClick={() => apiCall(() => refetch(), { errorMessage: 'Failed to refresh scenarios' })}
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
              placeholder="Search scenarios"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
                setPage(1)
              }}
              className="w-full bg-transparent text-sm theme-text placeholder:text-slate-500 focus:outline-none"
            />
          </div>
        </div>

        {isError && (
          <div className="rounded-lg border theme-border bg-red-500/10 p-3 text-sm text-red-100">
            Failed to load scenarios.
          </div>
        )}

        {isLoading ? (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {[...Array(6)].map((_, idx) => (
              <div key={idx} className="h-40 animate-pulse rounded-2xl border theme-border bg-panel-soft" />
            ))}
          </div>
        ) : scenarios.length === 0 ? (
          <div className="rounded-xl border theme-border bg-panel-soft p-4 text-sm theme-muted">
            No scenarios found.
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {scenarios.map((scenario) => (
              <TestScenarioCard
                key={scenario.id}
                scenario={scenario}
                onEdit={(sc) => {
                  setEditingScenario(sc)
                  setShowModal(true)
                }}
              />
            ))}
          </div>
        )}
      </div>

      <TestScenarioFormModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSaved={() => refetch()}
        editingScenario={editingScenario}
      />
    </div>
  )
}
