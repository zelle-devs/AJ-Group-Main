'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './ContactInfo.css';

const DEFAULT_CONTACT_DETAILS = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'A.J House, 23/1, Korangi Industrial Area, Karachi 74900, Pakistan',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+92 21 111 254 111',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@ajgroup.com',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Monday - Saturday: 9:00 AM - 6:00 PM',
  },
];

export default function ContactInfo({
  eyebrow = 'Head Office',
  headline = 'A.J Group Head Office.',
  details = DEFAULT_CONTACT_DETAILS,
}) {
  return (
    <section className="aj-contact-info-section">
      <div className="container2">
        <motion.div 
          className="aj-contact-info-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {eyebrow && <span className="aj-contact-info-eyebrow">{eyebrow}</span>}
          {headline && <h2 className="aj-contact-info-headline">{headline}</h2>}
        </motion.div>

        <div className="aj-contact-info-grid">
          {details.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <motion.div
                key={index}
                className="aj-contact-info-card"
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Glow Effect */}
                <div className="aj-contact-info-glow" />
                
                {/* Icon with Ring */}
                <div className="aj-contact-info-icon">
                  <Icon size={26} />
                </div>
                
                {/* Label */}
                <span className="aj-contact-info-label">{detail.label}</span>
                
                {/* Value */}
                <p className="aj-contact-info-value">{detail.value}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}