import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Drops - Recupere sua Respiração Natural',
  description:
    'Sinta o efeito desde a primeira gota. Feito com ingredientes selecionados para oferecer uma experiência que complementa sua jornada de bem-estar.',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body>
        {/* Scripts do ConverteAi */}
        <Script
          src="https://scripts.converteai.net/2c79ea2c-0266-44e6-8d6b-2e8d7d77116a/players/684f725e963d10368ab243c7/player.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://scripts.converteai.net/2c79ea2c-0266-44e6-8d6b-2e8d7d77116a/players/684f71e59a50d8576c68a664/player.js"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  )
}



