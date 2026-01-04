import { Cpu, Edit2, Globe2, HardDrive, Plug, Shield, Timer } from 'lucide-react'
import type { Board } from '@/services/api/generated/models/board'
import { BoardStatusChip } from './BoardStatusChip'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'

interface Props {
  board: Board
  onEdit?: (board: Board) => void
}

export function BoardCard({ board, onEdit }: Props) {
  const capCount = board.capabilities?.length ?? 0
  return (
    <div className="relative overflow-hidden rounded-2xl border theme-border theme-panel-soft p-4 transition hover:-translate-y-0.5 hover:border-emerald-400/50 hover:shadow-[var(--shadow)]">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5" />
      <div className="relative flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-emerald-300">Board</p>
            <h3 className="text-lg font-semibold theme-text">{board.name}</h3>
            <p className="text-xs theme-muted">Serial: {board.hardware_serial_number}</p>
            <p className="text-xs theme-muted">
              Platform: {board.platform ?? '—'} · Project: {board.project ?? '—'}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <BoardStatusChip status={board.status} />
            {onEdit && (
              <Button variant="secondary" size="sm" className="gap-2" onClick={() => onEdit(board)}>
                <Edit2 className="h-4 w-4" />
                Edit
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <InfoRow label="Device type" value={board.device_type ?? '—'} />
          <InfoRow label="Test farm" value={board.test_farm ?? '—'} />
          <InfoRow label="SDK version" value={board.sdk_version ?? '—'} />
          <InfoRow label="Execution engine" value={board.execution_engine ?? '—'} />
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs theme-muted">
          <span className="inline-flex items-center gap-2 rounded-lg border theme-border px-2 py-1">
            <HardDrive className="h-3.5 w-3.5 text-emerald-300" />
            {capCount} capabilities
          </span>
          <span className="inline-flex items-center gap-1 rounded-lg border theme-border px-2 py-1">
            <Timer className="h-3.5 w-3.5 text-emerald-300" />
            Last heartbeat: {board.last_heartbeat_at ? new Date(board.last_heartbeat_at).toLocaleString() : '—'}
          </span>
          <span className="inline-flex items-center gap-1 rounded-lg border theme-border px-2 py-1">
            <Cpu className="h-3.5 w-3.5 text-emerald-300" />
            Test PC: {board.test_pc?.hostname ?? board.test_pc_id ?? '—'}
          </span>
          <span className="inline-flex items-center gap-1 rounded-lg border theme-border px-2 py-1">
            <Globe2 className="h-3.5 w-3.5 text-emerald-300" />
            IP: {board.board_ip ?? '—'}
          </span>
          <span className="inline-flex items-center gap-1 rounded-lg border theme-border px-2 py-1">
            <Plug className="h-3.5 w-3.5 text-emerald-300" />
            Relay: {board.relay?.relay_name ?? board.relay_id ?? '—'}#{board.relay_number ?? '—'}
          </span>
          <span className="inline-flex items-center gap-1 rounded-lg border theme-border px-2 py-1">
            <Shield className="h-3.5 w-3.5 text-emerald-300" />
            Healthy: {board.is_healthy ?? '—'}
          </span>
        </div>
      </div>
    </div>
  )
}

function InfoRow({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex items-center justify-between rounded-lg border theme-border bg-black/5 px-3 py-2">
      <span className="text-xs theme-muted">{label}</span>
      <span className={cn('text-sm font-medium theme-text', typeof value === 'number' && 'tabular-nums')}>
        {value}
      </span>
    </div>
  )
}
