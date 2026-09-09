'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, ShoppingBag, Building2, Hotel, Calendar, Home, Factory, Megaphone, Briefcase, Store, Layers, Layers2 } from 'lucide-react';
import './IndustriesGrid.css';

const INDUSTRIES_DATA = [
  {
    icon: Factory,
    title: 'Building The Foundations of Businesses',
    eyebrow: 'INDUSTRIAL',
    description: "Our industrial capabilities give the Group experience in manufacturing, engineering, fabrication and physical production.These capabilities provide a strong operational foundation — while creating opportunities to build and scale businesses within the industrial ecosystem",
    points: ['Engineering', 'Manufacturing', 'Fabrication', 'Production'],
    image: '/BuildingFoundationBusinessUpdatedFinalImages.png',
    company: 'Print Pack Advertising',
  },
  {
    icon: Briefcase,
    title: 'Where Business Meet Experiences',
   eyebrow: 'COMMERCIAL',
    description: "From corporate environments to retail and commercial spaces, we understand the importance of execution, presentation and consistency. Our operating capabilities allow us to participate across the commercial ecosystem while creating opportunities for broader business growth.",
   points: ['Retail', 'Corporate', 'Commercial', 'Brand Environment'],
    image: '/CommercialBusinnessMeetExperience.jpeg',
    company: 'Forgentis + PPA',
  },
  {
    icon: Store,
    title: 'Building for The End Customer',
    eyebrow: 'Consumer ',
    description: "Consumer markets create opportunities to build brands, products and businesses around changing customer needs.AJ Group continues to explore opportunities where strong concepts, disciplined execution and long-term ownership can create meaningful consumer businesses.",
    points: ['Production', 'Brands', 'Lifestyle', 'Commerce'],
    image: '/HospitalityIndustires.jpg',
    company: 'Forgentis Fabrications',
  },
  {
    icon: Home,
    title: 'Building Beyond The Business',
    eyebrow: 'REAL ESTATE',
    description: "Real estate represents more than physical assets. It creates opportunities to develop, operate and build long-term value. AJ Group sees potential across property, development and the wider ecosystem surrounding the built environment.",
    points: ['Property', 'Development', 'Opportunity'],
    image: '/RealEstateFinalUpdatedImage.jpeg',
    company: 'Print Pack Advertising',
  },
  {
    icon: Layers2,
    title: 'Knowledge , Execution, Scale',
  eyebrow: 'SERVICES',
    description: "Businesses increasingly compete through the quality of the services, systems and experiences they provide.We remain open to opportunities across service-driven sectors where strong execution and scalable models can create sustainable growth.",
    points: ['Services', 'Operations', 'Technology', 'Business Solutions'],
    image: '/ServicesFinalUpdatedImage.jpeg',
    company: 'Forgentis Fabrications',
  },
  // {
  //   icon: Factory,
  //   title: 'Manufacturing',
  //   eyebrow: 'EMERGING OPPORTUNITIES',
  //   description: "A.J Group supports other manufacturers and industrial clients with precision fabrication, machined components and volume production, bringing 5-axis CNC and fiber laser capability to briefs that demand tight tolerances and repeatable quality. This work is delivered through Forgentis Fabrications.",
  //   points: ['Precision fabrication', 'Machined components', 'Volume production', 'Laser cutting'],
  //   image: '/forgentis.jpeg',
  //   company: 'Forgentis Fabrications',
  // },
  // {
  //   icon: Megaphone,
  //   title: 'Advertising & Marketing',
  //  eyebrow: '',
  //   description: "For agencies and marketing teams, A.J Group is the production partner that turns creative into physical reality: large-format print, POSM, displays and packaging, produced at the quality and scale a campaign needs. This is delivered through Print Pack Advertising.",
  //   points: ['Large-format print', 'POSM', 'Packaging', 'Campaign production'],
  //   image: '/AdvertisingAndMArketingIndustries.jpg',
  //   company: 'Print Pack Advertising',
  // },
];

export default function IndustriesGrid({
  industries = INDUSTRIES_DATA,
  showCompany = true,
  showPoints = true,
}) {
  return (
    <section className="aj-industries-grid-section">
      <div className="container2">
        <div className="aj-industries-cards">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                className={`aj-industry-card ${isEven ? 'image-left' : 'image-right'}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Image */}
                <div className="aj-industry-card-image">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="aj-industry-card-img"
                  />
                  <div className="aj-industry-card-overlay" />
                </div>

                {/* Content */}
                <div className="aj-industry-card-content">
                  <div className="aj-industry-card-icon">
                    <Icon size={24} />
                  </div>
                  
                  <span className="aj-cap-eyebrow">{industry.eyebrow}</span>
                  <h3 className="aj-industry-card-title" style={{marginTop:'-20px'}}>{industry.title}</h3>
                  
                  <p className="aj-industry-card-desc">{industry.description}</p>
                  {showPoints && industry.points && (
                    <div className="aj-industry-card-points">
                      {industry.points.map((point, i) => (
                        <span key={i} className="aj-industry-point">
                          {point}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {showCompany && industry.company && (
                    <span className="aj-industry-card-company">
                      {/* Delivered through: <strong>{industry.company}</strong> */}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}