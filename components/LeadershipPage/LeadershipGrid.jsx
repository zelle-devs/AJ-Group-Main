'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import './LeadershipGrid.css';

const DEFAULT_LEADERS = [
  {
    id: 1,
    name: '[Leader Name]',
    title: '[Title]',
    bio: '[One line about their experience]',
    image: '/ceo.jpg',
  },
  {
    id: 2,
    name: '[Leader Name]',
    title: '[Title]',
    bio: '[One line about their experience]',
    image: '/lead.jpg',
  },
  {
    id: 3,
    name: '[Leader Name]',
    title: '[Title]',
    bio: '[One line about their experience]',
    image: '/3.jpg',
  },
  {
    id: 4,
    name: '[Leader Name]',
    title: '[Title]',
    bio: '[One line about their experience]',
    image: '/ceo.jpg',
  },
  {
    id: 5,
    name: '[Leader Name]',
    title: '[Title]',
    bio: '[One line about their experience]',
    image: '/lead.jpg',
  },
  {
    id: 6,
    name: '[Leader Name]',
    title: '[Title]',
    bio: '[One line about their experience]',
    image: '/3.jpg',
  },
];

export default function LeadershipGrid({
  eyebrow = 'The Team',
  headline = 'The People Accountable for the Group.',
  body = "A.J Group's direction is guided by a leadership team with experience across manufacturing, design, commerce and investment.",
  leaders = DEFAULT_LEADERS,
  showBio = true,
  columns = 3, // 2 | 3 | 4
}) {
  
  const getGridStyle = () => {
    if (columns === 4) return { gridTemplateColumns: 'repeat(4, 1fr)' };
    if (columns === 2) return { gridTemplateColumns: 'repeat(2, 1fr)' };
    return { gridTemplateColumns: 'repeat(3, 1fr)' };
  };

  return (
    <section className="aj-leadership-grid-section">
      <div className="container2">
        {/* Header */}
        <motion.div 
          className="aj-leadership-grid-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {eyebrow && <span className="aj-leadership-grid-eyebrow">{eyebrow}</span>}
          {headline && <h2 className="aj-leadership-grid-headline">{headline}</h2>}
          {body && <p className="aj-leadership-grid-body">{body}</p>}
        </motion.div>

        {/* Grid */}
        <div className="aj-leadership-grid-cards" style={getGridStyle()}>
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.id || index}
              className="aj-leadership-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Image */}
              <div className="aj-leadership-card-image">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="aj-leadership-card-img"
                />
                <div className="aj-leadership-card-overlay" />
              </div>

              {/* Content */}
              <div className="aj-leadership-card-content">
                <h3 className="aj-leadership-card-name">{leader.name}</h3>
                <span className="aj-leadership-card-title">{leader.title}</span>
                {showBio && leader.bio && (
                  <p className="aj-leadership-card-bio">{leader.bio}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}