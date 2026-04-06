'use client'
import React, { useState } from 'react'
import { X } from 'lucide-react'

type PaymentModalProps ={
    isOpen: boolean;
    onClose: () => void;
}

export default function PaymentModal({ isOpen, onClose }: PaymentModalProps) {
const [copied, setCopied] = useState(false)

const copyAccountNumber = () => {
  navigator.clipboard.writeText('1224559800')

  setCopied(true)

  setTimeout(() => {
    setCopied(false)
  }, 2000)

}

    if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm' >
        <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden"
        onClick={(e)=> e.stopPropagation}
        >
            <div className="px-6 py-5 border-b flex items-center justify-between">
        <h2 className='text-xl font-bold text-gray-900' >Accepted Payment Methods</h2>
        <button 
        onClick={onClose}
        className='p-2 hover:bg-gray-100 rounded-full'
        aria-label="Close payment modal"
        title="Close payment modal"
        >   
            <X size={24} className='text-gray-500' />
        </button>
            </div>

        <div className=" p-6 space-y-8 ">
        <section>
            <h3 className='text-xs font-bold uppercase tracking-widest text-gray-500 mb-4' >Online Gateway</h3>
        <div className="grid grid-cols-2 gap-4">
            {/* Paystack */}
            <div className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-2xl hover:border-[#17CFAD] transition-all cursor-pointer group ">
                <div className="  bg-blue-100 rounded-full flex flex-col  items-center justify-center mb-3">
                <span className="material-symbols-outlined text-blue-600 text-3xl p-4">account_balance_wallet</span>
                
                </div>
                <span className='font-bold text-gray-800' >Paystack</span>
                <span className='text-xs textgray-500 mt-1' >
                    Card & Bank App
                </span>
            </div>
            {/* Flutterwave */}
            <div className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-2xl hover:border-[#17CFAD] transition-all cursor-pointer group">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-orange-600 text-3xl">payments</span>
                </div>
                <span className='font-bold text-gray-800' >Flutterwave</span>
                <span className='text-xs textgray-500 mt-1' >
                    Mobile Money & Cards
                </span>
            </div>
        </div>
        </section>

        <section className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <div className="flex items-center gap-3 mb-5">
              <span className="material-symbols-outlined text-[#17CFAD]">account_balance</span>
              <h3 className="text-sm font-bold">Direct Bank Transfer</h3>
            </div>
            
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Bank Name</span>
                <span className="font-semibold">Zenith Bank PLC</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Account Number</span>
                <span className="font-semibold flex items-center gap-2">
                  1224559800 
                  {
                    <span 
                    onClick={copyAccountNumber}
                  className="material-symbols-outlined text-xs cursor-pointer hover:text-[#17CFAD]">{copied ? 'check' : 'content_copy'}</span>
                  }
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Account Name</span>
                <span className="font-semibold">SafePaws Logistics Ltd</span>
              </div>
            </div>
          </section>

          {/* Pay on Pickup Note */}
          <section className="flex gap-4 p-5 bg-[#D1F5EF]/30 rounded-2xl border border-[#17CFAD]/20">
            <span className="material-symbols-outlined text-[#17CFAD] shrink-0">info</span>
            <div>
              <h4 className="text-sm font-bold text-[#17CFAD] mb-1">Pay on Pickup Policy</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                We offer &apos;Pay on Pickup&apos; for local intra-city relocations. 
                A 30% commitment deposit is required for inter-state bookings.
              </p>
            </div>
          </section>

        {/* Footer */}
        <div className="px-6 py-5 bg-gray-50 border-t flex justify-end gap-3">
          <button 
            onClick={onClose}
            className="px-6 py-3 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors border-2 border-zinc-300 rounded-lg hover:bg-zinc-100"
          >
            Close
          </button>
          <button
           className="px-8 py-3 bg-[#17CFAD] text-white text-sm font-bold rounded-2xl hover:bg-[#12A88F] transition-all">
            Confirm Method
          </button>
        </div>

        </div>

        </div>

        </div>

  )
}
