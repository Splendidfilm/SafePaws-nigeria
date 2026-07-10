'use client';

import Logo from './Logo';
import Button from './button';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const navItems = [
  'Services',
  'How It Works',
  'Coverage',
  'Pricing',
];

export default function Navbar() {
  const router = useRouter();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  // Hide navbar on scroll down
  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll <= 20) {
        setShowNavbar(true);
      } else if (currentScroll > lastScroll) {
        setShowNavbar(false);
        setMobileMenuOpen(false);
      } else {
        setShowNavbar(true);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling while menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`
          fixed top-0 left-0 w-full z-50
          flex items-center justify-between
          px-6 md:px-12 py-5
          bg-bg/20 backdrop-blur-2xl
          transition-transform duration-300 ease-in-out
          ${showNavbar ? 'translate-y-0' : '-translate-y-full'}
        `}
      >
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              className="text-sm font-medium text-text transition-colors hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <Button
            size="sm"
            variant="none"
            onClick={() => router.push('/login')}
            className="hidden md:block"
          >
            Log in
          </Button>

          <Button
            size="sm"
            className="hidden md:block"
            onClick={() => router.push('/register')}
          >
            Get Started
          </Button>

          {/* Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? (
              <X size={28} className="text-text" />
            ) : (
              <Menu size={28} className="text-text" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[72px] left-0 w-full z-40 md:hidden bg-bg/20 backdrop-blur-xl border-t border-white/10"
          >
            <div className="flex flex-col gap-6 px-6 py-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                  className="text-lg font-medium text-text hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}

              <Button
                variant="none"
                onClick={() => {
                  router.push('/login');
                  setMobileMenuOpen(false);
                }}
              >
                Log in
              </Button>

              <Button
                onClick={() => {
                  router.push('/register');
                  setMobileMenuOpen(false);
                }}
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}