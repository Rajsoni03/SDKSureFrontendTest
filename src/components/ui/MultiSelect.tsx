import { useEffect, useMemo, useRef, useState } from 'react'
import { Check, ChevronDown, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface MultiSelectOption {
  label: string
  value: string
}

interface MultiSelectProps {
  options: MultiSelectOption[]
  value: string[]
  placeholder?: string
  onChange: (values: string[]) => void
}

export function MultiSelect({ options, value, placeholder, onChange }: MultiSelectProps) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const wrapperRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const filtered = useMemo(() => {
    if (!search) return options
    return options.filter((o) => o.label.toLowerCase().includes(search.toLowerCase()))
  }, [options, search])

  const selectedOptions = useMemo(
    () => value.map((id) => options.find((o) => o.value === id)).filter(Boolean) as MultiSelectOption[],
    [options, value],
  )

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false)
        setSearch('')
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus()
  }, [open])

  const toggleValue = (val: string) => {
    if (value.includes(val)) {
      onChange(value.filter((v) => v !== val))
    } else {
      onChange([...value, val])
    }
  }

  const removeValue = (val: string) => {
    const next = value.filter((v) => v !== val)
    onChange(next)
  }

  return (
    <div ref={wrapperRef} className="relative w-full">
      <div
        className={cn(
          'rounded-lg border theme-border bg-panel-soft px-3 py-2 text-sm theme-text transition',
          open && 'border-emerald-400 shadow-[0_0_0_3px_rgba(34,197,94,0.2)]',
        )}
        onClick={() => setOpen((p) => !p)}
      >
        <div className="flex flex-wrap items-center gap-2">
          {selectedOptions.length === 0 ? (
            <span className="text-slate-500">{placeholder ?? 'Select options'}</span>
          ) : (
            selectedOptions.map((opt) => (
              <span
                key={opt.value}
                className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-1 text-xs text-emerald-100"
              >
                {opt.label}
                <button
                  type="button"
                  className="rounded-full p-0.5 hover:bg-emerald-500/30"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    removeValue(opt.value)
                  }}
                  aria-label={`Remove ${opt.label}`}
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))
          )}
        </div>
        <div className="mt-2 flex items-center gap-2">
          <input
            ref={inputRef}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent text-sm theme-text placeholder:text-slate-500 focus:outline-none"
            placeholder="Search..."
            onFocus={() => setOpen(true)}
          />
          <ChevronDown className={cn('h-4 w-4 text-slate-400 transition', open && 'rotate-180')} />
        </div>
      </div>

      {open && (
        <div className="absolute z-30 mt-1 max-h-60 w-full overflow-y-auto rounded-lg border theme-border bg-[var(--panel)] shadow-lg">
          {filtered.length === 0 ? (
            <div className="px-3 py-2 text-sm theme-muted">No results</div>
          ) : (
            filtered.map((opt) => (
              <button
                key={opt.value}
                type="button"
                className={cn(
                  'flex w-full items-center justify-between px-3 py-2 text-left text-sm theme-text hover:bg-panel-soft',
                  value.includes(opt.value) && 'bg-emerald-500/10 text-emerald-200',
                )}
                onClick={() => toggleValue(opt.value)}
              >
                <span>{opt.label}</span>
                {value.includes(opt.value) && <Check className="h-4 w-4 text-emerald-300" />}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  )
}
