import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Andy David | Licensed Professional Counselor',
  description: 'IFS-informed therapy for relationships, anxiety, depression, and trauma. Austin, TX.',
  icons: '/favicon.ico',
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
      </body>
    </html>
  )
}
