'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  Factory,
  Printer,
  PackageCheck,
  Megaphone,
  Users,
  Award,
  Home,
  Sparkles,
} from 'lucide-react';
import './Groupatglance.css';

/* ---------- orbiting icons (inner ring) ---------- */
const ORBIT_ICONS = [Factory, Printer, PackageCheck, Megaphone, Users, Award];

/* ---------- stat blocks ---------- */
const DEFAULT_STATS = [
  { value: '4', label: 'Years In Operation' },
  { value: '4', label: 'Companies In The Group' },
  { value: '100+', label: 'Projects Delivered' },
  { value: '100', label: 'People Across The Group' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
};

export default function GroupAtGlance({
  eyebrow = 'Group at a glance',
  headline = 'The measure of the group.',
  stats = DEFAULT_STATS,
  orbitIcons = ORBIT_ICONS,
  orbitDuration = 26,
}) {
  const angleStep = orbitIcons.length > 1 ? 150 / (orbitIcons.length - 1) : 0;
  const prefersReducedMotion = useReducedMotion();
  const orbitAnimate = prefersReducedMotion ? { rotate: 0 } : { rotate: 360 };
  const orbitTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: orbitDuration, repeat: Infinity, ease: 'linear' };
  const bubbleAnimate = prefersReducedMotion ? { rotate: 0 } : { rotate: -360 };

  return (
    <section className="aj-glance-section">
      <div className="aj-glance-container">
        {/* ---------------- Orbit ---------------- */}
        <div className="aj-glance-orbit-wrap">
          {/* static outer arc */}
          <div className="aj-glance-arc-outer" />

          {/* badge on orbit line */}
          <motion.div
            className="aj-glance-badge"
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Sparkles size={13} />
            <span>{eyebrow}</span>
          </motion.div>

          {/* inner ring with icons */}
          <div className="aj-glance-orbit-clip">
            <div className="aj-glance-orbit-anchor">
              <motion.div
                className="aj-glance-orbit-track"
                animate={orbitAnimate}
                transition={orbitTransition}
              >
                {orbitIcons.map((Icon, i) => {
                  const angle = -75 + angleStep * i;
                  return (
                    <div
                      key={i}
                      className="aj-glance-orbit-item"
                      style={{ '--a': `${angle}deg` }}
                    >
                      <motion.div
                        className="aj-glance-orbit-bubble"
                        animate={bubbleAnimate}
                        transition={orbitTransition}
                      >
                        <Icon size={18} strokeWidth={1.8} />
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* Content - Stats + Headline INSIDE Orbit */}
          <div className="aj-glance-orbit-content">
            {/* Stats - 4 in one row */}
            <div className="aj-glance-stats">
              {stats.map((s, i) => (
                <motion.div
                  className="aj-glance-stat"
                  key={s.label}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <span className="aj-glance-stat-value">{s.value}</span>
                  <span className="aj-glance-stat-label">{s.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Headline - Below Stats, Centered in Orbit */}
            <motion.h2
              className="aj-glance-headline"
              custom={4}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              {headline}
            </motion.h2>
          </div>
        </div>
      </div>
    </section>
  );
}