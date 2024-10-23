
'use client'
import React, { useRef } from 'react';
import BannerSlick from './BannerSlick';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Banner = () => {

    const container = useRef(null)

    useGSAP(() => {
        gsap.from(container.current, {
            opacity: 0,
            duration: 1.5,
            ease: 'power1.in'
        })
    })

    return (
        <div ref={container} className=''>
            <BannerSlick />
        </div>
    );
};

export default Banner;