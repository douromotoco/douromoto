import Link from 'next/link';

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">DOURO MOTO CO.</h1>
      <p className="text-xl text-gray-600 mb-8">Custom engineered motorcycle gear, crash guards, and accessories.</p>
      <Link 
        href="/shop" 
        className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition"
      >
        Explore Shop
      </Link>
    </main>
  );
}
