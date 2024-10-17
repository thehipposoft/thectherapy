import Image from 'next/image';
import React from 'react';

const Contact = () => {
    return (
        <div className='relative flex justify-center items-center py-20 md:h-auto'>
            <Image src={'/assets/images/contact/contactBg.webp'} alt='Texture Background' fill />
            <div className='md:w-[1100px] mx-auto flex flex-col relative z-10'>
                <p>Feeling good inside and out is possible.</p>
                <h1 className='text-4xl'>Let's start to glow</h1>
                <div className='flex md:flex-row flex-col-reverse justify-between pt-6'>
                    <div className='md:h-[450px] h-[300px] md:w-[525px] w-[85vw] mt-12 md:mt-0'>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21525.36186154748!2d144.97067559214267!3d-37.85258557435342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6681617a48907%3A0xc9b711cc74badbef!2sK3%20High%20St%2C%20Windsor%20VIC%203181%2C%20Australia!5e0!3m2!1ses-419!2sus!4v1729187488924!5m2!1ses-419!2sus" 
                            className='w-full h-full'
                            style={{border: '0'}} 
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        >
                        </iframe>
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
                                <label htmlFor="" className='group hover:border-[#333333] duration-500 flex bg-[#FAFAFA] py-6 px-8 border-[#CDCBC0] border justify-between w-[210px] cursor-pointer'>
                                    <input className='group-hover:underline' type="submit" value="Send" />
                                    <svg className='group-hover:translate-x-2 duration-500' width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#333"><path d="M3.75 12h16.5M13.5 5.25 20.25 12l-6.75 6.75"/></g></svg>
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