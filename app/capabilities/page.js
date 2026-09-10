import CapabilitiesPage from "./Capabilities";

export const metadata = {
  title: "Business Capabilities | AJ Group of Companies",
  description:
    "Discover AJ Group's capabilities across business building, operations, manufacturing, fabrication, printing, packaging and growth.",
  keywords: [
    "AJ Group Capabilities",
    "business capabilities",
    "business operations",
    "business development",
    "business growth",
    "business building",
    "operational capabilities",
    "manufacturing",
    "fabrication",
    "commercial printing",
    "packaging",
    "brand execution",
    "production capabilities",
  ],
  alternates: {
    canonical: "https://ajgrouphq.com/capabilities/",
  },
  openGraph: {
    title: "Business Capabilities | AJ Group of Companies",
    description:
      "Discover AJ Group's capabilities across business building, operations, manufacturing, fabrication, printing, packaging and growth.",
    url: "https://ajgrouphq.com/capabilities/",
    siteName: "AJ Group of Companies",
    type: "website",
    images: [
      {
        url: "https://ajgrouphq.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AJ Group Business Capabilities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Capabilities | AJ Group of Companies",
    description:
      "Discover AJ Group's capabilities across business building, operations, manufacturing, fabrication, printing, packaging and growth.",
    images: ["https://ajgrouphq.com/images/og-image.jpg"],
  },
};

const capabilitiesSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://ajgrouphq.com/capabilities/#webpage",
  url: "https://ajgrouphq.com/capabilities/",
  name: "Business Capabilities | AJ Group of Companies",
  description:
    "Discover AJ Group's capabilities across business building, operations, manufacturing, fabrication, printing, packaging and growth.",
  isPartOf: {
    "@id": "https://ajgrouphq.com/#website",
  },
  about: {
    "@id": "https://ajgrouphq.com/#organization",
  },
};

const capabilitiesBreadcrumbSchema = {
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
      name: "Capabilities",
      item: "https://ajgrouphq.com/capabilities/",
    },
  ],
};

export default function Capabilities() {
  return (
    <>
      {/* Capabilities & Breadcrumb Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([capabilitiesSchema, capabilitiesBreadcrumbSchema]),
        }}
      />
      <CapabilitiesPage/>
    </>
  )
}