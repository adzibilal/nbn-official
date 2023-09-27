import mongoose, { Document, Schema, Model } from 'mongoose'

export interface IProduct extends Document {
    judul: string
    deskripsi: string
    image: string[] // URL gambar dari Cloudinary
    variant: string[]
    linkShopee: string
    linkWhatsApp: string
    category: string[]
    price: number
    discount: number
    createdAt: Date
    updatedAt: Date
}

// Periksa apakah model Product sudah ada sebelumnya
let Product: Model<IProduct>

try {
    Product = mongoose.model<IProduct>('Product')
} catch (error) {
    // Jika model belum ada, maka kompilasi model baru
    const productSchema = new Schema<IProduct>(
        {
            judul: { type: String, required: true },
            deskripsi: { type: String, required: true },
            image: [{ type: String, required: true }],
            variant: [{ type: String, required: true }],
            linkShopee: { type: String, required: true },
            linkWhatsApp: { type: String, required: true },
            category: [{ type: String, required: true }],
            price: { type: Number, required: true },
            discount: { type: Number, required: true },
            createdAt: { type: Date, required: true, default: Date.now },
            updatedAt: { type: Date, required: true, default: Date.now }
        },
        {
            timestamps: true // Menambahkan createdAt dan updatedAt secara otomatis
        }
    )

    Product = mongoose.model<IProduct>('Product', productSchema)
}

export default Product
