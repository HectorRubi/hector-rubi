import './globals.css'
import type { Metadata } from 'next'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { GTM } from '@/components/Shared/GTM'

import { Navbar } from '@/components/Shared/Navbar'
import { Footer } from '@/components/Shared/Footer'

export const metadata: Metadata = {
  title: 'Hector Rubi | Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <GTM />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
