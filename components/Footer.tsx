import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-nav md:h-[400px] flex flex-col justify-between'>
            <div className='flex md:flex-row flex-col lg:w-[90vw] justify-between items-center mx-auto py-12 gap-8 sm:gap-8 lg:gap-0'>
                <div className='w-[265px] h-[180px] relative'>
                    <Image src={'/logo-blanco-1.svg'} fill alt='C-therapy logo' />
                </div>
                <div className='flex justify-between lg:gap-32 md:gap-24 gap-20 mx-auto md:mx-0 sm:w-[85vw] md:w-auto'>
                    <ul className='flex flex-col gap-4'>
                        <Link href={'/about'} className='text-[#FFFFFF] text-sm hover:underline'>About</Link>
                        <Link href={'/services'} className='text-[#FFFFFF] text-sm hidden'>Main Services</Link>
                        <li className='text-[#FFFFFF] text-sm hidden'>Journal</li>
                    </ul>
                    <ul className='flex flex-col gap-4'>
                        <Link href={'/facial'} className='text-[#FFFFFF] text-sm hover:underline'>Facials</Link>
                        <Link href={'/body/treatments'} className='text-[#FFFFFF] text-sm hover:underline'>Body Treatments</Link>
                        <Link href={'/body/relax'} className='text-[#FFFFFF] text-sm hover:underline'>Skin & Body Relax</Link>
                    </ul>
                    <ul>
                        <Link href={'https://store.thectherapy.com.au/'} target='_blank' className='text-[#FFFFFF] text-sm hover:underline'>TCT Store</Link>
                    </ul>
                </div>
                <div className='flex md:flex-col flex-row gap-4 w-[85vw] justify-between md:justify-start mx-auto md:w-auto md:mx-0'>
                    <p className='text-[#FFFFFF]'>FOLLOW US</p>
                    <div className='flex gap-8 md:gap-4'>
                        <Link rel='noreferrer' target='_blank' href={'https://www.instagram.com/the.c.therapy/'}>
                            <Image src={'/assets/vectors/Instagram.svg'} alt='Instagram logo' width={30} height={30} className='object-contain'/>
                        </Link>
                        <Link rel='noreferrer' target='_blank'  href={'https://www.tiktok.com/@the.c.therapy'}>
                            <Image src={'/assets/vectors/TikTok.svg'} alt='TikTok logo' width={30} height={30} />
                        </Link>
                    </div>
                    <Link href={'/contact'} className='text-[#FFFFFF] text-sm'>Contact</Link>
                </div>
            </div>
            <div className='flex justify-center py-5'>
                <Link href={'https://www.thehipposoft.com/'} target='_blank' rel='noreferrer' className='text-[#FFFFFF] hover:underline'>Created by <strong>HippoSoft</strong> | All Right Reserved</Link>
            </div>
        </div>
    );
};

export default Footer;