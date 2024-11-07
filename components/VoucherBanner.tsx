import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const VoucherBanner = () => {
    return (
        <div className='h-[369px] 2xl:h-[450px] w-full relative flex justify-center items-center'>
            <Image src={'/assets/images/voucherBanner.png'} alt='Leaf image' fill />
            <div className='bg-[#DBD3C9] absolute left-0 w-full h-full opacity-60' />
            <div className='flex flex-col relative z-10 gap-6'>
                <h2 className='text-3xl text-[#333333b9] md:w-auto w-3/4 mx-auto md:mx-0 text-center md:text-left'>Where skin glows, energy flows</h2>
                <Link target='_blank' href={'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/all-offer?menu=true'} className='group duration-700 hover:border-[#333333] flex justify-between items-center gap-10 border border-[#FFFFFF] w-fit px-8 py-4 mx-auto'>
                    <p className=' duration-700 group-hover:text-[#333333] group-hover:underline text-[#FFFFFF] text-sm'>BOOK YOUR FACIAL NOW!</p>
                    <svg className='overflow-visible' width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#fff" className='group-hover:stroke-[#333333] group-hover:translate-x-2 duration-700'><path d="M3.75 12h16.5M13.5 5.25 20.25 12l-6.75 6.75"/></g></svg>
                </Link>
            </div>
        </div>
    );
};

export default VoucherBanner;