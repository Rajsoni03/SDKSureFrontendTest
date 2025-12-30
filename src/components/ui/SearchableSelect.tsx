import { useEffect, useMemo, useRef, useState } from 'react'
import { ChevronDown, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface SearchableOption {
  label: string
  value: string
}

interface SearchableSelectProps {
  options: SearchableOption[]
  value?: string
  placeholder?: string
  onChange: (value: string | undefined) => void
}

export function SearchableSelect({ options, value, placeholder, onChange }: SearchableSelectProps) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const wrapperRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const selected = useMemo(() => options.find((o) => o.value === value), [options, value])
  const filtered = useMemo(() => {
    if (!search) return options
    return options.filter((o) => o.label.toLowerCase().includes(search.toLowerCase()))
  }, [options, search])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false)
        setSearch('')
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus()
  }, [open])

  const selectOption = (option?: SearchableOption) => {
    onChange(option?.value)
    setSearch('')
    setOpen(false)
  }

  return (
    <div ref={wrapperRef} className="relative w-full">
      <div
        className={cn(
          'flex items-center rounded-lg border theme-border bg-panel-soft px-3 py-2 text-sm theme-text transition',
          open && 'border-emerald-400 shadow-[0_0_0_3px_rgba(34,197,94,0.2)]',
        )}
        onClick={() => setOpen((prev) => !prev)}
      >
        <input
          ref={inputRef}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-transparent text-sm theme-text placeholder:text-slate-500 focus:outline-none"
          placeholder={selected?.label ?? placeholder ?? 'Search...'}
          onFocus={() => setOpen(true)}
        />
        {selected && !open && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              selectOption(undefined)
            }}
            className="text-slate-400 hover:text-red-400"
            aria-label="Clear selection"
          >
            <X className="h-4 w-4" />
          </button>
        )}
        <ChevronDown className={cn('h-4 w-4 text-slate-400 transition', open && 'rotate-180')} />
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
                  opt.value === value && 'bg-emerald-500/10 text-emerald-200',
                )}
                onClick={() => selectOption(opt)}
              >
                <span>{opt.label}</span>
                {opt.value === value && <span className="text-xs text-emerald-200">Selected</span>}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  )
}
