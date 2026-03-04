import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative h-[90vh] min-h-[600px] flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80"
                    alt="Elegant boutique fashion"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-900/70 via-primary-800/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-xl">
                    <p className="text-accent-300 font-medium tracking-wider uppercase mb-4 animate-fadeIn">
                        New Collection 2024
                    </p>
                    <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fadeIn stagger-1">
                        Elegance for
                        <br />
                        Every Generation
                    </h1>
                    <p className="text-primary-100 text-lg md:text-xl mb-8 max-w-lg animate-fadeIn stagger-2">
                        Discover our curated collection of timeless pieces designed for mothers and daughters to create beautiful memories together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn stagger-3">
                        <Link
                            href="/shop"
                            className="inline-flex items-center justify-center bg-white text-primary-800 px-8 py-4 text-base font-medium hover:bg-primary-50 transition-colors btn-hover rounded-md"
                        >
                            Shop Now
                        </Link>
                        <Link
                            href="/about"
                            className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 text-base font-medium hover:bg-white hover:text-primary-800 transition-colors btn-hover rounded-md"
                        >
                            Our Story
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
                    <div className="w-1.5 h-3 bg-white/50 rounded-full" />
                </div>
            </div>
        </section>
    );
}
