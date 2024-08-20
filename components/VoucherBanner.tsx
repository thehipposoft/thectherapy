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
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#fff"><path d="M3.75 12h16.5M13.5 5.25 20.25 12l-6.75 6.75"/></g></svg>
                </button>
            </div>
        </div>
    );
};

export default VoucherBanner;