'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import './FocusCompanies.css';

// Default Companies Data
export const companiesData = [
  {
    logo: '/Forgentis.png',
    subtitle: 'FORGENTIS FABRICATIONS',
    description: "When a project calls for metal, whether structural, architectural, or sculptural, Forgentis brings the engineering and machinery to realize it.",
    buttonText: 'Explore Forgentis',
    buttonLink: '#',
    image: '/step4.png',
    imagePosition: 'left',
    shadowColor: 'rgba(59, 130, 246, 0.4)',
  },
  {
    logo: '/PPA.png',
    subtitle: 'PRINT PACK ADVERTISING',
    description: "When a brand needs to be seen, held, and remembered, PPA brings the print, packaging, and displays to deliver it.",
    buttonText: 'Explore PPA',
    buttonLink: '#',
    image: '/ppaIndustriesPage.png',
    imagePosition: 'right',
    shadowColor: 'rgba(234, 179, 8, 0.4)',
  },
];

export default function FocusCompanies({
  // Content Props
  eyebrow = 'Our Companies',
  headline = 'Specialists, not generalists.',
  companies = companiesData,
  bgColor = 'var(--color-black)',
  
  // Layout Props
  showHeader = true,
  showLogo = true,
  showButton = true,
  showArrow = true,
  showLine = true,
  
  // Animation Props
  animationDelay = 0,
}) {
  return (
    <section className="aj-focus-section" style={{ backgroundColor: bgColor }}>
      <div className="container2">
        {/* Header */}
        {showHeader && (
          <motion.div 
            className="aj-focus-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: animationDelay, ease: [0.22, 1, 0.36, 1] }}
          >
            {eyebrow && <span className="aj-focus-eyebrow">{eyebrow}</span>}
            {headline && <h2 className="aj-focus-headline">{headline}</h2>}
            {showLine && <span className="aj-focus-line" />}
          </motion.div>
        )}

        {/* Companies Cards */}
        <div className="aj-focus-cards-wrapper">
          {companies.map((company, index) => (
            <motion.div 
              key={index}
              className={`aj-focus-card ${company.imagePosition === 'right' ? 'image-right' : 'image-left'}`}
              style={{
                '--aj-shadow-color': company.shadowColor || 'rgba(200, 165, 74, 0.25)',
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-15%" }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.3,
                  },
                },
              }}
            >
              {/* Image Column */}
              <motion.div 
                className="aj-focus-image-col"
                variants={{
                  hidden: { 
                    clipPath: company.imagePosition === 'left' 
                      ? 'inset(50% 50% 50% 50% round 16px)' 
                      : 'inset(50% 0% 50% 100% round 16px)',
                    opacity: 0,
                  },
                  visible: { 
                    clipPath: 'inset(0% 0% 0% 0% round 0px)',
                    opacity: 1,
                    transition: { 
                      duration: 1.2, 
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
              >
                <div className="aj-focus-image-wrapper">
                  <Image
                    src={company.image}
                    alt={company.subtitle || company.title || 'Company Image'}
                    className="aj-focus-image"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    unoptimized={true}
                  />
                </div>
              </motion.div>

              {/* Content Column */}
              <motion.div 
                className="aj-focus-content-col"
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.8, 
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.6,
                    },
                  },
                }}
              >
                <div className="aj-focus-content-inner">
                  {/* Logo */}
                  {showLogo && company.logo && (
                    <motion.div 
                      className="aj-focus-logo-wrapper"
                      variants={{
                        hidden: { opacity: 0, x: company.imagePosition === 'right' ? -30 : 30 },
                        visible: { 
                          opacity: 1, 
                          x: 0,
                          transition: { duration: 0.6, delay: 0.8 },
                        },
                      }}
                    >
                      <Image 
                        src={company.logo} 
                        alt={`${company.subtitle || company.title} Logo`} 
                        className="aj-focus-logo"
                        width={company.logoWidth || 180}
                        height={company.logoHeight || 60}
                        style={{ objectFit: 'contain' }}
                      />
                    </motion.div>
                  )}

                  {/* Subtitle */}
                  {company.subtitle && (
                    <motion.span 
                      className="aj-focus-subtitle"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { 
                          opacity: 1, 
                          y: 0,
                          transition: { duration: 0.4, delay: 0.85 },
                        },
                      }}
                    >
                      {company.subtitle}
                    </motion.span>
                  )}

                  {/* Description */}
                  {company.description && (
                    <motion.p 
                      className="aj-focus-description"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { 
                          opacity: 1, 
                          y: 0,
                          transition: { duration: 0.5, delay: 0.9 },
                        },
                      }}
                    >
                      {company.description}
                    </motion.p>
                  )}

                  {/* Button */}
                  {showButton && company.buttonText && company.buttonLink && (
                    <motion.a 
                      href={company.buttonLink} 
                      className="btn btn-outline-gold aj-focus-btn"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { 
                          opacity: 1, 
                          y: 0,
                          transition: { duration: 0.5, delay: 1.0 },
                        },
                      }}
                    >
                      {company.buttonText} {showArrow && <ArrowRight size={16} />}
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { ArrowRight } from 'lucide-react';
// import './FocusCompanies.css';

// export const companiesData = [
//     {
//       logo: '/Forgentis.png',
//       subtitle: 'FABRICATIONS',
//       description: "When a project calls for metal, whether structural, architectural, or sculptural, Forgentis brings the engineering and machinery to realize it.",
//       buttonText: 'Explore Forgentis',
//       buttonLink: '/forgentis',
//       image: '/step4.png',
//       imagePosition: 'left',
//       shadowColor: 'rgba(59, 130, 246, 0.4)', // Blue shadow
//     },
//     {
//       logo: '/PPA.png',
//       subtitle: 'PRINT PACK ADVERTISING',
//       description: "When a brand needs to be seen, held, and remembered, PPA brings the print, packaging, and displays to deliver it.",
//       buttonText: 'Explore PPA',
//       buttonLink: '/ppa',
//       image: '/usa.jpg',
//       imagePosition: 'right',
//     //   shadowColor: 'rgba(236, 72, 153, 0.4)', 
//     shadowColor: 'rgba(234, 179, 8, 0.4)'
//     }
//   ];

// export default function FocusCompanies({
//   eyebrow = 'Our Companies',
//   headline = 'Specialists, not generalists.',
//   companies = companiesData,
//   bgColor = 'var(--color-black)',
// }) {

//   return (
//     <section className="aj-focus-section" style={{ backgroundColor: bgColor }}>
//       <div className="container2">
        
//         {/* Header */}
//         <motion.div 
//           className="aj-focus-header"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//         >
//           <span className="aj-focus-eyebrow">{eyebrow}</span>
//           <h2 className="aj-focus-headline">{headline}</h2>
//           <span className="aj-focus-line" />
//         </motion.div>

//         {/* Companies Cards */}
//         <div className="aj-focus-cards-wrapper">
//           {companies.map((company, index) => (
//   <motion.div 
//     key={index}
//     className={`aj-focus-card ${company.imagePosition === 'right' ? 'image-right' : 'image-left'}`}
//     style={{
//       '--aj-shadow-color': company.shadowColor || 'rgba(200, 165, 74, 0.25)',
//     }}
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true, margin: "-15%" }}
//     variants={{
//       hidden: {},
//       visible: {
//         transition: {
//           staggerChildren: 0.3,
//         },
//       },
//     }}
//   >
//               {/* Image Column - Center se expand */}
//               <motion.div 
//                 className="aj-focus-image-col"
//                 variants={{
//                   hidden: { 
//                     clipPath: company.imagePosition === 'left' 
//                       ? 'inset(50% 50% 50% 50% round 16px)' 
//                       : 'inset(50% 0% 50% 100% round 16px)',
//                     opacity: 0,
//                   },
//                   visible: { 
//                     clipPath: 'inset(0% 0% 0% 0% round 0px)',
//                     opacity: 1,
//                     transition: { 
//                       duration: 1.2, 
//                       ease: [0.22, 1, 0.36, 1],
//                     },
//                   },
//                 }}
//               >
//                 <div className="aj-focus-image-wrapper">
//                   <Image
//                     src={company.image}
//                     alt={company.subtitle}
//                     className="aj-focus-image"
//                     fill
//                     sizes="(max-width: 768px) 100vw, 50vw"
//                     priority
//                     unoptimized={true}
//                   />
//                 </div>
//               </motion.div>

//               {/* Content Column - Neeche se slide up */}
//               <motion.div 
//                 className="aj-focus-content-col"
//                 variants={{
//                   hidden: { opacity: 0, y: 60 },
//                   visible: { 
//                     opacity: 1, 
//                     y: 0,
//                     transition: { 
//                       duration: 0.8, 
//                       ease: [0.22, 1, 0.36, 1],
//                       delay: 0.6,
//                     },
//                   },
//                 }}
//               >
//                 <div className="aj-focus-content-inner">
                  
//                   <motion.div 
//                     className="aj-focus-logo-wrapper"
//                     variants={{
//                       hidden: { opacity: 0, x: company.imagePosition === 'right' ? -30 : 30 },
//                       visible: { 
//                         opacity: 1, 
//                         x: 0,
//                         transition: { duration: 0.6, delay: 0.8 },
//                       },
//                     }}
//                   >
//                     <Image 
//                       src={company.logo} 
//                       alt={`${company.subtitle} Logo`} 
//                       className="aj-focus-logo"
//                       width={180}
//                       height={60}
//                       style={{ objectFit: 'contain' }}
//                     />
//                   </motion.div>

//                   <motion.p 
//                     className="aj-focus-description"
//                     variants={{
//                       hidden: { opacity: 0, y: 20 },
//                       visible: { 
//                         opacity: 1, 
//                         y: 0,
//                         transition: { duration: 0.5, delay: 0.9 },
//                       },
//                     }}
//                   >
//                     {company.description}
//                   </motion.p>

//                   <motion.a 
//                     href={company.buttonLink} 
//                     className="btn btn-outline-gold aj-focus-btn"
//                     variants={{
//                       hidden: { opacity: 0, y: 20 },
//                       visible: { 
//                         opacity: 1, 
//                         y: 0,
//                         transition: { duration: 0.5, delay: 1.0 },
//                       },
//                     }}
//                   >
//                     {company.buttonText} <ArrowRight size={16} />
//                   </motion.a>

//                 </div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }