'use client'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import './FeaturedProjects.css'

// Default Projects Data
const DEFAULT_PROJECTS = [
  {
    id: 1,
    title: 'Forgentis Fabrications',
    description: 'Architectural metal fabrication: 5-axis CNC milling, fiber laser cutting, structural signage, and facade cladding for developers, architects, and engineers.',
    image: '/Specialist_Forgentis_Fabrications.jpeg',
    link: '#',
  },
  {
    id: 2,
    title: 'Imprint Galerie',
    description: 'A direct-to-consumer design house for personal objects and considered gifting: premium cases, gallery wall art, and bespoke keepsakes.',
    image: '/Imprint_Galerie_grid.png',
    link: '#',
  },
  {
    id: 3,
    title: 'Beyvora Decor',
    description: 'A direct-to-consumer design brand: textured, LED, and metal wall art, plus customizable statement pieces for the home.',
    image: '/Beyvora_Decor.png',
    link: '#',
  },
  {
    id: 4,
    title: 'Print Pack Advertising (PPA)',
    description: 'Print, packaging, and advertising production: large-format UV printing, custom rigid-box packaging, presentation cases, and exhibition displays for brands and agencies.',
    image: '/Print_Pack_Advertising.jpeg',
    link: '#',
  },
];

export default function FeaturedProjects({
  // Content Props
  eyebrow = 'Our Portfolio',
  headline = 'Different Businesses Shared Direction',
  description = "Each company in A.J Group leads in its own field, while drawing on the resources and standards of the wider Group.",
  buttonText = 'Explore Our Portfolio',
  buttonLink = '/our-portfolio',
  
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

// 'use client'
// import { motion } from 'framer-motion'
// import { ArrowRight, Plus } from 'lucide-react'
// import Image from 'next/image'
// import './FeaturedProjects.css'

// const FeaturedProjects = () => {
//   const projects = [
//     {
//       id: 1,
//       title: 'Forgentis Fabrications',
//       location: 'Architectural metal fabrication: 5-axis CNC milling, fiber laser cutting, structural signage, and facade cladding for developers, architects, and engineers.',
//       image: '/malaysia.jpg',
//       column: 'col-2', // Middle Column (Big Image)
//     },
//     {
//       id: 2,
//       title: 'Imprint Galerie',
//       location: 'A direct-to-consumer design house for personal objects and considered gifting: premium cases, gallery wall art, and bespoke keepsakes.',
//       image: '/turkey.jpg',
//       column: 'col-3-top', // Top of 3rd column
//     },
//     {
//       id: 3,
//       title: 'Beyvora Decor',
//       location: 'A direct-to-consumer design brand: textured, LED, and metal wall art, plus customizable statement pieces for the home.',
//       image: '/usa.jpg',
//       column: 'col-3-bottom', // Bottom of 3rd column
//     },
//     {
//       id: 4,
//       title: 'Print Pack Advertising (PPA)',
//       location: 'Print, packaging, and advertising production: large-format UV printing, custom rigid-box packaging, presentation cases, and exhibition displays for brands and agencies.',
//       image: '/australia.jpg',
//       column: 'col-4', // Far Right Column
//     },
//   ]

//   return (
//     <section className="featured-projects">
//       <div className="container2">
//         <div className="featured-projects-wrapper">
          
//           {/* LEFT COLUMN - Content */}
//           <motion.div 
//             className="featured-projects-content"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <span className="featured-projects-label">Our Companies</span>
            
//             <h2 className="featured-projects-headline">
//               Specialists, not generalists.
//             </h2>
            
//             <p className="featured-projects-description">
//               Each company is built around deep expertise in a single discipline. 
//               Together they span metal, print, packaging, advertising, and consumer design.
//             </p>
            
//             {/* ONLY CHANGE HERE: Link and Text */}
//             <a href="/our-portfolio" className="btn btn-outline-gold featured-projects-btn">
//               View All Companies <ArrowRight size={16} />
//             </a>
//           </motion.div>

//           {/* RIGHT SIDE - IMAGES GRID */}
//           <div className="featured-projects-images">
            
//             {/* Column 2: Big Image */}
//             <motion.div
//               className="img-col col-2"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               viewport={{ once: true }}
//             >
//               <div className="project-card big-card">
//                 <Image src={projects[0].image} alt={projects[0].title} fill className="project-img" />
//                 <div className="project-overlay" />
//                 <div className="project-info">
//                   <h3>{projects[0].title}</h3>
//                   <span>{projects[0].location}</span>
//                 </div>
//                 <button className="project-icon"><ArrowRight size={18} /></button>
//               </div>
//             </motion.div>

//             {/* Column 3: 2 Stacked Images */}
//             <div className="img-col col-3">
//               <motion.div
//                 className="project-card small-card top-card"
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 viewport={{ once: true }}
//               >
//                 <Image src={projects[1].image} alt={projects[1].title} fill className="project-img" />
//                 <div className="project-overlay" />
//                 <div className="project-info">
//                   <h3>{projects[1].title}</h3>
//                   <span>{projects[1].location}</span>
//                 </div>
//                 <button className="project-icon"><ArrowRight size={18} /></button>
//               </motion.div>

//               <motion.div
//                 className="project-card small-card bottom-card"
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.3 }}
//                 viewport={{ once: true }}
//               >
//                 <Image src={projects[2].image} alt={projects[2].title} fill className="project-img" />
//                 <div className="project-overlay" />
//                 <div className="project-info">
//                   <h3>{projects[2].title}</h3>
//                   <span>{projects[2].location}</span>
//                 </div>
//                 <button className="project-icon"><ArrowRight size={18} /></button>
//               </motion.div>
//             </div>

//             {/* Column 4: Medium Image */}
//             <motion.div
//               className="img-col col-4"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               viewport={{ once: true }}
//             >
//               <div className="project-card medium-card">
//                 <Image src={projects[3].image} alt={projects[3].title} fill className="project-img" />
//                 <div className="project-overlay" />
//                 <div className="project-info">
//                   <h3>{projects[3].title}</h3>
//                   <span>{projects[3].location}</span>
//                 </div>
//                 <button className="project-icon"><ArrowRight size={18} /></button>
//               </div>
//             </motion.div>

//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default FeaturedProjects