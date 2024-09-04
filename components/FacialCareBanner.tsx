import React from 'react';
import Link from 'next/link';

const FacialCareBanner = () => {
    return (
        <div className='h-[500px] flex  items-center justify-center'>
            <div className='md:w-[1200px] w-[75vw] mx-auto flex flex-col gap-4'>
                <p>Start glowing.</p>
                <h2 className='text-3xl'>Supreme facial care</h2>
                <p className='md:w-[60%]'>Discover our services for total facial care. A customise skin plan treatment will be created by Carolina to meet your skin goals.</p>
                <Link href={'/about'} className='flex justify-between items-center gap-6 border border-[#CDCBC0] w-fit px-5 py-4 bg-[#ffffff2a]'>
                    <p>New at TCT? Start here!</p>
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#333"><path d="M3.75 12h16.5M13.5 5.25 20.25 12l-6.75 6.75"/></g></svg>
                </Link>
            </div>
        </div>
    );
};

export default FacialCareBanner;