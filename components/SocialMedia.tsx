import React from 'react';

const SocialMedia = () => {
    return (
        <div className='bg-[rgb(244,245,240)] flex flex-col py-12'>
            <div className='md:w-[900px] mx-auto flex flex-col gap-6 py-12'>
                <p className='text-3xl text-center'>OUR SOCIAL MEDIA</p>
                <div className='md:grid hidden grid-cols-3 grid-rows-2 gap-4'>
                    <div className='w-[280px] h-[280px] bg-nav'></div>
                    <div className='w-[280px] h-[280px] bg-nav'></div>
                    <div className='w-[280px] h-[280px] bg-nav'></div>
                    <div className='w-[280px] h-[280px] bg-nav'></div>
                    <div className='w-[280px] h-[280px] bg-nav'></div>
                    <div className='w-[280px] h-[280px] bg-nav'></div>
                </div>
            </div>
            <div className='flex justify-end'>
                <div className='bg-[#E4DFD7] py-8 w-[600px]'>

                </div>
            </div>
        </div>
    );
};

export default SocialMedia;