import BannerCta from '@/components/BannerCta'
import Hero from '@/components/Hero'
import NewProductHome from '@/components/NewProductHome'
import ProductPerCategoryHome from '@/components/ProductPerCategoryHome'
import Image from 'next/image'

export default function Home() {
    return (
        <main className=''>
            <Hero />
            <NewProductHome />
            <BannerCta />
            <ProductPerCategoryHome />
            <BannerCta />
            <ProductPerCategoryHome />
        </main>
    )
}
