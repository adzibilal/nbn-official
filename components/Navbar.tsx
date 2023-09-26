'use client'
import { navLinks } from '@/constants'
import { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, Moon, Search, Sun } from 'react-feather'

interface Props {}

const Navbar: NextPage<Props> = ({}) => {
    const [isMobileMenuVisible, setMobileMenuVisible] = useState(false)

    const toggleMobileMenu = () => {
        setMobileMenuVisible(!isMobileMenuVisible)
    }
    return (
        <>
            <div className='bg-red-600 text-center py-2 text-sm font-semibold text-white'>
                Code "DISC5" for 5k off min. purchase 125k
            </div>
            <div className='bg-white dark:bg-zinc-950 sticky top-0 z-50'>
                <div className='max-container flex items-center justify-between pt-3 pb-3'>
                    <div className='menu-bar text-yellow-600 cursor-pointer opacity-0 max-sm:opacity-100' onClick={toggleMobileMenu}>
                        <Menu />
                    </div>
                    <div className=''>
                        <img
                            src='/images/logo.png'
                            alt=''
                            className='w-[60px]'
                        />
                    </div>
                    <div className='flex gap-5'>
                        <div className='search text-yellow-600 cursor-pointer'>
                            <Search />
                        </div>
                        {/* <div
                            className='switcher text-yellow-600 cursor-pointer'
                            >
                                <Sun /> 
                            
                            <Moon />
                        </div> */}
                    </div>
                </div>
                <div className={`bg-gray-50 dark:bg-zinc-900 py-3 flex items-center justify-center gap-5 mobile-menu ${isMobileMenuVisible ? 'show' : ''}`}>
                    {navLinks.map(link => (
                        <Link key={link.text} href={link.href}>
                            <div
                                className={`nav-link group transition duration-300 ${
                                    link.text === 'New Product'
                                        ? 'text-red-600'
                                        : ''
                                }`}>
                                {link.text}
                                <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-yellow-600'></span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Navbar
