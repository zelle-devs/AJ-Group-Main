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
import CapabilitiesSectionChart from '@/components/HomePage/CapabilitiesSection/CapabilitiesSectionChart'
import CapabilitiesSectionChart2 from '@/components/HomePage/CapabilitiesSection/CapabilitiesSectionChart2'
import CapabilitiesSectionLeft2 from '@/components/HomePage/CapabilitiesSection/CapabilitiesSectionLeft2'
import ViewOurPortfolioDesign from '@/components/ViewOurPortfolioDesign/ViewOurPortfolioDesign'
import GroupatglanceNewUpdated from '@/components/HomePage/Groupatglance/GroupatglanceNewUpdated'
import CapabilitiesSectionHomeMain from '@/components/HomePage/CapabilitiesSection/CapabilitiesSectionHomeMain'
export default function Home() {
  return (
    <>
      <Hero />
      <div className="scroll-content-wrapper">
        <WhyChooseUs />
        <CapabilitiesSectionHomeMain
          eyebrow="PORTFOLIO"
          title="A Portfolio In Motion"
          body="Our portfolio is growing. Across businesses, sectors and markets, each venture represents another step in the evolution of AJ Group"         
          showButton={false}
          maxWidth={700}
        />
        <WhyAJGroup />
        {/* <FeaturedProjects/> */}
        <ProcessTimeline />
        <FocusCompanies
          eyebrow="PARTNERSHIPS"
          headline="Let's Build What's Next"
          desc="We are always open to meaningful opportunities. Whether you're building a business, exploring a strategic partnership, considering an acquisition or looking for the right long-term partner, AJ Group welcomes conversations that have the potential to create something bigger."
          companies={companiesData}
        />
        {/* <CapabilitiesSection /> */}
        {/* <ViewOurPortfolioDesign/> */}
        {/* <CapabilitiesSectionLeft/> */}
        <CapabilitiesSectionLeft2 />

        {/* <CapabilitiesSectionChart/> */}
        {/* <CapabilitiesSectionChart2/> */}
        {/* <CapabilitiesSection 
        eyebrow="How we work"
        title="A considered process, start to finish."
        body="Every project follows the same deliberate sequence, from brief to delivery, so nothing is left to chance and nothing surprises you at the end."
        buttonText="Explore Our Approach"
        buttonLink="/leadership"
        align='left'
      /> */}
        <GroupatglanceNewUpdated />
        {/* <TeamScrollSlider/> */}
        {/* <CapabilitiesSection 
        eyebrow="Leadership"
        title="Led by people who know how things are made."
        body="A.J Group is guided by a leadership team with deep roots in manufacturing, design, and commercial delivery. Their focus is simple: keep raising the standard of what the group makes, and build companies clients return to."
        buttonText="Meet Our Leadership"
        buttonLink="/leadership"
      /> */}

        {/* <CTASection/> */}
        <CTASection2 />
      </div>
    </>
  )
}