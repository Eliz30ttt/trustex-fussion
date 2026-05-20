import type { Metadata } from 'next'
import React from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Trustex-Fussion | Enterprise Digital Asset Infrastructure',
  description: 'Trustex-Fussion: Institutional-grade crypto-enabled wallet activation and digital asset infrastructure platform with Telegram integration. Enterprise-level security, global infrastructure, and operational excellence.',
  keywords: 'digital assets, wallet activation, crypto infrastructure, Telegram integration, enterprise fintech, blockchain security',
  openGraph: {
    title: 'Trustex-Fussion | Enterprise Digital Asset Infrastructure',
    description: 'Institutional-grade crypto-enabled wallet activation and digital asset infrastructure platform',
    url: 'https://trustex-fussion.com',
    siteName: 'Trustex-Fussion',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trustex-Fussion | Enterprise Digital Asset Infrastructure',
    description: 'Institutional-grade crypto-enabled wallet activation and digital asset infrastructure platform',
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  authors: [{ name: 'Trustex-Fussion' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#090c10" />
      </head>
      <body className="bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
