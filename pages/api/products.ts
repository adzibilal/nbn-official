import { NextApiRequest, NextApiResponse } from 'next'
import connectToDB from '@/utils/database'
import Product, { IProduct } from '@/models/Product'
import { json } from 'stream/consumers'

connectToDB()

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { method, query } = req
    const { productId, page, perPage, search, category } = query
    //@ts-ignore
    const pageNumber = parseInt(page) || 1
    //@ts-ignore
    const itemsPerPage = parseInt(perPage) || 10 // Ubah sesuai kebutuhan

    if (req.method === 'GET') {
        try {
            if (productId) {
                // Jika productId ada, cari produk berdasarkan productId
                const product = await Product.findById(productId)

                if (!product) {
                    return res.status(404).json({ error: 'Product not found' })
                }

                res.status(200).json(product)
            } else if (search) {
                // Jika terdapat parameter 'search', lakukan pencarian berdasarkan judul dan deskripsi
                const products = await Product.find({
                    $or: [
                        { judul: { $regex: search, $options: 'i' } }, // Pencarian judul (case-insensitive)
                        { deskripsi: { $regex: search, $options: 'i' } } // Pencarian deskripsi (case-insensitive)
                    ]
                })

                const totalProducts = products.length // Hitung jumlah produk yang cocok dengan kriteria pencarian

                const totalPages = Math.ceil(totalProducts / itemsPerPage)

                const paginatedProducts = await Product.find({
                    $or: [
                        { judul: { $regex: search, $options: 'i' } },
                        { deskripsi: { $regex: search, $options: 'i' } }
                    ]
                })
                    .skip((pageNumber - 1) * itemsPerPage)
                    .limit(itemsPerPage)
                    .sort({ createdAt: -1 })

                res.status(200).json({
                    products: paginatedProducts,
                    totalProducts,
                    totalPages,
                    currentPage: pageNumber
                })
            } else if (category && category !== 'All') {
                //@ts-ignore
                const categoryArray = category.split(',')
                console.error(categoryArray)

                const products = await Product.find({
                    category: { $in: categoryArray } // Menggunakan $in untuk mencocokkan kategori dalam array
                })

                const totalProducts = products.length
                const totalPages = Math.ceil(totalProducts / itemsPerPage)

                const paginatedProducts = await Product.find({
                    category: { $in: categoryArray } // Menggunakan $in untuk mencocokkan kategori dalam array
                })
                    .skip((pageNumber - 1) * itemsPerPage)
                    .limit(itemsPerPage)
                    .sort({ createdAt: -1 })

                res.status(200).json({
                    products: paginatedProducts,
                    totalProducts,
                    totalPages,
                    currentPage: pageNumber
                })
            } else {
                // Jika productId tidak ada dan tidak ada parameter 'search', ambil data produk dengan pagination
                const totalProducts = await Product.countDocuments()
                const totalPages = Math.ceil(totalProducts / itemsPerPage)
                const products = await Product.find()
                    .skip((pageNumber - 1) * itemsPerPage)
                    .limit(itemsPerPage)
                    .sort({ createdAt: -1 })

                res.status(200).json({
                    products,
                    totalProducts,
                    totalPages,
                    currentPage: pageNumber
                })
            }
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Server error' })
        }
    } else if (req.method === 'POST') {
        const {
            judul,
            deskripsi,
            content,
            variant,
            linkShopee,
            linkWhatsApp,
            category,
            price,
            discount,
            image // Sekarang Anda mengharapkan image sebagai array dari URL gambar
        } = req.body

        try {
            const newProduct = new Product({
                judul,
                deskripsi,
                content,
                variant,
                linkShopee,
                linkWhatsApp,
                category,
                price,
                discount,
                image // Simpan array URL gambar langsung ke dalam model produk
            })

            await newProduct.save()
            res.status(201).json(newProduct)
        } catch (error) {
            res.status(500).json({ error: 'Server error' })
        }
    } else if (req.method === 'PUT') {
        const {
            id,
            judul,
            deskripsi,
            image,
            content,
            variant,
            linkShopee,
            linkWhatsApp,
            category,
            price,
            discount
        } = req.body
        try {
            const updatedProduct = await Product.findByIdAndUpdate(id, {
                judul,
                deskripsi,
                image,
                content,
                variant,
                linkShopee,
                linkWhatsApp,
                category,
                price,
                discount
            })
            if (!updatedProduct) {
                return res.status(404).json({ error: 'Product not found' })
            }
            res.status(200).json(updatedProduct)
        } catch (error) {
            res.status(500).json({ error: 'Server error' })
        }
    } else if (req.method === 'DELETE') {
        const { id } = req.body
        try {
            const deletedProduct = await Product.findByIdAndRemove(id)
            if (!deletedProduct) {
                return res.status(404).json({ error: 'Product not found' })
            }
            res.status(200).json({ message: 'Product deleted successfully' })
        } catch (error) {
            res.status(500).json({ error: 'Server error' })
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' })
    }
}
