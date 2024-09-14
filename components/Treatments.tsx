'use client'
import Image from 'next/image';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from 'next/link';
gsap.registerPlugin(ScrollTrigger)

const Treatments = () => {

    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from('.content > *', {
            scrollTrigger: {
                trigger: container.current,
                start: '35% bottom',
                end: '50% center',
            },
            opacity: 0,
            yPercent: 50,
            ease: 'power3.inOut',
            stagger: .5,
            duration: 1,
        })
    }, {scope: container})

    return (
        <div className='h-[575px] relative flex items-center' ref={container}>
            <Image src={'/assets/images/treatments/treatments-1.webp'} fill alt='Hands image' className='object-cover object-[center_35%]'/>
            <div className='bg-[#39373433] w-full h-full left-0 absolute' />
            <div className='content flex flex-col gap-6 relative z-10 md:pl-28 w-[75vw] md:w-auto mx-auto md:mx-0' >
                <div className='flex flex-col text-sm'>
                    <p className='text-[#FFFFFF] '>At the.c.therapy, we believe in a holistic approach</p>
                    <p className='text-[#FFFFFF] '>that goes beyond skin deep.</p>
                </div>
                <h2 className='text-4xl text-[#FFFFFF] '>Body, mind and soul</h2>
                <p className='text-[#FFFFFF] md:w-[580px] '>Learn more about our treatments. At the C therapy we will help you feel better inside and out. </p>
                <Link href={'/'} className='group hover:border-[#000000] flex justify-between items-center gap-6 border border-[#FFFFFF] w-fit px-5 py-4 '>
                    <p className='group-hover:text-[#000000] duration-500 text-[#FFFFFF] text-sm'>Our body treatments</p>
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#fff" className='duration-500 group-hover:stroke-[#000000]'><path d="M3.75 12h16.5M13.5 5.25 20.25 12l-6.75 6.75"/></g></svg>
                </Link>
            </div>
        </div>
    );
};

<Link href={'/body'} className='duration-500 hover:border-[#000000] flex justify-between items-center gap-6 border border-[#FFFFFF] w-fit px-5 py-4 '>
<p className='group-hover:text-[#000000] duration-500 text-[#FFFFFF] text-sm'>Our body treatments</p>
<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#fff" className='duration-500 group-hover:stroke-[#000000]'><path d="M3.75 12h16.5M13.5 5.25 20.25 12l-6.75 6.75"/></g></svg>
</Link>

export default Treatments;