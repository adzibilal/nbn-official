'use client'
import { NextPage } from 'next'
import Image from 'next/image'
import ProductCard from './ProductCard'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getPercentageDiscount, parseToRupiah } from '@/utils'

interface Props {}

interface Product {
    _id: string
    image: string[]
    judul: string
    price: number
    discount: number
}

const NewProductHome: NextPage<Props> = ({}) => {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)
    const [totalProducts, setTotalProducts] = useState<number>(0)
    const [totalPages, setTotalPages] = useState<number>(0)
    const [currentPage, setCurrentPage] = useState<number>(1)

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            try {
                const page = currentPage
                const perPage = 8 // Ubah sesuai kebutuhan
                const search = '' // Gantilah dengan nilai pencarian yang sesuai

                const response = await fetch(
                    `/api/products?page=${page}&perPage=${perPage}`
                )
                if (response.ok) {
                    const data = await response.json()
                    setProducts(data.products)
                    setTotalProducts(data.totalProducts)
                    setTotalPages(data.totalPages)
                    setCurrentPage(data.currentPage)
                    setLoading(false)
                } else {
                    throw new Error('Failed to fetch products')
                }
            } catch (error) {
                console.error('Error fetching products:', error)
            }
        }

        fetchData()
    }, [])
    return (
        <div className='max-container py-24'>
            <div className='title-section mb-14'>Our Product</div>
            {loading ? (
                <div className='w-full h-[200px] flex items-center justify-center'>
                    <span className='loading loading-bars loading-lg'></span>
                </div>
            ) : (
                <div className='grid grid-cols-4 gap-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
                    {products.map(product => (
                        <ProductCard
                            key={product._id}
                            id={product._id}
                            imageUrl={product.image[0]}
                            title={product.judul}
                            price={parseToRupiah(product.discount)}
                            discountPrice={parseToRupiah(product.price)}
                            discount={getPercentageDiscount(
                                product.price,
                                product.discount
                            )}
                        />
                    ))}
                </div>
            )}
            <Link href='/collections'>
                <div className='btn-primary mx-auto mt-10'>View All</div>
            </Link>
        </div>
    )
}

export default NewProductHome
