import ServicesLayout from '@/components/ServicesLayout';
import ImageTextLayout from '@/components/ImageTextLayout';
import React from 'react';

const SKINHYDRATION_DATA = {
    title: 'Skin Hydration',
    category: 'Facials',
    textColor: '#333333',
    image: '/assets/images/facials/skinHydration.webp',
    text: `A range of facial treatments to meet your skin's needs, from anti-aging and hydration-boosting LED light therapy, skin detoxifying facial, relaxing facial massages to our Go-to facial treatment for a deep cleansing anti-blemishes, hydrating & sooting one.`,
    sections: [
        {
            image: '/assets/images/facials/skinBalance.webp',
            title: 'Express Glow',
            paragraphs: <div className='flex flex-col gap-2'>
                <p>Dermalux LED Phototherapy is a non-invasive treatement that uses a clincally proven therapeutic light energy to trigger the skins natural rejuvenation and repair processes without pain or downtime.</p>
                <p>Dermalux uses unique combinations of clinaclly proven Blue, Red and Near Infrared wavelenghts to boost collagen production, increase hydration, calm redness and irritation and blemish causing bacteria.</p>
                <p>As the light triggers a whole cascade of skin enhancing processes, the benefits continue even after the treatment ahs finished.</p>
                <p className='pt-4'>Double cleanse | exfoliation | hydrating mask | dermalux led | scalp massage | SPF</p>
            </div>,
            href: 'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?allOffer=true&menu=true'
        },
        {
            image: '/assets/images/facials/skinBalance.webp',
            title: 'The Organic Facial',
            paragraphs: <div className='flex flex-col gap-2'>
                <p>This is one of our go-to treatment as is a great option for all types of skin in needs of improve hydration, calm redness/ inflammation, acne/ breakouts and give that glass skin effect, your skin will be glowy and plumped than ever.</p>
                <p>Enjoy a fluffy brush enzyme exfoliation & LED therapy some luxury me-time with a unique combination production, increase hydration & proven mood enhacing effects, energising skin cells to kick start regeneration, calm redness & irritation or restore radiance by melanin inhibition blitz blemish causing bacteria.</p>
                <p>As the light triggers a whole cascade of skin enhacing processes, the benefits continue even after the treatment has finished.</p>
                <p className='pt-4'>Doubble cleanse | enzyme peel powder | hot towel | serum infusion | dermalux led | Hydrojelly mask | extraction or choose one: scalp or arm massage | skincare application & SPF</p>
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

export default function SkinHydrationPage() {
    return (
        <div>
            <ServicesLayout props={SKINHYDRATION_DATA} />
            <ImageTextLayout data={SKINHYDRATION_DATA.sections} />
        </div>
    );
}
