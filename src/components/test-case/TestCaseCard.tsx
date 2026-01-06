import { Tag as TagIcon, Beaker } from 'lucide-react'
import type { TestCase } from '@/services/api/generated/models/test-case'

export function TestCaseCard({ testCase }: { testCase: TestCase }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border theme-border theme-panel-soft p-4 transition hover:-translate-y-0.5 hover:border-emerald-400/50 hover:shadow-[var(--shadow)]">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5" />
      <div className="relative space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-emerald-300">Test Case</p>
            <h3 className="text-lg font-semibold theme-text">{testCase.title}</h3>
            {testCase.description && <p className="text-xs theme-muted">{testCase.description}</p>}
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-200">
            <Beaker className="h-3.5 w-3.5" />
            {testCase.test_type?.name ?? 'Type'}
          </span>
        </div>

        {testCase.tags?.length ? (
          <div className="flex flex-wrap gap-2 text-xs">
            {testCase.tags.map((tag) => (
              <span
                key={tag.id}
                className="inline-flex items-center gap-1 rounded-full border theme-border bg-black/5 px-2 py-1 theme-text"
              >
                <TagIcon className="h-3 w-3 text-emerald-300" />
                {tag.name}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-xs theme-muted">No labels</p>
        )}

        <div className="flex items-center justify-between text-xs theme-muted">
          <span>Active: {testCase.is_active ? 'Yes' : 'No'}</span>
          <span>Updated: {new Date(testCase.updated_at).toLocaleString()}</span>
        </div>
      </div>
    </div>
  )
}
