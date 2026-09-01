'use client'
import AboutSection from "@/components/AboutPage/AboutSection";
import ApproachHero from "@/components/ApproachPage/ApproachHero";
import ApproachSteps from "@/components/ApproachPage/ApproachSteps";
import CTASection2 from "@/components/HomePage/CTASection/CTASection2";
import { CheckCircle2, ClipboardList, Cog, Eye } from "lucide-react";

export default function Approach() {
  return (
    <>
      <AboutSection 
  eyebrow="Our Approach"
  headline="A Clear Process From Start to Finish"
  body="Good work starts with understanding what is actually required. A.J Group follows the same considered process on every project, so expectations are set early, progress stays visible and the finished work reflects what was agreed at the beginning."
  
  // Image
  imageSrc="/Clear_Process_STF.jpeg"
  imageAlt="A.J Group Process"
  
  // Features - Process highlights
  features={[
    { icon: ClipboardList, label: 'Clear Process' },
    { icon: Eye, label: 'Visible Progress' },
    { icon: CheckCircle2, label: 'Agreed Outcomes' },
  ]}
  
  // Badges
  badge1Icon={Cog}
  badge1Value="7"
  badge1Label="Process Steps"
  badge2Value="1"
  badge2Label="Standard"
  
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
        <ApproachSteps />
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