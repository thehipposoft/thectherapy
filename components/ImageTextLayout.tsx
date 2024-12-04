import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ImageTextLayout = ({data}:any) => {
    return (
        <div className='flex flex-col'>
            {
                data.map((val:any, index:any) => {
                    return(
                        <div key={index} className='flex md:flex-row flex-col md:min-h-[600px] md:even:flex-row-reverse'>
                            <div className='md:w-[50vw] w-[100vw] md:min-h-[600px] md:h-auto h-[300px] relative'>
                                <div className='absolute left-0 top-0 w-full h-full bg-[#ffffff36] z-10' />
                                <Image 
                                    src={val.image}
                                    alt={val.title} 
                                    fill 
                                    sizes="(max-width: 1300px) 100vw, 50vw"
                                    className={`object-cover ${val.imagePosition} `}
                                />
                            </div>
                            <div className='md:w-[50vw] bg-[#F5F5F5] flex flex-col justify-center items-center py-12'>
                                <div className='flex flex-col gap-6 w-9/12 mx-auto'>
                                    <h3 className='text-[30px]'>{val.title}</h3>
                                    {val.paragraphs}
                                    <Link href={val.href} target='_blank' rel='noreferrer' className='flex justify-between items-center gap-20 border border-nav w-fit px-5 py-4 mt-8 group duration-500'>
                                        <p className='text-[#333333] group-hover:underline'>Book an appointment</p>
                                        <svg className='lg:w-6 w-8 lg:h-6 h-8 stroke-[#333333] group-hover:translate-x-2 duration-500 self-center' fill='none' xmlns="http://www.w3.org/2000/svg"><g className=''><path d="M3.75 12h16.5M13.5 5.25 20.25 12l-6.75 6.75"/></g></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ImageTextLayout;