import { motion } from 'framer-motion'
import './About.css'

function About() {
  return (
    <section className="about" id="about-me">
      <motion.h2 
        className="about-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        About me
      </motion.h2>

      <div className="about-content">
        <motion.div 
          className="about-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="about-left-text">
            My passion lies in the intersection of art and technology, creating
            visually stunning websites and designs.
          </p>
          <motion.button 
            className="about-btn"
            whileHover={{ scale: 1.05, boxShadow: '0px 0px 15px rgba(255,255,255,0.8)' }}
            whileTap={{ scale: 0.95 }}
          >
            Click to collab
          </motion.button>
        </motion.div>

        <motion.div 
          className="about-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="about-right-text">
            Im pursuing my Bachelor of Technology in Computer Science. This academic foundation
            has equipped me with a solid understanding of the principles that
            underpin effective interaction design, providing me with the knowledge to
            create designs that seamlessly blend aesthetics and functionality
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
