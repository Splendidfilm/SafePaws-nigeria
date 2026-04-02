// src/components/marketing/terms/Section.tsx
type SectionProps = {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
};

export default function Section({ id, number, title, children }: SectionProps) {
  return (
    <section id={id} className=" w-fit">
      <h2 className="text-2xl font-bold text-on-surface mb-6 flex items-center gap-3">
        <span className="p-4 mr-4 flex items-center justify-center bg-[#D1F5EF] text-[#006B58] rounded-lg text-xl font-semibold">
          {number}
        </span>
        {title}
      </h2>
      {children}
    </section>
  );
}