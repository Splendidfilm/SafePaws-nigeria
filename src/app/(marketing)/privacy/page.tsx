import React from 'react';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#F8FAF9] pt-30 pb-20 w-full">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
            Legal & Trust
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 mt-2 mb-4">
            SafePaws Privacy Policy
          </h1>
          <p className="text-gray-600 text-sm">
            Last updated: October 2026 • Effective immediately across all SafePaws services in Nigeria.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Information We Collect</h2>
            <p className="text-sm">
              We collect information to ensure the safe, comfortable transport of your pets. This includes contact details (name, email, phone number, address in Nigeria), pet profiles (breed, age, veterinary records, temperament, dietary needs), and trip telemetry (real-time vehicle GPS coordinates, cabin temperature, and status updates during active transit).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. How We Use Your Data</h2>
            <p className="text-sm">
              Your data is used solely to coordinate pet pickups and drop-offs, match certified pet handlers, share real-time journey updates with pet owners, provide emergency veterinary care dispatch if needed, and process secure payments via licensed Nigerian payment gateways.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Handler & Location Privacy</h2>
            <p className="text-sm">
              Location tracking is active strictly during scheduled and ongoing bookings. Once a pet is safely delivered and accepted by the owner or authorized custodian, live vehicle tracking ceases. Handlers are vetted and bound by strict confidentiality and animal welfare agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Contact & Inquiries</h2>
            <p className="text-sm">
              For privacy queries or data removal requests, contact our Data Protection Officer at{' '}
              <a href="mailto:privacy@safepaws.ng" className="text-emerald-600 font-semibold underline">
                privacy@safepaws.ng
              </a>{' '}
              or visit our <Link href="/help" className="text-emerald-600 font-semibold underline">Help Center</Link>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
