'use client'
import AboutSection from "@/components/AboutPage/AboutSection";
import OurStory from "@/components/AboutPage/OurStory";
import CapabilitiesSection from "@/components/HomePage/CapabilitiesSection/CapabilitiesSection.jsx";
import GroupAtGlance from "@/components/HomePage/Groupatglance/Groupatglance";
import FocusCompanies from "@/components/HomePage/FocusCompanies/FocusCompanies";
import TeamScrollSlider from "@/components/HomePage/Teamscrollslider/Teamscrollslider";
import ProcessTimeline from "@/components/HomePage/Processtimeline/Processtimeline";
import CTASection2 from "@/components/HomePage/CTASection/CTASection2";
import { Target, Eye, Award, Star, Handshake, Shield, Users, Globe, Factory, Printer, Package, Rocket } from 'lucide-react';
import WhyAJGroup from "@/components/HomePage/Whyajgroup/Whyajgroup";
import WhyChooseUs from "@/components/HomePage/WhyChooseUs/WhyChooseUs";
import WhyChooseUsAboutPageMain from "@/components/HomePage/WhyChooseUs/WhyChooseUsAboutPageMain";
import ViewOurPortfolioDesignAboutMain from "@/components/ViewOurPortfolioDesign/ViewOurPortfolioDesignAboutMain";
import CapabilitiesSectionAboutMain from "@/components/HomePage/CapabilitiesSection/CapabilitiesSectionAboutMain";
import WhyajgroupAboutMain from "@/components/HomePage/Whyajgroup/WhyajgroupAboutMain";
import CapabilitiesSectionAbout2MainPortfolio from "@/components/HomePage/CapabilitiesSection/CapabilitiesSectionAbout2MainPortfolio";
import GroupatglanceNewUpdatedAboutMain from "@/components/HomePage/Groupatglance/GroupatglanceNewUpdatedAboutMain";
import ProcesstimelineAboutMain from "@/components/HomePage/Processtimeline/ProcesstimelineAboutMain";
import CapabilitiesSectionGlanceTextHome from "@/components/HomePage/CapabilitiesSection/CapabilitiesSectionGlanceTextHome";

export default function About() {
  return (
    <>
        <style>{`
  .mobile-only-glance {
    display: none; /* By default hidden on all screens */
  }
  
  /* Sirf 300px se 500px ke darmiyan show hoga */
  @media screen and (min-width: 300px) and (max-width: 430px) {
    .mobile-only-glance {
      display: block;
    }
    .mobile-only-glance p{
    font-size: 11px ;
    line-height: 18px;}
  }
`}</style>
      <AboutSection />
      <div className="scroll-content-wrapper">
        <WhyChooseUsAboutPageMain />
        <CapabilitiesSectionAboutMain
          eyebrow="OUR THINKING"
          title="Think Long Term Build With Purpose"
          body="We don't believe in building businesses simply to make them bigger.
We believe in building them better.
That means making thoughtful Innovations, developing strong operations, creating capable teams and continuously looking for opportunities to expand.
Our businesses may operate in different sectors, but the principles behind them remain the same
"
          showButton={false}
          maxWidth={700}
        />
        <OurStory />

        {/* 03. OUR VISION */}
        {/* <CapabilitiesSection
          eyebrow="Our Vision"
          title="Where We Are Headed"
          body="To be recognized as a diversified business group that brings genuine expertise together under one vision and one standard, building strong companies and distinctive brands that serve evolving markets, and creating lasting value as we grow."
          showButton={false}
          maxWidth={700}
        /> */}

        {/* 04. OUR MISSION */}
        {/* <CapabilitiesSection
          eyebrow="Our Mission"
          title="What We Set Out to Do"
          body="To bring diverse businesses and capabilities together under one Group so we create value at every level, for clients, for partners and for the markets we serve, delivering work of a consistently high standard and building businesses that last."
          showButton={false}
          maxWidth={700}
        /> */}

        {/* 05. OUR VALUES - Five-value grid */}
        <WhyajgroupAboutMain
          eyebrow="OUR APPROACH"
          title="Built For The Long Term"
          intro="The same values apply across every business in A.J Group."
          columns={5}
          items={[
            { num: '01', icon: Shield, title: 'Long Term Ownership', desc: 'We think beyond immediate returns and build with the future in mind.', image: '/Integrity_cards_whyAJ.jpeg' },
            // { num: '02', icon: Award, title: 'Strategic Invest', desc: 'We look for opportunities where capital, strategy and execution can unlock meaningful potential.', image: '/Excellence_cards_whyAJ.jpeg' },
            { num: '02', icon: Handshake, title: 'Entrepreneurial Thinking', desc: 'We move with the mindset of builders — decisive, adaptable and focused on opportunity.', image: '/Accountability_cards_whyAJ.jpeg' },
            { num: '03', icon: Star, title: 'Operational Excellence', desc: 'We believe strong businesses are built on strong fundamentals, disciplined execution and high standards.', image: '/Craftmanship_cards_whyAJ.jpeg' },
            { num: '04', icon: Eye, title: 'Sustainable Growth', desc: 'We pursue growth that creates a stronger business, not simply a larger one.', image: '/Vision_cards_whyAJ.jpeg' },
          ]}
        />

        {/* 06. HOW WE BUILD - Text-led band */}
        <CapabilitiesSectionAbout2MainPortfolio
          eyebrow="OUR PORTFOLIO"
          title="A Diversified Group in The Making "
          body="AJ Group's portfolio is growing across businesses, sectors and opportunities. Our current businesses represent where we are today.They do not define where we are going."
          align="center"
          showButton={true}
          maxWidth={800}
        />

        {/* 07. GROWTH AND SCALE - Milestones timeline */}
        {/* <OurStory 
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
        /> */}

        {/* 08. BY THE NUMBERS - Six-stat band */}
        <GroupatglanceNewUpdatedAboutMain />
                  <div className="mobile-only-glance">
            <CapabilitiesSectionGlanceTextHome 
              eyebrow={false}
              title="Building Towards Bigger"
              body="Group is not being built for a single market, a single industry or a single generation of opportunity. We are building a diversified enterprise capable of moving into new sectors,creating new businesses and acquiring established ones. Not through growth for growths sake.Through strong businesses, strategic ownership, disciplined expansion and lasting value creation."
              buttonText="Meet Our Leadership"
              buttonLink="/leadership"
              showButton={false}
            />
          </div>
        {/* 09. OUR STRUCTURE - Four businesses */}
        {/* <FocusCompanies 
          eyebrow="Our Structure"
          headline="One Group, Four Expert Businesses"
          companies={[
            {
              logo: '/Forgentis.png',
              subtitle: 'FABRICATIONS',
              description: 'Architectural metal fabrication: 5-axis CNC milling, fiber laser cutting, structural signage, and facade cladding.',
              buttonText: 'Explore Forgentis',
              buttonLink: '#',
              image: '/step4.png',
              imagePosition: 'left',
              shadowColor: 'rgba(59, 130, 246, 0.4)',
            },
            {
              logo: '/PPA.png',
              subtitle: 'PRINT PACK ADVERTISING',
              description: 'Print, packaging, and advertising production: large-format UV printing, custom rigid-box packaging.',
              buttonText: 'Explore PPA',
              buttonLink: '#',
              image: '/ppaIndustriesPage.png',
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
        /> */}

        {/* 10. LEADERSHIP - Teaser */}
        {/* <TeamScrollSlider 
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
        /> */}

        {/* 11. WHY THE GROUP - Five-pillar band */}
        <ProcesstimelineAboutMain
          eyebrow="THE FUTURE"
          title="There is More To Build"
          description="The businesses we have today are only part of the story. We are continuing to explore new opportunities, new sectors and new ways to create value.Because the goal is not simply to build a collection of businesses."
          steps={[
            { num: '01', title: 'Strength to Grow', desc: 'The capabilities, resources, and scale to keep moving forward.' },
            { num: '02', title: 'Discipline to Endure', desc: 'Strong foundations, consistent standards, and the discipline to endure.' },
            { num: '03', title: 'Ambition to Become More', desc: 'A long-term vision to grow beyond individual businesses into something much larger.' },
            // { num: '04', title: 'Shared Resources', desc: 'Group strength and shared infrastructure.' },
            // { num: '05', title: 'Lasting Value', desc: 'Built for the long term, not short-term.' },
          ]}
        />

        {/* 12. CLOSING CTA */}
        <CTASection2
          eyebrow="Get In Touch"
          headline="Build Something Bigger"
          body="If you see an opportunity worth exploring, we want to hear about it. Whether you're an entrepreneur, investor, business owner or strategic partner, AJ Group is open to conversations that can lead to something meaningful"
          primaryButtonText="Partner With AJ"
          primaryButtonLink="/contact"
          secondaryButtonText="Start A Project"
          secondaryButtonLink="/consultation"
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