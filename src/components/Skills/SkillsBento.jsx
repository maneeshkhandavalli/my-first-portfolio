import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaReact, FaNodeJs, FaHtml5, FaGitAlt, FaPython } from 'react-icons/fa'
import { SiTypescript, SiMongodb, SiJavascript, SiTailwindcss, SiExpress, SiFramer } from 'react-icons/si'
import { BiCodeAlt } from 'react-icons/bi'
import { BsLayers, BsRobot } from 'react-icons/bs'
import './SkillsBento.css'

const skillsData = [
  {
    title: "Programming & Core",
    subtitle: "Languages and fundamental web skills",
    level: "Expert",
    icon: <FaHtml5 />,
    size: "tall",
    techs: ["HTML", "CSS", "JavaScript", "TypeScript", "Python"]
  },
  {
    title: "Frontend Development",
    subtitle: "Modern UI frameworks & animation",
    level: "Advanced",
    icon: <FaReact />,
    size: "normal",
    techs: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Backend Development",
    subtitle: "Server-side and API development",
    level: "Intermediate",
    icon: <FaNodeJs />,
    size: "normal",
    techs: ["Node.js", "Express.js", "REST API Development"]
  },
  {
    title: "UI/UX Designing",
    subtitle: "Design tools and responsive principles",
    level: "Intermediate",
    icon: <SiFramer />,
    size: "normal",
    techs: ["Figma", "VS Code", "Responsive Design Principles"]
  },
  {
    title: "Databases",
    subtitle: "SQL and NoSQL storage solutions",
    level: "Intermediate",
    icon: <SiMongodb />,
    size: "wide",
    techs: ["MySQL", "MongoDB", "NoSQL"]
  },
  {
    title: "Tools & Platforms",
    subtitle: "Dev tools, version control & AI platforms",
    level: "Advanced",
    icon: <FaGitAlt />,
    size: "tall",
    techs: ["Git", "Docker", "Figma", "VS Code", "Claude AI", "Stitch AI"]
  },
  {
    title: "JavaScript",
    subtitle: "ES6+ and modern JS patterns",
    level: "Expert",
    icon: <SiJavascript />,
    size: "normal",
    techs: ["ES6+", "Async/Await", "DOM APIs", "TypeScript"]
  },
  {
    title: "Concepts",
    subtitle: "CS fundamentals and theory",
    level: "Intermediate",
    icon: <BiCodeAlt />,
    size: "normal",
    techs: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems"]
  },
  {
    title: "Full Stack Web",
    subtitle: "MERN stack, TypeScript, REST APIs",
    level: "Expert",
    icon: <BsLayers />,
    size: "wide",
    techs: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"]
  },
  {
    title: "Emerging Technologies",
    subtitle: "AI, ML and intelligent systems",
    level: "Intermediate",
    icon: <BsRobot />,
    size: "wide",
    techs: ["Artificial Intelligence", "Machine Learning", "LLM Integration"]
  },
  {
    title: "Python & Data",
    subtitle: "Scripting, data and ML workflows",
    level: "Intermediate",
    icon: <FaPython />,
    size: "normal",
    techs: ["Python", "Pandas", "NumPy", "Predictive Modeling"]
  },
  {
    title: "TypeScript",
    subtitle: "Type-safe development at scale",
    level: "Intermediate",
    icon: <SiTypescript />,
    size: "normal",
    techs: ["TypeScript", "Interfaces", "Generics", "Type Guards"]
  },
]

function SkillCard({ skill, index }) {
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 })

  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setTooltip({ visible: true, rect })
  }

  const handleMouseLeave = () => {
    setTooltip({ visible: false, rect: null })
  }

  return (
    <div className="skill-card-wrapper">
      <motion.div
        className={`skill-card ${skill.size}`}
        data-level={skill.level}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="skill-icon">
          {skill.icon}
        </div>
        <div className="skill-info">
          <h3 className="skill-title">{skill.title}</h3>
          <p className="skill-subtitle">{skill.subtitle}</p>
          <span className="skill-badge">{skill.level}</span>
        </div>

        {/* Tooltip rendered inside card but visually floated above */}
        <AnimatePresence>
          {tooltip.visible && (
            <motion.div
              className="skill-tooltip"
              initial={{ opacity: 0, y: 6, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.96 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
            >
              <div className="skill-tooltip-label">Technologies</div>
              <div className="skill-tooltip-pills">
                {skill.techs.map(tech => (
                  <span key={tech} className="skill-tech-pill">{tech}</span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

function SkillsBento() {
  return (
    <section className="skills-section" id="skills">
      <motion.h2
        className="skills-heading"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h2>

      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <SkillCard key={index} skill={skill} index={index} />
        ))}
      </div>
    </section>
  )
}

export default SkillsBento