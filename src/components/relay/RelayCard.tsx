import { RadioTower, Shield, Cpu, Clock3 } from 'lucide-react'
import type { Relay } from '@/services/api/generated/models/relay'
import { ModelTypeEnum } from '@/services/api/generated/models/model-type-enum'
import { RelayStatusEnum } from '@/services/api/generated/models/relay-status-enum'
import { Button } from '../ui/button'

const modelLabels: Record<ModelTypeEnum, string> = {
  [ModelTypeEnum.POWER_EXTENSION]: 'Power Extension',
  [ModelTypeEnum.ETH_008_A]: 'Ethernet 008 Type A',
  [ModelTypeEnum.ETH_008_B]: 'Ethernet 008 Type B',
  [ModelTypeEnum.ETH_016]: 'Ethernet 016',
  [ModelTypeEnum.CUSTOM]: 'Custom',
}

const statusLabels: Record<RelayStatusEnum, { label: string; className: string }> = {
  [RelayStatusEnum.ACTIVE]: { label: 'Active', className: 'bg-emerald-500/15 text-emerald-200' },
  [RelayStatusEnum.INACTIVE]: { label: 'Inactive', className: 'bg-slate-500/15 text-slate-200' },
  [RelayStatusEnum.MAINTENANCE]: { label: 'Maintenance', className: 'bg-amber-500/15 text-amber-200' },
  [RelayStatusEnum.FAULT]: { label: 'Fault', className: 'bg-red-500/15 text-red-200' },
}

interface Props {
  relay: Relay
  onEdit?: (relay: Relay) => void
}

export function RelayCard({ relay, onEdit }: Props) {
  const status = relay.status ? statusLabels[relay.status] : statusLabels[RelayStatusEnum.INACTIVE]
  return (
    <div className="relative overflow-hidden rounded-2xl border theme-border theme-panel-soft p-4 transition hover:-translate-y-0.5 hover:border-emerald-400/50 hover:shadow-[var(--shadow)]">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5" />
      <div className="relative space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-emerald-300">Relay</p>
            <h3 className="text-lg font-semibold theme-text">{relay.relay_name}</h3>
            <p className="text-xs theme-muted">{modelLabels[relay.model_type] ?? relay.model_type}</p>
          </div>
          <span
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${status.className}`}
          >
            <Shield className="h-3.5 w-3.5" />
            {status.label}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <Info label="IP" value={relay.ip_address} icon={<RadioTower className="h-4 w-4 text-emerald-300" />} />
          <Info label="MAC" value={relay.mac_address} icon={<Cpu className="h-4 w-4 text-emerald-300" />} />
          <Info
            label="Ports"
            value={relay.port_count ?? '—'}
            icon={<Shield className="h-4 w-4 text-emerald-300" />}
          />
          <Info
            label="Location"
            value={relay.location ?? '—'}
            icon={<Clock3 className="h-4 w-4 text-emerald-300" />}
          />
        </div>

        <div className="flex items-center justify-between text-xs theme-muted">
          <span>
            Health: {relay.is_healthy ?? '—'} · Last check:{' '}
            {relay.last_checked_at ? new Date(relay.last_checked_at).toLocaleString() : '—'}
          </span>
          <Button variant="secondary" size="sm" className="gap-2" onClick={() => onEdit?.(relay)}>
            Edit
          </Button>
        </div>
      </div>
    </div>
  )
}

function Info({
  label,
  value,
  icon,
}: {
  label: string
  value: string | number | null
  icon: React.ReactNode
}) {
  return (
    <div className="flex items-center gap-2 rounded-lg border theme-border bg-black/5 px-3 py-2">
      {icon}
      <div className="flex flex-col">
        <span className="text-xs theme-muted">{label}</span>
        <span className="text-sm font-semibold theme-text">{value ?? '—'}</span>
      </div>
    </div>
  )
}
