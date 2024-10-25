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
                className='relative w-[12vw] border border-[#87807040] rounded-md right-3 top-3 z-40 bg-[#fffffff3] flex flex-col items-center gap-[5px] py-4'
            >
                <span className={`${isToggle ? ' rotate-45 -translate-y-1 translate-x-1' : ''} origin-left duration-500 w-[8vw] h-[3px] bg-nav rounded-xl`}/>
                <span className={`${isToggle ? 'opacity-0' : ''} duration-500 w-[8vw] h-[3px] bg-nav rounded-xl`}/>
                <span className={`${isToggle ? '-rotate-45 translate-y-1 translate-x-1' : ''} origin-left duration-500 w-[8vw] h-[3px] bg-nav rounded-xl`}/>
            </div>
            <ul className={`${isToggle ? 'w-[90vw] h-[85vh] top-0 right-0' : 'w-0 h-0 -top-[200%] right-[50%]'} absolute overflow-hidden p-8 flex flex-col justify-center items-center gap-10 bg-[#ffffffe8] duration-700`}>
                <Link href={'/'} className='border-b p-2 text-2xl' onMouseUp={toggleMenu} >
                    Home
                </Link>
                <Link href={'/about'} className='border-b p-2 text-2xl' onMouseUp={toggleMenu}>
                    About
                </Link>
                <Link href={'/facial'} className='border-b p-2 text-2xl' onMouseUp={toggleMenu}>
                    Facial
                </Link>
                <Link href={'/skin-consultation'} className='border-b p-2 text-2xl' onMouseUp={toggleMenu}>
                    Skin Consultation
                </Link>
                <Link href={'/body/treatments'} className='border-b p-2 text-2xl' onMouseUp={toggleMenu}>
                    Body Treaments
                </Link>
                <Link href={'/body/relax'} className='border-b p-2 text-2xl' onMouseUp={toggleMenu}>
                    Skin & Body Relax
                </Link>
                <Link href={'/contact'} className='border-b p-2 text-2xl' onMouseUp={toggleMenu}>
                    Contact
                </Link>

            </ul>
        </div>
    );
};

export default MobileMenu;