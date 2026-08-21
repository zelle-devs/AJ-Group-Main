'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, PenTool, Cog, Package, Truck, CheckCircle2 } from 'lucide-react';
import './CapabilitiesSectionLeft.css';

const PROCESS_STEPS = [
  { icon: Lightbulb, title: 'Brief', desc: 'Understanding your vision', color: '#0B9FE3' },
  { icon: PenTool, title: 'Design', desc: 'Planning & prototyping', color: '#D32867' },
  { icon: Cog, title: 'Production', desc: 'Precision manufacturing', color: '#F4B033' },
  { icon: Package, title: 'Finishing', desc: 'Quality control', color: '#C8A54A' },
  { icon: Truck, title: 'Delivery', desc: 'On-time handover', color: '#0B9FE3' },
  { icon: CheckCircle2, title: 'Support', desc: 'After-sales care', color: '#D32867' },
];

export default function CapabilitiesSectionLeft({
  eyebrow = 'How we work',
  title = 'A considered process, start to finish.',
  body = "Every project follows the same deliberate sequence, from brief to delivery, so nothing is left to chance and nothing surprises you at the end.",
  buttonText = 'Explore Our Process',
  buttonLink = '/process',
}) {
  return (
    <section className="aj-process-section">
      <div className="container2">
        <div className="aj-process-grid">
          {/* Left Column - Content */}
          <motion.div
            className="aj-process-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="aj-process-eyebrow">{eyebrow}</span>
            <h2 className="aj-process-title">{title}</h2>
            <p className="aj-process-body">{body}</p>
            <a href={buttonLink} className="btn btn-outline-gold aj-process-btn">
              {buttonText} <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Right Column - Horizontal Process Timeline */}
          <motion.div
            className="aj-process-visual"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            {/* Vertical Timeline Line */}
            <div className="aj-process-timeline">
              {/* Animated Line */}
              <motion.div 
                className="aj-process-timeline-line"
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Steps */}
              {PROCESS_STEPS.map((step, index) => {
                const Icon = step.icon;
                const delay = 0.8 + index * 0.25;
                
                return (
                  <motion.div
                    key={index}
                    className="aj-process-timeline-step"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* Step Icon */}
                    <motion.div 
                      className="aj-process-step-icon-wrap"
                      style={{ '--step-color': step.color }}
                      whileHover={{ scale: 1.15 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Icon size={22} className="aj-process-step-icon" />
                    </motion.div>

                    {/* Step Content */}
                    <div className="aj-process-step-content">
                      <span className="aj-process-step-number">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="aj-process-step-title">{step.title}</h3>
                      <p className="aj-process-step-desc">{step.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}