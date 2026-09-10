import AboutPage from "./About";

export const metadata = {
  title: "About AJ Group | Building Businesses for the Long Term",
  description:
    "Learn about AJ Group of Companies and our approach to building, operating and growing businesses with a long-term vision.",
  keywords: [
    "About AJ Group",
    "AJ Group of Companies",
    "AJ Group",
    "business group",
    "group of companies",
    "business ownership",
    "business operations",
    "business growth",
    "building businesses",
    "growing businesses",
    "long-term business growth",
    "entrepreneurial business group",
  ],
  alternates: {
    canonical: "https://ajgrouphq.com/about/",
  },
  openGraph: {
    title: "About AJ Group | Building Businesses for the Long Term",
    description:
      "Learn about AJ Group of Companies and our approach to building, operating and growing businesses with a long-term vision.",
    url: "https://ajgrouphq.com/about/",
    siteName: "AJ Group of Companies",
    type: "website",
    images: [
      {
        url: "https://ajgrouphq.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About AJ Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About AJ Group | Building Businesses for the Long Term",
    description:
      "Learn about AJ Group of Companies and our approach to building, operating and growing businesses with a long-term vision.",
    images: ["https://ajgrouphq.com/images/og-image.jpg"],
  },
};


const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://ajgrouphq.com/about/#webpage",
  url: "https://ajgrouphq.com/about/",
  name: "About AJ Group",
  description:
    "Learn about AJ Group of Companies and our approach to building, operating and growing businesses with a long-term vision.",
  isPartOf: {
    "@id": "https://ajgrouphq.com/#website",
  },
  about: {
    "@id": "https://ajgrouphq.com/#organization",
  },
};

const aboutBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://ajgrouphq.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: "https://ajgrouphq.com/about/",
    },
  ],
};


export default function About() {
  return (
    <>
      {/* About Page & Breadcrumb Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([aboutSchema, aboutBreadcrumbSchema]),
        }}
      />
      <AboutPage />
    </>
  )
}