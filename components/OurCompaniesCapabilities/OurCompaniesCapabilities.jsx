'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import '../../components/HomePage/CapabilitiesSection/CapabilitiesSection.css';

export default function OurCompaniesCapabilities({
  // Content Props
  eyebrow = 'Group capabilities',
  title = 'Everything You Can Make With One Partner',
  body = "Together, our companies cover an unusually wide production range under one roof: metal fabrication and machining, large-format and high-definition print, packaging and presentation, advertising and exhibition production, and finished consumer design objects.",
  buttonText = 'See Full Capabilities',
  buttonLink = '/capabilities',
   
  align = 'center', // 'center' | 'left' | 'right'
  showButton = true,
  showArrow = true, // Button mein arrow icon
  maxWidth = 900, // Content max width
  
  // Animation Props
  animationDelay = 0,
}) {
  
  // Alignment Style
  const getAlignmentStyle = () => {
    switch (align) {
      case 'left':
        return { 
          marginLeft: 0, 
          marginRight: 'auto', 
          textAlign: 'left', 
          alignItems: 'flex-start' 
        };
      case 'right':
        return { 
          marginLeft: 'auto', 
          marginRight: 0, 
          textAlign: 'right', 
          alignItems: 'flex-end' 
        };
      default: // center
        return { 
          marginLeft: 'auto', 
          marginRight: 'auto', 
          textAlign: 'center', 
          alignItems: 'center' 
        };
    }
  };

  return (
    <section className="aj-cap-section">
      <div className="aj-cap-container">
        <motion.div
          className="aj-cap-wrapper"
          style={{
            ...getAlignmentStyle(),
            maxWidth: maxWidth,
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ 
            duration: 0.8, 
            delay: animationDelay,
            ease: [0.22, 1, 0.36, 1] 
          }}
        >
          {eyebrow && <span className="aj-cap-eyebrow">{eyebrow}</span>}
          
          <h2 className="aj-cap-title">{title}</h2>
          
          {body && <p className="aj-cap-body">{body}</p>}
          
          {showButton && buttonText && (
            <a href={buttonLink} className="btn btn-outline-gold aj-cap-btn">
              {buttonText}
              {showArrow && <ArrowRight size={16} />}
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
 