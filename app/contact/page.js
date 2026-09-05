'use client'
import AboutSection from "@/components/AboutPage/AboutSection";
import CTASection2 from "@/components/HomePage/CTASection/CTASection2";
import ContactCards from "@/components/ContactPage/ContactCards";
import ContactForm from "@/components/ContactPage/ContactForm";
import ContactInfo from "@/components/ContactPage/ContactInfo";
import { MapPin, Phone, Mail, Clock, Briefcase, Users, Building2 } from 'lucide-react';

export default function Contact() {
  return (
    <>
      {/* 01. CONTACT HERO - Reusing AboutSection */}
      <AboutSection 
        eyebrow="Contact"
        headline="Let's Talk About Your Project"
        body="Whether you have a defined project, a rough idea, or a question about the Group, A.J Group will get you to the right people. Reach out and we'll respond promptly."
        imageSrc="/Integrity_cards_whyAJ.jpeg"
        imageAlt="A.J Group Contact"
        features={[
          { icon: Phone, label: '+92 21 111 254 111' },
          { icon: Mail, label: 'hello@ajgroup.com' },
        ]}
        badge1Icon={Clock}
        badge1Value="500+"
        badge1Label="Happy Clients"
        badge2Value="24hr"
        badge2Label="Response Time"
        useSpacer={true}
      />
      
      <div className="scroll-content-wrapper">
        {/* 02. HEAD OFFICE - Contact Info */}

        <div style={{display:'flex', width:'100%' }}>

        <ContactInfo />

        <ContactForm />
        </div>

        {/* 08. FIND US - Map section */}
        <CTASection2 
          eyebrow="Find Us"
          headline="Visit the Group"
          body="Address:  A.J House, 23/1, Korangi Industrial Area, Karachi 74900, Pakistan"
          primaryButtonText="Get Directions"
          primaryButtonLink="https://maps.google.com"
          primaryButtonIcon="arrow"
          secondaryButtonText="Call Us"
          secondaryButtonLink="tel:+9221111254111"
          secondaryButtonIcon="phone"
        />
      </div>
    </>
  )
}