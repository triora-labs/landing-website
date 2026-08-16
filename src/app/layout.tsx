import type { Metadata } from 'next'
import { Outfit, Inter } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingActions from '@/components/layout/FloatingActions'
import PageTransition from '@/components/layout/PageTransition'
import { ThemeProvider } from '@/context/ThemeContext'
import { SITE_CONFIG } from '@/constants/site'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-d', display: 'swap' })
const inter = Inter({ subsets: ['latin'], variable: '--font-b', display: 'swap' })

export const metadata: Metadata = {
  title: { default: 'Triora Labs | Digital Products, Software & Cloud Engineering', template: '%s | Triora Labs' },
  description: SITE_CONFIG.description,
  metadataBase: new URL('https://triora-labs.com'),
  openGraph: { siteName: SITE_CONFIG.name, type: 'website' },
  twitter: { card: 'summary_large_image' },
}

// Inline script injected into <head> to prevent flash of wrong theme on reload
const themeScript = `
(function() {
  try {
    var saved = localStorage.getItem('triora-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = saved || 'light';
    document.documentElement.setAttribute('data-theme', theme);
  } catch(e) {}
})();
`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`} data-theme="light" suppressHydrationWarning>
      <head>
        {/* Prevents flash of wrong theme on page load */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
          <Footer />
          <FloatingActions />
        </ThemeProvider>
      </body>
    </html>
  )
}
