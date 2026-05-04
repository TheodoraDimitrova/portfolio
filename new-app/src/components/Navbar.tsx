import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  const location = useLocation()

  const closeMenu = () => setShowMenu(false)
  const isCurrent = (path: string) => location.pathname === path

  return (
    <header>
      <div className={`menu-btn ${showMenu ? 'close' : ''}`} onClick={() => setShowMenu((v) => !v)}>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </div>

      <nav className={`menu ${showMenu ? 'show' : ''}`}>
        <div className={`menu-branding ${showMenu ? 'show' : ''}`}>
          <div className="portrait"></div>
        </div>
        <ul className={`menu-nav ${showMenu ? 'show' : ''}`}>
          <li className={`nav-item ${showMenu ? 'show' : ''} ${isCurrent('/home') ? 'current' : ''}`}>
            <Link to="/home" className="nav-link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className={`nav-item ${showMenu ? 'show' : ''} ${isCurrent('/about') ? 'current' : ''}`}>
            <Link to="/about" className="nav-link" onClick={closeMenu}>
              About me
            </Link>
          </li>
          <li className={`nav-item ${showMenu ? 'show' : ''} ${isCurrent('/work') ? 'current' : ''}`}>
            <Link to="/work" className="nav-link" onClick={closeMenu}>
              My work
            </Link>
          </li>
          <li className={`nav-item ${showMenu ? 'show' : ''} ${isCurrent('/contact') ? 'current' : ''}`}>
            <Link to="/contact" className="nav-link" onClick={closeMenu}>
              How to reach me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
