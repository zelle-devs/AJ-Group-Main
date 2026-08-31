'use client';

import { useEffect, useRef } from 'react';
import '../../components/HomePage/Processtimeline/Processtimeline.css';
 
const DEFAULT_STEPS = [
  {
    num: '01',
    title: 'Better Together',
    desc: 'One group, multiple capabilities, one seamless result.',
  },
  {
    num: '02',
    title: 'Build',
    desc: 'Forgentis builds the retail structure.',
  },
  {
    num: '03',
    title: 'Brand',
    desc: 'PPA brings it to life with graphics and POSM',
  },
  {
    num: '04',
    title: 'Package',
    desc: 'PPA creates packaging built for impact ',
  },
  {
    num: '05',
    title: 'Deliver',
    desc: 'One group. One standard. One timeline.',
  },
];

export default function OurCompaniesProcesstimeline({
  // Content Props
  eyebrow = 'What We Do',
  title = 'The Whole Is Greater Than the Sum.',
  description = 'The real advantage of A.J Group shows up when companies combine. Forgentis fabricates a retail structure; PPA clads it in high-definition graphics and supplies the POSM around it. A product from one of our consumer brands arrives in packaging engineered by PPA. Because it is all one group, these handoffs stay clean: one point of accountability, one standard, one timeline.',
  steps = DEFAULT_STEPS,
  
  // Layout Control
  titleAccent = true, 
  showNumbers = true, 
  alternateCards = true,  
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

  // Title words - Last word accent
  const titleWords = title.trim().split(' ');
  const lastWord = titleWords.pop();
  const leadWords = titleWords.join(' ');

  return (
    <section className="aj-process-section">
      <div className="container2">
        <div className="aj-process-head">
          <span className="aj-process-eyebrow">{eyebrow}</span>
          <h2 className="aj-process-title">
            {leadWords ? `${leadWords} ` : ''}
            {titleAccent ? (
              <span className="aj-process-title-accent">{lastWord}</span>
            ) : (
              lastWord
            )}
          </h2>
          {description && <p className="aj-process-desc">{description}</p>}
        </div>

        <div className="aj-process-track" ref={trackRef}>
          <div className="aj-process-line">
            <div className="aj-process-line-fill" />
          </div>

          {steps.map((step, i) => {
            const above = alternateCards ? i % 2 === 0 : true;
            return (
              <div className="aj-process-item" key={step.num ?? i}>
                <div
                  className={`aj-process-card ${above ? 'is-above' : 'is-below'}`}
                  style={{ transitionDelay: `${0.05 + i * 0.2}s` }}
                >
                  {showNumbers && <div className="aj-process-num">{step.num}</div>}
                  <div className="aj-process-card-title">{step.title}</div>
                  {step.desc && <p className="aj-process-card-desc">{step.desc}</p>}
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
 