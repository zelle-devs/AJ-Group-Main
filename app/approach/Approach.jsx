'use client' 
import HeroSectionApproach from "@/components/AboutPage/HeroSectionApproach"; 
import ApproachSteps from "@/components/ApproachPage/ApproachSteps";
import CareersGridApproach from "@/components/CareersPage/CareersGridApproach"; 
import CapabilitiesSectionApproachMain from "@/components/HomePage/CapabilitiesSection/CapabilitiesSectionApproachMain";
import CapabilitiesSectionLeft2MainApproach from "@/components/HomePage/CapabilitiesSection/CapabilitiesSectionLeft2MainApproach";
import CapabilitiesSectionMainApproachTopHalfEagle from "@/components/HomePage/CapabilitiesSection/CapabilitiesSectionMainApproachTopHalfEagle.jsx";
import CTASection2 from "@/components/HomePage/CTASection/CTASection2";
import { Building2, CheckCircle2, ClipboardList, Cog, Eye, Globe, Hotel, ShoppingBag } from "lucide-react";


export default function ApproachPage() {
  return (
    <>
      <HeroSectionApproach

        imageSrc="/Clear_Process_STF.png"
        imageAlt="A.J Group Industries"

        features={[
          { icon: ShoppingBag, label: 'Retail' },
          { icon: Building2, label: 'Corporate' },
          { icon: Hotel, label: 'Hospitality' },
        ]}

        // Badges
        badge1Icon={Globe}
      badge1Value="6"
        badge1Label="Process Steps"
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
        <CapabilitiesSectionMainApproachTopHalfEagle
          eyebrow="The AJ Advantage"
          title="We Think Like Owners"
          body="Ownership changes the way you think - You think beyond the next quarter - Beyond the next transaction - Beyond the next milestone - You think about what the business can become years from now - That mindset shapes every opportunity we pursue"
          align="center"
          showButton={false}
          maxWidth={800}
        />
        <CareersGridApproach />
        <ApproachSteps />
        <CapabilitiesSectionApproachMain
          eyebrow="OUR Growth Mindset"
          title="We Look For What Can Become "
          body="We are interested in more than businesses that are already successful. We look for potential. Businesses with room to grow. Markets with room to expand. Ideas with the potential to become enterprises. And opportunities where the right combination of ownership, capital and execution can change the trajectory of a business."
          align="center"
          showButton={false}
          maxWidth={800}
        />
        <CapabilitiesSectionLeft2MainApproach />
        <CTASection2
          eyebrow="Get In Touch"
          headline="Start Your Project Today"
          body="For A.J Group, delivery isn't the end. The clients we value most come back, for the next project and the one after, because they know the Group delivers."
          primaryButtonText="Start a Project"
          primaryButtonLink="/consultation"
          secondaryButtonText="Talk to Our Team"
          secondaryButtonLink="/contact"
        />
      </div>
    </>
  )
}