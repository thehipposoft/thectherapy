import ServicesLayout from '@/components/ServicesLayout';
import ImageTextLayout from '@/components/ImageTextLayout';
import React from 'react';

const SKINRENEWAL_DATA = {
    title: 'Skin Renewal',
    category: 'Facials',
    textColor: '#FFFFFF',
    image: '/assets/images/facials/skinRenewal.webp',
    text: 'Find a range of mechanical and chemical peels such as Dermaplaning and a range of chemical peels from the brand Medik8, perfect for renewing your skin and keeping it glowy and youthful.',
    sections: [
        {
            image: '/assets/images/facials/skinBalance.webp',
            title: 'Express Dermaplaning',
            paragraphs: <div className='flex flex-col gap-2'>
                <p>Enjoy the professional Dermaplaning pro treatment. Removing dead skin cells and vellum hair leaves you with instant glowing smooth results. Reduce the sings of fine lines and wrinkles, pigmentation and dullness with this express renewal facial.</p>
                <p>Double cleanse | skin prep | Dermaplaning | cream treatment mask |skincare & SPF</p>
            </div>,
            href: 'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?allOffer=true&menu=true'
        },
        {
            image: '/assets/images/facials/skinBalance.webp',
            title: 'The Organic Facial',
            paragraphs: <div className='flex flex-col gap-2'>
                <p>Dermaplaning. Mechanical peel performed with a sterile disposable scalpel. Dead cells and fine hairs are removed. Leaving the skin smoother and brighter, ready to receive actives for feed the skin or leave the skin prep for receive further treatments. </p>
                <p>Double cleanse|skin prep oil|dermaplaning|enzyme peel | express extractions or alternative| serum infusion with micro-ultrasonic spatula| cream mask with Cryosticks scultping face massage | skincare & SPF. </p>
                <p>The benefits:</p>
                <ul>
                    <li>It is an ideal technique for when we need to renew the skin but without dermo-mobilization or suction. </li>
                    <li>It can be done on all skin types (phototype and biotype). </li>
                    <li>It is suitable for pregnant women.</li>
                    <li>Much more hygienic for acne cases. </li>
                    <li>More tolerable for skin with rosacea, sensitive and sensitized skin.</li>
                </ul>
            </div>,
            href: 'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?allOffer=true&menu=true'
        },
        {
            image: '/assets/images/facials/skinBalance.webp',
            title: 'The Detox Facial',
            paragraphs: <div className='flex flex-col gap-4'>
                <p>This a great Lymphatic drainage facial that treats holistically the skin concerns from inside out creating a tightening effect on the skin. This constricted function stimulates internal skin processes such as reversal osmosis; bringing nutrients to the upper layers of the skin while promoting beneficial fluid excess clearing and blockages within the circulatory system. Giving you a dewy effect and contoured face look!</p>
                <p>Doble cleanse | exfoliation | argilerine mask | scalp & arm massage | Hot towel | hydrojelly mask | Skincare & SPF application</p>
            </div>,
            href: 'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?allOffer=true&menu=true'
        },
        {
            image: '/assets/images/facials/skinBalance.webp',
            title: 'The Facial Massage',
            paragraphs: <div className='flex flex-col gap-2'>
                <p>Indulge in our luxurious manual facial, designed especially for massage lovers.This treatment is perfect for those seeking relaxation while targeting fine lines, wrinkles, and expression marks.</p>
                <p>Experience the bliss of an invigorating hand massage, followed by the gentle touch of specialized massage tools like gua sha and cryosticks. These tools work wonders for your skin, reaching even the deepest layers to promote a healthy, toxin-free complexion.Benefits include improved blood circulation, detoxification, and assistance with excess fluid drainage, leaving your skin feeling refreshed and revitalized. Prepare to reveal a fresher, more radiant glow than ever before.</p>
                <p>Includes: Double cleanse | exfoliation| hydrating cream mask application| hand & tools Face,Neck & décolletage massage| sculpting Cryosticks | Hydrojelly mask | SPF Application.</p>
                <p>This treatment is popular & perfect for “Bride to be” a week before the Big Day Please note that Is Not indicated for skins with active Rosacea.</p>
            </div>,
            href: 'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?allOffer=true&menu=true'
        },
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
