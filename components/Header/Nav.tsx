'use client'
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import AnchorLink from '../commons/AnchorLink';


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
        <div ref={container} className='flex gap-6 text-sm md:h-20 items-center'>
            <AnchorLink href={'#products'}>
                Products
            </AnchorLink>
            <Link href={'/about'}>
                About
            </Link>
            <Link href={'/'} className='hidden'>
                Journal
            </Link>
            <div className='group flex flex-col relative h-full justify-center'>
                <p>Services</p>
                <div className='absolute group-hover:z-30 w-52 top-16 bg-nav overflow-hidden translate-y-12 opacity-0 duration-500  group-hover:translate-y-0 group-hover:opacity-100'>
                    <div className='opacity-1 flex items-center text-[#FFFFFF] cursor-pointer px-4 hover:bg-[#cdc6bad5] duration-500'>
                        <Link href={'/facial'} className='flex justify-between w-full py-6'>
                            <p className='text-[#FFFFFF]'>Facials</p>
                            <svg width="20" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#fff"><path d="M3.125 10.5h13.75M10 3.625v13.75"/></g></svg>
                        </Link>
                        
                        <ul className='absolute left-32 opacity-0'>
                            <li>Skin Consultation</li>
                            <li>Skin Consultation</li>
                            <li>Skin Consultation</li>
                            <li>Skin Consultation</li>
                            <li>Skin Consultation</li>
                        </ul>
                    </div>
                    <div className='opacity-1 flex items-center text-[#FFFFFF] px-4 cursor-pointer hover:bg-[#cdc6bad5] duration-500'>
                        <Link href={'/body'} className='flex justify-between w-full py-6'>
                            <p className='text-[#FFFFFF]'>Body</p>
                            <svg width="20" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#fff"><path d="M3.125 10.5h13.75M10 3.625v13.75"/></g></svg>
                        </Link>
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