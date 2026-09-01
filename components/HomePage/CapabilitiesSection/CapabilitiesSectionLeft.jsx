'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Lightbulb,
  PenTool,
  Cog,
  Package,
  Truck,
  CheckCircle2,
} from 'lucide-react';

import './CapabilitiesSectionLeft.css';

const PROCESS_STEPS = [
  {
    icon: Lightbulb,
    title: 'Brief',
    desc: 'Understanding your vision',
    color: '#C8A54A',
  },
  {
    icon: PenTool,
    title: 'Design',
    desc: 'Planning & prototyping',
    color: '#C8A54A',
  },
  {
    icon: Cog,
    title: 'Production',
    desc: 'Precision manufacturing',
    color: '#C8A54A',
  },
  {
    icon: Package,
    title: 'Finishing',
    desc: 'Quality control',
    color: '#C8A54A',
  },
  {
    icon: Truck,
    title: 'Delivery',
    desc: 'On-time handover',
    color: '#C8A54A',
  },
  {
    icon: CheckCircle2,
    title: 'Support',
    desc: 'After-sales care',
    color: '#C8A54A',
  },
];

export default function CapabilitiesSectionLeft({
  eyebrow = 'How we work',
  title = 'A Clear Process From Start to Finish',
  body = "A.J Group follows the same considered process on every project, from understanding the brief to delivery and beyond. Expectations are set early, progress stays visible, and the finished work reflects what was agreed at the start.",
  buttonText = 'See How We Work',
  buttonLink = '/approach',
}) {
  return (
    <section className="old-aj-process-section">
      <div className="container2">

        <div className="old-aj-process-grid">

          {/* ==============================
              LEFT CONTENT
          ============================== */}

          <motion.div
            className="old-aj-process-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              margin: '-10%',
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="old-aj-process-eyebrow">
              {eyebrow}
            </span>

            <h2 className="old-aj-process-title">
              {title}
            </h2>

            <p className="old-aj-process-body">
              {body}
            </p>

            <a
              href={buttonLink}
              className="btn btn-outline-gold old-aj-process-btn"
            >
              {buttonText}
              <ArrowRight size={16} />
            </a>
          </motion.div>


          {/* ==============================
              RIGHT PROCESS TIMELINE
          ============================== */}

          <motion.div
            className="old-aj-process-visual"
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: '-10%',
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2,
            }}
          >

            <div className="old-aj-process-timeline">

              {/* ==============================
                  CONNECTING LINE
              ============================== */}

              <motion.div
                className="old-aj-process-timeline-line"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 2,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />


              {/* ==============================
                  PROCESS STEPS
              ============================== */}

              {PROCESS_STEPS.map((step, index) => {
                const Icon = step.icon;

                const delay = 0.8 + index * 0.25;

                return (
                  <motion.div
                    key={index}
                    className={`old-aj-process-timeline-step step-${index + 1}`}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >

                    {/* Circle */}

                    <motion.div
                      className="old-aj-process-step-icon-wrap"
                      style={{
                        '--step-color': step.color,
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                      }}
                    >
                      <Icon
                        size={22}
                        className="old-aj-process-step-icon"
                      />
                    </motion.div>


                    {/* Step Content */}

                    <div className="old-aj-process-step-content">

                      <span className="old-aj-process-step-number">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <h3 className="old-aj-process-step-title">
                        {step.title}
                      </h3>

                      <p className="old-aj-process-step-desc">
                        {step.desc}
                      </p>

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