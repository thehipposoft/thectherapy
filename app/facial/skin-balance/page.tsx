import FacialLayout from '@/components/FacialLayout';
import Header from '@/components/Header';
import ImageTextLayout from '@/components/ImageTextLayout';
import React from 'react';

const SKINBALANCE_DATA = {
    title: 'Skin Balance',
    image: '/assets/images/facials/skinBalance.webp',
    text: 'This are a range of Organic Facials with bare roots Australia skincare. From express, simply to the most luxury bespoke facial experience to choose.',
    sections: [
        {
            image: '/assets/images/facials/skinBalance.webp',
            title: 'Express Plant Peel',
            paragraphs: <div className='flex flex-col gap-4'>
                <p>A certified organic professional peel blended with enzyme and fruit acid exfoliants. Infused with brightening & antioxidant actives to help improve skin damage whilst natural moisturising factors leave the skin feeling rehydrated with no downtime.</p>
                <p>Double cleanse | plant Peel | treatment mask | scalp massage| skincare application| SPF application</p>
            </div>
        },
        {
            image: '/assets/images/facials/skinBalance.webp',
            title: 'The Organic Facial',
            paragraphs: <div className='flex flex-col gap-4'>
                <p>This organic facial is created to restore your skin while support the skin microbiome providing antioxidants & essential fatty acids necessaries for a healthier skin function.</p>
                <p>Relaxing double cleanse | exfoliation with Bamboo Enzyme Peel or or Plant Peel | hot towel | hydrating skincare mask bare roots range application with brush | lymphatic drainage massage with pink quartz skin tools | Relaxing, deeply and invigorating face, neck & shoulder massage I SPF application.</p>
            </div>
        },
    ],
}

export default function SkinBalancePage() {
    return (
        <div>
            <Header />
            <FacialLayout props={SKINBALANCE_DATA} />
            <ImageTextLayout data={SKINBALANCE_DATA.sections} />
        </div>
    );
}
