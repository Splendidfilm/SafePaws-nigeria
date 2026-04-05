'use client'

// import { Link } from 'lucide-react';
import React from 'react'
import { useState } from 'react'

type ApplicationFormProps ={
    jobTitle: string;
};



export default function ApplicationForm({jobTitle}: ApplicationFormProps) {

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

        alert(`Application for ${jobTitle} submitted successfully!`)
        setIsSubmitting(false)

        setFormData({
      fullName: '', email: '', phone: '', city: 'Lagos',
      linkedin: '', portfolio: '', whyJoin: '', experience: ''
    });

    }

  return (
    
<div className="max-w-5xl mx-auto px-4 md:px-8 pt-24 pb-20">
      <header className="mb-12 text-center md:text-left">
        <div className="flex items-center gap-2 text-[#17CFAD] font-semibold mb-3">
          <span className="material-symbols-outlined">work</span>
          <span className="uppercase tracking-widest text-xs">Career Opportunity</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Apply for {jobTitle}
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl">
          Join Nigeria&apos;s leading pet safety network. Help us provide exceptional care and security for furry companions.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-10">
            
            {/* Personal Information */}
            <section className="bg-white p-8 rounded-3xl border border-gray-100">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-[#17CFAD]">person</span>
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#17CFAD] focus:ring-1 focus:ring-[#17CFAD]"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#17CFAD] focus:ring-1 focus:ring-[#17CFAD]"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#17CFAD] focus:ring-1 focus:ring-[#17CFAD]"
                    placeholder="+234 000 000 0000"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium mb-2">City of Residence</label>
                  <select
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#17CFAD] focus:ring-1 focus:ring-[#17CFAD]"
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
            <section className="bg-white p-8 rounded-3xl border border-gray-100">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-[#17CFAD]">link</span>
                Professional Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">LinkedIn Profile</label>
                  <input
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    type="url"
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#17CFAD]"
                    placeholder="linkedin.com/in/username"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Portfolio / Website/ GitHub</label>
                  <input
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    type="url"
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#17CFAD]"
                    placeholder="yourportfolio.com"
                  />
                </div>
              </div>
            </section>

            {/* Resume Upload */}
            <section className="bg-white p-8 rounded-3xl border border-gray-100">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-[#17CFAD]">upload_file</span>
                Resume / CV
              </h2>
              <div className="border-2 border-dashed border-gray-300 rounded-3xl p-12 text-center hover:border-[#17CFAD] transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-5xl text-gray-400 mb-4 block">cloud_upload</span>
                <p className="font-semibold text-gray-700">Drag and drop your file here</p>
                <p className="text-sm text-gray-500 mt-1">or click to browse (PDF, DOCX • Max 5MB)</p>
              </div>
            </section>

            {/* Questionnaire */}
            <section className="bg-white p-8 rounded-3xl border border-gray-100">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-[#17CFAD]">quiz</span>
                Questionnaire
              </h2>
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-medium mb-2">Why do you want to join SafePaws?</label>
                  <textarea
                    name="whyJoin"
                    value={formData.whyJoin}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#17CFAD]"
                    placeholder="Tell us about your motivation..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Tell us about your experience with pets</label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#17CFAD]"
                    placeholder="Describe your background handling animals..."
                  />
                </div>
              </div>
            </section>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#17CFAD] hover:bg-[#12A88F] disabled:bg-gray-400 text-white font-bold py-5 rounded-2xl text-lg transition-all active:scale-[0.98]"
            >
              {isSubmitting ? "Submitting Application..." : "Submit Application"}
            </button>
          </form>
        </div>

        {/* Sidebar Tips */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-3xl border border-gray-100">
            <h3 className="font-bold text-lg mb-5">Application Tips</h3>
            <ul className="space-y-5 text-sm text-gray-600">
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-[#17CFAD] mt-0.5">check_circle</span>
                Highlight any certifications in animal behavior or first aid.
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-[#17CFAD] mt-0.5">check_circle</span>
                Be specific about the breeds you have worked with.
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-[#17CFAD] mt-0.5">check_circle</span>
                Mention if you have a valid driver&apos;s license.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
