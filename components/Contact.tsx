import Image from 'next/image';
import React from 'react';
import ContactForm from './ContactForm';
import Link from 'next/link';

const Contact = () => {
    return (
        <div className='relative flex justify-center items-center py-20 md:h-[80vh] lg:h-auto'>
            <Image src={'/assets/images/contact/contactBg.webp'} alt='Texture Background' fill />
            <div className='lg:w-[75vw] w-[90vw] mx-auto flex flex-col relative z-10 md:mt-0 mt-8'>
                <p>Feeling good inside and out is possible.</p>
                <h1 className='text-4xl'>Let's start to glow</h1>
                <div className='flex md:flex-row flex-col-reverse justify-between pt-6'>
                    <div className='md:h-[450px] h-[300px] md:w-[525px] w-[90vw] sm:mt-12 md:mt-0'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21525.36186154748!2d144.97067559214267!3d-37.85258557435342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6681617a48907%3A0xc9b711cc74badbef!2sK3%20High%20St%2C%20Windsor%20VIC%203181%2C%20Australia!5e0!3m2!1ses-419!2sus!4v1729187488924!5m2!1ses-419!2sus&output=svembed"
                            className='lg:w-[35vw] md:w-[45vw] w-[90vw] h-full'
                            style={{border: '0'}}
                            allowFullScreen={true}
                            loading="lazy"
                        >
                        </iframe>
                    </div>
                    <div>
                        <ContactForm />
                    </div>
                </div>
                <div className='flex justify-end w-full mt-8 sm:mt-0'>
                    <Link href={'https://wa.link/8pvodq'} target='_blank' rel='noreferrer' className='group'>
                        <svg width="50" height="50" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.0794141 9.88335C0.0788945 11.5372 0.514336 13.1516 1.34217 14.5747L0 19.4372L5.01504 18.1324C6.39684 18.88 7.95261 19.2741 9.5357 19.2747H9.53978C14.7535 19.2747 18.9978 15.0647 19 9.89086C19.0009 7.38345 18.0176 5.02561 16.2316 3.25191C14.4454 1.47843 12.0704 0.501031 9.53978 0.5C4.32517 0.5 0.0814922 4.70946 0.0794141 9.88335ZM3.06598 14.3296L2.87872 14.0347C2.09156 12.7928 1.67608 11.3576 1.67668 9.88394C1.67838 5.58353 5.20555 2.08481 9.54275 2.08481C11.6431 2.08569 13.6171 2.89812 15.1017 4.37217C16.5863 5.84636 17.4033 7.80602 17.4027 9.89027C17.4008 14.1907 13.8736 17.6898 9.53978 17.6898H9.53666C8.12554 17.6891 6.74159 17.3131 5.53464 16.6025L5.24741 16.4335L2.27139 17.2077L3.06598 14.3296V14.3296Z" className='group-hover:fill-nav duration-300' fill="#595959"/>
                            <path d="M7.17533 5.96052C6.99824 5.56999 6.81188 5.56211 6.64348 5.55526C6.50558 5.54937 6.34794 5.54981 6.19044 5.54981C6.0328 5.54981 5.77667 5.60865 5.56018 5.84321C5.34346 6.07798 4.73279 6.64533 4.73279 7.79925C4.73279 8.95324 5.57985 10.0684 5.69793 10.2251C5.81616 10.3814 7.33319 12.8252 9.7358 13.7653C11.7326 14.5466 12.1389 14.3912 12.5723 14.352C13.0057 14.313 13.9709 13.7848 14.1678 13.2372C14.3648 12.6895 14.3648 12.2201 14.3057 12.122C14.2467 12.0243 14.089 11.9656 13.8526 11.8484C13.6162 11.7311 12.4541 11.1636 12.2374 11.0854C12.0207 11.0072 11.8631 10.9681 11.7055 11.203C11.5479 11.4375 11.0952 11.9656 10.9572 12.122C10.8194 12.2788 10.6814 12.2983 10.4451 12.181C10.2086 12.0634 9.44731 11.816 8.54414 11.017C7.84144 10.3953 7.36703 9.62759 7.22914 9.39275C7.09124 9.15827 7.21437 9.03116 7.33289 8.91429C7.4391 8.8092 7.56935 8.64041 7.68766 8.5035C7.80552 8.36653 7.84485 8.2688 7.92368 8.11238C8.00257 7.95582 7.96309 7.81884 7.90408 7.70153C7.84485 7.58421 7.38551 6.42425 7.17533 5.96052Z" className='group-hover:fill-nav duration-300' fill="#6E6460"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;