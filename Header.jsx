import { useState } from 'react'
import { NAV_LINKS } from '../data/siteData'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="logo">
          <img src="/logo.svg" alt="سيولة الإعمار" className="logo-icon" />
          <div className="logo-text">
            <span className="logo-ar">سيولة الإعمار</span>
            <span className="logo-en">LIQUIDITY OF CONSTRUCTION</span>
          </div>
        </a>

        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="القائمة">
          <span /><span /><span />
        </button>

        <nav className={`nav ${open ? 'nav-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-gold btn-sm" onClick={() => setOpen(false)}>
            تواصل معنا
          </a>
        </nav>
      </div>
    </header>
  )
}
