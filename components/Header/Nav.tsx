'use client'
import Link from 'next/link';
import React, {useRef} from 'react';
import { usePathname } from 'next/navigation';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Nav = () => {

    const currentPath = usePathname();

    return (
        <div className='flex xl:gap-6 md:gap-3 text-base lg:text-sm xl:text-sm 2xl:text-base md:h-20 items-center'>
            <Link href={'/about'} className={`${currentPath === '/about' ? 'underline' : ''} hover:underline`}>
                About
            </Link>
            <Link href={'/#products'} className='hover:underline'>
                Products
            </Link>
            <div className='group/nav-father flex flex-col relative h-full justify-center'>
                <p className={`${currentPath === '/facial' || currentPath === '/facial/skin-balance' || currentPath === '/facial/skin-consultation' || currentPath === '/facial/skin-hydration' || currentPath === '/facial/skin-renewal' || currentPath === '/facial/skin-ageless' || currentPath === '/body/treatments' || currentPath === '/body/relax' ? 'underline' : ''}`}>Services</p>
                <div className='absolute group-hover/nav-father:z-30 w-52 bg-nav translate-y-32 opacity-0 duration-500 group-hover/nav-father:translate-y-24 group-hover/nav-father:opacity-100'>
                    <div className='group/child flex items-center text-[#FFFFFF] cursor-pointer px-4 hover:bg-[#cdc6bad5] duration-500'>
                        <Link href={'/facial'} className='flex justify-between w-full py-6'>
                            <p className='text-[#FFFFFF]'>Facials</p>
                            <svg width="20" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#fff"><path d="M3.125 10.5h13.75M10 3.625v13.75"/></g></svg>
                        </Link>
                        <ul className='absolute duration-500 translate-x-48 w-52 bg-nav group-hover/child:z-30 group-hover/child:opacity-100 translate-y-44 group-hover/child:translate-y-44 opacity-0'>
                            <Link href={'/skin-consultation'} className='flex justify-between duration-500 w-full px-4 py-6 hover:bg-[#cdc6bad5]'>
                                <p className='text-[#FFFFFF]'>Skin Consultation</p>
                                <svg width="20" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#fff"><path d="M3.125 10.5h13.75M10 3.625v13.75"/></g></svg>
                            </Link>
                            <Link href={'/facial/express-facial'} className='flex justify-between duration-500 w-full px-4 py-6 hover:bg-[#cdc6bad5]'>
                                <p className='text-[#FFFFFF]'>Express Facials</p>
                                <svg width="20" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#fff"><path d="M3.125 10.5h13.75M10 3.625v13.75"/></g></svg>
                            </Link>
                            <Link href={'/facial/skin-balance'} className='flex justify-between duration-500 w-full px-4 py-6 hover:bg-[#cdc6bad5]'>
                                <p className='text-[#FFFFFF]'>Skin Balance</p>
                                <svg width="20" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#fff"><path d="M3.125 10.5h13.75M10 3.625v13.75"/></g></svg>
                            </Link>
                            <Link href={'/facial/skin-hydration'} className='flex justify-between duration-500 w-full px-4 py-6 hover:bg-[#cdc6bad5]'>
                                <p className='text-[#FFFFFF]'>Skin Hydration</p>
                                <svg width="20" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#fff"><path d="M3.125 10.5h13.75M10 3.625v13.75"/></g></svg>
                            </Link>
                            <Link href={'/facial/skin-renewal'} className='flex justify-between duration-500 w-full px-4 py-6 hover:bg-[#cdc6bad5]'>
                                <p className='text-[#FFFFFF]'>Skin Renewal</p>
                                <svg width="20" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#fff"><path d="M3.125 10.5h13.75M10 3.625v13.75"/></g></svg>
                            </Link>
                            <Link href={'/facial/skin-ageless'} className='flex justify-between duration-500 w-full px-4 py-6 hover:bg-[#cdc6bad5]'>
                                <p className='text-[#FFFFFF]'>Skin Ageless</p>
                                <svg width="20" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#fff"><path d="M3.125 10.5h13.75M10 3.625v13.75"/></g></svg>
                            </Link>
                        </ul>
                    </div>
                    <div className='group/body-child  flex items-center text-[#FFFFFF] px-4 cursor-pointer hover:bg-[#cdc6bad5] duration-500'>
                        <div className='flex justify-between w-full py-6'>
                            <p className='text-[#FFFFFF]'>Body</p>
                            <svg width="20" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#fff"><path d="M3.125 10.5h13.75M10 3.625v13.75"/></g></svg>
                        </div>
                        <ul className='absolute duration-500 translate-x-48 w-52 bg-nav group-hover/body-child:z-30 group-hover/body-child:opacity-100 translate-y-28 group-hover/body-child:translate-y-10 opacity-0'>
                            <Link href={'/body/treatments'} className='flex justify-between duration-500 w-full px-4 py-6 hover:bg-[#cdc6bad5]'>
                                <p className='text-[#FFFFFF]'>Body Treatments</p>
                                <svg width="20" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#fff"><path d="M3.125 10.5h13.75M10 3.625v13.75"/></g></svg>
                            </Link>
                            <Link href={'/body/relax'} className='flex justify-between duration-500 w-full px-4 py-6 hover:bg-[#cdc6bad5]'>
                                <p className='text-[#FFFFFF]'>Skin & Body relax</p>
                                <svg width="20" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#fff"><path d="M3.125 10.5h13.75M10 3.625v13.75"/></g></svg>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
            <Link href={'/contact'} className={`${currentPath === '/contact' ? 'underline' : ''} hover:underline`}>
                Contact
            </Link>
           {/*  <Link href={'/promotions'} className='hover:underline'>
                Promotions
            </Link> */}
            <div className='group/nav-more flex flex-col relative h-full justify-center'>
                <p>More</p>
                <div className='absolute group-hover/nav-more:z-30 w-52 bg-nav translate-y-48 opacity-0 duration-500 group-hover/nav-more:translate-y-32 group-hover/nav-more:opacity-100'>
                    <div className=' flex items-center text-[#FFFFFF] cursor-pointer px-4 hover:bg-[#cdc6bad5] duration-500'>
                        <Link href={'https://www.fresha.com/book-now/the-c-therapy-macid731/vouchers?pId=474146'} target='__blank' className='flex justify-between w-full py-6'>
                            <p className='text-[#FFFFFF] underline'>GIFT CARDS</p>
                            <svg width="20" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#fff"><path d="M3.125 10.5h13.75M10 3.625v13.75"/></g></svg>
                        </Link>
                    </div>
                    <div className='flex items-center text-[#FFFFFF] px-4 cursor-pointer hover:bg-[#cdc6bad5] duration-500'>
                        <Link href={'https://www.fresha.com/book-now/the-c-therapy-macid731/paid-plans?share&pId=474146'} target='_blank' className='flex justify-between w-full py-6'>
                            <p className='text-[#FFFFFF] underline'>Memberships</p>
                            <svg width="20" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#fff"><path d="M3.125 10.5h13.75M10 3.625v13.75"/></g></svg>
                        </Link>
                    </div>
                    <div className='flex items-center text-[#FFFFFF] px-4 cursor-pointer hover:bg-[#cdc6bad5] duration-500'>
                        <Link href={'/terms-and-conditions'} className='flex justify-between w-full py-6'>
                            <p className='text-[#FFFFFF]'>Terms & Conditions</p>
                            <svg width="20" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#fff"><path d="M3.125 10.5h13.75M10 3.625v13.75"/></g></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
