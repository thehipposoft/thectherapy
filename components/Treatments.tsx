import Image from 'next/image';
import React from 'react';

const Treatments = () => {
    return (
        <div className='h-[575px] relative flex items-center'>
            <Image src={'/assets/images/treatments/treatments-1.webp'} fill alt='Hands image' className='object-cover object-[center_35%]'/>
            <div className='bg-[#39373433] w-full h-full left-0 absolute' />
            <div className='flex flex-col gap-6 relative z-10 md:pl-28'>
                <div className='flex flex-col text-sm'>
                    <p className='text-[#FFFFFF]'>At the.c.therapy, we believe in a holistic approach</p>
                    <p className='text-[#FFFFFF]'>that goes beyond skin deep.</p>
                </div>
                <h2 className='text-4xl text-[#FFFFFF]'>Body, mind and soul</h2>
                <p className='text-[#FFFFFF] md:w-[580px]'>Learn more about our treatments. At the C therapy we will help you feel better inside and out. </p>
                <button className='flex justify-between items-center gap-6 border border-[#FFFFFF] w-fit px-5 py-4 '>
                    <p className='text-[#FFFFFF]'>Our body treatments</p>
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
                </button>
            </div>
        </div>
    );
};

export default Treatments;