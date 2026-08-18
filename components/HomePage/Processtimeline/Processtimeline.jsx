'use client';

import { useEffect, useRef } from 'react';
import './Processtimeline.css';

const DEFAULT_STEPS = [
  {
    num: '01',
    title: 'Fabrication & Manufacturing',
    desc: 'architectural and structural metalwork.',
  },
  {
    num: '02',
    title: 'Printing & Production',
    desc: 'large-format, high-definition commercial print.',
  },
  {
    num: '03',
    title: 'Packaging',
    desc: 'rigid boxes, presentation cases, retail-ready packs.',
  },
  {
    num: '04',
    title: 'Advertising & Branding',
    desc: 'POSM, exhibitions, and environmental branding.',
  },
  {
    num: '05',
    title: 'Design Brands',
    desc: 'finished products for the home and personal life.',
  },
];

export default function ProcessTimeline({
  eyebrow = 'What We Do',
  title = 'Five disciplines, one production culture.',
  description = 'We work across five disciplines under a single production culture. Because they sit inside one group, a project can move between them (a fabricated structure that carries printed graphics, a product that arrives in bespoke packaging) with no handoff and no dropped detail.',
  steps = DEFAULT_STEPS,
}) {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            track.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  const titleWords = title.trim().split(' ');
  const lastWord = titleWords.pop();
  const leadWords = titleWords.join(' ');

  return (
    <section className="aj-process-section">
      <div className="aj-process-container">
        <div className="aj-process-head">
          <span className="aj-process-eyebrow">{eyebrow}</span>
          <h2 className="aj-process-title">
            {leadWords ? `${leadWords} ` : ''}
            <span className="aj-process-title-accent">{lastWord}</span>
          </h2>
          <p className="aj-process-desc">{description}</p>
        </div>

        <div className="aj-process-track" ref={trackRef}>
          <div className="aj-process-line">
            <div className="aj-process-line-fill" />
          </div>

          {steps.map((step, i) => {
            const above = i % 2 === 0; // 1st, 3rd, 5th... -> card above the dot
            return (
              <div className="aj-process-item" key={step.num ?? i}>
                <div
                  className={`aj-process-card ${above ? 'is-above' : 'is-below'}`}
                  style={{ transitionDelay: `${0.05 + i * 0.2}s` }}
                >
                  <div className="aj-process-num">{step.num}</div>
                  <div className="aj-process-card-title">{step.title}</div>
                  <p className="aj-process-card-desc">{step.desc}</p>
                  <span className={`aj-process-stub ${above ? 'is-above' : 'is-below'}`} />
                </div>
                <span className="aj-process-node" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}