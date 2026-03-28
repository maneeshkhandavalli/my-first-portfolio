import { motion } from 'framer-motion'
import './KnowMore.css'

function KnowMore() {
  const socialLinks = [
    { name: 'Github', url: 'https://github.com/maneeshkhandavalli' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/maneesh-khandavalli-33b365361/' },
    { name: 'Youtube', url: 'https://www.youtube.com/@notebookandjourney' },
    { name: 'Instagram', url: 'https://www.instagram.com/notebookandjourney/' },
    { name: 'Gmail', url: 'mailto:maneeshkhandavalliwork@gmail.com' },
  ]

  return (
    <section className="know-more" id="projects">
      <div className="know-more-content">
        <motion.div 
          className="know-more-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="know-more-title">Know more</h2>
          <p className="know-more-text">
            Want to know more about me? Check out my social profiles below and stay connected with what I'm working on and sharing
          </p>
        </motion.div>
        
        <motion.div 
          className="know-more-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="social-links-container">
            {socialLinks.map((link, i) => (
              <motion.a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
                whileHover={{ scale: 1.05, boxShadow: '0px 0px 15px rgba(255,255,255,0.8)' }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default KnowMore

