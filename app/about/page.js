'use client'
import AboutSection from "@/components/AboutPage/AboutSection";
import OurStory from "@/components/AboutPage/OurStory";
import CapabilitiesSection from "@/components/HomePage/CapabilitiesSection/CapabilitiesSection";
import GroupAtGlance from "@/components/HomePage/Groupatglance/Groupatglance";
import FocusCompanies from "@/components/HomePage/FocusCompanies/FocusCompanies";
import TeamScrollSlider from "@/components/HomePage/Teamscrollslider/Teamscrollslider";
import ProcessTimeline from "@/components/HomePage/Processtimeline/Processtimeline";
import CTASection2 from "@/components/HomePage/CTASection/CTASection2";
import { Target, Eye, Award, Star, Handshake, Shield, Users, Globe, Factory, Printer, Package, Rocket } from 'lucide-react';
import WhyAJGroup from "@/components/HomePage/Whyajgroup/Whyajgroup";

export default function About() {
  return (
    <>
      <AboutSection />
      <div className="scroll-content-wrapper">
        <OurStory />
        
        {/* 03. OUR VISION */}
        <CapabilitiesSection 
          eyebrow="Our Vision"
          title="Where We Are Headed."
          body="To be recognized as a diversified business group that brings genuine expertise together under one vision and one standard, building strong companies and distinctive brands that serve evolving markets, and creating lasting value as we grow."
          showButton={false}
          maxWidth={700}
        />

        {/* 04. OUR MISSION */}
        <CapabilitiesSection 
          eyebrow="Our Mission"
          title="What We Set Out to Do."
          body="To bring diverse businesses and capabilities together under one Group so we create value at every level, for clients, for partners and for the markets we serve, delivering work of a consistently high standard and building businesses that last."
          showButton={false}
          maxWidth={700}
        />

        {/* 05. OUR VALUES - Five-value grid */}
        <WhyAJGroup 
          eyebrow="Our Values"
          title="The Standards Behind the Work."
          intro="The same values apply across every business in A.J Group."
          columns={5}
          items={[
            { num: '01', icon: Shield, title: 'Integrity', desc: 'Honest work, clear communication.', image: '/Integrity_cards_whyAJ.jpeg' },
            { num: '02', icon: Award, title: 'Excellence', desc: 'Never compromise on quality.', image: '/Excellence_cards_whyAJ.jpeg' },
            { num: '03', icon: Handshake, title: 'Accountability', desc: 'We own the whole outcome.', image: '/Accountability_cards_whyAJ.jpeg' },
            { num: '04', icon: Star, title: 'Craftsmanship', desc: 'Every detail matters.', image: '/Craftmanship_cards_whyAJ.jpeg' },
            { num: '05', icon: Eye, title: 'Vision', desc: 'Building for the long term.', image: '/Vision_cards_whyAJ.jpeg' },
          ]}
        />

        {/* 06. HOW WE BUILD - Text-led band */}
        <CapabilitiesSection 
          eyebrow="How We Build"
          title="Building Businesses That Last."
          body="A.J Group is built for the long term. We would rather build strong, capable businesses that hold their standard for years than chase short-term growth. That means investing in people, equipment and process, keeping quality consistent as we grow, letting each business stay genuinely expert in its field while sharing the resources of the Group, and moving into new sectors where we can hold the same standard."
          align="center"
          showButton={false}
          maxWidth={800}
        />

        {/* 07. GROWTH AND SCALE - Milestones timeline */}
        <OurStory 
          eyebrow="Growth and Scale"
          headline="Growing Capability Over Time."
          body="A.J Group has grown its capability steadily, adding businesses, equipment, expertise and new sectors as the work has called for it. Across the Group we have delivered [PROJECTS DELIVERED] projects and now serve [INDUSTRIES SERVED] industries, with real estate and emerging sectors part of a growing footprint and the capacity to take on more."
          milestones={[
            { icon: Factory, year: '[YEAR 1]', title: 'Foundation', desc: 'Core specialism established' },
            { icon: Printer, year: '[YEAR 2]', title: 'Print & Packaging', desc: 'Expanded into commercial print' },
            { icon: Package, year: '[YEAR 3]', title: 'Advertising', desc: 'Added advertising production' },
            { icon: Target, year: '[YEAR 4]', title: 'Consumer Brands', desc: 'Launched design brands' },
            { icon: Rocket, year: 'Today', title: 'Real Estate & Emerging', desc: 'New sectors expansion' },
          ]}
        />

        {/* 08. BY THE NUMBERS - Six-stat band */}
        <GroupAtGlance 
          eyebrow="By the Numbers"
          headline="The Group at a Glance."
          stats={[
            { value: '2', label: 'Years in operation' },
            { value: '4', label: 'Expert businesses' },
            { value: '15', label: 'Projects delivered' },
            { value: '50+', label: 'People across the Group' },
            { value: '1.3', label: 'Production space' },
            { value: '4', label: 'Industries served' },
          ]}
          statsGrid="3x2"
          orbitIcons={[Factory, Printer, Package, Users, Globe, Award]}
        />

        {/* 09. OUR STRUCTURE - Four businesses */}
        <FocusCompanies 
          eyebrow="Our Structure"
          headline="One Group, Four Expert Businesses."
          companies={[
            {
              logo: '/Forgentis.png',
              subtitle: 'FABRICATIONS',
              description: 'Architectural metal fabrication: 5-axis CNC milling, fiber laser cutting, structural signage, and facade cladding.',
              buttonText: 'Explore Forgentis',
              buttonLink: '/forgentis',
              image: '/step4.png',
              imagePosition: 'left',
              shadowColor: 'rgba(59, 130, 246, 0.4)',
            },
            {
              logo: '/PPA.png',
              subtitle: 'PRINT PACK ADVERTISING',
              description: 'Print, packaging, and advertising production: large-format UV printing, custom rigid-box packaging.',
              buttonText: 'Explore PPA',
              buttonLink: '/ppa',
              image: '/PPA_Infocus.png',
              imagePosition: 'right',
              shadowColor: 'rgba(234, 179, 8, 0.4)',
            },
            {
              logo: '/Forgentis.png',
              subtitle: 'Beyvora Decor',
              description: 'Direct-to-consumer design brands: textured, LED, and metal wall art for the home.',
              buttonText: 'Explore Beyvora',
              buttonLink: '/beyvora',
              image: '/Beyvora_Decor.png',
              imagePosition: 'left',
              shadowColor: 'rgba(200, 165, 74, 0.4)',
            },
            {
              logo: '/PPA.png',
              subtitle: 'Imprint Galerie',
              description: 'Design house for personal objects and considered gifting: premium cases and bespoke keepsakes.',
              buttonText: 'Explore Imprint',
              buttonLink: '/imprint',
              
              image: '/Imprint_Galerie_grid.png',
              imagePosition: 'right',
              shadowColor: 'rgba(168, 159, 145, 0.4)',
            },
          ]}
        />

        {/* 10. LEADERSHIP - Teaser */}
        <TeamScrollSlider 
          eyebrow="Leadership"
          titleLine1="The People Behind"
          titleLine2="the Group."
          body="A.J Group is led by a team focused on building strong businesses and the capabilities behind them, and on holding a consistent standard across everything the Group makes."
          buttonText="Meet Our Leadership"
          buttonLink="/leadership"
          cards={[
            { id: 1, image: '/ceo.jpg', name: '[Leader Name]', designation: '[Title]' },
            { id: 2, image: '/lead.jpg', name: '[Leader Name]', designation: '[Title]' },
            { id: 3, image: '/3.jpg', name: '[Leader Name]', designation: '[Title]' },
            { id: 4, image: '/ceo.jpg', name: '[Leader Name]', designation: '[Title]' },
          ]}
        />

        {/* 11. WHY THE GROUP - Five-pillar band */}
        <ProcessTimeline 
          eyebrow="Why The Group"
          title="One Group. Many Skills. One Standard."
          description="The advantage of A.J Group is simple: expert depth and group range, held to a single standard."
          steps={[
            { num: '01', title: 'Expert Depth', desc: 'Specialists in each field with deep knowledge.' },
            { num: '02', title: 'Group Range', desc: 'Diverse capabilities under one roof.' },
            { num: '03', title: 'One Standard', desc: 'Consistent quality across every business.' },
            { num: '04', title: 'Shared Resources', desc: 'Group strength and shared infrastructure.' },
            { num: '05', title: 'Lasting Value', desc: 'Built for the long term, not short-term.' },
          ]}
        />

        {/* 12. CLOSING CTA */}
        <CTASection2 
          eyebrow="Get In Touch"
          headline="Want to Know What the Group Can Do?"
          body="Whether you have a defined project or are just exploring, A.J Group is glad to talk."
          primaryButtonText="Start a Project"
          primaryButtonLink="/consultation"
          secondaryButtonText="Contact the Group"
          secondaryButtonLink="/contact"
        />
      </div>
    </>
  )
}

// import AboutSection from "@/components/AboutPage/AboutSection";
// import OurStory from "@/components/AboutPage/OurStory";

// export default function About() {
//   return (
//     <>
//       <AboutSection />
//       <div className="scroll-content-wrapper">
//       <OurStory/>

// </div>
//     </>
//   )
// }