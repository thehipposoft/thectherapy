'use client'
import React from 'react';
import BannerSlick from './BannerSlick';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Banner = () => {

    useGSAP(() => {
        gsap.from('.container-b', {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out',
            delay: 0.3
        })
    }, []);

    return (
        <div>
            <BannerSlick />
        </div>
/*         <div>
            <div className='container-b hidden md:block relative w-screen h-[600px] 2xl:h-[700px]'>
                <Image src={'/assets/images/banner/hallowen.jpg'} alt='Banner Halloween promotion' fill className='object-cover' />
                <Link style={{color: 'white'}} href={'/promotions'} className='bg-[#352d27] hover:scale-105 hover:underline duration-500 px-4 rounded-lg arimo-bold py-2 bottom-6 left-16 absolute z-10 uppercase w-52 text-center text-xl'>
                    book now
                </Link>
            </div>
            <div className='container-b md:hidden relative w-screen h-screen'>
                <Image src={'/assets/images/banner/hallowenmobile.jpg'} alt='Banner Halloween promotion' fill className='object-contain' />
                <Link 
                    style={{color: 'white'}} 
                    href={'/promotions'} 
                    className='bg-[#352d27] hover:scale-105 hover:underline duration-500 px-4 rounded-lg arimo-bold py-2 bottom-1/3 left-6 absolute z-10 uppercase w-52 text-center text-xl'>
                    book now
                </Link>
            </div>
        </div> */
/*         <div className='container w-screen'>
            <div className='relative hidden xl:block w-screen'>
                <Image src={'/assets/images/promotions/banner-sep.webp'} className='w-screen pt-12' alt='' width={2000} height={680}  /> 
                <Link href={'https://www.fresha.com/book-now/the-c-therapy-macid731/services?lid=507601&eid=1482022&oiid=p%3A1669320&share=true&pId=474146'} target='_blank'className="absolute md:gap-4 gap-2 bg-[#E1DED6] xl:bottom-[27%] 2xl:left-[22%] md:left-[20%]
                arimo-bold md:tracking-widest shadow-lg flex md:px-12 px-8 py-3 rounded-3xl text-[#333333] hover:scale-105 duration-500 hover:underline">
                    <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3.5V2M5.06066 5.06066 4 4m1.06066 9L4 14.0607m9-9.00004L14.0607 4M3.5 9H2m6.5-.5 4.1111 12.7778L15.5 18.3889 19.1111 22 22 19.1111 18.3889 15.5l2.8889-2.8889L8.5 8.5Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    BOOK HERE
                </Link>
            </div>
            <div className='relative xl:hidden block'>
                <Image src={'/assets/images/promotions/banner-sep-mob.webp'} className='w-screen pt-12' alt='' width={1067} height={1920}  /> 
                <Link href={'https://www.fresha.com/book-now/the-c-therapy-macid731/services?lid=507601&eid=1482022&oiid=p%3A1669320&share=true&pId=474146'} target='_blank'className="absolute md:gap-4 gap-2 bg-[#E1DED6] bottom-[42%] md:bottom-[45%] md:right-24 right-12
                arimo-bold md:tracking-widest shadow-lg flex md:px-12 px-6 py-2 rounded-3xl text-[#333333] hover:scale-105 duration-500 hover:underline">
                    <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3.5V2M5.06066 5.06066 4 4m1.06066 9L4 14.0607m9-9.00004L14.0607 4M3.5 9H2m6.5-.5 4.1111 12.7778L15.5 18.3889 19.1111 22 22 19.1111 18.3889 15.5l2.8889-2.8889L8.5 8.5Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    BOOK HERE
                </Link>
            </div>
        </div> */

        
/*         <div className='md:py-12 relative z-20 bg-[#FBFEFB]'>
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
        </div> */
    );
};

export default Banner;
