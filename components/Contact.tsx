import Image from 'next/image';
import React from 'react';

const Contact = () => {
    return (
        <div className='relative flex justify-center items-center py-20 h-[90vh] md:h-auto'>
            <Image src={'/assets/images/contact/contactBg.webp'} alt='' fill />
            <div className='md:w-[1100px] mx-auto flex flex-col relative z-10'>

                <div className='flex justify-between'>
                    <div className='bg-nav h-[400px] w-[500px] hidden md:block'>

                    </div>
                    <div>
                        <form action="" className='flex flex-col gap-6 md:w-[520px] w-[85vw] mx-auto md:mx-0'>
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
                                <label htmlFor="" className='flex bg-[#FAFAFA] py-6 px-8 border-[#CDCBC0] border justify-between w-[210px] cursor-pointer'>
                                    <input type="submit" value="Send" />
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

export default Contact;