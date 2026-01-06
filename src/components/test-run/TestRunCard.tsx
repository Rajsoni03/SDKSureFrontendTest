import { Clock3, Tag, Workflow } from 'lucide-react'
import type { TestRun } from '@/services/api/generated/models/test-run'

export function TestRunCard({ run }: { run: TestRun }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border theme-border theme-panel-soft p-4 transition hover:-translate-y-0.5 hover:border-emerald-400/50 hover:shadow-[var(--shadow)]">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5" />
      <div className="relative space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-emerald-300">Test Run</p>
            <h3 className="text-lg font-semibold theme-text">{run.name || `Run #${run.id}`}</h3>
            {run.description && <p className="text-xs theme-muted">{run.description}</p>}
          </div>
          <div className="text-right text-xs theme-muted">
            <p>Created: {new Date(run.created_at).toLocaleString()}</p>
            <p>Updated: {new Date(run.updated_at).toLocaleString()}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 text-xs">
          {run.scenarios?.length ? (
            run.scenarios.map((scenario) => (
              <span
                key={scenario.id}
                className="inline-flex items-center gap-1 rounded-full border theme-border bg-black/5 px-2 py-1 theme-text"
              >
                <Workflow className="h-3 w-3 text-emerald-300" />
                {scenario.name}
              </span>
            ))
          ) : (
            <span className="text-xs theme-muted">No scenarios</span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs theme-muted">
          {run.labels?.length ? (
            run.labels.map((label) => (
              <span
                key={label.id}
                className="inline-flex items-center gap-1 rounded-full border theme-border bg-black/5 px-2 py-1 theme-text"
              >
                <Tag className="h-3 w-3 text-emerald-300" />
                {label.name}
              </span>
            ))
          ) : (
            <span>No labels</span>
          )}
          <span className="inline-flex items-center gap-1 rounded-lg border theme-border px-2 py-1">
            <Clock3 className="h-3.5 w-3.5 text-emerald-300" />
            Results: {run.results?.length ?? 0}
          </span>
        </div>
      </div>
    </div>
  )
}
