import { motion } from 'framer-motion'
import './KnowMore.css'

function KnowMore() {
  const socialLinks = ['Github', 'Instagram', 'Youtube', 'Linkedin', 'Gmail']

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
              <motion.button 
                key={link}
                className="social-btn"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
                whileHover={{ scale: 1.05, boxShadow: '0px 0px 15px rgba(255,255,255,0.8)' }}
                whileTap={{ scale: 0.95 }}
              >
                {link}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default KnowMore
