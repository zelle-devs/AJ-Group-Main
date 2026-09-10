import IndustriesPage from "./Industries";


export const metadata = {
  title: "Industries | AJ Group of Companies",
  description:
    "Explore the industries AJ Group operates across, from industrial and commercial businesses to consumer, real estate and service sectors.",
  keywords: [
    "AJ Group Industries",
    "industries",
    "business sectors",
    "industrial businesses",
    "commercial businesses",
    "consumer businesses",
    "real estate",
    "service businesses",
    "diversified industries",
    "multi-industry business group",
    "diverse business sectors",
  ],
  alternates: {
    canonical: "https://ajgrouphq.com/industries/",
  },
  openGraph: {
    title: "Industries | AJ Group of Companies",
    description:
      "Explore the industries AJ Group operates across, from industrial and commercial businesses to consumer, real estate and service sectors.",
    url: "https://ajgrouphq.com/industries/",
    siteName: "AJ Group of Companies",
    type: "website",
    images: [
      {
        url: "https://ajgrouphq.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AJ Group Industries",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries | AJ Group of Companies",
    description:
      "Explore the industries AJ Group operates across, from industrial and commercial businesses to consumer, real estate and service sectors.",
    images: ["https://ajgrouphq.com/images/og-image.jpg"],
  },
};



const industriesSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://ajgrouphq.com/industries/#webpage",
  url: "https://ajgrouphq.com/industries/",
  name: "Industries | AJ Group of Companies",
  description:
    "Explore the industries AJ Group operates across, including industrial, commercial, consumer, real estate and service sectors.",
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
        name: "Industrial",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Commercial",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Consumer",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Real Estate",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Services",
      },
    ],
  },
};

const industriesBreadcrumbSchema = {
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
      name: "Industries",
      item: "https://ajgrouphq.com/industries/",
    },
  ],
};

export default function Industries() {
  return (
    <>
      {/* Industries & Breadcrumb Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([industriesSchema, industriesBreadcrumbSchema]),
        }}
      />
      <IndustriesPage/>
    </>
  )
}