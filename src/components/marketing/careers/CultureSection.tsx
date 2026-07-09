// src/components/marketing/careers/CultureSection.tsx
export default function CultureSection() {
  return (
    <section id="culture" className="py-24 bg-[#F8FAF9] dark:bg-[#11211e]  ">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className=" font-serif  md:text-5xl lg:text-[54px] font-bold  leading-tight text-brand-green text-5xl  text-zinc-900 mb-4 dark:text-zinc-50 ">Values that drive our pack</h2>
          <p className="text-zinc-600 dark:text-zinc-100 text-xl  max-w-2xl mx-auto">
            We are more than a logistics company; we are a community of pet lovers dedicated to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-zinc-100 hover:border-primary dark:bg-[#1a2e2b] dark:border-[#2a403d] transition-all group">
            <div className="w-14 h-14 bg-[#D1F5EF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined dark:text-zinc-800 text-primary text-4xl">favorite</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Pet-First Culture</h3>
            <p className="text-zinc-600 dark:text-zinc-100 ">Every decision we make starts with the safety and happiness of the pets in our care. They aren&apos;t just cargo; they&apos;re family.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-zinc-100 dark:bg-[#1a2e2b] dark:border-[#2a403d] hover:border-primary transition-all group">
            <div className="w-14 h-14 bg-[#D1F5EF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary text-4xl  dark:text-zinc-800 ">groups</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Diverse Pack</h3>
            <p className="text-zinc-600 dark:text-zinc-100 ">We believe diverse perspectives build better solutions. We welcome talent from all walks of life.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-zinc-100 dark:bg-[#1a2e2b] dark:border-[#2a403d] hover:border-primary transition-all group">
            <div className="w-14 h-14 bg-[#D1F5EF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary text-4xl dark:text-zinc-800">lightbulb</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Innovation in Logistics</h3>
            <p className="text-zinc-600 dark:text-zinc-100 ">We use technology to solve the unique challenges of pet relocation in West Africa.</p>
          </div>
        </div>
      </div>
    </section>
  );
}