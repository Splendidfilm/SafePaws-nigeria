// src/components/marketing/careers/CultureSection.tsx
export default function CultureSection() {
  return (
    <section id="culture" className="py-24 bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Values that drive our pack</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are more than a logistics company; we are a community of pet lovers dedicated to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-[#17CFAD] transition-all group">
            <div className="w-14 h-14 bg-[#D1F5EF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[#17CFAD] text-4xl">favorite</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Pet-First Culture</h3>
            <p className="text-gray-600">Every decision we make starts with the safety and happiness of the pets in our care. They aren&apos;t just cargo; they&apos;re family.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-[#17CFAD] transition-all group">
            <div className="w-14 h-14 bg-[#D1F5EF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[#17CFAD] text-4xl">groups</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Diverse Pack</h3>
            <p className="text-gray-600">We believe diverse perspectives build better solutions. We welcome talent from all walks of life.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-[#17CFAD] transition-all group">
            <div className="w-14 h-14 bg-[#D1F5EF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[#17CFAD] text-4xl">lightbulb</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Innovation in Logistics</h3>
            <p className="text-gray-600">We use technology to solve the unique challenges of pet relocation in West Africa.</p>
          </div>
        </div>
      </div>
    </section>
  );
}