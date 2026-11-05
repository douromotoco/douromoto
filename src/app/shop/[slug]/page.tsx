import { notFound } from 'next/navigation';
import Image from 'next/image';
import productsData from '@/data/products.json';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

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

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);

  if (!product) notFound();

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
    <main className="max-w-5xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="relative h-96 w-full rounded-3xl overflow-hidden bg-neutral-950 border border-neutral-800">
          <Image
            src={product.image}
            alt={product.title}
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="space-y-6 flex flex-col justify-center">
          <div>
            <span className="text-xs font-bold text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full uppercase border border-orange-500/20">
              {product.categoryName}
            </span>
            <h1 className="text-3xl font-black text-white mt-3">{product.title}</h1>
            <p className="text-2xl font-black text-orange-500 mt-2">₹{product.price.toLocaleString('en-IN')}</p>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">{product.description}</p>

          <div className="pt-4">
            <a
              href={`https://wa.me/919999999999?text=I%20want%20to%20inquire%20about%20${encodeURIComponent(product.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-500 text-white font-extrabold px-8 py-4 rounded-2xl transition shadow-lg shadow-green-600/30"
            >
              Inquire on WhatsApp
            </a>
            <p className="text-[11px] text-center text-gray-500 mt-2">Official Contact: douromoto@gmail.com</p>
          </div>
        </div>
      </div>
    </main>
  );
}
