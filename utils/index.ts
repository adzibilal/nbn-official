import { format } from 'date-fns'

export function generateTestimonialImageURL(imageNumber: number): string {
    // Tentukan rentang angka gambar (misalnya, dari 1 hingga 14)
    const minImageNumber = 1
    const maxImageNumber = 14

    // Pastikan imageNumber berada dalam rentang yang valid
    if (imageNumber < minImageNumber || imageNumber > maxImageNumber) {
        throw new Error(
            `Invalid imageNumber. It should be between ${minImageNumber} and ${maxImageNumber}.`
        )
    }

    // Buat URL gambar berdasarkan imageNumber
    const imageURL = `/img/testi/${imageNumber}.jpg`

    return imageURL
}

export function ctaWhatsapp() {
    // Membuat pesan teks
    const pesan: string = `Halo kak,

Aku mau ikutan nabung di thisgroovy.`

    // Membuat tautan WhatsApp dengan nomor telepon dan pesan
    const tautanWhatsApp: string = `https://api.whatsapp.com/send?phone=6285891069847&text=${encodeURIComponent(
        pesan
    )}`

    // Buka tautan WhatsApp di jendela baru
    window.open(tautanWhatsApp, '_blank')
}

// Fungsi untuk memformat tanggal ke dalam format tertentu
export function formatDate(date: Date): string {
    const dateObject = new Date(date)
    return format(dateObject, 'dd MMMM yyyy')
}

export function parseInputDate(date: Date) {
    const dateObject = new Date(date)
    const val = dateObject.toISOString().split('T')[0]
    return val
}

export function toggleDarkmode() {
    const darkmode = localStorage.getItem('color-mode')
    if (darkmode == 'light') {
        document.documentElement.classList.add('dark')
        document.documentElement.setAttribute('data-theme', 'black')
        localStorage.setItem('color-mode', 'dark')
    } else {
        document.documentElement.classList.remove('dark')
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('color-mode', 'light')
    }
}

export function getStorage(key: string) {
    return localStorage.getItem(key) || ''
}

export function getPercentageDiscount(price: number, discount: number) {
    if (price <= 0 || discount < 0 || discount >= price) {
        return '0% OFF' // Hindari pembagian oleh nol atau nilai discount yang tidak valid
    }

    // Hitung persentase diskon
    const percentage = Math.round((1 - discount / price) * 100)

    return `${percentage}% OFF`
}

export function parseToRupiah(number: number) {
    if (typeof number !== 'number') {
        return 'Rp0' // Mengembalikan 'Rp0' jika input bukan angka
    }

    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    })

    return formatter.format(number)
}
