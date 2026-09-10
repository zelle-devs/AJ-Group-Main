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
import CapabilitiesSectionGlanceTextHome from '@/components/HomePage/CapabilitiesSection/CapabilitiesSectionGlanceTextHome'
import './globals.css'
 
export const metadata = {
  title: "AJ Group of Companies | Build. Own. Operate. Grow.",
  description:
    "AJ Group builds, owns and grows businesses across industries through strong operations, strategic thinking and a long-term vision.",
  keywords: [
    "AJ Group of Companies",
    "AJ Group",
    "group of companies",
    "business group",
    "diversified business group",
    "multi-industry business group",
    "business growth",
    "building businesses",
    "growing businesses",
    "business operations",
    "business development",
    "business expansion",
  ],
  alternates: {
    canonical: "https://ajgrouphq.com/",
  },
  openGraph: {
    title: "AJ Group of Companies | Build. Own. Operate. Grow.",
    description:
      "AJ Group builds, owns and grows businesses across industries through strong operations, strategic thinking and a long-term vision.",
    url: "https://ajgrouphq.com/",
    siteName: "AJ Group of Companies",
    type: "website",
    images: [
      {
        url: "https://ajgrouphq.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AJ Group of Companies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AJ Group of Companies | Build. Own. Operate. Grow.",
    description:
      "AJ Group builds, owns and grows businesses across industries through strong operations, strategic thinking and a long-term vision.",
    images: ["https://ajgrouphq.com/images/og-image.jpg"],
  },
};


const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://ajgrouphq.com/#webpage",
  url: "https://ajgrouphq.com/",
  name: "AJ Group of Companies | Build. Own. Operate. Grow.",
  description:
    "AJ Group builds, owns and grows businesses across industries through strong operations, strategic thinking and a long-term vision.",
  isPartOf: {
    "@id": "https://ajgrouphq.com/#website",
  },
  about: {
    "@id": "https://ajgrouphq.com/#organization",
  },
};


export default function Home() {
  return (
    <>
      {/* Home Page Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeSchema),
        }}
      />
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
            line-height: 18px;
          }
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
        {/* <FocusCompanies
          eyebrow="PARTNERSHIPS"
          headline="Let's Build What's Next"
          desc="We are always open to meaningful opportunities. Whether you're building a business, exploring a strategic partnership, considering an acquisition or looking for the right long-term partner, AJ Group welcomes conversations that have the potential to create something bigger."
          companies={companiesData}
        /> */}
        {/* <CapabilitiesSection /> */}
        {/* <ViewOurPortfolioDesign/> */}
        {/* <CapabilitiesSectionLeft/> */}
        <CapabilitiesSectionLeft2
          body={
            <>
              Opportunity doesn't always fit neatly into a category. That's why{' '}
              <strong style={{fontWeight:'700'}}>AJ Group</strong> remains open to{' '}
              new markets, new sectors and new ways to<strong style={{fontWeight:'700'}}> create</strong>  value.
              We pursue opportunities where{' '}
              <strong style={{fontWeight:'700'}}>vision, capital and execution</strong> can come together to build
              something enduring.
            </>
          }
        />

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
            title="A Global Group"
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