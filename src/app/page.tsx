import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      <div className="relative rounded-3xl overflow-hidden border border-orange-500/30 p-8 md:p-16 bg-gradient-to-r from-neutral-900 via-neutral-900 to-orange-950/20 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-4 max-w-2xl">
          <span className="text-xs font-extrabold bg-orange-500/20 text-orange-500 px-3 py-1 rounded-full uppercase tracking-widest border border-orange-500/30">
            Pro Rider Community Hub
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white">
            MASTER YOUR RIDE & MACHINE.
          </h1>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Custom engineered crash guards, fog light mounts, and rare apparel crafted by Douro Moto Co.
          </p>
          <div className="pt-4 flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              href="/shop"
              className="bg-orange-600 hover:bg-orange-500 text-white font-extrabold px-8 py-4 rounded-2xl transition shadow-lg shadow-orange-600/30"
            >
              Explore SHOP
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
