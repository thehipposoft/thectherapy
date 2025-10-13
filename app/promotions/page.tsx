'use client'
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

export default function PromotionsPage() {

    const container = useRef(null)

    useGSAP(()=> {
        gsap.from('.title', {
            opacity: 0,
            yPercent: 20,
            ease: 'power2.inOut',
            duration: 1,
        })
        gsap.from('.content', {
            opacity: 0,
            y: 20,
            ease: 'power2.inOut',
            duration: 1,
            delay: .5,
        })
    }, {scope: container})

    return (
        <div ref={container} className="flex flex-col md:w-[800px] w-screen mx-auto relative z-20">
            <div>
                <h1 className="title uppercase garet text-center md:text-6xl text-5xl md:py-8 pt-28 pb-4">promotions</h1>
            </div>
{/*             <div className="w-full flex flex-col text-center gap-4 h-[400px] items-center justify-center">
                <p>There's nothing to see here right now...</p>
                <p>We'll be back with new promotions soon!</p>
            </div> */}
  {/*           <div ref={container} className="flex flex-col gap-16 ">
                 <Image src={'/assets/images/promotions/promo-1.png'} width={1280} height={1600} alt="" className="md:w-4/6 mx-auto image__one" />
                 <p className="text__one arimo-bold text-nav text-center text-xl italic md:w-5/6 mx-auto">This May, we celebrate four years of skin transformation, holistic beauty, and soulful rituals — all thanks to you.</p>
                 <Image src={'/assets/images/promotions/promo-2.png'} width={1280} height={1600} alt="" className="md:w-4/6 mx-auto image__two" />
                 <div className="container flex flex-col gap-6 pb-16 px-4 md:px-0">
                    <p className="element text-lg text-center md:text-left">Join us for 4 days only and enjoy:</p>
                    <p className="element mx-auto text-lg text-center md:text-left">22% OFF all facials, body treatments, and holistic skin rituals.</p>
                    <p className="element arimo-bold text-nav text-center w-5/6 mx-auto text-lg md:text-left">[Book your discounted appointment for any date until 5 June, 2025]</p>
                    <p className="element mx-auto text-lg text-center md:text-left"><strong className="arimo-bold">Bonus:</strong> A <strong className="arimo-bold">free LED add-on or compression boots </strong>with treatments over <strong className="arimo-bold">$222</strong></p>
                    <p className="element mx-auto text-lg text-center md:text-left">22% OFF our curated skincare collection online and in-studio.</p>
                    <p className="element mx-auto text-lg text-center md:text-left"><strong className="arimo-bold">Bonus:</strong> A <strong className="arimo-bold">full-size SPF gift</strong> with product orders over <strong className="arimo-bold">$222</strong></p>
                    <p className="element mx-auto text-xl pt-12 text-center md:text-left">Use code: <strong className="arimo-bold">TCTURNS4</strong> at checkout</p>
                    <h4 className="mx-auto text-xl pt-6">Offer Valid  until May 14-17</h4>
                    <div className="flex gap-8 justify-center">
                        <Link href={'https://www.fresha.com/book-now/the-c-therapy-macid731/services?lid=507601&eid=1482022&share&pId=474146'} target="_blank" className='group mt-4 flex justify-between items-center gap-4 border border-[#000000] duration-700 w-fit md:px-5 px-2 py-4 bg-[#ffffff0e]'>
                            <p className='text-[#000000] duration-700  group-hover:underline'>Book your ritual</p>
                        </Link>
                        <Link href={'https://store.thectherapy.com.au/shop/'} target="_blank" className='group mt-4 flex justify-between items-center gap-4 border border-[#000000] duration-700 w-fit md:px-5 px-2 py-4 bg-[#ffffff0e]'>
                            <p className='text-[#000000] duration-700  group-hover:underline'>Shop the glow</p>
                        </Link>
                    </div>
                 </div>
            </div> */}
            <div  className="content flex flex-col ">
                <Image src={'/assets/images/promotions/promoh.png'} width={1280} height={1172} alt="" />
                <Image src={'/assets/images/promotions/promoh2.png'} width={1280} height={837} alt="" />
                <div className="flex justify-center items-center h-20 md:mb-12 mb-6">
                    <Link href={'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?menu=true&offerItems=sv%3A13076180&pId=474146&dppub=true&employeeId=1482022'} target='_blank'className="flex md:gap-4 gap-2 bg-[#383838] arimo-bold md:tracking-widest shadow-lg md:px-12 px-4 py-3 rounded-3xl text-[#FFFFFF] hover:scale-105 duration-500 hover:underline">
                            <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3.5V2M5.06066 5.06066 4 4m1.06066 9L4 14.0607m9-9.00004L14.0607 4M3.5 9H2m6.5-.5 4.1111 12.7778L15.5 18.3889 19.1111 22 22 19.1111 18.3889 15.5l2.8889-2.8889L8.5 8.5Z" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            BOOK HERE
                    </Link>
                </div>
                <Image src={'/assets/images/promotions/promoh3.png'} width={1280} height={837} alt="" />
                <div className="flex justify-center items-center h-20 md:mb-12 mb-6">
                    <Link href={'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?menu=true&offerItems=sv%3A10264566&pId=474146&dppub=true&employeeId=1482022&cartId=4c513ea8-855f-40a9-8b9b-a67806c117de6'} target='_blank'className="flex md:gap-4 gap-2 bg-[#383838] arimo-bold md:tracking-widest shadow-lg md:px-12 px-4 py-3 rounded-3xl text-[#FFFFFF] hover:scale-105 duration-500 hover:underline">
                            <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3.5V2M5.06066 5.06066 4 4m1.06066 9L4 14.0607m9-9.00004L14.0607 4M3.5 9H2m6.5-.5 4.1111 12.7778L15.5 18.3889 19.1111 22 22 19.1111 18.3889 15.5l2.8889-2.8889L8.5 8.5Z" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            BOOK HERE
                    </Link>
                </div>
                <Image src={'/assets/images/promotions/promoh4.png'} width={1280} height={837} alt="" />
                <div className="flex justify-center items-center h-20 md:mb-12 mb-6">
                    <Link href={'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?menu=true&offerItems=sv%3A23219068&pId=474146&dppub=true&employeeId=1482022&cartId=7e66a570-18c1-4ec5-96fc-0c13a123c4c7'} target='_blank'className="flex md:gap-4 gap-2 bg-[#383838] arimo-bold md:tracking-widest shadow-lg md:px-12 px-4 py-3 rounded-3xl text-[#FFFFFF] hover:scale-105 duration-500 hover:underline">
                            <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3.5V2M5.06066 5.06066 4 4m1.06066 9L4 14.0607m9-9.00004L14.0607 4M3.5 9H2m6.5-.5 4.1111 12.7778L15.5 18.3889 19.1111 22 22 19.1111 18.3889 15.5l2.8889-2.8889L8.5 8.5Z" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            BOOK HERE
                    </Link>
                </div>
{/*                 <Image src={'/assets/images/promotions/4.png'} width={1280} height={954} alt="" />
                <div className="flex flex-col gap-8 justify-center items-center h-48 my-4">
                    <h2 className="uppercase md:text-xl text-xl text-center text-nav arimo-bold tracking-wider">Book a free consultation if you think this is right for you, Contact us Today if you have questions!</h2>
                    <div className="flex md:gap-8 gap-4">
                        <Link href={'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?menu=true&offerItems=p%3A1669320&pId=474146&dppub=true&employeeId=1482022&cartId=f5a05f29-fde0-48a4-bb8c-88a69ffb1600'} target='_blank'className="flex md:gap-4 gap-2 bg-[#383838] arimo-bold md:tracking-widest shadow-lg md:px-12 px-4 py-3 rounded-3xl text-[#FFFFFF] hover:scale-105 duration-500 hover:underline">
                            <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3.5V2M5.06066 5.06066 4 4m1.06066 9L4 14.0607m9-9.00004L14.0607 4M3.5 9H2m6.5-.5 4.1111 12.7778L15.5 18.3889 19.1111 22 22 19.1111 18.3889 15.5l2.8889-2.8889L8.5 8.5Z" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            BOOK ONLINE
                        </Link>
                        <Link href={'https://wa.link/n3wz5p'} target="_blank" className="md:flex hidden md:gap-4 gap-2 bg-[#383838] arimo-bold md:tracking-widest shadow-lg md:px-12 px-4 py-3 rounded-3xl text-[#FFFFFF] hover:scale-105 duration-500 hover:underline">
                            <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF"><path d="M6.014 8.00613c.11427-.90373 1.28877-2.13199 2.22088-1.9957l-.00149-.00149c.90712.17238 1.6252 1.73367 2.03011 2.43571.2869.50937.1006 1.02545-.167 1.24322-.361.29096-.92551.69243-.80707 1.09553C9.5 11.5 12 14 13.2296 14.7107c.4654.269.8029-.4405 1.0911-.804.2094-.2796.7259-.4467 1.2341-.1707.759.442 1.474.9557 2.1352 1.534.3302.276.4077.6839.1789 1.115-.403.7593-1.5686 1.7606-2.4147 1.5571C13.9764 17.5868 8 15.27 6.08033 8.55801c-.10796-.31753-.08078-.43757-.06633-.55188Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 23c-1.2236 0-1.9006-.1313-3-.5l-2.10557 1.0528C5.56462 24.2177 4 23.2507 4 21.7639V19.5c-2.15345-2.008-3-4.3233-3-7.5C1 5.92487 5.92487 1 12 1c6.0751 0 11 4.92487 11 11 0 6.0751-4.9249 11-11 11Zm-6-4.3697-.63605-.5931C3.69087 16.4772 3 14.7331 3 12c0-4.97056 4.02944-9 9-9 4.9706 0 9 4.02944 9 9 0 4.9706-4.0294 9-9 9-.9857 0-1.448-.089-2.36405-.3962l-.78748-.2641L6 21.7639v-3.1336Z"/></g></svg>
                            0450409553
                        </Link>
                    </div>
                </div> */}
            </div>
{/*             <div  className="content flex flex-col md:hidden">
                <Image src={'/assets/images/promotions/0.png'} width={1280} height={1172} alt="" />
                <Image src={'/assets/images/promotions/2-mobile.png'} width={1280} height={1172} alt="" />
                <div className="flex justify-center items-center h-20 my-4">
                    <Link href={'https://www.fresha.com/book-now/the-c-therapy-macid731/services?lid=507601&eid=1482022&oiid=p%3A1669320&share=true&pId=474146'} target='_blank'className="flex md:gap-4 gap-2 bg-[#383838] arimo-bold md:tracking-widest shadow-lg md:px-12 px-8 py-3 rounded-3xl text-[#FFFFFF] hover:scale-105 duration-500 hover:underline">
                            <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3.5V2M5.06066 5.06066 4 4m1.06066 9L4 14.0607m9-9.00004L14.0607 4M3.5 9H2m6.5-.5 4.1111 12.7778L15.5 18.3889 19.1111 22 22 19.1111 18.3889 15.5l2.8889-2.8889L8.5 8.5Z" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            BOOK HERE
                    </Link>
                </div>
                <Image src={'/assets/images/promotions/4.png'} width={1280} height={954} alt="" />
                <div className="flex flex-col gap-8 justify-center items-center h-48 my-8">
                    <h2 className="uppercase text-sm text-center text-nav arimo-bold tracking-wider">Book a free consultation if you think this is right for you, Contact us Today if you have questions!</h2>
                    <div className="flex flex-col gap-6">
                        <Link href={'https://www.fresha.com/book-now/the-c-therapy-macid731/services?lid=507601&eid=1482022&oiid=p%3A1669320&share=true&pId=474146'} target='_blank'className="flex items-center md:gap-4 gap-2 bg-[#383838] arimo-bold md:tracking-widest shadow-lg h-fit px-4 py-2 rounded-3xl text-[#FFFFFF] hover:scale-105 duration-500 hover:underline">
                            <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3.5V2M5.06066 5.06066 4 4m1.06066 9L4 14.0607m9-9.00004L14.0607 4M3.5 9H2m6.5-.5 4.1111 12.7778L15.5 18.3889 19.1111 22 22 19.1111 18.3889 15.5l2.8889-2.8889L8.5 8.5Z" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            BOOK ONLINE
                        </Link>
                        <Link href={'https://wa.link/n3wz5p'} target="_blank" className="flex md:gap-4 items-center justify-center h-fit gap-2 bg-[#383838] arimo-bold md:tracking-widest shadow-lg md:px-12 px-4 py-2 rounded-3xl text-[#FFFFFF] hover:scale-105 duration-500 hover:underline">
                            <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF"><path d="M6.014 8.00613c.11427-.90373 1.28877-2.13199 2.22088-1.9957l-.00149-.00149c.90712.17238 1.6252 1.73367 2.03011 2.43571.2869.50937.1006 1.02545-.167 1.24322-.361.29096-.92551.69243-.80707 1.09553C9.5 11.5 12 14 13.2296 14.7107c.4654.269.8029-.4405 1.0911-.804.2094-.2796.7259-.4467 1.2341-.1707.759.442 1.474.9557 2.1352 1.534.3302.276.4077.6839.1789 1.115-.403.7593-1.5686 1.7606-2.4147 1.5571C13.9764 17.5868 8 15.27 6.08033 8.55801c-.10796-.31753-.08078-.43757-.06633-.55188Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 23c-1.2236 0-1.9006-.1313-3-.5l-2.10557 1.0528C5.56462 24.2177 4 23.2507 4 21.7639V19.5c-2.15345-2.008-3-4.3233-3-7.5C1 5.92487 5.92487 1 12 1c6.0751 0 11 4.92487 11 11 0 6.0751-4.9249 11-11 11Zm-6-4.3697-.63605-.5931C3.69087 16.4772 3 14.7331 3 12c0-4.97056 4.02944-9 9-9 4.9706 0 9 4.02944 9 9 0 4.9706-4.0294 9-9 9-.9857 0-1.448-.089-2.36405-.3962l-.78748-.2641L6 21.7639v-3.1336Z"/></g></svg>
                            0450409553
                        </Link>
                    </div>
                </div>
                <Image src={'/assets/images/promotions/3-mobile.png'} width={1280} height={1172} alt="" />
            </div> */}
        </div>
    );
}