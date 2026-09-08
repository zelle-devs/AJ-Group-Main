import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Target, Compass, Zap, Rocket } from 'lucide-react';
import './CareersMarqueWaiting.css';

const CareersMarqueWaiting = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const bulletPoints = [
    { text: "We're building something that doesn't exist yet.", icon: <Sparkles size={20} /> },
    { text: "That means there will be challenges.", icon: <Target size={20} /> },
    { text: "There will be ambiguity.", icon: <Compass size={20} /> },
    { text: "There will be opportunities nobody has defined yet.", icon: <Zap size={20} /> },
    { text: "And that's exactly what makes it exciting.", icon: <Rocket size={20} /> }
  ];

  // Intersection Observer to trigger entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Triggers when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={`aj-cap-section section-wrapper-CareersMarqueWaiting ${isVisible ? 'fade-in-active-CareersMarqueWaiting' : ''}`}
    >
      
      {/* Intro Subheading */}
      <div className="intro-container-CareersMarqueWaiting">
        <h4 className="aj-cap-eyebrow">THE KIND OF PEOPLE WHO THRIVE HERE</h4>
      </div>

      {/* Top Marquee: Left to Right (Tilted -) */}
      <div className="marquee-wrapper-CareersMarqueWaiting marquee-top-CareersMarqueWaiting">
        <div className="marquee-track-ltr-CareersMarqueWaiting">
          {/* Duplicated for continuous seamless loop */}
          <span className="marquee-text-CareersMarqueWaiting">
            IF YOU'RE WAITING FOR PERFECT CONDITIONS, THIS MAY NOT BE FOR YOU • 
          </span>
          <span className="marquee-text-CareersMarqueWaiting">
            IF YOU'RE WAITING FOR PERFECT CONDITIONS, THIS MAY NOT BE FOR YOU  • 
          </span>
          <span className="marquee-text-CareersMarqueWaiting">
            IF YOU'RE WAITING FOR PERFECT CONDITIONS, THIS MAY NOT BE FOR YOU • 
          </span>
        </div>
      </div>

      {/* Animated Bullet Points Split in Two Columns */}
      <div className="bullets-split-container-CareersMarqueWaiting">
        
        {/* Left Column (3 items) */}
        <div className="bullets-column-CareersMarqueWaiting">
          <div className="connecting-line-CareersMarqueWaiting"></div>
          {bulletPoints.slice(0, 3).map((item, index) => (
            <div 
              className="bullet-item-CareersMarqueWaiting" 
              key={`left-${index}`}
              style={{ animationDelay: `${index * 0.4}s` }}
            >
              <div className="icon-wrapper-CareersMarqueWaiting">
                {item.icon}
              </div>
              <p className="bullet-text-CareersMarqueWaiting">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Right Column (2 items) */}
        <div className="bullets-column-CareersMarqueWaiting">
          <div className="connecting-line-CareersMarqueWaiting"></div>
          {bulletPoints.slice(3, 5).map((item, index) => (
            <div 
              className="bullet-item-CareersMarqueWaiting" 
              key={`right-${index}`}
              style={{ animationDelay: `${(index + 3) * 0.4}s` }} // Continues the delay timing
            >
              <div className="icon-wrapper-CareersMarqueWaiting">
                {item.icon}
              </div>
              <p className="bullet-text-CareersMarqueWaiting">{item.text}</p>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Marquee: Right to Left (Tilted +) */}
      <div className="marquee-wrapper-CareersMarqueWaiting marquee-bottom-CareersMarqueWaiting">
        <div className="marquee-track-rtl-CareersMarqueWaiting">
          {/* Duplicated for continuous seamless loop */}
          <span className="marquee-text-CareersMarqueWaiting">
            WE WANT PEOPLE WHO SEE POSSIBILITY WHERE OTHERS SEE UNCERTAINTY • 
          </span>
          <span className="marquee-text-CareersMarqueWaiting">
            WE WANT PEOPLE WHO SEE POSSIBILITY WHERE OTHERS SEE UNCERTAINTY • 
          </span>
          <span className="marquee-text-CareersMarqueWaiting">
            WE WANT PEOPLE WHO SEE POSSIBILITY WHERE OTHERS SEE UNCERTAINTY • 
          </span>
        </div>
      </div>

    </section>
  );
};

export default CareersMarqueWaiting;