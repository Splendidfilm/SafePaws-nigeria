
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import '@/app/global.css'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center dark:bg-[#11211e] bg-zinc-50 w-full ">
        {children}
      </main>
      <Footer />
    </>
  );
}