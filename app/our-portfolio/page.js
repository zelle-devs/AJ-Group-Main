import OurCompaniesPage from "./OurCompanies";

export const metadata = {
  title: "Our Portfolio | AJ Group of Companies",
  description:
    "Explore the businesses within the AJ Group portfolio and discover the companies, capabilities and industries we're building for the future.",
  keywords: [
    "AJ Group Portfolio",
    "AJ Group companies",
    "AJ Group businesses",
    "business portfolio",
    "company portfolio",
    "portfolio companies",
    "operating companies",
    "business group portfolio",
    "diversified business portfolio",
    "Forgentis Fabrications",
    "Print Pack Advertising",
  ],
  alternates: {
    canonical: "https://ajgrouphq.com/our-portfolio/",
  },
  openGraph: {
    title: "Our Portfolio | AJ Group of Companies",
    description:
      "Explore the businesses within the AJ Group portfolio and discover the companies, capabilities and industries we're building for the future.",
    url: "https://ajgrouphq.com/our-portfolio/",
    siteName: "AJ Group of Companies",
    type: "website",
    images: [
      {
        url: "https://ajgrouphq.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AJ Group Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Portfolio | AJ Group of Companies",
    description:
      "Explore the businesses within the AJ Group portfolio and discover the companies, capabilities and industries we're building for the future.",
    images: ["https://ajgrouphq.com/images/og-image.jpg"],
  },
};

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://ajgrouphq.com/our-portfolio/#webpage",
  url: "https://ajgrouphq.com/our-portfolio/",
  name: "Our Portfolio | AJ Group of Companies",
  description:
    "Explore the businesses within the AJ Group portfolio and discover the companies, capabilities and industries we're building for the future.",
  isPartOf: {
    "@id": "https://ajgrouphq.com/#website",
  },
  about: {
    "@id": "https://ajgrouphq.com/#organization",
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Forgentis Fabrications",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Print Pack Advertising",
      },
    ],
  },
};

const portfolioBreadcrumbSchema = {
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
      name: "Our Portfolio",
      item: "https://ajgrouphq.com/our-portfolio/",
    },
  ],
};


export default function OurCompanies() {
  return (
    <>
      {/* Portfolio & Breadcrumb Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([portfolioSchema, portfolioBreadcrumbSchema]),
        }}
      />
      <OurCompaniesPage/>
    </>
  )
}