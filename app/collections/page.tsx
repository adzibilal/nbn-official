'use client'
import FilterCollections from '@/components/FilterCollections'
import ProductCard from '@/components/ProductCard'
import { getPercentageDiscount, parseToRupiah } from '@/utils'
import { NextPage } from 'next'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

interface Props {}

interface Product {
    _id: string
    image: string[]
    judul: string
    price: number
    discount: number
}

const Page: NextPage<Props> = ({}) => {
    const searchParams = useSearchParams()
    const category = searchParams?.get('category') || 'All'
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)
    const [totalProducts, setTotalProducts] = useState<number>(0)
    const [totalPages, setTotalPages] = useState<number>(0)
    const [currentPage, setCurrentPage] = useState<number>(1)

    useEffect(() => {
        async function fetchData() {
            try {
                const page = currentPage
                const perPage = 10 // Ubah sesuai kebutuhan
                const search = '' // Gantilah dengan nilai pencarian yang sesuai

                const response = await fetch(
                    `/api/products?page=${page}&perPage=${perPage}&search=${search}`
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
    }, [currentPage])

    if (loading) {
        return (
            <div className='w-full h-screen flex items-center justify-center'>
                <span className='loading loading-bars loading-lg'></span>
            </div>
        )
    }

    return (
        <>
            <div className='max-container grid grid-cols-[250px_1fr] gap-3 py-3 min-h-screen items-start max-md:grid-cols-1'>
                <FilterCollections />
                <div className='grid grid-cols-4 gap-3 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
                    {products.map(product => (
                        <ProductCard
                            key={product._id}
                            id={product._id}
                            imageUrl={product.image[0]}
                            title={product.judul}
                            price={parseToRupiah(product.discount)}
                            discountPrice={parseToRupiah(product.price)}
                            discount={getPercentageDiscount(product.price, product.discount)}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Page
