export const footerData = {
    logoSrc: '/images/logo.png',
    tagline:
        'NBN adalah Sebuah Brand Lokal Indonesia yang Mengadopsi Model Polos itu Elegan. Kualitas Akan Kami Jaga Untuk Para Buddies NBN.',
    supportLinks: [
        { text: 'Exchanges & Returns', href: '/' },
        { text: 'Payment Information', href: '/' },
        { text: 'How To Track Your Order', href: '/' },
        { text: 'How To Use Discount Code', href: '/' },
        { text: 'FAQs', href: '/' }
    ],
    onlineOperationLinks: [
        { text: 'Exchanges & Returns', href: '/' },
        { text: 'Payment Information', href: '/' },
        { text: 'How To Track Your Order', href: '/' },
        { text: 'How To Use Discount Code', href: '/' },
        { text: 'FAQs', href: '/' }
    ]
}

export const footerSocialLinks = [
    {
        name: 'Instagram',
        href: 'https://instagram.com/ceprejaa?igshid=OGQ5ZDc2ODk2ZA==',
        imageSrc: '/images/instagram.png'
    },
    {
        name: 'TikTok',
        href: 'https://www.tiktok.com/@real.nbnofficial',
        imageSrc: '/images/tik-tok.png'
    },
    {
        name: 'Shopee',
        href: 'https://shopee.co.id/nbn.official22',
        imageSrc: '/images/shopee.png'
    }
]

export const footerCopyrightLinks = [
    { text: 'Refund policy', href: '/' },
    { text: 'Privacy policy', href: '/' },
    { text: 'Shipping policy', href: '/' },
    { text: 'Contact information', href: '/' }
]

// Tipe data untuk merepresentasikan tautan
export interface NavLink {
    text: string
    href: string
}

// Daftar tautan yang akan digunakan di navbar
export const navLinks: NavLink[] = [
    { text: 'Sweater', href: '/collections?category=sweater' },
    { text: 'Jaket', href: '/collections?category=jaket' },
    { text: 'Rajut', href: '/collections?category=rajut' },
    { text: 'Dress & One Set', href: '/collections?category=dressoneset' },
    { text: 'Faux Fur', href: '/collections?category=fauxfur' },
    { text: 'New Product', href: '/collections?sort=new' }
]
