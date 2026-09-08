'use client';

import { motion } from 'framer-motion';
import { 
  Factory, 
  Wrench, 
  Printer, 
  Package, 
  Building2, 
  Rocket,
  Award,
  TrendingUp,
  Target,
  Eye,
  Star,
  Handshake,
  Shield,
  Globe,
  Users,
  Cog,
  Truck,
  Lightbulb,
} from 'lucide-react';
import './OurStory.css';

// Default Milestones
const STORY_MILESTONES = [
  // {
  //   icon: Factory,
  //   year: '[FOUNDING YEAR]',
  //   title: 'Foundation',
  //   desc: 'Started with a focus on [FOUNDING FOCUS]',
  //   color: '#C8A54A',
  // },
  {
    icon: Wrench,
    // year: '[EXPANSION 1]',
    title: 'Build',
    desc: 'Some of our strongest opportunities begin with an idea. We build businesses from the ground up, developing the people, systems and capabilities required to create something built to last.',
    color: '#C8A54A',
  },
  // {
  //   icon: Printer,
  //   // year: '[EXPANSION 2]',
  //   title: 'Invest',
  //   desc: 'We commit capital and resources where we see meaningful potential. Our investment decisions are guided by opportunity, strategic fit and the potential to create long-term value',
  //   color: '#C8A54A',
  // },
  {
    icon: Package,
    // year: '[EXPANSION 3]',
    title: 'Own',
    desc: 'We take a long-term approach to the businesses we build and back.Ownership gives us the ability to think beyond short-term outcomes and make decisions for the future',
    color: '#C8A54A',
  },
  {
    icon: Rocket,
    // year: 'Today',
    title: 'Expand',
    desc: 'We continuously explore new sectors, markets and opportunities. As the Group grows, so does the scope of what we can build',
    color: '#C8A54A',
  },
];

export default function OurStory({
  // Content Props
  eyebrow = 'WHAT WE DO',
  headline = 'We Build, We Own, We Expand',
  body = "A.J Group began in [FOUNDING YEAR] with [FOUNDING FOCUS]. Over [YEARS IN OPERATION] years it has grown from a single focus into a diversified business group spanning manufacturing, industrial solutions, print, packaging, advertising and consumer products, with a growing footprint in real estate and emerging sectors. That growth has been deliberate: building and adding businesses where they strengthen what the Group can offer, rather than expanding for its own sake.",
  milestones = STORY_MILESTONES,
  
  // Layout Props
  showHeader = true,
  showBody = true,
  showLine = true,
  showYear = true,
  showDesc = true,
  alternateMobile = true, // Mobile par alternating left/right
  
  // Animation Props
  animationDelay = 0,
}) {
  return (
    <section className="aj-story-section" >
      <div className="container2" style={{gap:'30px'}}>
        {/* Row 1: Content - Left 50% + Right 50% */}
        {showHeader && (
          <div className="aj-story-top-row">
            {/* Left - Eyebrow + Headline */}
            <motion.div
              className="aj-story-heading-group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.8, delay: animationDelay, ease: [0.22, 1, 0.36, 1] }}
            >
              {eyebrow && (
                <motion.span
                  className="aj-story-eyebrow"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: animationDelay + 0.2 }}
                >
                  {eyebrow}
                </motion.span>
              )}
              
              {headline && (
                <motion.h2
                  className="aj-story-headline"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: animationDelay + 0.3 }}
                >
                  {headline}
                </motion.h2>
              )}
            </motion.div>

            {/* Right - Body */}
            {/* {showBody && body && (
              <motion.p
                className="aj-story-body"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: animationDelay + 0.4 }}
              >
                {body}
              </motion.p>
            )} */}
          </div>
        )}

        {/* Row 2: Full Width Stepper Timeline */}
        <motion.div
          className="aj-story-timeline"
          style={{gap:'30px'}}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.8, delay: animationDelay + 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Connecting Line */}
          {showLine && (
            <motion.div
              className="aj-story-timeline-line"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: animationDelay + 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
          )}

          {/* Milestone Steps */}
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon || Award;
            const delay = 0.9 + index * 0.2;

            return (
              <motion.div
                key={index}
                className={`aj-story-step ${alternateMobile ? `story-step-${index + 1}` : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: animationDelay + delay, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Circle with Icon */}
                <motion.div
                  className="aj-story-step-circle"
                  style={{ '--step-color': milestone.color || '#C8A54A' }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon size={22} className="aj-story-step-icon" />
                </motion.div>

                {/* Step Content */}
                <div className="aj-story-step-content">
                  {showYear && milestone.year && (
                    <span className="aj-story-step-year">{milestone.year}</span>
                  )}
                  <h3 className="aj-story-step-title">{milestone.title}</h3>
                  {showDesc && milestone.desc && (
                    <p className="aj-story-step-desc">{milestone.desc}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// 'use client';

// import { motion } from 'framer-motion';
// import { 
//   Factory, 
//   Wrench, 
//   Printer, 
//   Package, 
//   Building2, 
//   Rocket,
//   Award,
//   TrendingUp 
// } from 'lucide-react';
// import './OurStory.css';

// const STORY_MILESTONES = [
//   {
//     icon: Factory,
//     year: '[FOUNDING YEAR]',
//     title: 'Foundation',
//     desc: 'Started with a focus on [FOUNDING FOCUS]',
//     color: '#C8A54A',
//   },
//   {
//     icon: Wrench,
//     year: '[EXPANSION 1]',
//     title: 'Deepening Craft',
//     desc: 'Refined our core specialism and processes',
//     color: '#C8A54A',
//   },
//   {
//     icon: Printer,
//     year: '[EXPANSION 2]',
//     title: 'Print & Packaging',
//     desc: 'Expanded into commercial print and packaging',
//     color: '#C8A54A',
//   },
//   {
//     icon: Package,
//     year: '[EXPANSION 3]',
//     title: 'Advertising Production',
//     desc: 'Added advertising and display manufacturing',
//     color: '#C8A54A',
//   },
//   {
//     icon: Rocket,
//     year: 'Today',
//     title: 'A.J Group',
//     desc: 'Four companies. One standard of making.',
//     color: '#C8A54A',
//   },
// ];

// export default function OurStory({
//   eyebrow = 'Our story',
//   headline = 'From a single specialism to a group of companies.',
//   body = "A.J Group began in [FOUNDING YEAR] with a focus on [FOUNDING FOCUS] and a simple belief: clients are best served by makers who take responsibility for the whole outcome. As demand grew, so did our capability. We deepened our craft first, then expanded into adjacent disciplines where the same precision and finish set us apart. [YEARS] years on, the group spans four companies across B2B manufacturing and consumer design, still run with the same hands-on care.",
//   milestones = STORY_MILESTONES,
// }) {
//   return (
//     <section className="aj-story-section">
//       <div className="container2">
//         {/* Row 1: Content - Left 50% + Right 50% */}
//         <div className="aj-story-top-row">
//           {/* Left - Eyebrow + Headline */}
//           <motion.div
//             className="aj-story-heading-group"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: '-10%' }}
//             transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//           >
//             <motion.span
//               className="aj-story-eyebrow"
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               {eyebrow}
//             </motion.span>
            
//             <motion.h2
//               className="aj-story-headline"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7, delay: 0.3 }}
//             >
//               {headline}
//             </motion.h2>
//           </motion.div>

//           {/* Right - Body */}
//           <motion.p
//             className="aj-story-body"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7, delay: 0.4 }}
//           >
//             {body}
//           </motion.p>
//         </div>

//         {/* Row 2: Full Width Stepper Timeline */}
//         <motion.div
//           className="aj-story-timeline"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: '-10%' }}
//           transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
//         >
//           {/* Connecting Line */}
//           <motion.div
//             className="aj-story-timeline-line"
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
//           />

//           {/* Milestone Steps */}
//           {milestones.map((milestone, index) => {
//             const Icon = milestone.icon;
//             const delay = 0.9 + index * 0.2;

//             return (
//               <motion.div
//                 key={index}
//                 className="aj-story-step"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
//               >
//                 {/* Circle with Icon */}
//                 <motion.div
//                   className="aj-story-step-circle"
//                   style={{ '--step-color': milestone.color }}
//                   whileHover={{ scale: 1.1 }}
//                   transition={{ type: 'spring', stiffness: 300 }}
//                 >
//                   <Icon size={22} className="aj-story-step-icon" />
//                 </motion.div>

//                 {/* Step Content */}
//                 <div className="aj-story-step-content">
//                   <span className="aj-story-step-year">{milestone.year}</span>
//                   <h3 className="aj-story-step-title">{milestone.title}</h3>
//                   <p className="aj-story-step-desc">{milestone.desc}</p>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// }