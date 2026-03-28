import './Navbar.css'

const navLinks = ['home', 'about me', 'Skills', 'Projects', 'contacts']

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">MK</div>
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="nav-link">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
