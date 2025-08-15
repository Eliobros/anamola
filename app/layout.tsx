// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ANAMOLA - Aliança Nacional de um Moçambique Livre e Autônomo',
  description: 'Participe da ANAMOLA e lute por um Moçambique livre e autônomo.',
  icons: {
    icon: '/anamola.jpg',
    shortcut: '/anamola.jpg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className="min-h-screen font-sans bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  )
}
