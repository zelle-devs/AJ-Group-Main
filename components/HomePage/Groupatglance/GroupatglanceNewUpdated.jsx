'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import {
  Factory,
  Printer,
  PackageCheck,
  Megaphone,
  Users,
  Award,
  Home,
  Sparkles,
  Target,
  Eye,
  Star,
  Handshake,
  TrendingUp,
  Globe,
  Cog,
  Truck,
  Building,
  Clock,
  Shield,
} from 'lucide-react';
import './Groupatglance.css';

/* ---------- Default Orbit Icons ---------- */
const DEFAULT_ORBIT_ICONS = [Factory, Printer, PackageCheck, Megaphone, Users, Award];

/* ---------- Default Stats ---------- */
const DEFAULT_STATS = [
  { value: 'A Global Group', label: 'The AJ Group is building toward a diversified, industry-leading enterprise. Our ambition is not simply to own more businesses. It is to build better businesses, stronger platforms and lasting value at scale' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
};

/* ---------- Ultra Smooth Counter ---------- */
const CounterValue = ({ value }) => {
  const [displayValue, setDisplayValue] = useState('0');
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = value.match(/^(\d+)(\+?)$/);
            if (!match) {
              setDisplayValue(value);
              return;
            }

            const target = parseInt(match[1]);
            const suffix = match[2] || '';
            const duration = 2000;
            const startTime = Date.now();

            const interval = setInterval(() => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
              const current = Math.floor(eased * target);

              setDisplayValue(current + suffix);

              if (progress >= 1) {
                clearInterval(interval);
                setDisplayValue(target + suffix);
              }
            }, 30);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref} className="aj-glance-stat-valueAboutMain">{displayValue}</span>;
};

export default function GroupatglanceNewUpdated({
  // Content Props
  eyebrow = 'The Vision',
  headline = 'This is Beginning Not The Destination',
  stats = DEFAULT_STATS,
  orbitIcons = DEFAULT_ORBIT_ICONS,
  orbitDuration = 26,

  // Layout Props
  showHeadline = true,
  showBadge = true,
  showOrbitIcons = true,
  statsGrid = '2x2', // '2x2' | '3x2' | '1x6' | '2x3'

  // Animation Props
  animationDelay = 0,
}) {
  const angleStep = orbitIcons.length > 1 ? 150 / (orbitIcons.length - 1) : 0;
  const prefersReducedMotion = useReducedMotion();
  const orbitAnimate = prefersReducedMotion ? { rotate: 0 } : { rotate: 360 };
  const orbitTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: orbitDuration, repeat: Infinity, ease: 'linear' };
  const bubbleAnimate = prefersReducedMotion ? { rotate: 0 } : { rotate: -360 };

  // Stats grid style
  const getStatsGridStyle = () => {
    switch (statsGrid) {
      case '3x2':
        return { gridTemplateColumns: 'repeat(3, max-content)', gridTemplateRows: 'repeat(2, 1fr)' };
      case '1x6':
        return { gridTemplateColumns: '1fr', gridTemplateRows: 'auto' };
      case '2x3':
        return { gridTemplateColumns: 'repeat(2, max-content)', gridTemplateRows: 'repeat(3, 1fr)' };
      default: // 2x2
        return { gridTemplateColumns: 'max-content max-content', gridTemplateRows: 'repeat(1, 1fr)' };
    }
  };

  return (
    <section className="aj-glance-section">
      <div className="aj-glance-container">
        <div className="aj-glance-orbit-wrap">
          {/* Static outer arc */}
          <div className="aj-glance-arc-outer" />

          {/* Badge on orbit line */}
          {showBadge && (
            <motion.div
              className="aj-glance-badge"
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: animationDelay, ease: [0.16, 1, 0.3, 1] }}
            >
              <Target size={13} />
              <span>{eyebrow}</span>
            </motion.div>
          )}

          {/* Inner ring with icons */}
          {showOrbitIcons && orbitIcons.length > 0 && (
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
          )}

          {/* Content - Stats + Headline INSIDE Orbit */}
          <div className="aj-glance-orbit-content">
            <span className="aj-ptm-lineAboutMain" style={{ marginBottom: '-40px', fontSize: '20px', fontWeight: '600'}}>
              <span className="aj-ptm-word" style={{ '--i': 3 }}>A</span>{' '}
              <span className="aj-ptm-word aj-ptm-accent" style={{ '--i': 4 }}>Bigger</span>{' '}
              <span className="aj-ptm-word" style={{ '--i': 5 }}>Vision</span>
            </span>
            {/* Stats Grid */}
            <div className="aj-glance-stats" style={getStatsGridStyle()}>
              {stats.map((s, i) => {
                return (
                  <motion.div
                    className="aj-glance-stat"
                    style={{ marginTop: '-10px', marginLeft: '30px', gridTemplateRows:'repeat(1, 1fr)'  }}
                    key={s.label}
                    custom={i}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                  >
                    <CounterValue value={s.value} />
                    <span
                      className="aj-glance-stat-label"
                      style={{ width: '450px', whiteSpace: 'wrap', lineHeight: '22px' }}
                    >
                      {s.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Headline */}
            {showHeadline && headline && (
              <motion.h2
                className="aj-glance-headline"
                custom={stats.length}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                {headline}
              </motion.h2>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}