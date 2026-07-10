'use client'
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer"; 

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full min-h-screen  flex-col">
      <Navbar />
      {children}
      <Footer/>
    </div>
  );
}