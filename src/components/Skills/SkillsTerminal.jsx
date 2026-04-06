import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import './SkillsTerminal.css'

const terminalLines = [
  { text: "# Initializing skill assessment module...", type: "comment", delay: 0 },
  { text: "", type: "empty", delay: 0.3 },
  { text: "$ skills --list --verbose", type: "command", delay: 0.5 },
  { text: "Loading skill database...", type: "output", delay: 0.8 },
  { text: "✓ Analysis complete!", type: "success", delay: 1.1 },
  { text: "", type: "empty", delay: 1.3 },
  { text: "# FRONTEND STACK", type: "section", delay: 1.5 },
  { text: 'const HTML_CSS     = "Expert";     // ████████████████████ 95%', type: "code", delay: 1.7, bar: 95 },
  { text: 'const JavaScript   = "Expert";     // ██████████████████░░ 90%', type: "code", delay: 1.9, bar: 90 },
  { text: 'const React        = "Advanced";   // ███████████████░░░░░ 80%', type: "code", delay: 2.1, bar: 80 },
  { text: 'const TypeScript   = "Intermed";   // ████████████░░░░░░░░ 75%', type: "code", delay: 2.3, bar: 75 },
  { text: 'const Tailwind     = "Expert";     // ████████████████████ 95%', type: "code", delay: 2.5, bar: 95 },
  { text: "", type: "empty", delay: 2.7 },
  { text: "# BACKEND STACK", type: "section", delay: 2.9 },
  { text: 'const NodeJS       = "Intermed";   // ████████████░░░░░░░░ 80%', type: "code", delay: 3.1, bar: 80 },
  { text: 'const Express      = "Intermed";   // ███████████░░░░░░░░░ 75%', type: "code", delay: 3.3, bar: 75 },
  { text: 'const MongoDB      = "Intermed";   // ██████████░░░░░░░░░░ 70%', type: "code", delay: 3.5, bar: 70 },
  { text: 'const REST_API     = "Advanced";   // ██████████████░░░░░░ 85%', type: "code", delay: 3.7, bar: 85 },
  { text: "", type: "empty", delay: 3.9 },
  { text: "# SPECIALIZATIONS", type: "section", delay: 4.1 },
  { text: 'const Git          = "Advanced";   // ███████████████░░░░░ 90%', type: "code", delay: 4.3, bar: 90 },
  { text: 'const AI_ML        = "Learning";   // ██████████░░░░░░░░░░ 70%', type: "code", delay: 4.7, bar: 70 },
  { text: 'const Python       = "Learning";   // █████████░░░░░░░░░░░ 65%', type: "code", delay: 4.9, bar: 65 },
  { text: "", type: "empty", delay: 3.9 },
  { text: "# TOOLS", type: "section", delay: 4.1 },
  { text: 'const Figma          = "Advanced";   // ███████████████░░░░░ 90%', type: "code", delay: 4.3, bar: 90 },
  { text: 'const Framer       = "Advanced";   // ██████████████░░░░░░ 85%', type: "code", delay: 4.5, bar: 85 },
  { text: 'const Stitch      = "Learning";   // ██████████░░░░░░░░░░ 70%', type: "code", delay: 4.7, bar: 70 },
  { text: 'const Canva       = "Learning";   // █████████░░░░░░░░░░░ 65%', type: "code", delay: 4.9, bar: 65 },
  
]

function SkillsTerminal() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })
  const [visibleLines, setVisibleLines] = useState([])
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    if (!isInView) {
      setVisibleLines([])
      return
    }

    terminalLines.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, index])
      }, line.delay * 1000)
    })
  }, [isInView])

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(v => !v)
    }, 530)
    return () => clearInterval(interval)
  }, [])

  const getLineColor = (type) => {
    switch(type) {
      case 'comment': return '#6a9955'
      case 'command': return '#fff'
      case 'output': return '#858585'
      case 'success': return '#4ec9b0'
      case 'section': return '#569cd6'
      case 'code': return '#dcdcaa'
      default: return '#fff'
    }
  }

  return (
    <section className="skills-section-terminal" id="skills" ref={sectionRef}>
      <motion.h2
        className="skills-heading-terminal"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        My Skills
      </motion.h2>

      <motion.div
        className="terminal-window"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {/* Terminal Header */}
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="terminal-btn close" />
            <span className="terminal-btn minimize" />
            <span className="terminal-btn maximize" />
          </div>
          <div className="terminal-title">developer@portfolio: ~/skills</div>
        </div>

        {/* Terminal Content */}
        <div className="terminal-content">
          <div className="line-numbers">
            {terminalLines.map((_, i) => (
              <div key={i} className="line-number">{i + 1}</div>
            ))}
          </div>

          <div className="terminal-lines">
            {terminalLines.map((line, index) => (
              <motion.div
                key={index}
                className={`terminal-line ${line.type}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: visibleLines.includes(index) ? 1 : 0 }}
                transition={{ duration: 0.1 }}
              >
                <span style={{ color: getLineColor(line.type) }}>
                  {line.text.split('//')[0]}
                  {line.text.includes('//') && (
                    <span className="line-comment">
                      {' //' + line.text.split('//')[1]}
                    </span>
                  )}
                </span>
                {line.bar && (
                  <motion.span
                    className="progress-ascii"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: visibleLines.includes(index) ? 1 : 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {' '}[{Array(20).fill(0).map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: visibleLines.includes(index) && i < (line.bar / 5) ? 1 : 0.2
                        }}
                        transition={{ delay: 0.4 + (i * 0.02) }}
                      >
                        █
                      </motion.span>
                    ))}]
                  </motion.span>
                )}
              </motion.div>
            ))}

            {/* Blinking cursor */}
            <div className="terminal-line">
              <span style={{ color: '#fff' }}>$ </span>
              <span
                className="cursor"
                style={{ opacity: cursorVisible ? 1 : 0 }}
              >
                █
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default SkillsTerminal