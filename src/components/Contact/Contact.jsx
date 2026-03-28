import { useState } from 'react'
import { motion } from 'framer-motion'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '0796d740-65f2-4625-8498-804013dee13f',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: 'Portfolio Contact Form',
          subject: `New message from ${formData.name}`,
        })
      })

      const data = await response.json()
      if (data.success) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
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
            disabled={status === 'loading'}
            whileHover={{ scale: 1.03, boxShadow: '0px 0px 15px rgba(255,255,255,0.6)' }}
            whileTap={{ scale: 0.97 }}
          >
            {status === 'loading' ? 'Sending...' : 
             status === 'success' ? '✓ Message Sent!' : 
             status === 'error' ? 'Failed — Try Again' : 
             'Send Message'}
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

