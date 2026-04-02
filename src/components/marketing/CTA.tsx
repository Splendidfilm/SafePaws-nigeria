import React from 'react'
import Logo from '../ui/Logo'
import Button from '../ui/button'

function CTA() {
  return (
    <div className='flex flex-col items-center justify-center gap-9 py-10' >
              <div className="size-15 bg-[#D1F5EF] flex items-center justify-center rounded-full text-[#17CFAD]">
        <span className="material-symbols-outlined scale-150">pets</span>
      </div>
        <h1 className='text-[#111c1a] text-2xl font-semibold' >Ready to Move Your Pet?</h1>
        <p className='text-[#5F8881] text-center' >Join Hundreds of happy pet owners who trust SafePaws Nigeria for thier transportation needs.Get a free quote today</p>
        <div className='flex gap-10' >
        <Button type='Get Free Quote'/>
        <Button 
        size='md'
        variant='outline'
        type='Contact Support'/>
        </div>
    </div>
  )
}

export default CTA