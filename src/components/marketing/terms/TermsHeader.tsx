// src/components/marketing/terms/TermsHeader.tsx
export default function TermsHeader() {
  return (
    <div className="mb-12 border-b-2 pb-8 border-b-gray-300">
      <h1 className="text-4xl font-bold text-gray-900 mb-3">Terms of Service</h1>
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <p className="text-gray-600">Effective Date: October 24, 2024</p>
        <span className="bg-[#D1F5EF] text-[#007A6B] px-5 py-2 rounded-full text-xs font-medium tracking-wide">
          SAFEPAWS NIGERIA COMPLIANCE
        </span>
      </div>
    </div>
  );
}