'use client'
import React, {useRef} from 'react';
import BannerSlick from './BannerSlick';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';

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
            delay: 1
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
       /*  <div>
            <BannerSlick />
        </div> */
        <div className='container-b md:mt-[75px] flex md:h-[92vh] h-screen w-screen relative justify-center items-center'>
            <div className='w-full h-full relative p-4'>
            <Image src={"/assets/images/promotions/promotions.webp"} fill alt='Christmas promotions banner' className='object-cover object-right md:object-center'  />
                <div className='flex flex-col gap-6 md:gap-0 h-full justify-between p-6 relative z-10 text-[#FFFFFF]'>
                    <div className='flex lg:flex-row flex-col-reverse justify-between pt-12 lg:pt-0'>
                        <div className='flex flex-col font-semibold'>
                            <h4 className='text-3xl font-thin pt-6 md:pt-0'>DECEMBER at The.c.therapy</h4>
                        </div>
                        <div className='relative overflow-hidden flex flex-nowrap max-w-[31rem]'>
                            <h2 ref={LoopText} className='uppercase loop text-4xl min-w-[31rem] arimo-bold '>December Promotions -</h2>
                            <h2 ref={LoopTextTwo} className='uppercase loop text-4xl min-w-[31rem] arimo-bold '>December Promotions -</h2>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6 md:gap-0 justify-between '>
                        <h2 className='md:text-9xl text-[52px] leading-[66px] md:leading-[100px] uppercase'>Merry<br /> christmas</h2>
                        <div>
                            <p className='text-[#FFFFFF]/95 italic text-xl pt-4 pl-[5%]'>Gift yourself or to your love ones…<br/>
          …The feeling of wellness & relaxation.</p>
                        </div>
                    </div>
                    <div className='lg:grid flex flex-col lg:grid-cols-3 gap-4 justify-between'>
                        <Link href={'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?pId=474146&cartId=373bca57-99ca-436a-a1ed-ca8e897a1619'} rel='noreferrer' target='_blank' className='flex group justify-center items-center hover:text-[#333333] hover:text-xl hover:border-[#ffffff00] hover:bg-[#ffffff34] text-[#FFFFFF] arimo-bold text-lg text-center gap-6 border border-[#FFFFFF] duration-500 px-5 py-4'>
                            BOOK YOUR CHRISTMAS GLOW PACK
                        </Link>
                        <Link href={'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/vouchers?pId=474146'} rel='noreferrer' target='_blank' className='flex group justify-center items-center hover:text-[#333333] hover:text-xl hover:border-[#ffffff00] hover:bg-[#ffffff34] text-[#FFFFFF] arimo-bold text-lg text-center gap-6 border border-[#FFFFFF] duration-500 px-5 py-4'>
                            BUY GIFTCARDS 15% OFF
                        </Link>
                        <Link href={'https://store.thectherapy.com.au/products/'} rel='noreferrer' target='_blank' className='flex group justify-center items-center hover:text-[#333333] hover:text-xl hover:border-[#ffffff00] hover:bg-[#ffffff34] text-[#FFFFFF] arimo-bold text-lg text-center gap-6 border border-[#FFFFFF] duration-500 px-5 py-4'>
                            SHOP ONLINE 15% OFF
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )}

export default Banner;



  

   
