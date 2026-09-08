'use client';

import { useEffect, useRef } from 'react';
import './Processtimeline.css';

// Default Steps
const DEFAULT_STEPS = [
  {
    num: '01',
    title: 'IDENTIFY',
    desc: 'We look for businesses, markets and opportunities with meaningful potential',
  },
  {
    num: '02',
    title: 'BUILD',
    desc: 'We turn ideas and opportunities into businesses with strong foundations',
  },
  {
    num: '03',
    title: 'INVEST',
    desc: 'We commit capital, resources and strategic thinking where they can create lasting value',
  },
  {
    num: '04',
    title: 'OWN',
    desc: 'We take a long-term view of the businesses we build and back',
  },
  {
    num: '05',
    title: 'SCALE',
    desc: 'We strengthen operations, pursue new markets and create platforms for continued growth',
  },
  {
    num: '06',
    title: 'EXPAND',
    desc: 'We continuously explore new sectors, businesses and opportunities that can move the Group forward',
  },
];

export default function ProcesstimelineAboutMain({
  // Content Props
  eyebrow = 'Our Approach',
  title = 'How We Build',
  description = 'Our approach is designed around long-term ownership and sustainable growth.',
  steps = DEFAULT_STEPS,
  
  // Layout Control
  titleAccent = true, // Last word ko gold color mein show karna
  showNumbers = true, // Step numbers show/hide
  alternateCards = true, // Cards upar neeche alternate
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
          <span className="aj-process-eyebrow" >{eyebrow}</span>
          <h2 className="aj-process-title" style={{marginTop:'0'}}>
            {leadWords ? `${leadWords} ` : ''}
            {titleAccent ? (
              <span className="aj-process-title-accent">{lastWord}</span>
            ) : (
              lastWord
            )}
          </h2>
          {description && <p className="aj-process-desc" style={{width:'900px'}}>{description}</p>}
        </div>

        <div className="aj-process-track" ref={trackRef}>
          <div className="aj-process-line">
            <div className="aj-process-line-fill" />
          </div>

          {steps.map((step, i) => {
            const above = alternateCards ? i % 2 === 0 : true;
            return (
              <div className="aj-process-item" key={step.num ?? i}>
 
                {/* ONLY THIS BLOCK WAS ADDED TO SHOW THE HEADING ABOVE STEP 02 */}
                {i === 1 && (
                  <h3
                  className='aj-process-title aj-together-heading' style={{
                    position: 'absolute',
                    bottom: '210px', /* Adjust this value if it needs to move slightly up or down from the line */
                    left: '50%',
                    transform: 'translateX(-50%)',
                    whiteSpace: 'nowrap',
                    margin: 0,
                    zIndex: 10,
                    fontSize:'25px',
                    fontWeight:'600'
                  }}>
                    <span className="aj-ptm-word  aj-ptm-accent " style={{ '--i': 2 }}>T</span>
                    <span className="aj-ptm-word  " style={{ '--i': 2 }}>ogether</span>{' '}
                    <span className="aj-ptm-word  aj-ptm-accent" style={{ '--i': 2 }}>W </span>
                    <span className="aj-ptm-word  " style={{ '--i': 2 }}>e </span>{' '}
                    <span className="aj-ptm-word  aj-ptm-accent" style={{ '--i': 2 }}>A </span>
                    <span className="aj-ptm-word " style={{ '--i': 2 }}>chieve</span>
                  </h3>
                )}
                {/* END OF ADDED BLOCK */}

                <div
                  className={`aj-process-card ${above ? 'is-above' : 'is-below'}`}
                  style={{ transitionDelay: `${0.05 + i * 0.2}s` , width:'300px'}}
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