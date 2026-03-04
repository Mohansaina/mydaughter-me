'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SimpleProduct } from '@/types';

interface ProductCardProps {
    product: SimpleProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="product-card group">
            <Link href={`/product/${product.slug}`} className="block">
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden bg-primary-100 rounded-lg mb-4">
                    <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="product-image-hover object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {/* Hover Image */}
                    {product.images[1] && (
                        <Image
                            src={product.images[1]}
                            alt={`${product.name} - alternate view`}
                            fill
                            className="product-image-hover object-cover opacity-0 group-hover:opacity-100"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                    )}
                    {/* Sale Badge */}
                    {product.originalPrice && (
                        <div className="absolute top-3 left-3 bg-accent-600 text-white text-xs font-medium px-2 py-1 rounded">
                            Sale
                        </div>
                    )}
                    {/* Quick View Button */}
                    <div className="absolute inset-x-4 bottom-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <button className="w-full bg-white text-primary-800 py-2 px-4 text-sm font-medium rounded hover:bg-primary-50 transition-colors">
                            Quick View
                        </button>
                    </div>
                </div>

                {/* Product Info */}
                <div className="space-y-1">
                    <p className="text-xs text-primary-500 uppercase tracking-wide">
                        {product.category}
                    </p>
                    <h3 className="font-medium text-primary-800 group-hover:text-primary-600 transition-colors">
                        {product.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                        <span className="text-primary-900 font-semibold">
                            ${product.price.toFixed(2)}
                        </span>
                        {product.originalPrice && (
                            <span className="text-primary-400 line-through text-sm">
                                ${product.originalPrice.toFixed(2)}
                            </span>
                        )}
                    </div>
                </div>
            </Link>
        </div>
    );
}
