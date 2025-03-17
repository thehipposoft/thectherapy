'use client'
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const MessageSticky = () => {

    const path = usePathname()
    return (
        <Link href={'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/all-offer?menu=true'} target='_blank' className={`${path === '/contact' ? 'hidden' : ''} lg:hidden p-2 flex gap-1 justify-center items-center fixed z-40 right-7 bottom-10 rounded-full border border-[#87807040] bg-[#fffffff7]`}>
            <svg className='w-7' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 9h18M7 3v2m10-2v2M6 12h2m3 0h2m3 0h2M6 15h2m3 0h2m3 0h2M6 18h2m3 0h2m3 0h2M6.2 21h11.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 19.48 21 18.92 21 17.8V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 5 18.92 5 17.8 5H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 6.52 3 7.08 3 8.2v9.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 21 5.08 21 6.2 21Z" stroke="#87807d" stroke-width="2" stroke-linecap="round"/></svg>
            
            <p>Book Now</p>    
        </Link>
    );
};

export default MessageSticky;