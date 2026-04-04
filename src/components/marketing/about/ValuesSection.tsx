// src/components/marketing/about/ValuesSection.tsx
export default function ValuesSection() {
  const values = [
    {
      icon: "favorite",
      title: "Compassion",
      desc: "We treat every pet as if they were our own, with patience, kindness, and individual attention to their needs."
    },
    {
      icon: "lock",
      title: "Safety",
      desc: "Uncompromising standards in vehicle maintenance, crate securing, and driver training protocols."
    },
    {
      icon: "visibility",
      title: "Transparency",
      desc: "Clear pricing, live tracking, and open communication channels throughout the entire booking and transit process."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-black text-gray-900 mb-12 text-center">
          Core Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="p-8 rounded-3xl bg-white border border-gray-100 hover:border-[#17CFAD] transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-[#D1F5EF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[#17CFAD] text-4xl">
                  {value.icon}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}