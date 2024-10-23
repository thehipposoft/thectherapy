import React from 'react';
import Image from 'next/image';
import AnchorLink from './commons/AnchorLink';

const BACKGROUNDS = [
    {
        src: '/assets/images/banner/banner-1.webp',
        alt: 'Carolina Working in the Studio'
    },
    {
        src: '/assets/images/banner/banner-2.webp',
        alt: 'Woman reciving facial treatment'
    },
    {
        src: '/assets/images/banner/banner-3.webp',
        alt: 'Creams and products for Facial care'
    }
]

const BannerSlick = () => {

    return (
        <div className='h-[95vh] relative'>
            <div className='images-container absolute overflow-hidden h-full w-full'>
                {
                    BACKGROUNDS.map((val, index) => (
                        <Image 
                            src={val.src} 
                            alt={val.alt} 
                            key={index} 
                            fill 
                            className={`opacity-0 object-cover first:opacity-100`}
                        />
                    ))
                }
            </div>
            <div className='absolute w-full h-full left-0 top-0 bg-gradient-to-r to-[#87807D05] from-[#6E646077]' />
            <div className='max-w-[1300px] w-[75vw] md:w-auto mx-auto relative z-10 flex h-full items-center'>
                <div className='flex flex-col justify-center gap-6 md:w-[395px]'>
                    <p className='text-sm text-[#FFFFFF]'>Let's uncover the radiant, confident you that's been waiting to shine.</p>
                    <h3 className='text-4xl text-[#FFFFFF]'>Empower your natural beauty</h3>
                    <p className='text-[#FFFFFF]'>A combination of nature and advanced technology. The c therapy will guide you on your journey to the best version of yourself.</p>
                    <AnchorLink href={'#facial-care'}>
                        <div className='group flex justify-between items-center gap-4 border border-[#FFFFFF] hover:border-[#000000] duration-700 w-fit px-5 py-4 bg-[#ffffff0e]'>
                            <p className='text-[#FFFFFF] group-hover:text-[#000000] duration-700 text-sm'>Find your treatment</p>
                            <svg className='overflow-visible' width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#fff" className='group-hover:stroke-[#000000] group-hover:translate-x-2 duration-700' ><path d="M3.75 12h16.5M13.5 5.25 20.25 12l-6.75 6.75"/></g></svg>
                        </div>
                    </AnchorLink>
                </div>
            </div>
        </div>
    );
};

export default BannerSlick;
