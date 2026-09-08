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
    icon: ShoppingBag,
    title: 'Engineering Possibility',
    description: "A wholly owned AJ Group company operating in architectural and metal fabrication. Forgentis combines technical expertise, precision and execution to deliver complex physical solutions.",
    points: ['Engineering', 'Fabrication', 'Execution',],
    image: '/step1.png',
    // company: 'Forgentis',
  },
  {
    logo: '/PPA.png',
    icon: Building2,
    title: 'Where Ideas Meet Execution',
    description: "A wholly owned AJ Group company focused on commercial print, packaging and brand execution. PPA brings together creative production, physical communication and operational capability.",
    points: ['Print', ' Packaging', 'Brand Execution',],
    image: '/ppaIndustriesPage.png',
    // company: 'Print Pack Advertising',
  },
  //   {
  //     icon: Hotel,
  //     title: 'Hospitality',
  //     description: "Hotels, restaurants and venues depend on atmosphere and detail, and on finishes that stand up to constant use. A.J Group fabricates and finishes the metalwork, feature installations and signage that give hospitality spaces their character, delivered largely through Forgentis Fabrications.",
  //     points: ['Feature metalwork', 'Backlit installations', 'Signage', 'Bespoke fixtures'],
  //     image: '/step3.png',
  //     company: 'Forgentis Fabrications',
  //   },
  //   {
  //     icon: Calendar,
  //     title: 'Events & Exhibitions',
  //     description: "Events run on tight deadlines and high stakes. A.J Group designs and builds exhibition stands, displays and branded environments that command attention on the floor and are ready on time, delivered through Print Pack Advertising.",
  //     points: ['Exhibition stands', 'Displays', 'Event branding', 'POSM'],
  //     image: '/step4.png',
  //     company: 'Print Pack Advertising',
  //   },
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

export default function OurCompaniesGridPorfolio({
  industries = INDUSTRIES_DATA,
  showCompany = true,
  showPoints = true,
  // Content Props
  eyebrow = 'Our Portfolio',
  headline = 'Built to Grow, Owned for The Long Term',
  headline2 = 'Build With Us',
  bgColor = 'var(--color-black)',
  dec = "Our current operating companies form the foundation of AJ Group. They represent where we are today — while our ambition extends well beyond them.",
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
                    
                      {/* Icon hata kar Next.js Image component add kiya hai */}
                      {industry.logo && (
                        <Image
                          src={industry.logo}
                          alt={`${industry.title} Logo`}
                          width={200} // Aap apni design ke hisaab se width adjust kar sakte hain
                          height={160} // Aap apni design ke hisaab se height adjust kar sakte hain
                          style={{ objectFit: 'contain' }}
                        />
                      )}
                    

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