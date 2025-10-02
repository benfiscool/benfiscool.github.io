import './globals.css'
import type { Metadata } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { MatrixBackground } from '@/components/MatrixBackground'
import { Analytics } from '@/components/Analytics'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira-code' })

export const metadata: Metadata = {
  title: 'Benjamin Freeman | Mechanical Engineering Student',
  description: 'Portfolio of Benjamin Freeman, Senior Mechanical Engineering Student at Embry-Riddle Aeronautical University specializing in jet engine propulsion systems.',
  keywords: 'Benjamin Freeman, Mechanical Engineering, Embry-Riddle, Jet Engine, Propulsion, Aerospace, Student Portfolio',
  authors: [{ name: 'Benjamin Freeman' }],
  creator: 'Benjamin Freeman',
  openGraph: {
    title: 'Benjamin Freeman | Mechanical Engineering Student',
    description: 'Portfolio showcasing my journey in mechanical engineering and passion for jet propulsion systems.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Benjamin Freeman | Mechanical Engineering Student',
    description: 'Portfolio showcasing my journey in mechanical engineering and passion for jet propulsion systems.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${firaCode.variable} font-sans antialiased`}>
        <Analytics />
        <MatrixBackground />
        <div className="relative z-10 min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
