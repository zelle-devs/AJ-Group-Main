'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import './CTASection2.css';

export default function CTASection2({
  eyebrow = 'Get In Touch',
  headline = 'Have a project in mind?',
  body = "Tell us what you're building. Whether it's a single commission or a multi-company program, we'll point you to the right team and get moving.",
  primaryButtonText = 'Start a Project',
  primaryButtonLink = '/contact',
  secondaryButtonText = 'Contact the Group',
  secondaryButtonLink = '/contact',
}) {
  return (
    <section className="aj-cta-section">
      <div className="container2">
        <div className="aj-cta-wrapper">
          {/* Background Glow Effects */}
          <div className="aj-cta-glow aj-cta-glow--top" />
          <div className="aj-cta-glow aj-cta-glow--bottom" />

          {/* Row 1: Eyebrow + Headline (Left) | Body (Right) */}
          <motion.div 
            className="aj-cta-top-row"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Left - Eyebrow + Headline */}
            <div className="aj-cta-heading-group">
              <motion.span 
                className="aj-cta-eyebrow"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {eyebrow}
              </motion.span>
              
              <motion.h2 
                className="aj-cta-headline"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                {headline}
              </motion.h2>
            </div>

            {/* Right - Body */}
            <motion.p 
              className="aj-cta-body2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {body}
            </motion.p>
          </motion.div>

          {/* Row 2: Both Buttons in One Line */}
          <motion.div 
            className="aj-cta-buttons-row"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          >
            {/* Primary Button */}
            <motion.a 
              href={primaryButtonLink} 
              className="btn btn-gold aj-cta-primary-btn"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            //   whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {primaryButtonText} <ArrowRight size={18} />
            </motion.a>

            {/* Secondary Button */}
            <motion.a 
              href={secondaryButtonLink} 
              className="btn btn-outline-gold aj-cta-secondary-btn"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            //   whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone size={16} /> {secondaryButtonText}
            </motion.a>
          </motion.div>

          {/* Row 3: Contact Info */}
          {/* <motion.div 
            className="aj-cta-info-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <span className="aj-cta-info-item">
              <Mail size={16} />
              info@ajgroup.com
            </span>
            <span className="aj-cta-info-divider" />
            <span className="aj-cta-info-item">
              <Phone size={16} />
              +1 (234) 567-890
            </span>
            <span className="aj-cta-info-divider" />
            <span className="aj-cta-info-item">
              <MapPin size={16} />
              Global Operations
            </span>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}