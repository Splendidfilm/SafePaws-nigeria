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
      <h2 className="text-2xl font-bold text-on-surface mb-6 flex items-center gap-3 dark:text-zinc-900">
        <span className="p-4 mr-4 flex items-center justify-center bg-[#D1F5EF] text-[#006B58] dark:text-[#006B58] rounded-lg text-xl font-semibold">
          {number}
        </span>
        <div className="font-serif">
        {title}
        </div>
      </h2>
      <div className=" dark:text-zinc-700 ">
      {children}
      </div>
    </section>
  );
}