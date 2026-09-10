'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, ShoppingBag, Building2, Hotel, Calendar, Home, Factory, Megaphone } from 'lucide-react';
import '../../components/IndustriesPage/IndustriesGrid.css';
import { div } from 'framer-motion/client';
import '../../components/HomePage/FocusCompanies/FocusCompanies.css'
const INDUSTRIES_DATA = [
  {
    logo: '/Forgentis.png',
    icon: Factory,
    title: 'Fabrication & Manufacturing',
    description: "Advanced fabrication and manufacturing capabilities spanning architectural, structural and decorative metalwork. From precision cutting and milling to welding, finishing and installation, our operating capabilities allow complex physical solutions to move from concept to reality.",
    points: ['Precision', 'Engineering', 'Fabrication', 'Execution',],
    image: '/FabricationManufacturingFinalImageUpdated.jpg',
    // company: 'Forgentis',
  },
  {
    logo: '/PPA.png',
    icon: Building2,
    title: 'Print & Production',
    description: "Commercial print and production capabilities designed to deliver high-quality output across a range of materials and applications. Our infrastructure supports both detailed production and larger-scale execution.",
    points: ['Print', ' Production', 'Large Format', 'Quality'],
    image: '/ppaIndustriesPage.png',
    // company: 'Print Pack Advertising',
  },
  {
    icon: Hotel,
    title: 'Packaging',
    description: "Packaging capabilities spanning custom rigid boxes, presentation cases, structural packaging and premium finishes. We combine design, production and finishing to create packaging that serves both function and experience.",
    points: ['Design', 'Packaging', 'Finishing', 'Production'],
    image: '/PackagingCapbilitiesgridSection.jpg',
    // company: 'Forgentis Fabrications',
  },
    {
      icon: ShoppingBag,
      title: 'Brand Environments',
      description: "Capabilities across signage, displays, retail fixtures, point-of-sale environments and exhibition builds. We translate brand identity into physical spaces and experiences.",
      points: ['Signage', 'POSM ', 'Retail', 'Environments'],
      image: '/BrandandEnvironmentsCapabilities.jpg',
      // company: 'Print Pack Advertising',
    },
  //   {
  //     icon: Home,
  //     title: 'Real Estate & Development',
  //     description: "Developers and property teams need work that is engineered to specification and built to last for the life of a building. A.J Group produces the architectural metalwork, facade elements, signage and wayfinding that define a built environment, delivered through Forgentis Fabrications. Real estate is also a sector where the Group is growing its own footprint.",
  //     points: ['Facade cladding', 'Architectural metal', 'Wayfinding', 'Structural signage'],
  //     image: '/step5.png',
  //     company: 'Forgentis Fabrications',
  //   },
  //   {
  //     icon: Factory,
  //     title: 'Manufacturing',
  //     description: "A.J Group supports other manufacturers and industrial clients with precision fabrication, machined components and volume production, bringing 5-axis CNC and fiber laser capability to briefs that demand tight tolerances and repeatable quality. This work is delivered through Forgentis Fabrications.",
  //     points: ['Precision fabrication', 'Machined components', 'Volume production', 'Laser cutting'],
  //     image: '/forgentis.jpeg',
  //     company: 'Forgentis Fabrications',
  //   },
  //   {
  //     icon: Megaphone,
  //     title: 'Advertising & Marketing',
  //     description: "For agencies and marketing teams, A.J Group is the production partner that turns creative into physical reality: large-format print, POSM, displays and packaging, produced at the quality and scale a campaign needs. This is delivered through Print Pack Advertising.",
  //     points: ['Large-format print', 'POSM', 'Packaging', 'Campaign production'],
  //     image: '/step1.png',
  //     company: 'Print Pack Advertising',
  //   },
];

export default function OurCompaniesGridCapabilities({
  industries = INDUSTRIES_DATA,
  showCompany = true,
  showPoints = true,
  // Content Props
  eyebrow = 'Operating Capabilities',
  headline = 'The Infrastructure Behind The Group',
  headline2 = 'Build With Us',
  bgColor = 'var(--color-black)',
  dec = "Our operating companies give AJ Group practical capabilities across several areas of production and execution. These capabilities provide a strong foundation for the businesses we operate today — and the opportunities we pursue tomorrow.",
  animationDelay = 0,
  showHeader = true,

}) {
  return (
    <>
      <section className="aj-industries-grid-section">
        <div className="container2">
          {/* Header */}
          {showHeader && (
            <motion.div
              className="aj-focus-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: animationDelay, ease: [0.22, 1, 0.36, 1] }}
            >
              {eyebrow && <span className="aj-focus-eyebrow">{eyebrow}</span>}
              {headline && <h2 className="aj-focus-headline">{headline}</h2>}
              {dec && <h2 className="why-choose-description" style={{ width: '700px', marginBottom: '20px' }}>{dec}</h2>}
              {/* {headline2 && <h2 className="aj-focus-headline">{headline2}</h2>} */}
              {/* {headline2 && <span className="aj-focus-line" style={{ marginBottom: '-40px' }} >{headline2}</span>} */}
            </motion.div>
          )}
        </div>
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

                    <h3 className="aj-industry-card-title">{industry.title}</h3>

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
                        Delivered through: <strong>{industry.company}</strong>
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    </>
  );
}