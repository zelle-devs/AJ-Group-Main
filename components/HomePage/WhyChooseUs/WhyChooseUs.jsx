'use client'
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react';
import { Users, Globe, Home, Award } from 'lucide-react'
import Image from 'next/image'
import './WhyChooseUs.css'
import { div } from 'framer-motion/client';

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
            const startTime = performance.now();

            const animate = (currentTime) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = Math.floor(eased * target);

              setDisplayValue(current + suffix);

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setDisplayValue(target + suffix);
              }
            };

            requestAnimationFrame(animate);
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref} className="stat-number">{displayValue}</span>;
};

// Default Stats
const DEFAULT_STATS = [
  { icon: Users, number: '500+', label: 'Happy Clients' },
  { icon: Globe, number: '25+', label: 'Countries Served' },
  { icon: Home, number: '1200+', label: 'Luxury Properties' },
  { icon: Award, number: '10+', label: 'Years of Excellence' },
];

export default function WhyChooseUs({
  // Content Props
  eyebrow = 'Who we are',
  eyebrows2 = 'Great businesses are built for the long term',
  headline = 'More Than A Holding Company',
  description = "We combine entrepreneurial thinking, strategic investment and operational discipline to create businesses designed to grow, adapt and endure. From building new ventures to expanding into new sectors, we are creating a diversified group with a clear ambition:",

  // Bold words in description
  boldWords = ['', 'businesses', 'building', 'consumer design brands'],

  // Stats
  stats = DEFAULT_STATS,

  // Image
  imageSrc = '/HomePageWhatWeDo.png',
  imageAlt = 'Luxury Lounge with City View',

  // Visibility
  showImage = true,
  showDivider = true,
}) {

  // Function to render description with bold words
  const renderDescription = () => {
    if (!boldWords || boldWords.length === 0) {
      return description;
    }

    let result = description;
    boldWords.forEach((word) => {
      result = result.replace(word, `<span style="font-weight: 700;">${word}</span>`);
    });

    return <span dangerouslySetInnerHTML={{ __html: result }} />;
  };

  return (
    <div>


      {/* <section className="why-choose-us">
        <div className="container">
          <div className="why-choose-grid"> 
            <motion.div
              className="why-choose-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            > 

              <h2 className="why-choose-headline">{headline}</h2>

              <p className="why-choose-description">
                {renderDescription()}
              </p>
              <h2 style={{ fontWeight: '700', color: 'var(--color-gold)', fontFamily: 'Gotham', fontSize: '20px' }}>TO BUILD SOMETHING MUCH BIGGER</h2>
            </motion.div>

            {showDivider && <div className='divider'></div>}
 
            <motion.div
              className="why-choose-stats-wrapper"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="why-choose-label">{eyebrows2}</span>
              <div className="why-choose-stats">

                {stats.map((stat, index) => {
                  const Icon = stat.icon || Award;
                  return (

                    <motion.div
                      key={index}
                      className="stat-item"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-10%' }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                    >

                      <Icon className="stat-icon" size={30} strokeWidth={1.5} />
                      <div className="stat-content">

                        <CounterValue value={stat.number} />
                        <span className="stat-label">{stat.label}</span>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
 
            {showImage && (
              <motion.div
                className="why-choose-image-wrapper"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >

                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  className="why-choose-image"
                  width={600}
                  height={800}
                  quality={100}
                  priority
                />
                <div className="why-choose-image-overlay" />
              </motion.div>
            )}
          </div>
        </div>
      </section> */}

      <section className="why-choose-us">
        <div className="container">
          <div className="why-choose-grid" style={{ gridTemplateColumns: '1.2fr 1.1fr' }}>
            {/* Left Column - Content */}
            <motion.div
              className="why-choose-content"
              style={{height:'300px'}}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            > 

              <h2 className="why-choose-headline">{headline}</h2>

              <span className="why-choose-label">{eyebrows2}</span>
              <p className="why-choose-description">
                {renderDescription()}
              </p>
              <h2 style={{ fontWeight: '700', color: 'var(--color-gold)', fontFamily: 'Gotham', fontSize: '20px' }}>TO BUILD SOMETHING MUCH BIGGER</h2>
            </motion.div>

            {/* {showDivider && <div className='divider'></div>} */}

            {/* Middle Column - Stats Grid */}
            {/* <motion.div 
            className="why-choose-stats-wrapper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="why-choose-stats">

              {stats.map((stat, index) => {
                const Icon = stat.icon || Award;
                return (
                  
                  <motion.div 
                    key={index} 
                    className="stat-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10%' }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    
                    <Icon className="stat-icon" size={30} strokeWidth={1.5} />
                    <div className="stat-content">
                      
                      <CounterValue value={stat.number} />
                      <span className="stat-label">{stat.label}</span>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div> */}

            {showImage && (
              <motion.div
                className="why-choose-image-wrapper"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >

                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  className="why-choose-image"
                  width={600}
                  height={800}
                  quality={100}
                  priority
                />
                <div className="why-choose-image-overlay" style={{ width:'40%'}} />
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
