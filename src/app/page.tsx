import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import TrustStrip from '@/components/sections/TrustStrip'
import ServicesGrid from '@/components/sections/ServicesGrid'
import ProjectsGrid from '@/components/sections/ProjectsGrid'
import ProcessSection from '@/components/sections/ProcessSection'
import WhySection from '@/components/sections/WhySection'
import CtaBanner from '@/components/sections/CtaBanner'
import { t } from '@/translations/en'

export const metadata: Metadata = {
  title: 'Triora Labs | Digital Products, Software & Cloud Engineering',
  description: 'From Idea to Production. Triora Labs designs, builds, and deploys modern websites, web applications, and production cloud infrastructure.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <ServicesGrid limit={6} />
      <ProjectsGrid limit={2} />
      <ProcessSection compact />
      <WhySection />
      <CtaBanner
        heading={t.cta.homeHeading}
        subheading={t.cta.homeSub}
        primaryLabel={t.cta.homePrimary}
        primaryHref="/contact"
        secondaryLabel={t.cta.homeSecondary}
        secondaryHref="/work"
        note={t.cta.homeNote}
      />
    </>
  )
}
