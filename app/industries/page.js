'use client'
import AboutSection from "@/components/AboutPage/AboutSection";
import CTASection2 from "@/components/HomePage/CTASection/CTASection2";
import IndustriesGrid from "@/components/IndustriesPage/IndustriesGrid";
import IndustriesHero from "@/components/IndustriesPage/IndustriesHero";
import { Award, Building2, Globe, Hotel, ShoppingBag, TrendingUp, User } from "lucide-react";

export default function Industries() {
  return (
    <>
       <AboutSection 
  eyebrow="Industries"
  headline="Capability Suited to Your Sector."
  body="A.J Group works across industries where quality, precision and presentation matter. As a diversified business group, we know different sectors need different things, a retail rollout, a structural facade and a hospitality fit-out are not the same job, and the Group brings the right capability and business to each."
  
  // Image
  imageSrc="/australia.jpg"
  imageAlt="A.J Group Industries"
  
  // Features - Industry sectors
  features={[
    { icon: ShoppingBag, label: 'Retail' },
    { icon: Building2, label: 'Corporate' },
    { icon: Hotel, label: 'Hospitality' },
  ]}
  
  // Badges
  badge1Icon={Globe}
  badge1Value="7+"
  badge1Label="Industries Served"
  badge2Value="4"
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
        <IndustriesGrid />
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