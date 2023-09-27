import { NextPage } from 'next'
import Image from 'next/image'
import ProductCard from './ProductCard'

interface Props {}

const NewProductHome: NextPage<Props> = ({}) => {
    return (
        <div className='max-container py-24'>
            <div className='title-section mb-14'>New Product</div>

            <div className='grid grid-cols-4 gap-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
                <ProductCard
                    id='1'
                    imageUrl='/images/product/1.jpeg'
                    title='Baju Atasan Wanita Terbaru Polo Crop Top Premium'
                    price='Rp54.000'
                    discountPrice='Rp90.000'
                    discount='40% OFF'
                />
                <ProductCard
                    id='1'
                    imageUrl='/images/product/1.jpeg'
                    title='Baju Atasan Wanita Terbaru Polo Crop Top Premium'
                    price='Rp54.000'
                    discountPrice='Rp90.000'
                    discount='40% OFF'
                />
                <ProductCard
                    id='1'
                    imageUrl='/images/product/1.jpeg'
                    title='Baju Atasan Wanita Terbaru Polo Crop Top Premium'
                    price='Rp54.000'
                    discountPrice='Rp90.000'
                    discount='40% OFF'
                />
                <ProductCard
                    id='1'
                    imageUrl='/images/product/1.jpeg'
                    title='Baju Atasan Wanita Terbaru Polo Crop Top Premium'
                    price='Rp54.000'
                    discountPrice='Rp90.000'
                    discount='40% OFF'
                />
            </div>

            <div className='btn-primary mx-auto mt-10'>View All</div>
        </div>
    )
}

export default NewProductHome
