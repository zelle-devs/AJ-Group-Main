'use client'
import AboutSection from "@/components/AboutPage/AboutSection";
import CapabilitiesSection from "@/components/HomePage/CapabilitiesSection/CapabilitiesSection";
import CTASection2 from "@/components/HomePage/CTASection/CTASection2";
import IndustriesGrid from "@/components/IndustriesPage/IndustriesGrid";
import IndustriesHero from "@/components/IndustriesPage/IndustriesHero";
import OurCompaniesCapabilities from "@/components/OurCompaniesCapabilities/OurCompaniesCapabilities";
import OurCompaniesFeaturedProjects from "@/components/OurCompaniesFeaturedProjects/OurCompaniesFeaturedProjects";
import OurCompaniesGrid from "@/components/OurCompaniesGrid/OurCompaniesGrid";
import OurCompaniesProcesstimeline from "@/components/OurCompaniesProcesstimeline/OurCompaniesProcesstimeline";
import { Award, Building2, Globe, Hotel, ShoppingBag, TrendingUp, User } from "lucide-react";

export default function OurCompanies() {
  return (
    <>
      <AboutSection
        eyebrow="Our Companies"
        headline="Four companies. One standard of making."
        body="A.J Group is home to specialist businesses across manufacturing and design. Two serve business clients with industrial-scale capability; two serve consumers directly with design-led products. Each leads in its own field, and each is backed by the resources of the wider group."

        // Image
        imageSrc="/MainPageOurCopmaniesMainImage.jpeg"
        imageAlt="A.J Group Industries"

        // Features - Industry sectors
        features={[
          { icon: ShoppingBag, label: 'Retail' },
          { icon: Building2, label: 'Corporate' },
          { icon: Hotel, label: 'Hospitality' },
        ]}

        // Badges
        badge1Icon={Globe}
        badge1Value="500+"
        badge1Label="Happy Clients"
        badge2Value="4+"
        badge2Label="Businesses"

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
        <CapabilitiesSection
          eyebrow="Built On Expertise"
          title="Depth In Every Discipline."
          body="We don't spread ourselves thin. Each company exists because we knew we could be excellent at it: the right machinery, the right specialists, and years of hard-won know-how. That is why clients trust us with work that has no margin for error."
          showButton={false}
          maxWidth={700}
        />
        <OurCompaniesGrid />
        <OurCompaniesProcesstimeline/>
        <OurCompaniesCapabilities/>
        <OurCompaniesFeaturedProjects/>
        <CTASection2
          eyebrow="Get To Know Each Company."
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