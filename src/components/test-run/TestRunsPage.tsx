import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { useTestRuns } from '@/hooks/useTestRuns'
import { TestRunCard } from './TestRunCard'
import { apiCall } from '@/lib/apiHandler'
import { Button } from '../ui/button'
import { useLabels } from '@/hooks/useLabels'
import { useTestScenarios } from '@/hooks/useTestScenarios'
import { SearchableSelect } from '../ui/SearchableSelect'
import { TestRunFormModal } from './TestRunFormModal'

export function TestRunsPage() {
  const [search, setSearch] = useState('')
  const [labelId, setLabelId] = useState<string>('')
  const [scenarioId, setScenarioId] = useState<string>('')
  const [page, setPage] = useState(1)
  const [showModal, setShowModal] = useState(false)

  const filters = useMemo(
    () => ({
      search: search || undefined,
      label: labelId ? Number(labelId) : undefined,
      scenario: scenarioId ? Number(scenarioId) : undefined,
      page,
      ordering: '-created_at',
    }),
    [search, labelId, scenarioId, page],
  )

  const { data, isLoading, isError, refetch, isFetching } = useTestRuns(filters)
  const runs = data?.results ?? []
  const { data: labelsData } = useLabels({ ordering: 'name', page: 1 })
  const { data: scenariosData } = useTestScenarios({ ordering: 'name', page: 1 })

  const labelOptions =
    labelsData?.results?.map((l) => ({
      label: l.name,
      value: String(l.id),
    })) ?? []
  const scenarioOptions =
    scenariosData?.results?.map((s) => ({
      label: s.name,
      value: String(s.id),
    })) ?? []

  return (
    <>
      <div className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-wide text-emerald-300">Execution</p>
            <h2 className="text-2xl font-semibold theme-text">Test Runs</h2>
          </div>
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => setShowModal(true)}>Add Test Run</Button>
          <Button
            variant="secondary"
            onClick={() => apiCall(() => refetch(), { errorMessage: 'Failed to refresh runs' })}
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
              placeholder="Search test runs"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
                setPage(1)
              }}
              className="w-full bg-transparent text-sm theme-text placeholder:text-slate-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <label className="text-xs theme-muted">Scenario</label>
              <div className="w-48">
                <SearchableSelect
                  options={scenarioOptions}
                  value={scenarioId}
                  placeholder="All scenarios"
                  onChange={(val) => {
                    setScenarioId(val ?? '')
                    setPage(1)
                  }}
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-xs theme-muted">Label</label>
              <div className="w-44">
                <SearchableSelect
                  options={labelOptions}
                  value={labelId}
                  placeholder="All labels"
                  onChange={(val) => {
                    setLabelId(val ?? '')
                    setPage(1)
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {isError && (
          <div className="rounded-lg border theme-border bg-red-500/10 p-3 text-sm text-red-100">
            Failed to load test runs.
          </div>
        )}

        {isLoading ? (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {[...Array(6)].map((_, idx) => (
              <div key={idx} className="h-36 animate-pulse rounded-2xl border theme-border bg-panel-soft" />
            ))}
          </div>
        ) : runs.length === 0 ? (
          <div className="rounded-xl border theme-border bg-panel-soft p-4 text-sm theme-muted">
            No test runs found.
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {runs.map((run) => (
              <TestRunCard key={run.id} run={run} />
            ))}
          </div>
        )}
      </div>
      </div>

      <TestRunFormModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSaved={() => {
          setShowModal(false)
          refetch()
        }}
      />
    </>
  )
}
