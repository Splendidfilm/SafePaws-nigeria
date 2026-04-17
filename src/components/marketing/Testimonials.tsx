// src/components/marketing/Testimonials.tsx
import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from './TestimonialCard';

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
             <TestimonialCard
                        key={index}
                        quote={testimonial.quote}
                        name={testimonial.name}
                        petInfo={testimonial.petInfo}
                        avatarUrl={testimonial.avatar}
                      /> 
            
          ))}
        </div>
      </div>
    </section>
  );
}