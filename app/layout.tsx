import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://nirooph.mahquantum.tech";

const imageUrl = `${siteUrl}/niroop-h.jpeg`;

const organizationUrl = "https://mahquantum.tech/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "Niroop H | Founder & CEO, MAH Quantum",

  description:
    "Professional profile of Niroop H, Founder and Chief Executive Officer of MAH Quantum, Bengaluru, India.",

  keywords: [
    "Niroop H",
    "Niroop H MAH Quantum",
    "MAH Quantum",
    "Founder Niroop H",
    "Niroop H Founder",
    "DeepTech",
    "Artificial Intelligence",
    "Semiconductors",
    "Smart Grids",
    "Advanced Computing",
    "Quantum Computing",
    "Future Intelligence Systems",
    "Research and Development",
  ],

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title: "Niroop H | Founder & CEO, MAH Quantum",

    description:
      "Professional profile of Niroop H, Founder and Chief Executive Officer of MAH Quantum.",

    url: siteUrl,

    siteName: "Niroop H",

    type: "profile",

    images: [
      {
        url: imageUrl,
        width: 832,
        height: 1088,
        alt: "Portrait of Niroop H",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,

      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

/*
|--------------------------------------------------------------------------
| Structured Data
|--------------------------------------------------------------------------
|
| ProfilePage
|     ↓
| Person: Niroop H
|     ↓
| worksFor
|     ↓
| Organization: MAH Quantum
|
*/

const structuredData = {
  "@context": "https://schema.org",

  "@graph": [
    /*
    --------------------------------------------------
    PROFILE PAGE
    --------------------------------------------------
    */

    {
      "@type": "ProfilePage",

      "@id": `${siteUrl}/#profile`,

      url: siteUrl,

      name: "Niroop H — Professional Profile",

      dateModified: "2026-10-04",

      mainEntity: {
        "@id": `${siteUrl}/#niroop-h`,
      },
    },

    /*
    --------------------------------------------------
    PERSON
    --------------------------------------------------
    */

    {
      "@type": "Person",

      "@id": `${siteUrl}/#niroop-h`,

      name: "Niroop H",

      alternateName: "Niroop H",

      description:
        "Founder and Chief Executive Officer of MAH Quantum.",

      image: imageUrl,

      jobTitle: "Founder & Chief Executive Officer",

      url: siteUrl,

      worksFor: {
        "@id": `${organizationUrl}#organization`,
      },

      knowsAbout: [
        "DeepTech",
        "Artificial Intelligence",
        "Semiconductors",
        "Smart Grids",
        "Advanced Computing",
        "Quantum Computing",
        "Future Intelligence Systems",
        "Research & Development",
      ],

      sameAs: [
        "https://www.linkedin.com/in/nirooph",
      ],
    },

    /*
    --------------------------------------------------
    ORGANIZATION
    --------------------------------------------------
    */

    {
      "@type": "Organization",

      "@id": `${organizationUrl}#organization`,

      name: "MAH Quantum",

      alternateName: "MAH QUANTUM",

      description:
        "Bengaluru-based technology and research organization working across advanced AI, DeepTech, semiconductor technologies, advanced computing and applied research.",

      url: organizationUrl,

      sameAs: [
        "https://mahquantum.tech/",
        "https://github.com/mahquantum",
        "https://huggingface.co/mah-quantum",
        "https://research.mahquantum.tech/",
        "https://workspace.mahquantum.tech/",
        "https://www.intel.com/content/www/us/en/partner/showcase/storefront/a5Scv0000004BhdEAE/mah-quantum.html",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
