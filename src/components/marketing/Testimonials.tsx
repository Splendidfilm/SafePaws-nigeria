// src/components/marketing/Testimonials.tsx
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "I was so nervous about moving my Golden Retriever from Lagos to Abuja, but SafePaws was incredible. The GPS tracking kept my mind at ease the whole way!",
    name: "Chidi Okoro",
    petInfo: "Parent of Max (Golden Retriever)",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC692FUmEG8IW0KbDPOjuC7fo_yOTouEShml1ch5eo1QxbDJfwupb3g6ZTWSm2n9boxQ2NOkYTThLQ8xhgIgqW1PRB_Vl2Z0Rv7Vy1j4Qvq3wkwZHGRQW8lhbi9KzuIuW2UDAzr4ZvUF-GmhlyoWXcGiIslOIbuWE1rUQWBHsHXDc0B5-eI8hHKWMGPEokglt6pHPL_IL1PiMMgMrY47jDzI0zsnW4TF1GKGQ9tKCvLP-i_pB3dGD-5A8pIU-cPwj0tyomHNcWjzgoT"
  },
  {
    quote: "SafePaws handles my cats for their vet visits in Lekki every month. They are so gentle and the vans are perfectly chilled. Best service in Nigeria!",
    name: "Fatima Yusuf",
    petInfo: "Parent of Luna & Leo (Siamese)",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwhDITb3ZrwqAbPJCUJVOin52wHb4_aguZUMJFx51mP3dbgOAGIkwUw1eCvEybWMi6sev1QwVE8eetp3H6cqgb6lQW4xk9e92VQeTV3pV3019k-xPPI8zSk-TPmbMAmT92hX8sRZQBakJEKT3jcPEF7rf_BukoioEpihHRrxHM7mzztrORdJ4aWY2zkii9PCGrMW9_fj9EdxvKB8i4UANaduN7i82oG06W3BMYh745-dBKE4wUsj-7TZSCwxQ2ln5SSaeZ0m5imkfI"
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-white dark:bg-[#11211e] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        
        <div className="text-center mb-12">
          <h2 className="text-[#17CFAD] text-sm font-bold tracking-wider uppercase mb-2">
            Happy Tails
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Trusted by Pet Parents
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
<motion.div
  key={index}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: index * 0.1 }}
  className="bg-[#f6f8f8] dark:bg-[#1a2e2b] border border-gray-100 dark:border-[#2a403d] 
             rounded-3xl p-8 hover:shadow-xl transition-all flex flex-col"
>
  {/* Quote Icon + Text */}
  <div className="relative mb-10">
    <span className="material-symbols-outlined absolute -left-2 -top-4 text-[#17CFAD]/10 dark:text-white/30 text-8xl rotate-180">
      format_quote
    </span>

    <p className="text-slate-700 dark:text-gray-300 italic leading-relaxed text-[17px] pl-6">
      {testimonial.quote}
    </p>

    <span className="material-symbols-outlined absolute -right-2 -bottom-6 text-[#17CFAD]/10 dark:text-white/30 text-8xl">
      format_quote
    </span>
  </div>

  {/* Author Info */}
  <div className="flex items-center gap-4 mt-auto">
    <div 
      className="w-14 h-14 rounded-full bg-cover border-2 border-[#17CFAD] flex-shrink-0"
      style={{ backgroundImage: `url("${testimonial.avatar}")` }}
    />
    <div>
      <h4 className="font-semibold text-slate-900 dark:text-white">
        {testimonial.name}
      </h4>
      <p className="text-sm text-slate-500 dark:text-gray-400">
        {testimonial.petInfo}
      </p>
    </div>
  </div>
</motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}