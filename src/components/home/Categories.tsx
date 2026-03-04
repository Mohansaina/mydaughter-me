import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/data/products';

export default function Categories() {
    return (
        <section className="py-20 bg-primary-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <p className="text-accent-600 font-medium tracking-wider uppercase mb-2">
                        Shop by Category
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-800 mb-4">
                        Find Your Style
                    </h2>
                    <p className="text-primary-600 max-w-2xl mx-auto">
                        Explore our collections designed for every occasion and mood
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            href={`/shop?category=${category.slug}`}
                            className="group relative aspect-[3/4] overflow-hidden rounded-lg"
                        >
                            <Image
                                src={category.image}
                                alt={category.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-primary-900/20 to-transparent" />
                            <div className="absolute inset-0 flex flex-col justify-end p-6">
                                <h3 className="font-serif text-2xl font-bold text-white mb-2">
                                    {category.name}
                                </h3>
                                <p className="text-primary-200 text-sm mb-4">
                                    {category.description}
                                </p>
                                <span className="inline-flex items-center text-white font-medium text-sm group-hover:text-accent-300 transition-colors">
                                    Shop Now
                                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
