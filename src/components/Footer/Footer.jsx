import { FaGithub, FaLinkedin, FaYoutube, FaInstagram, FaEnvelope } from 'react-icons/fa'
import './Footer.css'

const navLinks = ['home', 'about me', 'Skills', 'Projects', 'Know More', 'contacts']

const socialLinks = [
  { name: 'Github',    url: 'https://github.com/maneeshkhandavalli',                          icon: <FaGithub /> },
  { name: 'LinkedIn',  url: 'https://www.linkedin.com/in/maneesh-khandavalli-33b365361/',     icon: <FaLinkedin /> },
  { name: 'Youtube',   url: 'https://www.youtube.com/@notebookandjourney',                    icon: <FaYoutube /> },
  { name: 'Instagram', url: 'https://www.instagram.com/notebookandjourney/',                  icon: <FaInstagram /> },
  { name: 'Email',     url: 'mailto:maneeshkhandavalliwork@gmail.com',                        icon: <FaEnvelope /> },
]

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-glow"></div>
      <div className="footer-container">
        
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-name">Maneesh Khandavalli</h2>
            <p className="footer-tagline">Built with passion.</p>
          </div>

          <div className="footer-nav">
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`}>{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-socials">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label={link.name}>
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Maneesh Khandavalli. All rights reserved.</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
