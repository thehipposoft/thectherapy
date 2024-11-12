import React from 'react';
import Link from 'next/link';

const FacialCareBanner = () => {
    return (
        <div className='md:h-[500px] 2xl:h-[600px] h-[600px] flex items-center justify-center z-10 relative' id='facial-care'>
            <div className='md:w-[90vw] w-[75vw] mx-auto flex flex-col gap-4'>
                <p>Start glowing with us.</p>
                <h2 className='text-3xl'>Supreme facial care</h2>
                <p className=' md:w-3/4 lg:w-1/2 2xl:w-5/12'>When it comes to skin and what of all the facials alternative to choose it could be a bit confusing and is natural to be unsure. Specially. If you are a new client to visit the.c.therapy. 
                    So we recommend you to start with a skin consultation as is the most important part of every treatment to discuss your skin needs and Carolina will advise you on that day the best options whether you need help on your skincare or what facial is right for you.
                </p>
                <Link href={'/skin-consultation'} className='flex group justify-between items-center gap-6 border border-[#CDCBC0] hover:border-nav duration-500 w-fit px-5 py-4 bg-[#ffffff2a]'>
                    <p className='group-hover:underline duration-500'>New at TCT? Start here!</p>
                    <svg className='group-hover:translate-x-2 duration-700' width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#333"><path d="M3.75 12h16.5M13.5 5.25 20.25 12l-6.75 6.75"/></g></svg>
                </Link>
            </div>
        </div>
    );
};

export default FacialCareBanner;