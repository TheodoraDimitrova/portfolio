import { useEffect, useState } from 'react'
import { navSections } from '../data/site'
import { getActiveSectionId } from '../utils/getActiveSectionId'
import { scrollToSection, scrollToSectionFromHash } from '../utils/scrollToSection'

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    scrollToSectionFromHash()

    const onHashChange = () => {
      scrollToSectionFromHash()
    }

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    let ticking = false

    const updateActive = () => setActive(getActiveSectionId())

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        updateActive()
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    updateActive()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const navigate = (id: string) => {
    const menuWasOpen = open
    setOpen(false)
    setActive(id)
    // Let the mobile drawer close before scrolling — feels smoother
    window.setTimeout(() => scrollToSection(id), menuWasOpen ? 300 : 0)
  }

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary">
        <a
          href="#hero"
          className="site-logo"
          onClick={(e) => {
            e.preventDefault()
            navigate('hero')
          }}
        >
          TD<span className="text-accent">.</span>
        </a>

        <button
          type="button"
          className={`nav-toggle${open ? ' is-open' : ''}`}
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul id="nav-links" className={`nav-links${open ? ' is-open' : ''}`}>
          {navSections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={active === section.id ? 'is-active' : undefined}
                onClick={(e) => {
                  e.preventDefault()
                  navigate(section.id)
                }}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
};
