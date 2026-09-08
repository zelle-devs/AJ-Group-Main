'use client';

import { useEffect, useRef } from 'react';
import '../../components/HomePage/Processtimeline/Processtimeline.css';
 
const DEFAULT_STEPS = [
  {
    num: '01',
    title: 'Ambition',
    desc: 'You want to build something meaningful.',
  },
  {
    num: '02',
    title: 'Ownership',
    desc: 'You take responsibility for the outcome.',
  },
    {
    num: '03',
    title: 'Curiosity',
    desc: 'You ask better questions and keep learning. ',
  },
  {
    num: '04',
    title: 'Execution',
    desc: 'You turn ideas into results.',
  }, 
  
  {
    num: '05',
    title: 'Resilience',
    desc: 'You keep moving when things get difficult.',
  },


];

export default function OurCareersProcesstimeline({
  // Content Props
  eyebrow = 'WHAT WE LOOK FOR',
  title = 'Builder\'s Not Just Employees ',
  description = 'We look for people who see problems and want to solve them. People who take ownership instead of waiting for instructions. People who are curious enough to learn, ambitious enough to grow and disciplined enough to deliver.',
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
 