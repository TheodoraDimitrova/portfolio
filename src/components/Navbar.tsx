import { useState } from 'react'
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About me' },
  { to: '/work', label: 'My work' },
  { to: '/contact', label: 'How to reach me' },
] as const

function NavItem({
  to,
  end,
  label,
  open,
  onNavigate,
}: {
  to: string
  end?: boolean
  label: string
  open: boolean
  onNavigate: () => void
}) {
  const resolved = useResolvedPath(to)
  const match = useMatch({ path: resolved.pathname, end: end ?? false })
  const isActive = Boolean(match)

  return (
    <li
      className={`nav-item${open ? ' show' : ''}${isActive ? ' current' : ''}`}
      onClick={onNavigate}
    >
      <NavLink to={to} end={end} className="nav-link">
        {label}
      </NavLink>
    </li>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <button
        type="button"
        className={`menu-btn${open ? ' close' : ''}`}
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <div className="btn-line" />
        <div className="btn-line" />
        <div className="btn-line" />
      </button>

      <nav id="site-menu" className={`menu${open ? ' show' : ''}`}>
        <div className={`menu-branding${open ? ' show' : ''}`}>
          <div className="portrait" />
        </div>
        <ul className={`menu-nav${open ? ' show' : ''}`}>
          {links.map((link) => (
            <NavItem
              key={link.to}
              to={link.to}
              end={'end' in link ? link.end : undefined}
              label={link.label}
              open={open}
              onNavigate={() => setOpen(false)}
            />
          ))}
        </ul>
      </nav>
    </header>
  )
}
