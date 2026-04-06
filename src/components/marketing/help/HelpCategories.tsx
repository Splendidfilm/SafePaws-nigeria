'use client'

import { useState } from "react";
import { useRouter } from "next/navigation"; 
import PaymentModal from "@/components/ui/PaymentInfoModal";

export default function HelpCategories() {

  const router = useRouter()

  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const paymentOptions = [
    { text: "Refund Policy" },
    { text: "Accepted Payment Methods" },
    { text: "Understanding Quotes" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-white">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Browse by Topic</h2>
        <p className="text-gray-600 mt-2">
          Find quick answers to commn questions about pet relocation in Nigeria.
        </p>
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

        {/* Payments & Pricing - FIXED */}
        <div className="md:col-span-5 bg-amber-50 p-8 rounded-3xl border border-gray-200 hover:shadow-lg transition-all group">
          <div className="w-14 h-14 bg-amber-200 rounded-2xl flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-3xl">payments</span>
          </div>
          <h3 className="text-2xl font-bold mb-6">Payments & Pricing</h3>

          <div className="space-y-4">
            {paymentOptions.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  if (item.text === "Accepted Payment Methods") {
                    setShowPaymentModal(true);
                  } else {
                    // For now, just alert. You can expand this later
                    alert(`Opening: ${item.text}`);
                  }
                }}
                className="w-full flex justify-between items-center text-left py-3 px-4 hover:bg-white rounded-xl transition-colors text-gray-700 hover:text-[#17CFAD]"
              >
                {item.text}
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </button>
            ))}
          </div>
        </div>

        {/* Safety & Insurance */}
        <div className="md:col-span-7 bg-zinc-100 p-8 rounded-3xl border border-zinc-200 hover:shadow-lg transition-all group relative overflow-hidden">
          <div className="relative z-10">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-gray-700 mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">verified_user</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Safety & Insurance</h3>
            <p className="text-gray-600 mb-8 max-w-md">
              Learn how we protect your pets with 24/7 monitoring and comprehensive transit insurance coverages.
            </p>
            <div className="flex gap-4">
              <button className="bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-bold">Insurance Details</button>
              <button
              onClick={() => router.push('/careers')}
              className="border border-gray-300 px-6 py-3 rounded-full text-sm font-bold hover:bg-gray-50">Our Carriers</button>
            </div>
          </div>
          <span className="material-symbols-outlined absolute -right-10 -bottom-10 text-[180px] text-gray-200">shield</span>
        </div>
      </div>

      {/* Modal */}
      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
      />
    </section>
  );
}