import { NextPage } from 'next'
import Link from 'next/link'
import { Menu, Search } from 'react-feather'

interface Props {}

const Navbar: NextPage<Props> = ({}) => {
    return (
        <>
            <div className='bg-red-600 text-center py-2 text-sm font-semibold text-white'>
                Code "DISC5" for 5k off min. purchase 125k
            </div>
            <div className='bg-white sticky top-0 z-50'>
                <div className=' max-container flex items-center justify-between pt-3 pb-3'>
                    <div className='menu text-yellow-600 cursor-pointer opacity-0 max-sm:opacity-100'>
                        <Menu/>
                    </div>
                    <div className=''>
                        <img
                            src='/images/logo.png'
                            alt=''
                            className='w-[60px]'
                        />
                    </div>
                    <div className="search text-yellow-600 cursor-pointer">
                        <Search/>
                    </div>
                </div>
                <div className='bg-gray-50 py-3 flex items-center justify-center gap-5 max-sm:hidden'>
                    <Link href='/'>
                        <div className='nav-link group transition duration-300'>
                            Sweater
                            <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-yellow-600'></span>
                        </div>
                    </Link>
                    <Link href='/'>
                        <div className='nav-link group transition duration-300'>
                            Jaket
                            <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-yellow-600'></span>
                        </div>
                    </Link>
                    <Link href='/'>
                        <div className='nav-link group transition duration-300'>
                            Rajut
                            <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-yellow-600'></span>
                        </div>
                    </Link>
                    <Link href='/'>
                        <div className='nav-link group transition duration-300'>
                            Dress & One Set
                            <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-yellow-600'></span>
                        </div>
                    </Link>
                    <Link href='/'>
                        <div className='nav-link group transition duration-300'>
                            Faux Fur
                            <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-yellow-600'></span>
                        </div>
                    </Link>
                    <Link href='/'>
                        <div className='nav-link group transition duration-300 text-red-600'>
                            New Product
                            <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-yellow-600'></span>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
