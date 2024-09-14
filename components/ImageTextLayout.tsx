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
                                <Image src={val.image} alt='' fill className='object-cover' />
                            </div>
                            <div className='md:w-[50vw] bg-[#F5F5F5] flex flex-col justify-center items-center py-12'>
                                <div className='flex flex-col gap-6 w-9/12 mx-auto'>
                                    <h3 className='text-[30px]'>{val.title}</h3>
                                    {val.paragraphs}
                                    <Link href={val.href} className='flex justify-between items-center gap-20 border border-nav w-fit px-5 py-4 mt-8'>
                                        <p className='text-[#333333]'>Book an appointment</p>
                                        <svg className='w-6 h-6 stroke-[#333333]' fill='none' xmlns="http://www.w3.org/2000/svg"><g className=''><path d="M3.75 12h16.5M13.5 5.25 20.25 12l-6.75 6.75"/></g></svg>
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