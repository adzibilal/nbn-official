import { NextPage } from 'next'
import Image from 'next/image'

interface Props {}

const BannerCta: NextPage<Props> = ({}) => {
  return <Image src="/images/banner-cta.jpg" width={1200} height={1000} alt="" className='w-full aspect-[21/9] object-cover' />
}

export default BannerCta