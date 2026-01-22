"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Promotion } from '@/api/getPromotion';

interface DynamicPromotionProps {
    promotion: Promotion;
}

const DynamicPromotion = ({ promotion }: DynamicPromotionProps) => {
    const [bgImage, setBgImage] = useState<string | null>(null);

    const {
        acf: {
            main_title,
            secondary_title,
            description,
            moving_text,
            background_image,
            text_color,
            first_button_text,
            first_button_redirect,
            second_button_text,
            second_button_redirect,
            third_button_text,
            third_button_redirect
        }
    } = promotion;

    const handleColor = () => {
        if (text_color === "White") {
            return "#FFFFFF"
        } else {
            return "#000000"
        }
    }

    const textColor = handleColor()

    useEffect(() => {
        const fetchBg = async () => {
            if (typeof background_image === 'number') {
                try {
                    const res = await fetch(`https://store.thectherapy.com.au/wp-json/wp/v2/media/${background_image}`);
                    const data = await res.json();
                    setBgImage(data.source_url);
                } catch (e) { console.error(e); }
            } else if (typeof background_image === 'string') {
                setBgImage(background_image);
            }
        };
        fetchBg();
    }, [background_image]);

    return (
        <div className='container-b md:mt-[75px] flex md:h-[92vh] h-screen w-screen relative justify-center items-center'>
            <div className='w-full h-full relative p-4'>
                {bgImage && (
                    <Image
                        src={bgImage}
                        fill
                        alt={main_title || 'Promotion banner'}
                        className='object-cover object-right md:object-center'
                        priority
                    />
                )}
                <div className="absolute w-full h-full left-0 top-0 bg-black/30 " />
                
                <div className='flex flex-col gap-6 md:gap-0 h-full justify-between p-6 relative z-10 text-white'>
                    <div className='flex lg:flex-row flex-col-reverse justify-between pt-12 lg:pt-0'>
                        <div>
                            <h4 style={{color: textColor}} className='text-3xl font-thin pt-6 md:pt-0'>{secondary_title}</h4>
                        </div>
                        
                        {/* CSS Marquee */}
                        <div className='relative overflow-hidden w-full lg:max-w-[350px] pb-2'>
                            <div className="animate-marquee flex whitespace-nowrap">
                                <h2 style={{color: textColor}} className="uppercase text-4xl arimo-bold px-2">{moving_text} -</h2>
                                <h2 style={{color: textColor}} className="uppercase text-4xl arimo-bold px-2">{moving_text} -</h2>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-6 md:gap-0 justify-between'>
                        <h2 style={{color: textColor}} className='md:text-9xl text-[52px] leading-[66px] md:leading-[100px] uppercase ' 
                            dangerouslySetInnerHTML={{ __html: main_title }}></h2>
                        <p style={{color: textColor}} className='text-white/95 italic text-xl pt-4 pl-[5%] md:max-w-3xl' 
                           dangerouslySetInnerHTML={{ __html: description }}></p>
                    </div>

                    <div className='lg:grid flex flex-col lg:grid-cols-3 gap-4'>
                        {[
                            { t: first_button_text, r: first_button_redirect },
                            { t: second_button_text, r: second_button_redirect },
                            { t: third_button_text, r: third_button_redirect }
                        ].map((btn, i) => btn.t && btn.r && (
                            <Link key={i} href={btn.r} target='_blank' rel="noreferrer" style={{color: textColor}}
                                  className='flex uppercase justify-center items-center hover:bg-[#FFFFFF]/20 hover:border-[#ffffff00] hover:text-xl text-white arimo-bold text-lg border border-white duration-500 px-5 py-4'>
                                {btn.t}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DynamicPromotion;