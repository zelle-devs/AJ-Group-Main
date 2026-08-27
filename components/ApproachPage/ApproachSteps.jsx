'use client';

import { motion } from 'framer-motion';
import { 
  Ear, 
  ClipboardList, 
  PenTool, 
  Cog, 
  ClipboardCheck, 
  Truck, 
  Handshake,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import './ApproachSteps.css';

const APPROACH_STEPS = [
  {
    icon: Ear,
    title: 'Understanding',
    desc: "Every project starts with listening. We look at the brief, the specifications, the materials, the budget and the timeline until we understand not just what needs to be made, but why. Getting this right is what makes everything after it run smoothly.",
  },
  {
    icon: ClipboardList,
    title: 'Planning',
    desc: "With the brief understood, we plan the work: identifying the right capabilities and businesses, sequencing production where more than one is involved, and setting a realistic timeline with clear milestones. The client knows what is happening, and when, before anything is made.",
  },
  {
    icon: PenTool,
    title: 'Design & Development',
    desc: "Our design and engineering teams turn the brief into buildable detail: drawings, specifications, and prototypes or samples where they help. The work is refined here, on paper and in sample form, so production runs cleanly.",
  },
  {
    icon: Cog,
    title: 'Production',
    desc: "With the design signed off, production begins. The work is made to specification by the business best suited to it, with A.J Group coordinating across disciplines where a project needs more than one.",
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Assurance',
    desc: "Quality is checked throughout, not just at the end. We inspect against specification at each stage, correct issues early, and sign off only when the work meets the standard. That standard is the same across every business in the Group.",
  },
  {
    icon: Truck,
    title: 'Delivery & Installation',
    desc: "We deliver, and where the project calls for it, install, on the timeline agreed. Careful handling, clean installation and a final check mean the work arrives and performs as intended.",
  },
  {
    icon: Handshake,
    title: 'Long-Term Partnerships',
    desc: "For A.J Group, delivery isn't the end. The clients we value most come back, for the next project and the one after, because they know the Group delivers. We are built for long-term relationships rather than one-off transactions.",
  },
];

export default function ApproachSteps({
  steps = APPROACH_STEPS,
  showDesc = true,
}) {
  return (
    <section className="aj-approach-steps-section">
      <div className="container2">
        <div className="aj-approach-steps-wrapper">
          {/* Vertical Line */}
          <motion.div 
            className="aj-approach-steps-line"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Steps */}
          {steps.map((step, index) => {
            const Icon = step.icon || CheckCircle2;
            const isEven = index % 2 === 0;
            // const delay = 0.8 + index * 0.25;
const delay = 0.2 + index * 0.15;
            return (
              <motion.div
                key={index}
                className={`aj-approach-step ${isEven ? 'step-left' : 'step-right'}`}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                // viewport={{ once: true, margin: '-10%' }}
                viewport={{ once: true, margin: '0px 0px -50px 0px' }}
                // transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
                transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
                {/* Step Circle */}
                <motion.div 
                  className="aj-approach-step-circle"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20, delay: delay + 0.1 }}
                >
                  <Icon size={24} className="aj-approach-step-icon" />
                </motion.div>

                {/* Step Content Card */}
                <div className="aj-approach-step-card">
                  <span className="aj-approach-step-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="aj-approach-step-title">{step.title}</h3>
                  {showDesc && step.desc && (
                    <p className="aj-approach-step-desc">{step.desc}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}