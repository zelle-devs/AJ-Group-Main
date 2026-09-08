'use client'
import AboutSection from "@/components/AboutPage/AboutSection";
import HeroSectionPortfolio from "@/components/AboutPage/HeroSectionPortfolio";
import CareersGridPorfolio from "@/components/CareersPage/CareersGridPorfolio";
import CapabilitiesSection from "@/components/HomePage/CapabilitiesSection/CapabilitiesSection.jsx";
import CapabilitiesSectionGlanceTextHome from "@/components/HomePage/CapabilitiesSection/CapabilitiesSectionGlanceTextHome";
import CapabilitiesSectionPortfolioMain from "@/components/HomePage/CapabilitiesSection/CapabilitiesSectionPortfolioMain";
import CTASection2 from "@/components/HomePage/CTASection/CTASection2";
import FocusCompanies, { companiesData } from "@/components/HomePage/FocusCompanies/FocusCompanies";
import GroupatglanceNewUpdatedAboutMain from "@/components/HomePage/Groupatglance/GroupatglanceNewUpdatedAboutMain";
import WhyChooseUsPortfolioPageMain from "@/components/HomePage/WhyChooseUs/WhyChooseUsPortfolioPageMain";
import IndustriesGrid from "@/components/IndustriesPage/IndustriesGrid";
import IndustriesHero from "@/components/IndustriesPage/IndustriesHero";
import OurCompaniesCapabilities from "@/components/OurCompaniesCapabilities/OurCompaniesCapabilities";
import OurCompaniesFeaturedProjects from "@/components/OurCompaniesFeaturedProjects/OurCompaniesFeaturedProjects";
import OurCompaniesGrid from "@/components/OurCompaniesGrid/OurCompaniesGrid";
import OurCompaniesGridPorfolio from "@/components/OurCompaniesGrid/OurCompaniesGridPorfolio";
import OurCompaniesProcesstimeline from "@/components/OurCompaniesProcesstimeline/OurCompaniesProcesstimeline";
import { Award, Building2, Globe, Hotel, ShoppingBag, TrendingUp, User } from "lucide-react";

export default function OurCompanies() {
  return (
    <>
     <style>{`
  .mobile-only-glance {
    display: none; /* By default hidden on all screens */
  }
  
  /* Sirf 300px se 500px ke darmiyan show hoga */
  @media screen and (min-width: 300px) and (max-width: 1020px) {
    .mobile-only-glance {
      display: flex;
      align-items: center;
      height:100%;
    }
    .mobile-only-glance p{
    font-size: 11px ;
    line-height: 18px;}
  }
`}</style>
      <HeroSectionPortfolio
        eyebrow="OUR PORTFOLIO"
        headline="A Companies Built for Whats Next"
        body="AJ Group builds, owns and develops businesses with a long-term view. Our portfolio today represents the foundation of a much larger vision — one focused on strategic growth, new opportunities and building enduring value."

        imageSrc="/PortfolioFinalUpdatedHeroImage.jpeg"
        imageAlt="A.J Group Industries"

        features={[
          { icon: ShoppingBag, label: 'Retail' },
          { icon: Building2, label: 'Corporate' },
          { icon: Hotel, label: 'Hospitality' },
        ]}

        // Badges
        badge1Icon={Globe}
        badge1Value="1000+"
        badge1Label="Happy Clients"
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
        <CapabilitiesSectionPortfolioMain
         eyebrow="THE GROUP"
          title="Different Businesses, One Long Term Vision"
          body="AJ Group operates through wholly owned companies, each with its own capabilities, markets and opportunities. While our businesses operate independently, they are united by the same philosophy"         
          showButton={false}
          maxWidth={700}
        />

        <OurCompaniesGridPorfolio />
        <CareersGridPorfolio/>
        <OurCompaniesProcesstimeline/>
        <WhyChooseUsPortfolioPageMain/>
         <GroupatglanceNewUpdatedAboutMain/>
          <div className="mobile-only-glance">
          <CapabilitiesSectionGlanceTextHome 
             eyebrow={false}
             title="Building Towards Bigger"
             body="AJ Group is not being built for a single market, a single industry or a single generation of opportunity. We are building a diversified enterprise capable of moving into new sectors,creating new businesses and acquiring established ones. Not through growth for growths sake.Through strong businesses, strategic ownership, disciplined expansion and lasting value creation."
             buttonText="Meet Our Leadership"
             buttonLink="/leadership"
             showButton={false}
           /> 
          </div>
        {/* <OurCompaniesCapabilities/> */}
        
        <CTASection2
          eyebrow="Get To Know Each Company"
          headline="The Next Opportunity is Out There"
          body="AJ Group is always looking ahead. New sectors, New Business, New Possibilities. And we need to built them. "
          primaryButtonText="Partner With AJ Group"
          primaryButtonLink="/consultation"
          secondaryButtonText="Contact Us"
          secondaryButtonLink="/contact"
        />
      </div>
    </>
  )
}