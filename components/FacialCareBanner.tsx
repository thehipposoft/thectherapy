import React from 'react';
import Link from 'next/link';

const FacialCareBanner = () => {
    return (
        <div className='h-[500px] flex  items-center justify-center'>
            <div className='w-[1200px] mx-auto flex flex-col gap-4'>
                <p>Start glowing.</p>
                <h2 className='text-3xl'>Supreme facial care</h2>
                <p className='w-[60%]'>Discover our services for total facial care. A customise skin plan treatment will be created by Carolina to meet your skin goals.</p>
                <Link href={'/about'} className='flex justify-between items-center gap-6 border border-[#CDCBC0] w-fit px-5 py-4 bg-[#ffffff2a]'>
                    <p>New at TCT? Start here!</p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_354_234)">
                            <path d="M3.75 12H20.25" stroke="#333333" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="#333333" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_354_234">
                        <rect width="24" height="24" fill="#333333"/>
                        </clipPath>
                        </defs>
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default FacialCareBanner;