import {
  Activity,
  BarChart2,
  Cpu,
  Compass,
  Home,
  Layers,
  RadioTower,
  Settings,
  Users,
  MonitorSmartphone,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const navItems = [
  { label: 'Dashboard', icon: Home, href: '/' },
  { label: 'Boards', icon: Cpu, href: '/boards' },
  { label: 'Test Runs', icon: Activity, href: '/test-runs' },
  { label: 'Test Cases', icon: Layers, href: '/test-cases' },
  { label: 'Test Scenarios', icon: Compass, href: '/test-scenarios' },
  { label: 'Users', icon: Users, href: '/users' },
  { label: 'Configs', icon: Settings, href: '/configs' },
  { label: 'Labels', icon: BarChart2, href: '/labels' },
  { label: 'Capabilities', icon: Activity, href: '/capabilities' },
  { label: 'Relays', icon: RadioTower, href: '/relays' },
  { label: 'Test PCs', icon: MonitorSmartphone, href: '/test-pcs' },
  { label: 'Analytics', icon: BarChart2, href: '/analytics' },
]

type SidebarProps = {
  isOpen?: boolean
  onClose?: () => void
}

export function Sidebar({ isOpen = true, onClose }: SidebarProps) {
  return (
    <aside
      className={cn(
        'fixed inset-y-0 left-0 z-40 w-64 border-r theme-border bg-[var(--panel)] px-4 py-6 backdrop-blur transition-transform duration-300 flex flex-col lg:static lg:translate-x-0 lg:flex',
        isOpen ? 'translate-x-0' : '-translate-x-full',
      )}
    >
      <div className="flex items-center justify-between gap-2 px-2">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
            <BarChart2 className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold theme-text">SDKSure</p>
            <p className="text-xs theme-muted">Test Ops</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          ✕
        </Button>
      </div>

      <nav className="mt-8 space-y-1 text-sm font-medium theme-text">
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            onClick={onClose}
            className={({ isActive }) =>
              cn(
                'group flex items-center gap-3 rounded-lg px-3 py-2 transition-colors',
                isActive
                  ? 'bg-emerald-500/15 text-[var(--text)]'
                  : 'hover:bg-[var(--panel-soft)] hover:text-[var(--text)]',
              )
            }
          >
            <item.icon className="h-4 w-4 text-emerald-300 group-hover:text-emerald-200" />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto rounded-lg border theme-border theme-panel-soft px-3 py-3">
        <div className="flex items-center gap-3 text-sm theme-text">
          <Settings className="h-4 w-4 text-emerald-300" />
          <div>
            <p className="font-semibold">Environment</p>
            <p className="text-xs theme-muted">
              {import.meta.env.VITE_APP_NAME ?? 'Test Management'}
            </p>
          </div>
        </div>
      </div>
    </aside>
  )
}
