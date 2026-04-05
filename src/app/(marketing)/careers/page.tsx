import BenefitsSection from '@/components/marketing/careers/BenefitsSection'
import CareersHero from '@/components/marketing/careers/CareersHero'
import CultureSection from '@/components/marketing/careers/CultureSection'
import GeneralInquiryCTA from '@/components/marketing/careers/GeneralInquiryCTA'
import OpenRolesSection from '@/components/marketing/careers/OpenRolesSection'
import React from 'react'

function page() {
  return (
    <div className='w-full' >
      <CareersHero />
      <CultureSection/>
      <BenefitsSection/>
      <OpenRolesSection/>
      <GeneralInquiryCTA/>

    </div>
  )
}

export default page