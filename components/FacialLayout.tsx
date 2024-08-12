import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FacialLayout = ({props} :any) => {

    return (
        <div className='flex flex-col'>
            <div className='h-[80vh] relative bg-[#363636]'>
                <Image src={props.image} alt='' fill />
                <div className='flex flex-col relative z-10 w-[1300px] mx-auto gap-2 top-[75%]'>
                    <p>Facials</p>
                    <h2 className='text-4xl uppercase text-[#333333]'>{props.title}</h2>
                </div>
            </div>
            <div className='h-[500px] flex justify-center items-center'>
                <p className='md:w-[600px] text-center'>{props.text}</p>
            </div>
            <div className='bg-nav'>
                {
                    props.sections.map((value:any, index:any) => {
                        (
                            <div key={index} className='flex md:h-[600px]'>
                                <div className='md:w-[50vw] relative'>
                                    <Image src={'/assets/images/facials/facials-1.webp'} alt='' />
                                </div>
                                <div className='md:w-[50vw]'>
                                    <p className='flex flex-col gap-4'>
                                        <h3>{value.title}</h3>
                                        {value.paragraphs}
                                        <Link href={'/'} className='flex justify-between items-center gap-20 border border-nav w-fit px-5 py-4 '>
                                            <p className='text-[#333333] duration-300 group-hover:text-nav'>Book an appointment</p>zz
                                            <svg className='w-6 h-6 stroke-[#FFFFFF] group-hover:stroke-nav duration-300' fill='none' xmlns="http://www.w3.org/2000/svg"><g className=''><path d="M3.75 12h16.5M13.5 5.25 20.25 12l-6.75 6.75"/></g></svg>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default FacialLayout;