import ServicesLayout from '@/components/ServicesLayout';
import ImageTextLayout from '@/components/ImageTextLayout';
import React from 'react';
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'the.c.therapy | Facials - Skin Balance',
  description: "This are a range of organic facials performed with Bare Roots Australia skincare. From a simple express facial  to the most luxury bespoke facial experience to choose. Great for all compromised skins like dermatitis, acne, sensitive, dryness & dehydration",
}

const SKINBALANCE_DATA = {
    title: 'Skin Balance',
    category: 'Facials',
    textColor: '#333333',
    image: '/assets/images/facials/skin-balancegrid.webp',
    text: 'This are a range of organic facials performed with Bare Roots Australia skincare. From a simple express facial  to the most luxury bespoke facial experience to choose. Great for all compromised skins like dermatitis, acne, sensitive, dryness & dehydration',
    sections: [
        {
            image: '/assets/images/facials/skin-balance/express-plant-peel.webp',
            title: 'Express Plant Peel',
            paragraphs: <div className='flex flex-col gap-4'>
                <p>A certified organic professional peel blended with enzyme and fruit acid exfoliants. Infused with brightening & antioxidant actives to help improve skin damage whilst natural moisturising factors leave the skin feeling rehydrated with no downtime.</p>
                <p>Double cleanse | plant Peel | treatment mask | scalp massage| skincare application| SPF application</p>
            </div>,
            href: 'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?menu=true&offerItems=sv%3A16679907&pId=474146&dppub=true&employeeId=1482022'
        },
        {
            image: '/assets/images/facials/skin-balance/organic-facial.webp',
            imagePosition: 'object-bottom',
            title: 'The Organic Facial',
            paragraphs: <div className='flex flex-col gap-4'>
                <p>This organic facial is created to restore your skin while support the skin microbiome providing antioxidants & essential fatty acids necessaries for a healthier skin function.</p>
                <p>Relaxing double cleanse | exfoliation with Bamboo Enzyme Peel or or Plant Peel | hot towel | hydrating skincare mask bare roots range application with brush | lymphatic drainage massage with pink quartz skin tools | Relaxing, deeply and invigorating face, neck & shoulder massage I SPF application.</p>
            </div>,
            href: 'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?menu=true&offerItems=sv%3A7466559&pId=474146&dppub=true&employeeId=1482022'
        },
    ],
}

export default function SkinBalancePage() {
    return (
        <div>
            <ServicesLayout props={SKINBALANCE_DATA} />
            <ImageTextLayout data={SKINBALANCE_DATA.sections} />
        </div>
    );
}
