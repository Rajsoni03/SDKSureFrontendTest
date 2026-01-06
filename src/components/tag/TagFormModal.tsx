import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import type { Label } from '@/services/api/generated/models/label'
import { labelsService } from '@/services/labels'
import { apiCall } from '@/lib/apiHandler'
import { Button } from '../ui/button'

interface Props {
  isOpen: boolean
  onClose: () => void
  onSaved?: () => void
  editingLabel?: Label | null
}

export function LabelFormModal({ isOpen, onClose, onSaved, editingLabel }: Props) {
  const [name, setName] = useState('')
  const isEditing = !!editingLabel

  useEffect(() => {
    if (editingLabel) {
      setName(editingLabel.name)
    } else {
      setName('')
    }
  }, [editingLabel])

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await apiCall(
      () =>
        isEditing && editingLabel
          ? labelsService.update(editingLabel.id, { name })
          : labelsService.create({ name }),
      {
        successMessage: isEditing ? 'Label updated' : 'Label created',
        errorMessage: 'Label save failed',
      },
    )
    onSaved?.()
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="relative w-full max-w-md rounded-2xl border theme-border theme-panel p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full p-2 text-slate-400 hover:bg-white/5"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="space-y-1">
          <h3 className="text-xl font-semibold theme-text">{isEditing ? 'Edit Label' : 'Add Label'}</h3>
          <p className="text-sm theme-muted">Organize test cases, scenarios, and runs with labels.</p>
        </div>
        <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
          <label className="flex flex-col gap-2 text-sm">
            <span className="theme-text">Name</span>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border theme-border theme-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
              placeholder="Label name"
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
