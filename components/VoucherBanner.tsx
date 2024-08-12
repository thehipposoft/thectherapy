import Image from 'next/image';
import React from 'react';

const VoucherBanner = () => {
    return (
        <div className='h-[369px] w-screen relative flex justify-center items-center'>
            <Image src={'/assets/images/voucherBanner.png'} alt='Leaf image' fill />
            <div className='bg-[#DBD3C9] absolute left-0 w-full h-full opacity-40' />
            <div className='flex flex-col relative z-10 gap-6'>
                <h2 className='text-3xl text-[#333333b9]'>Where skin glows, energy flows</h2>
                <button className='flex justify-between items-center gap-10 border border-[#FFFFFF] w-fit px-8 py-4 mx-auto'>
                    <p className='text-[#FFFFFF] text-sm'>GET MY FIRST VISIT VOUCHER</p>
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

export default VoucherBanner;