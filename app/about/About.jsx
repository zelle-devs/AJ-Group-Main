"use client"
import AboutSection from "@/components/AboutPage/AboutSection";
import OurStory from "@/components/AboutPage/OurStory"; 
import CTASection2 from "@/components/HomePage/CTASection/CTASection2";
import { Target, Eye, Award, Star, Handshake, Shield, Users, Globe, Factory, Printer, Package, Rocket, TrendingUp, Lightbulb, Settings, Leaf } from 'lucide-react';
 
import WhyChooseUsAboutPageMain from "@/components/HomePage/WhyChooseUs/WhyChooseUsAboutPageMain";
import CapabilitiesSectionAboutMain from "@/components/HomePage/CapabilitiesSection/CapabilitiesSectionAboutMain";
import WhyajgroupAboutMain from "@/components/HomePage/Whyajgroup/WhyajgroupAboutMain";
import CapabilitiesSectionAbout2MainPortfolio from "@/components/HomePage/CapabilitiesSection/CapabilitiesSectionAbout2MainPortfolio";
import GroupatglanceNewUpdatedAboutMain from "@/components/HomePage/Groupatglance/GroupatglanceNewUpdatedAboutMain";
import ProcesstimelineAboutMain from "@/components/HomePage/Processtimeline/ProcesstimelineAboutMain";
import CapabilitiesSectionGlanceTextHome from "@/components/HomePage/CapabilitiesSection/CapabilitiesSectionGlanceTextHome";

export default function AboutPage() {
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
          title="Think Long Term, Build With Purpose"
          body="We don't believe in building businesses simply to make them bigger. We believe in building them better. That means making thoughtful Innovations, developing strong operations, creating capable teams and continuously looking for opportunities to expand.
                Our businesses may operate in different sectors, but the principles behind them remain the same "
          showButton={false}
          maxWidth={700}
        />
        <OurStory />

          
        <WhyajgroupAboutMain
          eyebrow="OUR APPROACH"
          title="Built For The Long Term"
          intro="The same values apply across every business in AJ Group."
          columns={5}
          items={[
            { num: '01', icon: Shield, title: 'Long Term Ownership', desc: 'We think beyond immediate returns and build with the future in mind.', image: '/Integrity_cards_whyAJ.jpeg' },
            { num: '02', icon: Lightbulb, title: 'Entrepreneurial Thinking', desc: 'We move with the mindset of builders — decisive, adaptable and focused on opportunity.', image: '/EntrpreneuralThinkingFinalUpdatedImage.jpeg' },
            { num: '03', icon: Settings, title: 'Operational Excellence', desc: 'We believe strong businesses are built on strong fundamentals, disciplined execution and high standards.', image: '/OperationalExcellenceFinalUpdatedImage.jpeg' },
            { num: '04', icon: Leaf, title: 'Sustainable Growth', desc: 'We pursue growth that creates a stronger business, not simply a larger one.', image: '/SustainableGrowthFinalUpdatedImage.jpeg' },
          ]}
        />

        {/* 06. HOW WE BUILD - Text-led band */}
        <CapabilitiesSectionAbout2MainPortfolio
          eyebrow="OUR PORTFOLIO"
          title="A Diversified Group in the Making "
          body="AJ Group's portfolio is growing across businesses, sectors and opportunities. Our current businesses represent where we are today.They do not define where we are going."
          align="center"
          showButton={true}
          maxWidth={800}
        />

      

        
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
       


      
        <ProcesstimelineAboutMain
          eyebrow="THE FUTURE"
          title="There is More To Build"
          description="The businesses we have today are only part of the story. We are continuing to explore new opportunities, new sectors and new ways to create value.Because the goal is not simply to build a collection of businesses."
          steps={[
            { num: '01', title: 'Strength to Grow', desc: 'The capabilities, resources, and scale to keep moving forward.' },
            { num: '02', title: 'Discipline to Endure', desc: 'Strong foundations, consistent standards, and the discipline to endure.' },
            { num: '03', title: 'Ambition to Become More', desc: 'A long-term vision to grow beyond individual businesses into something much larger.' },
            
          ]}
        />

        <CTASection2
          eyebrow="Get In Touch"
          headline="Build Something Bigger"
          body="If you see an opportunity worth exploring, we want to hear about it. Whether you're an entrepreneur, investor, business owner or strategic partner, AJ Group is open to conversations that can lead to something meaningful"
          primaryButtonText="Partner With AJ Group"
          primaryButtonLink="/consultation"
           secondaryButtonText="Contact Us"
          secondaryButtonLink="/contact"
        />
      </div>
    </>
  )
}

