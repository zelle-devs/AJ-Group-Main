'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Award, CheckCircle2, Star, Shield, Target, Eye } from 'lucide-react';
import Image from 'next/image';
import './AboutSection.css';

export default function AboutSection({
  // Content Props
  eyebrow = 'About us',
  headline = 'A Diversified Business Group',
  body = "A.J Group is a diversified business group. Under one name we bring together expert companies across manufacturing, industrial solutions, print, packaging, advertising and consumer products, with a growing footprint in real estate and emerging sectors. Each company is expert in its own field, and each draws on the resources, infrastructure and standards of the wider Group. What connects them is a shared commitment to building lasting value and making things properly.",
  
  // Image Props
  imageSrc = '/AboutHeroIMageSection.jpeg',
  imageAlt = 'A.J Group Manufacturing',
  
  // Features (Pills)
  features = [
    { icon: CheckCircle2, label: 'One Standard' },
    { icon: CheckCircle2, label: 'One Partner' },
    { icon: CheckCircle2, label: 'Zero Compromise' },
  ],
  
  // Badges
  badge1Icon = Award,
  badge1Value = '4+',
  badge1Label = 'Companies',
  badge2Value = '500+',
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
      {useSpacer && <div className="hero-spacer" />}
      
      <section className="aj-about-section">
        <div className="container2">
          <div className="aj-about-grid">
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
              
              {showFeatures && features.length > 0 && (
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
              )}
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
                    quality={100}
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
    {/* Icon - PascalCase variable use karo */}
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
                {showDots && (
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
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

// 'use client';

// import { motion } from 'framer-motion';
// import { ArrowRight, Award, CheckCircle2 } from 'lucide-react';
// import Image from 'next/image';
// import './AboutSection.css';

// export default function AboutSection({
//   eyebrow = 'About us',
//   headline = 'A group built on the discipline of making things well.',
//   body = "A.J Group of Companies is a diversified manufacturing and design group. Under one name we bring together specialists in metal fabrication, commercial print and packaging, advertising production, and consumer design. These businesses look different on the surface, but they share one obsession: getting the details right. We give clients a single partner who can carry an idea from drawing to delivered object, with no compromise along the way.",
//   imageSrc = '/malaysia.jpg',
//   imageAlt = 'A.J Group Manufacturing',
// }) {
//   return (
//     <>
//     <div className="hero-spacer" />
//     <section className="aj-about-section">
//       <div className="container2">
//         <div className="aj-about-grid">
//           {/* Left Column - Content */}
//           <motion.div
//             className="aj-about-content"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-10%" }}
//             transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//           >
//             <motion.span 
//               className="aj-about-eyebrow"
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               {eyebrow}
//             </motion.span>
            
//             <motion.h2 
//               className="aj-about-headline"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7, delay: 0.3 }}
//             >
//               {headline}
//             </motion.h2>
            
//             <motion.div 
//               className="aj-about-divider"
//               initial={{ width: 0 }}
//               whileInView={{ width: 60 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//             />
            
//             <motion.p 
//               className="aj-about-body"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7, delay: 0.5 }}
//             >
//               {body}
//             </motion.p>
            
//             <motion.div 
//               className="aj-about-features"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//             >
//               <span className="aj-about-feature">
//                 <CheckCircle2 size={16} />
//                 One Standard
//               </span>
//               <span className="aj-about-feature">
//                 <CheckCircle2 size={16} />
//                 One Partner
//               </span>
//               <span className="aj-about-feature">
//                 <CheckCircle2 size={16} />
//                 Zero Compromise
//               </span>
//             </motion.div>
//           </motion.div>

//           {/* Right Column - Premium Image */}
//           <motion.div
//             className="aj-about-image-wrapper"
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-10%" }}
//             transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
//           >
//             <div className="aj-about-image-container">
//               {/* Main Image */}
//               <motion.div 
//                 className="aj-about-image-main"
//                 initial={{ clipPath: 'inset(0 100% 0 0)' }}
//                 whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
//               >
//                 <Image
//                   src={imageSrc}
//                   alt={imageAlt}
//                   className="aj-about-image"
//                   fill
//                   quality={100}
//                   priority
//                 />
//                 {/* Gradient Overlay */}
//                 <div className="aj-about-image-overlay" />
//               </motion.div>

//               {/* Decorative Gold Frame */}
//               <motion.div 
//                 className="aj-about-frame"
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: 0.7 }}
//               />

//               {/* Floating Award Badge */}
//               <motion.div 
//                 className="aj-about-badge"
//                 initial={{ opacity: 0, y: 20, scale: 0.8 }}
//                 whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.9 }}
//               >
//                 <Award size={22} />
//                 <div className="aj-about-badge-text">
//                   <span className="aj-about-badge-value">4+</span>
//                   <span className="aj-about-badge-label">Companies</span>
//                 </div>
//               </motion.div>

//               {/* Floating Year Badge */}
//               <motion.div 
//                 className="aj-about-badge aj-about-badge-year"
//                 initial={{ opacity: 0, y: -20, scale: 0.8 }}
//                 whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 1.1 }}
//               >
//                 <div className="aj-about-badge-text">
//                   <span className="aj-about-badge-value">100+</span>
//                   <span className="aj-about-badge-label">Projects</span>
//                 </div>
//               </motion.div>

//               {/* Corner Dots */}
//               <motion.div 
//                 className="aj-about-dots"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 1.3 }}
//               >
//                 <span className="aj-about-dot" />
//                 <span className="aj-about-dot" />
//                 <span className="aj-about-dot" />
//                 <span className="aj-about-dot" />
//                 <span className="aj-about-dot" />
//                 <span className="aj-about-dot" />
//                 <span className="aj-about-dot" />
//                 <span className="aj-about-dot" />
//                 <span className="aj-about-dot" />
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>

//     </>
//   );
// }