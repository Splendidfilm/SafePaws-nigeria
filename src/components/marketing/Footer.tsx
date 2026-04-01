'use client'

import { useState } from 'react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="px-4 md:px-10 lg:px-40 max-w-[960px] mx-auto">
        <header className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex items-center gap-4 text-[--color-text-main]">
            <div className="size-8 flex items-center justify-center rounded-lg bg-[--color-primary]/20 text-[--color-primary]">
              <span className="material-symbols-outlined">pets</span>
            </div>
            <h2 className="text-[--color-text-main] text-lg font-bold leading-tight tracking-[-0.015em]">
              SafePaws Nigeria
            </h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-6 lg:gap-9">
              <a className="text-[--color-text-main] text-sm font-medium hover:text-[--color-primary] transition-colors" href="#">
                Home
              </a>
              <a className="text-[--color-text-main] text-sm font-medium hover:text-[--color-primary] transition-colors" href="#services">
                Services
              </a>
              <a className="text-[--color-text-main] text-sm font-medium hover:text-[--color-primary] transition-colors" href="#how-it-works">
                How It Works
              </a>
              <a className="text-[--color-text-main] text-sm font-medium hover:text-[--color-primary] transition-colors" href="#coverage">
                Coverage
              </a>
            </div>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[--color-primary] hover:bg-[--color-primary]/90 transition-colors text-[#111816] text-sm font-bold tracking-[0.015em]">
              <span className="truncate">Book Now</span>
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <span 
              className="material-symbols-outlined text-[--color-text-main] cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              menu
            </span>
          </div>
        </header>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-4">
            <a className="text-[--color-text-main] text-sm font-medium hover:text-[--color-primary] transition-colors" href="#">
              Home
            </a>
            <a className="text-[--color-text-main] text-sm font-medium hover:text-[--color-primary] transition-colors" href="#services">
              Services
            </a>
            <a className="text-[--color-text-main] text-sm font-medium hover:text-[--color-primary] transition-colors" href="#how-it-works">
              How It Works
            </a>
            <a className="text-[--color-text-main] text-sm font-medium hover:text-[--color-primary] transition-colors" href="#coverage">
              Coverage
            </a>
            <button className="flex w-full cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-[--color-primary] hover:bg-[--color-primary]/90 transition-colors text-[#111816] text-sm font-bold tracking-[0.015em]">
              <span>Book Now</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}