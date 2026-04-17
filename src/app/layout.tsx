import type { Metadata } from 'next';
import { Inter, Noto_Sans } from 'next/font/google';
// import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const notoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto',
  weight: ['400', '500', '700', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SafePaws Nigeria - Premium Pet Transportation',
  description: 'Safe, reliable, and comfortable transportation for pets across Nigeria. Climate-controlled vehicles, trained handlers, and real-time GPS tracking.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light dark">
      <head>
        {/* Material Symbols */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>

      <body
        className={`${inter.variable} ${notoSans.variable} font-display 
                   bg-background-light dark:bg-background-dark 
                   text-text-main dark:text-white 
                   overflow-x-hidden antialiased w-full `}
      >
        {children}
      </body>
    </html>
  );
}