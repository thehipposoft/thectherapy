import Image from 'next/image';
import Link from "next/link"
import React from 'react';

const SkinConsultation = () => {
    return (
        <div className='relative flex justify-center items-center py-24'>
            <Image src={'/assets/images/firstTimeSection.webp'} alt='Texture background' fill className='object-cover' />
            <div className='md:w-[80vw] mx-auto flex flex-col relative z-10'>
                <div className='flex flex-col w-[85vw] mx-auto md:w-auto md:mx-0'>
                    <div className='flex flex-col gap-4 '>
                        <h1 className='text-4xl'>Let's Get Glowing</h1>
                        <p className='pt-6'>Choose what suits you better:</p>
                        <div className='flex flex-col gap-6 pb-12 md:pb-0 pt-10'>
                            <p className='pt-6 font-black text-lg'><strong>CONSULTATION (Skin / Product / Body )</strong></p>
                            <p className='pt-2'>Start your self-care journey with a <strong className=''>20-minute personalised consultation</strong>, available in-studio at <strong>The C Therapy</strong> or online.</p>
                            <p>During the session, Carolina will focus <strong>on one area of your choice</strong> – whether you’d like to:</p>
                            <ul className='md:w-3/4 flex flex-col gap-3'>
                                <li>• <strong>Skin Consultation –</strong> complete skin assessment, hydration check & tailored treatment plan.</li>
                                <li>• <strong>Product Consultation –</strong> bring your current skincare or explore new options with personalised recommendations.</li>
                                <li>• <strong>Body Consultation –</strong> discuss your body goals and receive a custom plan for treatments like brightening, sculpting or lymphatic drainage.</li>
                            </ul>
                            <p>Please note: this is a consultation only. No treatments are performed on the day.</p>
                            <p><strong>Duration: 20 minutes</strong></p>
                            <Link href={'https://www.fresha.com/book-now/the-c-therapy-macid731/services?lid=507601&eid=1482022&oiid=sv%3A23984643&share=true&pId=474146'} target='_blank' rel='noreferrer' className='flex justify-between items-center gap-4 sm:gap-16 border border-nav w-fit px-5 py-4 mt-4 group duration-500'>
                                <p className='text-[#333333] group-hover:underline'>Book your consultation</p>
                                <svg className='w-8 md:w-6 h-6 stroke-[#333333] group-hover:translate-x-2 duration-500' fill='none' xmlns="http://www.w3.org/2000/svg"><g className=''><path d="M3.75 12h16.5M13.5 5.25 20.25 12l-6.75 6.75"/></g></svg>
                            </Link>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6 md:mt-8'>
                        <p className='uppercase pt-12 text-lg'><strong>Consultation + First time facial.</strong></p>
                        <div className='flex flex-col gap-4 md:w-3/4'>
                            <p>If you’re new to The C Therapy, this 45-minute session is the perfect way to begin your journey.</p>
                            <p>The appointment includes a personalised consultation where Carolina will assess your skin, review your current routine if you wish to bring it along, and design a customised treatment plan tailored to your unique needs.</p>
                            <p>A tailored facial is then performed on the same day, chosen by Carolina to target your specific skin concerns and help you achieve visible results from the very first visit.</p>
                        </div>
                        <p><strong>Duration: 45 minutes</strong></p>
                        <Link href={'https://www.fresha.com/book-now/the-c-therapy-macid731/services?lid=507601&eid=1482022&oiid=sv%3A23984628&share=true&pId=474146'} target='_blank' rel='noreferrer' className='flex justify-around items-center gap-16 border border-nav w-fit px-5 py-4 mt-4 group duration-500'>
                            <p className='text-[#333333] group-hover:underline'>Book first consultation + facial</p>
                            <svg className='w-8 md:w-6 h-6 stroke-[#333333] group-hover:translate-x-2 duration-500' fill='none' xmlns="http://www.w3.org/2000/svg"><g className=''><path d="M3.75 12h16.5M13.5 5.25 20.25 12l-6.75 6.75"/></g></svg>
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
