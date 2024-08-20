import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About = ({ aboutPage }:any) => {
    return (
        <div className='my-20 flex items-center' >
            <div 
                className='h-[100vh] flex items-center'
                style={{
                    backgroundImage: 'url(/assets/images/about/background-1.webp)',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className='flex md:flex-row flex-col justify-between md:w-[1150px] md:pl-28 gap-12'>
                    <div className='md:w-[525px] md:h-[435px] relative z-10'>
                        <Image fill alt='Caro picture' src={'/assets/images/about/about.webp'} className='object-cover'/>
                    </div>
                    <div className='flex flex-col justify-center gap-6'>
                        <p className='text-sm'>the.c.therapy studio</p>
                        <h2 className='text-4xl'>Hi!, I'm Caro...</h2>
                        {
                            aboutPage ?
                            <div className='flex flex-col gap-6'>
                                <div className={`flex flex-col gap-1 text-[#333333]`}>
                                    <p className='md:w-[420px]'>Hey there! I’m Carolina, the friendly face behind @the .c.therapy. As an Argentinean native who’s found her home in Melbourne for over 5 years now, I’m thrilled to share my journey with you.</p>
                                </div>
                            </div>
                            :
                            <div className='flex flex-col gap-6'>
                                <div className={`flex flex-col gap-1 text-[#333333]`}>
                                    <p>Hey there! I’m Carolina, the friendly face behind</p>
                                    <p>the .c.therapy.</p>
                                    <p>I’m thrilled to share my journey with you.</p>
                                </div>
                                <Link href={'/about'} className='flex justify-between items-center gap-6 border border-[#CDCBC0] w-fit px-5 py-4 bg-[#ffffff2a]'>
                                    <p>Read More</p>
                                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#333"><path d="M3.75 12h16.5M13.5 5.25 20.25 12l-6.75 6.75"/></g></svg>
                                </Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;