import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[400px]">
                <Image
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
                    alt="About My Daughters & Me"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-900/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            Our Story
                        </h1>
                        <p className="text-lg md:text-xl text-primary-100 max-w-2xl mx-auto">
                            Celebrating the bond between mothers and daughters through timeless fashion
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Sections */}
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                {/* Mission Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <div className="relative aspect-square rounded-lg overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1581338834647-b0fb40704e21?w=800&q=80"
                            alt="Mother and daughter together"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <p className="text-accent-600 font-medium tracking-wider uppercase mb-2">
                            Our Mission
                        </p>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-800 mb-6">
                            Empowering Generations Through Style
                        </h2>
                        <div className="space-y-4 text-primary-600">
                            <p>
                                At My Daughters & Me, we believe that fashion is a powerful way to express the unique bond between mothers and daughters. Our journey began with a simple idea: to create a boutique where women of all ages could find elegant, timeless pieces that they could treasure together.
                            </p>
                            <p>
                                We understand that every moment shared between a mother and daughter is precious. Whether it's getting ready for a wedding, attending a special event, or simply spending quality time together, we want our clothing to be a part of those beautiful memories.
                            </p>
                            <p>
                                Our collections are thoughtfully curated to ensure quality, style, and versatility. Each piece is selected with care, keeping in mind the diverse needs and tastes of women across generations.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="text-center mb-20">
                    <p className="text-accent-600 font-medium tracking-wider uppercase mb-2">
                        What We Stand For
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-800 mb-12">
                        Our Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-primary-50 rounded-lg p-8">
                            <div className="w-12 h-12 bg-primary-800 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="font-serif text-xl font-bold text-primary-800 mb-3">
                                Quality First
                            </h3>
                            <p className="text-primary-600">
                                We believe in lasting quality over fleeting trends. Each piece is crafted with attention to detail and made to be cherished for years.
                            </p>
                        </div>
                        <div className="bg-primary-50 rounded-lg p-8">
                            <div className="w-12 h-12 bg-primary-800 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="font-serif text-xl font-bold text-primary-800 mb-3">
                                Timeless Style
                            </h3>
                            <p className="text-primary-600">
                                Our collections focus on timeless elegance that transcends seasonal trends, ensuring you can wear your pieces with pride for years to come.
                            </p>
                        </div>
                        <div className="bg-primary-50 rounded-lg p-8">
                            <div className="w-12 h-12 bg-primary-800 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="font-serif text-xl font-bold text-primary-800 mb-3">
                                Community
                            </h3>
                            <p className="text-primary-600">
                                We're more than a boutique – we're a community of women supporting each other and celebrating the special mother-daughter relationship.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-accent-600 font-medium tracking-wider uppercase mb-2">
                            Meet the Team
                        </p>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-800 mb-6">
                            The Hearts Behind the Brand
                        </h2>
                        <div className="space-y-4 text-primary-600">
                            <p>
                                My Daughters & Me was founded by Sarah Mitchell, a mother of three daughters who understands the importance of creating lasting memories through shared experiences.
                            </p>
                            <p>
                                "I started this boutique with my daughters in mind," Sarah explains. "I wanted to create a space where mothers and daughters could find beautiful pieces together – outfits for special occasions, everyday elegance, and everything in between."
                            </p>
                            <p>
                                Today, our team consists of passionate fashion enthusiasts who share a commitment to helping women look and feel their best. We believe that when you look good, you feel good – and that confidence radiates from within.
                            </p>
                        </div>
                    </div>
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
                            alt="Our team"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-primary-800 py-16">
                <div className="mx-auto max-w-7xl px-4 text-center">
                    <h2 className="font-serif text-3xl font-bold text-white mb-4">
                        Start Creating Memories Today
                    </h2>
                    <p className="text-primary-200 mb-8 max-w-2xl mx-auto">
                        Explore our collections and find the perfect pieces for your next mother-daughter moment.
                    </p>
                    <a
                        href="/shop"
                        className="inline-flex items-center justify-center bg-white text-primary-800 px-8 py-4 text-base font-medium hover:bg-primary-50 transition-colors btn-hover rounded-md"
                    >
                        Shop Now
                    </a>
                </div>
            </div>
        </div>
    );
}
