'use client';

import { motion } from 'framer-motion';
import { Briefcase, FolderKanban, Building2, Users, ArrowRight } from 'lucide-react';
import './ContactCards.css';

const DEFAULT_CARDS = [
  {
    icon: Briefcase,
    title: 'Business Enquiries',
    desc: 'For new business, partnerships or general commercial enquiries, this is the fastest route to the A.J Group team.',
    buttonText: 'Contact Business Team',
    buttonLink: '/contact/business',
    variant: 'standard',
  },
  {
    icon: FolderKanban,
    title: 'Project Enquiries',
    desc: "Have a project in mind? Tell us what you need and the Group will identify the right capabilities and businesses for the job.",
    buttonText: 'Start a Project',
    buttonLink: '/consultation',
    variant: 'primary',
  },
  {
    icon: Building2,
    title: 'Company Enquiries',
    desc: 'Already know which business you need? You can go direct to the specific company.',
    buttonText: 'Contact a Company',
    buttonLink: '/our-portfolio',
    variant: 'standard',
  },
  {
    icon: Users,
    title: 'Careers',
    desc: 'For careers and recruitment, reach the A.J Group people team or submit your CV directly.',
    buttonText: 'Visit Careers',
    buttonLink: '/careers',
    variant: 'standard',
  },
];

export default function ContactCards({
  cards = DEFAULT_CARDS,
}) {
  return (
    <section className="aj-contact-cards-section">
      <div className="container2">
        <div className="aj-contact-cards-grid">
          {cards.map((card, index) => {
            const Icon = card.icon;
            const isPrimary = card.variant === 'primary';
            return (
              <motion.div
                key={index}
                className={`aj-contact-card ${isPrimary ? 'is-primary' : ''}`}
                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                {/* Glow */}
                <div className="aj-contact-card-glow" />
                
                {/* Icon */}
                <div className="aj-contact-card-icon">
                  <Icon size={26} />
                </div>
                
                {/* Title */}
                <h3 className="aj-contact-card-title">{card.title}</h3>
                
                {/* Description */}
                <p className="aj-contact-card-desc">{card.desc}</p>
                
                {/* Button */}
                <a href={card.buttonLink} className={`btn ${isPrimary ? 'btn-gold' : 'btn-outline-gold'} aj-contact-card-btn`}>
                  {card.buttonText} <ArrowRight size={14} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}