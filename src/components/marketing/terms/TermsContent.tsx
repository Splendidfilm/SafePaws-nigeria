// src/components/marketing/terms/TermsContent.tsx
import Section from './ReusableSection';
import CancellationBox from './CancallationBox';

export default function TermsContent() {
  return (
    <div className="w-full space-y-5 p-6 rounded-lg">
      
      <Section 
        id="acceptance" 
        number="01" 
        title="Acceptance of Terms"
      >
        <p className="mb-4">
          By accessing or using the SafePaws Nigeria platform, operated by{' '}
          <span className="font-semibold text-on-surface">PetMove Professional Transportation</span>, 
          you agree to be bound by these Terms of Service.
        </p>
        <p>
          We reserve the right to modify these terms at any time. Your continued use of the platform 
          following any changes constitutes acceptance of those changes.
        </p>
      </Section>

      <Section 
        id="description" 
        number="02" 
        title="Service Description"
      >
        <p className="mb-6">
          SafePaws Nigeria provides a professional pet transportation matching service. We facilitate 
          the logistical coordination between pet owners and vetted animal transport specialists across 
          the Nigerian federation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gray-200 border-2 border-gray-300 p-5 bg-surface-container rounded-2xl">
            <p className="  font-semibold text-on-surface mb-1">Ground Transport</p>
            <p className="text-sm">Temperature-controlled local and interstate vehicle transport.</p>
          </div>
          <div className=" bg-gray-200 border-2 border-gray-300 p-5 bg-surface-container rounded-2xl">
            <p className="font-semibold text-on-surface mb-1">Air Relocation</p>
            <p className="text-sm">Assistance with flight booking and crate compliance for domestic flights.</p>
          </div>
        </div>
      </Section>

      <Section 
        id="user-resp" 
        number="03" 
        title="User Responsibilities"
      >
        <ul className="space-y-5">
          {[
            "Users must provide accurate health documentation and vaccination records for all animals.",
            "It is the user's responsibility to ensure the pet is provided with an IATA-compliant transport crate unless otherwise arranged.",
            "Owners must disclose any aggressive behavior or medical conditions that might affect transport safety."
          ].map((text, i) => (
            <li key={i} className="flex gap-3">
              <span className="material-symbols-outlined text-primary mt-0.5  text-[#006B58]">check_circle_filled</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </Section>

      <CancellationBox />

      <Section 
        id="liability" 
        number="04" 
        title="Liability"
      >
        <p className="mb-4">
          While SafePaws Nigeria adheres to the highest safety standards, the company and its contractors 
          shall not be held liable for:
        </p>
        <ul className="list-disc ml-6 space-y-2 mb-6">
          <li>Pre-existing medical conditions aggravated by the stress of travel.</li>
          <li>Delays caused by road conditions, weather, or air traffic control.</li>
          <li>Acts of God or circumstances beyond our reasonable control.</li>
        </ul>
        <p className="italic">
          SafePaws maintains comprehensive transit insurance. Details regarding specific coverage limits 
          are available upon written request.
        </p>
      </Section>

      <Section 
        id="governing" 
        number="05" 
        title="Governing Law"
      >
        <p>
          These terms shall be governed by and construed in accordance with the laws of the{' '}
          <span className="font-bold text-on-surface">Federal Republic of Nigeria</span>. Any disputes 
          arising from these terms shall be subject to the exclusive jurisdiction of the courts located 
          in Lagos State.
        </p>
      </Section>

      <div className="pt-12 border-t border-outline-variant text-center text-sm text-on-surface-variant">
        Last updated: October 2024. For questions regarding these terms, please email{' '}
        <a href="mailto:legal@safepawsng.com" className="text-primary font-semibold hover:underline">
          legal@safepawsng.com
        </a>
      </div>
    </div>
  );
}