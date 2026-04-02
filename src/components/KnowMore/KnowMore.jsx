import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram, FaEnvelope } from 'react-icons/fa'
import './KnowMore.css'

function KnowMore() {
  const socialLinks = [
    { name: 'Github', url: 'https://github.com/maneeshkhandavalli', icon: <FaGithub />, color: '#ffffff' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/maneesh-khandavalli-33b365361/', icon: <FaLinkedin />, color: '#0a66c2' },
    { name: 'Youtube', url: 'https://www.youtube.com/@notebookandjourney', icon: <FaYoutube />, color: '#ff0000' },
    { name: 'Instagram', url: 'https://www.instagram.com/notebookandjourney/', icon: <FaInstagram />, color: '#E1306C' },
    { name: 'Email', url: 'mailto:maneeshkhandavalliwork@gmail.com', icon: <FaEnvelope />, color: '#ea4335' },
  ]

  return (
    <section className="know-more" id="about-more">
      <div className="know-more-content">
        <motion.div 
          className="know-more-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="know-more-title">Connect with me</h2>
          <p className="know-more-text">
            Want to know more about me? Check out my social profiles and stay connected with what I'm currently working on, creating, and sharing.
          </p>
        </motion.div>
        
        <motion.div 
          className="know-more-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="social-links-grid">
            {socialLinks.map((link, i) => (
              <motion.a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + (i * 0.1) }}
                whileHover={{ y: -5, borderColor: link.color }}
              >
                <div className="social-icon" style={{ color: link.color }}>
                  {link.icon}
                </div>
                <span className="social-name">{link.name}</span>
                <div className="social-glow" style={{ background: link.color }}></div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default KnowMore
