'use client';

import { motion } from 'framer-motion';
import { 
  Award, 
  TrendingUp, 
  Users, 
  Clock,
  Briefcase,
  GraduationCap,
  Heart,
  Shield,
  Star,
} from 'lucide-react';
import './CareersGrid.css';

const DEFAULT_BENEFITS = [
  { icon: TrendingUp, title: 'Building Business', desc: 'Creating ventures from the ground up where we see meaningful potential.' },
  { icon: Award, title: 'Acquiring Business', desc: 'Partnering with or acquiring businesses that can become stronger as part of the Group.' },
  { icon: Users, title: 'New Sectors', desc: 'Exploring industries where long-term opportunity aligns with our capabilities and vision.' },
//   { icon: Clock, title: 'Long-Term', desc: 'Build a career, not just a job.' },
];

export default function CareersGridPorfolio({
  eyebrow = 'More Then What We Own Today',
  headline = 'The Portfolio is Only The Beginning',
  intro = 'AJ Group is not building around a fixed number of companies. We are building a group capable of expanding across sectors, markets and opportunities. That means remaining open to:',
  benefits = DEFAULT_BENEFITS,
  columns = 3,
}) {
  const getGridStyle = () => {
    return { gridTemplateColumns: `repeat(${columns}, 1fr)` };
  };

  return (
    <section className="aj-careers-grid-section">
      <div className="container2">
        <motion.div 
          className="aj-careers-grid-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {eyebrow && <span className="aj-careers-grid-eyebrow">{eyebrow}</span>}
          {headline && <h2 className="aj-careers-grid-headline">{headline}</h2>}
          {intro && <p className="aj-careers-grid-intro">{intro}</p>}
        </motion.div>

        <div className="aj-careers-grid-cards" style={getGridStyle()}>
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                className="aj-careers-benefit-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="aj-careers-benefit-icon">
                  <Icon size={28} />
                </div>
                <h3 className="aj-careers-benefit-title">{benefit.title}</h3>
                <p className="aj-careers-benefit-desc">{benefit.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}