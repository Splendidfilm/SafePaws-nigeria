// src/components/marketing/careers/BenefitsSection.tsx
export default function BenefitsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#F8FAF9] p-7 rounded-3xl">
              <span className="material-symbols-outlined text-[#17CFAD] text-5xl mb-4 block">medical_services</span>
              <h4 className="font-bold text-lg mb-2">Health Coverage</h4>
              <p className="text-sm text-gray-600">Comprehensive medical plans for you and your dependents.</p>
            </div>

            <div className="bg-[#D1F5EF] p-7 rounded-3xl">
              <span className="material-symbols-outlined text-[#17CFAD] text-5xl mb-4 block">pets</span>
              <h4 className="font-bold text-lg mb-2">Pet Insurance</h4>
              <p className="text-sm text-gray-700">Free premium insurance for your own furry friends.</p>
            </div>

            <div className="bg-[#F8FAF9] p-7 rounded-3xl">
              <span className="material-symbols-outlined text-[#17CFAD] text-5xl mb-4 block">trending_up</span>
              <h4 className="font-bold text-lg mb-2">Growth Stipends</h4>
              <p className="text-sm text-gray-600">Annual budget for courses, books, and conferences.</p>
            </div>

            <div className="bg-[#F8FAF9] p-7 rounded-3xl">
              <span className="material-symbols-outlined text-[#17CFAD] text-5xl mb-4 block">distance</span>
              <h4 className="font-bold text-lg mb-2">Flexible Work</h4>
              <p className="text-sm text-gray-600">Remote and hybrid options to fit your lifestyle.</p>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl font-bold leading-tight mb-6">
              Benefits that actually <span className="text-[#17CFAD]">matter</span>
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              We take care of our pack so they can take care of our customers. 
              Our benefits are designed to support your physical, mental, and professional well-being.
            </p>

            <ul className="space-y-5 text-gray-700">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#17CFAD]">check_circle</span>
                Competitive Salary Packages
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#17CFAD]">check_circle</span>
                Equity Options for Early Employees
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#17CFAD]">check_circle</span>
                Generous Paid Time Off
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}