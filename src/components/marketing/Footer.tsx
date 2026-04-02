import React from 'react';
import Logo from '../ui/Logo';

function Footer() {
  return (
    <footer className="w-full bg-[#F8F9FA] pt-16 pb-10 rounded-t-3xl mb-10 rounded-b-3xl shadow-2xl ">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row gap-12 pb-12 border-b border-gray-200">
          
          {/* Logo + Description */}
          <div className="flex-1 lg:w-2/5">
            <Logo />
            <p className="mt-6 text-[#6B7280] leading-relaxed max-w-md">
              Providing safe, reliable, and comfortable transportation for pets across Nigeria. 
              Because they aren&apos;t just cargo — they are family.
            </p>
          </div>

          {/* Links Sections */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-10">
            
            {/* Company */}
            <div>
              <h3 className="font-semibold text-slate-700 mb-4">Company</h3>
              <ul className="space-y-3">
                {['About Us', 'Careers', 'Press'].map((item) => (
                  <li 
                    key={item}
                    className="text-[#6B7280] hover:text-[#17CFAD] transition-colors cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-slate-700 mb-4">Support</h3>
              <ul className="space-y-3">
                {['Help Center', 'Safety Guidelines', 'Terms of Service'].map((item) => (
                  <li 
                    key={item}
                    className="text-[#6B7280] hover:text-[#17CFAD] transition-colors cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-slate-700 mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="text-[#6B7280] hover:text-[#17CFAD] transition-colors cursor-pointer">
                  Email: info@safepawsng.com
                </li>
                <li className="text-[#6B7280] hover:text-[#17CFAD] transition-colors cursor-pointer">
                  Phone: +234 912 773 0659
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} SafePaws Nigeria. All rights reserved.
          </p>

          <div className="flex items-center gap-8">
            <p className="hover:text-[#17CFAD] transition-colors cursor-pointer">
              Privacy Policy
            </p>
            <p className="hover:text-[#17CFAD] transition-colors cursor-pointer">
              Terms of Service
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;