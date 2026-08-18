import FeaturedProjects from '@/components/HomePage/FeaturedProjects/FeaturedProjects'
import Hero from '@/components/HomePage/Hero/Hero'
import ProcessTimeline from '@/components/HomePage/Processtimeline/Processtimeline'
import WhyChooseUs from '@/components/HomePage/WhyChooseUs/WhyChooseUs'

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs/>
      <FeaturedProjects/>
      <ProcessTimeline/>
    </>
  )
}