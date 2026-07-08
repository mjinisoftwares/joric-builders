import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Joric Builders - Design-to-Build Construction Company Kenya',
  description: 'Leading construction company in Kenya offering architectural design, structural engineering, BOQ development, and modern precast slab systems. Design-to-build solutions across Nairobi, Kiambu, and Nyeri.',
  keywords: 'construction company Kenya, architectural design, structural engineering, precast slabs, rib beams, construction contractor',
  generator: 'Joric Builders',
  applicationName: 'Joric Builders',
  authors: [{ name: 'Joric Builders Ltd' }],
  creator: 'Joric Builders Ltd',
  openGraph: {
    type: 'website',
    url: 'https://joricbuilders.com',
    title: 'Joric Builders - Design-to-Build Construction Solutions',
    description: 'Premium construction services including architectural design, structural engineering, and modern building solutions in Kenya',
    siteName: 'Joric Builders',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joric Builders - Construction Company Kenya',
    description: 'Design-to-build construction solutions with modern technology',
  },
  icons: {
    icon: '/logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0B4A6F',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
