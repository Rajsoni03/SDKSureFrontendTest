import { Check, Edit2, Zap } from 'lucide-react'
import type { Capability } from '@/services/api/generated/models/capability'
import { NameEnum } from '@/services/api/generated/models/name-enum'
import { Button } from '../ui/button'

const nameLabels: Record<NameEnum, string> = {
  [NameEnum.CMD]: 'Command Execution',
  [NameEnum.CAMERA]: 'Camera Testing',
  [NameEnum.DISPLAY]: 'Display Output',
  [NameEnum.SOUND]: 'Sound/Audio',
  [NameEnum.FILE]: 'File System',
  [NameEnum.SENSOR]: 'Sensor Reading',
  [NameEnum.GPIO]: 'GPIO Control',
  [NameEnum.ADC]: 'Analog-to-Digital',
  [NameEnum.NETWORK]: 'Network Connectivity',
}

interface Props {
  capability: Capability
  onEdit?: (cap: Capability) => void
}

export function CapabilityCard({ capability, onEdit }: Props) {
  const label = capability.name ? nameLabels[capability.name] ?? capability.name : 'Capability'
  return (
    <div className="relative overflow-hidden rounded-2xl border theme-border theme-panel-soft p-4 transition hover:-translate-y-0.5 hover:border-emerald-400/50 hover:shadow-[var(--shadow)]">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5" />
      <div className="relative space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-emerald-300">Capability</p>
            <h3 className="text-lg font-semibold theme-text">{label}</h3>
            {capability.description && <p className="text-xs theme-muted">{capability.description}</p>}
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-200">
            <Zap className="h-4 w-4" />
            {capability.is_active ? 'Active' : 'Inactive'}
          </span>
        </div>
        <div className="flex items-center justify-between text-xs theme-muted">
          <span>
            Created: {capability.created_at ? new Date(capability.created_at).toLocaleString() : '—'}
          </span>
          <span>
            Updated: {capability.updated_at ? new Date(capability.updated_at).toLocaleString() : '—'}
          </span>
        </div>
        <div className="flex justify-end">
          <Button variant="secondary" size="sm" className="gap-2" onClick={() => onEdit?.(capability)}>
            <Edit2 className="h-4 w-4" />
            Edit
          </Button>
        </div>
      </div>
    </div>
  )
}
