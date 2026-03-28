import { motion } from 'framer-motion'
import './Contact.css'

function Contact() {
  return (
    <section className="contact" id="contacts">
      <motion.h2 
        className="contact-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        Contact me
      </motion.h2>

      <div className="contact-content">
        <motion.div 
          className="contact-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <input type="text" className="contact-input" placeholder="unsent" defaultValue="unsent" />
          <input type="email" className="contact-input" placeholder="James Web@gmail.com" defaultValue="James Web@gmail.com" />
          <textarea className="contact-textarea" placeholder="Message..."></textarea>
        </motion.div>

        <motion.div 
          className="contact-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="contact-right-text">
            Got an idea, project, or just want to say hi? Feel free to reach out. I'd love to connect, collaborate, or even create something together.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
