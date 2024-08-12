import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-nav h-[430px] flex flex-col justify-between'>
            <div className='flex w-[1300px] justify-between items-center mx-auto py-12'>
                <div className='w-[265px] h-[180px] relative'>
                    <Image src={'/logo-blanco-1.svg'} fill alt='C-therapy logo' />
                </div>
                <div className='flex gap-32'>
                    <ul className='flex flex-col gap-4'>
                        <li className='text-[#FFFFFF]'>About</li>
                        <li className='text-[#FFFFFF]'>Main Services</li>
                        <li className='text-[#FFFFFF]'>Journal</li>
                    </ul>
                    <ul className='flex flex-col gap-4'>
                        <li className='text-[#FFFFFF]'>Services</li>
                        <li className='text-[#FFFFFF]'>Facial</li>
                        <li className='text-[#FFFFFF]'>Body</li>
                    </ul>
                    <ul>
                        <li className='text-[#FFFFFF]'>TCT Store</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-[#FFFFFF]'>FOLLOW US</p>
                    <div className='flex gap-4'>
                        <Image src={'/assets/vectors/Instagram.svg'} alt='Instagram logo' width={30} height={30}/>
                        <Image src={'/assets/vectors/TikTok.svg'} alt='Instagram logo' width={30} height={30} />
                    </div>
                    <p className='text-[#FFFFFF]'>Contact</p>
                </div>
            </div>
            <div className='flex justify-center py-5'>
                <p className='text-[#FFFFFF]'>Created by <strong>HippoSoft</strong> | All Right Reserved</p>
            </div>
        </div>
    );
};

export default Footer;