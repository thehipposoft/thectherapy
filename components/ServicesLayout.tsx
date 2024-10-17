import React from 'react';
import Image from 'next/image';

const ServicesLayout = ({props} :any) => {

    return (
        <div className='flex flex-col'>
            <div className='md:h-[560px] h-[400px] relative bg-[#363636]'>
                <div className='absolute w-full h-full bg-[#6e64604d] z-10'/>
                <Image src={props.image} alt={props.title} fill  className='object-cover object-[35%] md:object-center'/>
                <div className='flex flex-col relative z-10 md:w-[1300px] w-[75vw] mx-auto gap-2 top-[70%]'>
                    <p className={`text-[${props.textColor}]`}>{props.category}</p>
                    <h2 className={`text-4xl uppercase text-[${props.textColor}]`}>{props.title}</h2>
                </div>
            </div>
            <div className='md:h-[500px] h-[400px] bg-[#F4F5F0] flex justify-center items-center'>
                <p className='md:w-[600px] w-[75vw] text-center vogue-2'>{props.text}</p>
            </div>
        </div>
    );
};

export default ServicesLayout;