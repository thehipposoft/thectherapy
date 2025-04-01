import React from 'react';
import BannerSlick from './BannerSlick';
import Image from 'next/image';
import Link from 'next/link';
const Banner = () => {
    return (
        <div  className='md:py-12 relative z-20 bg-[#FBFEFB]'>
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
        </div>
    );
};

export default Banner;