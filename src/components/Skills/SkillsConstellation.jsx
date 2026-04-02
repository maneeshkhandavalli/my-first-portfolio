import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import {
  FaReact, FaNodeJs, FaHtml5, FaGitAlt, FaPython
} from 'react-icons/fa'
import {
  SiTypescript, SiMongodb, SiJavascript, SiTailwindcss, SiExpress, SiFramer
} from 'react-icons/si'
import { BiCodeAlt } from 'react-icons/bi'
import { BsLayers, BsRobot } from 'react-icons/bs'
import './SkillsConstellation.css'

const hubSkill = {
  name: 'Full Stack Web',
  icon: <BsLayers />,
  color: '#fff'
}

const orbitSkills = [
  // Inner ring - Frontend
  { name: 'React', icon: <FaReact />, color: '#61dafb', ring: 1, angle: 0 },
  { name: 'JavaScript', icon: <SiJavascript />, color: '#f7df1e', ring: 1, angle: 60 },
  { name: 'HTML & CSS', icon: <FaHtml5 />, color: '#e34c26', ring: 1, angle: 120 },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178c6', ring: 1, angle: 180 },
  { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06b6d4', ring: 1, angle: 240 },
  { name: 'Framer', icon: <SiFramer />, color: '#fff', ring: 1, angle: 300 },

  // Middle ring - Backend
  { name: 'Node.js', icon: <FaNodeJs />, color: '#339933', ring: 2, angle: 30 },
  { name: 'Express', icon: <SiExpress />, color: '#fff', ring: 2, angle: 90 },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248', ring: 2, angle: 150 },
  { name: 'REST APIs', icon: <BiCodeAlt />, color: '#ff6b6b', ring: 2, angle: 210 },

  // Outer ring - Specialized
  { name: 'Git', icon: <FaGitAlt />, color: '#f05032', ring: 3, angle: 0 },
  { name: 'AI/ML', icon: <BsRobot />, color: '#8b5cf6', ring: 3, angle: 72 },
  { name: 'Python', icon: <FaPython />, color: '#3776ab', ring: 3, angle: 144 },
  { name: 'Full Stack', icon: <BsLayers />, color: '#10b981', ring: 3, angle: 216 },
  { name: 'Web Dev', icon: <FaHtml5 />, color: '#f97316', ring: 3, angle: 288 },
]

const connections = [
  ['React', 'Full Stack Web'], ['JavaScript', 'Full Stack Web'], ['Node.js', 'Full Stack Web'],
  ['Express', 'Node.js'], ['MongoDB', 'Node.js'], ['REST APIs', 'Node.js'],
  ['TypeScript', 'JavaScript'], ['Tailwind', 'HTML & CSS'], ['Framer', 'React'],
  ['Git', 'Full Stack Web'], ['AI/ML', 'Python'], ['Full Stack', 'Full Stack Web'],
]

function SkillsConstellation() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const interval = setInterval(() => {
      setRotation(r => r + 0.05)
    }, 50)
    return () => clearInterval(interval)
  }, [isInView])

  const getPosition = (ring, angle, offsetAngle = 0) => {
    const radius = ring === 1 ? 120 : ring === 2 ? 200 : 280
    const rad = ((angle + offsetAngle) * Math.PI) / 180
    return {
      x: Math.cos(rad) * radius,
      y: Math.sin(rad) * radius
    }
  }

  return (
    <section className="skills-section-constellation" id="skills" ref={sectionRef}>
      <motion.h2
        className="skills-heading-constellation"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        My Skills
      </motion.h2>

      <div className="constellation-container">
        <svg className="constellation-svg" viewBox="-350 -350 700 700">
          {/* Connection lines */}
          {connections.map(([from, to], i) => {
            const fromSkill = from === 'Full Stack Web' ? { ring: 0, angle: 0 } :
              orbitSkills.find(s => s.name === from)
            const toSkill = to === 'Full Stack Web' ? { ring: 0, angle: 0 } :
              orbitSkills.find(s => s.name === to)

            if (!fromSkill || !toSkill) return null

            const fromPos = fromSkill.ring === 0 ? { x: 0, y: 0 } :
              getPosition(fromSkill.ring, fromSkill.angle, rotation * (fromSkill.ring === 3 ? 0.3 : 0.5))
            const toPos = toSkill.ring === 0 ? { x: 0, y: 0 } :
              getPosition(toSkill.ring, toSkill.angle, rotation * (toSkill.ring === 3 ? 0.3 : 0.5))

            const isHighlighted = hoveredSkill === from || hoveredSkill === to || hoveredSkill === null

            return (
              <motion.line
                key={i}
                x1={fromPos.x}
                y1={fromPos.y}
                x2={toPos.x}
                y2={toPos.y}
                stroke={isHighlighted ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.15)"}
                strokeWidth={isHighlighted ? 2 : 1}
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ delay: i * 0.05, duration: 0.8 }}
              />
            )
          })}

          {/* Orbit rings */}
          {[120, 200, 280].map((radius, i) => (
            <motion.circle
              key={i}
              cx="0"
              cy="0"
              r={radius}
              fill="none"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="1.5"
              strokeDasharray="5,5"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.2 }}
            />
          ))}
        </svg>

        {/* Hub */}
        <motion.div
          className="constellation-hub"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.3, type: 'spring' }}
          onMouseEnter={() => setHoveredSkill('Full Stack Web')}
          onMouseLeave={() => setHoveredSkill(null)}
        >
          <div className="hub-icon">{hubSkill.icon}</div>
          <span className="hub-label">{hubSkill.name}</span>
        </motion.div>

        {/* Orbital nodes */}
        {orbitSkills.map((skill, index) => {
          const pos = getPosition(skill.ring, skill.angle, rotation * (skill.ring === 3 ? 0.3 : 0.5))
          const isHovered = hoveredSkill === skill.name
          const isConnected = hoveredSkill && connections.some(c =>
            (c[0] === skill.name && c[1] === hoveredSkill) ||
            (c[1] === skill.name && c[0] === hoveredSkill)
          )

          return (
            <motion.div
              key={skill.name}
              className="orbit-node"
              style={{
                x: pos.x,
                y: pos.y,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? {
                scale: isHovered ? 1.4 : isConnected ? 1.2 : 1,
                opacity: hoveredSkill && !isHovered && !isConnected ? 0.3 : 1
              } : {}}
              transition={{ delay: 0.5 + index * 0.05, type: 'spring' }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div
                className="node-icon"
                style={{
                  color: skill.color,
                  boxShadow: isHovered ? `0 0 20px ${skill.color}40` : 'none'
                }}
              >
                {skill.icon}
              </div>
              {(isHovered || (!hoveredSkill && skill.ring === 1)) && (
                <span className="node-label">{skill.name}</span>
              )}
            </motion.div>
          )
        })}
      </div>

      <motion.p
        className="constellation-hint"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.5 }}
      >
        Hover over nodes to explore connections
      </motion.p>
    </section>
  )
}

export default SkillsConstellation