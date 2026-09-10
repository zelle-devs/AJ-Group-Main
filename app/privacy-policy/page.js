import PrivacyPolicyPage from '@/components/PrivacyPolicyPage/PrivacyPolicyPage'
import React from 'react'

export const metadata = {
  title: "Privacy Policy | AJ Group of Companies",
  description:
    "Read the AJ Group of Companies Privacy Policy to learn how we collect, use, protect and manage information when you interact with our website.",
  keywords: [
    "AJ Group Privacy Policy",
    "AJ Group of Companies Privacy Policy",
    "privacy policy",
    "data privacy",
    "privacy and data protection",
    "website privacy",
    "personal information",
    "data protection",
  ],
  alternates: {
    canonical: "https://ajgrouphq.com/privacy-policy/",
  },
  openGraph: {
    title: "Privacy Policy | AJ Group of Companies",
    description:
      "Read the AJ Group of Companies Privacy Policy to learn how we collect, use, protect and manage information when you interact with our website.",
    url: "https://ajgrouphq.com/privacy-policy/",
    siteName: "AJ Group of Companies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | AJ Group of Companies",
    description:
      "Read the AJ Group of Companies Privacy Policy to learn how we collect, use, protect and manage information when you interact with our website.",
  },
};

const privacyPolicySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://ajgrouphq.com/privacy-policy/#webpage",
  url: "https://ajgrouphq.com/privacy-policy/",
  name: "Privacy Policy | AJ Group of Companies",
  description:
    "Read the AJ Group of Companies Privacy Policy to learn how we collect, use, protect and manage information when you interact with our website.",
  isPartOf: {
    "@id": "https://ajgrouphq.com/#website",
  },
  about: {
    "@id": "https://ajgrouphq.com/#organization",
  },
};

const privacyPolicyBreadcrumbSchema = {
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
      name: "Privacy Policy",
      item: "https://ajgrouphq.com/privacy-policy/",
    },
  ],
};


function page() {
  return (
    <>
      {/* Privacy Policy & Breadcrumb Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([privacyPolicySchema, privacyPolicyBreadcrumbSchema]),
        }}
      />
      <div>
        <PrivacyPolicyPage/>
      </div>
    </>
  )
}

export default page