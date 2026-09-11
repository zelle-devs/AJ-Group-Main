'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import './LeadershipHero.css';

export default function LeadershipHero({
  eyebrow = 'Leadership',
  headline = 'Growing the Group With Purpose.',
  body = "A.J Group is led by a team focused on building strong businesses and developing the capabilities behind them. That means looking beyond individual projects to the people, equipment, processes and opportunities that will shape the Group over the long term.",
  imageSrc = '/leadership-hero.jpg',
  imageAlt = 'A.J Group Leadership',
}) {
  return (
    <>
      <div className="hero-spacer" />
      <section className="aj-leadership-hero">
        <div className="container2">
          <div className="aj-leadership-grid">
            {/* Left Content */}
            <motion.div
              className="aj-leadership-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span 
                className="aj-leadership-eyebrow"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {eyebrow}
              </motion.span>
              
              <motion.h1 
                className="aj-leadership-headline"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                {headline}
              </motion.h1>
              
              <motion.p 
                className="aj-leadership-body"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                {body}
              </motion.p>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="aj-leadership-image-wrapper"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            >
              <div className="aj-leadership-image-container">
                <motion.div 
                  className="aj-leadership-image-main"
                  initial={{ clipPath: 'inset(0 100% 0 0)' }}
                  whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                >
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    className="aj-leadership-image"
                    fill
                    // quality={100}
                    priority
                  />
                  <div className="aj-leadership-image-overlay" />
                </motion.div>

                <motion.div 
                  className="aj-leadership-frame"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}