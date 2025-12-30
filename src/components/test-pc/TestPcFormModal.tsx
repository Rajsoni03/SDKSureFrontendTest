import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import type { TestPC } from '@/services/api/generated/models/test-pc'
import { OsVersionEnum } from '@/services/api/generated/models/os-version-enum'
import { TestPCStatusEnum } from '@/services/api/generated/models/test-pcstatus-enum'
import { testPcsService } from '@/services/testPcs'
import { apiCall } from '@/lib/apiHandler'
import { Button } from '../ui/button'

interface Props {
  isOpen: boolean
  onClose: () => void
  onSaved?: () => void
  editingPc?: TestPC | null
}

export function TestPcFormModal({ isOpen, onClose, onSaved, editingPc }: Props) {
  const [hostname, setHostname] = useState('')
  const [ip, setIp] = useState('')
  const [domain, setDomain] = useState('')
  const [status, setStatus] = useState<TestPCStatusEnum | ''>('')
  const [osVersion, setOsVersion] = useState<OsVersionEnum | ''>('')
  const [disk, setDisk] = useState('')
  const [location, setLocation] = useState('')
  const [comment, setComment] = useState('')
  const [saving, setSaving] = useState(false)

  const isEditing = !!editingPc

  useEffect(() => {
    if (editingPc) {
      setHostname(editingPc.hostname)
      setIp(editingPc.ip_address)
      setDomain(editingPc.domain_name ?? '')
      setStatus(editingPc.status ?? '')
      setOsVersion(editingPc.os_version ?? '')
      setDisk(editingPc.disk_mountpoint ?? '')
      setLocation(editingPc.location ?? '')
      setComment(editingPc.comment ?? '')
    } else {
      setHostname('')
      setIp('')
      setDomain('')
      setStatus('')
      setOsVersion('')
      setDisk('')
      setLocation('')
      setComment('')
    }
  }, [editingPc])

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    await apiCall(
      () =>
        isEditing && editingPc
          ? testPcsService.update(editingPc.id, {
              hostname,
              ip_address: ip,
              domain_name: domain || undefined,
              status: status || TestPCStatusEnum.ONLINE,
              os_version: osVersion || OsVersionEnum.ubuntu_22_04,
              disk_mountpoint: disk || undefined,
              location: location || undefined,
              comment: comment || undefined,
            })
          : testPcsService.create({
              hostname,
              ip_address: ip,
              domain_name: domain || undefined,
              status: status || TestPCStatusEnum.ONLINE,
              os_version: osVersion || OsVersionEnum.ubuntu_22_04,
              disk_mountpoint: disk || undefined,
              location: location || undefined,
              comment: comment || undefined,
            }),
      {
        successMessage: isEditing ? 'Test PC updated' : 'Test PC created',
        errorMessage: 'Failed to save test PC',
      },
    )
    setSaving(false)
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
          <h3 className="text-xl font-semibold theme-text">{isEditing ? 'Edit Test PC' : 'Add Test PC'}</h3>
          <p className="text-sm theme-muted">Manage test PCs used for running tests.</p>
        </div>

        <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Hostname">
              <input
                required
                value={hostname}
                onChange={(e) => setHostname(e.target.value)}
                className="w-full rounded-lg border theme-border theme-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
                placeholder="pc-01"
              />
            </Field>
            <Field label="IP address">
              <input
                required
                value={ip}
                onChange={(e) => setIp(e.target.value)}
                className="w-full rounded-lg border theme-border theme-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
                placeholder="192.168.1.50"
              />
            </Field>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Domain">
              <input
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="w-full rounded-lg border theme-border theme-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
                placeholder="lab.example.com"
              />
            </Field>
            <Field label="Status">
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as TestPCStatusEnum)}
                className="w-full rounded-lg border theme-border theme-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
              >
                {Object.values(TestPCStatusEnum).map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="OS version">
              <select
                value={osVersion}
                onChange={(e) => setOsVersion(e.target.value as OsVersionEnum)}
                className="w-full rounded-lg border theme-border theme-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
              >
                {Object.values(OsVersionEnum).map((v) => (
                  <option key={v} value={v}>
                    {v.replace(/_/g, ' ')}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Disk mountpoint">
              <input
                value={disk}
                onChange={(e) => setDisk(e.target.value)}
                className="w-full rounded-lg border theme-border theme-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
                placeholder="/mnt/data"
              />
            </Field>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Location">
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-lg border theme-border theme-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
                placeholder="Rack 2"
              />
            </Field>
            <Field label="Comment">
              <input
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full rounded-lg border theme-border theme-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
                placeholder="Notes"
              />
            </Field>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={saving}>
              {saving ? 'Saving...' : isEditing ? 'Update' : 'Create'}
            </Button>
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
