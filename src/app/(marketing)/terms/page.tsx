import React from 'react';
import TermsHeader from '@/components/marketing/terms/TermsHeader';
import TermsSidebar from '@/components/marketing/terms/TermsSideBar';
import TermsContent from '@/components/marketing/terms/TermsContent';

export default function TermsOfService() {
  return (
    <>
      
      <main className="min-h-screen bg-[#F8FAF9] pt-10 pb-20 w-ful">
        <div className="w-full mx-auto px-6">
          <TermsHeader />
          
          <div className="flex w-full gap-10">
            <TermsSidebar />
            <TermsContent />
          </div>
        </div>
      </main>

    </>
  );
}