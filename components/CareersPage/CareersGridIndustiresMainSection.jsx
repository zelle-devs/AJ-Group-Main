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
    icon: Layers, 
    title: 'Build', 
    desc: 'When we see an opportunity worth pursuing, we can build from the ground up.' 
  },
  { 
    icon: Award, 
    title: 'Acquire', 
    desc: 'We look for established businesses with strong potential and opportunities for long-term growth' 
  },
  { 
    icon: TrendingUp, 
    title: 'Expand', 
    desc: 'We develop existing businesses, enter adjacent markets and explore entirely new sectors' 
  },
//   { 
//     icon: Rocket, 
//     title: 'A Different Career', 
//     desc: 'The people who join us along the way will be a core part of that journey.' 
//   },
];

export default function CareersGridIndustiresMainSection({
  eyebrow = 'The Opportunity',
  headline = 'BUILD. ACQUIRE. EXPAND',
  intro = 'Three ways we enter new opportunities.',
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