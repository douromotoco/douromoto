import Link from 'next/link';
import Image from 'next/image';
import productsData from '@/data/products.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SHOP | DOURO MOTO CO.',
  description: 'Browse our complete catalog of motorcycle crash guards, lighting mounts, and rare apparel.',
};

type Props = {
  searchParams: Promise<{ category?: string }>;
};

export default async function ShopPage({ searchParams }: Props) {
  const { category } = await searchParams;

  const filteredProducts = category
    ? productsData.filter((p) => p.category === category)
    : productsData;

  return (
    <main className="max-w-7xl mx-auto px-4 py-10 space-y-8">
      <div>
        <h1 className="text-3xl font-black tracking-tight text-white">SHOP CATALOG</h1>
        <p className="text-xs text-gray-400 mt-1">Select a category or browse all engineered accessories.</p>
      </div>

      {/* Category Filter Navigation */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2">
        <Link
          href="/shop"
          className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
            !category ? 'bg-orange-600 text-white' : 'bg-neutral-900 border border-neutral-800 text-gray-300 hover:text-white'
          }`}
        >
          All Accessories
        </Link>
        <Link
          href="/shop?category=crash-guards"
          className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
            category === 'crash-guards' ? 'bg-orange-600 text-white' : 'bg-neutral-900 border border-neutral-800 text-gray-300 hover:text-white'
          }`}
        >
          Crash Guards
        </Link>
        <Link
          href="/shop?category=lighting"
          className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
            category === 'lighting' ? 'bg-orange-600 text-white' : 'bg-neutral-900 border border-neutral-800 text-gray-300 hover:text-white'
          }`}
        >
          Lighting & Mounts
        </Link>
        <Link
          href="/shop?category=apparel"
          className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
            category === 'apparel' ? 'bg-orange-600 text-white' : 'bg-neutral-900 border border-neutral-800 text-gray-300 hover:text-white'
          }`}
        >
          Rare Hoodies
        </Link>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            href={`/shop/${product.slug}`}
            className="glass-panel rounded-3xl overflow-hidden border border-neutral-800 hover:border-orange-500 transition flex flex-col justify-between group bg-neutral-900/50"
          >
            <div>
              <div className="relative h-64 w-full bg-neutral-950 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 left-3 bg-orange-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase">
                  {product.categoryName}
                </span>
              </div>
              <div className="p-6 space-y-2">
                <h2 className="font-bold text-lg text-white group-hover:text-orange-500 transition">{product.title}</h2>
                <p className="text-xs text-gray-400 line-clamp-2">{product.description}</p>
              </div>
            </div>
            <div className="p-6 pt-0 flex items-center justify-between">
              <span className="text-lg font-black text-white">₹{product.price.toLocaleString('en-IN')}</span>
              <span className="text-xs font-bold text-orange-500">View Product →</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
