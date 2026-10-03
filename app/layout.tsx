import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://nirooph.mahquantum.tech';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Niroop H — Founder & CEO, MAH Quantum',
  description: 'Official professional profile of Niroop H, Founder & CEO of MAH Quantum, Bengaluru, India.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Niroop H — Founder & CEO, MAH Quantum',
    description: 'Official professional profile of Niroop H.',
    url: siteUrl,
    siteName: 'Niroop H',
    type: 'profile',
    images: [{ url: '/niroop-h.jpeg', width: 832, height: 1088, alt: 'Niroop H' }]
  },
  robots: { index: true, follow: true },
};

const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteUrl}/#niroop-h`,
  name: 'Niroop H',
  url: siteUrl,
  image: [`${siteUrl}/niroop-h.jpeg`],
  jobTitle: 'Founder & CEO',
  description: 'Founder & CEO of MAH Quantum, working across AI systems, advanced computing, embedded technologies, semiconductors and research.',
  worksFor: {
    '@type': 'Organization',
    '@id': 'https://mahquantum.tech/#organization',
    name: 'MAH Quantum',
    url: 'https://mahquantum.tech/'
  },
  sameAs: ['https://www.linkedin.com/in/nirooph']
};

const profilePage = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${siteUrl}/#profile`,
  url: siteUrl,
  mainEntity: { '@id': `${siteUrl}/#niroop-h` },
  image: `${siteUrl}/niroop-h.jpeg`
};

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://mahquantum.tech/#organization',
  name: 'MAH Quantum',
  url: 'https://mahquantum.tech/',
  founder: { '@id': `${siteUrl}/#niroop-h` },
  sameAs: ['https://mahquantum.tech/']
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/niroop-h.jpeg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
