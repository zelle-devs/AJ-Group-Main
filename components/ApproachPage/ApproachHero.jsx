'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import './ApproachHero.css';

export default function ApproachHero({
  eyebrow = 'Our Approach',
  headline = 'A Clear Process From Start to Finish',
  body = "Good work starts with understanding what is actually required. A.J Group follows the same considered process on every project, so expectations are set early, progress stays visible and the finished work reflects what was agreed at the beginning.",
  imageSrc = '/turkey.jpg',
  imageAlt = 'A.J Group Process',
}) {
  return (
    <>
      <div className="hero-spacer" />
      <section className="aj-approach-hero">
        <div className="container2">
          <div className="aj-approach-grid">
            {/* Left Content */}
            <motion.div
              className="aj-approach-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span 
                className="aj-approach-eyebrow"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {eyebrow}
              </motion.span>
              
              <motion.h1 
                className="aj-approach-headline"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                {headline}
              </motion.h1>
              
              <motion.p 
                className="aj-approach-body"
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
              className="aj-approach-image-wrapper"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            >
              <div className="aj-approach-image-container">
                <motion.div 
                  className="aj-approach-image-main"
                  initial={{ clipPath: 'inset(0 100% 0 0)' }}
                  whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                >
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    className="aj-approach-image"
                    fill
                    quality={100}
                    priority
                  />
                  <div className="aj-approach-image-overlay" />
                </motion.div>

                <motion.div 
                  className="aj-approach-frame"
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