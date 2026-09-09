'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Mail, Phone, User, Building2 } from 'lucide-react';
import './ContactForm.css';

export default function ContactForm({
  eyebrow = 'Send a Message',
  headline = 'Tell Us About Your Project.',
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '', 
    message: '',
  });
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message && formData.subject && consent) {
      try {
        const response = await fetch('https://ajgrouphqapi.zellehost.com/api/contacts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            full_name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            phone: formData.phone,
            company: formData.company,
            agree_pp: consent
          }),
        });

        if (response.ok) {
          setSubmitted(true);
        } else {
          console.error('API submission failed');
        }
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <section className="aj-contact-form-section" >
      <div className="container2" style={{width:'100%'}}>
        <motion.div 
          className="aj-contact-form-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {eyebrow && <span className="aj-contact-form-eyebrow">{eyebrow}</span>}
          {headline && <h2 className="aj-contact-form-headline">{headline}</h2>}
        </motion.div>

        {submitted ? (
          <motion.div 
            className="aj-contact-form-success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            <div className="aj-contact-form-success-icon">
              <CheckCircle2 size={40} />
            </div>
            <h3>Message Sent!</h3>
            <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
            <button 
              className="btn btn-outline-gold aj-contact-form-reset"
              onClick={() => setSubmitted(false)}
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <motion.form 
            className="aj-contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30, rotateX: -5 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Row 1 */}
            <div className="aj-contact-form-row">
              <div className="aj-contact-form-group">
                <label className="aj-contact-form-label">
                  <User size={14} /> Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="aj-contact-form-input"
                  required
                />
              </div>
              <div className="aj-contact-form-group">
                <label className="aj-contact-form-label">
                  <Mail size={14} /> Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="aj-contact-form-input"
                  required
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="aj-contact-form-row">
              <div className="aj-contact-form-group">
                <label className="aj-contact-form-label">
                  <Phone size={14} /> Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="aj-contact-form-input"
                />
              </div>
              <div className="aj-contact-form-group">
                <label className="aj-contact-form-label">
                  <Building2 size={14} /> Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="aj-contact-form-input"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="aj-contact-form-group">
              <label className="aj-contact-form-label">Subject *</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="aj-contact-form-input"
                required
              />
            </div>

            {/* Message */}
            <div className="aj-contact-form-group">
              <label className="aj-contact-form-label">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="aj-contact-form-textarea"
                rows="5"
                required
              />
            </div>

            {/* Consent */}
            <div className="aj-contact-form-consent">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="aj-contact-form-checkbox"
                required
              />
              <span className="aj-contact-form-consent-text">
                I agree to A.J Group processing my personal data in accordance with the privacy policy.
              </span>
            </div>

            {/* Submit */}
            <button type="submit" className="btn btn-gold aj-contact-form-submit">
              Send Message <Send size={16} />
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}