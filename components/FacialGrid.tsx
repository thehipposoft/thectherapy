import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FacialGrid = () => {
    return (
        <div className='grid grid-cols-2 grid-rows-2'>
            <div className=' h-[600px] relative flex justify-center items-center group'>
                <div className='bg-[#39373473] absolute top-0 left-0 w-full h-full z-10 group-hover:bg-[#ffffffb5] duration-700 delay-100' />
                <Image src={'/assets/images/facials/facials-1.webp'} fill alt='a' />
                <div className='flex flex-col gap-6 relative z-10 w-[450px] '>
                    <h2 className='text-4xl text-[#FFFFFF] group-hover:text-nav duration-300'>SKIN BALANCE</h2>
                    <p className='text-[#FFFFFF] text-sm leading-6 group-hover:text-nav duration-300'>This are a range of Organic Facials with bare roots Australia skincare. From express, simply to the most luxury bespoke facial experience to choose. </p>
                    <Link href={'/facial/skin-balance'} className='flex justify-between items-center gap-20 border border-[#FFFFFF] duration-300 group-hover:text-nav group-hover:border-nav w-fit px-5 py-4 '>
                        <p className='text-[#FFFFFF] duration-300 group-hover:text-nav'>Discover</p>
                        <svg className='w-6 h-6 stroke-[#FFFFFF] group-hover:stroke-nav duration-300' fill='none' xmlns="http://www.w3.org/2000/svg"><g className=''><path d="M3.75 12h16.5M13.5 5.25 20.25 12l-6.75 6.75"/></g></svg>
                    </Link>
                </div>
            </div>
            <div className=' h-[600px] relative flex justify-center items-center group'>
                <div className='bg-[#39373473] absolute top-0 left-0 w-full h-full z-10 group-hover:bg-[#ffffffb5] duration-700 delay-100' />
                <Image src={'/assets/images/facials/facials-2.webp'} fill alt='a' />
                <div className='flex flex-col gap-6 relative z-10 w-[450px] '>
                    <h2 className='text-4xl text-[#FFFFFF] group-hover:text-nav duration-300'>SKIN HYDRATION</h2>
                    <p className='text-[#FFFFFF] text-sm leading-6 group-hover:text-nav duration-300'>A range of facial treatments to meet your skin's needs, from anti-aging and hydration-boosting LED light therapy, skin detoxifying facial, relaxing facial massages to our Go-to facial treatment for a deep cleansing anti-blemishes, hydrating & sooting one. </p>
                    <Link href={'/facial/skin-balance'} className='flex justify-between items-center gap-20 border border-[#FFFFFF] duration-300 group-hover:text-nav group-hover:border-nav w-fit px-5 py-4 '>
                        <p className='text-[#FFFFFF] duration-300 group-hover:text-nav'>Discover</p>
                        <svg className='w-6 h-6 stroke-[#FFFFFF] group-hover:stroke-nav duration-300' fill='none' xmlns="http://www.w3.org/2000/svg"><g className=''><path d="M3.75 12h16.5M13.5 5.25 20.25 12l-6.75 6.75"/></g></svg>
                    </Link>
                </div>
            </div>
            <div className='h-[600px] relative flex justify-center items-center group'>
                <div className='bg-[#39373473] absolute top-0 left-0 w-full h-full z-10 group-hover:bg-[#ffffffb5] duration-700 delay-100' />
                <Image src={'/assets/images/facials/facials-3.webp'} fill alt='a' />
                <div className='flex flex-col gap-6 relative z-10 w-[450px] '>
                    <h2 className='text-4xl text-[#FFFFFF] group-hover:text-nav duration-300'>SKIN RENEWAL</h2>
                    <p className='text-[#FFFFFF] text-sm leading-6 group-hover:text-nav duration-300'>Find a range of mechanical and chemical peels such as Dermaplaning and a range of chemical peels from the brand Medik8, perfect for renewing your skin and keeping it glowy and youthful. </p>
                    <Link href={'/facial/skin-balance'} className='flex justify-between items-center gap-20 border border-[#FFFFFF] duration-300 group-hover:text-nav group-hover:border-nav w-fit px-5 py-4 '>
                        <p className='text-[#FFFFFF] duration-300 group-hover:text-nav'>Discover</p>
                        <svg className='w-6 h-6 stroke-[#FFFFFF] group-hover:stroke-nav duration-300' fill='none' xmlns="http://www.w3.org/2000/svg"><g className=''><path d="M3.75 12h16.5M13.5 5.25 20.25 12l-6.75 6.75"/></g></svg>
                    </Link>
                </div>
            </div>
            <div className='h-[600px] relative flex justify-center items-center group'>
                <div className='bg-[#39373473] absolute top-0 left-0 w-full h-full z-10 group-hover:bg-[#ffffffb5] duration-700 delay-100' />
                <Image src={'/assets/images/facials/facials-4.webp'} fill alt='a' />
                <div className='flex flex-col gap-6 relative z-10 w-[450px] '>
                    <h2 className='text-4xl text-[#FFFFFF] group-hover:text-nav duration-300'>SKIN AGELESS</h2>
                    <p className='text-[#FFFFFF] text-sm leading-6 group-hover:text-nav duration-300'>Stop the time and take your skin another level of glow and plumpness by stimulating & boosting  your own collagen production in a natural way & your skin will waken up & glow up like never before with this facials.</p>
                    <Link href={'/facial/skin-balance'} className='flex justify-between items-center gap-20 border border-[#FFFFFF] duration-300 group-hover:text-nav group-hover:border-nav w-fit px-5 py-4 '>
                        <p className='text-[#FFFFFF] duration-300 group-hover:text-nav'>Discover</p>
                        <svg className='w-6 h-6 stroke-[#FFFFFF] group-hover:stroke-nav duration-300' fill='none' xmlns="http://www.w3.org/2000/svg"><g className=''><path d="M3.75 12h16.5M13.5 5.25 20.25 12l-6.75 6.75"/></g></svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FacialGrid;