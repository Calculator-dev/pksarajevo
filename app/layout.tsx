import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'PKS - Plivački klub Sarajevo',
  description: 'Plivački klub Sarajevo - Zdrav život počinje u vodi! Pridružite se našem timu i otkrijte radost plivanja.',
  keywords: ['plivanje', 'Sarajevo', 'plivački klub', 'sport', 'treninzi', 'škola plivanja'],
}

export const viewport: Viewport = {
  themeColor: '#8B1538',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="bs" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground overflow-x-hidden" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
