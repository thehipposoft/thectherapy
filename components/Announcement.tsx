import Link from 'next/link';
import React from 'react';

const Announcement = () => {
    return (
        <div className='flex justify-center bg-nav text-center px-12 md:px-0'>
            <Link href={'/voucher'} className='py-4 text-sm text-[#FFFFFF] hover:underline'>Get my first visit voucher and sign up to hear from us about specials, sales, and events.</Link>
        </div>
    );
};

export default Announcement;