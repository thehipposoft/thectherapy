import Image from 'next/image';
import React from 'react';

const VoucherForm = () => {
    return (
        <div className='relative flex justify-center items-center py-20'>
            <Image src={'/assets/images/contact/contactBg.webp'} alt='' fill />
            <div className='md:w-[1100px] mx-auto flex flex-col relative z-10'>
                <div className='flex md:flex-row flex-col justify-between w-[85vw] mx-auto md:w-auto md:mx-0'>
                    <div className='flex flex-col gap-2 pb-12 md:pb-0'>
                        <p>Feel good inside and out its possible.</p>
                        <h1 className='text-4xl'>Let's start to glow</h1>
                        <p className='pt-4 md:w-[80%]'>Every start is better with a boost, that's why on your first visit we give you a free 15 minute consultation and for Carolina to advise you with the best option according to your skin type and a treatment plan and skincare regimen at home.</p>
                    </div>
                    <div>
                        <form action="" className='flex flex-col gap-6 md:w-[620px]'>
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
                            <label htmlFor="message">
                                <textarea 
                                    name="message" 
                                    id="message" 
                                    cols={30} 
                                    rows={5} 
                                    placeholder='Your Message'
                                    className='w-full resize-none py-6 px-8 bg-[#FAFAFA] border-[#CDCBC0] border focus-visible:bg-[#F4F5F0] focus-visible:border-[#585858] outline-none'
                                >
                                </textarea>
                            </label>
                            <div className='flex w-full justify-end'>
                                <label htmlFor="" className='flex bg-[#FAFAFA] py-6 px-8 border-[#CDCBC0] border justify-between w-[310px] cursor-pointer focus-visible:border-[#585858] outline-none'>
                                    <input type="submit" value="Get my voucher" />
                                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#333"><path d="M3.75 12h16.5M13.5 5.25 20.25 12l-6.75 6.75"/></g></svg>
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VoucherForm;