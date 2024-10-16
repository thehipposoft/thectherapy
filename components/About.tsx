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
        <div className='md:py-20 md:flex md:items-center relative z-10'>
            <div 
                ref={container}
                className='h-[100vh] flex items-start'
                style={{
                    backgroundImage: 'url(/assets/images/about/background-1.webp)',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className='flex md:flex-row flex-col w-full justify-between items-center md:w-[1150px] md:pl-28 gap-12 pt-[10%]'>
                    {
                        aboutPage ? 
                        <div className='md:w-[520px] w-[320px] md:h-[475px] h-[375px] relative z-10 mt-20 md:mt-0'>
                            <Image fill alt='Carolina picture' src={'/assets/images/about/about-2.webp'} className='object-cover'/>
                        </div>
                        :
                        <div className='md:w-[525px] w-[325px] md:h-[575px] h-[375px] relative z-10'>
                            <Image fill alt='Carolina picture' src={'/assets/images/about/about-1.webp'} className='object-cover'/>
                        </div>
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