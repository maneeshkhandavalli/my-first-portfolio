import { motion } from 'framer-motion'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div 
        className="hero-label"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="hero-label-title">UI/UX</span>
        <span className="hero-label-sub">Good design is invisible ; great design is unforgettable.</span>
      </motion.div>

      <motion.div 
        className="hero-name"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h1 className="hero-greeting">Hi i&apos;m</h1>
        <h1 className="hero-name-text">Maneesh Khandavalli</h1>
      </motion.div>

      <motion.div 
        className="hero-role"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <span className="hero-role-text">a student</span>
      </motion.div>
    </section>
  )
}

export default Hero
