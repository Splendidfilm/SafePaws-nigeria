// src/components/marketing/Hero.tsx
import Image from 'next/image';
import Button from '../ui/button';

export default function Hero() {
  return (
    <section id="home" className="w-full bg-white dark:bg-[#11211e]">
      <div className="px-4 md:px-10 lg:px-40 mx-auto py-12 lg:py-20">
        <div className="flex flex-col-reverse gap-10 lg:flex-row lg:items-center w-full">
          
          {/* Left Content */}
          <div className="flex flex-col gap-6 md:w-1/2 flex-1 lg:pr-8">
            <div className="flex flex-col gap-4 text-left">
              {/* Badge */}
              <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#D1F5EF] dark:bg-[#17CFAD]/20 border border-[#17CFAD] w-fit">
                <span className="material-symbols-outlined text-[#17CFAD] text-sm">verified</span>
                <span className="text-xs font-semibold text-[#17CFAD] dark:text-[#5efbd7] uppercase tracking-wide">
                  Premium Pet Transport
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-slate-900 dark:text-white text-5xl lg:text-6xl font-black leading-[1.05] tracking-[-0.02em]">
                Safe, Reliable Transport
                <span className="text-[#17CFAD] block">For Your Pets Across Nigeria 🐾</span>
              </h1>

              <p className="text-slate-700 dark:text-gray-300 text-xl font-semibold leading-snug">
                We move your pets with care, comfort, and zero stress.
              </p>

              <p className="text-slate-600 dark:text-gray-400 text-base leading-relaxed">
                From climate-controlled vehicles to trained handlers, SafePaws ensures your furry companions travel safely across Nigeria&apos;s major cities.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="md">
                Book Pet Transport
              </Button>

              <Button variant="outline" size="md">
                See How It Works
              </Button>
            </div>

            {/* Trust Points */}
            <p className="text-sm text-slate-600 dark:text-gray-400">
              ✔ Fully monitored trips &nbsp;✔ Trained handlers &nbsp;✔ Nationwide coverage
            </p>

            {/* Social Proof */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2">
                <div className="size-8 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-[#11211e]" />
                <div className="size-8 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-[#11211e]" />
                <div className="size-8 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-[#11211e]" />
              </div>
              <p className="text-sm font-medium text-slate-600 dark:text-gray-400">
                Trusted by 500+ Pet Owners in Lagos, Abuja & Port Harcourt
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full flex-1">
            <div className="relative w-full aspect-4/3 rounded-3xl shadow-2xl overflow-hidden">
              <Image
                src="/images/group-of-portrait.jpg"
                alt="Happy dog in a pet carrier"
                priority
                fill
                className="object-cover"
                
              />
              <div className='absolute inset-0 bg-black/20' />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}