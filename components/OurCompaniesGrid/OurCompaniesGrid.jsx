'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, ShoppingBag, Building2, Hotel, Calendar, Home, Factory, Megaphone } from 'lucide-react';
import '../../components/IndustriesPage/IndustriesGrid.css';

const INDUSTRIES_DATA = [
  {
    icon: ShoppingBag,
    title: 'Forgentis Fabrications',
    description: "Forgentis Fabrications is the group's architectural metal fabrication company. We design, engineer, and manufacture in metal, from precision components to large-scale structural work, for clients who need it built exactly right.",
    points: ['Commercial Development','Architecture and Interiors', 'Structural Engineering','Corporate Projects' ],
    image: '/step1.png',
    // company: 'Forgentis',
  },
  {
    icon: Building2,
    title: 'Print Pack Advertising (PPA)',
    description: "Print Pack Advertising is the group's print, packaging, and advertising company. We produce large-format print, custom packaging, and brand environments at commercial scale, with the finishing quality premium brands demand.",
    points: ['Retail and FMCG', ' Brand and Marketing Teams', 'Creative Agencies', 'Events and Exhibitions'],
    image: '/step2.png',
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

export default function OurCompaniesGrid({
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
  );
}