import ApproachPage from "./Approach";

export const metadata = {
  title: "Our Approach | Build. Acquire. Expand. | AJ Group",
  description:
    "Discover how AJ Group identifies opportunities, builds businesses, strengthens operations and expands what works for long-term growth.",
  keywords: [
    "AJ Group Approach",
    "business growth strategy",
    "business building",
    "business development",
    "business expansion",
    "business operations",
    "operational excellence",
    "long-term growth",
    "business scaling",
    "build acquire expand",
    "business growth approach",
    "strategic growth",
  ],
  alternates: {
    canonical: "https://ajgrouphq.com/approach/",
  },
  openGraph: {
    title: "Our Approach | Build. Acquire. Expand. | AJ Group",
    description:
      "Discover how AJ Group identifies opportunities, builds businesses, strengthens operations and expands what works for long-term growth.",
    url: "https://ajgrouphq.com/approach/",
    siteName: "AJ Group of Companies",
    type: "website",
    images: [
      {
        url: "https://ajgrouphq.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AJ Group Approach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Approach | Build. Acquire. Expand. | AJ Group",
    description:
      "Discover how AJ Group identifies opportunities, builds businesses, strengthens operations and expands what works for long-term growth.",
    images: ["https://ajgrouphq.com/images/og-image.jpg"],
  },
};


const approachSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://ajgrouphq.com/approach/#webpage",
  url: "https://ajgrouphq.com/approach/",
  name: "Our Approach | AJ Group",
  description:
    "Discover how AJ Group identifies opportunities, builds businesses, strengthens operations and expands what works for long-term growth.",
  isPartOf: {
    "@id": "https://ajgrouphq.com/#website",
  },
  about: {
    "@id": "https://ajgrouphq.com/#organization",
  },
};

const approachBreadcrumbSchema = {
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
      name: "Our Approach",
      item: "https://ajgrouphq.com/approach/",
    },
  ],
};


export default function Approach() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([approachSchema, approachBreadcrumbSchema]),
        }}
      />
      <ApproachPage/>
    </>
  )
}