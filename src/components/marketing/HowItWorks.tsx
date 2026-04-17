// import { section } from 'framer-motion/client'
import React from 'react'
import HIWCard from './HIWCard'

function HowItWorks() {

    const steps = [
        {number: 1, title: 'Request Quote', description: 'Enter pickup and destination deatials to getan instant price estimate.'},
        {number: 2, title: 'Schedule Pickup', description: 'Choose a convenient time for our team to pick up your pet/animal.'},
        {number: 3, title: 'Safe Transport', description: 'Our trained drivers ensure a comfortable and secure journey for your pet/animal.'},
        {number: 4, title: 'Track & Arrive', description: 'Monitor the journey in real-time and receive updates until your pet/animal arrives safely.'},
    ]

  return (
    <section className='flex  w-full p-7 px-4 items-start justify-start dark:bg-[#11211e]  ' id='how-it-works' >
<div className=" flex flex-col gap-10 items-start justify-start w-4/5 mx-auto " >
    <div className='flex w-full justify-between items-center flex-wrap' >
<div className='flex flex-col items-start' >
        <h1 className='text-[#21302d] font-bold text-3xl dark:text-white ' >How It Works</h1>
<p className='text-[#5F8881] py-4 text-lg dark:text-white/80 ' >Simple steps to get your pet moving safely.</p>
</div>

<button className=' text-slate-800 font-bold  border-slate-800 border-2  rounded-xl hover:bg-slate-800  transition-colorsflex cursor-pointer items-center justify-center h-12 px-6  transition-all hover:text-white  text-base tracking-[0.015em] active:scale-95  dark:hover:bg-white/20 dark:border-white dark:text-white/90 ' >
  Learn More
</button>

</div>
<div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 w-full place-items-center place-content-center ' >
    {steps.map((step,index)=>(
<HIWCard
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