// Product types - ready for Shopify Storefront API integration

export interface ProductImage {
    id: string;
    url: string;
    altText: string;
}

export interface ProductVariant {
    id: string;
    title: string;
    price: number;
    compareAtPrice?: number;
    availableForSale: boolean;
    selectedOptions: {
        name: string;
        value: string;
    }[];
}

export interface Product {
    id: string;
    handle: string;
    title: string;
    description: string;
    descriptionHtml: string;
    vendor: string;
    productType: string;
    tags: string[];
    priceRange: {
        minVariantPrice: number;
        maxVariantPrice: number;
    };
    images: ProductImage[];
    variants: ProductVariant[];
    featuredImage: ProductImage;
    availableForSale: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface Category {
    id: string;
    name: string;
    slug: string;
    description: string;
    image: string;
}

export interface CartItem {
    id: string;
    variantId: string;
    productId: string;
    title: string;
    variantTitle: string;
    price: number;
    quantity: number;
    image: ProductImage;
}

export interface Cart {
    id: string;
    items: CartItem[];
    totalQuantity: number;
    subtotal: number;
}

// For demo purposes - simplified product type
export interface SimpleProduct {
    id: string;
    name: string;
    slug: string;
    price: number;
    originalPrice?: number;
    description: string;
    category: string;
    images: string[];
    sizes: string[];
    inStock: boolean;
    featured: boolean;
}
