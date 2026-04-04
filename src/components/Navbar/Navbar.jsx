import { useState, useEffect, useRef } from 'react'
import './Navbar.css'

const navLinks = ['home', 'about me', 'Skills', 'Projects', 'Know More', 'contacts']

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen])

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) setMenuOpen(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [menuOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="navbar" ref={navRef}>
      <div className="nav-logo">MK</div>

      {/* Desktop links */}
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="nav-link">
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger button — mobile only */}
      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
      >
        <span className="hamburger-line" />
        <span className="hamburger-line" />
        <span className="hamburger-line" />
      </button>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu-overlay ${menuOpen ? 'visible' : ''}`}>
        <ul className="mobile-nav-links">
          {navLinks.map((link, i) => (
            <li
              key={link}
              className="mobile-nav-item"
              style={{ transitionDelay: menuOpen ? `${i * 0.06}s` : '0s' }}
            >
              <a
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="mobile-nav-link"
                onClick={handleLinkClick}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
