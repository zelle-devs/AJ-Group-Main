'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Lightbulb,
  PenTool,
  Cog,
  Check,
} from 'lucide-react';

import './CapabilitiesSectionLeft2.css';

// Default Process Steps
const DEFAULT_PROCESS_STEPS = [
  {
    icon: Lightbulb,
    title: 'Build From Zero',
    desc: 'Understanding the requirment.',
    color: '#C8A54A',
  },
  {
    icon: PenTool,
    title: 'Acquire With Purpose',
    desc: 'Shape the right solution.',
    color: '#C8A54A',
  },
  {
    icon: Cog,
    title: 'Growth With Discipline',
    desc: 'Design, engineer or develop.',
    color: '#C8A54A',
  },
];

export default function CapabilitiesSectionLeft2({
  // Content Props
  eyebrow = 'OPPORTUNITY',
  title = 'We Look Beyond Industries',
  body = "Opportunity doesn't always fit neatly into a category. That's why AJ Group remains open to new markets, new sectors and new ways to create value. We pursue opportunities where vision, capital and execution can come together to build something enduring.",
  buttonText = 'See How We Work',
  buttonLink = '/approach',
  
  // Steps Props
  steps = DEFAULT_PROCESS_STEPS,
  
  // Layout Props
  showButton = true,
  showArrow = true,
  showNumbers = true,
  showDesc = true,
  
  // Animation Props
  animationDelay = 0,
}) {
  return (
    <section className="aj-process-sections">
      <div className="container2">
        <div className="aj-process-grid">
          {/* ==============================
              LEFT CONTENT
          ============================== */}
          <motion.div
            className="aj-process-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{
              duration: 0.8,
              delay: animationDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {eyebrow && <span className="aj-process-eyebrow">{eyebrow}</span>}
            {title && <h2 className="aj-process-title" style={{margin:'0px'}}>{title}</h2>}
            {body && <p className="aj-process-body">{body}</p>}
            
            {showButton && buttonText && (
              <a href={buttonLink} className="btn btn-outline-gold aj-process-btn">
                {buttonText}
                {showArrow && <ArrowRight size={16} />}
              </a>
            )}
          </motion.div>

          {/* ==============================
              RIGHT PROCESS TIMELINE
          ============================== */}
          <motion.div
            className="aj-process-visual"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{
              duration: 0.8,
              delay: animationDelay + 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="aj-process-timeline">
              {/* Connecting Line */}
              <motion.div
                className="aj-process-timeline-line"
                /* Yahan style add kiya hai taake line sirf icons ke darmian rahe */
                style={{ 
                  left: '15%', 
                  width: '72%', 
                  marginLeft:'45px',
                  transformOrigin: 'left center' 
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 2,
                  delay: animationDelay + 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              {/* Process Steps */}
              {steps.map((step, index) => {
                const Icon = step.icon || Check;
                const delay = 0.8 + index * 0.25;

                return (
                  <motion.div
                    key={index}
                    className={`aj-process-timeline-step step-${index + 1}`}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: animationDelay + delay,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {/* Circle */}
                    <motion.div
                      className="aj-process-step-icon-wrap"
                      style={{ '--step-color': step.color || '#C8A54A' }}
                      initial={{ opacity: 0, rotateY: -90, scale: 0.6 }}
                      whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
                      viewport={{ once: true }}
                      whileHover={{ rotateY: 10, scale: 1.07 }}
                      transition={{
                        duration: 0.65,
                        delay: animationDelay + delay + 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Icon size={25} className="aj-process-step-icon" />
                    </motion.div>

                    {/* Step Content */}
                    <div className="aj-process-step-content">
                      {showNumbers && (
                        <span className="aj-process-step-number">
                          {step.num || String(index + 1).padStart(2, '0')}
                        </span>
                      )}
                      <h3 className="aj-process-step-title">{step.title}</h3>
                      {showDesc && step.desc && (
                        <p className="aj-process-step-desc">{step.desc}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


// 'use client';

// import { motion } from 'framer-motion';
// import {
//   ArrowRight,
//   Lightbulb,
//   PenTool,
//   Cog,
//   Package,
//   Truck,
//   CheckCircle2,
//   Check,
// } from 'lucide-react';

// import './CapabilitiesSectionLeft2.css';

// const PROCESS_STEPS = [
//   {
//     icon: Lightbulb,
//     title: 'Brief',
//     desc: 'Understanding the requirment.',
//     color: '#C8A54A',
//   },
//   {
//     icon: PenTool,
//     title: 'Define',
//     desc: 'Shape the right solution.',
//     color: '#C8A54A',
//   },
//   {
//     icon: Cog,
//     title: 'Create',
//     desc: 'Design, engineer or develop.',
//     color: '#C8A54A',
//   },
//   {
//     icon: Package,
//     title: 'Make',
//     desc: 'Produce with precision.',
//     color: '#C8A54A',
//   },
//   {
//     icon: Check,
//     title: 'Deliver',
//     desc: 'Finish, Review & deliver exellence.',
//     color: '#C8A54A',
//   },
// //   {
// //     icon: CheckCircle2,
// //     title: 'Support',
// //     desc: 'After-sales care',
// //     color: '#C8A54A',
// //   },
// ];

// export default function CapabilitiesSectionLeft2({
//   eyebrow = 'How we work',
//   title = 'A considered process, start to finish.',
//   body = "Every project follows the same deliberate sequence, from brief to delivery, so nothing is left to chance and nothing surprises you at the end.",
//   buttonText = 'Explore Our Process',
//   buttonLink = '/approach',
// }) {
//   return (
//     <section className="aj-process-sections">
//       <div className="container2">

//         <div className="aj-process-grid">

//           {/* ==============================
//               LEFT CONTENT
//           ============================== */}

//           <motion.div
//             className="aj-process-content"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{
//               once: true,
//               margin: '-10%',
//             }}
//             transition={{
//               duration: 0.8,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//           >
//             <span className="aj-process-eyebrow">
//               {eyebrow}
//             </span>

//             <h2 className="aj-process-title">
//               {title}
//             </h2>

//             <p className="aj-process-body">
//               {body}
//             </p>

//             <a
//               href={buttonLink}
//               className="btn btn-outline-gold aj-process-btn"
//             >
//               {buttonText}
//               <ArrowRight size={16} />
//             </a>
//           </motion.div>


//           {/* ==============================
//               RIGHT PROCESS TIMELINE
//           ============================== */}

//           <motion.div
//             className="aj-process-visual"
//             initial={{
//               opacity: 0,
//               x: 40,
//             }}
//             whileInView={{
//               opacity: 1,
//               x: 0,
//             }}
//             viewport={{
//               once: true,
//               margin: '-10%',
//             }}
//             transition={{
//               duration: 0.8,
//               ease: [0.22, 1, 0.36, 1],
//               delay: 0.2,
//             }}
//           >

//             <div className="aj-process-timeline">

//               {/* ==============================
//                   CONNECTING LINE
//               ============================== */}

//               <motion.div
//                 className="aj-process-timeline-line"
//                 initial={{ scaleX: 0 }}
//                 whileInView={{ scaleX: 1 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 2,
//                   delay: 0.6,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//               />


//               {/* ==============================
//                   PROCESS STEPS
//               ============================== */}

//               {PROCESS_STEPS.map((step, index) => {
//                 const Icon = step.icon;

//                 const delay = 0.8 + index * 0.25;

//                 return (
//                   <motion.div
//                     key={index}
//                     className={`aj-process-timeline-step step-${index + 1}`}
//                     initial={{ opacity: 0, x: -30 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{
//                       duration: 0.6,
//                       delay,
//                       ease: [0.22, 1, 0.36, 1],
//                     }}
//                   >

//                     {/* Circle */}

//                     <motion.div
//                       className="aj-process-step-icon-wrap"
//                       style={{
//                         '--step-color': step.color,
//                       }}
//                       initial={{ opacity: 0, rotateY: -90, scale: 0.6 }}
//                       whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
//                       viewport={{ once: true }}
//                       whileHover={{
//                         // y: -4,
//                         rotateY: 10,
//                         scale: 1.07,
//                       }}
//                       transition={{
//                         duration: 0.65,
//                         delay: delay + 0.1,
//                         ease: [0.22, 1, 0.36, 1],
//                       }}
//                     >
//                       <Icon
//                         size={25}
//                         className="aj-process-step-icon"
//                       />
//                     </motion.div>


//                     {/* Step Content */}

//                     <div className="aj-process-step-content">

//                       <span className="aj-process-step-number">
//                         {String(index + 1).padStart(2, '0')}
//                       </span>

//                       <h3 className="aj-process-step-title">
//                         {step.title}
//                       </h3>

//                       <p className="aj-process-step-desc">
//                         {step.desc}
//                       </p>

//                     </div>

//                   </motion.div>
//                 );
//               })}

//             </div>

//           </motion.div>

//         </div>

//       </div>
//     </section>
//   );
// }