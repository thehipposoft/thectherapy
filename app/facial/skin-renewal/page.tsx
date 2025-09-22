import ServicesLayout from '@/components/ServicesLayout';
import ImageTextLayout from '@/components/ImageTextLayout';
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'the.c.therapy | Facials - Skin Renewal',
  description: "Find a range of mechanical and chemical peels such as Dermaplaning and a range of chemical peels from the brand Medik8, perfect for renewing your skin and keeping it glowy and youthful.",
}

const SKINRENEWAL_DATA = {
    title: 'Skin Renewal',
    category: 'Facials',
    textColor: '#FFFFFF',
    image: '/assets/images/facials/skin-renewal.webp',
    text: 'Find a range of mechanical and chemical peels such as Dermaplaning and a range of chemical peels from the brand Medik8, perfect for renewing your skin and keeping it glowy and youthful.',
    sections: [

        {
            image: '/assets/images/facials/skin-renewal/dermaplaning-facial.webp',
            title: 'The Dermaplaning Facial',
            paragraphs: <div className='flex flex-col gap-4'>
                <p>Dermaplaning is a mechanical peel performed with a sterile, disposable scalpel that effectively removes dead skin cells and fine hairs. This process leaves the skin smoother and brighter, preparing it to absorb active ingredients for nourishment or for further treatments. It is an ideal technique for renewing the skin without dermo-mobilization or suction, and it is suitable for all skin types, including those of different phototypes and biotypes. Additionally, it is safe for pregnant women, more hygienic for acne-prone skin, and better tolerated for those with rosacea, as well as sensitive and sensitized skin.</p>
                <p>You can enhance this treatment by adding hydrojelly or LED light therapy. To explore different options, check out the various treatment variations available.</p>
                <p>Includes:<br /> Double cleanse | Skin prep oil | Dermaplaning | Enzyme peel | Express extractions (or alternative) | Serum infusion with micro-ultrasonic spatula | Cream mask with Cryosticks and sculpting face massage | Skincare & SPF</p>
            </div>,
            href: 'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?menu=true&offerItems=sv%3A16830095&dppub=true&employeeId=1482022&pId=474146'
        },
        {
            image: '/assets/images/facials/skin-renewal/chemical-peels.webp',
            title: 'NEW TO PEELS OR SENSITIVE SKIN',
            paragraphs: <div className='flex flex-col gap-4'>
                <p>Experience a transformative skin treatment at The C Therapy, with our range of Medik8 chemical peels that deliver powerful, multi-action treatments to tackle stubborn skin issues and reveal your healthiest complexion.</p>
                <p>Each peel is meticulously formulated to address specific concerns, from aging and pigmentation to blemishes and sensitivity.</p>
                <p>Whether you're looking for a gentle refresh or a deeper transformation, we customize each peel to meet your unique skin needs.</p>
                <p>Discover the ideal peel for your skin and unlock your natural radiance today! Ready to transform your skin? <br/> <strong>Carolina will choose what suits you better on that day.</strong></p>
                <p>Double cleanse| skin pre-peel solution | chemical peel chosen by Carolina for you | neutralise peeling application | calming cleanse & serum application | bio-cellulose collagen mask | skincare & SPF application </p>
                <div className='flex flex-col gap-2'>
                    <p className='text-black text-lg font-bold'>LEVEL 1 - SUPERFACIAL Enzyme peel</p>
                    <p>A mild enzyme peel that gently resurfaces your skin. Great for beginners or those maintaining results from previous peels.</p>
                    <p>Duration: 45 min</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-black text-lg font-bold'>LEVEL 1 - Sensitive PHA Peel|Sensitive,redness skin</p>
                    <p>Sensitive, Redness-Prone Skin Ideal for sensitive skin types, this peel contains hydrating gluconolactone to visibly smooth skin texture, strengthen the skin barrier, and promote a luminous complexion</p>
                    <p>Duration: 45 min</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-black text-lg font-bold'>LEVEL 1 - Universal AHA Peel-New clients/maintenance</p>
                    <p>A mild peel suitable for all skin types, perfect for first-time peel clients or as a maintenance treatment for those who have completed a course of stronger peels. Gently resurfaces & leaves skin glow</p>
                    <p>Duration: 45 min</p>
                </div>
            </div>,
            href: 'https://www.fresha.com/book-now/the-c-therapy-macid731/services?lid=507601&eid=1482022&oiid=sv%3A23226739&share=true&pId=474146'
        },
        {
            image: '/assets/images/facials/skin-renewal/chemical-peels-2.jpg',
            title: 'ACNE/OILY SKIN PEELS',
            paragraphs: <div className='flex flex-col gap-4'>
                <p>Experience a transformative skin treatment at The C Therapy, with our range of Medik8 chemical peels that deliver powerful, multi-action treatments to tackle stubborn skin issues and reveal your healthiest complexion.</p>
                <p>Each peel is meticulously formulated to address specific concerns, from aging and pigmentation to blemishes and sensitivity.</p>
                <p>Whether you're looking for a gentle refresh or a deeper transformation, we customize each peel to meet your unique skin needs.</p>
                <p>Discover the ideal peel for your skin and unlock your natural radiance today! Ready to transform your skin? <br/> <strong>Carolina will choose what suits you better on that day.</strong></p>
                <p>Treatment details:<br /> Recommended: • 6 sessions for optimal results • 2 weeks between each session • Requires 2 weeks of skin prep before your first treat <br/> Double cleanse | skin pre-peel solution | chemical peel chosen by Carolina for you | neutralise peeling application | calming cleanse & serum application | bio-cellulose collagen mask | skincare & SPF application</p>
                <div className='flex flex-col gap-2'>
                    <p className='text-black text-lg font-bold'>MONO- Mandelic TR Peel | Blemish-Prone skin</p>
                    <p>Ideal for blemish-prone skin, this peel helps prevent breakouts, minimises the appearance of pores, and enhances skin clarity.</p>
                    <p>Duration: 45 min</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-black text-lg font-bold'>LEVEL 2- Clarity Peel | Oily, congested skin</p>
                    <p>A powerful peel designed for blemish-prone and congested skin. It unclogs pores, minimises blemishes, and normalises cell turnover for clearer, healthier-looking skin.</p>
                    <p>Duration: 45 min</p>
                </div>
            </div>,
            href: 'https://www.fresha.com/book-now/the-c-therapy-macid731/services?lid=507601&eid=1482022&oiid=sv%3A23226742&share=true&pId=474146'
        },
/*         {
            image: '/assets/images/facials/skin-renewal/chemical-peels.webp',
            title: 'Chemical Peels',
            paragraphs: <div className='flex flex-col gap-12'>
                <p>Transform your skin at The C Therapy with our Medik8 chemical peels, designed to tackle stubborn issues like aging, pigmentation, blemishes, and sensitivity. Each powerful treatment is tailored to your unique skin needs, whether you seek a gentle refresh or a deeper transformation. Discover the perfect peel for your complexion and unlock your natural radiance today!</p>
                <div className='flex flex-col gap-2'>
                    <p>• Level 1 Peels – For Sensitive Skin & New Clients:</p>
                    <p>Our Level 1 peels are perfect for first-time clients or those with sensitive skin looking for a gentle yet effective exfoliation.</p>
                    <p>+ SUPERFACIAL peel: A mild enzyme peel that gently resurfaces your skin. Great for beginners or those maintaining results from previous peels. Duration: 45 minutes. </p>
                    <p>+ Sensitive PHA Peel : Ideal for sensitive, redness-prone skin. This gentle peel smooths texture, strengthens the skin barrier, and boosts luminosity. Duration: 45 minutes.</p>
                    <p> + Universal AHA Peel: A mild peel that suits all skin types. Perfect for new peel clients or for maintaining the results of stronger treatments. Promotes a glowing complexion. Duration: 45 minutes.</p>
                    <Link href={'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?menu=true&offerItems=sv%3A19206145&dppub=true&employeeId=1482022&pId=474146'} target='_blank' rel='noreferrer' className='flex justify-between items-center gap-20 border border-nav w-fit px-5 py-4 mt-2 group'>
                        <p className='text-[#333333] group-hover:underline'>Book an appointment</p>
                        <svg className='w-6 h-6 stroke-[#333333] group-hover:translate-x-2 duration-500' fill='none' xmlns="http://www.w3.org/2000/svg"><g className=''><path d="M3.75 12h16.5M13.5 5.25 20.25 12l-6.75 6.75"/></g></svg>
                    </Link>
                </div>
                <div className='flex flex-col gap-2 mt-2'>
                    <p>• Level 2 Peels – Targeted Solutions for Specific Concerns: </p>
                    <p>Level 2 peels provide deeper exfoliation for clients with more specific skin concerns, such as aging, pigmentation, or congestion. </p>
                    <p>+ Rewind Peel: Targets fine lines and wrinkles. This anti-aging peel smooths and rejuvenates skin, helping to reduce visible signs of aging. Duration: 45 minutes.</p>
                    <p>+Even Peel: Brightens and evens skin tone, specifically formulated to tackle pigmentation issues such as sunspots, melasma, and post-inflammatory discoloration. Duration: 45 minutes. </p>
                    <p>+ Clarity Peel: Designed for oily, blemish-prone skin. It works to unclog pores, reduce breakouts, and promote a clearer complexion. Duration: 45 minutes.</p>
                </div>
            </div>,
            href: 'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?menu=true&offerItems=sv%3A19180064&dppub=true&employeeId=1482022&pId=474146'
        }, */
        {
            image: '/assets/images/facials/skin-renewal/chemical-peels.webp',
            title: 'DEPIGMENTATION PEEL- Target dark spots, dullness & uneven tone',
            paragraphs: <div className='flex flex-col gap-4'>
                <p>This advanced depigmentation peel helps fade dark spots, sun damage, and uneven skin tone by accelerating skin renewal.</p>
                <p>It’s ideal for anyone struggling with pigmentation, freckles, or dull skin caused by sun exposure or hormonal changes. The result? A more even, radiant and luminous complexion.</p>
                <p>Perfect for: <br/>• Superficial pigmentation & melasma <br/>• Uneven skin tone or dull complexion <br/>• Mild sunspots and freckles</p>
                <p>Treatment details: <br/>• Recommended: 6 sessions for optimal results <br/>• 2 weeks between each session <br/>• Requires 2 weeks of skin prep before your first treatment (we’ll guide you!) <br/>• Includes a personalised skincare plan with 2 home care products</p>
                <p>No downtime, but visible improvement after a few sessions. A progressive, gentle, and effective approach to brighter skin.</p>
                <div className='flex flex-col gap-2'>
                    <p className='text-black text-lg font-bold'>MESOESTETIC- Pigmentation, melasma</p>
                    <p>Double cleanse | pre-peel solution degrease | protect delicate areas | melanostop tranex peel application | anti-stress or crystal fiber mask | fast sk</p>
                    <p>Duration: 45 min</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-black text-lg font-bold'>MEDIK8-Lactic TR Peel | Pigmentation & Dehydration</p>
                    <p>Perfect for hydrating the skin and brightening pigmentation, this lactic acid peel restores a healthy, radiant glow.</p>
                    <p>Duration: 45 min</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-black text-lg font-bold'>MEDIK8 LEVEL 2- Even Peel | Pigmentation</p>
                    <p>A brightening peel that targets hyperpigmentation, age spots, and post-inflammatory discoloration, leaving the skin with improved clarity, an even tone, and a natural glow.</p>
                    <p>Duration: 45 min</p>
                </div>
            </div>,
            href: 'https://www.fresha.com/book-now/the-c-therapy-macid731/services?lid=507601&eid=1482022&oiid=sv%3A23219068&share=true&pId=474146'
        },
        {
            image: '/assets/images/facials/skin-renewal/chemical-peels-2.jpg',
            title: 'ANTIAGE- WRINKLES PEELS',
            paragraphs: <div className='flex flex-col gap-4'>
                <p>Experience a transformative skin treatment at The C Therapy, with our range of Medik8 chemical peels that deliver powerful, multi-action treatments to tackle stubborn skin issues and reveal your healthiest complexion.</p>
                <p>Each peel is meticulously formulated to address specific concerns, from aging and pigmentation to blemishes and sensitivity.</p>
                <p>Whether you're looking for a gentle refresh or a deeper transformation, we customize each peel to meet your unique skin needs.</p>
                <p>Discover the ideal peel for your skin and unlock your natural radiance today! Ready to transform your skin? <br/> <strong>Carolina will choose what suits you better on that day.</strong></p>
                <p>Treatment details:<br />• 6 sessions for optimal results <br />• 2 weeks between each session <br />• Requires 2 weeks of skin prep before your first treatment (we’ll guide you!)</p>
                <p>Double cleanse | skin pre-peel solution | chemical peel chosen by Carolina for you | neutralise peeling application | calming cleanse & serum application | bio-cellulose collagen mask | skincare & SPF application</p>
                <div className='flex flex-col gap-2'>
                    <p className='text-black text-lg font-bold'>LEVEL 2-Rewind Peel | Fine lines & wrinkles</p>
                    <p>One of Medik8’s most powerful formulations, specifically designed to target premature aging. This peel helps reduce fine lines, wrinkles, and imperfections, leaving the skin smooth and rejuvenated.</p>
                    <p>Duration: 45 min</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-black text-lg font-bold'>MONO- Glycolic TR Peel | Best for aging skin</p>
                    <p>A powerful anti-aging peel using glycolic acid to soften fine lines, reduce pigmentation, and improve texture. Ideal for aging skin.</p>
                    <p>Duration: 45 min</p>
                </div>
            </div>,
            href: 'https://www.fresha.com/book-now/the-c-therapy-macid731/services?lid=507601&eid=1482022&oiid=sv%3A23226857&share=true&pId=474146'
        },
        {
            image: '/assets/images/facials/skin-renewal/chemical-peels.webp',
            title: 'ADVANCED PEELS- Layering for Enhanced Results',
            paragraphs: <div className='flex flex-col gap-4'>
                <p>For clients looking to enhanced results, peel layering offers a customizable approach. This treatment combines multiple acids to intensify results, allowing precise treatment of localized skin concern.</p>
            </div>,
            href: 'https://www.fresha.com/book-now/the-c-therapy-macid731/services?lid=507601&eid=1482022&oiid=sv%3A23226857&share=true&pId=474146'
        },
/*         {
            image: '/assets/images/facials/skin-renewal/chemical-peels-2.jpg',
            paragraphs: <div className='flex flex-col gap-2'>
                <p>• Mono Peels – Single Acid Treatments for Focused Results: </p>
                <p>Our Mono Peels use single acids to target specific skin concerns, delivering potent, focused results.</p>
                <p>+ Mono Glycolic TR Peel: A powerful anti-aging peel using glycolic acid to soften fine lines, reduce pigmentation, and improve texture. Ideal for aging skin. Duration: 45 minutes.</p>
                <p>+ Mono Lactic TR Peel: Perfect for hydrating the skin and brightening pigmentation, this lactic acid peel restores a healthy, radiant glow. Duration: 45 minutes.</p>
                <p>+ Mono Mandelic TR Peel: Ideal for blemish-prone skin, this peel prevents breakouts, minimizes pores, and improves skin clarity. Duration: 45 minutes. </p>
                <Link href={'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?menu=true&offerItems=sv%3A19206142&dppub=true&employeeId=1482022&pId=474146'} target='_blank' rel='noreferrer' className='group flex justify-between items-center gap-20 border border-nav w-fit px-5 py-4 mt-2'>
                    <p className='text-[#333333] group-hover:underline'>Book an appointment</p>
                    <svg className='w-6 h-6 stroke-[#333333] group-hover:translate-x-2 duration-500' fill='none' xmlns="http://www.w3.org/2000/svg"><g className=''><path d="M3.75 12h16.5M13.5 5.25 20.25 12l-6.75 6.75"/></g></svg>
                </Link>
                <div className='flex flex-col gap-2 mt-12'>
                    <p>• Level 3 Peels – Advanced Peel Layering:  </p>
                    <p>For clients looking for enhanced results, peel layering offers a customizable approach. This treatment combines multiple acids to intensify results, allowing for precise treatment of localized skin concerns or a full-face rejuvenation.</p>
                    <p> Explore our range of Medik8 peels and find the perfect treatment for your unique skin needs. Book your peel today and take the next step towards healthier, more radiant skin!.</p>
                </div>
            </div>,
            href: 'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?menu=true&offerItems=sv%3A19206139&dppub=true&employeeId=1482022&pId=474146'
        }, */
    ],
}

export default function SkinRenewalPage() {
    return (
        <div>
            <ServicesLayout props={SKINRENEWAL_DATA} />
            <ImageTextLayout data={SKINRENEWAL_DATA.sections} />
        </div>
    );
}
