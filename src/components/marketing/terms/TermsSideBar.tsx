// src/components/marketing/terms/TermsSidebar.tsx
const sections = [
  { label: "Acceptance of Terms", id: "acceptance" },
  { label: "Service Description", id: "description" },
  { label: "User Responsibilities", id: "user-resp" },
  { label: "Cancellation Policy", id: "cancellation" },
  { label: "Liability", id: "liability" },
  { label: "Governing Law", id: "governing" },
];

export default function TermsSidebar() {
  return (
    <div className="lg:col-span-4">
      <div className="sticky top-8">
        <p className="uppercase text-xs font-bold tracking-widest text-gray-500 mb-5">
          JUMP TO SECTION
        </p>

        <div className="space-y-4">
          {sections.map((section, i) => (
            <a
              key={i}
              href={`#${section.id}`}
              className="block py-2.5 text-gray-600 hover:text-[#17CFAD] transition-colors duration-200"
            >
              {section.label}
            </a>
          ))}
        </div>

        {/* Need Help Card */}
        <div className="mt-12 bg-[#F1F5F3] rounded-2xl p-6 border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-3">Need Help?</h4>
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            Our legal team is available to clarify any points of these terms.
          </p>
          <button className="w-full bg-[#006B58] hover:bg-[#17CFAD] text-white font-medium py-3.5 rounded-xl transition-all active:scale-95">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}