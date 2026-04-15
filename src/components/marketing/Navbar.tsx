// src/components/marketing/Navbar.tsx
'use client';

import { useState } from 'react';
import Logo from '../ui/Logo';
import Button from '../ui/button';

const navLinks = [
  { name: 'Home', link: '/' },
  { name: 'Services', link: '#services' },
  { name: 'How it Works', link: '#how-it-works' },
  { name: 'Coverage', link: '#coverage' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white dark:bg-[#1a2e2b] border-b border-gray-200 dark:border-[#2a403d] sticky top-0 z-50">
      <div className="w-full mx-auto px-4 md:px-10 lg:px-16">
        <header className="flex items-center justify-between py-4">
          
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8 lg:gap-10">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="text-slate-700 dark:text-gray-200 hover:text-[#17CFAD] font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <Button variant="primary" size="md">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 dark:text-gray-200 hover:text-[#17CFAD] transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </header>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-100 dark:border-[#2a403d] flex flex-col gap-5">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="text-slate-700 dark:text-gray-200 hover:text-[#17CFAD] font-medium py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            <div className="pt-4">
              <Button variant="primary" size="md" className="w-full">
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}