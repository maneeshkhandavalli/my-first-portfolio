import { motion } from 'framer-motion'
import './About.css'

function About() {
  return (
    <section className="about" id="about-me">
      <motion.h2 
        className="about-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        About me
      </motion.h2>

      <div className="about-content">
        <motion.div 
          className="about-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="about-left-text">
            I’m Maneesh Khandavalli, a Computer Science student driven by curiosity and creativity. I enjoy building clean, modern digital experiences and exploring the intersection of design and technology.
          </p>
          <motion.button 
            className="about-btn"
            whileHover={{ scale: 1.05, boxShadow: '0px 0px 15px rgba(255,255,255,0.8)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Click to collab
          </motion.button>
        </motion.div>

        <motion.div 
          className="about-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p className="about-right-text">
              With a strong interest in AI, machine learning, and cybersecurity, I’m constantly learning and experimenting to turn ideas into real-world solutions. Beyond code, I’m passionate about cinematography, cars, and capturing moments that tell a story.
            </p>
            <p className="about-right-text">
              I believe in creating work that’s not just functional, but meaningful — something that connects, inspires, and lasts.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
