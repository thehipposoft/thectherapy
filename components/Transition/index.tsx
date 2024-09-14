'use client'
import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP)

export default function index({children}:any) {

    const [displayChildren, setDisplayChildren] = useState(children)
    const container = useRef(null)

    useGSAP(() => {
        gsap.to(container.current, {opacity: 0}).then( () => {
            setDisplayChildren(children)
        })
    }, [children])

    return (
        <div ref={container}>
            {displayChildren}
        </div>
    );
}
