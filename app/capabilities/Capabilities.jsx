'use client' 
import HeroSectionCapabilities from "@/components/AboutPage/HeroSectionCapabilities";
 
import CapabilitiesSectionCapabilitiesMain from "@/components/HomePage/CapabilitiesSection/CapabilitiesSectionCapabilitiesMain";
import CapabilitiesSectionLeft2MainPortfolio from "@/components/HomePage/CapabilitiesSection/CapabilitiesSectionLeft2MainPortfolio";
import CTASection2 from "@/components/HomePage/CTASection/CTASection2";
import WhyajgroupAboutMain from "@/components/HomePage/Whyajgroup/WhyajgroupAboutMain";
import WhyChooseUsCapabilitiesPageMain from "@/components/HomePage/WhyChooseUs/WhyChooseUsCapabilitiesPageMain";
 
import OurCompaniesGridCapabilities from "@/components/OurCompaniesGrid/OurCompaniesGridCapabilities";
import OurCapabilitiesProcesstimeline from "@/components/OurCompaniesProcesstimeline/OurCapabilitiesProcesstimeline";
import OurCompaniesProcesstimeline from "@/components/OurCompaniesProcesstimeline/OurCompaniesProcesstimeline";
import { ArrowUpNarrowWide, Award, Blocks, Building2, Eye, Globe, Handshake, Hotel, Settings, Shield, ShoppingBag, Star, TrendingUp, User } from "lucide-react";

export default function CapabilitiesPage() {
  return (
    <>
      <HeroSectionCapabilities
        eyebrow="Our Capabilities"
        headline="Built to Turn  Opportunity Into Enterprise"
        body="AJ Group combines capital, entrepreneurial thinking and operating capability to build businesses from the ground up and create platforms for long-term growth. "

        imageSrc="/CapabilitiesFinalImageUpdated.jpg"
        imageAlt="A.J Group Industries"
  
        badge1Icon={Globe}
         
            badge1Value=""
        badge1Label=""
        badge2Value=""
        badge2Label=""

       
        useSpacer={true}
        showFeatures={true}
        showDivider={false}
        showBadge1={true}
        showBadge2={true}
        showDots={true}
        showFrame={true}
        showImageOverlay={true}
      />
      <div className="scroll-content-wrapper">
        
        <WhyajgroupAboutMain
          eyebrow="THE AJ GROUP ADVANTAGE"
          title="Built For The Long Term"
          intro="Capability Creates The Foundations For GrowBuilding a successful business requires more than an idea. It requires the ability to execute. AJ Group brings together the resources, expertise and operating infrastructure needed to take opportunities from concept to execution — and from execution to growth."
          columns={4}
          items={[
            { num: '01', icon: ArrowUpNarrowWide, title: 'Strategy', desc: 'We identify opportunities and determine where we can create meaningful long-term value.', image: '/StrategyCapabilitiesFinalUpdatedImage.jpeg' },
            { num: '02', icon: Blocks, title: 'Build', desc: 'We develop businesses, capabilities and infrastructure from the ground up.', image: '/BuildCapabilitiesFinalUpdatedImage.jpeg' },
            { num: '03', icon: Settings, title: 'Operate', desc: 'We establish the systems, processes and standards required to run strong businesses.', image: '/OperateCapabilitiesFinalUpdatedImage.jpeg' },
            
            { num: '04', icon: TrendingUp, title: 'Scale', desc: 'We strengthen what works, expand into new markets and build platforms for continued growth.', image: '/ScaleCapabilitiesFinalUpdatedImage.jpeg' },
          ]}
        />
        <OurCompaniesGridCapabilities />
        <CapabilitiesSectionCapabilitiesMain
         eyebrow="BEYOND INDIVIDUAL CAPABILITIES"
          title="We Build Around The Opportunity"
          body="Not every opportunity fits neatly into a category. When a business requires capabilities across multiple disciplines, we bring the right resources together to create an integrated solution."         
          showButton={false}
          maxWidth={700}
        />
         
        <OurCapabilitiesProcesstimeline/>
        <WhyChooseUsCapabilitiesPageMain/>
        <CapabilitiesSectionLeft2MainPortfolio/>
        
        <CTASection2
          eyebrow="LET'S BUILD WHAT'S NEXT"
          headline="Have an Opportunity Worth Exploring?"
          body="We are open to conversations around new ventures, strategic partnerships, acquisitions and opportunities for long-term growth."
          primaryButtonText="Partner with AJ Group"
          primaryButtonLink="/consultation"
          secondaryButtonText="Contact Us"
          secondaryButtonLink="/contact"
        />
      </div>
    </>
  )
}