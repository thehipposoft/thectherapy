'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const About = ({ aboutPage }:any) => {

    const container = useRef(null);

    useGSAP(() => {
        gsap.from('.text > *', {
            scrollTrigger: {
                trigger: container.current,
                scrub: 4,
                start: '5% bottom',
                end: '60% center',
            },
            opacity: 0,
            y: 50,
            x: 50,
            ease: 'power3.inOut',
            stagger: .5,
            duration: 1,
        })
    }, {scope: container})

    return (
        <div className='xl:pt-20 lg:pb-12 xl:pb-16 md:pb-0 py-12 lg:py-0 2xl:py-8 md:flex md:items-center relative z-10'>
            <div 
                ref={container}
                className='xl:h-[100vh] flex items-start 2xl:w-[75vw] 2xl:mx-auto'
                style={{
                    backgroundImage: 'url(/assets/images/about/background-1.webp)',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className='flex md:flex-row flex-col w-full justify-between items-center lg:w-[80vw] 2xl:w-[65vw] 2xl:pl-0 2xl:gap-0 md:pl-14 lg:pl-28 gap-12 pt-[10%] md:pb-32 lg:pb-0'>
                    {
                        aboutPage ? 
                            <Image 
                                width={1366}
                                height={2048}
                                alt='Carolina picture' 
                                src={'/assets/images/about/about-2.webp'} 
                                className='object-cover h-[400px] md:h-[500px] w-[80vw] md:w-[525px] 2xl:h-[650px] 2xl:w-[650px]'
                            />
                        :
                            <Image 
                                width={1067}
                                height={1600} 
                                alt='Carolina picture' 
                                src={'/assets/images/about/about-1.webp'} 
                                className='object-cover md:w-[40vw] w-[80vw] md:h-[575px] 2xl:h-[675px] h-[375px]'
                            />
                    }
                    {
                        aboutPage ?
                        <div className='flex flex-col justify-center gap-6 w-[75vw] md:w-auto'>
                            <p className='text-sm'>the.c.therapy studio</p>
                            <h2 className='text-4xl'>Hi!, I'm Carolina</h2>
                            <div className='flex flex-col gap-6'>
                                <div className={`flex flex-col gap-1 text-[#333333]`}>
                                    <p>The friendly face behind the.c.therapy.<br/> As an Argentinean native who’s found<br/> her home in Melbourne for over 5 years now,<br/> I’m thrilled to share my journey with you.</p>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='text flex flex-col justify-center gap-6 w-[75vw] md:w-auto'>
                            <p className='text-sm'>the.c.therapy studio</p>
                            <h2 className='text-4xl'>Hi!, I'm Carolina.</h2>
                            <div className='flex flex-col gap-6'>
                                <div className={`flex flex-col gap-1 text-[#333333]`}>
                                    <p>The friendly face behind the.c.therapy.<br/> I’m thrilled to share my journey with you.</p>
                                </div>
                                <Link href={'/about'} className='group flex justify-between items-center gap-5 border border-[#CDCBC0] duration-700 w-fit px-5 py-4 bg-[#ffffff2a]'>
                                    <p className='text-sm group-hover:underline duration-700'>Read More</p>
                                    <svg className='overflow-visible' width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#333" className='group-hover:translate-x-2 duration-700'><path d="M3.75 12h16.5M13.5 5.25 20.25 12l-6.75 6.75"/></g></svg>
                                </Link>
                            </div>
                        </div>
                    }

                </div>
            </div>
        </div>

    );
};

export default About;