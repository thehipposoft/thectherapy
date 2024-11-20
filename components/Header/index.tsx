import Image from 'next/image';
import React from 'react';
import Nav from './Nav';
import Link from 'next/link';

const Header = () => {
    return (
        <div  className='w-screen max-w-[100vw] lg:flex hidden bg-[#FBFEFB] py-1 relative'>
            <div className='lg:w-[90vw] md:flex mx-auto gap-6 items-center justify-between'>
                <Nav />
                <Link href={'/'} className='flex items-center gap-2 absolute left-0 right-0 mx-auto w-fit'>
                    <Image
                        src={'/logo-white.png'}
                        alt='C-Therapy logo white'
                        width={80} height={80}
                        quality={100}
                        className='object-contain rounded-full'
                    />
                    <h2 className='font-thin text-2xl text-nav'>the.c.therapy</h2>
                </Link>
                <div className='flex justify-between items-center gap-6'>
                    <Link href={'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/all-offer?menu=true'} target='_blank' className='hover:bg-nav hover:border-nav border md:text-sm md:text-center lg:text-base md:px-2 lg:px-5 py-3 duration-500 bg-[#FFFFFF] hover:text-[#FFFFFF] border-[#000000] text-[#000000]'>
                        BOOK NOW
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;