'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import './CapabilitiesSectionLeft.css';

export default function CapabilitiesSectionLeft({
  eyebrow,
  title,
  body,
  buttonText ,
  buttonLink,
  imageSrc,
  imageAlt,
}) {
  return (
    <section className="aj-cap-left-section">
      <div className="container2">
        <div className="aj-cap-left-grid">
          {/* Left Column - Content */}
          <motion.div
            className="aj-cap-left-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="aj-cap-left-eyebrow">{eyebrow}</span>
            <h2 className="aj-cap-left-title">{title}</h2>
            <p className="aj-cap-left-body">{body}</p>
            <a href={buttonLink} className="btn btn-outline-gold aj-cap-left-btn">
              {buttonText} <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Right Column - Unique Circular Shape */}
          <motion.div
            className="aj-cap-left-image-wrapper"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="aj-cap-left-shape">
              {/* Rotating Dots Ring */}
              <div className="aj-cap-left-dots-ring">
                <span className="aj-cap-left-dot aj-cap-left-dot--1" />
                <span className="aj-cap-left-dot aj-cap-left-dot--2" />
                <span className="aj-cap-left-dot aj-cap-left-dot--3" />
                <span className="aj-cap-left-dot aj-cap-left-dot--4" />
                <span className="aj-cap-left-dot aj-cap-left-dot--5" />
                <span className="aj-cap-left-dot aj-cap-left-dot--6" />
              </div>

              {/* Decorative Arcs */}
              <div className="aj-cap-left-arc" />
              <div className="aj-cap-left-arc aj-cap-left-arc--bottom" />

              {/* Image */}
              <Image
                src={imageSrc}
                alt={imageAlt}
                className="aj-cap-left-image"
                width={320}
                height={320}
                quality={100}
              />
              
              {/* Gradient Overlay */}
              <div className="aj-cap-left-image-overlay" />

              {/* Corner Lines */}
              <div className="aj-cap-left-corner-line aj-cap-left-corner-line--top" />
              <div className="aj-cap-left-corner-line aj-cap-left-corner-line--bottom" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}