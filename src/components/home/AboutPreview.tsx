import Link from 'next/link';
import Image from 'next/image';

export default function AboutPreview() {
    return (
        <section className="py-20 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1581338834647-b0fb40704e21?w=800&q=80"
                            alt="Mother and daughter fashion"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <p className="text-accent-600 font-medium tracking-wider uppercase mb-2">
                            Our Story
                        </p>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-800 mb-6">
                            Creating Beautiful Moments Together
                        </h2>
                        <div className="space-y-4 text-primary-600">
                            <p>
                                At My Daughters & Me, we believe that fashion is more than just clothing—it's about creating lasting memories and celebrating the special bond between mothers and daughters.
                            </p>
                            <p>
                                Founded in 2020, our boutique was born from a desire to provide elegant, timeless pieces that mothers and daughters can enjoy together. Each piece in our collection is carefully curated to ensure quality, style, and versatility.
                            </p>
                            <p>
                                We understand that every moment matters, whether it's a special occasion, a family gathering, or simply a day of making memories. Our collections are designed to help you look and feel your best while cherishing these precious moments.
                            </p>
                        </div>
                        <div className="mt-8">
                            <Link
                                href="/about"
                                className="inline-flex items-center justify-center bg-primary-800 text-white px-6 py-3 text-base font-medium hover:bg-primary-700 transition-colors btn-hover rounded-md"
                            >
                                Learn More About Us
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
