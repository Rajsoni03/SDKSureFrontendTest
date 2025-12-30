import { Bell, LogOut, Menu, Search, Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Sidebar } from '@/components/layout/Sidebar'
import { DashboardMetrics } from '@/components/dashboard/DashboardMetrics'
import { BoardsPage } from '@/components/board/BoardsPage'
import { UsersPage } from '@/components/user/UsersPage'
import { SystemConfigsPage } from '@/components/config/SystemConfigsPage'
import { TagsPage } from '@/components/tag/TagsPage'
import { TestRunsPage } from '@/components/test-run/TestRunsPage'
import { TestCasesPage } from '@/components/test-case/TestCasesPage'
import { CapabilitiesPage } from '@/components/capability/CapabilitiesPage'
import { RelaysPage } from '@/components/relay/RelaysPage'
import { TestPcsPage } from '@/components/test-pc/TestPcsPage'
import { Button } from '@/components/ui/button'
import { LoginPage } from '@/components/auth/LoginPage'
import { ConfirmDialog } from '@/components/ui/ConfirmDialog'
import { useAuthStore } from '@/store/authStore'
import { useAuth } from '@/hooks/useAuth'
import { useThemeStore } from '@/store/themeStore'
import { cn } from '@/lib/utils'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
  const { isAuthenticated, tokens, user } = useAuthStore()
  const { logout, fetchCurrentUser } = useAuth()
  const { theme } = useThemeStore()
  const isDark = theme === 'dark'
  const [isMobileNavOpen, setMobileNavOpen] = useState(false)
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    if (tokens && !user) {
      fetchCurrentUser().catch(() => {
        // if fetch fails, auth interceptor will handle redirect on next request
      })
    }
  }, [tokens, user, fetchCurrentUser])

  if (!isAuthenticated) {
    return <LoginPage />
  }

  return (
    <div className={cn('flex min-h-screen theme-bg', !isDark && 'text-slate-900')}>
      <Sidebar isOpen={isMobileNavOpen || typeof window === 'undefined'} onClose={() => setMobileNavOpen(false)} />
      {isMobileNavOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={() => setMobileNavOpen(false)}
          aria-hidden="true"
        />
      )}
      <div className="relative flex-1 overflow-hidden theme-panel">
        <div
          className={cn(
            'pointer-events-none absolute inset-0',
            isDark
              ? 'bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.08),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.06),transparent_25%)]'
              : 'bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.04),transparent_20%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.03),transparent_20%)]',
          )}
        />
        <div className="relative flex flex-col gap-6 p-6 sm:p-8">
          <header className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setMobileNavOpen(true)}
                aria-label="Open sidebar"
              >
                <Menu className="h-5 w-5" />
              </Button>
              <div>
                <p className="text-sm uppercase tracking-wide text-emerald-300">Control Center</p>
                {/* <h1 className={cn('text-3xl font-semibold', isDark ? 'text-white' : 'text-slate-900')}>
                  Dashboard
                </h1>
                <p className={cn('text-sm', isDark ? 'text-slate-300' : 'text-slate-600')}>
                  Monitor live metrics from boards, test runs, and users.
                </p> */}
              </div>
            </div>
            <div className="flex w-full flex-wrap items-center justify-end gap-2 lg:gap-3 lg:w-auto">
              <div className="flex min-w-[220px] flex-1 items-center gap-2 rounded-lg border theme-border theme-panel-soft px-3 py-2 lg:min-w-[260px]">
                <Search className="h-4 w-4 text-slate-400" />
                <input
                  placeholder="Search"
                  className={cn(
                    'bg-transparent text-sm placeholder:text-slate-500 focus:outline-none',
                    isDark ? 'text-white' : 'text-slate-900',
                  )}
                />
              </div>
              <Button variant="secondary" size="icon" className="hidden sm:inline-flex">
                <Bell className="h-4 w-4" />
              </Button>
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border theme-border bg-panel-soft text-[var(--text)] transition hover:border-emerald-300/60"
                onClick={() => {
                  const next = isDark ? 'light' : 'dark'
                  document.documentElement.setAttribute('data-theme', next)
                  useThemeStore.getState().setTheme(next as any)
                }}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border theme-border bg-panel-soft text-[var(--text)] transition hover:border-emerald-300/60"
                onClick={() => setShowLogoutConfirm(true)}
                aria-label="Sign out"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          </header>

          <Routes>
            <Route path="/" element={<DashboardMetrics />} />
            <Route path="/boards" element={<BoardsPage />} />
            <Route path="/test-runs" element={<TestRunsPage />} />
            <Route path="/test-cases" element={<TestCasesPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/configs" element={<SystemConfigsPage />} />
            <Route path="/tags" element={<TagsPage />} />
            <Route path="/capabilities" element={<CapabilitiesPage />} />
            <Route path="/relays" element={<RelaysPage />} />
            <Route path="/test-pcs" element={<TestPcsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
      <ConfirmDialog
        isOpen={showLogoutConfirm}
        title="Sign out?"
        description="You will need to sign in again to continue."
        confirmLabel="Sign out"
        onCancel={() => setShowLogoutConfirm(false)}
        onConfirm={() => {
          setShowLogoutConfirm(false)
          logout()
        }}
      />
    </div>
  )
}

export default App
