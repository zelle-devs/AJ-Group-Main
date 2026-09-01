'use client'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import '../HomePage/FeaturedProjects/FeaturedProjects.css'

// Default Projects Data
const DEFAULT_PROJECTS = [
  {
    id: 1,
    title: 'Forgentis Fabrications',
    description: 'Architectural metal fabrication: 5-axis CNC milling, fiber laser cutting, structural signage, and facade cladding for developers, architects, and engineers.',
    image: '/Specialist_Forgentis_Fabrications.jpeg',
    link: '/forgentis',
  },
  {
    id: 2,
    title: 'Imprint Galerie',
    description: 'A direct-to-consumer design house for personal objects and considered gifting: premium cases, gallery wall art, and bespoke keepsakes.',
    image: '/Imprint_Galerie_grid.png',
    link: '/imprint',
  },
  {
    id: 3,
    title: 'Beyvora Decor',
    description: 'A direct-to-consumer design brand: textured, LED, and metal wall art, plus customizable statement pieces for the home.',
    image: '/Beyvora_Decor.png',
    link: '/beyvora',
  },
  {
    id: 4,
    title: 'Print Pack Advertising (PPA)',
    description: 'Print, packaging, and advertising production: large-format UV printing, custom rigid-box packaging, presentation cases, and exhibition displays for brands and agencies.',
    image: '/Print_Pack_Advertising.jpeg',
    link: '/ppa',
  },
];

export default function OurCompaniesFeaturedProjects({
  // Content Props
  eyebrow = 'Our Companies',
  headline = 'Different Businesses Shared Direction',
  description = "Each company in A.J Group leads in its own field, while drawing on the resources and standards of the wider Group.",
  buttonText = 'Explore Our Companies',
  buttonLink = '/our-companies',
  
  // Projects Data
  projects = DEFAULT_PROJECTS,
  
  // Layout Control
  showButton = true,
  maxProjects = 4, // Kitne projects show karne hain
}) {
  
  // Projects ko limit karo
  const visibleProjects = projects.slice(0, maxProjects);
  
  // Projects ko columns mein assign karo
  const getProjectByColumn = (columnType) => {
    if (columnType === 'big') return visibleProjects[0];
    if (columnType === 'top') return visibleProjects[1];
    if (columnType === 'bottom') return visibleProjects[2];
    if (columnType === 'medium') return visibleProjects[3];
    return null;
  };

  const bigProject = getProjectByColumn('big');
  const topProject = getProjectByColumn('top');
  const bottomProject = getProjectByColumn('bottom');
  const mediumProject = getProjectByColumn('medium');

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
            <span className="featured-projects-label">{eyebrow}</span>
            
            <h2 className="featured-projects-headline">{headline}</h2>
            
            <p className="featured-projects-description">{description}</p>
            
            {showButton && (
              <a href={buttonLink} className="btn btn-outline-gold featured-projects-btn">
                {buttonText} <ArrowRight size={16} />
              </a>
            )}
          </motion.div>

          {/* RIGHT SIDE - IMAGES GRID */}
          <div className="featured-projects-images">
            
            {/* Big Image (Full Height) */}
            {bigProject && (
              <motion.div
                className="img-col col-2"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="project-card big-card">
                  <Image src={bigProject.image} alt={bigProject.title} fill className="project-img" />
                  <div className="project-info">
                    <h3>{bigProject.title}</h3>
                    <span>{bigProject.description}</span>
                  </div>
                  {bigProject.link && (
                    <a href={bigProject.link} className="project-icon" aria-label={`View ${bigProject.title}`}>
                      <ArrowRight size={18} />
                    </a>
                  )}
                </div>
              </motion.div>
            )}

            {/* Column 3: 2 Stacked Images */}
            <div className="img-col col-3">
              {topProject && (
                <motion.div
                  className="project-card small-card top-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Image src={topProject.image} alt={topProject.title} fill className="project-img" />
                  <div className="project-info">
                    <h3>{topProject.title}</h3>
                    <span>{topProject.description}</span>
                  </div>
                  {topProject.link && (
                    <a href={topProject.link} className="project-icon" aria-label={`View ${topProject.title}`}>
                      <ArrowRight size={18} />
                    </a>
                  )}
                </motion.div>
              )}

              {bottomProject && (
                <motion.div
                  className="project-card small-card bottom-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Image src={bottomProject.image} alt={bottomProject.title} fill className="project-img" />
                  <div className="project-info">
                    <h3>{bottomProject.title}</h3>
                    <span>{bottomProject.description}</span>
                  </div>
                  {bottomProject.link && (
                    <a href={bottomProject.link} className="project-icon" aria-label={`View ${bottomProject.title}`}>
                      <ArrowRight size={18} />
                    </a>
                  )}
                </motion.div>
              )}
            </div>

            {/* Medium Image (Full Height) */}
            {mediumProject && (
              <motion.div
                className="img-col col-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="project-card medium-card">
                  <Image src={mediumProject.image} alt={mediumProject.title} fill className="project-img" />
                  <div className="project-info">
                    <h3>{mediumProject.title}</h3>
                    <span>{mediumProject.description}</span>
                  </div>
                  {mediumProject.link && (
                    <a href={mediumProject.link} className="project-icon" aria-label={`View ${mediumProject.title}`}>
                      <ArrowRight size={18} />
                    </a>
                  )}
                </div>
              </motion.div>
            )}

          </div>
        </div>
      </div>
    </section>
  )
}
