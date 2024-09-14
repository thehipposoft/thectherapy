import Image from 'next/image';
import React from 'react';
import VoucherForm from './VoucherForm';

const VoucherPage = () => {
    return (
        <div className='relative flex justify-center items-center py-20'>
            <Image src={'/assets/images/contact/contactBg.webp'} alt='' fill />
            <div className='md:w-[1100px] mx-auto flex flex-col relative z-10'>
                <div className='flex md:flex-row flex-col justify-between w-[85vw] mx-auto md:w-auto md:mx-0'>
                    <div className='flex flex-col gap-2 pb-12 md:pb-0'>
                        <p>Feel good inside and out its possible.</p>
                        <h1 className='text-4xl'>Let's start to glow</h1>
                        <p className='pt-4 md:w-[80%]'>Every start is better with a boost, that's why on your first visit we give you a free 15 minute consultation and for Carolina to advise you with the best option according to your skin type and a treatment plan and skincare regimen at home.</p>
                    </div>
                    <div>
                        <VoucherForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VoucherPage;