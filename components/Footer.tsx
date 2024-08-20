import Image from 'next/image';
import Link from 'next/link';
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
                        <Link href={'/about'} className='text-[#FFFFFF]'>About</Link>
                        <Link href={'/services'} className='text-[#FFFFFF]'>Main Services</Link>
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
                        <Link href={'https://www.instagram.com/the.c.therapy/'}>
                            <Image src={'/assets/vectors/Instagram.svg'} alt='Instagram logo' width={30} height={30} className='object-contain'/>
                        </Link>
                        <Link href={'https://www.tiktok.com/@the.c.therapy'}>
                            <Image src={'/assets/vectors/TikTok.svg'} alt='TikTok logo' width={30} height={30} />
                        </Link>
                    </div>
                    <Link href={'/contact'} className='text-[#FFFFFF]'>Contact</Link>
                </div>
            </div>
            <div className='flex justify-center py-5'>
                <p className='text-[#FFFFFF]'>Created by <strong>HippoSoft</strong> | All Right Reserved</p>
            </div>
        </div>
    );
};

export default Footer;