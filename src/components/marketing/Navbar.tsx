'use client'

import { useState } from 'react'
// import "../../app/globals.css";
import Logo from '../ui/Logo';
import { motion } from 'framer-motion';
import Button from '../ui/button';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const Links =[
    {name:'Home',link:'/'},
    {name:'Services',link:'#Services'},
    {name:'How-it-works',link:'#how-it-works'},
    {name:'Coverage',link:'#coverage'},
  ]

  return (
    <div className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="px-4 md:px-10 lg:px-40 mx-auto">
        <header className="flex items-center justify-between py-3">
          {/* Logo */}
        <Logo/>
          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-6 lg:gap-9">

            {Links.map((link) => (
              <a key={link.name} className="text-emerald-900 text-sm font-medium hover:text-emerald-600 transition-all" href={link.link}>
                {link.name}
              </a>
            ))}

            </div>
            <Button type='Book now' />
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <span 
              className="material-symbols-outlined text-emerald-900 cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              menu
            </span>
          </div>
        </header>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-4">
            {Links.map((link) => (
              <a key={link.name} className="text-slate-800 text-sm font-medium hover:text-emerald-700 transition-all" href={link.link}>
                {link.name}
              </a>
            ))}
            <Button size='md' type='Book now' />
          </div>
          
        )}
      </div>
    </div>
  )
}

            // <button className="flex w-full cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-[--color-primary] hover:bg-[--color-primary]/90 transition-colors text-[#111816] text-sm font-bold tracking-[0.015em]">
            //   <span>Book Now</span>
            // </button>