import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  FaReact, FaNodeJs, FaHtml5, FaGitAlt, FaPython, FaChevronLeft, FaChevronRight
} from 'react-icons/fa'
import {
  SiTypescript, SiMongodb, SiJavascript, SiTailwindcss, SiExpress, SiFramer, SiOpenai
} from 'react-icons/si'
import { BiCodeAlt } from 'react-icons/bi'
import { BsLayers, BsRobot } from 'react-icons/bs'
import './SkillsCarousel.css'

const skillCategories = [
  {
    name: 'Frontend',
    color: '#f97316',
    skills: [
      { name: 'HTML & CSS', level: 95, icon: <FaHtml5 /> },
      { name: 'JavaScript', level: 90, icon: <SiJavascript /> },
      { name: 'React', level: 80, icon: <FaReact /> },
      { name: 'TypeScript', level: 75, icon: <SiTypescript /> },
      { name: 'Tailwind CSS', level: 95, icon: <SiTailwindcss /> },
    ]
  },
  {
    name: 'Backend',
    color: '#22c55e',
    skills: [
      { name: 'Node.js', level: 80, icon: <FaNodeJs /> },
      { name: 'Express.js', level: 75, icon: <SiExpress /> },
      { name: 'REST APIs', level: 85, icon: <BiCodeAlt /> },
      { name: 'MongoDB', level: 70, icon: <SiMongodb /> },
    ]
  },
  {
    name: 'Tools & Dev',
    color: '#a855f7',
    skills: [
      { name: 'Git', level: 90, icon: <FaGitAlt /> },
      { name: 'Framer Motion', level: 85, icon: <SiFramer /> },
    ]
  },
  {
    name: 'AI/ML',
    color: '#3b82f6',
    skills: [
      { name: 'AI & ML', level: 70, icon: <BsRobot /> },
      { name: 'Python', level: 65, icon: <FaPython /> },
      { name: 'LLM Integration', level: 75, icon: <SiOpenai /> },
    ]
  }
]

function SkillsCarousel() {
  const scrollRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPos = scrollRef.current.scrollLeft
      const cardWidth = 320
      const newIndex = Math.round(scrollPos / cardWidth)
      setActiveIndex(newIndex)
    }
  }

  return (
    <section className="skills-section-carousel" id="skills" ref={sectionRef}>
      <motion.h2
        className="skills-heading-carousel"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        My Skills
      </motion.h2>

      <div className="carousel-container">
        <button className="carousel-arrow left" onClick={() => scroll('left')}>
          <FaChevronLeft />
        </button>

        <div
          className="carousel-scroll"
          ref={scrollRef}
          onScroll={handleScroll}
        >
          {skillCategories.map((category, catIndex) => (
            <div key={category.name} className="category-group">
              <motion.div
                className="category-header"
                style={{ color: category.color }}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: catIndex * 0.1 }}
              >
                <span className="category-dot" style={{ background: category.color }} />
                {category.name}
              </motion.div>

              <div className="category-cards">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-card-carousel"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: (catIndex * 0.1) + (skillIndex * 0.05), duration: 0.5 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    <div className="skill-icon-wrap" style={{ color: category.color }}>
                      {skill.icon}
                    </div>
                    <h3 className="skill-name">{skill.name}</h3>
                    <div className="progress-bar">
                      <motion.div
                        className="progress-fill"
                        style={{ background: category.color }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: 0.5 + (catIndex * 0.1) + (skillIndex * 0.05), duration: 1, ease: 'easeOut' }}
                      />
                    </div>
                    <span className="skill-percent">{skill.level}%</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-arrow right" onClick={() => scroll('right')}>
          <FaChevronRight />
        </button>
      </div>

      <div className="scroll-indicators">
        {skillCategories.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === activeIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </section>
  )
}

export default SkillsCarousel