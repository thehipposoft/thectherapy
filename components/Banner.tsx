'use client'
import React, {useRef} from 'react';
import BannerSlick from './BannerSlick';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Banner = () => {

    const LoopText = useRef(null)
    const LoopTextTwo = useRef(null)
    let xPercent = 0;
    let direction = -1;

    useGSAP(() => {
        gsap.from('.container-b', {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power2.InOut',
            delay: 0.3
        })

        const animation = () => {
            if(xPercent <= -100 ) {xPercent = 0}
            gsap.set(LoopText.current, {xPercent: xPercent})
            gsap.set(LoopTextTwo.current, {xPercent: xPercent})
            xPercent += 0.1 * direction;
            requestAnimationFrame(animation);
        }

        requestAnimationFrame(animation)

    }, []);

    return (
/*         <div>
            <BannerSlick />
        </div>
*/
/*         <div>
            <div className='container-b hidden md:block relative w-screen h-[600px] 2xl:h-[700px]'>
                <Image src={'/assets/images/banner/hallowen.jpg'} alt='Banner Halloween promotion' fill className='object-cover' />
                <Link style={{color: 'white'}} href={'/promotions'} className='bg-[#352d27] hover:scale-105 hover:underline duration-500 px-4 rounded-lg arimo-bold py-2 bottom-6 left-16 absolute z-10 uppercase w-52 text-center text-xl'>
                    book now
                </Link>
            </div>
            <div className='container-b md:hidden relative w-screen h-screen'>
                <Image src={'/assets/images/banner/hallowenmobile.jpg'} alt='Banner Halloween promotion' fill className='object-contain' />
                <Link
                    style={{color: 'white'}}
                    href={'/promotions'}
                    className='bg-[#352d27] hover:scale-105 hover:underline duration-500 px-4 rounded-lg arimo-bold py-2 bottom-1/3 left-6 absolute z-10 uppercase w-52 text-center text-xl'>
                    book now
                </Link>
            </div>
        </div> */
        <div className='bg-[#000000] container-b md:p-8 p-4 flex md:h-screen justify-center items-center'>
            <div className='w-full h-full relative'>
                <Image src={"/assets/images/promotions/banner-nov.jpg"} alt='Banner image' fill className='object-cover rounded-sm' />
                <div className='absolute w-full h-full left-0 top-0 bg-[#00000077]' />
                <div className='flex flex-col gap-10 md:gap-0 h-full justify-between p-6 relative z-10 text-[#FFFFFF]'>
                    <div className='flex lg:flex-row flex-col-reverse justify-between pt-12 lg:pt-0'>
                        <div className='flex flex-col font-semibold'>
                            <h5>BLACK FRIDAYS at The.c.therapy</h5>
                            <h5>SAVE the Date: ACTIVE from 21 to 30 Nov.</h5>
                        </div>
                        <div className='relative overflow-hidden flex flex-nowrap max-w-[28rem]'>
                            <h2 ref={LoopText} className='uppercase loop text-4xl min-w-[28rem] arimo-bold '>Black Friday is here -</h2>
                            <h2 ref={LoopTextTwo} className='uppercase loop text-4xl min-w-[28rem] arimo-bold '>Black Friday is here -</h2>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6 md:gap-0 lg:flex-row justify-between lg:items-end'>
                        <h2 className='md:text-8xl text-[56px] leading-[66px] md:leading-[100px]'>Ready for the<br /> biggest SALE<br /> of the YEAR?</h2>
                        <div className='flex flex-col'>
                            <h4 className='uppercase text-[#FFFFFF] md:text-2xl'>15% OFF - Facials / skin & body relax</h4>
                            <h4 className='uppercase text-[#FFFFFF] md:text-2xl'>20% OFF - memberships & online store</h4>
                            <div className='flex flex-col lg:pl-36 pt-4'>
                                <h6 className='font-semibold text-xl hidden'>EARLY ACCESS on 11/11</h6>
                                <p className='text-[#FFFFFF] leading-4 hidden'>GET THE CODE! <br />by sign up in our broadcast Channel<br />and enjoy our discounts before anyone.</p>
                                <p className='pt-2 text-[#FFFFFF] hidden'>T&C* Applied.</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:grid flex flex-col lg:grid-cols-3 gap-4 justify-between'>
                        <Link href={'https://www.fresha.com/book-now/the-c-therapy-macid731/services?lid=507601&eid=1482022&share=true&pId=474146'} rel='noreferrer' target='_blank' className='flex group justify-between items-center gap-6 border border-[#FFFFFF] duration-500 px-5 py-2'>
                            <svg className='group-hover:translate-x-2 duration-700' width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF"><path d="M3.75 12h16.5M13.5 5.25 20.25 12l-6.75 6.75"/></g></svg>
                            <div className='bg-[#edf0f2] group-hover:bg-[#ffffff00] duration-500 group-hover:text-[#FFFFFF] border border-[#edf0f2] uppercase font-semibold text-xs text-center rounded-md px-4 py-2 lg:w-fit w-1/2'>
                                Book online<br /> Use Code: TCTBF15
                            </div>
                        </Link>
                        <Link rel='noreferrer' target='_blank' href={'https://www.fresha.com/book-now/the-c-therapy-macid731/paid-plans?share=true&pId=474146'} className='flex group justify-between items-center gap-6 border border-[#FFFFFF] duration-500 px-5 py-2 '>
                            <svg className='group-hover:translate-x-2 duration-700' width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF"><path d="M3.75 12h16.5M13.5 5.25 20.25 12l-6.75 6.75"/></g></svg>
                            <div className='bg-[#edf0f2] group-hover:bg-[#ffffff00] duration-500 group-hover:text-[#FFFFFF] border border-[#edf0f2] uppercase font-semibold text-xs text-center rounded-md px-4 py-2 lg:w-fit w-1/2'>
                                Buy<br /> Memberships
                            </div>
                        </Link>
                        <Link rel='noreferrer' target='_blank' href={'https://store.thectherapy.com.au/'} className='flex group justify-between items-center gap-6 border border-[#FFFFFF] duration-500 px-5 py-2 '>
                            <svg className='group-hover:translate-x-2 duration-700' width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF"><path d="M3.75 12h16.5M13.5 5.25 20.25 12l-6.75 6.75"/></g></svg>
                            <div className='bg-[#edf0f2] group-hover:bg-[#ffffff00] duration-500 group-hover:text-[#FFFFFF] border border-[#edf0f2] uppercase font-semibold text-xs text-center rounded-md px-4 py-2 lg:w-fit w-1/2'>
                                Shop <br /> Online
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
/*         <div className='container w-screen'>
            <div className='relative hidden xl:block w-screen'>
                <Image src={'/assets/images/promotions/banner-sep.webp'} className='w-screen pt-12' alt='' width={2000} height={680}  />
                <Link href={'https://www.fresha.com/book-now/the-c-therapy-macid731/services?lid=507601&eid=1482022&oiid=p%3A1669320&share=true&pId=474146'} target='_blank'className="absolute md:gap-4 gap-2 bg-[#E1DED6] xl:bottom-[27%] 2xl:left-[22%] md:left-[20%]
                arimo-bold md:tracking-widest shadow-lg flex md:px-12 px-8 py-3 rounded-3xl text-[#333333] hover:scale-105 duration-500 hover:underline">
                    <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3.5V2M5.06066 5.06066 4 4m1.06066 9L4 14.0607m9-9.00004L14.0607 4M3.5 9H2m6.5-.5 4.1111 12.7778L15.5 18.3889 19.1111 22 22 19.1111 18.3889 15.5l2.8889-2.8889L8.5 8.5Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    BOOK HERE
                </Link>
            </div>
            <div className='relative xl:hidden block'>
                <Image src={'/assets/images/promotions/banner-sep-mob.webp'} className='w-screen pt-12' alt='' width={1067} height={1920}  />
                <Link href={'https://www.fresha.com/book-now/the-c-therapy-macid731/services?lid=507601&eid=1482022&oiid=p%3A1669320&share=true&pId=474146'} target='_blank'className="absolute md:gap-4 gap-2 bg-[#E1DED6] bottom-[42%] md:bottom-[45%] md:right-24 right-12
                arimo-bold md:tracking-widest shadow-lg flex md:px-12 px-6 py-2 rounded-3xl text-[#333333] hover:scale-105 duration-500 hover:underline">
                    <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3.5V2M5.06066 5.06066 4 4m1.06066 9L4 14.0607m9-9.00004L14.0607 4M3.5 9H2m6.5-.5 4.1111 12.7778L15.5 18.3889 19.1111 22 22 19.1111 18.3889 15.5l2.8889-2.8889L8.5 8.5Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    BOOK HERE
                </Link>
            </div>
        </div> */
    );
};

export default Banner;
