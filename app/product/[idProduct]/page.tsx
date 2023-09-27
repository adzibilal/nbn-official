'use client'
import { IProduct } from '@/models/Product'
import { getPercentageDiscount, parseToRupiah } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

// Fungsi untuk mengambil data produk berdasarkan ID dari API
async function fetchProductById(productId: string) {
    try {
        const response = await fetch(`/api/products?productId=${productId}`)
        if (response.ok) {
            const data = await response.json()
            return data
        } else {
            throw new Error('Failed to fetch product')
        }
    } catch (error) {
        //@ts-ignore
        throw new Error(error.message)
    }
}

export default function Page({ params }: { params: { idProduct: string } }) {
    const [product, setProduct] = useState<IProduct | null>(null)

    useEffect(() => {
        fetchProductById(params.idProduct)
            .then(data => {
                setProduct(data)
                console.error(product)
            })
            .catch(error => {
                console.error('Error fetching product:', error)
            })
    }, [params.idProduct])

    if (!product) {
        return (
            <div className='w-full h-screen flex items-center justify-center'>
                <span className='loading loading-bars loading-lg'></span>
            </div>
        )
    }

    return (
        <div className='max-container min-h-screen grid grid-cols-[1.5fr_2fr] max-md:grid-cols-1 py-10 gap-5'>
            <div className='img-product'>
                <div className='carousel w-full'>
                    {product.image.map((image, index) => (
                        <div
                            key={`item${index + 1}`}
                            id={`item${index + 1}`}
                            className='carousel-item w-full'>
                            <Image
                                src={image}
                                width={500}
                                height={500}
                                alt=''
                                className='w-full'
                            />
                        </div>
                    ))}
                </div>
                <div className='flex justify-center w-full py-2 gap-2'>
                    {product.image.map((image, index) => (
                        <a
                            key={`link${index + 1}`}
                            href={`#item${index + 1}`}
                            className=''>
                            <img
                                src={image}
                                className='w-[90px] h-[90px] object-cover'
                            />
                        </a>
                    ))}
                </div>
            </div>

            <div className='desc-product'>
                <div className='badge-discount'>
                    {getPercentageDiscount(product.price, product.discount)}
                </div>
                <div className="flex items-center text-sm gap-3 my-2">
                    {product.category.map((cat, index)=> (
                        <div className="" key={index}>{cat}</div>
                    ))}
                </div>
                <h1 className='title-detail'>{product.judul}</h1>
                <div className='flex gap-3 items-baseline mb-4'>
                    <div className='price text-yellow-600 text-3xl font-semibold'>
                        {parseToRupiah(product.discount)}
                    </div>
                    <div className='dicount line-through'>
                        {parseToRupiah(product.price)}
                    </div>
                </div>

                <div className='btn-container grid grid-cols-2 w-full gap-3 max-sm:grid-cols-1'>
                    <Link href={product.linkShopee} target='_blank'>
                        <div className='btn btn-shopee bg-orange-500 text-white border-none hover:bg-orange-600 w-full'>
                            Beli di Shoppe
                        </div>
                    </Link>
                    <Link href={product.linkWhatsApp} target='_blank'>
                        <div className='btn btn-wa bg-green-600 text-white border-none hover:bg-green-700 w-full'>
                            Beli di WhatsApp
                        </div>
                    </Link>
                </div>

                <div className='my-3'>
                    <div className='text-zinc-950 mb-2'>Warna :</div>
                    <ul className='list-variation'>
                        {product.variant.map((vari, index) => (
                            <li key={index}>{vari}</li>
                        ))}
                    </ul>
                </div>

                <div className=''>{product.deskripsi}</div>
            </div>
        </div>
    )
}
