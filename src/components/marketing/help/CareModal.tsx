import React from 'react'
import { X } from 'lucide-react'

type RefundPolicyProps= {
    isOpen: boolean;
    onClose: () => void;
}

// const []
const conditions = [
  {icon:'amount_balance',text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam praesentium est cumque libero, provident aliquid! Consequuntur voluptatum quibusdam nihil deleniti.'},
  {icon:'amount_balance',text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam praesentium est cumque libero, provident aliquid! Consequuntur voluptatum quibusdam nihil deleniti.'},
  {icon:'amount_balance',text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam praesentium est cumque libero, provident aliquid! Consequuntur voluptatum quibusdam nihil deleniti.'},
  {icon:'amount_balance',text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam praesentium est cumque libero, provident aliquid! Consequuntur voluptatum quibusdam nihil deleniti.'},
]
export default function RefundPolicy({isOpen , onClose} : RefundPolicyProps) {
    if (!isOpen) return null
  return (
     <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm' >
        <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-y-scroll h-full"
        onClick={(e)=> e.stopPropagation}
        >
       
            <div className="px-6 py-5 border-b flex items-center justify-between">
        <h2 className='text-xl font-bold text-zinc-900' >Refund Policy</h2>
        <button 
        onClick={onClose}
        className='p-2 hover:bg-zinc-100 rounded-full'
        aria-label="Close payment modal"
        title="Close payment modal"
        >   
            <X size={24} className='text-zinc-500' />
        </button>
            </div>

        <div className=" p-6 space-y-8 ">
        <section>
            <h3 className='text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4' ></h3>
        <div className="flex items-center justify-center gap-4">
 
            <div className="flex flex-col items-center justify-center p-6 bg-white border border-zinc-200 rounded-2xl transition-all shadow-2xl cursor-pointer group">
                <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-zinc-600 text-3xl">payments</span>
                </div>
                <span className='font-bold text-zinc-800' >Refund</span>
                <span className='text-xs text-zinc-500 mt-1' >
                   Our terms and conditions
                </span>
            </div>
        </div>
        </section>

          {/* Conditions */}
        <section className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
            {conditions.map((condition,index)=>(
              <div className="flex items-center gap-3 mb-5">
              <span className="material-symbols-outlined text-primary">{condition.icon}</span>
              <h3 className="text-sm font-bold text-zinc-400 ">{condition.text}</h3>
            </div>
            ))}
          </section>

          {/* Pay on Pickup Note */}
          <section className="flex gap-4 p-5 bg-[#D1F5EF]/30 rounded-2xl border border-primary/20">
            <span className="material-symbols-outlined text-primary shrink-0">info</span>
            <div>
              <h4 className="text-sm font-bold text-primary mb-1">Pay on Pickup Policy</h4>
              <p className="text-xs text-zinc-600 leading-relaxed">
                We offer &apos;Pay on Pickup&apos; for local intra-city relocations. 
                A 30% commitment deposit is required for inter-state bookings.
              </p>
            </div>
          </section>


        </div>

        </div>

        </div>
  )
}

