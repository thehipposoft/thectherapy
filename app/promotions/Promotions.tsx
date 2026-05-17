
'use client'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Promotions = () => {
    const container = useRef(null)

    useGSAP(()=> {
        gsap.from('.title', {
            opacity: 0,
            yPercent: 20,
            ease: 'power2.inOut',
            duration: 1,
        })
        gsap.from('.content', {
            opacity: 0,
            y: 20,
            ease: 'power2.inOut',
            duration: 1,
            delay: .5,
        })
    }, {scope: container})

    return (
        <div
            ref={container}
            className="flex flex-col md:w-[800px] w-screen mx-auto relative z-20"
        >
            <h1 className="title uppercase garet text-center md:text-6xl text-5xl md:py-8 pt-28 pb-4">promotions</h1>
            <div className="w-full flex flex-col text-center gap-4 h-[400px] items-center justify-center">
                <p>There's nothing to see here right now...</p>
                <p>We'll be back with new promotions soon!</p>
            </div>
        </div>
    );
}

export default Promotions;