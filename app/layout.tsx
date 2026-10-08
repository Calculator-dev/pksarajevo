import type { Metadata, Viewport } from 'next'
import { Instrument_Sans, JetBrains_Mono, Sofia_Sans_Extra_Condensed } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const instrument = Instrument_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-instrument',
})

const sofiaCondensed = Sofia_Sans_Extra_Condensed({
  subsets: ['latin', 'latin-ext'],
  weight: ['600', '800', '900'],
  variable: '--font-sofia-condensed',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'PKS - Plivački klub Sarajevo',
  description: 'Plivački klub Sarajevo - Zdrav život počinje u vodi! Pridružite se našem timu i otkrijte radost plivanja.',
  keywords: ['plivanje', 'Sarajevo', 'plivački klub', 'sport', 'treninzi', 'škola plivanja'],
}

export const viewport: Viewport = {
  themeColor: '#73040B',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="bs" data-scroll-behavior="smooth" className={`${instrument.variable} ${sofiaCondensed.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground overflow-x-hidden" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
