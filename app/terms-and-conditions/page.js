import TermsAndConditionsAJGroup from '@/components/TermsAndConditionsAJGroup/TermsAndConditionsAJGroup'
import React from 'react'

export const metadata = {
  title: "Terms & Conditions | AJ Group of Companies",
  description:
    "Review the Terms & Conditions governing your use of the AJ Group of Companies website, including website access, content, communications and responsibilities.",
  keywords: [
    "AJ Group Terms and Conditions",
    "AJ Group of Companies Terms and Conditions",
    "terms and conditions",
    "website terms",
    "terms of use",
    "website usage",
    "legal terms",
  ],
  alternates: {
    canonical: "https://ajgrouphq.com/terms-and-conditions/",
  },
  openGraph: {
    title: "Terms & Conditions | AJ Group of Companies",
    description:
      "Review the Terms & Conditions governing your use of the AJ Group of Companies website, including website access, content, communications and responsibilities.",
    url: "https://ajgrouphq.com/terms-and-conditions/",
    siteName: "AJ Group of Companies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | AJ Group of Companies",
    description:
      "Review the Terms & Conditions governing your use of the AJ Group of Companies website, including website access, content, communications and responsibilities.",
  },
};

const termsSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://ajgrouphq.com/terms-and-conditions/#webpage",
  url: "https://ajgrouphq.com/terms-and-conditions/",
  name: "Terms & Conditions | AJ Group of Companies",
  description:
    "Review the Terms & Conditions governing your use of the AJ Group of Companies website, including website access, content, communications and responsibilities.",
  isPartOf: {
    "@id": "https://ajgrouphq.com/#website",
  },
  about: {
    "@id": "https://ajgrouphq.com/#organization",
  },
};

const termsBreadcrumbSchema = {
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
      name: "Terms & Conditions",
      item: "https://ajgrouphq.com/terms-and-conditions/",
    },
  ],
};


function page() {
  return (
    <>
      {/* Terms & Conditions and Breadcrumb Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([termsSchema, termsBreadcrumbSchema]),
        }}
      />
      <div>
        <TermsAndConditionsAJGroup/>
      </div>
    </>
  )
}

export default page