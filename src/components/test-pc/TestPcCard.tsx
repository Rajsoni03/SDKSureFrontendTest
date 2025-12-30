import { Computer, Shield, Wifi, HardDrive } from 'lucide-react'
import type { TestPC } from '@/services/api/generated/models/test-pc'
import { TestPCStatusEnum } from '@/services/api/generated/models/test-pcstatus-enum'
import { OsVersionEnum } from '@/services/api/generated/models/os-version-enum'
import { Button } from '../ui/button'

const statusStyles: Record<TestPCStatusEnum, { label: string; className: string }> = {
  [TestPCStatusEnum.ONLINE]: { label: 'Online', className: 'bg-emerald-500/15 text-emerald-200' },
  [TestPCStatusEnum.OFFLINE]: { label: 'Offline', className: 'bg-slate-500/15 text-slate-200' },
  [TestPCStatusEnum.MAINTENANCE]: { label: 'Maintenance', className: 'bg-amber-500/15 text-amber-200' },
  [TestPCStatusEnum.INITIALIZING]: { label: 'Initializing', className: 'bg-blue-500/15 text-blue-200' },
}

export function TestPcCard({ pc, onEdit }: { pc: TestPC; onEdit?: (pc: TestPC) => void }) {
  const status = pc.status ? statusStyles[pc.status] : statusStyles[TestPCStatusEnum.OFFLINE]
  return (
    <div className="relative overflow-hidden rounded-2xl border theme-border theme-panel-soft p-4 transition hover:-translate-y-0.5 hover:border-emerald-400/50 hover:shadow-[var(--shadow)]">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5" />
      <div className="relative space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-emerald-300">Test PC</p>
            <h3 className="text-lg font-semibold theme-text">{pc.hostname}</h3>
            <p className="text-xs theme-muted">{pc.domain_name ?? 'No domain'}</p>
          </div>
          <span
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${status.className}`}
          >
            <Shield className="h-3.5 w-3.5" />
            {status.label}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <Info label="IP" value={pc.ip_address} icon={<Wifi className="h-4 w-4 text-emerald-300" />} />
          <Info
            label="OS"
            value={pc.os_version ? prettyOs(pc.os_version) : '—'}
            icon={<Computer className="h-4 w-4 text-emerald-300" />}
          />
          <Info
            label="Disk"
            value={pc.disk_mountpoint ?? '—'}
            icon={<HardDrive className="h-4 w-4 text-emerald-300" />}
          />
          <Info
            label="Location"
            value={pc.location ?? '—'}
            icon={<Shield className="h-4 w-4 text-emerald-300" />}
          />
        </div>

        <div className="flex items-center justify-between text-xs theme-muted">
          <span>
            Available: {pc.is_available_for_testing ?? '—'} · Heartbeat:{' '}
            {pc.last_heartbeat_at ? new Date(pc.last_heartbeat_at).toLocaleString() : '—'}
          </span>
          <Button variant="secondary" size="sm" className="gap-2" onClick={() => onEdit?.(pc)}>
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

function prettyOs(os: OsVersionEnum) {
  return os.replace(/_/g, ' ')
}
