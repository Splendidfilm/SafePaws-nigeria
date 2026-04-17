'use client'
import React from 'react';
import Logo from '../ui/Logo';
import Link from 'next/link';

function Footer() {

const company =[
  {name:'About Us', link:'/about'},
  {name:'Careers', link:'/careers'},
  {name:'Press', link:'/press'},
]

const support =[
  {name:'Help Center', link:'/help'},
  {name:'Safety Guidelines', link:'/safety'},
  {name:'Terms of Service', link:'/terms'},
]

  return (
    <footer className="w-full bg-[#F8F9FA] pt-16 pb-10 rounded-t-3xl mb-18 shadow-2xl dark:bg-[#11211e] ">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row gap-12 pb-12 border-b border-gray-200">
          
          {/* Logo + Description */}
          <div className="flex-1 lg:w-2/5">
            <Logo />
            <p className="mt-6 text-[#6B7280] leading-relaxed max-w-md dark:text-zinc-300 ">
              Providing safe, reliable, and comfortable transportation for pets across Nigeria. 
              Because they aren&apos;t just cargo — they are family.
            </p>
          </div>

          {/* Links Sections */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-10">
            
            {/* Company */}
            <div>
              <h3 className="font-semibold text-slate-700 mb-4 dark:text-zinc-100 ">Company</h3>
              <ul className="space-y-3">
                {company.map((item,index) => (
                  <Link 
                  key={index}
                  href={item.link}>
                    <li 
                    className="text-[#6B7280] hover:text-[#17CFAD] transition-colors cursor-pointer dark:text-zinc-300"
                  >
                    {item.name }
                  </li>
                  </Link>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-slate-700 mb-4 dark:text-zinc-100">Support</h3>
              <ul className="space-y-3">
                {support.map((item, index) => (
                  <Link 
                  key={index}
                  href={item.link}
                  >
                  <li 
                    className="text-[#6B7280] hover:text-[#17CFAD] transition-colors cursor-pointer dark:text-zinc-300 "
                  >
                    {item.name}
                  </li>
                  </Link>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-slate-700 mb-4 dark:text-zinc-100">Contact</h3>
              <ul className="space-y-3">
                <li className="text-[#6B7280] hover:text-[#17CFAD] transition-colors cursor-pointer dark:text-zinc-300 ">
                  Email: info@safepawsng.com
                </li>
                <li className="text-[#6B7280] hover:text-[#17CFAD] transition-colors cursor-pointer dark:text-zinc-300 ">
                  Phone: +234 912 773 0659
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500 dark:text-zinc-200">
          <p>
            &copy; {new Date().getFullYear()} SafePaws Nigeria. All rights reserved.
          </p>

          <div className="flex items-center gap-8">
            <p className="hover:text-[#17CFAD] transition-colors cursor-pointer">
              Privacy Policy
            </p>
            <Link href="/terms" className="hover:text-[#17CFAD] transition-colors cursor-pointer">
              Terms of Service
            </Link>
          </div>    
        </div>

      </div>  
    </footer>
  );    
}
  
export default Footer;