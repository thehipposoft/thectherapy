import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BannerSlick from './BannerSlick';

const Banner = () => {
    return (
/*         <div>
            <BannerSlick />
        </div> */
        <div className='md:py-12 relative z-20 bg-[#FBFEFB]'>
            <div className='md:hidden w-screen h-screen object-contain relative'>
                <Image src={'/assets/images/promotions/promojunio-mob.jpeg'} alt='' width={900} height={1600} className='md:hidden w-screen h-screen object-contain' />
                <div className='flex gap-1 absolute items-center bottom-[45%] right-16 2xl:bottom-44 2xl:right-40'>
                    <Link href={'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?allOffer=true&menu=true&offerItems=p%3A1591031'} target='_blank' className='text-[#FFFFFF] hover:text-[#333333] duration-500  underline py-2 '>Book Now</Link>
                    <p className='text-[#FFFFFF] py-2 text-lg'>|</p>
                    <Link href={'https://store.thectherapy.com.au/'} target='_blank' className='text-[#FFFFFF] hover:text-[#333333] duration-500 underline py-2 '>Shop Skin Care</Link>
                </div>
            </div>
            <div className='md:flex relative hidden w-screen items-end justify-center bg-[#6D6764] gap-20 h-[500px] 2xl:h-[650px]'>
                <Image src={'/assets/images/promotions/promojunio.jpeg'} alt='' width={1600} height={544} className='h-[500px] 2xl:h-[650px] 2xl:object-contain md:object-contain xl:object-fill' />
                <div className='flex absolute items-center bottom-8 md:bottom-8 xl:bottom-28 right-20 2xl:bottom-44 2xl:right-52'>
                    <Link href={'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?allOffer=true&menu=true&offerItems=p%3A1591031'} target='_blank' className='text-[#FFFFFF] hover:text-[#333333] duration-500 text-2xl underline py-2 px-6'>Book Now</Link>
                    <p className='text-[#FFFFFF] py-2 text-2xl'>|</p>
                    <Link href={'https://store.thectherapy.com.au/'} target='_blank' className='text-[#FFFFFF] hover:text-[#333333] duration-500 underline text-2xl py-2 px-6'>Shop Skin Care</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;

/*
                <div className='flex flex-col  gap-8 my-auto'>

                    <p className='font-bold text-[#FBFEFB]'>Offer on now. Conditions apply. Expires 30/04/2025</p>
                </div>
*/