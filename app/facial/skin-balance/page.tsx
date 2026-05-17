import ServicesLayout from '@/components/ServicesLayout';
import ImageTextLayout from '@/components/ImageTextLayout';
import React from 'react';
import { generateSeoMetadata } from '@/lib/seo';
import type { Metadata } from 'next'
 
export const metadata: Metadata = generateSeoMetadata({
  title: 'the.c.therapy | Skin Balance - Organic Facials for Sensitive Skin',
  description: 'Experience organic facial treatments with Bare Roots Australia skincare designed for compromised skin including dermatitis, acne, sensitivity, and dehydration. From express to luxury facials.',
  keywords: ['organic facial', 'sensitive skin', 'acne facial', 'dermatitis treatment', 'skin balance', 'Bare Roots Australia'],
  url: 'https://thectherapy.com.au/facial/skin-balance',
})

const SKINBALANCE_DATA = {
    title: 'Skin Balance',
    category: 'Facials',
    textColor: '#333333',
    image: '/assets/images/facials/skin-balancegrid.webp',
    text: 'This are a range of organic facials performed with Bare Roots Australia skincare. From a simple express facial  to the most luxury bespoke facial experience to choose. Great for all compromised skins like dermatitis, acne, sensitive, dryness & dehydration',
    sections: [

        {
            image: '/assets/images/facials/skin-balance/organic-facial.webp',
            imagePosition: 'object-bottom',
            title: 'The Organic Facial',
            paragraphs: <div className='flex flex-col gap-4'>
                <p>This organic facial is created to restore your skin while support the skin microbiome providing antioxidants & essential fatty acids necessaries for a healthier skin function.</p>
                <p>Relaxing double cleanse | exfoliation with Bamboo Enzyme Peel or or Plant Peel | hot towel | hydrating skincare mask bare roots range application with brush | lymphatic drainage massage with pink quartz skin tools | Relaxing, deeply and invigorating face, neck & shoulder massage I SPF application.</p>
            </div>,
            href: 'https://www.fresha.com/book-now/the-c-therapy-macid731/services?lid=507601&eid=1482022&oiid=sv%3A13076180&share=true&pId=474146'
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
