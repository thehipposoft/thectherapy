import Image from 'next/image';
import React from 'react';

const BodyMindSoul = () => {
    return (
        <div className='h-[560px] relative flex items-center justify-center'>
            <Image src={'/assets/images/about/bodymindsoul.webp'} fill alt='Background'  />
            <div className='w-[1250px] relative z-10 flex items-center gap-12'>
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
                <div className='w-[1px] h-[350px] bg-[#6E6460]' />
                <div className='flex flex-col gap-12'>
                    <div className='flex flex-col w-[420px]'>
                        <p>At the.c.therapy, we believe in a holistic approach that goes beyond skin deep. It's about embracing clean beauty, nourishing your body with the right diet and supplements, and fostering a spiritual and mindful lifestyle.</p>
                        <p> After all, our gut health influences everything from our mood to our energy levels, and even our skin.</p>
                    </div>
                    <p className='text-3xl text-[#6E6460]'>connect</p>
                </div>
                <div>
                    <h2 className='text-3xl'>
                        Passion for Natural Healing.
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default BodyMindSoul;