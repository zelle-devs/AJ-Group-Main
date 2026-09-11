'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Factory, Printer, Package, Megaphone, Users, Globe } from 'lucide-react';
import Image from 'next/image';
import './IndustriesHero.css';

export default function IndustriesHero({
  eyebrow = 'Industries',
  headline = 'Capability Suited to Your Sector.',
  body = "A.J Group works across industries where quality, precision and presentation matter. As a diversified business group, we know different sectors need different things, a retail rollout, a structural facade and a hospitality fit-out are not the same job, and the Group brings the right capability and business to each.",
  imageSrc = '/turkey.jpg',
  imageAlt = 'A.J Group Industries',
}) {
  return (
    <>
      <div className="hero-spacer" />
      <section className="aj-industries-hero">
        <div className="container2">
          <div className="aj-industries-grid">
            {/* Left Content */}
            <motion.div
              className="aj-industries-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span 
                className="aj-industries-eyebrow"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {eyebrow}
              </motion.span>
              
              <motion.h1 
                className="aj-industries-headline"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                {headline}
              </motion.h1>
              
              <motion.p 
                className="aj-industries-body"
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
              className="aj-industries-image-wrapper"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            >
              <div className="aj-industries-image-container">
                <motion.div 
                  className="aj-industries-image-main"
                  initial={{ clipPath: 'inset(0 100% 0 0)' }}
                  whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                >
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    className="aj-industries-image"
                    fill
                    // quality={100}
                    priority
                  />
                  <div className="aj-industries-image-overlay" />
                </motion.div>

                <motion.div 
                  className="aj-industries-frame"
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