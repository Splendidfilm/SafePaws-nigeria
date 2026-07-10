// src/components/marketing/Navbar.tsx
'use client';

import { useState } from 'react';
import Logo from './Logo';
import Button from './button';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';
import { style } from 'framer-motion/client';

const navLinks = [
  { name: 'Home', link: '/' },
  { name: 'Careers', link: '/careers' },
  { name: 'About us', link: '/about' },
  { name: 'Help Center', link: '/help' },
  { name: 'Safety Guidlines', link: '/safety' },
];


export default function Navbar() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    // <nav className="w-full bg-white/40 backdrop-blur-xl dark:bg-[#1a2e2b]/20 border-b border-zinc-200 dark:border-[#2a403d] sticky top-0 z-50">
    //   <div className="w-full mx-auto px-4 md:px-10 lg:px-16">
    //     <header className="flex items-center justify-between py-4">
          
    //       {/* Logo */}
    //       <Logo />

    //       {/* Desktop Navigation */}
    //       <div className="hidden md:flex items-center gap-10">
    //         <div className="flex items-center gap-8 lg:gap-10">
    //           {navLinks.map((item) => (
    //             <a
    //               key={item.name}
    //               href={item.link}
    //               className="text-slate-700 dark:text-zinc-200 hover:text-[#17CFAD] font-medium transition-colors"
    //             >
    //               {item.name}
    //             </a>
    //           ))}
    //         </div>

    //         <Button variant="primary" size="md">
    //           Book Now
    //         </Button>
    //       </div>

    //       {/* Mobile Menu Button */}
    //       <button
    //         onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    //         className="md:hidden p-2 text-slate-700 dark:text-zinc-200 hover:text-[#17CFAD] transition-colors"
    //         aria-label="Toggle menu"
    //       >
    //         <span className="material-symbols-outlined text-3xl">
    //           {mobileMenuOpen ? 'close' : 'menu'}
    //         </span>
    //       </button>
    //     </header>

    //     {/* Mobile Menu */}
    //     {mobileMenuOpen && (
    //       <div className="md:hidden py-6 border-t border-zinc-100 dark:border-[#2a403d] flex flex-col gap-5">
    //         {navLinks.map((item) => (
    //           <a
    //             key={item.name}
    //             href={item.link}
    //             className="text-slate-700 dark:text-zinc-200 hover:text-[#17CFAD] font-medium py-2 transition-colors"
    //             onClick={() => setMobileMenuOpen(false)}
    //           >
    //             {item.name}
    //           </a>
    //         ))}
            
    //         <div className="pt-4">
    //           <Button 
    //           onClick={() => route.push('/login')}
    //           variant="primary" size="md" className="w-full">
    //             Book Now
    //           </Button>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </nav>

        <nav
        
        className=" sticky  flex items-center justify-between px-6 md:px-12 py-6 top-0 z-50 bg-bg/20 backdrop-blur-2xl scroll ">

         <Logo/>
    
            <div className="hidden md:flex items-center gap-8">
              {["Services", "How It Works", "Coverage", "Pricin"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                  className="text-sm font-medium transition-colors"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "white")}
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)")
                  }
                >
                  {item}
                </a>
              ))}
            </div>
    
            <div className="flex items-center gap-3">
              <Button
              size='sm'
              variant='none'
                onClick={() => router.push("/login")}
                className="hidden md:block text-sm font-medium transition-colors hover:text-white hover:scale-105 "
              >
                Log in
              </Button>
              <Button
                onClick={() => router.push("/register")}
                size='sm'
                className="text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                Get Started
              </Button>
            </div>
          </nav>
    
  );
}