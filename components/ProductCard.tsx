import Image from 'next/image'

interface ProductCardProps {
    imageUrl: string
    title: string
    price: string
    discountPrice?: string // Membuat discountPrice menjadi opsional
    discount?: string // Membuat discount menjadi opsional
}

const ProductCard: React.FC<ProductCardProps> = ({
    imageUrl,
    title,
    price,
    discountPrice,
    discount
}) => {
    return (
        <div className='card-product'>
            <div className='img-box'>
                <Image
                    src={imageUrl}
                    height={300}
                    width={300}
                    alt=''
                    className='img-card'
                />
            </div>
            <div className='title-card'>{title}</div>

            <div className='flex items-baseline gap-1'>
                <div className='price'>{price}</div>
                {discountPrice &&
                    discount && (
                        <>
                            <div className='disc-price'>{discountPrice}</div>
                            <div className='disc-badge'>{discount}</div>
                        </>
                    )}
            </div>
        </div>
    )
}

export default ProductCard
