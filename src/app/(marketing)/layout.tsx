import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import '@/app/global.css'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center bg-zinc-50 w-full ">
        {children}
      </main>
      <Footer />
    </>
  );
}