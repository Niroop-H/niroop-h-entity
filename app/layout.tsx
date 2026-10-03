import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://nirooph.mahquantum.tech";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "Niroop H | Founder & CEO, MAH Quantum",

  description:
    "Professional profile of Niroop H, Founder and Chief Executive Officer of MAH Quantum, Bengaluru, India.",

  keywords: [
    "Niroop H",
    "MAH Quantum",
    "Niroop H MAH Quantum",
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
        url: "/niroop-h.jpeg",
        width: 832,
        height: 1088,
        alt: "Niroop H",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile`,
      url: siteUrl,
      name: "Niroop H — Professional Profile",
      mainEntity: {
        "@id": `${siteUrl}/#niroop-h`,
      },
    },

    {
      "@type": "Person",
      "@id": `${siteUrl}/#niroop-h`,
      name: "Niroop H",
      description:
        "Founder and Chief Executive Officer of MAH Quantum.",
      image: `${siteUrl}/niroop-h.jpeg`,

      jobTitle: "Founder & Chief Executive Officer",

      url: siteUrl,

      worksFor: {
        "@id": "https://mahquantum.tech/#organization",
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

    {
      "@type": "Organization",
      "@id": "https://mahquantum.tech/#organization",
      name: "MAH Quantum",
      url: "https://mahquantum.tech/",
      sameAs: [
        "https://mahquantum.tech/",
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
