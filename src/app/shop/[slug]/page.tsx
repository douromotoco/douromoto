import { notFound } from 'next/navigation';
import Image from 'next/image';
import productsData from '@/data/products.json';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

// 1. Dynamic SEO Metadata Generation for Google
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);

  if (!product) return { title: 'Product Not Found - DOURO MOTO CO.' };

  return {
    title: `${product.title} | DOURO MOTO CO.`,
    description: product.description,
    alternates: {
      canonical: `https://douromoto.com/shop/${product.slug}`,
    },
    openGraph: {
      title: product.title,
      description: product.description,
      url: `https://douromoto.com/shop/${product.slug}`,
      images: [{ url: product.image }],
    },
  };
}

// 2. Product Component & Google JSON-LD Schema Markup
export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);

  if (!product) notFound();

  // Google Structured Data (Rich Snippets for Price & Stock in Search Results)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    image: `https://douromoto.com${product.image}`,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: 'DOURO MOTO CO.',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: product.currency,
      price: product.price,
      availability: `https://schema.org/${product.availability}`,
      url: `https://douromoto.com/shop/${product.slug}`,
    },
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      {/* Inject JSON-LD Schema for Google SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-96 w-full">
          <Image
            src={product.image}
            alt={product.title}
            fill
            priority
            className="object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-xl font-semibold text-gray-800 mb-4">
            ₹{product.price.toLocaleString('en-IN')}
          </p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          
          <a
            href={`https://wa.me/919999999999?text=I%20want%20to%20inquire%20about%20${encodeURIComponent(product.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Inquire on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
