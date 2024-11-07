'use client'
import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const PARAGRAPH1 = 'My journey began in physiotherapy. I immersed myself in physical therapies like postural global reeducation and also ventured into the world of aesthetic medicine, learning how to help people feel better physically. But deep down, I knew my heart was in something more holistic — where I could help people feel better inside and out.'

const PARAGRAPH2 = 'My personal journey of overcoming gut issues, dermatitis, and stress paved the way for a deeper connection with my clients. I realized that many shared similar struggles, from skin concerns to hormonal imbalances and beyond. It was then that the seeds of the.c.therapy were planted.'

const AboutComponent = () => {

    const container = useRef(null);
    const trigger = useRef(null);
    const triggerTwo = useRef(null);

    useGSAP(() => {
        gsap.from('.image', {
            scrollTrigger: {
                trigger: trigger.current,
                start: '15% center',
            },
            opacity: 0,
            duration: 2,
        })

        gsap.from('.reveal', {
            scrollTrigger: {
                trigger: trigger.current,
                start: '20% center',
            },
            opacity: 0,
            yPercent: 25,
            duration: .5,
            stagger: 0.1,
        })

        gsap.from('.imageTwo', {
            scrollTrigger: {
                trigger: triggerTwo.current,
                start: '15% center',
            },
            opacity: 0,
            duration: 2,
        })

        gsap.from('.revealTwo', {
            scrollTrigger: {
                trigger: triggerTwo.current,
                start: '20% center',
            },
            opacity: 0,
            yPercent: 25,
            duration: .5,
            stagger: 0.1,
        })
    }, {scope: container})

    return (
        <div ref={container} className='pb-20 flex flex-col md:gap-12'>
            <div 
                ref={trigger}
                className='h-screen md:flex items-center md:bg-right bg-top relative'
            >
                <Image src={'/assets/images/about/background-2.webp'} alt='' fill  className=' object-contain md:object-right object-top'/>
                <div  className='flex md:flex-row-reverse flex-col justify-between md:w-[85vw] 2xl:w-[70vw] 2xl:mx-auto 2xl:pl-0 md:pl-28 pt-40 md:pt-0 gap-12 w-[75vw] mx-auto md:mx-0'>
                        <Image 
                            width={1600}
                            height={1067} 
                            alt='Carolina picture' 
                            src={'/assets/images/about/about-3.webp'} 
                            className='object-cover image h-[400px] md:h-[500px] w-[80vw] md:w-[525px] 2xl:h-[650px] 2xl:w-[650px] relative z-10'
                        />
                    <div className='flex flex-col justify-center gap-6'>
                        <div className='flex flex-col gap-6'>
                            <div className='flex gap-1 text-[#333333] md:max-w-[400px] flex-wrap'>
                                {
                                    PARAGRAPH1.split(" ").map((char:any, index:any) => (
                                            <p className='reveal' key={index}>{char}</p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                ref={triggerTwo}
                className='h-screen md:flex items-center md:bg-right bg-top relative'
            >
                <Image src={'/assets/images/about/background-3.webp'} alt='' fill  className='object-scale-down md:object-right object-center'/>
                <div className='flex md:flex-row-reverse flex-col justify-between md:w-[85vw] md:pl-28 2xl:pl-0 2xl:w-[70vw] 2xl:mx-auto pt-40 md:pt-0 gap-12 w-[75vw] mx-auto md:mx-0'>
                        <Image 
                            width={1800} 
                            height={1200} 
                            alt='Carolina picture' 
                            src={'/assets/images/about/about-4.webp'} 
                            className='object-cover imageTwo h-[400px] md:h-[500px] w-[80vw] md:w-[525px] 2xl:h-[650px] 2xl:w-[650px] relative z-10'
                        />
                    <div className='flex flex-col justify-center gap-6'>
                        <div className='flex flex-col gap-6'>
                            <div className='flex gap-1 text-[#333333] md:max-w-[420px] flex-wrap'>
                                {
                                    PARAGRAPH2.split(" ").map((char:any, index:any) => (
                                            <p className='revealTwo' key={index}>{char}</p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutComponent;