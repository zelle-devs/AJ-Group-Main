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
    title: 'See The Opportunity',
    desc: (
      <>
        <strong>Look Beyond What's Exist.</strong><br />
        Opportunity rarely arrives fully formed. We look across industries, markets and business models to identify where meaningful potential exists. We ask what a business is today — and more importantly, what it could become.
      </>
    ),
  },
  {
    icon: ClipboardList,
    title: 'Build With Purpose',
    desc: (
      <>
        <strong>From Idea To Enterprise.</strong><br />
        When we believe in an opportunity, we build. From the ground up, we develop the people, systems, capabilities and infrastructure required to create a strong foundation. Ideas create possibilities. Execution creates businesses.
      </>
    ),
  },
  // {
  //   icon: PenTool,
  //   title: 'Invest With Conviction',
  //   desc: (
  //     <>
  //       <strong>Capital is a Tool, Strategy Create Value.</strong><br />
  //       We deploy capital w here we believe it can create meaningful long-term value. But investment goes beyond funding. It means bringing strategic thinking, resources, operational discipline and a willingness to commit for the long term.
  //     </>
  //   ),
  // },
  {
    icon: Cog,
    title: 'Own For The Long Term ',
    desc: (
      <>
        <strong>We Think Beyond The Exit.</strong><br />
        AJ Group takes a long-term approach to ownership. We are not building businesses around short-term outcomes. We are building businesses capable of becoming stronger, more resilient and more valuable over time. long term thinking creates long term values.
      </>
    ),
  },
  {
    icon: ClipboardCheck,
    title: 'Build The Foundations',
    desc: (
      <>
        <strong>Strong Business Start From WithIn.</strong><br />
        Growth without foundations doesn't last. We focus on the fundamentals that allow businesses to operate effectively and scale responsibly:<strong>People. System. Capital. Operations. Discipline.</strong>  These are the building blocks of sustainable growth.
      </>
    ),
  },
  {
    icon: Truck,
    title: 'Scale What Work\s',
    desc: (
      <>
        <strong>Grow With Discipline.</strong><br />
        When we find something that works, we look for ways to make it stronger. New markets. New capabilities. New customers. New opportunities. Growth is not simply about becoming larger. <strong>It is About Becoming Stronger At Scale</strong>.
      </>
    ),
  },
  {
    icon: Handshake,
    title: 'Expand The Horizon ',
    desc: (
      <>
        <strong>One Success Could Create The Opportunity.</strong><br />
        We don't see a successful business as the end of the journey. It can become a platform for expansion. A new market can create another opportunity. A capability can become the foundation for a new business. An acquisition can open the door to an entirely new sector. <strong>Everything We Build Should Create the Possibility to Build More</strong>.
      </>
    ),
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
            const delay = 0.2 + index * 0.15;
            
            return (
              <motion.div
                key={index}
                className={`aj-approach-step ${isEven ? 'step-left' : 'step-right'}`}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '0px 0px -50px 0px' }}
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