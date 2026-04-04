import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import './Contact.css'

// ✅ FILL THESE IN:
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'   // from emailjs.com dashboard
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'  // from emailjs.com dashboard
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'   // from emailjs.com Account > General

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

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
        <motion.form
          className="contact-left"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <input
            type="text"
            name="name"
            className="contact-input"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            className="contact-input"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            className="contact-textarea"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleChange}
            required
          />
          <motion.button
            type="submit"
            className="contact-submit-btn"
            disabled={status === 'sending'}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {status === 'sending' ? 'Sending...' :
             status === 'success' ? 'Message Sent ✓' :
             status === 'error'   ? 'Failed — Try Again' :
             'Send'}
          </motion.button>
        </motion.form>

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
