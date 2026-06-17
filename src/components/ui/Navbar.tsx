// src/components/marketing/Navbar.tsx
'use client';

import { useState } from 'react';
import Logo from './Logo';
import Button from './button';
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';

const navLinks = [
  { name: 'Home', link: '/' },
  { name: 'Careers', link: '/careers' },
  { name: 'About us', link: '/about' },
  { name: 'Help Center', link: '/help' },
  { name: 'Safety Guidlines', link: '/safety' },
];


export default function Navbar() {
  const route = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white/40 backdrop-blur-xl dark:bg-[#1a2e2b]/20 border-b border-zinc-200 dark:border-[#2a403d] sticky top-0 z-50">
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
                  className="text-slate-700 dark:text-zinc-200 hover:text-[#17CFAD] font-medium transition-colors"
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
            className="md:hidden p-2 text-slate-700 dark:text-zinc-200 hover:text-[#17CFAD] transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </header>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-zinc-100 dark:border-[#2a403d] flex flex-col gap-5">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="text-slate-700 dark:text-zinc-200 hover:text-[#17CFAD] font-medium py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            <div className="pt-4">
              <Button 
              onClick={() => route.push('/login')}
              variant="primary" size="md" className="w-full">
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}