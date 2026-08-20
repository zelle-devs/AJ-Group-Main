'use client'
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react';
import { Users, Globe, Home, Award } from 'lucide-react'
import Image from 'next/image'
import './WhyChooseUs.css'


// Counter Component - Fixed Version
const CounterValue = ({ value }) => {
  const [displayValue, setDisplayValue] = useState('0');
  const ref = useRef(null);
  
  // Manual IntersectionObserver use karo
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Counter start karo
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
            observer.unobserve(element); // Sirf ek baar chalega
          }
        });
      },
      { threshold: 0.3 } // 30% visible hone par trigger hoga
    );
    
    observer.observe(element);
    
    return () => observer.disconnect();
  }, [value]);
  
  return <span ref={ref} className="stat-number">{displayValue}</span>;
};
const WhyChooseUs = () => {
  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Happy Clients',
    },
    {
      icon: Globe,
      number: '25+',
      label: 'Countries Served',
    },
    {
      icon: Home,
      number: '1200+',
      label: 'Luxury Properties',
    },
    {
      icon: Award,
      number: '10+',
      label: 'Years of Excellence',
    },
  ]

  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="why-choose-grid">
          {/* Left Column - Content */}
          <motion.div 
            className="why-choose-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="why-choose-label">Who we are</span>
            
            <h2 className="why-choose-headline">
              One group. Four companies. A single standard of making.
            </h2>
            
            <p className="why-choose-description">
              A.J Group brings specialist manufacturing and design businesses under one roof: <span style={{fontWeight: "700"}}>architectural metalwork</span>, <span style={{fontWeight: "700"}}>premium packaging</span>, <span style={{fontWeight: "700"}}>advertising production</span>, and <span style={{fontWeight: "700"}}>consumer design brands</span>. Each leads in its own field; all share one discipline: precise engineering, controlled production, and finishing that holds up to inspection. It's a group built to carry a brief from concept to finished object without the work ever leaving our hands.
            </p>
        
          </motion.div>
            <div className='divider'></div>
          {/* Middle Column - Stats Grid with Cursive at Bottom */}
          <motion.div 
            className="why-choose-stats-wrapper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="why-choose-stats">
              {stats.map((stat, index) => {
                const Icon = stat.icon
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
            
            {/* <div className="why-choose-stats-signature">
              <span>The Mark of Excellence</span>
            </div> */}
          </motion.div>

          {/* Right Column - Image with Gradient Overlay */}
          <motion.div 
            className="why-choose-image-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Image
              src="/malaysia.jpg"
              alt="Luxury Lounge with City View"
              className="why-choose-image"
              width={600}
              height={800}
              quality={100}
              priority
            />
            <div className="why-choose-image-overlay" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs