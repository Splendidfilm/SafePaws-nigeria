import Image from 'next/image'
import Button from './button'

export default function Hero() {
  return (
    <section id='home' className="w-full bg-white">
      <div className="px-4 md:px-10 lg:px-40 mx-auto py-10">
        <div className="flex flex-col-reverse gap-6 lg:flex-row lg:items-center w-full  ">
          {/* Left Content */}
          <div className="flex flex-col gap-6 md:w-1/2 flex-1 lg:pr-8">
            <div className="flex flex-col gap-4 text-left">
              {/* Badge */}
              <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-[#D1F5EF] border border-[#17CFAD] w-fit">
                <span className="material-symbols-outlined text-[#17CFAD] text-sm">verified</span>
                <span className="text-xs font-semibold text-[#17CFAD] uppercase tracking-wide">
                  Premium Pet Transport
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-text-main text-5xl font-black leading-[1.1] tracking-[-0.033em] sm:text-5xl lg:text-6xl flex flex-col">
                Safe Journey,<span className="text-[#17CFAD]">Happy Pets 🐾</span>
              </h1>

              {/* Subheading */}
              <h2 className="text-text-muted text-base font-normal leading-relaxed text-center lg:text-left">
                Experience stress-free travel for your furry friends. We provide premium, 
                climate-controlled pet transportation across Nigeria&apos;s major urban centers.
              </h2>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
              variant='primary'
              size='md'
              type="Book Transport Now"/>
              <Button
              variant='outline'
              size='md'
              type="View Coverage"/>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-2 pt-2">
              <div className="flex -space-x-2">
                <div className="size-8 rounded-full bg-gray-200 border-2 border-white" />
                <div className="size-8 rounded-full bg-gray-200 border-2 border-white" />
                <div className="size-8 rounded-full bg-gray-200 border-2 border-white" />
              </div>
              <p className="text-sm font-medium text-text-muted">
                Trusted by 500+ Nigerian Pet Owners
              </p>
            </div>
          </div>
          {/* Right Image */}
          <div className="w-full flex-1">
            <div className="relative w-full aspect-[4/3] rounded-2xl shadow-xl overflow-hidden p-7">
              <Image
                src="/images/group-of-portrait.jpg"
                // src="/images/pack.jpg"
                alt="Happy dog in a pet carrier"
                priority
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}