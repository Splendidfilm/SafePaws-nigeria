// import { section } from 'framer-motion/client'
import React from 'react'
import HIW from '../ui/HIWCard'

function HowItWorks() {

    const steps = [
        {number: 1, title: 'Request Quote', description: 'Enter pickup and destination deatials to getan instant price estimate.'},
        {number: 2, title: 'Schedule Pickup', description: 'Choose a convenient time for our team to pick up your pet/animal.'},
        {number: 3, title: 'Safe Transport', description: 'Our trained drivers ensure a comfortable and secure journey for your pet/animal.'},
        {number: 4, title: 'Track & Arrive', description: 'Monitor the journey in real-time and receive updates until your pet/animal arrives safely.'},
    ]

  return (
    <section className='flex w-full p-7 px-4 items-start justify-start ' id='how-it-works' >
<div className=" flex flex-col gap-10 items-start justify-start w-4/5 mx-auto " >
    <div className='flex w-full justify-between items-center flex-wrap' >
<div className='flex flex-col items-start' >
        <h1 className='text-[#21302d] font-bold text-3xl ' >How It Works</h1>
<p className='text-[#5F8881] py-4 text-lg ' >Simple steps to get your pet moving safely.</p>
</div>

<button className=' text-slate-800 font-bold  border-slate-800 border-2  rounded-xl hover:bg-slate-800  transition-colorsflex cursor-pointer items-center justify-center h-12 px-6  transition-all hover:text-white  text-base tracking-[0.015em] active:scale-95 ' >
  Learn More
</button>

</div>
<div className='flex flex-wrap gap-10' >
    {steps.map((step,index)=>(
<HIW
key={index}
number={step.number}
title={step.title}
description={step.description}
/>
))}
</div>

</div>
    </section>
) 
}

export default HowItWorks