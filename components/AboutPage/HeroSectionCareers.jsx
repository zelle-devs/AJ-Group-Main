'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Award, CheckCircle2, Star, Shield, Target, Eye } from 'lucide-react';
import Image from 'next/image';
import './AboutSection.css';

export default function HeroSectionCareers({
  eyebrow = 'CAREERS',
  headline = 'Don\'t Just Join A Company, Join What We\'re Building' ,
  body = "AJ Group is growing — and the next chapter will require people who want to build it with us.We are building businesses, entering new sectors and creating opportunities for people who want more than a conventional career",
   
  imageSrc = '/AboutHeroIMageSection.jpeg',
  imageAlt = 'A.J Group Manufacturing',
   
  features = [
    { icon: CheckCircle2, label: 'One Standard' },
    { icon: CheckCircle2, label: 'One Partner' },
    { icon: CheckCircle2, label: 'Zero Compromise' },
  ],
  
  // Badges
  badge1Icon = Award,
  badge1Value = '',
  badge1Label = '',
  badge2Value = '1000+',
  badge2Label = 'Projects',
  
  // Layout Props
  showFeatures = true,
  showDivider = false,
  showBadge1 = true,
  showBadge2 = true,
  showDots = true,
  showFrame = true,
  showImageOverlay = true,
  
  // Spacer (for fixed hero effect)
  useSpacer = true,
}) {
  return (
    <>
       <style>{`
    .aj-about-frame::after {
      display: none;
    }
  `}</style>
      {useSpacer && <div className="hero-spacer" />}
      
      <section className="aj-about-section">
        <div className="container2">
          <div className="aj-about-grid" style={{gap:'50px'}}>
            {/* Left Column - Content */}
            <motion.div
              className="aj-about-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {eyebrow && (
                <motion.span 
                  className="aj-about-eyebrow"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {eyebrow}
                </motion.span>
              )}
              
              {headline && (
                <motion.h2 
                  className="aj-about-headline"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  {headline}
                </motion.h2>
              )}
              
              {showDivider && (
                <motion.div 
                  className="aj-about-divider"
                  initial={{ width: 0 }}
                  whileInView={{ width: 60 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                />
              )}
              
              {body && (
                <motion.p 
                  className="aj-about-body"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                  {body}
                </motion.p>
              )}
               
            <h2 style={{fontWeight:'700', color:'var(--color-gold)' ,fontFamily:'Gotham', fontSize:'20px'}}>THE OPPORTUNITIES ARE GROWING WITH IT</h2>
            <br/>
              {/* {showFeatures && features.length > 0 && (
                <motion.div 
                  className="aj-about-features"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {features.map((feature, index) => {
                    const FeatureIcon = feature.icon || CheckCircle2;
                    return (
                      <span key={index} className="aj-about-feature">
                        <FeatureIcon size={16} />
                        {feature.label}
                      </span>
                    );
                  })}
                </motion.div>
              )} */}
            </motion.div>

            {/* Right Column - Premium Image */}
            <motion.div
              className="aj-about-image-wrapper"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            >
              <div className="aj-about-image-container">
                {/* Main Image */}
                <motion.div 
                  className="aj-about-image-main"
                  initial={{ clipPath: 'inset(0 100% 0 0)' }}
                  whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                >
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    className="aj-about-image"
                    fill
                    // quality={100}
                    priority
                  />
                  {showImageOverlay && <div className="aj-about-image-overlay" />}
                </motion.div>

                {/* Decorative Gold Frame */}
                {showFrame && (
                  <motion.div 
                    className="aj-about-frame"
                    
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  />
                )}

                {/* Badge 1 - Companies */}
{showBadge1 && badge1Value && (
  <motion.div 
    className="aj-about-badge"
    initial={{ opacity: 0, y: 20, scale: 0.8 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.9 }}
  > 
    {badge1Icon && (() => {
      const BadgeIcon = badge1Icon;
      return <BadgeIcon size={22} />;
    })()}
    <div className="aj-about-badge-text">
      <span className="aj-about-badge-value">{badge1Value}</span>
      <span className="aj-about-badge-label">{badge1Label}</span>
    </div>
  </motion.div>
)}

                {/* Badge 2 - Projects */}
                {showBadge2 && badge2Value && (
                  <motion.div 
                    className="aj-about-badge aj-about-badge-year"
                    initial={{ opacity: 0, y: -20, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 1.1 }}
                  >
                    <div className="aj-about-badge-text">
                      <span className="aj-about-badge-value">{badge2Value}</span>
                      <span className="aj-about-badge-label">{badge2Label}</span>
                    </div>
                  </motion.div>
                )}

                {/* Corner Dots */}
                {/* {showDots && (
                  <motion.div 
                    className="aj-about-dots"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                  >
                    <span className="aj-about-dot" />
                    <span className="aj-about-dot" />
                    <span className="aj-about-dot" />
                    <span className="aj-about-dot" />
                    <span className="aj-about-dot" />
                    <span className="aj-about-dot" />
                    <span className="aj-about-dot" />
                    <span className="aj-about-dot" />
                    <span className="aj-about-dot" />
                  </motion.div>
                )} */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
 