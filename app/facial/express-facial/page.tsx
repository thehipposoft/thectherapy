import ServicesLayout from '@/components/ServicesLayout';
import ImageTextLayout from '@/components/ImageTextLayout';
import React from 'react';
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'the.c.therapy | Express Facials',
  description: "Stop the time and take your skin another level of glow and plumpness by stimulating & boosting  your own collagen production in a natural way & your skin will waken up & glow up like never before with this facials.",
}

const EXPRESSFACIALS_DATA = {
    title: 'Express Facials',
    category: 'Facials',
    textColor: '#FFFFFF',
    image: '/assets/images/facials/express-facials.jpg',
    text: 'Stop the time and take your skin another level of glow and plumpness by stimulating & boosting  your own collagen production in a natural way & your skin will waken up & glow up like never before with this facials.',
    sections: [
   /*      {
            image: '/assets/images/facials/skin-ageless/infusion-facial.webp',
            title: 'The Infusion Facial',
            paragraphs: <div className='flex flex-col gap-2'>
                <p>A rejuvenating treatment that delivers a custom blend of active ingredients directly into your skin for maximum effectiveness. Using a specialized nano infusion device, we apply a custom blend of hyaluronic acid, DMAE, vitamin C+E, Argilerine, stem cells, peptides, and epidermal growth factors to your skin. These potent ingredients are delivered through microneedle channels, gently created by pyramid-shaped silicone or steel needles ensure the deep penetration of these powerful serums. Also provides gentle exfoliation to reveal smoother, more radiant skin. Say goodbye to fine lines, wrinkles, and dullness as your skin is revitalized from within.</p>
                <p>Experience the transformative power of our Nano Infusion Facial and uncover a more youthful, glowing complexion. </p>
                <p className='pt-4'>Double cleanse | enzyme peel | nano infusion on face and neck with actives serums | Hydrojelly mask | scalp or neck & arms massage | Skincare & SPF.</p>
            </div>,
            href: 'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?menu=true&offerItems=sv%3A16830214&dppub=true&employeeId=1482022&pId=474146'
        }, */
        {
            image: '/assets/images/facials/skin-balance/express-plant-peel.webp',
            title: 'Express Plant Peel',
            paragraphs: <div className='flex flex-col gap-4'>
                <p>A certified organic professional peel blended with enzyme and fruit acid exfoliants. Infused with brightening & antioxidant actives to help improve skin damage whilst natural moisturising factors leave the skin feeling rehydrated with no downtime.</p>
                <p>Duration: 30min</p>
                <p>Double cleanse | plant Peel | treatment mask | scalp massage| skincare application| SPF application</p>
            </div>,
            href: 'https://www.fresha.com/book-now/the-c-therapy-macid731/services?lid=507601&eid=1482022&oiid=sv%3A16679907&share=true&pId=474146'
        },
        {
            image: '/assets/images/facials/skin-renewal/express-dermaplaning.webp',
            title: 'Express Dermaplaning',
            paragraphs: <div className='flex flex-col gap-4'>
                <p>Enjoy the professional Dermaplaning treatment. Removing dead skin cells and vellus hair leaves you with instant glowing results. Reduce the signs of fine lines, wrinkles, pigmentation, and dullness with this express renewal facial.</p>
                <p>Duration: 30min</p>
                <p>Includes: Double cleanse | Skin prep | Dermaplaning | Cream treatment mask | Skincare & SPF</p>
            </div>,
            href: 'https://www.fresha.com/book-now/the-c-therapy-macid731/services?lid=507601&eid=1482022&oiid=sv%3A16830042&share=true&pId=474146'
        },
        {
            image: '/assets/images/facials/skin-hydration/express-glow.webp',
            title: 'Express Glow',
            paragraphs: <div className='flex flex-col gap-4'>
                <p>Dermalux LED Phototherapy is a non-invasive treatment that uses clinically proven therapeutic light energy to activate the skin’s natural rejuvenation and repair processes without pain or downtime.</p>
                <p>Dermalux combines unique wavelengths of Blue, Red, and Near-Infrared light to boost collagen production, increase hydration, calm redness and irritation, and target blemish-causing bacteria.</p>
                <p>As the light initiates a series of skin-enhancing processes, the benefits continue even after the treatment has finished.</p>
                <p>Duration: 30min</p>
                <p className='pt-4'>Includes: Double cleanse | exfoliation | hydrating mask | dermalux led | scalp massage | SPF</p>
            </div>,
            href: 'https://www.fresha.com/book-now/the-c-therapy-macid731/services?lid=507601&eid=1482022&oiid=sv%3A16828109&share=true&pId=474146'
            
        },
    ],
}

export default function SkinAgelessPage() {
    return (
        <div>
            <ServicesLayout props={EXPRESSFACIALS_DATA} />
            <ImageTextLayout data={EXPRESSFACIALS_DATA.sections} />
        </div>
    );
}
