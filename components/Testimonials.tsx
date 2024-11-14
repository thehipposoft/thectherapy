'use client'
import React, { useState } from 'react';

const TESTIMONIALS = [
    {
        title: 'I absolute loved this place',
        text: `It was not just a skin treatment but a treat to the soul. Caro is so passionate about natural skincare, and she goes out of the way to make sure we make the most of the treatment and can still use some of the products we already have with her guidance. My skin changed so much after my first full facial that couldn't stop looking at the mirror.`,
        name: 'Maria Helguera',
        rate: 5,
    },
    {
        title: 'Such a Lovely experience with Carolina',
        text: `The ambience she has created in the music, warm tea, comfortable and clean space; helped me to feel very relaxed. I appreciate Carolina's knowledge and extra care for my skin and health. I'm looking forward to coming back.`,
        name: 'Joanne Mejia Hooi',
        rate: 5,
    },
    {
        title: 'Excellent service. Lovely person',
        text: `My facial was great. I was really pleased with the experience and Carolina was just beautiful!.`,
        name: 'Amanda Stauffer',
        rate: 5,
    },
    {
        title: 'Carolina is always extra caring',
        text: `Going to her studio is a treat and part of my self care routine 5+ start.`,
        name: 'Daniela Gonzini',
        rate: 5,
    },
]


const Testimonials = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    function showNextSlide() {
        setSlideIndex((index) => {
            if (index === TESTIMONIALS.length - 1) return 0;
            return index + 1;
        })
    }

    function showPrevSlide() {
        setSlideIndex((index) => {
            if (index === 0) return TESTIMONIALS.length - 1;
            return index - 1;
        })
    }

    return (
        <div className='md:h-screen my-12 flex justify-center items-center'>
            <div className='md:w-[90vw] w-[75vw] 2xl:w-[75vw] mx-auto'>
                <div className='flex flex-col xl:flex-row justify-between md:h-[80vh] gap-8 md:gap-0 relative'>
                    <div className='flex'>
                        <svg width="178" height="151" viewBox="0 0 178 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M80.304 6.65376C81.2523 8.17105 81.8925 9.86027 82.188 11.625C82.4835 13.3897 82.4285 15.1953 82.0261 16.9387C81.6238 18.6822 80.882 20.3293 79.8431 21.7861C78.8042 23.2428 77.4886 24.4807 75.9713 25.429C59.3883 35.7581 46.2144 50.7422 38.0938 68.5113C46.2945 67.8255 54.5112 69.631 61.669 73.6916C68.8267 77.7522 74.5921 83.8788 78.2109 91.2698C81.8297 98.6607 83.1332 106.972 81.9511 115.116C80.7689 123.26 77.156 130.857 71.5852 136.914C66.0144 142.971 58.7449 147.206 50.7281 149.064C42.7112 150.922 34.3202 150.316 26.653 147.327C18.9857 144.338 12.3992 139.104 7.75527 132.31C3.11133 125.517 0.626193 117.479 0.625 109.25V108.882C0.639816 107.827 0.685252 106.773 0.76125 105.721C0.883875 103.677 1.12913 100.816 1.606 97.3009C2.55975 90.3113 4.42638 80.6784 8.2005 69.8601C15.7215 48.1964 30.9543 21.4233 61.5288 2.321C63.046 1.37269 64.7353 0.732523 66.5 0.437042C68.2647 0.14156 70.0703 0.196556 71.8137 0.59889C73.5572 1.00122 75.2043 1.74301 76.6611 2.78191C78.1178 3.8208 79.3557 5.13646 80.304 6.65376ZM175.679 6.65376C176.627 8.17105 177.268 9.86027 177.563 11.625C177.858 13.3897 177.803 15.1953 177.401 16.9387C176.999 18.6822 176.257 20.3293 175.218 21.7861C174.179 23.2428 172.864 24.4807 171.346 25.429C154.763 35.7581 141.589 50.7422 133.469 68.5113C141.669 67.8255 149.886 69.631 157.044 73.6916C164.202 77.7522 169.967 83.8788 173.586 91.2698C177.205 98.6607 178.508 106.972 177.326 115.116C176.144 123.26 172.531 130.857 166.96 136.914C161.389 142.971 154.12 147.206 146.103 149.064C138.086 150.922 129.695 150.316 122.028 147.327C114.361 144.338 107.774 139.104 103.13 132.31C98.4863 125.517 96.0012 117.479 96 109.25V108.882C96.0148 107.827 96.0603 106.773 96.1363 105.721C96.2589 103.677 96.5041 100.816 96.981 97.3009C97.9348 90.3113 99.8014 80.6784 103.576 69.8601C111.097 48.1964 126.329 21.4233 156.904 2.321C158.421 1.37269 160.11 0.732523 161.875 0.437042C163.64 0.14156 165.445 0.196556 167.189 0.59889C168.932 1.00122 170.579 1.74301 172.036 2.78191C173.493 3.8208 174.731 5.13646 175.679 6.65376Z" fill="#C0BEB3" fillOpacity="0.2"/>
                        </svg>
                    </div>
                    <button onClick={showPrevSlide} className={`${slideIndex === 0 ? 'hidden' : 'block'} hover:opacity-40 duration-500 absolute top-1/2 xl:left-32 md:left-4 -left-12 rotate-180 md:h-8 h-7 md:w-8 w-7`}>
                        <svg viewBox="-4.5 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M.366 19.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827L1.768.292A1.063 1.063 0 0 0 .314.282a.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414L.366 18.295a.974.974 0 0 0 0 1.413" fill="#000" fillRule="evenodd"/></svg>
                    </button>
                    <div className={`flex md:max-w-[65vw] xl:max-w-[50vw] md:mx-auto xl:mx-0 overflow-hidden relative`} >
                        {
                            TESTIMONIALS.map((val, index) => (
                                    <div
                                        key={index} 
                                        className={`duration-1000 flex flex-col justify-center gap-4 min-w-[75vw] md:min-w-[65vw] xl:min-w-[50vw] mx-auto xl:mx-0 h-full`}
                                        style={{
                                        translate: `${-100 * slideIndex}%`,
                                    }}
                                    >
                                        <div className='flex gap-1'>
                                            <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12.908 0.580999C12.828 0.407536 12.6999 0.260629 12.539 0.15766C12.3781 0.0546912 12.191 -3.05176e-05 12 -3.05176e-05C11.809 -3.05176e-05 11.6219 0.0546912 11.461 0.15766C11.3001 0.260629 11.172 0.407536 11.092 0.580999L8.222 6.801L1.421 7.608C1.23125 7.6304 1.05189 7.7067 0.904148 7.82786C0.756406 7.94902 0.646466 8.10996 0.587341 8.29165C0.528216 8.47334 0.522379 8.66817 0.570523 8.85307C0.618666 9.03797 0.718774 9.20521 0.858999 9.335L5.889 13.985L4.554 20.705C4.51692 20.8923 4.53425 21.0864 4.60394 21.2641C4.67364 21.4419 4.79278 21.596 4.94729 21.7083C5.10179 21.8205 5.2852 21.8861 5.47582 21.8974C5.66645 21.9087 5.85632 21.8652 6.023 21.772L12 18.426L17.977 21.772C18.1438 21.8656 18.3339 21.9094 18.5248 21.8982C18.7157 21.887 18.8994 21.8214 19.0542 21.709C19.2089 21.5965 19.3281 21.4421 19.3978 21.264C19.4674 21.0859 19.4845 20.8915 19.447 20.704L18.112 13.986L23.141 9.335C23.2812 9.20521 23.3813 9.03797 23.4295 8.85307C23.4776 8.66817 23.4718 8.47334 23.4127 8.29165C23.3535 8.10996 23.2436 7.94902 23.0958 7.82786C22.9481 7.7067 22.7687 7.6304 22.579 7.608L15.777 6.8L12.908 0.580999Z" fill="#C0BEB3"/>
                                            </svg>
                                            <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12.908 0.580999C12.828 0.407536 12.6999 0.260629 12.539 0.15766C12.3781 0.0546912 12.191 -3.05176e-05 12 -3.05176e-05C11.809 -3.05176e-05 11.6219 0.0546912 11.461 0.15766C11.3001 0.260629 11.172 0.407536 11.092 0.580999L8.222 6.801L1.421 7.608C1.23125 7.6304 1.05189 7.7067 0.904148 7.82786C0.756406 7.94902 0.646466 8.10996 0.587341 8.29165C0.528216 8.47334 0.522379 8.66817 0.570523 8.85307C0.618666 9.03797 0.718774 9.20521 0.858999 9.335L5.889 13.985L4.554 20.705C4.51692 20.8923 4.53425 21.0864 4.60394 21.2641C4.67364 21.4419 4.79278 21.596 4.94729 21.7083C5.10179 21.8205 5.2852 21.8861 5.47582 21.8974C5.66645 21.9087 5.85632 21.8652 6.023 21.772L12 18.426L17.977 21.772C18.1438 21.8656 18.3339 21.9094 18.5248 21.8982C18.7157 21.887 18.8994 21.8214 19.0542 21.709C19.2089 21.5965 19.3281 21.4421 19.3978 21.264C19.4674 21.0859 19.4845 20.8915 19.447 20.704L18.112 13.986L23.141 9.335C23.2812 9.20521 23.3813 9.03797 23.4295 8.85307C23.4776 8.66817 23.4718 8.47334 23.4127 8.29165C23.3535 8.10996 23.2436 7.94902 23.0958 7.82786C22.9481 7.7067 22.7687 7.6304 22.579 7.608L15.777 6.8L12.908 0.580999Z" fill="#C0BEB3"/>
                                            </svg>
                                            <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12.908 0.580999C12.828 0.407536 12.6999 0.260629 12.539 0.15766C12.3781 0.0546912 12.191 -3.05176e-05 12 -3.05176e-05C11.809 -3.05176e-05 11.6219 0.0546912 11.461 0.15766C11.3001 0.260629 11.172 0.407536 11.092 0.580999L8.222 6.801L1.421 7.608C1.23125 7.6304 1.05189 7.7067 0.904148 7.82786C0.756406 7.94902 0.646466 8.10996 0.587341 8.29165C0.528216 8.47334 0.522379 8.66817 0.570523 8.85307C0.618666 9.03797 0.718774 9.20521 0.858999 9.335L5.889 13.985L4.554 20.705C4.51692 20.8923 4.53425 21.0864 4.60394 21.2641C4.67364 21.4419 4.79278 21.596 4.94729 21.7083C5.10179 21.8205 5.2852 21.8861 5.47582 21.8974C5.66645 21.9087 5.85632 21.8652 6.023 21.772L12 18.426L17.977 21.772C18.1438 21.8656 18.3339 21.9094 18.5248 21.8982C18.7157 21.887 18.8994 21.8214 19.0542 21.709C19.2089 21.5965 19.3281 21.4421 19.3978 21.264C19.4674 21.0859 19.4845 20.8915 19.447 20.704L18.112 13.986L23.141 9.335C23.2812 9.20521 23.3813 9.03797 23.4295 8.85307C23.4776 8.66817 23.4718 8.47334 23.4127 8.29165C23.3535 8.10996 23.2436 7.94902 23.0958 7.82786C22.9481 7.7067 22.7687 7.6304 22.579 7.608L15.777 6.8L12.908 0.580999Z" fill="#C0BEB3"/>
                                            </svg>
                                            <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12.908 0.580999C12.828 0.407536 12.6999 0.260629 12.539 0.15766C12.3781 0.0546912 12.191 -3.05176e-05 12 -3.05176e-05C11.809 -3.05176e-05 11.6219 0.0546912 11.461 0.15766C11.3001 0.260629 11.172 0.407536 11.092 0.580999L8.222 6.801L1.421 7.608C1.23125 7.6304 1.05189 7.7067 0.904148 7.82786C0.756406 7.94902 0.646466 8.10996 0.587341 8.29165C0.528216 8.47334 0.522379 8.66817 0.570523 8.85307C0.618666 9.03797 0.718774 9.20521 0.858999 9.335L5.889 13.985L4.554 20.705C4.51692 20.8923 4.53425 21.0864 4.60394 21.2641C4.67364 21.4419 4.79278 21.596 4.94729 21.7083C5.10179 21.8205 5.2852 21.8861 5.47582 21.8974C5.66645 21.9087 5.85632 21.8652 6.023 21.772L12 18.426L17.977 21.772C18.1438 21.8656 18.3339 21.9094 18.5248 21.8982C18.7157 21.887 18.8994 21.8214 19.0542 21.709C19.2089 21.5965 19.3281 21.4421 19.3978 21.264C19.4674 21.0859 19.4845 20.8915 19.447 20.704L18.112 13.986L23.141 9.335C23.2812 9.20521 23.3813 9.03797 23.4295 8.85307C23.4776 8.66817 23.4718 8.47334 23.4127 8.29165C23.3535 8.10996 23.2436 7.94902 23.0958 7.82786C22.9481 7.7067 22.7687 7.6304 22.579 7.608L15.777 6.8L12.908 0.580999Z" fill="#C0BEB3"/>
                                            </svg>
                                            <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12.908 0.580999C12.828 0.407536 12.6999 0.260629 12.539 0.15766C12.3781 0.0546912 12.191 -3.05176e-05 12 -3.05176e-05C11.809 -3.05176e-05 11.6219 0.0546912 11.461 0.15766C11.3001 0.260629 11.172 0.407536 11.092 0.580999L8.222 6.801L1.421 7.608C1.23125 7.6304 1.05189 7.7067 0.904148 7.82786C0.756406 7.94902 0.646466 8.10996 0.587341 8.29165C0.528216 8.47334 0.522379 8.66817 0.570523 8.85307C0.618666 9.03797 0.718774 9.20521 0.858999 9.335L5.889 13.985L4.554 20.705C4.51692 20.8923 4.53425 21.0864 4.60394 21.2641C4.67364 21.4419 4.79278 21.596 4.94729 21.7083C5.10179 21.8205 5.2852 21.8861 5.47582 21.8974C5.66645 21.9087 5.85632 21.8652 6.023 21.772L12 18.426L17.977 21.772C18.1438 21.8656 18.3339 21.9094 18.5248 21.8982C18.7157 21.887 18.8994 21.8214 19.0542 21.709C19.2089 21.5965 19.3281 21.4421 19.3978 21.264C19.4674 21.0859 19.4845 20.8915 19.447 20.704L18.112 13.986L23.141 9.335C23.2812 9.20521 23.3813 9.03797 23.4295 8.85307C23.4776 8.66817 23.4718 8.47334 23.4127 8.29165C23.3535 8.10996 23.2436 7.94902 23.0958 7.82786C22.9481 7.7067 22.7687 7.6304 22.579 7.608L15.777 6.8L12.908 0.580999Z" fill="#C0BEB3"/>
                                            </svg>
                                        </div>
                                        <h2 className='text-3xl'>"{val.title}"</h2>
                                        <p>{val.text}</p>
                                        <div className='flex justify-end pt-4'>
                                            <p>{val.name}</p>
                                        </div>
                                    </div>
                            ))
                        }
                    </div>
                    <button onClick={showNextSlide} className={`${slideIndex === TESTIMONIALS.length - 1 ? 'hidden' : 'block'} hover:opacity-40 duration-500 absolute top-1/2 xl:right-32 md:right-4 -right-10 md:h-8 h-7 md:w-8 w-7`}>
                        <svg viewBox="-4.5 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M.366 19.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827L1.768.292A1.063 1.063 0 0 0 .314.282a.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414L.366 18.295a.974.974 0 0 0 0 1.413" fill="#000" fillRule="evenodd"/></svg>
                    </button>
                    <div className='flex justify-end xl:justify-start items-end'>
                        <svg width="178" height="151" viewBox="0 0 178 151" fill="none" xmlns="http://www.w3.org/2000/svg" className='rotate-180'>
                            <path d="M80.304 6.65376C81.2523 8.17105 81.8925 9.86027 82.188 11.625C82.4835 13.3897 82.4285 15.1953 82.0261 16.9387C81.6238 18.6822 80.882 20.3293 79.8431 21.7861C78.8042 23.2428 77.4886 24.4807 75.9713 25.429C59.3883 35.7581 46.2144 50.7422 38.0938 68.5113C46.2945 67.8255 54.5112 69.631 61.669 73.6916C68.8267 77.7522 74.5921 83.8788 78.2109 91.2698C81.8297 98.6607 83.1332 106.972 81.9511 115.116C80.7689 123.26 77.156 130.857 71.5852 136.914C66.0144 142.971 58.7449 147.206 50.7281 149.064C42.7112 150.922 34.3202 150.316 26.653 147.327C18.9857 144.338 12.3992 139.104 7.75527 132.31C3.11133 125.517 0.626193 117.479 0.625 109.25V108.882C0.639816 107.827 0.685252 106.773 0.76125 105.721C0.883875 103.677 1.12913 100.816 1.606 97.3009C2.55975 90.3113 4.42638 80.6784 8.2005 69.8601C15.7215 48.1964 30.9543 21.4233 61.5288 2.321C63.046 1.37269 64.7353 0.732523 66.5 0.437042C68.2647 0.14156 70.0703 0.196556 71.8137 0.59889C73.5572 1.00122 75.2043 1.74301 76.6611 2.78191C78.1178 3.8208 79.3557 5.13646 80.304 6.65376ZM175.679 6.65376C176.627 8.17105 177.268 9.86027 177.563 11.625C177.858 13.3897 177.803 15.1953 177.401 16.9387C176.999 18.6822 176.257 20.3293 175.218 21.7861C174.179 23.2428 172.864 24.4807 171.346 25.429C154.763 35.7581 141.589 50.7422 133.469 68.5113C141.669 67.8255 149.886 69.631 157.044 73.6916C164.202 77.7522 169.967 83.8788 173.586 91.2698C177.205 98.6607 178.508 106.972 177.326 115.116C176.144 123.26 172.531 130.857 166.96 136.914C161.389 142.971 154.12 147.206 146.103 149.064C138.086 150.922 129.695 150.316 122.028 147.327C114.361 144.338 107.774 139.104 103.13 132.31C98.4863 125.517 96.0012 117.479 96 109.25V108.882C96.0148 107.827 96.0603 106.773 96.1363 105.721C96.2589 103.677 96.5041 100.816 96.981 97.3009C97.9348 90.3113 99.8014 80.6784 103.576 69.8601C111.097 48.1964 126.329 21.4233 156.904 2.321C158.421 1.37269 160.11 0.732523 161.875 0.437042C163.64 0.14156 165.445 0.196556 167.189 0.59889C168.932 1.00122 170.579 1.74301 172.036 2.78191C173.493 3.8208 174.731 5.13646 175.679 6.65376Z" fill="#C0BEB3" fillOpacity="0.2"/>
                        </svg>
                    </div>
                </div>
                <div className='w-full relative mt-16'>
                    <div className='h-[3px] bg-nav bg-opacity-50 w-full absolute left-0 ' />
                    <div className={`${slideIndex === 0 ? '': ''} ${slideIndex === 1 ? 'translate-x-full': ''} ${slideIndex === 2 ? 'translate-x-[200%]': ''} ${slideIndex === 3 ? 'translate-x-[300%]': ''}  duration-700 h-[3px] bg-[#000000] w-1/4 absolute left-0 z-10 `} />
                </div> 
            </div>
        </div>
    );
};

export default Testimonials;