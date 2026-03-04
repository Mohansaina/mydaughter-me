import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Categories from '@/components/home/Categories';
import AboutPreview from '@/components/home/AboutPreview';
import InstagramGallery from '@/components/home/InstagramGallery';
import Newsletter from '@/components/home/Newsletter';

export default function HomePage() {
    return (
        <>
            <Hero />
            <FeaturedProducts />
            <Categories />
            <AboutPreview />
            <InstagramGallery />
            <Newsletter />
        </>
    );
}
