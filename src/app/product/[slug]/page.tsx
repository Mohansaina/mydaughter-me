'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductCard from '@/components/product/ProductCard';
import { getProductBySlug, getRelatedProducts, products } from '@/data/products';

interface ProductPageProps {
    params: { slug: string };
}

export default function ProductPage({ params }: ProductPageProps) {
    const product = getProductBySlug(params.slug);

    if (!product) {
        notFound();
    }

    const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]);
    const [selectedImage, setSelectedImage] = useState<number>(0);
    const [quantity, setQuantity] = useState<number>(1);
    const [addedToCart, setAddedToCart] = useState<boolean>(false);

    const relatedProducts = getRelatedProducts(product, 4);

    const handleAddToCart = () => {
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 3000);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Breadcrumb */}
            <div className="border-b border-primary-100">
                <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                    <nav className="flex text-sm">
                        <Link href="/" className="text-primary-500 hover:text-primary-700">
                            Home
                        </Link>
                        <span className="mx-2 text-primary-300">/</span>
                        <Link href="/shop" className="text-primary-500 hover:text-primary-700">
                            Shop
                        </Link>
                        <span className="mx-2 text-primary-300">/</span>
                        <Link
                            href={`/shop?category=${product.category.toLowerCase()}`}
                            className="text-primary-500 hover:text-primary-700"
                        >
                            {product.category}
                        </Link>
                        <span className="mx-2 text-primary-300">/</span>
                        <span className="text-primary-800">{product.name}</span>
                    </nav>
                </div>
            </div>

            {/* Product Details */}
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Images */}
                    <div className="space-y-4">
                        {/* Main Image */}
                        <div className="relative aspect-[3/4] bg-primary-100 rounded-lg overflow-hidden">
                            <Image
                                src={product.images[selectedImage]}
                                alt={product.name}
                                fill
                                className="object-cover"
                                priority
                            />
                            {product.originalPrice && (
                                <div className="absolute top-4 left-4 bg-accent-600 text-white text-sm font-medium px-3 py-1 rounded">
                                    Sale
                                </div>
                            )}
                        </div>

                        {/* Thumbnail Images */}
                        <div className="flex gap-4">
                            {product.images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`relative w-20 h-24 rounded-md overflow-hidden border-2 transition-colors ${selectedImage === index
                                            ? 'border-primary-800'
                                            : 'border-transparent hover:border-primary-300'
                                        }`}
                                >
                                    <Image
                                        src={image}
                                        alt={`${product.name} - view ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="lg:py-4">
                        <p className="text-primary-500 text-sm uppercase tracking-wide mb-2">
                            {product.category}
                        </p>
                        <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-800 mb-4">
                            {product.name}
                        </h1>

                        {/* Price */}
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-2xl font-bold text-primary-900">
                                ${product.price.toFixed(2)}
                            </span>
                            {product.originalPrice && (
                                <>
                                    <span className="text-lg text-primary-400 line-through">
                                        ${product.originalPrice.toFixed(2)}
                                    </span>
                                    <span className="text-sm text-accent-600 font-medium">
                                        Save ${(product.originalPrice - product.price).toFixed(2)}
                                    </span>
                                </>
                            )}
                        </div>

                        <p className="text-primary-600 mb-8 leading-relaxed">
                            {product.description}
                        </p>

                        {/* Size Selector */}
                        <div className="mb-6">
                            <div className="flex items-center justify-between mb-3">
                                <span className="font-medium text-primary-800">Size</span>
                                <a href="#" className="text-sm text-primary-600 hover:text-primary-800">
                                    Size Guide
                                </a>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`min-w-[48px] px-4 py-2 border rounded-md font-medium transition-colors ${selectedSize === size
                                                ? 'border-primary-800 bg-primary-800 text-white'
                                                : 'border-primary-200 text-primary-700 hover:border-primary-400'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity */}
                        <div className="mb-8">
                            <span className="font-medium text-primary-800 block mb-3">Quantity</span>
                            <div className="flex items-center">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-10 h-10 border border-primary-200 rounded-l-md flex items-center justify-center text-primary-600 hover:bg-primary-50"
                                >
                                    -
                                </button>
                                <span className="w-16 h-10 border-t border-b border-primary-200 flex items-center justify-center font-medium">
                                    {quantity}
                                </span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-10 h-10 border border-primary-200 rounded-r-md flex items-center justify-center text-primary-600 hover:bg-primary-50"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Add to Cart Button */}
                        <button
                            onClick={handleAddToCart}
                            className={`w-full py-4 px-8 rounded-md font-medium transition-all ${addedToCart
                                    ? 'bg-green-600 text-white'
                                    : 'bg-primary-800 text-white hover:bg-primary-700'
                                }`}
                        >
                            {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
                        </button>

                        {/* Stock Status */}
                        <div className="mt-6 flex items-center gap-2 text-sm">
                            {product.inStock ? (
                                <>
                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                    <span className="text-green-600">In Stock</span>
                                </>
                            ) : (
                                <>
                                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                    <span className="text-red-600">Out of Stock</span>
                                </>
                            )}
                        </div>

                        {/* Additional Info */}
                        <div className="mt-8 pt-8 border-t border-primary-100 space-y-4">
                            <div className="flex items-center gap-3 text-primary-600">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                </svg>
                                <span>Free shipping on orders over $150</span>
                            </div>
                            <div className="flex items-center gap-3 text-primary-600">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                                <span>Free returns within 30 days</span>
                            </div>
                            <div className="flex items-center gap-3 text-primary-600">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                <span>Secure checkout</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div className="mt-20">
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-800 mb-8">
                            You May Also Like
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
