import ContactPage from "./Contact";

export const metadata = {
  title: "Contact AJ Group | Business & Partnership Enquiries",
  description:
    "Get in touch with AJ Group to discuss business opportunities, partnerships, projects and other enquiries with our team.",
  keywords: [
    "Contact AJ Group",
    "AJ Group contact",
    "AJ Group of Companies contact",
    "contact AJ Group of Companies",
    "AJ Group enquiries",
    "business enquiries",
    "business partnerships",
    "partnership opportunities",
    "business opportunities",
    "project enquiries",
  ],
  alternates: {
    canonical: "https://ajgrouphq.com/contact/",
  },
  openGraph: {
    title: "Contact AJ Group | Business & Partnership Enquiries",
    description:
      "Get in touch with AJ Group to discuss business opportunities, partnerships, projects and other enquiries with our team.",
    url: "https://ajgrouphq.com/contact/",
    siteName: "AJ Group of Companies",
    type: "website",
    images: [
      {
        url: "https://ajgrouphq.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact AJ Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact AJ Group | Business & Partnership Enquiries",
    description:
      "Get in touch with AJ Group to discuss business opportunities, partnerships, projects and other enquiries with our team.",
    images: ["https://ajgrouphq.com/images/og-image.jpg"],
  },
};


const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://ajgrouphq.com/contact/#webpage",
  url: "https://ajgrouphq.com/contact/",
  name: "Contact AJ Group",
  description:
    "Get in touch with AJ Group to discuss business opportunities, partnerships, projects and other enquiries with our team.",
  isPartOf: {
    "@id": "https://ajgrouphq.com/#website",
  },
  about: {
    "@id": "https://ajgrouphq.com/#organization",
  },
};

const contactBreadcrumbSchema = {
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
      name: "Contact",
      item: "https://ajgrouphq.com/contact/",
    },
  ],
};


export default function Contact() {
  return (
    <>
      {/* Contact & Breadcrumb Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([contactSchema, contactBreadcrumbSchema]),
        }}
      />
      <ContactPage/>
    </>
  )
}