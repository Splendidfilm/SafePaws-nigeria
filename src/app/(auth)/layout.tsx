'use client'
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main 
    className=" flex-1 items-center justify-center p-6 min-h-screen flex  text-text-main dark:text-white 
                   overflow-x-hidden antialiased w-full dark:bg-[#11211e]">
        {children}
    </main>
  );
}