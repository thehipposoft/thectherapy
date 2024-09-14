import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Products = () => {
    return (
        <div className='md:pt-24 pb-32'>
            <div className='md:w-[1300px] mx-auto flex flex-col '>
                <div className='info flex flex-col gap-4 w-[75vw] mx-auto md:mx-0 md:w-auto' id='products'>
                    <p className='text-sm'>We take care of your skin naturally</p>
                    <h2 className='text-4xl'>Supreme facial care</h2>
                    <p className='md:w-[640px]'>Discover our products for total facial care. This is our selection of the best all-natural skincare products, plant-based, ethically conscious skincare.</p>
                </div>
                <div className='grid md:grid-cols-4 grid-cols-1 pt-12'>
                    <div className='flex flex-col justify-center gap-4'>
                        <p className='flex justify-end text-sm pb-2 pr-8 md:pr-0'>OUR START PRODUCT</p>
                        <div className='relative w-[280px] h-[280px] mx-auto'>
                            <Image src={'/assets/images/products/products-1.png'} alt='C-Tetra serum' fill className='object-contain' />
                        </div>
                        <p className='font-bold text-center pt-6 arimo-bold'>C-Tetra Serum</p>
                        <p className='text-center'>Lipid Vitamin C Radience Serum</p>
                        <p className='text-center'>30 ml</p>
                    </div>
                    <div className='flex flex-col justify-center gap-4'>
                        <p className='flex justify-end text-sm pb-2 pr-8 md:pr-0'>FEATURED PRODUCT</p>
                        <div className='relative w-[220px] h-[280px] mx-auto'>
                            <Image src={'/assets/images/products/products-2.png'} alt='C-Tetra Cream' fill className='object-contain' />
                        </div>
                        <p className='font-bold text-center pt-6 arimo-bold'>C-Tetra Cream</p>
                        <p className='text-center'>Lipid Vitamin C Radience Cream</p>
                        <p className='text-center'>50 ml</p>
                    </div>
                    <div className='md:flex hidden flex-col justify-center gap-4 '>
                        <p className='flex justify-end text-sm pb-6'></p>
                        <div className='relative w-[280px] h-[280px] mx-auto'>
                            <Image src={'/assets/images/products/products-3.png'} alt='Crystal Retinal 1- Night Serum' fill className='object-contain' />
                        </div>
                        <p className='font-bold text-center pt-6 arimo-bold'>Crystal Retinal 1- Night Serum</p>
                        <p className='text-center'>Gentle Strength Vitamin A</p>
                        <p className='text-center'>30 ml</p>
                    </div>
                    <div className='md:flex hidden flex-col justify-center gap-4'>
                        <p className='flex justify-end text-sm pb-6'></p>
                        <div className='relative w-[280px] h-[280px] mx-auto'>
                            <Image src={'/assets/images/products/products-4.png'} alt='Pure C 15' fill className='object-contain' />
                        </div>
                        <p className='font-bold text-center pt-6 arimo-bold'>Pure C 15</p>
                        <p className='text-center'>Vitamin C with Ascorbic Acid</p>
                        <p className='text-center'>15 ml</p>
                    </div>
                </div>
                <div className='flex md:justify-end justify-center pt-10'>
                    <Link rel='noreferrer' target='_blank' className='py-4 px-24 text-[#FFFFFF] bg-nav underline' href={'https://www.fresha.com/es/store/the-c-therapy-store-yhbo595r'}>
                        See product in store
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Products;