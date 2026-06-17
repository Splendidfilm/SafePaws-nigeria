'use client'
import React, { useState } from 'react'
import { X } from 'lucide-react'
import Button from '@/components/ui/button'

type PaymentModalProps ={
    isOpen: boolean;
    onClose: () => void;
}

export default function PaymentModal({ isOpen, onClose }: PaymentModalProps) {
const [copied, setCopied] = useState(false)


    const [formData, setFormData] = useState({
        fullName:'',
        email:'',
        phone:'',
        city:'',
        linkedin:'',
        portfolio:'',
        whyJoin:'',
        experience:'',
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement >) =>{
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) =>{
        e.preventDefault()
        setIsSubmitting(true)

        await new Promise(resolve => setTimeout(resolve, 1500))

        alert(`Application for submitted successfully!`)
        setIsSubmitting(false)

        setFormData({
      fullName: '', email: '', phone: '', city: 'Lagos',
      linkedin: '', portfolio: '', whyJoin: '', experience: ''
    });

    }




    if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-2 bg-black/70 backdrop-blur-sm' >
        <div className="bg-white  max-w-lg rounded-3xl shadow-2xl overflow-y-scroll h-10/12"
        onClick={(e)=> e.stopPropagation}
        >
            <div className="px-6 py-5 border-b flex items-center justify-between">
        <h2 className='text-xl font-bold text-zinc-900' >Inquiry</h2>
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
            <h3 className='text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4' > Fill the Form </h3>
        </section>

      {/* Input */}
        <section className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
        <div className="flex items-center justify-around">
        <form onSubmit={handleSubmit} className="space-y-10">
                    
                    {/* Personal Information */}
                    <section className="bg-white p-8 rounded-3xl border border-zinc-100">
                      <h2 className="text-xl text-zinc-700 font-bold mb-6 flex items-center gap-3">
                        <span className="material-symbols-outlined text-[#17CFAD]">person</span>
                        Personal Information
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-zinc-500 text-sm font-medium mb-2">Full Name</label>
                          <input
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-2xl border border-zinc-200 focus:border-[#17CFAD] focus:ring-1 focus:ring-[#17CFAD]"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2 text-zinc-500 ">Email Address</label>
                          <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                            required
                            className="w-full px-4 py-3 rounded-2xl border border-zinc-200 focus:border-[#17CFAD] focus:ring-1 focus:ring-[#17CFAD]"
                            placeholder="john@example.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2 text-zinc-500 ">Phone Number</label>
                          <input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            type="tel"
                            required
                            className="w-full px-4 py-3 rounded-2xl border border-zinc-200 focus:border-[#17CFAD] focus:ring-1 focus:ring-[#17CFAD]"
                            placeholder="+234 000 000 0000"
                          />
                        </div>
                        <div>
                          <label htmlFor="city" className="block text-sm font-medium text-zinc-500 mb-2">City of Residence</label>
                          <select
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-2xl border border-zinc-200 focus:border-[#17CFAD] focus:ring-1 focus:ring-[#17CFAD] text-zinc-700 "  
                          >
                            <option value="Lagos">Lagos</option>
                            <option value="Abuja">Abuja</option>
                            <option value="Port Harcourt">Port Harcourt</option>
                            <option value="Ibadan">Ibadan</option>
                          </select>
                        </div>
                      </div>
                    </section>
        
                    {/* Professional Details */}
                    <section className="bg-white p-8 rounded-3xl border border-zinc-100">
                      <h2 className="text-xl font-bold mb-6 flex items-center gap-3 text-zinc-700 ">
                        <span className="material-symbols-outlined text-[#17CFAD]">link</span>
                        Professional Details
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2 text-zinc-500 ">Profile (Social Profile)</label>
                          <input
                            name="linkedin"
                            value={formData.linkedin}
                            onChange={handleChange}
                            type="url"
                            className="w-full px-4 py-3 rounded-2xl border border-zinc-200 focus:border-[#17CFAD]"
                            placeholder="linkedin.com/in/username"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2 text-zinc-500 ">Area of Speacialty</label>
                          <input
                            name="portfolio"
                            value={formData.portfolio}
                            onChange={handleChange}
                            type="url"
                            className="w-full px-4 py-3 rounded-2xl border border-zinc-200 focus:border-[#17CFAD]"
                            placeholder="yourportfolio.com"
                          />
                        </div>
                      </div>
                    </section>
        
                    {/* Resume Upload */}
                    <section className="bg-white p-8 rounded-3xl border border-zinc-100">
                      <h2 className="text-xl font-bold mb-6 flex items-center gap-3 text-zinc-900 ">
                        <span className="material-symbols-outlined text-[#17CFAD]">upload_file</span>
                        Resume / CV
                      </h2>
                      <div className="border-2 border-dashed border-zinc-300 rounded-3xl p-12 text-center hover:border-[#17CFAD] transition-colors cursor-pointer">
                        <span className="material-symbols-outlined text-5xl text-zinc-400 mb-4 block">cloud_upload</span>
                        <p className="font-semibold text-zinc-700">Drag and drop your file here</p>
                        <p className="text-sm text-zinc-500 mt-1">or click to browse (PDF, DOCX • Max 5MB)</p>
                      </div>
                    </section>
        
                    {/* Questionnaire */}
                    {/* <section className="bg-white p-8 rounded-3xl border border-zinc-100">
                      <h2 className="text-xl font-bold mb-6 flex items-center gap-3 text-zinc-900 ">
                        <span className="material-symbols-outlined text-[#17CFAD]">quiz</span>
                        Questionnaire
                      </h2>
                      <div className="space-y-8">
                        <div>
                          <label className="block text-sm font-medium mb-2 text-zinc-700 ">Why do you want to join SafePaws?</label>
                          <textarea
                            name="whyJoin"
                            value={formData.whyJoin}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-4 py-3 rounded-2xl border border-zinc-200 focus:border-[#17CFAD]"
                            placeholder="Tell us about your motivation..."
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2 text-zinc-700 ">Tell us about your experience with pets</label>
                          <textarea
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            rows={4}
                            className="w-full text-zinc-700 px-4 py-3 rounded-2xl border border-zinc-200 focus:border-[#17CFAD]"
                            placeholder="Describe your background handling animals..."
                          />
                        </div>
                      </div>
                    </section> */}
        
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#17CFAD] hover:bg-[#12A88F] disabled:bg-zinc-400 text-white font-bold py-5 rounded-2xl text-lg transition-all active:scale-[0.98]"
                    >
                      {isSubmitting ? "Submitting Application..." : "Submit Application"}
                    </button>
                  </form>
        </div>
          </section>


          {/* Notice */}
          <section className="flex gap-4 p-5 bg-[#D1F5EF]/30 rounded-2xl border border-[#17CFAD]/20">
            <span className="material-symbols-outlined text-[#17CFAD] shrink-0">info</span>
            <div>
              <h4 className="text-sm font-bold text-[#17CFAD] mb-1">Notice</h4>
              <p className="text-xs text-zinc-600 leading-relaxed">
               You will receive your resopionse within 2-3 days,Which  will be sent to the email you provided.
              </p>
            </div>
          </section>
        </div>

        </div>

        </div>

  )
}
