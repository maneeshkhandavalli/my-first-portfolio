import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram, FaEnvelope } from 'react-icons/fa'
import './KnowMore.css'

// Inline SVG for FileText (document icon) — no extra dependency needed
const FileTextIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: 'block' }}
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
)

// PDF is placed in public/resume/ so it's accessible at /resume/maneesh_resume.pdf
const RESUME_PDF = '/resume/maneesh_resume.pdf'

function ResumeModal({ onClose }) {
  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        className="resume-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
      >
        {/* Modal panel — stop propagation so clicking inside doesn't close */}
        <motion.div
          className="resume-modal"
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={e => e.stopPropagation()}
        >
          {/* Header row */}
          <div className="resume-modal-header">
            <a
              href={RESUME_PDF}
              download="maneesh_resume.pdf"
              className="resume-download-btn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>

            <button className="resume-close-btn" onClick={onClose} aria-label="Close modal">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* PDF embed */}
          <div className="resume-iframe-wrap">
            <iframe
              src={RESUME_PDF}
              title="Maneesh Resume"
              className="resume-iframe"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function KnowMore() {
  const [resumeOpen, setResumeOpen] = useState(false)

  const socialLinks = [
    { name: 'Github',    url: 'https://github.com/maneeshkhandavalli',                          icon: <FaGithub />,    color: '#ffffff' },
    { name: 'LinkedIn',  url: 'https://www.linkedin.com/in/maneesh-khandavalli-33b365361/',     icon: <FaLinkedin />,  color: '#0a66c2' },
    { name: 'Youtube',   url: 'https://www.youtube.com/@notebookandjourney',                    icon: <FaYoutube />,   color: '#ff0000' },
    { name: 'Instagram', url: 'https://www.instagram.com/notebookandjourney/',                  icon: <FaInstagram />, color: '#E1306C' },
    { name: 'Email',     url: 'mailto:maneeshkhandavalliwork@gmail.com',                        icon: <FaEnvelope />,  color: '#ea4335' },
  ]

  return (
    <>
      {resumeOpen && <ResumeModal onClose={() => setResumeOpen(false)} />}

      <section className="know-more" id="know-more">
        <div className="know-more-content">
          <motion.div
            className="know-more-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="know-more-title">Know more </h2>
            <p className="know-more-text">
              Want to know more about me? Check out my social profiles and stay connected with what I'm currently working on, creating, and sharing.
            </p>
          </motion.div>

          <motion.div
            className="know-more-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="social-links-grid">
              {/* Existing social link cards */}
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + (i * 0.1) }}
                  whileHover={{ y: -5, borderColor: link.color }}
                >
                  <div className="social-icon" style={{ color: link.color }}>
                    {link.icon}
                  </div>
                  <span className="social-name">{link.name}</span>
                  <div className="social-glow" style={{ background: link.color }}></div>
                </motion.a>
              ))}

              {/* Resume card — 6th button */}
              <motion.button
                className="social-card resume-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + (5 * 0.1) }}
                whileHover={{ y: -5, borderColor: '#a78bfa' }}
                onClick={() => setResumeOpen(true)}
              >
                <div className="social-icon" style={{ color: '#a78bfa' }}>
                  <FileTextIcon />
                </div>
                <span className="social-name">Resume</span>
                <div className="social-glow" style={{ background: '#a78bfa' }}></div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default KnowMore
