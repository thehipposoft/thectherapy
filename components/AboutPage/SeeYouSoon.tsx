import React from 'react';
import Image from 'next/image';

const SeeYouSoon = () => {
    return (
        <div className='md:h-[560px] h-[80vh] flex flex-col md:flex-row items-center'>
            <div className='md:w-[50vw] w-screen relative bg-nav h-full'>
                <Image src={'/assets/images/about/about-heaven.webp'} alt={'Image of a table from the Studio with water and an inciense'} fill className='object-cover object-bottom' />
            </div>
            <div className='md:w-1/2 w-[75vw] mx-auto md:mx-0 py-20 md:py-0 justify-center items-center'>
                <div className='md:w-[420px] mx-auto flex gap-6 flex-col'>
                    <h3 className='text-3xl'>Studio C is your safe Heaven.</h3>
                    <div className='flex flex-col'>
                        <p>I can't wait to welcome you to the.c.therapy and embark on this transformative journey of mind, skin, body & soul together.</p>
                        <p>Let's uncover the radiant, confident you that's been waiting to shine.</p>
                    </div>
                    <h3 className='text-xl'> See you soon!</h3>
                </div>
            </div>
        </div>
    );
};

export default SeeYouSoon;