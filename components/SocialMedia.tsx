import React from 'react';

const SocialMedia = () => {
    return (
        <div className='bg-[#f4f5f0] flex-col py-12 hidden'>
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
                <div className='bg-[#E4DFD7] py-8 w-[600px] flex justify-between items-center'>
                    <div className='flex gap-4 pl-6'>
                        <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.382 10.899a5.18 5.18 0 0 0-5.169 5.169 5.18 5.18 0 0 0 5.169 5.168 5.18 5.18 0 0 0 5.169-5.168 5.18 5.18 0 0 0-5.17-5.17Zm15.502 5.169c0-2.14.02-4.262-.1-6.398-.12-2.482-.687-4.685-2.502-6.5-1.818-1.818-4.017-2.38-6.498-2.5-2.14-.12-4.262-.101-6.398-.101-2.14 0-4.262-.02-6.398.1-2.482.12-4.684.687-6.499 2.502C1.67 4.989 1.109 7.188.988 9.67c-.12 2.14-.1 4.261-.1 6.398 0 2.136-.02 4.261.1 6.398.12 2.481.686 4.684 2.501 6.499 1.819 1.818 4.017 2.38 6.499 2.5 2.14.12 4.261.102 6.398.102 2.14 0 4.261.019 6.398-.101 2.481-.12 4.684-.687 6.498-2.501 1.819-1.819 2.381-4.018 2.501-6.5.124-2.136.101-4.257.101-6.397ZM16.382 24.02a7.942 7.942 0 0 1-7.953-7.953 7.942 7.942 0 0 1 7.953-7.953 7.942 7.942 0 0 1 7.953 7.953 7.942 7.942 0 0 1-7.953 7.953ZM24.66 9.646a1.855 1.855 0 0 1-1.857-1.857c0-1.028.83-1.857 1.857-1.857A1.855 1.855 0 0 1 26.377 8.5a1.857 1.857 0 0 1-1.717 1.146Z" fill="#fff"/></svg>
                        <svg width="28" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.307 5.424A7.369 7.369 0 0 1 20.482.567H15.16v21.356a4.465 4.465 0 0 1-4.46 4.306c-2.445 0-4.477-1.998-4.477-4.478 0-2.963 2.858-5.184 5.803-4.271v-5.443C6.087 11.245.886 15.861.886 21.751c0 5.735 4.753 9.816 9.798 9.816 5.407 0 9.798-4.391 9.798-9.816V10.918a12.654 12.654 0 0 0 7.404 2.377V7.973s-3.237.155-5.58-2.549Z" fill="#fff"/></svg>
                    </div>
                    <div className='bg-[#FFFFFF] h-1 w-44' />
                </div>
            </div>
        </div>
    );
};

export default SocialMedia;