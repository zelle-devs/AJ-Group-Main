'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Plus } from 'lucide-react'
import Image from 'next/image'
import './FeaturedProjects.css'

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'Forgentis Fabrications',
      location: 'Architectural metal fabrication: 5-axis CNC milling, fiber laser cutting, structural signage, and facade cladding for developers, architects, and engineers.',
      image: '/malaysia.jpg',
      column: 'col-2', // Middle Column (Big Image)
    },
    {
      id: 2,
      title: 'Imprint Galerie',
      location: 'A direct-to-consumer design house for personal objects and considered gifting: premium cases, gallery wall art, and bespoke keepsakes.',
      image: '/turkey.jpg',
      column: 'col-3-top', // Top of 3rd column
    },
    {
      id: 3,
      title: 'Beyvora Decor',
      location: 'A direct-to-consumer design brand: textured, LED, and metal wall art, plus customizable statement pieces for the home.',
      image: '/usa.jpg',
      column: 'col-3-bottom', // Bottom of 3rd column
    },
    {
      id: 4,
      title: 'Print Pack Advertising (PPA)',
      location: 'Print, packaging, and advertising production: large-format UV printing, custom rigid-box packaging, presentation cases, and exhibition displays for brands and agencies.',
      image: '/australia.jpg',
      column: 'col-4', // Far Right Column
    },
  ]

  return (
    <section className="featured-projects">
      <div className="container2">
        <div className="featured-projects-wrapper">
          
          {/* LEFT COLUMN - Content */}
          <motion.div 
            className="featured-projects-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="featured-projects-label">Our Companies</span>
            
            <h2 className="featured-projects-headline">
              Specialists, not generalists.
            </h2>
            
            <p className="featured-projects-description">
              Each company is built around deep expertise in a single discipline. 
              Together they span metal, print, packaging, advertising, and consumer design.
            </p>
            
            {/* ONLY CHANGE HERE: Link and Text */}
            <a href="/companies" className="btn btn-outline-gold featured-projects-btn">
              View All Companies <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* RIGHT SIDE - IMAGES GRID */}
          <div className="featured-projects-images">
            
            {/* Column 2: Big Image */}
            <motion.div
              className="img-col col-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="project-card big-card">
                <Image src={projects[0].image} alt={projects[0].title} fill className="project-img" />
                <div className="project-overlay" />
                <div className="project-info">
                  <h3>{projects[0].title}</h3>
                  <span>{projects[0].location}</span>
                </div>
                <button className="project-icon"><ArrowRight size={18} /></button>
              </div>
            </motion.div>

            {/* Column 3: 2 Stacked Images */}
            <div className="img-col col-3">
              <motion.div
                className="project-card small-card top-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image src={projects[1].image} alt={projects[1].title} fill className="project-img" />
                <div className="project-overlay" />
                <div className="project-info">
                  <h3>{projects[1].title}</h3>
                  <span>{projects[1].location}</span>
                </div>
                <button className="project-icon"><ArrowRight size={18} /></button>
              </motion.div>

              <motion.div
                className="project-card small-card bottom-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Image src={projects[2].image} alt={projects[2].title} fill className="project-img" />
                <div className="project-overlay" />
                <div className="project-info">
                  <h3>{projects[2].title}</h3>
                  <span>{projects[2].location}</span>
                </div>
                <button className="project-icon"><ArrowRight size={18} /></button>
              </motion.div>
            </div>

            {/* Column 4: Medium Image */}
            <motion.div
              className="img-col col-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="project-card medium-card">
                <Image src={projects[3].image} alt={projects[3].title} fill className="project-img" />
                <div className="project-overlay" />
                <div className="project-info">
                  <h3>{projects[3].title}</h3>
                  <span>{projects[3].location}</span>
                </div>
                <button className="project-icon"><ArrowRight size={18} /></button>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects