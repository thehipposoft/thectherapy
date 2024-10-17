import React from 'react';
import Image from 'next/image';

const PopUp = () => {
    return (
        <div className='h-screen bg-[#000000] bg-opacity-70 flex justify-center items-center'>
            <div className='md:w-[50vw] w-[85vw] h-[60vh] relative'>
                <Image src={'/assets/images/commons/popup.webp'} alt='' fill className='object-cover' />
                <div className='relative z-10 bg-[#CDCBC0] bg-opacity-80 h-full'>
                    <div className='p-12 flex flex-col items-center'>
                        <button className='flex justify-end w-full'>
                            <svg className='scale-110' width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.46 7 14 12.54V14h-1.46L7 8.46 1.46 14H0v-1.46L5.54 7 0 1.46V0h1.46L7 5.54 12.54 0H14v1.46L8.46 7Z" fill="#6E6460"/></svg>
                        </button>
                        <div className='flex flex-col gap-4 p-12'>
                            <h3 className='text-2xl'>Get my first visit Voucher</h3>
                            <form action="" className='flex flex-col gap-4 md:w-[30vw] w-[60vw]'>
                                <label htmlFor="name">
                                    <input 
                                        type="text" 
                                        name='name' 
                                        id='name' 
                                        placeholder='Your Name' 
                                        className='w-full py-6 px-8 bg-[#FAFAFA] border-[#CDCBC0] border focus-visible:bg-[#F4F5F0] focus-visible:border-[#585858] outline-none'
                                    />
                                </label>
                                <label htmlFor="email">
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        placeholder='Email Adress'
                                        className='w-full py-6 px-8 bg-[#FAFAFA] border-[#CDCBC0] border focus-visible:bg-[#F4F5F0] focus-visible:border-[#585858] outline-none'
                                    />
                                </label>
                                <div className='flex w-full'>
                                    <label htmlFor="" className='flex group bg-[#FFFFFF] hover:bg-[#ffffff37] duration-500 bg-opacity-60 py-6 px-8 border-[#CDCBC0] border justify-between w-[210px] cursor-pointer focus-visible:border-[#585858] outline-none'>
                                        <input type="submit" value="Send" className='group-hover:text-[#FFFFFF] duration-500' />
                                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#333" className='group-hover:stroke-[#FFFFFF] duration-500'><path d="M3.75 12h16.5M13.5 5.25 20.25 12l-6.75 6.75"/></g></svg>
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PopUp;