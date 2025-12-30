import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import type { Relay } from '@/services/api/generated/models/relay'
import { ModelTypeEnum } from '@/services/api/generated/models/model-type-enum'
import { RelayStatusEnum } from '@/services/api/generated/models/relay-status-enum'
import { relaysService } from '@/services/relays'
import { apiCall } from '@/lib/apiHandler'
import { Button } from '../ui/button'

interface Props {
  isOpen: boolean
  onClose: () => void
  onSaved?: () => void
  editingRelay?: Relay | null
}

export function RelayFormModal({ isOpen, onClose, onSaved, editingRelay }: Props) {
  const [relayName, setRelayName] = useState('')
  const [modelType, setModelType] = useState<ModelTypeEnum | ''>('')
  const [status, setStatus] = useState<RelayStatusEnum | ''>('')
  const [location, setLocation] = useState('')
  const [ipAddress, setIpAddress] = useState('')
  const [macAddress, setMacAddress] = useState('')
  const [portCount, setPortCount] = useState<number | ''>('')

  const isEditing = !!editingRelay

  useEffect(() => {
    if (editingRelay) {
      setRelayName(editingRelay.relay_name)
      setModelType(editingRelay.model_type ?? '')
      setStatus(editingRelay.status ?? '')
      setLocation(editingRelay.location ?? '')
      setIpAddress(editingRelay.ip_address)
      setMacAddress(editingRelay.mac_address)
      setPortCount(editingRelay.port_count ?? '')
    } else {
      setRelayName('')
      setModelType('')
      setStatus('')
      setLocation('')
      setIpAddress('')
      setMacAddress('')
      setPortCount('')
    }
  }, [editingRelay])

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    await apiCall(
      () =>
        isEditing && editingRelay
          ? relaysService.update(editingRelay.id, {
              relay_name: relayName,
              model_type: modelType || ModelTypeEnum.CUSTOM,
              status: status || RelayStatusEnum.ACTIVE,
              location: location || undefined,
              ip_address: ipAddress,
              mac_address: macAddress,
              port_count: portCount === '' ? undefined : portCount,
            })
          : relaysService.create({
              relay_name: relayName,
              model_type: modelType || ModelTypeEnum.CUSTOM,
              status: status || RelayStatusEnum.ACTIVE,
              location: location || undefined,
              ip_address: ipAddress,
              mac_address: macAddress,
              port_count: portCount === '' ? undefined : portCount,
            }),
      {
        successMessage: isEditing ? 'Relay updated' : 'Relay created',
        errorMessage: 'Failed to save relay',
      },
    )

    onSaved?.()
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="relative w-full max-w-xl rounded-2xl border theme-border theme-panel p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full p-2 text-slate-400 hover:bg-white/5"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="space-y-1">
          <h3 className="text-xl font-semibold theme-text">{isEditing ? 'Edit Relay' : 'Add Relay'}</h3>
          <p className="text-sm theme-muted">Manage relay hardware used by boards.</p>
        </div>
        <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Relay name">
              <input
                required
                value={relayName}
                onChange={(e) => setRelayName(e.target.value)}
                className="w-full rounded-lg border theme-border theme-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
                placeholder="Relay A"
              />
            </Field>
            <Field label="Model type">
              <select
                value={modelType}
                onChange={(e) => setModelType(e.target.value as ModelTypeEnum)}
                className="w-full rounded-lg border theme-border theme-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
              >
                {Object.values(ModelTypeEnum).map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Status">
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as RelayStatusEnum)}
                className="w-full rounded-lg border theme-border theme-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
              >
                {Object.values(RelayStatusEnum).map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Location">
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-lg border theme-border theme-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
                placeholder="Rack A"
              />
            </Field>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="IP address">
              <input
                required
                value={ipAddress}
                onChange={(e) => setIpAddress(e.target.value)}
                className="w-full rounded-lg border theme-border theme-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
                placeholder="192.168.1.10"
              />
            </Field>
            <Field label="MAC address">
              <input
                required
                value={macAddress}
                onChange={(e) => setMacAddress(e.target.value)}
                className="w-full rounded-lg border theme-border theme-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
                placeholder="AA:BB:CC:DD:EE:FF"
              />
            </Field>
          </div>

          <Field label="Port count">
            <input
              value={portCount}
              onChange={(e) => setPortCount(e.target.value === '' ? '' : Number(e.target.value))}
              className="w-full rounded-lg border theme-border theme-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
              placeholder="8"
            />
          </Field>

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

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2 text-sm">
      <span className="theme-text">{label}</span>
      {children}
    </label>
  )
}
