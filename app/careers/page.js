'use client'
import CareersHero from "@/components/CareersPage/CareersHero";
import CapabilitiesSection from "@/components/HomePage/CapabilitiesSection/CapabilitiesSection";
import WhyAJGroup from "@/components/HomePage/Whyajgroup/Whyajgroup";
import CareersGrid from "@/components/CareersPage/CareersGrid";
import JobListings from "@/components/CareersPage/JobListings";
import CTASection2 from "@/components/HomePage/CTASection/CTASection2";
import { Target, Award, Shield, TrendingUp, Users, Star, Heart, Briefcase, GraduationCap, Clock } from 'lucide-react';
import OurStory from "@/components/AboutPage/OurStory";

export default function Careers() {
  return (
    <>
      <CareersHero />
      <div className="scroll-content-wrapper">
        {/* 02. LIFE AT THE GROUP */}
        <CapabilitiesSection 
          eyebrow="Life at the Group"
          title="Real Work You Can Point To."
          body="Working at A.J Group means being part of work that ends in something real, a fabricated facade, a printed campaign, a finished product. Because the Group spans several disciplines, there's variety in the work and the chance to learn from experts in fields next to your own."
          showButton={false}
          maxWidth={800}
        />

        {/* 03. OUR CULTURE - Values grid */}
        <WhyAJGroup 
          eyebrow="Our Culture"
          title="High Standards, Treated Like People."
          intro="A.J Group holds a high bar for the work, and expects people to be treated well while meeting it. The culture rewards skill, initiative and care, across every business in the Group."
          columns={5}
          items={[
            { num: '01', icon: Award, title: 'Skill', desc: 'Expertise is respected and rewarded.', image:'turkey.jpg' },
            { num: '02', icon: TrendingUp, title: 'Initiative', desc: 'Ideas are welcomed at every level.', image:'usa.jpg' },
            { num: '03', icon: Heart, title: 'Care', desc: 'People are treated with respect.', image:'malaysia.jpg' },
            { num: '04', icon: Shield, title: 'Standards', desc: 'Quality never compromised.', image:'australia.jpg' },
            { num: '05', icon: Users, title: 'Teamwork', desc: 'Experts working together.', image:'turkey.jpg' },
          ]}
        />

        {/* 04. WHY JOIN US - Benefits grid */}
        <CareersGrid />
        <OurStory 
  eyebrow="Why Join Us"
  headline="More Than a Job."
  body="Reasons people build long careers with the Group:"
  milestones={[
    { icon: Award, year: '01', title: 'Skill', desc: 'Expertise is respected and rewarded across every business.' },
    { icon: TrendingUp, year: '02', title: 'Initiative', desc: 'Good ideas are welcomed and acted on at every level.' },
    { icon: Heart, year: '03', title: 'Care', desc: 'People are treated with respect while meeting high standards.' },
    { icon: Shield, year: '04', title: 'Standards', desc: 'Quality is never compromised, no matter the pressure.' },
    { icon: Users, year: '05', title: 'Teamwork', desc: 'Experts from different fields work side by side.' },
  ]}
  showLine={true}
  showYear={true}
  showDesc={true}
/>

        {/* 05. OPEN ROLES - Job listings */}
        <JobListings />

        {/* 06. SUBMIT YOUR CV - Closing CTA */}
        <CTASection2 
          eyebrow="Submit Your CV"
          headline="Don't See the Right Role? Introduce Yourself."
          body="A.J Group is always interested in talented, driven people. Send your CV and tell us where you'd fit, and we'll reach out when there's a match."
          primaryButtonText="Submit Application"
          primaryButtonLink="/careers/apply"
          secondaryButtonText="Contact Us"
          secondaryButtonLink="/contact"
        />
      </div>
    </>
  )
}