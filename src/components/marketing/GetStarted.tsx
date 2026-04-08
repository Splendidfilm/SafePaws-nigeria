import React from 'react'
import { motion } from 'framer-motion'

    const cardDetails = [
        {num: 1, head: 'Create an account', desc:'Join our comunity in seconds with a simple sin up process to access all features.'},
        {num: 2, head: 'Register your pet', desc:'Add your furry freinds profiles including health records and specific travel needs.'},
        {num: 3, head: 'Track, report and protect', desc:'Monitor journeys, access health reports, and keep your pets safe with our ecosystem.'},
    ]


export default function GetStarted() {


  return (
    <div className='  space-y-3 flex flex-col items-center justify-center w-full py-7 ' >
        <h2 className='uppercase font-semibold' >onboarding</h2>
        <h1 className='text-2xl font-bold' >Get Started with SafePaws</h1>
        <div className=' rounded-full px-10 py-0.5 bg-[#17CFAD] ' />

        {/* Conatainers */}

        <div className=" grid md:grid-cols-3 grid-cols-1 space-y-7 place-items-center place-content-center ">
        {cardDetails.map((item,index) =>(
             <motion.div
             key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className=" w-2/3 flex flex-col items-center bg-gray-100 border border-gray-100 rounded-3xl p-8  hover:shadow-2xl transition-shadow"
                >
                  {/* Number Circle - Auto play animation when in view */}
                  <motion.div
                    initial={{ 
                      scale: 0.6, 
                      rotate: 15,
                      backgroundColor: '#D1F5EF' 
                    }}
                    whileInView={{ 
                      scale: 1.1,      
                      rotate:0,
                      backgroundColor: '#17CFAD'
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 0 
                    }}
                    // viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      ease: "backOut",
                      backgroundColor: { duration: 0.6, delay: 0.15 }
                    }}
                    className="w-16 h-16 flex items-center justify-center rounded-full text-3xl font-bold text-white shadow-lg mb-6"
                  >
                    {item.num}
                  </motion.div>
            
                  <h2 className="text-2xl font-semibold text-slate-800 text-center mb-3">
                    {item.head}
                  </h2>
            
                  <p className="text-slate-600 text-base leading-relaxed text-center">
                    {item.desc}
                  </p>
                </motion.div>
        ))}


        </div>

    </div>
  )
}
