'use client'
import { motion } from 'framer-motion'
import { Users, Globe, Home, Award } from 'lucide-react'
import Image from 'next/image'
import './WhyChooseUs.css'

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
                  <div 
  key={index} 
  className="stat-item"
>
  <Icon className="stat-icon" size={30} strokeWidth={1.5} />

  <div className="stat-content">
    <span className="stat-number">{stat.number}</span>
    <span className="stat-label">{stat.label}</span>
  </div>
</div>
                )
              })}
            </div>
            
            <div className="why-choose-stats-signature">
              <span>The Mark of Excellence</span>
            </div>
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