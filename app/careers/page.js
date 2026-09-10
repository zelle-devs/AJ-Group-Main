import CareersPage from "./Careers";


export const metadata = {
  title: "Careers at AJ Group | Build What's Next",
  description:
    "Explore career opportunities at AJ Group and become part of a growing group of businesses focused on ambition, ownership and long-term growth.",
  keywords: [
    "AJ Group Careers",
    "AJ Group jobs",
    "careers at AJ Group",
    "AJ Group employment",
    "AJ Group opportunities",
    "jobs at AJ Group",
    "career opportunities",
    "job opportunities",
    "company careers",
    "business careers",
    "career growth",
  ],
  alternates: {
    canonical: "https://ajgrouphq.com/careers/",
  },
  openGraph: {
    title: "Careers at AJ Group | Build What's Next",
    description:
      "Explore career opportunities at AJ Group and become part of a growing group of businesses focused on ambition, ownership and long-term growth.",
    url: "https://ajgrouphq.com/careers/",
    siteName: "AJ Group of Companies",
    type: "website",
    images: [
      {
        url: "https://ajgrouphq.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Careers at AJ Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at AJ Group | Build What's Next",
    description:
      "Explore career opportunities at AJ Group and become part of a growing group of businesses focused on ambition, ownership and long-term growth.",
    images: ["https://ajgrouphq.com/images/og-image.jpg"],
  },
};


const careersSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://ajgrouphq.com/careers/#webpage",
  url: "https://ajgrouphq.com/careers/",
  name: "Careers at AJ Group | Build What's Next",
  description:
    "Explore career opportunities at AJ Group and become part of a growing group of businesses focused on ambition, ownership and long-term growth.",
  isPartOf: {
    "@id": "https://ajgrouphq.com/#website",
  },
  about: {
    "@id": "https://ajgrouphq.com/#organization",
  },
};

const careersBreadcrumbSchema = {
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
      name: "Careers",
      item: "https://ajgrouphq.com/careers/",
    },
  ],
};


export default function Careers() {
  return (
   <>
      {/* Careers & Breadcrumb Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([careersSchema, careersBreadcrumbSchema]),
        }}
      />
      <CareersPage/>
    </>
  )
}