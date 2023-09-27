import Tiptap from "@/components/Tiptap";

export default function Page({ params }: { params: { idProduct: string } }) {
    return (
        <div className='max-container min-h-screen grid grid-cols-[1.5fr_2fr] max-md:grid-cols-1 py-10 gap-5'>
            <div className='img-product'>
                <div className='carousel w-full'>
                    <div id='item1' className='carousel-item w-full'>
                        <img
                            src='/images/product/premium/1.jpeg'
                            className='w-full'
                        />
                    </div>
                    <div id='item2' className='carousel-item w-full'>
                        <img
                            src='/images/product/premium/2.jpeg'
                            className='w-full'
                        />
                    </div>
                    <div id='item3' className='carousel-item w-full'>
                        <img
                            src='/images/product/premium/3.jpeg'
                            className='w-full'
                        />
                    </div>
                    <div id='item4' className='carousel-item w-full'>
                        <img
                            src='/images/product/premium/4.jpeg'
                            className='w-full'
                        />
                    </div>
                </div>
                <div className='flex justify-center w-full py-2 gap-2'>
                    <a href='#item1' className=''>
                        <img
                            src='/images/product/premium/1.jpeg'
                            className='w-[90px] h-[90px] object-cover'
                        />
                    </a>
                    <a href='#item2' className=''>
                        <img
                            src='/images/product/premium/2.jpeg'
                            className='w-[90px] h-[90px] object-cover'
                        />
                    </a>
                    <a href='#item3' className=''>
                        <img
                            src='/images/product/premium/3.jpeg'
                            className='w-[90px] h-[90px] object-cover'
                        />
                    </a>
                    <a href='#item4' className=''>
                        <img
                            src='/images/product/premium/4.jpeg'
                            className='w-[90px] h-[90px] object-cover'
                        />
                    </a>
                </div>
            </div>

            <div className='desc-product'>
                <div className='badge-discount'>47% OFF</div>
                <h1 className="title-detail">Premium Jaket Crop Furry Faux Fur / Jaket bulu wanita</h1>
                <div className='flex gap-3 items-baseline mb-4'>
                    <div className='price text-yellow-600 text-3xl font-semibold'>Rp80.000</div>
                    <div className='dicount line-through'>Rp150.000</div>
                </div>

                <div className='btn-container grid grid-cols-2 w-full gap-3 max-sm:grid-cols-1'>
                    <div className='btn btn-shopee bg-orange-500 text-white border-none hover:bg-orange-600'>Beli di Shoppe</div>
                    <div className='btn btn-wa bg-green-600 text-white border-none hover:bg-green-700'>Beli di WhatsApp</div>
                </div>

                <div className='my-3'>
                    <div className="text-zinc-950 mb-2">Warna :</div>
                    <ul className="list-variation">
                        <li>Cream</li>
                        <li>Light Gray</li>
                        <li>Lilac</li>
                        <li>Tosca</li>
                        <li>Hoodie Kuping</li>
                        <li>Mocca Burgundy</li>
                        <li>Broken White</li>
                        <li>Black</li>
                        <li>New Cream</li>
                        <li>Navy</li>
                        <li>Lilac Muda</li>
                        <li>Pink Guava</li>
                        <li>New Pink Guava</li>
                        <li>Sage Premium</li>
                        <li>New Broken White</li>
                        <li>Maroon Premium</li>
                    </ul>
                </div>

                <div className=''>
                    PREMIUIM JAKET BULU / JAKET SHERPA / JAKET KOHER / FAUX FUR
                    Kualitas Bahan 99% Nyaman digunakan !!! Furry Jacket /
                    Jacket Crop Korea Bahan : Faux Fur / Bulu Tebal Kancing :
                    Snap / Baseball Ukuran : All Size LD -/+ 115cm Panjang -/+
                    50cm (Cutting Oversized & Cropped) Detail lapisan produk:
                    Lapisan Taslan : untuk warna tosca, lilac, wine dan pink
                    lavender (Karakter bulu lembut / sherpa) Lapisan Pollar :
                    untuk warna pink guava, White, cream, maroon Premium, Sage
                    Premium dan light gray (Karakter bulu sedikit keras / bulu
                    domba) Lapisan Hyget Super: untuk warna black, mocca
                    burgundy, new cream, navy, Lilac muda, New BW & New Pink
                    Guava. (Karakter bulu halus / sherpa)
                    ———————————————————————— Note: - Warna Tidak Akan 100% Sama
                    Dengan Foto Karena Faktor Cahaya dan Saturasi Layar HP. -
                    Tekstur Bulu Setiap Warna Berbeda-beda (Sesuai Tekstur di
                    Foto) - Untuk Pencucian Pertama Kali akan ada Bulu yang
                    Rontok, Tetapi Tidak Mempengaruhi Tekstur Bulu. Karena yang
                    Rontok Adalah Bulu Residu (Bulu Sisa). Dan Biasanya Pada
                    Pencucian Kedua Bulu Tidak Akan Rontok lagi. #jakethornet
                    #jaketbulu #jaketcrop #jaketpremium #jaketsherpa
                </div>

            </div>
        </div>
    )
}
