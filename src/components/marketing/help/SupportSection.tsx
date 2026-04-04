// src/components/marketing/help/SupportSection.tsx
export default function SupportSection() {
  return (
    <section className="bg-[#F8FAF9] py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Still need assistance?
        </h2>
        <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Our dedicated SafePaws support team is available 24/7 to help you and your furry friends.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Live Chat Card */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center">
            <div className="w-16 h-16 bg-[#D1F5EF] rounded-full flex items-center justify-center text-[#17CFAD] mb-6">
              <span className="material-symbols-outlined text-4xl">chat_bubble</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Live Chat</h4>
            <p className="text-gray-600 text-center mb-8">
              Connect with a support agent instantly for real-time help.
            </p>
            <button className="w-full bg-[#17CFAD] hover:bg-[#12A88F] text-white font-bold py-4 rounded-2xl transition-all active:scale-95">
              Start Live Chat
            </button>
            <p className="mt-5 flex items-center gap-2 text-sm text-green-600">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Average wait time: 2 mins
            </p>
          </div>

          {/* Email Support Card */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center">
            <div className="w-16 h-16 bg-[#D1F5EF] rounded-full flex items-center justify-center text-[#17CFAD] mb-6">
              <span className="material-symbols-outlined text-4xl">mail</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Email Us</h4>
            <p className="text-gray-600 text-center mb-8">
              Send us a detailed message and we&apos;ll reply within 24 hours.
            </p>
            <button className="w-full border-2 border-[#17CFAD] text-[#17CFAD] font-bold py-4 rounded-2xl hover:bg-[#D1F5EF] transition-all active:scale-95">
              Email Support
            </button>
            <p className="mt-5 text-sm text-gray-500">support@safepawsng.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}