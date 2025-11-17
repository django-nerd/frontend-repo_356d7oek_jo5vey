import { useState } from 'react'
import { Menu, X, Bot } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how' },
    { label: 'Pricing', href: '#cta' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <nav className="flex items-center justify-between px-4 py-3">
            <a href="/" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg">
                <Bot className="h-5 w-5" />
              </span>
              <span className="text-white/90 font-semibold tracking-tight">
                CursorPilot
              </span>
            </a>

            <div className="hidden md:flex items-center gap-8 text-white/70">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#cta" className="inline-flex items-center rounded-xl bg-white text-gray-900 px-4 py-2 font-medium shadow/50 shadow-white/10 hover:-translate-y-0.5 transition transform">
                Get Started
              </a>
            </div>

            <button aria-label="Toggle menu" className="md:hidden text-white/90" onClick={() => setOpen(!open)}>
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="flex flex-col gap-3 text-white/80">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} className="hover:text-white transition-colors" onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                ))}
                <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-white text-gray-900 px-4 py-2 font-medium shadow/50 shadow-white/10">
                  Get Started
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
