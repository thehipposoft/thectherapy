'use client'
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const NAV_DATA =[
    {
        label: 'Products',
        href: '',
        subfields: [],
    },
    {
        label: 'About',
        href: 'about',
        subfields: [],
    },
    {
        label: 'Journal',
        href: '',
        subfields: [],
    },
    {
        label: 'Services',
        href: 'services',
        subfields: [],
    },
    {
        label: 'Contact',
        href: '',
        subfields: [],
    },
    {
        label: 'More',
        href: '',
        subfields: [],
    },
]

const Nav = () => {

    const container = useRef<HTMLDivElement>(null);
    const { contextSafe } = useGSAP({ scope: container }); 
    
    const onMouseEnterFunc = contextSafe(() => {
        gsap.to('.services', { opacity: 1, y: 0, duration: 1, ease: 'power3.inOut' });
    });

    const onMouseLeaveFunc = contextSafe(() => {
        gsap.to('.services', { opacity: 0, y: -100, duration: 1, ease: 'power3.inOut' });
    });

    return (
        <div ref={container} className='flex gap-6 text-sm'>
            <Link href={'/'}>
                Products
            </Link>
            <Link href={'/about'}>
                About
            </Link>
            <Link href={'/'} className='hidden'>
                Journal
            </Link>
            <div className=' flex flex-col relative'>
                <Link href={'/services'} >Services</Link>
                <div className='services hidden px-4 py-4'>
                    <div className='px-4 opacity-1 absolute bg-nav flex justify-center items-center text-[#FFFFFF] border-b-[1px]'>
                        <div className='flex justify-between'>
                            <p>Facials</p>
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_106_1349)">
                                <path d="M3.125 10.5H16.875" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10 3.625V17.375" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_106_1349">
                                <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </div>
                        
                        <ul className='absolute left-32 opacity-0'>
                            <li>Skin Consultation</li>
                            <li>Skin Consultation</li>
                            <li>Skin Consultation</li>
                            <li>Skin Consultation</li>
                            <li>Skin Consultation</li>
                        </ul>
                    </div>
                    <div className='opacity-1 absolute bg-nav top-24 flex justify-center items-center text-[#FFFFFF]'>
                        <div className='flex justify-between'>
                            <p>Body</p>
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_106_1349)">
                                <path d="M3.125 10.5H16.875" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10 3.625V17.375" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_106_1349">
                                <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <ul className='absolute left-32 opacity-0'>
                            <li>Body Treatment</li>
                            <li>Skin & Body relax</li>
                        </ul>
                    </div>
                </div>

            </div>
            <Link href={'/contact'}>
                Contact
            </Link>
            <div>
                <p>More</p>
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;

/*
            {
                NAV_DATA.map((value, index) => (
                    <Link href={value.href} key={index}>
                        {value.label}
                    </Link>
                ))
            }
*/