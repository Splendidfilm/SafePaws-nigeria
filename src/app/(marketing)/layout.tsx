import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";


export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center bg-zinc-50">
        {children}
      </main>
      <Footer />
    </>
  );
}