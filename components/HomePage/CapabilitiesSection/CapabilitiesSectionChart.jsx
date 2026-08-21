'use client';

import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, BarChart3 } from 'lucide-react';
import { useState } from 'react';
import './CapabilitiesSectionChart.css';

const CHART_DATA = [
  { label: 'Brief', value: 20, color: '#0B9FE3' },
  { label: 'Design', value: 40, color: '#D32867' },
  { label: 'Production', value: 75, color: '#F4B033' },
  { label: 'Finishing', value: 60, color: '#C8A54A' },
  { label: 'Delivery', value: 90, color: '#0B9FE3' },
  { label: 'Support', value: 100, color: '#D32867' },
];

export default function CapabilitiesSectionChart({
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
    <section className="aj-process-section">
      <div className="container2">
        <div className="aj-process-grid">
          {/* Left Column - Content */}
          <motion.div
            className="aj-process-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="aj-process-eyebrow">{eyebrow}</span>
            <h2 className="aj-process-title">{title}</h2>
            <p className="aj-process-body">{body}</p>
            <a href={buttonLink} className="btn btn-outline-gold aj-process-btn">
              {buttonText} <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Right Column - Animated Line Chart */}
          <motion.div
            className="aj-process-chart-wrapper"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="aj-process-chart-card">
              {/* Chart Header */}
              <div className="aj-process-chart-header">
                <div className="aj-process-chart-header-left">
                  <span className="aj-process-chart-icon">
                    <TrendingUp size={16} />
                  </span>
                  <span className="aj-process-chart-title">Project Progress</span>
                </div>
              </div>

              {/* SVG Chart */}
              <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="aj-process-chart-svg">
                {/* Grid Lines */}
                {[0, 25, 50, 75, 100].map((val) => {
                  const y = getY(val);
                  return (
                    <g key={val}>
                      <line
                        x1={padding.left}
                        y1={y}
                        x2={chartWidth - padding.right}
                        y2={y}
                        stroke="rgba(200, 165, 74, 0.08)"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                      />
                      <text
                        x={padding.left - 10}
                        y={y + 3}
                        textAnchor="end"
                        fontSize="8"
                        fill="var(--color-beige)"
                      >
                        {val}
                      </text>
                    </g>
                  );
                })}

                {/* Area Fill */}
                <motion.path
                  d={areaPath}
                  fill="url(#chartGradient)"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1.5 }}
                />

                {/* Animated Line */}
                <motion.path
                  d={linePath}
                  fill="none"
                  stroke="url(#lineGradient)"
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
                  <g className="aj-process-tooltip">
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
                      y={getY(CHART_DATA[hoveredPoint].value) + 38}
                      textAnchor="middle"
                      fontSize="8"
                      fill="var(--color-white)"
                      fontWeight="600"
                    >
                      {CHART_DATA[hoveredPoint].label}
                    </text>
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
                      style={{ cursor: 'pointer'}}
                      className="aj-group"
                    >
                      {/* Invisible hit area */}
                      <circle cx={x} cy={y} r="18" fill="transparent" />
                      {/* Outer ring */}
                      <circle cx={x} cy={y} r="5" fill="var(--color-black)" stroke={d.color} strokeWidth="2" />
                      {/* Inner dot */}
                      <circle cx={x} cy={y} r="1.5" fill={d.color} />
                      {/* Label - Bottom */}
                      <text x={x} y={chartHeight - 12} textAnchor="end" fontSize="8" fill="var(--color-white)" fontWeight="500">
                        {d.label}
                      </text>
                      {/* Value */}
                      <text x={x} y={y - 14} textAnchor="middle" fontSize="8" fill={d.color} fontWeight="600">
                        {d.value}%
                      </text>
                    </motion.g>
                  );
                })}

                {/* Gradients */}
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0B9FE3" />
                    <stop offset="25%" stopColor="#D32867" />
                    <stop offset="50%" stopColor="#F4B033" />
                    <stop offset="75%" stopColor="#C8A54A" />
                    <stop offset="100%" stopColor="#0B9FE3" />
                  </linearGradient>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(200, 165, 74, 0.25)" />
                    <stop offset="100%" stopColor="rgba(200, 165, 74, 0.02)" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Chart Footer */}
              <div className="aj-process-chart-footer">
                <div className="aj-process-chart-legend">
                  {CHART_DATA.slice(0, 6).map((d, i) => (
                    <span key={i} className="aj-process-legend-item">
                      <span className="aj-process-legend-dot" style={{ background: d.color }} />
                      {d.label}
                    </span>
                  ))}
                </div>
                <span className="aj-process-chart-total">
                  <BarChart3 size={14} />
                  100% Complete
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}