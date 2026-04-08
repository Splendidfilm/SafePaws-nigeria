'use client'

import React from 'react'
import HelpHero from '@/components/marketing/help/HelpHero'
import HelpCategories from '@/components/marketing/help/HelpCategories'
import SupportSection from '@/components/marketing/help/SupportSection'
import VisitHubSection from '@/components/marketing/help/VisitHubSection'
// import { useRouter } from 'next/router'
function page() {
  return (
    <>
    <HelpHero/>
    <HelpCategories/>
    <SupportSection/>
    <VisitHubSection/>

    </>
  )
}

export default page