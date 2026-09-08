'use client'
import CareersHero from "@/components/CareersPage/CareersHero";
import CapabilitiesSection from "@/components/HomePage/CapabilitiesSection/CapabilitiesSection.jsx";
import WhyAJGroup from "@/components/HomePage/Whyajgroup/Whyajgroup";
import CareersGrid from "@/components/CareersPage/CareersGrid";
import JobListings from "@/components/CareersPage/JobListings";
import CTASection2 from "@/components/HomePage/CTASection/CTASection2";
import { Target, Award, Shield, TrendingUp, Users, Star, Heart, Briefcase, GraduationCap, Clock, ShoppingBag, Building2, Hotel, Globe, MessageSquare } from 'lucide-react';
import OurStory from "@/components/AboutPage/OurStory";
import HeroSectionCareers from "@/components/AboutPage/HeroSectionCareers";
import WhyChooseUsCareersMain from "@/components/HomePage/WhyChooseUs/WhyChooseUsCareersMain";
import OurCareersProcesstimeline from "@/components/OurCompaniesProcesstimeline/OurCareersProcesstimeline";
import CapabilitiesSectionCareers2Main from "@/components/HomePage/CapabilitiesSection/CapabilitiesSectionCareers2Main";
import CareersMarqueWaiting from "@/components/CareersPage/CareersMarqueWaiting";

export default function Careers() {
  return (
    <>
      <HeroSectionCareers

        imageSrc="/CareersFinalUpdatedHeroImage.jpeg"
        imageAlt="A.J Group Industries"

        features={[
          { icon: ShoppingBag, label: 'Retail' },
          { icon: Building2, label: 'Corporate' },
          { icon: Hotel, label: 'Hospitality' },
        ]}

        // Badges
        badge1Icon={Globe}
        badge1Value="100+"
        badge1Label="Team Members"
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
        <WhyChooseUsCareersMain/>
        <OurCareersProcesstimeline/>
        <CapabilitiesSectionCareers2Main
          eyebrow="YOUR CAREER HERE"
          title="You Won't Be Building Alone"
          body="AJ Group brings together people with different skills, experiences and perspectives. As the Group grows, so does the opportunity to work across businesses, functions and challenges that demand new thinking. You may start in one role. But your potential doesn't have to stay there."
          showButton={false}
          maxWidth={800}
        />

        <WhyAJGroup
          eyebrow="WHAT YOU CAN EXPECT"
          title="High Standards, Treated Like People"
          intro=""
          columns={5}
          items={[
            { num: '01', icon: Award, title: 'Meaningful Responsibility', desc: 'Take ownership of work that matters.', image: 'Skills_Careers_Cards.jpeg' },
            { num: '02', icon: TrendingUp, title: 'Learning Bt Doing', desc: 'Grow through real challenges, not just training rooms.', image: 'Inisiative_Careers_Cards.jpeg' },
            { num: '03', icon: Heart, title: 'Exposure To Picture', desc: 'Understand how businesses are built, operated and grown.', image: 'Care_Careers_Cards.jpeg' },
            { num: '04', icon: Shield, title: 'Room To Move', desc: 'As AJ Group expands, new roles, responsibilities and opportunities will emerge.', image: 'Standerds_Responsibilities_Cards.jpeg' },
            { num: '05', icon: Users, title: 'Culture Accountability', desc: 'We give people responsibility — and expect them to rise to it.', image: 'TeamWork_Careers_Cards.jpeg' },
          ]}
        />

        <CareersMarqueWaiting/>

        {/* 04. WHY JOIN US - Benefits grid */}
        <CareersGrid />
       <OurStory
  eyebrow="THE AJ MINDSET"
  headline="Think Like An Owner."
  body="At AJ Group, we believe the best people don't simply complete tasks. They think about the business. They understand the bigger picture."
  milestones={[
    { 
      icon: Target, 
      year: '01', 
      title: 'Question', 
      desc: 'They question what can be improved.' 
    },
    { 
      icon: Shield, 
      year: '02', 
      title: 'Take Responsibility', 
      desc: 'They take responsibility. And when they see an opportunity, they step forward.' 
    },
    { 
      icon: MessageSquare, 
      year: '03', 
      title: 'Make It Better', 
      desc: 'DON\'T ASK: "Is This My Job?" ASK: "How Can I Make Better?"' 
    }
  ]}
  showLine={true}
  showYear={true}
  showDesc={true}
/>

        {/* 05. OPEN ROLES - Job listings */}
        {/* <JobListings /> */}

        {/* 06. SUBMIT YOUR CV - Closing CTA */}
        <CTASection2
          eyebrow="Submit Your CV"
          headline="Don't See the Right Role? Introduce Yourself"
          body="A.J Group is always interested in talented, driven people. Send your CV and tell us where you'd fit, and we'll reach out when there's a match."
          primaryButtonText="Submit Application"
          primaryButtonLink="#"
          secondaryButtonText="Contact Us"
          secondaryButtonLink="/contact"
        />
      </div>
    </>
  )
}