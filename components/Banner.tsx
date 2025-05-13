import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Banner = () => {
    return (
        <div>
            {/* <BannerSlick /> */}
            <div className='relative hidden md:flex w-screen h-[600px] bg-[#D0A287] bg-opacity-70 justify-center items-end'>
                <Image src={'/assets/images/promotions/promoBanner.jpeg'} fill alt='' className='object-contain' />
                <div className='relative z-30 flex justify-between lg:w-[42%] w-1/2 lg:mb-[7%] mb-[12%]'>
                    <Link href={'https://www.fresha.com/book-now/the-c-therapy-macid731/services?lid=507601&eid=1482022&share&pId=474146'} target='_blank' className='text-[#FFFFFF] border-white border border-[#FFFFFF] rounded-2xl px-4 py-1 text-xl duration-300 hover:text-[#000000] hover:border-[#000000] font-bold'>Book Now</Link>
                    <Link href={'https://store.thectherapy.com.au/shop/'} target='_blank' className='text-[#FFFFFF] border-white border border-[#FFFFFF] rounded-2xl px-4 py-1 text-xl duration-300 hover:text-[#000000] hover:border-[#000000] font-bold'>Shop Now</Link>
                </div>
            </div>
            <div className='relative md:hidden flex w-screen h-[700px] bg-[#D0A287] bg-opacity-70 justify-center items-end'>
                <Image src={'/assets/images/promotions/promoBanner2.jpeg'} alt='' fill className='md:hidden' />
                <div className='relative z-30 flex justify-between w-[75%] mb-[20%]'>
                    <Link href={'https://www.fresha.com/book-now/the-c-therapy-macid731/services?lid=507601&eid=1482022&share&pId=474146'} target='_blank' className='text-[#FFFFFF] border-white border border-[#FFFFFF] rounded-2xl px-4 py-1 text-lg duration-300 hover:text-[#000000] hover:border-[#000000] font-bold'>Book Now</Link>
                    <Link href={'https://store.thectherapy.com.au/shop/'} target='_blank' className='text-[#FFFFFF] border-white border border-[#FFFFFF] rounded-2xl px-4 py-1 text-lg duration-300 hover:text-[#000000] hover:border-[#000000] font-bold'>Shop Now</Link>
                </div>
            </div>
        </div>
/*         <div className='md:py-12 relative z-20 bg-[#FBFEFB]'>
            <Image src={'/assets/images/banner/banner-mobile.jpeg'} alt='' width={2245} height={3179} className='hidden w-screen h-screen object-contain' />
            <div className='md:flex hidden w-screen items-end justify-center bg-[#6D6764] h-[500px] gap-20'>
                <div className='flex flex-col  gap-8 my-auto'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-[#FBFEFB] text-5xl tracking-tight'>Look the way you feel with</h2>
                        <h2 className='text-[#FBFEFB] text-5xl tracking-tight'>THE FACIAL BLOOM</h2>
                        <h2 className='text-[#FBFEFB] text-5xl tracking-tight'>Skin Needling!</h2>
                    </div>
                    <div className='flex gap-4'>
                        <Link href={'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?allOffer=true&menu=true&offerItems=p%3A1591031'} target='_blank' className='text-[#333333] border-[#FBFEFB] bg-[#FBFEFB] rounded-full border w-fit py-2 px-6 hover:bg-[#ffffff00] duration-300 hover:text-[#FBFEFB]'>ACCESS OUR SPECIAL OFFER</Link>
                        <Link href={'/promotions'} className='text-[#333333] border-[#FBFEFB] bg-[#FBFEFB] rounded-full border w-fit py-2 px-6 hover:bg-[#ffffff00] duration-300 hover:text-[#FBFEFB]'>LEARN MORE</Link>
                    </div>
                    <p className='font-bold text-[#FBFEFB]'>Offer on now. Conditions apply. Expires 30/04/2025</p>
                </div>
                <Image src={'/assets/images/banner/cara.png'} alt='' width={731} height={680} className='h-[400px] w-[450px] object-cover' />
            </div>
        </div> */
    );
};

export default Banner;