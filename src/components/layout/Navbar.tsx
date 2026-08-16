'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { NAV_ITEMS } from '@/constants/nav'
import { useTheme } from '@/context/ThemeContext'
import { t } from '@/translations/en'

function SunIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)

  // Pre-warm all routes on mount so first navigation is instant
  useEffect(() => {
    NAV_ITEMS.forEach((item) => router.prefetch(item.href))
    router.prefetch('/contact')
  }, [router])

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header>
      <div className={`wrap ${open ? 'mobile-nav-open' : ''}`} style={{ position: 'relative' }}>
        <nav>
          {/* Logo */}
          <Link href="/" className="logo" prefetch>
            <Image src="/images/light.png" alt="Triora Labs Logo" width={220} height={60} className="logo-light-mode" style={{ objectFit: 'contain' }} priority />
            <Image src="/images/dark.png" alt="Triora Labs Logo" width={220} height={60} className="logo-dark-mode" style={{ objectFit: 'contain' }} priority />
          </Link>

          {/* Nav links */}
          <div className="navlinks" id="navlinks">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch
                className={`navlink${pathname === item.href ? ' active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side: theme toggle + CTA */}
          <div className="nav-right">
            <button
              className="theme-toggle-btn"
              onClick={toggle}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
            <Link href="/contact" prefetch className="btn btn-primary btn-sm">
              {t.nav.cta}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="mobile-menu-btn"
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? '✕' : '☰'}
          </button>
        </nav>
      </div>
    </header>
  )
}
