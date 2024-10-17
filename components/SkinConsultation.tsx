import Image from 'next/image';
import Link from "next/link"
import React from 'react';

const SkinConsultation = () => {
    return (
        <div className='relative flex justify-center items-center py-20'>
            <Image src={'/assets/images/firstTimeSection.webp'} alt='Texture background' fill className='object-cover md:object-fill' />
            <div className='md:w-[1100px] mx-auto flex flex-col relative z-10'>
                <div className='flex flex-col w-[85vw] mx-auto md:w-auto md:mx-0'>
                    <div className='flex flex-col gap-2 pb-12 md:pb-0'>
                        <h1 className='text-4xl'>Let's Get Glowing</h1>
                        <p className='text-sm pt-6'>Skin Consultation</p>
                        <p className='pt-2 md:w-3/4'>Every journey begins with a boost! On your first visit, enjoy a free 15 minute consultation where Carolina will assess your skin and recommend the best treatment plan tailored to your skin type. She will also guide you on a personalized at-home skincare regimen to help you achieve lasting results.</p>
                        <Link href={'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?menu=true&offerItems=sv%3A13050313&dppub=true&employeeId=1482022&pId=474146'} target='_blank' rel='noreferrer' className='flex justify-between items-center gap-16 border border-nav w-fit px-5 py-4 mt-4 group duration-500'>
                            <p className='text-[#333333] group-hover:underline'>Book an appointment</p>
                            <svg className='w-6 h-6 stroke-[#333333] group-hover:translate-x-2 duration-500' fill='none' xmlns="http://www.w3.org/2000/svg"><g className=''><path d="M3.75 12h16.5M13.5 5.25 20.25 12l-6.75 6.75"/></g></svg>
                        </Link>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm pt-12'>First visit</p>
                        <p className='pt-2 md:w-3/4'>If you're new to TCT and not sure what to book in, this service is for you.</p>
                        <p className=' md:w-3/4'>15/30min  Skin Consultation to fill out a form and have a quick chat with Carolina.</p>
                        <p className=' md:w-3/4'>A customised treatment is included in this booking, designed specifically for your skin concerns, chosen by Carolina on the day. </p>
                        <p className='pt-2 md:w-3/4'>You can choose your preferred facial option:</p>
                        <p>START TO GLOW 1. Allow 15min (SC) +45 min. (Facial)</p>
                        <p>START TO GLOW 2. Allow 15min (SC) +75 min. (Facial)</p>
                        <p className='md:w-3/4 pt-4'>Please note: When you are about to book your session, DO NOT add on any additional services, as you will be advised for your skin therapist if need it (be aware that extra time might be required  for extra services). Please Contact us if you have questions.</p>
                        <Link href={'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?menu=true&offerItems=sv%3A13050478&dppub=true&employeeId=1482022&pId=474146'} target='_blank' rel='noreferrer' className='flex justify-around items-center gap-16 border border-nav w-fit px-5 py-4 mt-12 group duration-500'>
                            <p className='text-[#333333] group-hover:underline'>New at TCT? Start Here!</p>
                            <svg className='w-6 h-6 stroke-[#333333] group-hover:translate-x-2 duration-500' fill='none' xmlns="http://www.w3.org/2000/svg"><g className=''><path d="M3.75 12h16.5M13.5 5.25 20.25 12l-6.75 6.75"/></g></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkinConsultation;