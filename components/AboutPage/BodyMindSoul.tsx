import Image from 'next/image';
import React from 'react';

const BodyMindSoul = () => {
    return (
        <div className='md:h-[560px] relative flex items-center justify-center pb-20'>
            <Image src={'/assets/images/about/bodymindsoul.webp'} fill alt='Background'  />
            <div className='md:w-[1250px] relative z-10 flex flex-col md:flex-row items-center md:gap-12 gap-8'>
                <div className='flex flex-col'>
                    <div className='border border-[#6E6460] rounded-full w-[150px] h-[150px] flex justify-center items-center relative top-10'>
                        <h3 className='text-[#6E6460] text-xl'>Body</h3>
                    </div>
                    <div className='border border-[#6E6460] rounded-full w-[150px] h-[150px] flex justify-center items-center'>
                        <h3 className='text-[#6E6460] text-xl'>Mind</h3>
                    </div>
                    <div className='border border-[#6E6460] rounded-full w-[150px] h-[150px] flex justify-center items-center relative bottom-10'>
                        <h3 className='text-[#6E6460] text-xl'>Soul</h3>
                    </div>
                </div>
                <div className='md:w-[1px] w-[350px] md:h-[350px] h-[1px] bg-[#6E6460]' />
                <div className='flex flex-col gap-12 w-[75vw] md:w-auto mx-auto md:mx-0'>
                    <div className='flex flex-col md:w-[420px] gap-4 md:gap-0'>
                        <p>At the.c.therapy, we believe in a holistic approach that goes beyond skin deep. It's about embracing clean beauty, nourishing your body with the right diet and supplements, and fostering a spiritual and mindful lifestyle.</p>
                        <p> After all, our gut health influences everything from our mood to our energy levels, and even our skin.</p>
                    </div>
                    <p className='text-3xl text-[#6E6460]'>connect</p>
                </div>
                <div className='md:w-full flex justify-center mx-auto md:mx-0'>
                    <h2 className='text-3xl'>
                        Passion for Natural Healing.
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default BodyMindSoul;