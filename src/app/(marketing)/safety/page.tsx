import React from 'react'
import SafetyHero from '../../../components/marketing/safety/SafeHero'
import CoreProtocols from '../../../components/marketing/safety/CoreProtocols'
import CrateStandards from '../../../components/marketing/safety/CrateStandards'
import SafetyCTA from '@/components/marketing/safety/SafetyCTA'

function page() {
  return (
    <div className='w-full' >
        <SafetyHero />
        <CoreProtocols/>
        <CrateStandards/>
        <SafetyCTA/>
    </div>
  )
}

export default page