import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaHtml5, FaGitAlt, FaPython } from 'react-icons/fa'
import { SiTypescript, SiMongodb, SiJavascript, SiTailwindcss, SiExpress, SiFramer } from 'react-icons/si'
import { BiCodeAlt } from 'react-icons/bi'
import { BsLayers, BsRobot } from 'react-icons/bs'
import { IoGameControllerOutline } from 'react-icons/io5'
import './Skills.css'

const skillsData = [
  {
    title: "React & Next.js",
    subtitle: "Building modern web applications",
    level: "Intermediate",
    icon: <FaReact />,
    size: "tall"
  },
  {
    title: "TypeScript",
    subtitle: "Type-safe development",
    level: "Intermediate",
    icon: <SiTypescript />,
    size: "normal"
  },
  {
    title: "Node.js",
    subtitle: "Server-side JavaScript",
    level: "Intermediate",
    icon: <FaNodeJs />,
    size: "normal"
  },
  {
    title: "REST APIs",
    subtitle: "API design and integration",
    level: "Intermediate",
    icon: <BiCodeAlt />,
    size: "normal"
  },
  {
    title: "HTML & CSS",
    subtitle: "Semantic markup and styling",
    level: "Expert",
    icon: <FaHtml5 />,
    size: "wide"
  },
  {
    title: "MongoDB",
    subtitle: "NoSQL Database",
    level: "Intermediate",
    icon: <SiMongodb />,
    size: "normal"
  },
  {
    title: "JavaScript",
    subtitle: "ES6+ and modern JS",
    level: "Expert",
    icon: <SiJavascript />,
    size: "tall"
  },
  {
    title: "Tailwind CSS",
    subtitle: "Utility-first styling",
    level: "Expert",
    icon: <SiTailwindcss />,
    size: "normal"
  },
  {
    title: "Express.js",
    subtitle: "Backend web frameworks",
    level: "Intermediate",
    icon: <SiExpress />,
    size: "normal"
  },
  {
    title: "Framer Motion",
    subtitle: "Animation library",
    level: "Advanced",
    icon: <SiFramer />,
    size: "normal"
  },
  {
    title: "Git",
    subtitle: "Version control",
    level: "Advanced",
    icon: <FaGitAlt />,
    size: "normal"
  },
  {
    title: "Full Stack Web",
    subtitle: "MERN stack, TypeScript, REST APIs",
    level: "Expert",
    icon: <BsLayers />,
    size: "wide"
  },
  {
    title: "AI & Machine Learning",
    subtitle: "Building AI agents, LLM integration, fine-tuning",
    level: "Intermediate",
    icon: <BsRobot />,
    size: "wide"
  },
  {
    title: "Python & Data",
    subtitle: "Predictive modeling and statistical analysis",
    level: "Intermediate",
    icon: <FaPython />,
    size: "normal"
  }
];

function Skills() {
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
          <motion.div 
            key={index} 
            className={`skill-card ${skill.size}`}
            data-level={skill.level}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <div className="skill-icon">
              {skill.icon}
            </div>
            <div className="skill-info">
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-subtitle">{skill.subtitle}</p>
              <span className="skill-badge">{skill.level}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
