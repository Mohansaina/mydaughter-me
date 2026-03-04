// Shopify Storefront API Integration
// This file provides utilities to connect to Shopify in the future

const SHOPIFY_STOREFRONT_API_URL = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_URL || '';
const SHOPIFY_STOREFRONT_ACCESS_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || '';

// GraphQL query helper for Shopify
export async function shopifyFetch<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
    const response = await fetch(SHOPIFY_STOREFRONT_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN,
        },
        body: JSON.stringify({ query, variables }),
    });

    const json = await response.json();

    if (json.errors) {
        throw new Error(json.errors[0].message);
    }

    return json.data;
}

// Query fragments for common data
export const PRODUCT_FRAGMENT = `
  fragment ProductFragment on Product {
    id
    handle
    title
    description
    descriptionHtml
    vendor
    productType
    tags
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
      maxVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 10) {
      edges {
        node {
          id
          url
          altText
        }
      }
    }
    variants(first: 100) {
      edges {
        node {
          id
          title
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
          availableForSale
          selectedOptions {
            name
            value
          }
        }
      }
    }
    featuredImage {
      id
      url
      altText
    }
    availableForSale
    createdAt
    updatedAt
  }
`;

// Product queries
export const GET_ALL_PRODUCTS_QUERY = `
  query GetAllProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          ...ProductFragment
        }
      }
    }
  }
  ${PRODUCT_FRAGMENT}
`;

export const GET_PRODUCT_BY_HANDLE_QUERY = `
  query GetProductByHandle($handle: String!) {
    productByHandle(handle: $handle) {
      ...ProductFragment
    }
  }
  ${PRODUCT_FRAGMENT}
`;

// Cart mutations
export const CREATE_CART_MUTATION = `
  mutation CreateCart($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        id
        checkoutUrl
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                  product {
                    id
                    title
                    featuredImage {
                      url
                      altText
                    }
                  }
                }
              }
            }
          }
        }
        cost {
          subtotalAmount {
            amount
            currencyCode
          }
          totalAmount {
            amount
            currencyCode
          }
        }
      }
    }
  }
`;

// Helper functions to transform Shopify data to our types
export function transformShopifyProduct(shopifyProduct: any) {
    return {
        id: shopifyProduct.id,
        handle: shopifyProduct.handle,
        title: shopifyProduct.title,
        description: shopifyProduct.description,
        descriptionHtml: shopifyProduct.descriptionHtml,
        vendor: shopifyProduct.vendor,
        productType: shopifyProduct.productType,
        tags: shopifyProduct.tags,
        priceRange: {
            minVariantPrice: parseFloat(shopifyProduct.priceRange.minVariantPrice.amount),
            maxVariantPrice: parseFloat(shopifyProduct.priceRange.maxVariantPrice.amount),
        },
        images: shopifyProduct.images.edges.map((edge: any) => edge.node),
        variants: shopifyProduct.variants.edges.map((edge: any) => ({
            ...edge.node,
            price: parseFloat(edge.node.price.amount),
            compareAtPrice: edge.node.compareAtPrice ? parseFloat(edge.node.compareAtPrice.amount) : undefined,
        })),
        featuredImage: shopifyProduct.featuredImage,
        availableForSale: shopifyProduct.availableForSale,
        createdAt: shopifyProduct.createdAt,
        updatedAt: shopifyProduct.updatedAt,
    };
}

// Format price for display
export function formatPrice(amount: number, currencyCode = 'USD'): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currencyCode,
    }).format(amount);
}
