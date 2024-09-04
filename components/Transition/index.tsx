'use client'
import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP)

export default function index({children}:any) {

    const [displayChildren, setDisplayChildren] = useState(children)
    const container = useRef(null)

    useGSAP(() => {
        
    }, [children])

    return (
        <div ref={container}>
            {displayChildren}
        </div>
    );
}
