import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Projects.css'

import curaAiImg from '../../assets/projects/cura_ai.png'
import comingSoonImg from '../../assets/projects/coming_soon.png'

const projectsData = [
  {
    id: 1,
    title: 'CuraAI',
    description: 'A full-stack AI health platform built with React, Supabase, and the Claude API. Features an AI doctor, live hospital locator, and secure medical records using a premium glassmorphism design.',
    link: 'https://cura-ai.lovable.app',
    image: curaAiImg,
    tags: ['React', 'Supabase', 'AI/ML']
  },
  {
    id: 2,
    title: 'Galaxy Notes',
    description: 'A simple, intuitive note-making app. Clean UI, minimal distractions, and essential syntax markup to help keep your ideas organized effortlessly.',
    link: '#',
    image: comingSoonImg,
    tags: ['React', 'CSS', 'Notes']
  },
  {
    id: 3,
    title: 'Midnight Studies',
    description: 'A dedicated productivity app designed for late-night grinds. Includes focus timers, dark mode optimization, and task tracking to enhance late study sessions.',
    link: '#',
    image: comingSoonImg,
    tags: ['Productivity', 'JavaScript']
  },
  {
    id: 4,
    title: 'More Projects',
    description: 'Stay tuned! More exciting projects are being crafted in the lab. I am always experimenting and building new things.',
    link: '#',
    image: comingSoonImg,
    tags: ['Next', 'Future']
  }
]

function Projects() {
  const carouselRef = useRef(null)

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -380, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 380, behavior: 'smooth' })
    }
  }
  
  return (
    <section className="projects-section" id="projects">
      <motion.div 
        className="projects-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-subtitle">Scroll or click arrows to explore</p>
        </div>
        <div className="carousel-nav">
          <button className="nav-button" onClick={scrollLeft}>&larr;</button>
          <button className="nav-button" onClick={scrollRight}>&rarr;</button>
        </div>
      </motion.div>

      <motion.div ref={carouselRef} className="projects-carousel-container">
        <motion.div 
          className="projects-carousel"
        >
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="project-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" draggable="false" />
              </div>
              <div className="project-content">
                <h3 className="project-name">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  target={project.link === '#' ? '_self' : '_blank'} 
                  rel="noopener noreferrer" 
                  className="project-link"
                  draggable="false"
                >
                  View Project <span className="arrow">↗</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects
