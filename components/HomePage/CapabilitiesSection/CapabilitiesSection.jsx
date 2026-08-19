'use client';

import { motion } from 'framer-motion';
import './CapabilitiesSection.css';

export default function CapabilitiesSection({
  eyebrow = 'Our capabilities',
  title = 'The machinery and method behind it.',
  body = "Range means little without the plant to back it. Across the group we run 5-axis CNC and fiber laser cutting, large-format UV printing, custom packaging lines, and in-house finishing, all held to one production standard. It's the capability to take on demanding work and hold quality across every unit.",
  buttonText = 'See Full Capabilities',
  buttonLink = '/capabilities',
  // NEW: align = "center" (default) ya "left" pass kar sakte hain
  align = 'center', 
}) {
  
  // Agar align left hai toh left margin 0, nahi toh auto (center)
  const alignmentStyle = align === 'left' 
    ? { marginLeft: 0, marginRight: 0, textAlign: 'left', alignItems: 'flex-start' } 
    : {};

  return (
    <section className="aj-cap-section">
      <div className="aj-cap-container">
        <motion.div
          className="aj-cap-wrapper"
          style={alignmentStyle} // Apply dynamic alignment
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="aj-cap-eyebrow">{eyebrow}</span>
          <h2 className="aj-cap-title">{title}</h2>
          <p className="aj-cap-body">{body}</p>
          <a href={buttonLink} className="btn btn-outline-gold aj-cap-btn">
            {buttonText}
          </a>
        </motion.div>
      </div>
    </section>
  );
}