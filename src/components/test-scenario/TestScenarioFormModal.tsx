import { useEffect, useMemo, useState } from 'react'
import { X } from 'lucide-react'
import type { TestScenario } from '@/services/api/generated/models/test-scenario'
import { testScenariosService } from '@/services/testScenarios'
import { apiCall } from '@/lib/apiHandler'
import { Button } from '../ui/button'
import { useTestCases } from '@/hooks/useTestCases'
import { useLabels } from '@/hooks/useLabels'
import { MultiSelect } from '../ui/MultiSelect'

interface Props {
  isOpen: boolean
  onClose: () => void
  onSaved?: () => void
  editingScenario?: TestScenario | null
}

export function TestScenarioFormModal({ isOpen, onClose, onSaved, editingScenario }: Props) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [testCaseIds, setTestCaseIds] = useState<string[]>([])
  const [labelIds, setLabelIds] = useState<string[]>([])
  const isEditing = !!editingScenario
  const { data: testCasesData } = useTestCases({ ordering: 'title', page: 1 })
  const { data: labelsData } = useLabels({ ordering: 'name', page: 1 })

  const testCaseOptions = useMemo(
    () =>
      (testCasesData?.results ?? []).map((tc) => ({
        label: tc.title,
        value: String(tc.id),
      })),
    [testCasesData],
  )

  const labelOptions = useMemo(
    () =>
      (labelsData?.results ?? []).map((l) => ({
        label: l.name,
        value: String(l.id),
      })),
    [labelsData],
  )

  useEffect(() => {
    if (!isOpen) return
    if (editingScenario) {
      setName(editingScenario.name ?? '')
      setDescription(editingScenario.description ?? '')
      setTestCaseIds((editingScenario.test_cases ?? []).map((tc) => String(tc.id)))
      setLabelIds((editingScenario.labels ?? []).map((l) => String(l.id)))
    } else {
      setName('')
      setDescription('')
      setTestCaseIds([])
      setLabelIds([])
    }
  }, [editingScenario, isOpen])

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const payload: Partial<TestScenario> = {
      name,
      description: description || undefined,
      test_case_ids: testCaseIds.map((id) => Number(id)),
      label_ids: labelIds.map((id) => Number(id)),
    }

    await apiCall(
      () =>
        isEditing && editingScenario
          ? testScenariosService.update(editingScenario.id, payload as any)
          : testScenariosService.create(payload),
      {
        successMessage: isEditing ? 'Scenario updated' : 'Scenario created',
        errorMessage: 'Failed to save scenario',
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
          <h3 className="text-xl font-semibold theme-text">{isEditing ? 'Edit Scenario' : 'Add Scenario'}</h3>
          <p className="text-sm theme-muted">Group test cases and labels into reusable scenarios.</p>
        </div>

        <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
          <label className="flex flex-col gap-2 text-sm">
            <span className="theme-text">Name</span>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border theme-border theme-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
              placeholder="Scenario name"
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
            <span className="theme-text">Test cases</span>
            <MultiSelect
              options={testCaseOptions}
              value={testCaseIds}
              placeholder="Select test cases"
              onChange={setTestCaseIds}
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
