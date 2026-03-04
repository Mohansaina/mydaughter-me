import Link from 'next/link';
import ProductCard from '@/components/product/ProductCard';
import { getFeaturedProducts } from '@/data/products';

export default function FeaturedProducts() {
    const featuredProducts = getFeaturedProducts();

    return (
        <section className="py-20 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <p className="text-accent-600 font-medium tracking-wider uppercase mb-2">
                        Curated Selection
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-800 mb-4">
                        Featured Pieces
                    </h2>
                    <p className="text-primary-600 max-w-2xl mx-auto">
                        Hand-picked styles that blend timeless elegance with modern trends
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <Link
                        href="/shop"
                        className="inline-flex items-center justify-center border-2 border-primary-800 text-primary-800 px-8 py-3 text-base font-medium hover:bg-primary-800 hover:text-white transition-colors rounded-md"
                    >
                        View All Products
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
