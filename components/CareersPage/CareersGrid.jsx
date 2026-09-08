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
  Layers,
  Target,
  Rocket,
} from 'lucide-react';
import './CareersGrid.css';

const DEFAULT_BENEFITS = [
  { 
    icon: TrendingUp, 
    title: 'Larger Future', 
    desc: 'AJ Group is building toward a much larger future as a diversified group.' 
  },
  { 
    icon: Layers, 
    title: 'New Horizons', 
    desc: 'Expanding into new businesses, new industries, and new opportunities.' 
  },
  { 
    icon: Target, 
    title: 'Visionary Enterprise', 
    desc: 'Scaling our operations and vision to achieve unprecedented growth and lasting impact.' 
  },
  { 
    icon: Rocket, 
    title: 'A Different Career', 
    desc: 'The people who join us along the way will be a core part of that journey.' 
  },
];

export default function CareersGrid({
  eyebrow = 'The Opportunity',
  headline = 'Help Write The Story',
  intro = 'You could join after the story is written. Or... you could help write it.',
  benefits = DEFAULT_BENEFITS,
  columns = 4,
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