import { NextPage } from 'next'
import Image from 'next/image'

interface Props {}

const NewProductHome: NextPage<Props> = ({}) => {
    return (
        <div className='max-container py-24'>
            <div className='title-section mb-14'>New Product</div>

            <div className='grid grid-cols-4 gap-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
                <div className='card-product'>
                    <div className='img-box'>
                        <Image
                            src='/images/product/1.jpeg'
                            height={300}
                            width={300}
                            alt=''
                            className='img-card'
                        />
                    </div>
                    <div className='title-card'>
                        Baju Atasan Wanita Terbaru Polo Crop Top Premium
                    </div>

                    <div className='flex items-baseline gap-1'>
                        <div className='price'>Rp54.000</div>
                        <div className='disc-price'>Rp90.000</div>
                    </div>

                    <div className='disc-badge'>40% OFF</div>
                </div>
                <div className='card-product'>
                    <div className='img-box'>
                        <Image
                            src='/images/product/1.jpeg'
                            height={300}
                            width={300}
                            alt=''
                            className='img-card'
                        />
                    </div>
                    <div className='title-card'>
                        Baju Atasan Wanita Terbaru Polo Crop Top Premium
                    </div>

                    <div className='flex items-baseline gap-1'>
                        <div className='price'>Rp54.000</div>
                        <div className='disc-price'>Rp90.000</div>
                    </div>

                    <div className='disc-badge'>40% OFF</div>
                </div>
                <div className='card-product'>
                    <div className='img-box'>
                        <Image
                            src='/images/product/1.jpeg'
                            height={300}
                            width={300}
                            alt=''
                            className='img-card'
                        />
                    </div>
                    <div className='title-card'>
                        Baju Atasan Wanita Terbaru Polo Crop Top Premium
                    </div>

                    <div className='flex items-baseline gap-1'>
                        <div className='price'>Rp54.000</div>
                        <div className='disc-price'>Rp90.000</div>
                    </div>

                    <div className='disc-badge'>40% OFF</div>
                </div>
                <div className='card-product'>
                    <div className='img-box'>
                        <Image
                            src='/images/product/1.jpeg'
                            height={300}
                            width={300}
                            alt=''
                            className='img-card'
                        />
                    </div>
                    <div className='title-card'>
                        Baju Atasan Wanita Terbaru Polo Crop Top Premium
                    </div>

                    <div className='flex items-baseline gap-1'>
                        <div className='price'>Rp54.000</div>
                        <div className='disc-price'>Rp90.000</div>
                    </div>

                    <div className='disc-badge'>40% OFF</div>
                </div>
            </div>

            <div className="btn-primary mx-auto mt-10">
                View All
            </div>
        </div>
    )
}

export default NewProductHome
