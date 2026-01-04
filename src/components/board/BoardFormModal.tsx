import { useEffect, useMemo, useState } from 'react'
import { X } from 'lucide-react'
import { apiCall } from '@/lib/apiHandler'
import { boardsService } from '@/services/boards'
import { BoardStatusEnum } from '@/services/api/generated/models/board-status-enum'
import { PlatformEnum } from '@/services/api/generated/models/platform-enum'
import { DeviceTypeEnum } from '@/services/api/generated/models/device-type-enum'
import { TestFarmEnum } from '@/services/api/generated/models/test-farm-enum'
import { Button } from '@/components/ui/button'
import { useRelays } from '@/hooks/useRelays'
import { useTestPcs } from '@/hooks/useTestPcs'
import { SearchableSelect } from '@/components/ui/SearchableSelect'
import { useCapabilities } from '@/hooks/useCapabilities'
import { MultiSelect } from '@/components/ui/MultiSelect'
import type { Board } from '@/services/api/generated/models/board'

interface Props {
  isOpen: boolean
  onClose: () => void
  onSaved?: () => void
  editingBoard?: Board | null
}

export function BoardFormModal({ isOpen, onClose, onSaved, editingBoard }: Props) {
  const [name, setName] = useState('')
  const [serial, setSerial] = useState('')
  const [project, setProject] = useState('')
  const [platform, setPlatform] = useState<PlatformEnum | ''>('')
  const [deviceType, setDeviceType] = useState<DeviceTypeEnum | ''>('')
  const [testFarm, setTestFarm] = useState<TestFarmEnum | ''>('')
  const [sdkVersion, setSdkVersion] = useState('')
  const [executionEngine, setExecutionEngine] = useState('')
  const [boardIp, setBoardIp] = useState('')
  const [relayId, setRelayId] = useState('')
  const [relayNumber, setRelayNumber] = useState<number | ''>('')
  const [testPcId, setTestPcId] = useState('')
  const [description, setDescription] = useState('')
  const [capabilityIds, setCapabilityIds] = useState<string[]>([])
  const [saving, setSaving] = useState(false)
  const isEditing = !!editingBoard
  const relayFilters = useMemo(
    () => ({
      ordering: 'relay_name',
    }),
    [],
  )
  const testPcFilters = useMemo(
    () => ({
      ordering: 'hostname',
    }),
    [],
  )

  const { data: relaysData, isLoading: relaysLoading } = useRelays(relayFilters)
  const { data: testPcsData, isLoading: testPcsLoading } = useTestPcs(testPcFilters)
  const { data: capabilitiesData } = useCapabilities({
    ordering: 'name',
    page: 1,
  })

  const relayOptions = useMemo(
    () =>
      (relaysData?.results ?? []).map((r) => ({
        label: `${r.relay_name} (${r.ip_address})`,
        value: r.id,
      })),
    [relaysData],
  )

  const testPcOptions = useMemo(
    () =>
      (testPcsData?.results ?? []).map((pc) => ({
        label: `${pc.hostname} (${pc.ip_address})`,
        value: pc.id,
      })),
    [testPcsData],
  )

  const capabilityOptions = useMemo(
    () =>
      (capabilitiesData?.results ?? []).map((cap) => ({
        label: cap.name ?? 'Capability',
        value: cap.id,
      })),
    [capabilitiesData],
  )

  useEffect(() => {
    if (!isOpen) return
    if (editingBoard) {
      setName(editingBoard.name ?? '')
      setSerial(editingBoard.hardware_serial_number ?? '')
      setProject(editingBoard.project ?? '')
      setPlatform((editingBoard.platform as PlatformEnum) ?? '')
      setDeviceType((editingBoard.device_type as DeviceTypeEnum) ?? '')
      setTestFarm((editingBoard.test_farm as TestFarmEnum) ?? '')
      setSdkVersion(editingBoard.sdk_version ?? '')
      setExecutionEngine(editingBoard.execution_engine ?? '')
      setBoardIp(editingBoard.board_ip ?? '')
      setRelayId(editingBoard.relay_id ?? '')
      setRelayNumber((editingBoard.relay_number as number) ?? '')
      setTestPcId(editingBoard.test_pc_id ?? '')
      setDescription(editingBoard.description ?? '')
      setCapabilityIds((editingBoard.capabilities ?? []).map((c) => c.id))
    } else {
      setName('')
      setSerial('')
      setProject('')
      setPlatform('')
      setDeviceType('')
      setTestFarm('')
      setSdkVersion('')
      setExecutionEngine('')
      setBoardIp('')
      setRelayId('')
      setRelayNumber('')
      setTestPcId('')
      setDescription('')
      setCapabilityIds([])
    }
  }, [editingBoard, isOpen])

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    try {
      if (isEditing && editingBoard) {
        await apiCall(
          () =>
            boardsService.update(editingBoard.id, {
              name,
              hardware_serial_number: serial,
              project,
              platform: platform || undefined,
              device_type: deviceType || undefined,
              test_farm: testFarm || undefined,
              sdk_version: sdkVersion || undefined,
              execution_engine: executionEngine || undefined,
              board_ip: boardIp || undefined,
              relay_id: relayId || undefined,
              relay_number: relayNumber === '' ? undefined : relayNumber,
              test_pc_id: testPcId || undefined,
              description: description || undefined,
              capability_ids: capabilityIds,
              status: editingBoard.status,
              is_alive: editingBoard.is_alive,
              is_locked: editingBoard.is_locked,
            } as any),
          {
            successMessage: 'Board updated',
            errorMessage: 'Failed to update board',
          },
        )
      } else {
        await apiCall(
          () =>
            boardsService.create({
              name,
              hardware_serial_number: serial,
              project,
              platform: platform || PlatformEnum.j721e,
              device_type: deviceType || undefined,
              test_farm: testFarm || TestFarmEnum.HLOS,
              sdk_version: sdkVersion || 'unknown',
              execution_engine: executionEngine || undefined,
              board_ip: boardIp || undefined,
              relay_id: relayId || undefined,
              relay_number: relayNumber === '' ? undefined : relayNumber,
              test_pc_id: testPcId || undefined,
              description: description || undefined,
              capability_ids: capabilityIds,
              status: BoardStatusEnum.IDLE,
              is_alive: true,
              is_locked: false,
            } as any),
          {
            successMessage: 'Board created',
            errorMessage: 'Failed to create board',
          },
        )
        setName('')
        setSerial('')
        setProject('')
        setPlatform('')
        setDeviceType('')
        setTestFarm('')
        setSdkVersion('')
        setExecutionEngine('')
        setBoardIp('')
        setRelayId('')
        setRelayNumber('')
        setTestPcId('')
        setDescription('')
        setCapabilityIds([])
      }
      onSaved?.()
      onClose()
    } catch (err) {
      // handled by apiCall toast
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="relative w-full max-w-3xl rounded-2xl border theme-border theme-panel p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full p-2 text-slate-400 hover:bg-white/5"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="space-y-1">
          <h3 className="text-xl font-semibold theme-text">{isEditing ? 'Edit Board' : 'Add Board'}</h3>
          <p className="text-sm theme-muted">
            {isEditing ? 'Update board details and connections.' : 'Create a new board entry with platform and environment details.'}
          </p>
        </div>

        <form className="mt-4 space-y-3 max-h-[70vh] overflow-y-auto pr-1" onSubmit={handleSubmit}>
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Name">
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border theme-border bg-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
                placeholder="Board name"
              />
            </Field>
            <Field label="Hardware serial">
              <input
                required
                value={serial}
                onChange={(e) => setSerial(e.target.value)}
                className="w-full rounded-lg border theme-border bg-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
                placeholder="SN-001"
              />
            </Field>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Project">
              <input
                required
                value={project}
                onChange={(e) => setProject(e.target.value)}
                className="w-full rounded-lg border theme-border bg-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
                placeholder="Project name"
              />
            </Field>
            <Field label="Platform">
              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value as PlatformEnum)}
                className="w-full rounded-lg border theme-border bg-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
              >
                {Object.values(PlatformEnum).map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <Field label="Device type">
              <select
                value={deviceType}
                onChange={(e) => setDeviceType(e.target.value as DeviceTypeEnum)}
                className="w-full rounded-lg border theme-border bg-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
              >
                <option value="">Select</option>
                {Object.values(DeviceTypeEnum).map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Test farm">
              <select
                value={testFarm}
                onChange={(e) => setTestFarm(e.target.value as TestFarmEnum)}
                className="w-full rounded-lg border theme-border bg-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
              >
                {Object.values(TestFarmEnum).map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="SDK version">
              <input
                value={sdkVersion}
                onChange={(e) => setSdkVersion(e.target.value)}
                className="w-full rounded-lg border theme-border bg-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
                placeholder="e.g. 9.1.0"
              />
            </Field>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <Field label="Execution engine">
              <input
                value={executionEngine}
                onChange={(e) => setExecutionEngine(e.target.value)}
                className="w-full rounded-lg border theme-border bg-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
                placeholder="pytest, robot, etc."
              />
            </Field>
            <Field label="Board IP">
              <input
                value={boardIp}
                onChange={(e) => setBoardIp(e.target.value)}
                className="w-full rounded-lg border theme-border bg-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
                placeholder="192.168.0.10"
              />
            </Field>
            <Field label="Location">
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full rounded-lg border theme-border bg-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
                placeholder="Lab rack"
              />
            </Field>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <Field label="Relay">
              <SearchableSelect
                options={relayOptions}
                value={relayId}
                placeholder="Select relay"
                onChange={(val) => setRelayId(val ?? '')}
              />
              {relaysLoading && <p className="text-xs theme-muted mt-1">Loading relays…</p>}
            </Field>
            <Field label="Relay number">
              <input
                value={relayNumber}
                onChange={(e) => setRelayNumber(e.target.value === '' ? '' : Number(e.target.value))}
                className="w-full rounded-lg border theme-border bg-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
                placeholder="1"
              />
            </Field>
            <Field label="Test PC">
              <SearchableSelect
                options={testPcOptions}
                value={testPcId}
                placeholder="Select test PC"
                onChange={(val) => setTestPcId(val ?? '')}
              />
              {testPcsLoading && <p className="text-xs theme-muted mt-1">Loading test PCs…</p>}
            </Field>
          </div>

          <Field label="Capabilities">
            <MultiSelect
              options={capabilityOptions}
              value={capabilityIds}
              placeholder="Select capabilities"
              onChange={setCapabilityIds}
            />
          </Field>

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

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <label className="flex flex-col gap-2 text-sm">
      <span className="theme-text">{label}</span>
      {children}
    </label>
  )
}
