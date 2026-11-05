import { MetadataRoute } from 'next';
import productsData from '@/data/products.json';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://douromoto.com';

  const productUrls = productsData.map((product) => ({
    url: `${baseUrl}/shop/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/shop`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...productUrls,
  ];
}
