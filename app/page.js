import CapabilitiesSection from '@/components/HomePage/CapabilitiesSection/CapabilitiesSection'
import CapabilitiesSectionLeft from '@/components/HomePage/CapabilitiesSection/CapabilitiesSectionLeft'
import FeaturedProjects from '@/components/HomePage/FeaturedProjects/FeaturedProjects'
import FocusCompanies from '@/components/HomePage/FocusCompanies/FocusCompanies'
import GroupAtGlance from '@/components/HomePage/Groupatglance/Groupatglance'
import Hero from '@/components/HomePage/Hero/Hero'
import ProcessTimeline from '@/components/HomePage/Processtimeline/Processtimeline'
import TeamScrollSlider from '@/components/HomePage/Teamscrollslider/Teamscrollslider'
import WhyAJGroup from '@/components/HomePage/Whyajgroup/Whyajgroup'
import WhyChooseUs from '@/components/HomePage/WhyChooseUs/WhyChooseUs'
import { companiesData } from '@/components/HomePage/FocusCompanies/FocusCompanies'
import CTASection from '@/components/HomePage/CTASection/CTASection'
import CTASection2 from '@/components/HomePage/CTASection/CTASection2'
export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs/>
      <FeaturedProjects/>
      <ProcessTimeline/>
      <CapabilitiesSection/>
      <WhyAJGroup/>
      <CapabilitiesSectionLeft
      eyebrow = 'How we work'
  title = 'A considered process, start to finish.'
  body = "Every project follows the same deliberate sequence, from brief to delivery, so nothing is left to chance and nothing surprises you at the end."
  buttonText = 'Explore Our Approach'
  buttonLink = '/approach'
  imageSrc = '/ceo.jpg'
  imageAlt = 'Capabilities Image'
  />
       {/* <CapabilitiesSection 
        eyebrow="How we work"
        title="A considered process, start to finish."
        body="Every project follows the same deliberate sequence, from brief to delivery, so nothing is left to chance and nothing surprises you at the end."
        buttonText="Explore Our Approach"
        buttonLink="/leadership"
        align='left'
      /> */}
      <GroupAtGlance/>
      <TeamScrollSlider/>
       {/* <CapabilitiesSection 
        eyebrow="Leadership"
        title="Led by people who know how things are made."
        body="A.J Group is guided by a leadership team with deep roots in manufacturing, design, and commercial delivery. Their focus is simple: keep raising the standard of what the group makes, and build companies clients return to."
        buttonText="Meet Our Leadership"
        buttonLink="/leadership"
      /> */}
       <FocusCompanies 
        eyebrow="In focus"
        headline="Two companies. Two disciplines. One standard."
        companies={companiesData}
      />
      {/* <CTASection/> */}
<CTASection2/>
    </>
  )
}