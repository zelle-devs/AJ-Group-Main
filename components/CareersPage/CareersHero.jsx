'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Users, TrendingUp, Award } from 'lucide-react';
import './CareersHero.css';

export default function CareersHero({
  eyebrow = 'Careers',
  headline = 'Build Your Career With the Group',
  body = "At A.J Group, you'll work alongside people who take pride in what they make, across manufacturing, industrial solutions, print, packaging and design. If you care about doing work properly and want room to grow, there's a place for you here.",
  imageSrc = '/CareerMainImageSlider.jpeg',
  imageAlt = 'A.J Group Careers',
  badge1Icon = Users,
  badge1Value = '100+',
  badge1Label = 'Team Members',
  badge2Value = '4+',
  badge2Label = 'Businesses',
  useSpacer = true,
}) {
  return (
    <>
      {useSpacer && <div className="hero-spacer" />}
      
      <section className="aj-careers-hero">
        <div className="container2">
          <div className="aj-careers-grid">
            {/* Left Content */}
            <motion.div
              className="aj-careers-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span 
                className="aj-careers-eyebrow"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {eyebrow}
              </motion.span>
              
              <motion.h1 
                className="aj-careers-headline"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                {headline}
              </motion.h1>
              
              <motion.p 
                className="aj-careers-body"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                {body}
              </motion.p>
              
              {/* Buttons */}
              <motion.div 
                className="aj-careers-buttons"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <a href="/careers/roles" className="btn btn-gold aj-careers-btn">
                  View Open Roles <ArrowRight size={16} />
                </a>
                <a href="/careers/apply" className="btn btn-outline-gold aj-careers-btn">
                  Submit Your CV
                </a>
              </motion.div>
            
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="aj-careers-image-wrapper"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            >
              <div className="aj-careers-image-container">
                <motion.div 
                  className="aj-careers-image-main"
                  initial={{ clipPath: 'inset(0 100% 0 0)' }}
                  whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                >
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    className="aj-careers-image"
                    fill
                    quality={100}
                    priority
                  />
                  <div className="aj-careers-image-overlay" />
                </motion.div>

                <motion.div 
                  className="aj-careers-frame"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                />

                {/* Badges */}
                <motion.div 
                  className="aj-careers-badge"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.9 }}
                >
                  {badge1Icon && (() => {
  const BadgeIcon = badge1Icon;
  return <BadgeIcon size={22} />;
})()}
                  <div className="aj-careers-badge-text">
                    <span className="aj-careers-badge-value">{badge1Value}</span>
                    <span className="aj-careers-badge-label">{badge1Label}</span>
                  </div>
                </motion.div>

                <motion.div 
                  className="aj-careers-badge aj-careers-badge-year"
                  initial={{ opacity: 0, y: -20, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 1.1 }}
                >
                  <div className="aj-careers-badge-text">
                    <span className="aj-careers-badge-value">{badge2Value}</span>
                    <span className="aj-careers-badge-label">{badge2Label}</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}