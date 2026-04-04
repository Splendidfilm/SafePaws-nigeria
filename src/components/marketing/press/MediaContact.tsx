// src/components/marketing/press/MediaContact.tsx
export default function MediaContact() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Left Side - Contact Info */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Media Inquiries</h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Are you a journalist or content creator looking for more information? 
              Our media relations team is here to help with interview requests, additional data, or comments on industry trends.
            </p>

            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-11 h-11 bg-[#D1F5EF] rounded-2xl flex items-center justify-center text-[#17CFAD] shrink-0">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email Address</h4>
                  <p className="text-gray-600">press@safepawsng.com</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-11 h-11 bg-[#D1F5EF] rounded-2xl flex items-center justify-center text-[#17CFAD] shrink-0">
                  <span className="material-symbols-outlined">phone_iphone</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Phone</h4>
                  <p className="text-gray-600">+234 (0) 800-SAFE-PAWS</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-11 h-11 bg-[#D1F5EF] rounded-2xl flex items-center justify-center text-[#17CFAD] shrink-0">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Office Location</h4>
                  <p className="text-gray-600">Lekki Phase 1, Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Quick Request Form */}
          <div className="w-full md:w-1/2 bg-white p-10 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Quick Media Request</h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-5 py-3 rounded-2xl border border-gray-200 focus:border-[#17CFAD] focus:ring-1 focus:ring-[#17CFAD] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Media Outlet</label>
                  <input 
                    type="text" 
                    placeholder="Media Publication" 
                    className="w-full px-5 py-3 rounded-2xl border border-gray-200 focus:border-[#17CFAD] focus:ring-1 focus:ring-[#17CFAD] outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <select id="subject" className="w-full px-5 py-3 rounded-2xl border border-gray-200 focus:border-[#17CFAD] focus:ring-1 focus:ring-[#17CFAD] outline-none">
                  <option>Interview Request</option>
                  <option>Data / Statistics Inquiry</option>
                  <option>Asset Request</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  rows={5} 
                  placeholder="How can we help?" 
                  className="w-full px-5 py-3 rounded-2xl border border-gray-200 focus:border-[#17CFAD] focus:ring-1 focus:ring-[#17CFAD] outline-none resize-y"
                />
              </div>

              <button 
                type="button"
                className="w-full bg-[#17CFAD] text-white py-4 rounded-2xl font-bold hover:bg-[#12A88F] transition-all active:scale-95"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}