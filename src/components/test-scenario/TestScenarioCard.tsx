import { FileCode2, Tag, Workflow } from 'lucide-react'
import type { TestScenario } from '@/services/api/generated/models/test-scenario'

interface Props {
  scenario: TestScenario
  onEdit?: (scenario: TestScenario) => void
}

export function TestScenarioCard({ scenario, onEdit }: Props) {
  return (
    <div className="relative overflow-hidden rounded-2xl border theme-border theme-panel-soft p-4 transition hover:-translate-y-0.5 hover:border-emerald-400/50 hover:shadow-[var(--shadow)]">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5" />
      <div className="relative space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-emerald-300">Scenario</p>
            <h3 className="text-lg font-semibold theme-text">{scenario.name}</h3>
            {scenario.description && <p className="text-xs theme-muted">{scenario.description}</p>}
          </div>
          {onEdit && (
            <button
              onClick={() => onEdit(scenario)}
              className="inline-flex items-center gap-2 rounded-lg border theme-border bg-panel-soft px-3 py-1 text-xs font-semibold theme-text transition hover:border-emerald-400/50"
            >
              <Workflow className="h-4 w-4" />
              Edit
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2 text-xs theme-muted">
          <span className="inline-flex items-center gap-1 rounded-lg border theme-border px-2 py-1">
            <FileCode2 className="h-3.5 w-3.5 text-emerald-300" />
            {scenario.test_cases?.length ?? 0} test cases
          </span>
          {scenario.labels?.length ? (
            scenario.labels.map((label) => (
              <span
                key={label.id}
                className="inline-flex items-center gap-1 rounded-full border theme-border bg-black/5 px-2 py-1 theme-text"
              >
                <Tag className="h-3 w-3 text-emerald-300" />
                {label.name}
              </span>
            ))
          ) : (
            <span className="text-xs theme-muted">No labels</span>
          )}
        </div>

        <div className="flex items-center justify-between text-[11px] theme-muted">
          <span>Created: {new Date(scenario.created_at).toLocaleString()}</span>
          <span>Updated: {new Date(scenario.updated_at).toLocaleString()}</span>
        </div>
      </div>
    </div>
  )
}
