import Footer from '@/components/Footer/Footer'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'

export const metadata = {
  title: 'AJ Group - Built to Specification',
  description: 'A diversified manufacturing group: precision metalwork, high-definition print and packaging, and consumer design brands.',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;0,6..96,600;0,6..96,700;1,6..96,400&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}