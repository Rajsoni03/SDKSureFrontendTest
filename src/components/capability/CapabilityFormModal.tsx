import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import type { Capability } from '@/services/api/generated/models/capability'
import { capabilitiesService } from '@/services/capabilities'
import { apiCall } from '@/lib/apiHandler'
import { Button } from '../ui/button'

interface Props {
  isOpen: boolean
  onClose: () => void
  onSaved?: () => void
  editingCapability?: Capability | null
}

export function CapabilityFormModal({ isOpen, onClose, onSaved, editingCapability }: Props) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [isActive, setIsActive] = useState(true)
  const isEditing = !!editingCapability

  useEffect(() => {
    if (editingCapability) {
      setName(editingCapability.name)
      setDescription(editingCapability.description ?? '')
      setIsActive(editingCapability.is_active ?? true)
    } else {
      setName('')
      setDescription('')
      setIsActive(true)
    }
  }, [editingCapability])

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await apiCall(
      () =>
        isEditing && editingCapability
          ? capabilitiesService.update(editingCapability.id, {
              name,
              description: description || undefined,
              is_active: isActive,
            })
          : capabilitiesService.create({
              name,
              description: description || undefined,
              is_active: isActive,
            }),
      {
        successMessage: isEditing ? 'Capability updated' : 'Capability created',
        errorMessage: 'Failed to save capability',
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
          <h3 className="text-xl font-semibold theme-text">{isEditing ? 'Edit Capability' : 'Add Capability'}</h3>
          <p className="text-sm theme-muted">Manage available board capabilities.</p>
        </div>
        <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
          <label className="flex flex-col gap-2 text-sm">
            <span className="theme-text">Name</span>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border theme-border theme-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
              placeholder="Capability name"
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
            <span className="theme-text">Status</span>
            <select
              value={isActive ? 'true' : 'false'}
              onChange={(e) => setIsActive(e.target.value === 'true')}
              className="w-full rounded-lg border theme-border theme-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
            >
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
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
