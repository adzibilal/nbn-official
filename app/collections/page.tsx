'use client'
import FilterCollections from '@/components/FilterCollections'
import ProductCard from '@/components/ProductCard'
import { NextPage } from 'next'
import { useSearchParams } from 'next/navigation'

interface Props {}

const Page: NextPage<Props> = ({}) => {
    const searchParams = useSearchParams()
    const category = searchParams?.get('category') || 'All'

    return (
        <>
            <div className='max-container'>{category} Collections</div>
            <div className='max-container grid grid-cols-[250px_1fr] gap-3 py-3 min-h-screen items-start max-md:grid-cols-1'>
                <FilterCollections />
                <div className='grid grid-cols-4 gap-3 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
                    <ProductCard
                        imageUrl='/images/product/1.jpeg'
                        title='Baju Atasan Wanita Terbaru Polo Crop Top Premium'
                        price='Rp54.000'
                        discountPrice='Rp90.000'
                        discount='40% OFF'
                    />
                    <ProductCard
                        imageUrl='/images/product/1.jpeg'
                        title='Baju Atasan Wanita Terbaru Polo Crop Top Premium'
                        price='Rp54.000'
                        discountPrice='Rp90.000'
                        discount='40% OFF'
                    />
                    <ProductCard
                        imageUrl='/images/product/1.jpeg'
                        title='Baju Atasan Wanita Terbaru Polo Crop Top Premium'
                        price='Rp54.000'
                        discountPrice='Rp90.000'
                        discount='40% OFF'
                    />
                    <ProductCard
                        imageUrl='/images/product/1.jpeg'
                        title='Baju Atasan Wanita Terbaru Polo Crop Top Premium'
                        price='Rp54.000'
                        discountPrice='Rp90.000'
                        discount='40% OFF'
                    />
                    <ProductCard
                        imageUrl='/images/product/1.jpeg'
                        title='Baju Atasan Wanita Terbaru Polo Crop Top Premium'
                        price='Rp54.000'
                        discountPrice='Rp90.000'
                        discount='40% OFF'
                    />
                    <ProductCard
                        imageUrl='/images/product/1.jpeg'
                        title='Baju Atasan Wanita Terbaru Polo Crop Top Premium'
                        price='Rp54.000'
                        discountPrice='Rp90.000'
                        discount='40% OFF'
                    />
                    <ProductCard
                        imageUrl='/images/product/1.jpeg'
                        title='Baju Atasan Wanita Terbaru Polo Crop Top Premium'
                        price='Rp54.000'
                        discountPrice='Rp90.000'
                        discount='40% OFF'
                    />
                    <ProductCard
                        imageUrl='/images/product/1.jpeg'
                        title='Baju Atasan Wanita Terbaru Polo Crop Top Premium'
                        price='Rp54.000'
                        discountPrice='Rp90.000'
                        discount='40% OFF'
                    />
                    <ProductCard
                        imageUrl='/images/product/1.jpeg'
                        title='Baju Atasan Wanita Terbaru Polo Crop Top Premium'
                        price='Rp54.000'
                        discountPrice='Rp90.000'
                        discount='40% OFF'
                    />
                    <ProductCard
                        imageUrl='/images/product/1.jpeg'
                        title='Baju Atasan Wanita Terbaru Polo Crop Top Premium'
                        price='Rp54.000'
                        discountPrice='Rp90.000'
                        discount='40% OFF'
                    />
                    <ProductCard
                        imageUrl='/images/product/1.jpeg'
                        title='Baju Atasan Wanita Terbaru Polo Crop Top Premium'
                        price='Rp54.000'
                        discountPrice='Rp90.000'
                        discount='40% OFF'
                    />
                    <ProductCard
                        imageUrl='/images/product/1.jpeg'
                        title='Baju Atasan Wanita Terbaru Polo Crop Top Premium'
                        price='Rp54.000'
                        discountPrice='Rp90.000'
                        discount='40% OFF'
                    />
                    <ProductCard
                        imageUrl='/images/product/1.jpeg'
                        title='Baju Atasan Wanita Terbaru Polo Crop Top Premium'
                        price='Rp54.000'
                        discountPrice='Rp90.000'
                        discount='40% OFF'
                    />
                    <ProductCard
                        imageUrl='/images/product/1.jpeg'
                        title='Baju Atasan Wanita Terbaru Polo Crop Top Premium'
                        price='Rp54.000'
                        discountPrice='Rp90.000'
                        discount='40% OFF'
                    />
                    <ProductCard
                        imageUrl='/images/product/1.jpeg'
                        title='Baju Atasan Wanita Terbaru Polo Crop Top Premium'
                        price='Rp54.000'
                        discountPrice='Rp90.000'
                        discount='40% OFF'
                    />
                    <ProductCard
                        imageUrl='/images/product/1.jpeg'
                        title='Baju Atasan Wanita Terbaru Polo Crop Top Premium'
                        price='Rp54.000'
                        discountPrice='Rp90.000'
                        discount='40% OFF'
                    />
                    <ProductCard
                        imageUrl='/images/product/1.jpeg'
                        title='Baju Atasan Wanita Terbaru Polo Crop Top Premium'
                        price='Rp54.000'
                        discountPrice='Rp90.000'
                        discount='40% OFF'
                    />
                    <ProductCard
                        imageUrl='/images/product/1.jpeg'
                        title='Baju Atasan Wanita Terbaru Polo Crop Top Premium'
                        price='Rp54.000'
                        discountPrice='Rp90.000'
                        discount='40% OFF'
                    />
                    <ProductCard
                        imageUrl='/images/product/1.jpeg'
                        title='Baju Atasan Wanita Terbaru Polo Crop Top Premium'
                        price='Rp54.000'
                        discountPrice='Rp90.000'
                        discount='40% OFF'
                    />
                    <ProductCard
                        imageUrl='/images/product/1.jpeg'
                        title='Baju Atasan Wanita Terbaru Polo Crop Top Premium'
                        price='Rp54.000'
                        discountPrice='Rp90.000'
                        discount='40% OFF'
                    />
                    <ProductCard
                        imageUrl='/images/product/1.jpeg'
                        title='Baju Atasan Wanita Terbaru Polo Crop Top Premium'
                        price='Rp54.000'
                        discountPrice='Rp90.000'
                        discount='40% OFF'
                    />
                    <ProductCard
                        imageUrl='/images/product/1.jpeg'
                        title='Baju Atasan Wanita Terbaru Polo Crop Top Premium'
                        price='Rp54.000'
                        discountPrice='Rp90.000'
                        discount='40% OFF'
                    />
                    <ProductCard
                        imageUrl='/images/product/1.jpeg'
                        title='Baju Atasan Wanita Terbaru Polo Crop Top Premium'
                        price='Rp54.000'
                        discountPrice='Rp90.000'
                        discount='40% OFF'
                    />
                    <ProductCard
                        imageUrl='/images/product/1.jpeg'
                        title='Baju Atasan Wanita Terbaru Polo Crop Top Premium'
                        price='Rp54.000'
                        discountPrice='Rp90.000'
                        discount='40% OFF'
                    />
                    <ProductCard
                        imageUrl='/images/product/1.jpeg'
                        title='Baju Atasan Wanita Terbaru Polo Crop Top Premium'
                        price='Rp54.000'
                        discountPrice='Rp90.000'
                        discount='40% OFF'
                    />
                </div>
            </div>
        </>
    )
}

export default Page
