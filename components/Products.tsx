import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Products = () => {
    return (
        <div className='pt-24 md:pb-32 pb-24'>
            <div className='lg:w-[90vw] md:w-[85vw] px-2 mx-auto flex flex-col '>
                <div className='info flex flex-col gap-4 w-[75vw] mx-auto md:mx-0 md:w-auto' id='products'>
                    <p className='text-sm'>We take care of your skin naturally</p>
                    <h2 className='text-4xl'>Supreme facial care</h2>
                    <p className='md:w-[640px]'>Discover our products for total facial care. This is our selection from the best organic and plant-based skincare products to the ethically conscious and sustainable skincare CSA philosophy to achieve Beautiful skin for life.</p>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-20 md:gap-0 grid-cols-1 pt-12'>
                    <div className='flex flex-col justify-center gap-4'>
                        <p className='flex justify-end text-sm pb-2 pr-8 md:pr-0'>OUR START PRODUCT</p>
                        <Image
                            src={'/assets/images/products/products-1.png'}
                            alt='C-Tetra serum'
                            width={100}
                            height={160}
                            className='object-contain m-auto h-auto w-auto'
                        />
                        <p className='font-bold text-center pt-6 arimo-bold'>C-Tetra Serum</p>
                        <p className='text-center'>Lipid Vitamin C Radience Serum</p>
                        <p className='text-center'>30 ml</p>
                    </div>
                    <div className='flex flex-col justify-center gap-4'>
                        <p className='flex justify-end text-sm pb-2 pr-8 md:pr-0'>FEATURED PRODUCT</p>
                        <Image
                            src={'/assets/images/products/products-2.png'}
                            alt='C-Tetra Cream'
                            width={220}
                            height={280}
                            className='object-contain m-auto h-auto w-auto'
                        />
                        <p className='font-bold text-center pt-6 arimo-bold'>C-Tetra Cream</p>
                        <p className='text-center'>Lipid Vitamin C Radience Cream</p>
                        <p className='text-center'>50 ml</p>
                    </div>
                    <div className='md:flex hidden flex-col justify-center gap-4 '>
                        <p className='flex justify-end text-sm pb-6'></p>
                        <Image
                            src={'/assets/images/products/products-3.png'}
                            alt='Crystal Retinal 1- Night Serum'
                            width={100}
                            height={175}
                            className='object-contain m-auto h-auto w-auto'
                        />
                        <p className='font-bold text-center pt-6 arimo-bold'>Crystal Retinal 1- Night Serum</p>
                        <p className='text-center'>Gentle Strength Vitamin A</p>
                        <p className='text-center'>30 ml</p>
                    </div>
                    <div className='md:flex hidden flex-col justify-center gap-4'>
                        <p className='flex justify-end text-sm pb-6'></p>
                        <Image
                            src={'/assets/images/products/products-4.png'}
                            alt='Pure C 15'
                            width={180}
                            height={280}
                            className='object-contain m-auto h-auto w-auto'
                        />
                        <p className='font-bold text-center pt-6 arimo-bold'>Pure C 15</p>
                        <p className='text-center'>Vitamin C with Ascorbic Acid</p>
                        <p className='text-center'>15 ml</p>
                    </div>
                </div>
                <div className='flex md:justify-end justify-center pt-10'>
                    <Link rel='noreferrer' target='_blank' className='py-4 lg:px-24 md:px-12 px-4 duration-500 text-[#FFFFFF] border bg-nav hover:underline hover:bg-[#ffffff] hover:text-[#333333] hover:border-nav' href={'https://store.thectherapy.com.au/'}>
                        See product in store
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Products;