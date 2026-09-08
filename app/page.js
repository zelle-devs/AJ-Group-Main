import CapabilitiesSection from '@/components/HomePage/CapabilitiesSection/CapabilitiesSection.jsx'
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
import './globals.css'
import CapabilitiesSectionGlanceTextHome from '@/components/HomePage/CapabilitiesSection/CapabilitiesSectionGlanceTextHome'
export default function Home() {
  return (
    
    <>
    <style>{`
  .mobile-only-glance {
    display: none; /* By default hidden on all screens */
  }
  
  /* Sirf 300px se 500px ke darmiyan show hoga */
  @media screen and (min-width: 300px) and (max-width: 430px) {
    .mobile-only-glance {
      display: block;
    }
    .mobile-only-glance p{
    font-size: 15px ;
    line-height: 18px;}
  }
`}</style>
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
        <div className="mobile-only-glance">
  <CapabilitiesSectionGlanceTextHome 
    eyebrow={false}
    title={false}
    body="The Group is building toward a diversified, billion-dollar enterprise. Our ambition is not simply to own more businesses. It is to build better businesses, stronger platforms and lasting value at scale"
    buttonText="Meet Our Leadership"
    buttonLink="/leadership"
    showButton={false}
  />
</div>
       

        {/* <CTASection/> */}
       
        <CTASection2 />
      </div>
    </>
  )
}