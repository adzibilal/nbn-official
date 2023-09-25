import {
    footerCopyrightLinks,
    footerData,
    footerSocialLinks
} from '@/constants'
import { NextPage } from 'next'
import Link from 'next/link'
import { Instagram } from 'react-feather'

interface Props {}

const Footer: NextPage<Props> = ({}) => {
    return (
        <div className='border-t border-gray-300'>
            <div className='max-container grid grid-cols-[3fr_2fr_2fr] gap-5 py-5 max-md:grid-cols-1'>
                <div className=''>
                    <img
                        src={footerData.logoSrc}
                        alt=''
                        className='w-[100px]'
                    />
                    <p className='text-gray-500 mt-3 italic text-sm'>
                        {footerData.tagline}
                    </p>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='title-footer'>SUPPORT</div>
                    {footerData.supportLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className='link-footer'>
                            {link.text}
                        </Link>
                    ))}
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='title-footer'>ONLINE OPERATIONAL</div>
                    {footerData.onlineOperationLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className='link-footer'>
                            {link.text}
                        </Link>
                    ))}
                </div>
            </div>
            <div className='border-t border-gray-300'>
                <div className='max-container flex justify-between items-center py-3 max-md:flex-col gap-3 max-sm:items-start'>
                    <div className='flex gap-3 items-center text-xs font-semibold text-gray-400 max-sm:flex-col max-sm:items-start'>
                        © 2023, NBN Official
                        {footerCopyrightLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className='hover:underline'>
                                {link.text}
                            </Link>
                        ))}
                    </div>

                    <div className='flex gap-3 items-center'>
                        {footerSocialLinks.map((link, index) => (
                            <Link key={index} target='_blank' href={link.href}>
                                <div className='social-item'>
                                    <img src={link.imageSrc} alt='' />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
