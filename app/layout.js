import Footer from '@/components/Footer/Footer'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import MainAnimation2 from '@/components/MainAnimation2/mainAnimation'

export const metadata = {
  title: 'AJ Group - Built to Specification',
  description: 'A diversified manufacturing group: precision metalwork, high-definition print and packaging, and consumer design brands.',
  icons: {
    icon: '/favicon.png',
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://ajgrouphq.com/#organization",
  name: "AJ Group of Companies",
  alternateName: "AJ Group",
  url: "https://ajgrouphq.com/",
  logo: {
    "@type": "ImageObject",
    url: "https://ajgrouphq.com/logo.png",
  },
  email: "info@ajgrouphq.com",
  sameAs: [
    "https://www.linkedin.com/company/a.jgroup/",
  ],
  description:
    "AJ Group of Companies builds, owns, operates and grows businesses across multiple industries.",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://ajgrouphq.com/#website",
  url: "https://ajgrouphq.com/",
  name: "AJ Group of Companies",
  publisher: {
    "@id": "https://ajgrouphq.com/#organization",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;0,6..96,600;0,6..96,700;1,6..96,400&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* Organization & Website Schema Script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]),
          }}
        />
      </head>
      <body>
        <Navbar />
        <MainAnimation2/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}