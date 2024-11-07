import Image from 'next/image';
import Link from "next/link"
import React from 'react';

const SkinConsultation = () => {
    return (
        <div className='relative flex justify-center items-center py-24'>
            <Image src={'/assets/images/firstTimeSection.webp'} alt='Texture background' fill className='object-cover' />
            <div className='md:w-[80vw] mx-auto flex flex-col relative z-10'>
                <div className='flex flex-col w-[85vw] mx-auto md:w-auto md:mx-0'>
                    <div className='flex flex-col gap-4 pb-12 md:pb-0'>
                        <h1 className='text-4xl'>Let's Get Glowing</h1>
                        <p className='pt-6'>Choose what suits you better:</p>
                        <p className='pt-6'>SKIN CONSULTATION</p>
                        <p className='pt-2 md:w-3/4'>Skin Treatment Consultation. <br />Start your skincare journey with a personalised boost! In this 30-minute consultation, available in-person at Studio C or online, Carolina will assess your skin, determine your skin biotype, and recommend a custom skincare regimen to help you achieve lasting results at home.</p>
                        <p>The session includes:</p>
                        <ul>
                            <li>• Skin assessment & hydration measurement with BT-analyze</li>
                            <li>• Personalised evaluation of your skin goals</li>
                            <li>• Tailored treatment plan and regimen recommendations for your skin type and needs.</li>
                        </ul>
                        <p>No facial treatments are performed during the consultation day.</p>
                        <p>(Duration: 30 minutes)</p>
                        <Link href={'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?menu=true&offerItems=sv%3A9004885&pId=474146&dppub=true&employeeId=1482022'} target='_blank' rel='noreferrer' className='flex justify-between items-center gap-4 sm:gap-16 border border-nav w-fit px-5 py-4 mt-4 group duration-500'>
                            <p className='text-[#333333] group-hover:underline'>Book your skin treatment consultation</p>
                            <svg className='w-6 h-6 stroke-[#333333] group-hover:translate-x-2 duration-500' fill='none' xmlns="http://www.w3.org/2000/svg"><g className=''><path d="M3.75 12h16.5M13.5 5.25 20.25 12l-6.75 6.75"/></g></svg>
                        </Link>
                    </div>
                    <div className='flex flex-col gap-4 pb-12 md:pb-0 pt-10'>
                        <p className='pt-6'>SKINCARE PRODUCT CONSULTATION</p>
                        <p className='pt-2 md:w-3/4'>Ideal for clients unsure about their skincare needs, this 30-minute appointment focuses on selecting the right products for your skin. Bring your current products if you’re new to TCT, and Carolina will guide you through your options and skincare goals.<br /> No facial treatments are performed on the consultation day. Deposit is redeemable with skincare purchases only.</p>
                        <p>(Duration: 30 minutes)</p>
                        <Link href={'https://www.fresha.com/book-now/the-c-therapy-macid731/services?lid=507601&eid=1482022&oiid=sv%3A19547690&share&pId=474146'} target='_blank' rel='noreferrer' className='flex justify-between items-center gap-4 sm:gap-16 border border-nav w-fit px-5 py-4 mt-4 group duration-500'>
                            <p className='text-[#333333] group-hover:underline'>Book your skincare product consultation</p>
                            <svg className='w-6 h-6 stroke-[#333333] group-hover:translate-x-2 duration-500' fill='none' xmlns="http://www.w3.org/2000/svg"><g className=''><path d="M3.75 12h16.5M13.5 5.25 20.25 12l-6.75 6.75"/></g></svg>
                        </Link>
                    </div>
                    <div className='flex flex-col gap-4 pb-12 md:pb-0 pt-10'>
                        <p className='pt-6'>BODY SCULPTING CONSULTATION</p>
                        <div>
                            <p>Duration: 30 minutes</p>
                            <p>Location: In-person at Studio C</p>
                        </div>
                        <p className='pt-2 md:w-3/4'>For clients interested in body treatments, this consultation will help create a plan to meet your goals, including brightening body areas, back facials, lymphatic drainage, sculpting treatments, and more. Carolina will review your skin, discuss treatment options, and outline pre- and post-care to ensure optimal results.</p>
                        <p>Includes:</p>
                        <ul>
                            <li>• Full body skin assessment</li>
                            <li>• Custom body treatmentplan</li>
                            <li>• Discussion of pre- and post-care steps</li>
                        </ul>
                        <p>Book your consultation today and let’s work together to achieve your skin and body goals!</p>
                        <Link href={'https://www.fresha.com/book-now/the-c-therapy-macid731/services?lid=507601&eid=1482022&oiid=sv%3A19547753&share&pId=474146'} target='_blank' rel='noreferrer' className='flex justify-between items-center gap-4 sm:gap-16 border border-nav w-fit px-5 py-4 mt-4 group duration-500'>
                            <p className='text-[#333333] group-hover:underline'>Book your body sculpting consultation</p>
                            <svg className='w-6 h-6 stroke-[#333333] group-hover:translate-x-2 duration-500' fill='none' xmlns="http://www.w3.org/2000/svg"><g className=''><path d="M3.75 12h16.5M13.5 5.25 20.25 12l-6.75 6.75"/></g></svg>
                        </Link>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='uppercase pt-12'>First visit.</p>
                        <div className='flex flex-col gap-2 md:w-3/4'>
                            <p>Start glow facials 1.</p>
                            <p>If you're new to TCT and not sure what to book in, this service is for you.</p>
                            <p>A 15 min Skin Consultation to fill out a form,and have a quick chat with Carolina while she will asses your skin, create a skincare regimen to meat your skin goals.</p>
                            <p>A customised treatment is included in this booking, designed specifically for your skin concerns, chosen by Carolina on the day.</p>
                        </div>
                        <div className='flex flex-col gap-1 md:w-3/4'>
                            <p>You can choose your preferred facial option:</p>
                            <p>Start to glow 1. Allow 15min (SC) +45 min. (Facial)</p>
                        </div>
                        <Link href={'https://www.fresha.com/book-now/the-c-therapy-macid731/services?lid=507601&eid=1482022&oiid=sv%3A13050313&share&pId=474146'} target='_blank' rel='noreferrer' className='flex justify-around items-center gap-16 border border-nav w-fit px-5 py-4 mt-4 group duration-500'>
                            <p className='text-[#333333] group-hover:underline'>Book here Start Glow 1</p>
                            <svg className='w-6 h-6 stroke-[#333333] group-hover:translate-x-2 duration-500' fill='none' xmlns="http://www.w3.org/2000/svg"><g className=''><path d="M3.75 12h16.5M13.5 5.25 20.25 12l-6.75 6.75"/></g></svg>
                        </Link>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='uppercase pt-12'>First visit.</p>
                        <div className='flex flex-col gap-2 md:w-3/4'>
                            <p>Start glow facials 2.</p>
                            <p>Allow 15min (SC) +75 min. (Facial)</p>
                            <p>This is perfect for a standard/advanced facials with extractions and other modalities.</p>
                        </div>
                        <Link href={'https://www.fresha.com/book-now/the-c-therapy-macid731/services?lid=507601&eid=1482022&oiid=sv%3A19547855&share&pId=474146'} target='_blank' rel='noreferrer' className='flex justify-around items-center gap-16 border border-nav w-fit px-5 py-4 mt-4 group duration-500'>
                            <p className='text-[#333333] group-hover:underline'>Book here Start Glow 2</p>
                            <svg className='w-6 h-6 stroke-[#333333] group-hover:translate-x-2 duration-500' fill='none' xmlns="http://www.w3.org/2000/svg"><g className=''><path d="M3.75 12h16.5M13.5 5.25 20.25 12l-6.75 6.75"/></g></svg>
                        </Link>
                    </div>
                    <p className='uppercase mt-12'>Please note: For better experience, bring your current skincare or photo to<br /> have best customization of your skincare regimen in your skin consultation.</p>
                </div>
            </div>
        </div>
    );
};

export default SkinConsultation;

//<p className='pt-2 md:w-3/4'>Every journey begins with a boost! On your first visit, enjoy a free 15 minute consultation where Carolina will assess your skin and recommend the best treatment plan tailored to your skin type. She will also guide you on a personalized at-home skincare regimen to help you achieve lasting results.</p>
