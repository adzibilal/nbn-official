import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import 'react-alice-carousel/lib/alice-carousel.css'
import Footer from '@/components/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'NBN Official',
    description: 'Model Polos itu Elegan.'
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en' data-theme=''>
            <body className={montserrat.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
