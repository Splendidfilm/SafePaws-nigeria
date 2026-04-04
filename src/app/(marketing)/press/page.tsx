import React from 'react'
import Press from '@/components/marketing/press/PressHero'
import PressReleases from '@/components/marketing/press/PressReleases'
import LatestNews from '@/components/marketing/press/LatsetNews'
import MediaContact from '@/components/marketing/press/MediaContact'


function page() {
  return (
    <div className='w-full' >
      <Press/>
      <LatestNews/>
      <PressReleases/>
      <MediaContact/>
    </div>
  )
}

export default page