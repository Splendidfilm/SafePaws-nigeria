
import type { Metadata } from 'next'
import { Inter, Noto_Sans } from 'next/font/google'
import "./global.css";

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const notoSans = Noto_Sans({ 
  subsets: ['latin'],
  variable: '--font-noto',
  weight: ['400', '500', '700', '900'],
})

export const metadata: Metadata = {
  title: 'SafePaws Nigeria - Premium Pet Transportation',
  description: 'Safe, reliable, and comfortable transportation for pets across Nigeria',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${notoSans.variable} font-display bg-background-light text-text-main overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}