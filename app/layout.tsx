import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import 'react-alice-carousel/lib/alice-carousel.css'
import Favicon from '/public/images/logo.png'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'NBN Official',
    description: 'Model Polos itu Elegan.',
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
            <body className={montserrat.className}>
                <Navbar />
                {children}
            </body>
        </html>
    )
}
