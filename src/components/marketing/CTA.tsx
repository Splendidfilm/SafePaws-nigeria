import React from 'react'
import Logo from '../ui/Logo'
import Button from '../ui/button'
import { motion } from 'framer-motion'

function CTA() {
  return (
    <div className='flex flex-col items-center justify-center gap-9 py-10' >
          <div className="size-15 bg-[#D1F5EF] flex items-center justify-center rounded-full text-[#17CFAD]">
        <motion.span
        initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
        whileInView={{ opacity: 1, scale:1, rotate: -15 }}
        transition={{ ease:'easeInOut', duration:1, }}
        className="material-symbols-outlined scale-150">pets</motion.span>
      </div>
        <h1 className='text-[#111c1a] text-2xl font-semibold' >Ready to Move Your Pet?</h1>
        <p className='text-[#5F8881] text-center' >Join Hundreds of happy pet owners who trust SafePaws Nigeria for thier transportation needs.Get a free quote today</p>
        <div className='flex gap-10' >
        <Button size='md' variant='secondary' >Get Free Quote</Button>
        <Button 
        size='md'
        variant='outline'>Contact Support</Button>
        </div>
    </div>
  )
}

export default CTA