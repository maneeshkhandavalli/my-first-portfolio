import { useState, useEffect } from 'react'
import SkillsCarousel from './SkillsCarousel'
import SkillsConstellation from './SkillsConstellation'
import SkillsTerminal from './SkillsTerminal'
import SkillsBento from './SkillsBento'
import { motion } from 'framer-motion'
import './Skills.css'

const variants = [
  // { id: 'bento', label: 'Bento Grid', component: SkillsBento },
  // { id: 'carousel', label: 'Carousel', component: SkillsCarousel },
  // { id: 'constellation', label: 'Constellation', component: SkillsConstellation },
  { id: 'terminal', label: 'Terminal', component: SkillsTerminal },
]

function Skills() {
  const [activeVariant, setActiveVariant] = useState('bento')

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 768px)')
    
    // Set initial value
    setActiveVariant(mql.matches ? 'terminal' : 'bento')

    // Listen for window resize
    const handleChange = (e) => {
      setActiveVariant(e.matches ? 'terminal' : 'bento')
    }

    mql.addEventListener('change', handleChange)
    return () => mql.removeEventListener('change', handleChange)
  }, [])

  const ActiveComponent = variants.find(v => v.id === activeVariant)?.component || SkillsTerminal  //this where you can change which one is default

  return (
    <div className="skills-wrapper">
      {/* Variant Toggle */}
      <motion.div
        className="skills-variant-toggle"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >

        {/* //this is where you turn on and off the toggle desing feature */}

        {/* <span className="toggle-label">Design:</span>
        <div className="toggle-buttons">
          {variants.map(variant => (
            <button
              key={variant.id}
              className={`toggle-btn ${activeVariant === variant.id ? 'active' : ''}`}
              onClick={() => setActiveVariant(variant.id)}
            >
              {variant.label}
            </button>
          ))}
        </div> */}
      </motion.div>

      {/* Active Skill Component */}
      <ActiveComponent />
    </div>
  )
}

export default Skills