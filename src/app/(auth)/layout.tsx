export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen w-full items-center justify-center overflow-x-hidden p-6 bg-bg"
    
        style={{
        backgroundImage: `
          radial-gradient(ellipse at 65% 15%, rgba(23,207,173,0.13) 0%, transparent 55%),
          radial-gradient(ellipse at 15% 85%, rgba(23,207,173,0.08) 0%, transparent 50%)
        `
      }}
    >
      {children}
    </main>
  );
}