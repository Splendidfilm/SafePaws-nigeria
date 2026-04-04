// src/components/marketing/help/HelpCategories.tsx
import Button from "@/components/ui/button";

export default function HelpCategories() {
  return (
    <section className="w-full mx-auto px-6 py-20 bg-white">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Browse by Topic</h2>
        <p className="text-gray-600 mt-2">Find quick answers to common questions about pet relocation in Nigeria.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Booking & Scheduling - Large Card */}
        <div className="md:col-span-8 bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all group">
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 bg-[#D1F5EF] rounded-2xl flex items-center justify-center text-[#17CFAD] shrink-0 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">calendar_month</span>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Booking & Scheduling</h3>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-600 hover:text-[#17CFAD] flex items-center gap-2">→ How to book a pet move?</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#17CFAD] flex items-center gap-2">→ Required documents for transit</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#17CFAD] flex items-center gap-2">→ Rescheduling your pet&apos;s trip</a></li>
                </ul>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-600 hover:text-[#17CFAD] flex items-center gap-2">→ International vs Domestic</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#17CFAD] flex items-center gap-2">→ Last-minute bookings</a></li>
                </ul>
              </div>
            </div>
          </div>
          <button className="mt-10 text-[#17CFAD] font-bold flex items-center gap-2 hover:gap-3 transition-all">
            View all articles <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>

        {/* Pet Care */}
        <div className="md:col-span-4 bg-[#F1F5F3] p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all group flex flex-col">
          <div className="w-14 h-14 bg-[#D1F5EF] rounded-2xl flex items-center justify-center text-[#17CFAD] mb-6 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-3xl">pets</span>
          </div>
          <h3 className="text-2xl font-bold mb-4">Pet Care & Comfort</h3>
          <ul className="space-y-4 flex-1 border-b-2 border-b-zinc-200 pb-10">
            <li><a href="#" className="text-gray-600 hover:text-[#17CFAD]">Feeding during transit</a></li>
            <li><a href="#" className="text-gray-600 hover:text-[#17CFAD]">Sedation policy & safety</a></li>
            <li><a href="#" className="text-gray-600 hover:text-[#17CFAD]">Crate size guide</a></li>
            <li><a href="#" className="text-gray-600 hover:text-[#17CFAD]">Special medical needs</a></li>
          </ul>
          <p className="text-xs text-gray-500 font-medium mt-auto pt-4">12 Articles</p>
        </div>

        {/* Payments */}
        <div className="md:col-span-5 border-2 p-8 rounded-3xl  border-gray-200 hover:shadow-lg transition-all bg-amber-50 group">
          <div className="w-14 h-14  rounded-2xl flex items-center justify-center bg-amber-200 text-amber-600 mb-6 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-3xl">payments</span>
          </div>
          <h3 className="text-2xl font-bold mb-4">Payments & Pricing</h3>
          <ul className="space-y-4">
            <li><a href="#" className="flex justify-between text-gray-600 hover:text-[#17CFAD]">Refund policy <span className="material-symbols-outlined text-sm">open_in_new</span></a></li>
            <li><a href="#" className="flex justify-between text-gray-600 hover:text-[#17CFAD]">Accepted payment methods <span className="material-symbols-outlined text-sm">open_in_new</span></a></li>
            <li><a href="#" className="flex justify-between text-gray-600 hover:text-[#17CFAD]">Understanding quotes <span className="material-symbols-outlined text-sm">open_in_new</span></a></li>
          </ul>
        </div>

        {/* Safety & Insurance */}
        <div className="md:col-span-7 bg-zinc-200 p-8 rounded-3xl border-2 border-zinc-300 hover:shadow-lg transition-all group relative overflow-hidden">
          <div className="relative z-10">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-gray-700 mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">verified_user</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Safety & Insurance</h3>
            <p className="text-gray-600 mb-8 max-w-md">
              Learn how we protect your pets with 24/7 monitoring and comprehensive transit insurance coverages.
            </p>
            <div className="flex gap-4">
              <Button
              type='Insurance Details'
              variant='insurance'
              />
              <Button
              type="Our Carriers"
              variant="carriers"
              />
            </div>
          </div>
          <span className="material-symbols-outlined absolute -right-10 -bottom-10 text-[180px] text-gray-200">shield</span>
        </div>
      </div>
    </section>
  );
}