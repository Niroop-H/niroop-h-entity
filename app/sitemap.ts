import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://nirooph.mahquantum.tech/', lastModified: new Date() }];
}
