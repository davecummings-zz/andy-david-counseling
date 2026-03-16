import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Andy David | Licensed Professional Counselor',
  description: 'IFS-informed therapy for relationships, anxiety, depression, and trauma. Austin, TX.',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-icon-57x57.png', sizes: '57x57' },
      { url: '/apple-icon-60x60.png', sizes: '60x60' },
      { url: '/apple-icon-72x72.png', sizes: '72x72' },
      { url: '/apple-icon-76x76.png', sizes: '76x76' },
      { url: '/apple-icon-114x114.png', sizes: '114x114' },
      { url: '/apple-icon-120x120.png', sizes: '120x120' },
      { url: '/apple-icon-144x144.png', sizes: '144x144' },
      { url: '/apple-icon-152x152.png', sizes: '152x152' },
      { url: '/apple-icon-180x180.png', sizes: '180x180' },
      { url: '/apple-icon-precomposed.png' },
    ],
    other: [
      { rel: 'android-icon-36x36', url: '/android-icon-36x36.png' },
      { rel: 'android-icon-48x48', url: '/android-icon-48x48.png' },
      { rel: 'android-icon-72x72', url: '/android-icon-72x72.png' },
      { rel: 'android-icon-96x96', url: '/android-icon-96x96.png' },
      { rel: 'android-icon-144x144', url: '/android-icon-144x144.png' },
      { rel: 'android-icon-192x192', url: '/android-icon-192x192.png' },
      { rel: 'manifest', url: '/manifest.json' },
      { rel: 'msapplication-config', url: '/browserconfig.xml' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
        <Script 
          src="//code.tidio.co/ih6mxptb5srh0hlq5xo5xrlho5l9setv.js" 
          async
        />
      </body>
    </html>
  )
}
