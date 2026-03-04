'use client';

import { useState, useMemo } from 'react';
import ProductCard from '@/components/product/ProductCard';
import { products, categories } from '@/data/products';

export default function ShopPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [sortBy, setSortBy] = useState<string>('featured');

    const filteredProducts = useMemo(() => {
        let filtered = [...products];

        // Filter by category
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(
                (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
            );
        }

        // Sort products
        switch (sortBy) {
            case 'price-low':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'newest':
                // For demo, just reverse the array
                filtered.reverse();
                break;
            default:
                // featured - keep original order
                break;
        }

        return filtered;
    }, [selectedCategory, sortBy]);

    return (
        <div className="min-h-screen bg-primary-50">
            {/* Page Header */}
            <div className="bg-white border-b border-primary-100">
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                    <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-800 mb-2">
                        Shop All
                    </h1>
                    <p className="text-primary-600">
                        Discover our complete collection of elegant pieces
                    </p>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <aside className="w-full lg:w-64 flex-shrink-0">
                        <div className="bg-white rounded-lg p-6 sticky top-24">
                            {/* Category Filter */}
                            <div className="mb-8">
                                <h3 className="font-semibold text-primary-800 mb-4">Categories</h3>
                                <div className="space-y-2">
                                    <button
                                        onClick={() => setSelectedCategory('all')}
                                        className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${selectedCategory === 'all'
                                                ? 'bg-primary-100 text-primary-800 font-medium'
                                                : 'text-primary-600 hover:bg-primary-50'
                                            }`}
                                    >
                                        All Products
                                    </button>
                                    {categories.map((category) => (
                                        <button
                                            key={category.id}
                                            onClick={() => setSelectedCategory(category.slug)}
                                            className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${selectedCategory === category.slug
                                                    ? 'bg-primary-100 text-primary-800 font-medium'
                                                    : 'text-primary-600 hover:bg-primary-50'
                                                }`}
                                        >
                                            {category.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Price Range Info */}
                            <div>
                                <h3 className="font-semibold text-primary-800 mb-4">Price Range</h3>
                                <div className="space-y-1 text-primary-600 text-sm">
                                    <p>Under $100</p>
                                    <p>$100 - $200</p>
                                    <p>$200 - $300</p>
                                    <p>Over $300</p>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <div className="flex-1">
                        {/* Sort and Results Count */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                            <p className="text-primary-600">
                                Showing {filteredProducts.length} products
                            </p>
                            <div className="flex items-center gap-2">
                                <label htmlFor="sort" className="text-primary-600 text-sm">
                                    Sort by:
                                </label>
                                <select
                                    id="sort"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="border border-primary-200 rounded-md px-3 py-2 text-primary-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary-400"
                                >
                                    <option value="featured">Featured</option>
                                    <option value="newest">Newest</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                </select>
                            </div>
                        </div>

                        {/* Products Grid */}
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <p className="text-primary-600 text-lg">
                                    No products found in this category.
                                </p>
                                <button
                                    onClick={() => setSelectedCategory('all')}
                                    className="mt-4 text-primary-800 font-medium hover:text-primary-600 transition-colors"
                                >
                                    View all products
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
