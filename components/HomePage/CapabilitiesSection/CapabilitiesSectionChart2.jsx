'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import './CapabilitiesSectionChart2.css';

const CHART_DATA = [
  { label: 'Brief', value: 20, color: '#F4B033' },
  { label: 'Design', value: 40, color: '#C8A54A' },
  { label: 'Production', value: 75, color: '#F4B033' },
  { label: 'Finishing', value: 60, color: '#C8A54A' },
  { label: 'Delivery', value: 90, color: '#F4B033' },
  { label: 'Support', value: 100, color: '#C8A54A' },
];

export default function CapabilitiesSectionChart2({
  eyebrow = 'How we work',
  title = 'A considered process, start to finish.',
  body = "Every project follows the same deliberate sequence, from brief to delivery, so nothing is left to chance and nothing surprises you at the end.",
  buttonText = 'Explore Our Process',
  buttonLink = '/process',
}) {
  const [hoveredPoint, setHoveredPoint] = useState(null);
  
  const maxValue = Math.max(...CHART_DATA.map(d => d.value));
  const chartWidth = 380;
  const chartHeight = 260;
  const padding = { top: 25, right: 10, bottom: 35, left: 30 };
  const graphWidth = chartWidth - padding.left - padding.right;
  const graphHeight = chartHeight - padding.top - padding.bottom;

  const getY = (value) => padding.top + graphHeight - (value / maxValue) * graphHeight;
  const getX = (index) => padding.left + (index * graphWidth) / (CHART_DATA.length - 1);

  const linePath = CHART_DATA.map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(d.value)}`).join(' ');
  const areaPath = `${linePath} L ${getX(CHART_DATA.length - 1)} ${padding.top + graphHeight} L ${getX(0)} ${padding.top + graphHeight} Z`;

  return (
    <section className="aj-cap2-section">
      <div className="container2">
        <div className="aj-cap2-grid">
          {/* Left Column - Content */}
          <motion.div
            className="aj-cap2-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="aj-cap2-eyebrow">{eyebrow}</span>
            <h2 className="aj-cap2-title">{title}</h2>
            <p className="aj-cap2-body">{body}</p>
            <a href={buttonLink} className="btn btn-outline-gold aj-cap2-btn">
              {buttonText} <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Right Column - Animated Line Chart */}
          <motion.div
            className="aj-cap2-chart-wrapper"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="aj-cap2-chart-svg">
              {/* Area Fill */}
              {/* <motion.path
                d={areaPath}
                fill="url(#cap2ChartGradient)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.5 }}
              /> */}

              {/* Animated Line */}
              <motion.path
                d={linePath}
                fill="none"
                stroke="url(#cap2LineGradient)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Tooltip */}
              {hoveredPoint !== null && (
                <g className="aj-cap2-tooltip">
                  <rect
                    x={getX(hoveredPoint) - 35}
                    y={getY(CHART_DATA[hoveredPoint].value) + 13}
                    width="70"
                    height="32"
                    rx="6"
                    fill="rgba(13, 13, 13, 0.95)"
                    stroke={CHART_DATA[hoveredPoint].color}
                    strokeWidth="1"
                  />
                  <text
                    x={getX(hoveredPoint)}
                    y={getY(CHART_DATA[hoveredPoint].value) + 25}
                    textAnchor="middle"
                    fontSize="8"
                    fill={CHART_DATA[hoveredPoint].color}
                    fontWeight="700"
                  >
                    {CHART_DATA[hoveredPoint].value}%
                  </text>
                  <text
                    x={getX(hoveredPoint)}
                    y={getY(CHART_DATA[hoveredPoint].value) + 38}
                    textAnchor="middle"
                    fontSize="8"
                    fill="var(--color-white)"
                    fontWeight="600"
                  >
                    {CHART_DATA[hoveredPoint].label}
                  </text>
                </g>
              )}

              {/* Data Points */}
              {CHART_DATA.map((d, i) => {
                const x = getX(i);
                const y = getY(d.value);
                const delay = 0.8 + i * 0.2;
                
                return (
                  <motion.g
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
                    onMouseEnter={() => setHoveredPoint(i)}
                    onMouseLeave={() => setHoveredPoint(null)}
                    style={{ cursor: 'pointer' }}
                  >
                    <circle cx={x} cy={y} r="18" fill="transparent" />
                    <circle cx={x} cy={y} r="5" fill="var(--color-black)" stroke={d.color} strokeWidth="2" />
                    <circle cx={x} cy={y} r="1.5" fill={d.color} />
                    <text x={x} y={y - 14} textAnchor="middle" fontSize="8" fill={d.color} fontWeight="600">
                      {d.value}%
                    </text>
                  </motion.g>
                );
              })}

              {/* Gradients */}
              <defs>
                <linearGradient id="cap2LineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F4B033" />
                  <stop offset="50%" stopColor="#C8A54A" />
                  <stop offset="100%" stopColor="#F4B033" />
                   {/* <stop offset="0%" stopColor="#0B9FE3" />
                    <stop offset="25%" stopColor="#D32867" />
                    <stop offset="50%" stopColor="#F4B033" />
                    <stop offset="75%" stopColor="#C8A54A" />
                    <stop offset="100%" stopColor="#0B9FE3" /> */}
                </linearGradient>
                <linearGradient id="cap2ChartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(200, 165, 74, 0.25)" />
                  <stop offset="100%" stopColor="rgba(200, 165, 74, 0.02)" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}