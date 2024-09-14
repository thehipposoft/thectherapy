'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const MobileMenu = () => {

    const [isToggle, setToggleMenu] = useState(false);

    function toggleMenu() {
        setToggleMenu(!isToggle)
    }

    return (
        <div className='md:hidden fixed z-40 right-3 top-3'>
            <div
                onClick={toggleMenu} 
                className='relative w-[12vw] right-3 top-3 z-40 bg-[#ffffffe8] flex flex-col items-center gap-[5px] py-4'
            >
                <span className={`${isToggle ? ' rotate-45 -translate-y-1 translate-x-1' : ''} origin-left duration-500 w-[8vw] h-[3px] bg-nav rounded-xl`}/>
                <span className={`${isToggle ? 'opacity-0' : ''} duration-500 w-[8vw] h-[3px] bg-nav rounded-xl`}/>
                <span className={`${isToggle ? '-rotate-45 translate-y-1 translate-x-1' : ''} origin-left duration-500 w-[8vw] h-[3px] bg-nav rounded-xl`}/>
            </div>
            <ul className={`${isToggle ? 'w-[90vw] h-[75vh] top-0 right-0' : 'w-0 h-0 -top-[200%] right-[50%]'} absolute overflow-hidden p-8 flex flex-col justify-center gap-5 bg-[#ffffffe8] duration-700`}>
                <Link href={'/'} className='border-b p-2 text-2xl'>
                    Home
                </Link>
                <Link href={'/about'} className='border-b p-2 text-2xl'>
                    About
                </Link>
                <Link rel='noreferrer' target='_blank' href={'/'} className='border-b p-2 text-2xl'>
                    Products
                </Link>
                <Link href={'/facial'} className='border-b p-2 text-2xl'>
                    Facial
                </Link>
                <Link href={'/body'} className='border-b p-2 text-2xl'>
                    Body
                </Link>
                <Link href={'/contact'} className='border-b p-2 text-2xl'>
                    Contact
                </Link>

            </ul>
        </div>
    );
};

export default MobileMenu;