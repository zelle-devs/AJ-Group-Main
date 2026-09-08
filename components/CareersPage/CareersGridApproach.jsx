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
  { icon: TrendingUp, title: 'Think Bigger', desc: 'Our approach is simple in principle, but ambitious in execution.' },
  { icon: Award, title: 'Build Stronger', desc: 'We don\'t build businesses to remain where they started.' },
  { icon: Users, title: 'Go Further', desc: 'We build them with the potential to become something greater.' },
//   { icon: Clock, title: 'Long-Term', desc: 'Build a career, not just a job.' },
];

export default function CareersGridApproach({
  eyebrow = '',
  headline = '',
  intro = '',
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