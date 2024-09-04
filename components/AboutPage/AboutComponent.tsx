import React from 'react';
import Image from 'next/image';

const AboutComponent = () => {
    return (
        <div className='pb-20'>
            <div 
                className='h-screen md:flex items-center md:bg-right bg-top'
                style={{
                    backgroundImage: 'url(/assets/images/about/background-2.webp)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                }}
            >
                <div className='flex md:flex-row-reverse flex-col justify-between md:w-[1250px] md:pl-28 pt-40 md:pt-0 gap-12 w-[75vw] mx-auto md:mx-0'>
                    <div className='md:w-[540px] w-[340px] md:h-[475px] h-[375px] relative z-10'>
                        <Image fill alt='Caro picture' src={'/assets/images/about/about-3.webp'} className='object-cover' />
                    </div>
                    <div className='flex flex-col justify-center gap-6'>
                        <div className='flex flex-col gap-6'>
                            <div className={`flex flex-col gap-1 text-[#333333] md:w-[400px]`}>
                                <p>My journey began in physiotherapy. I immersed myself in physical therapies like postural global reeducation and also ventured into the world of aesthetic medicine, learning how to help people feel better physically. But deep down, I knew my heart was in something more holistic — where I could help people feel better inside and out.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div 
                className='h-screen md:flex items-center md:bg-right bg-top'
                style={{
                    backgroundImage: 'url(/assets/images/about/background-3.webp)',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className='flex md:flex-row-reverse flex-col justify-between md:w-[1250px] md:pl-28 pt-40 md:pt-0 gap-12 w-[75vw] mx-auto md:mx-0'>
                    <div className='md:w-[540px] w-[340px] md:h-[475px] h-[375px] relative z-10'>
                        <Image fill alt='Caro picture' src={'/assets/images/about/about-4.webp'} className='object-cover'/>
                    </div>
                    <div className='flex flex-col justify-center gap-6'>
                        <div className='flex flex-col gap-6'>
                            <div className={`flex flex-col gap-1 text-[#333333] md:w-[420px]`}>
                                <p>My personal journey of overcoming gut issues, dermatitis, and stress paved the way for a deeper connection with my clients. I realized that many shared similar struggles, from skin concerns to hormonal imbalances and beyond. It was then that the seeds of the.c.therapy were planted.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutComponent;