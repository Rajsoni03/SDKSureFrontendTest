import { useEffect, useMemo, useState } from 'react'
import { X } from 'lucide-react'
import type { TestRun } from '@/services/api/generated/models/test-run'
import { testRunsService } from '@/services/testRuns'
import { apiCall } from '@/lib/apiHandler'
import { Button } from '../ui/button'
import { useLabels } from '@/hooks/useLabels'
import { useTestScenarios } from '@/hooks/useTestScenarios'
import { MultiSelect } from '../ui/MultiSelect'

interface Props {
  isOpen: boolean
  onClose: () => void
  onSaved?: () => void
  editingRun?: TestRun | null
}

export function TestRunFormModal({ isOpen, onClose, onSaved, editingRun }: Props) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [scenarioIds, setScenarioIds] = useState<string[]>([])
  const [labelIds, setLabelIds] = useState<string[]>([])
  const isEditing = !!editingRun

  const { data: labelsData } = useLabels({ ordering: 'name', page: 1 })
  const { data: scenariosData } = useTestScenarios({ ordering: 'name', page: 1 })

  const labelOptions = useMemo(
    () =>
      (labelsData?.results ?? []).map((l) => ({
        label: l.name,
        value: String(l.id),
      })),
    [labelsData],
  )

  const scenarioOptions = useMemo(
    () =>
      (scenariosData?.results ?? []).map((s) => ({
        label: s.name,
        value: String(s.id),
      })),
    [scenariosData],
  )

  useEffect(() => {
    if (!isOpen) return
    if (editingRun) {
      setName(editingRun.name ?? '')
      setDescription(editingRun.description ?? '')
      setScenarioIds((editingRun.scenarios ?? []).map((s) => String(s.id)))
      setLabelIds((editingRun.labels ?? []).map((l) => String(l.id)))
    } else {
      setName('')
      setDescription('')
      setScenarioIds([])
      setLabelIds([])
    }
  }, [editingRun, isOpen])

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const payload: Partial<TestRun> = {
      name,
      description: description || undefined,
      scenario_ids: scenarioIds.map((id) => Number(id)),
      label_ids: labelIds.map((id) => Number(id)),
    }

    await apiCall(
      () =>
        isEditing && editingRun
          ? testRunsService.update(editingRun.id, payload as any)
          : testRunsService.create(payload as any),
      {
        successMessage: isEditing ? 'Test run updated' : 'Test run created',
        errorMessage: 'Failed to save test run',
      },
    )
    onSaved?.()
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="relative w-full max-w-2xl rounded-2xl border theme-border theme-panel p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full p-2 text-slate-400 hover:bg-white/5"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="space-y-1">
          <h3 className="text-xl font-semibold theme-text">{isEditing ? 'Edit Test Run' : 'Add Test Run'}</h3>
          <p className="text-sm theme-muted">Bind scenarios and labels for execution tracking.</p>
        </div>

        <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
          <label className="flex flex-col gap-2 text-sm">
            <span className="theme-text">Name</span>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border theme-border theme-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
              placeholder="Run name"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm">
            <span className="theme-text">Description</span>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="w-full rounded-lg border theme-border theme-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
              placeholder="Optional description"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm">
            <span className="theme-text">Scenarios</span>
            <MultiSelect
              options={scenarioOptions}
              value={scenarioIds}
              placeholder="Select scenarios"
              onChange={setScenarioIds}
            />
          </label>

          <label className="flex flex-col gap-2 text-sm">
            <span className="theme-text">Labels</span>
            <MultiSelect
              options={labelOptions}
              value={labelIds}
              placeholder="Select labels"
              onChange={setLabelIds}
            />
          </label>

          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">{isEditing ? 'Update' : 'Create'}</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
