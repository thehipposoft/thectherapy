import React from 'react';
import BannerSlick from './BannerSlick';

const Banner = () => {

    /* const LoopText = useRef(null)
    const LoopTextTwo = useRef(null)
    let xPercent = 0;
    let direction = -1; */

    /*ANIMACION TEXTO SCROLLING  useGSAP(() => {
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

    }, []); */

    return (
        <div>
            <BannerSlick />
        </div> 
    )}

export default Banner;


/* BLACK FRIDAY PROMOTIONS: 
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

    */
