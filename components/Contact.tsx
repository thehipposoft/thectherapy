import Image from 'next/image';
import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div className='relative flex justify-center items-center py-20 md:h-auto '>
            <Image src={'/assets/images/contact/contactBg.webp'} alt='Texture Background' fill />
            <div className='md:w-[75vw] w-[90vw] mx-auto flex flex-col relative z-10 md:mt-0 mt-8'>
                <p>Feeling good inside and out is possible.</p>
                <h1 className='text-4xl'>Let's start to glow</h1>
                <div className='flex md:flex-row flex-col-reverse justify-between pt-6'>
                    <div className='md:h-[450px] h-[300px] md:w-[525px] w-[90vw] mt-12 md:mt-0'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21525.36186154748!2d144.97067559214267!3d-37.85258557435342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6681617a48907%3A0xc9b711cc74badbef!2sK3%20High%20St%2C%20Windsor%20VIC%203181%2C%20Australia!5e0!3m2!1ses-419!2sus!4v1729187488924!5m2!1ses-419!2sus"
                            className='md:w-[35vw] w-[90vw] h-full'
                            style={{border: '0'}}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        >
                        </iframe>
                    </div>
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;