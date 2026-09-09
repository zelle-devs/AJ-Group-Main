'use client';

import { useEffect, useRef } from 'react';
import '../../components/HomePage/Processtimeline/Processtimeline.css';
 
const DEFAULT_STEPS = [
  {
    num: '01',
    title: 'Long-Term Ownership',
    desc: 'We build and operate with the future in mind.',
  },
  {
    num: '02',
    title: 'Strategic Thinking',
    desc: 'We focus on opportunities that can create meaningful long-term value.',
  },
    {
    num: '03',
    title: 'Operational Excellence',
    desc: 'We believe sustainable growth starts with strong fundamentals. ',
  },
  {
    num: '04',
    title: 'Entrepreneurial Mindset',
    desc: 'We remain adaptable, decisive and willing to pursue new opportunities.',
  },


];

export default function OurCompaniesProcesstimeline({
  // Content Props
  eyebrow = 'ONE GROUP, ONE STANDARD',
  title = 'What Connects Our Companies',
  description = 'Different businesses require different strategies. But every company within AJ Group is built around the same fundamentals',
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
    <section className="aj-cap-section">
      <div className="container2">
        <div className="aj-process-head">
          <span className="aj-process-eyebrow">{eyebrow}</span>
          <h2 className="aj-process-title" style={{margin:'0'}}>
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
                  style={{ transitionDelay: `${0.05 + i * 0.2}s`, width:'230px' }}
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
 