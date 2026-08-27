'use client'
import LeadershipHero from "@/components/LeadershipPage/LeadershipHero";
import CapabilitiesSection from "@/components/HomePage/CapabilitiesSection/CapabilitiesSection";
import LeadershipGrid from "@/components/LeadershipPage/LeadershipGrid";
import WhyAJGroup from "@/components/HomePage/Whyajgroup/Whyajgroup";
import CTASection2 from "@/components/HomePage/CTASection/CTASection2";
import { Target, Eye, Award, Shield, TrendingUp, User } from 'lucide-react';
import AboutSection from "@/components/AboutPage/AboutSection";

export default function Leadership() {
  return (
    <>
     <AboutSection 
  eyebrow="Leadership"
  headline="Growing the Group With Purpose."
  body="A.J Group is led by a team focused on building strong businesses and developing the capabilities behind them. That means looking beyond individual projects to the people, equipment, processes and opportunities that will shape the Group over the long term."
  
  // Image - Leadership portrait
  imageSrc="/ceo.jpg"
  imageAlt="A.J Group Leadership"
  
  // Features - Leadership focused
  features={[
    { icon: User, label: 'People First' },
    { icon: TrendingUp, label: 'Long-Term Growth' },
    { icon: Award, label: 'High Standards' },
  ]}
  
  // Badges - Leadership specific
  badge1Icon={User}
  badge1Value="6+"
  badge1Label="Team Members"
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
        {/* 02. HOW WE LEAD - Text-led band */}
        <CapabilitiesSection 
          eyebrow="How We Lead"
          title="Direction First, Detail Always."
          body="The Group's leadership believes strong, focused businesses need two things at once: the freedom to be expert in their own field, and a clear standard that holds across all of them."
          showButton={false}
          maxWidth={800}
        />

        {/* 03. THE TEAM - Leadership profile grid */}
        <LeadershipGrid />

        {/* 04. RESPONSIBILITIES - Five-point grid */}
        <WhyAJGroup 
          eyebrow="Responsibilities"
          title="Across Strategy, Growth and Standards."
          intro="The leadership team's work spans the whole Group, not any single business."
          columns={5}
          items={[
            { num: '01', icon: Target, title: 'Strategy', desc: 'Setting direction for the Group.', image:'/turkey.jpg' },
            { num: '02', icon: TrendingUp, title: 'Growth', desc: 'Building new capabilities.', image:'/malaysia.jpg' },
            { num: '03', icon: Award, title: 'Standards', desc: 'Holding quality across all.', image:'/usa.jpg' },
            { num: '04', icon: Eye, title: 'Investment', desc: 'Allocating resources wisely.', image:'/australia.jpg' },
            { num: '05', icon: Shield, title: 'People', desc: 'Developing talent and teams.', image:'/turkey.jpg' },
          ]}
        />

        {/* 05. ONE STANDARD - Corporate signature */}
        <CapabilitiesSection 
          eyebrow="One Standard"
          title="One Group. Many Skills. One Standard."
          body="The main job of A.J Group's leadership is to keep its expert businesses aligned to a single standard. Each company is free to lead in its own field, but all of them share the same expectations for quality, delivery and how clients are treated. That alignment is what lets the Group offer expert depth and a consistent experience at the same time."
          showButton={false}
          maxWidth={900}
        />

        {/* 06. CLOSING CTA */}
        <CTASection2 
          eyebrow="Get In Touch"
          headline="Work With the Group."
          body="Whether you have a project to discuss or want to understand how A.J Group works, the team is glad to talk."
          primaryButtonText="Start a Project"
          primaryButtonLink="/contact"
          secondaryButtonText="Contact the Group"
          secondaryButtonLink="/contact"
        />
      </div>
    </>
  )
}