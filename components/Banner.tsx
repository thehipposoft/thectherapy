'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BACKGROUNDS = [
    '/assets/images/banner/banner-1.webp',
    '/assets/images/banner/banner-2.webp',
    '/assets/images/banner/banner-3.webp',
]

const Banner = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    function changeBackground() {
        if (currentIndex === BACKGROUNDS.length - 1) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }


    return (
        <div className='h-[95vh] relative'>
            {
                BACKGROUNDS.map((val, index) => (
                    <Image 
                        src={val} 
                        alt='' 
                        key={index} 
                        fill 
                        objectFit='cover'
                        className={`opacity-0 duration-[2000ms] ${index === currentIndex ? 'opacity-100' : ''}`}
                    />
                ))
            }
            <div className='absolute w-full h-full left-0 top-0 bg-[#6e64603a]' />
            <div className='max-w-[1300px] mx-auto relative z-10 flex h-full items-center'>
                <div className='flex flex-col justify-center gap-6  md:w-[395px]'>
                    <p className='text-sm text-[#FFFFFF]'>Let's uncover the radiant, confident you that's been waiting to shine.</p>
                    <h3 className='text-4xl text-[#FFFFFF]'>Empower your natural beauty</h3>
                    <p className='text-[#FFFFFF]'>A combination of nature and advanced technology. The c therapy will guide you on your journey to the best version of yourself.</p>
                    <Link href={'/services'} className='flex justify-between items-center gap-6 border border-[#FFFFFF] w-fit px-5 py-4 bg-[#ffffff2a]'>
                        <p className='text-[#FFFFFF]'>Discover More</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_354_234)">
                                <path d="M3.75 12H20.25" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_354_234">
                            <rect width="24" height="24" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Banner;