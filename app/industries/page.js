'use client'
import AboutSection from "@/components/AboutPage/AboutSection";
import HeroSectionIndustries from "@/components/AboutPage/HeroSectionIndustries";
import CareersGridIndustiresMainSection from "@/components/CareersPage/CareersGridIndustiresMainSection";
import CapabilitiesSectionLeft2MainApproach from "@/components/HomePage/CapabilitiesSection/CapabilitiesSectionLeft2MainApproach";
import CapabilitiesSectionLeft2MainPortfolio from "@/components/HomePage/CapabilitiesSection/CapabilitiesSectionLeft2MainPortfolio";
import CapabilitiesSectionPortfolioMain from "@/components/HomePage/CapabilitiesSection/CapabilitiesSectionPortfolioMain";
import CTASection2 from "@/components/HomePage/CTASection/CTASection2";
import IndustriesGrid from "@/components/IndustriesPage/IndustriesGrid";
import IndustriesHero from "@/components/IndustriesPage/IndustriesHero";
import { Award, Building2, Globe, Hotel, ShoppingBag, TrendingUp, User } from "lucide-react";

export default function Industries() {
  return (
    <>
      <HeroSectionIndustries

        imageSrc="/HeroSectionMainIMageOutlined4.jpeg"
        imageAlt="A.J Group Industries"

        features={[
          { icon: ShoppingBag, label: 'Retail' },
          { icon: Building2, label: 'Corporate' },
          { icon: Hotel, label: 'Hospitality' },
        ]}

        // Badges
        badge1Icon={Globe}
        badge1Value="10+"
        badge1Label="Industries Served"
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
        <IndustriesGrid />
        <CapabilitiesSectionLeft2MainPortfolio/>
        {/* <CapabilitiesSectionPortfolioMain
          eyebrow="THE GROUP"
          title="Different Businesses, One Long-Term Vision"
          body="AJ Group operates through wholly owned companies, each with its own capabilities, markets and opportunities. While our businesses operate independently, they are united by the same philosophy"
          showButton={false}
          maxWidth={700}
        /> */}
         {/* <CapabilitiesSectionLeft2MainApproach /> */}
         <CareersGridIndustiresMainSection/>
        <CTASection2
          eyebrow="Get In Touch"
          headline="Don't See Your Industry?"
          body="A.J Group's capabilities cross sectors, and some of the Group's best work has been for clients who didn't fit a category. Tell us about your industry and the challenge, and we'll bring the right mix of businesses and capability to it."
          primaryButtonText="Discuss Your Project"
          primaryButtonLink="/contact"
          secondaryButtonText="Contact Us"
          secondaryButtonLink="/contact"
        />
      </div>
    </>
  )
}