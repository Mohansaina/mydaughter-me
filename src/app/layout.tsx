import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'My Daughters & Me | Elegant Boutique Fashion',
    description: 'Discover elegant boutique fashion for mothers and daughters. Creating beautiful moments together with curated clothing collections.',
    keywords: 'boutique, clothing, fashion, mother daughter, dresses, jackets, accessories',
    openGraph: {
        title: 'My Daughters & Me | Elegant Boutique Fashion',
        description: 'Discover elegant boutique fashion for mothers and daughters.',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
            <body className="min-h-screen flex flex-col font-sans">
                <Header />
                <main className="flex-grow pt-20">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
