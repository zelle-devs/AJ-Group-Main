'use client'
import AboutSection from "@/components/AboutPage/AboutSection";
import HeroSectionCapabilities from "@/components/AboutPage/HeroSectionCapabilities";
import CapabilitiesCustomSolutions from "@/components/CapabilitiesCustomSolutions/CapabilitiesCustomSolutions";
import CapabilitiesWhyChooseUs from "@/components/CapabilitiesWhyChooseUs/CapabilitiesWhyChooseUs";
import CapabilitiesSection from "@/components/HomePage/CapabilitiesSection/CapabilitiesSection.jsx";
import CapabilitiesSectionCapabilitiesMain from "@/components/HomePage/CapabilitiesSection/CapabilitiesSectionCapabilitiesMain";
import CTASection2 from "@/components/HomePage/CTASection/CTASection2";
import WhyajgroupAboutMain from "@/components/HomePage/Whyajgroup/WhyajgroupAboutMain";
import WhyChooseUsCapabilitiesPageMain from "@/components/HomePage/WhyChooseUs/WhyChooseUsCapabilitiesPageMain";
import IndustriesGrid from "@/components/IndustriesPage/IndustriesGrid";
import IndustriesHero from "@/components/IndustriesPage/IndustriesHero";
import OurCapabilitiesGridSectionsGrid from "@/components/OurCapabilitiesGridSectionsGrid/OurCapabilitiesGridSectionsGrid";
import OurCompaniesCapabilities from "@/components/OurCompaniesCapabilities/OurCompaniesCapabilities";
import OurCompaniesFeaturedProjects from "@/components/OurCompaniesFeaturedProjects/OurCompaniesFeaturedProjects";
import OurCompaniesGrid from "@/components/OurCompaniesGrid/OurCompaniesGrid";
import OurCompaniesGridCapabilities from "@/components/OurCompaniesGrid/OurCompaniesGridCapabilities";
import OurCapabilitiesProcesstimeline from "@/components/OurCompaniesProcesstimeline/OurCapabilitiesProcesstimeline";
import OurCompaniesProcesstimeline from "@/components/OurCompaniesProcesstimeline/OurCompaniesProcesstimeline";
import { ArrowUpNarrowWide, Award, Blocks, Building2, Eye, Globe, Handshake, Hotel, Settings, Shield, ShoppingBag, Star, TrendingUp, User } from "lucide-react";

export default function Capabilities() {
  return (
    <>
      <HeroSectionCapabilities
        eyebrow="Our Capabilities"
        headline="Built to Turn  Opportunity Into Enterprise"
        body="AJ Group combines capital, entrepreneurial thinking and operating capability to build businesses from the ground up and create platforms for long-term growth. "

        imageSrc="/CapabilitiesFinalImageUpdated.jpg"
        imageAlt="A.J Group Industries"

        // Features - Industry sectors
        // features={[
        //   { icon: ShoppingBag, label: 'Retail' },
        //   { icon: Building2, label: 'Corporate' },
        //   { icon: Hotel, label: 'Hospitality' },
        // ]}

        // Badges
        badge1Icon={Globe}
        // badge1Value="25+"
        // badge1Label="In-House Finishing"
        // badge2Value="30+"
        // badge2Label="Specialist"    
            badge1Value=""
        badge1Label=""
        badge2Value=""
        badge2Label=""

        // Layout
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
        {/* <CapabilitiesSection
          eyebrow="Built On Expertise"
          title="Depth In Every Discipline."
          body="We don't spread ourselves thin. Each company exists because we knew we could be excellent at it: the right machinery, the right specialists, and years of hard-won know-how. That is why clients trust us with work that has no margin for error."
          showButton={false}
          maxWidth={700}
          /> */}
        <WhyajgroupAboutMain
          eyebrow="THE AJ GROUP ADVANTAGE"
          title="Built For The Long Term"
          intro="Capability Creates The Foundations For GrowBuilding a successful business requires more than an idea. It requires the ability to execute. AJ Group brings together the resources, expertise and operating infrastructure needed to take opportunities from concept to execution — and from execution to growth "
          columns={4}
          items={[
            { num: '01', icon: ArrowUpNarrowWide, title: 'Strategy', desc: 'We identify opportunities and determine where we can create meaningful long-term value.', image: '/StrategyCapabilitiesFinalUpdatedImage.jpeg' },
            { num: '02', icon: Blocks, title: 'Build', desc: 'We develop businesses, capabilities and infrastructure from the ground up.', image: '/BuildCapabilitiesFinalUpdatedImage.jpeg' },
            { num: '03', icon: Settings, title: 'Operates', desc: 'We establish the systems, processes and standards required to run strong businesses.', image: '/OperateCapabilitiesFinalUpdatedImage.jpeg' },
            
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
        {/* <OurCompaniesProcesstimeline/> */}
        {/* <OurCompaniesFeaturedProjects/> */}
        {/* <CapabilitiesWhyChooseUs /> */}
        <OurCapabilitiesProcesstimeline/>
        <WhyChooseUsCapabilitiesPageMain/>
        <CTASection2
          eyebrow="Get To Know Each Company"
          headline="Not Sure Where To Start?"
          body="A.J Group's capabilities cross sectors, and some of the Group's best work has been for clients who didn't fit a category. Tell us about your industry and the challenge, and we'll bring the right mix of businesses and capability to it."
          primaryButtonText="Discuss Your Project"
          primaryButtonLink="/consultation"
          secondaryButtonText="Contact Us"
          secondaryButtonLink="/contact"
        />
      </div>
    </>
  )
}