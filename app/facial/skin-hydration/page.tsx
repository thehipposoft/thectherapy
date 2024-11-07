import ServicesLayout from '@/components/ServicesLayout';
import ImageTextLayout from '@/components/ImageTextLayout';
import React from 'react';

const SKINHYDRATION_DATA = {
    title: 'Skin Hydration',
    category: 'Facials',
    textColor: '#FFFFFF',
    image: '/assets/images/facials/skin-relax.webp',
    text: `Explore our tailored facial treatments designed to boost hydration and revitalize your skin. From anti-aging and hydration-focused LED light therapy to deeply relaxing facial massages, we address a variety of skin needs. Try our signature Go-To facial for a deep cleanse that targets blemishes, hydrates, and soothes. Each treatment is crafted to enhance your skin’s natural glow and restore balance. Perfect for anyone seeking extra moisture, clarity, and soothing effect in their skin.`,
    sections: [
        {
            image: '/assets/images/facials/skin-hydration/express-glow.webp',
            title: 'Express Glow',
            paragraphs: <div className='flex flex-col gap-4'>
                <p>Dermalux LED Phototherapy is a non-invasive treatment that uses clinically proven therapeutic light energy to activate the skin’s natural rejuvenation and repair processes without pain or downtime.</p>
                <p>Dermalux combines unique wavelengths of Blue, Red, and Near-Infrared light to boost collagen production, increase hydration, calm redness and irritation, and target blemish-causing bacteria.</p>
                <p>As the light initiates a series of skin-enhancing processes, the benefits continue even after the treatment has finished.</p>
                <p className='pt-4'>Includes: Double cleanse | exfoliation | hydrating mask | dermalux led | scalp massage | SPF</p>
            </div>,
            href: 'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?menu=true&offerItems=sv%3A16828109&dppub=true&employeeId=1482022&pId=474146'
            
        },
        {
            image: '/assets/images/facials/skin-hydration/glass-facial.webp',
            title: 'The Glass Skin Facial',
            paragraphs: <div className='flex flex-col gap-4'>
                <p>Our Glass Skin Facial is a go-to treatment for all skin types, ideal for boosting hydration, calming redness and inflammation, reducing acne and breakouts, and delivering that coveted “glass skin” effect, leaving your skin more radiant and plumped than ever.</p>
                <p>This luxurious treatment combines a fluffy brush enzyme exfoliation and LED therapy for a relaxing experience. The LED therapy stimulates collagen production, enhances hydration, and has clinically proven mood-boosting effects. It energizes skin cells for regeneration, calms redness and irritation, and inhibits melanin to restore radiance, while also blitzing blemish-causing bacteria. With this treatment, the benefits continue long after the session ends.</p>
                <p className='pt-4'>Includes: Double cleanse | enzyme peel powder | hot towel | serum infusion | Dermalux LED | Hydrojelly mask | extractions or choice of scalp or arm massage | skincare application & SPF</p>
            </div>,
            href: 'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?menu=true&offerItems=sv%3A16828141&dppub=true&employeeId=1482022&pId=474146'
        },
/*         {
            image: '/assets/images/facials/skin-hydration/detox-facial.webp',
            title: 'The Detox Facial',
            paragraphs: <div className='flex flex-col gap-4'>
                <p>This a great Lymphatic drainage facial that treats holistically the skin concerns from inside out creating a tightening effect on the skin. This constricted function stimulates internal skin processes such as reversal osmosis; bringing nutrients to the upper layers of the skin while promoting beneficial fluid excess clearing and blockages within the circulatory system. Giving you a dewy effect and contoured face look!</p>
                <p>Doble cleanse | exfoliation | argilerine mask | scalp & arm massage | Hot towel | hydrojelly mask | Skincare & SPF application</p>
            </div>,
            href: 'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?allOffer=true&menu=true'
        }, */
        {
            image: '/assets/images/facials/skin-hydration/facial-massage.webp',
            title: 'The Facial Massage',
            paragraphs: <div className='flex flex-col gap-4'>
                <p>Indulge in our luxurious facial massage, crafted especially for those who cherish a hands-on, deeply relaxing experience. This treatment is perfect for anyone looking to unwind while effectively addressing fine lines, wrinkles, and expression marks.</p>
                <p>Enjoy a rejuvenating hand massage complemented by specialized tools like gua sha and cryosticks, which target deeper layers of the skin to support a healthier, detoxified complexion. Benefits include enhanced blood circulation, detoxification, and drainage of excess fluids, leaving your skin feeling refreshed and glowing with renewed radiance.</p>
                <p>Includes: Double cleanse | exfoliation | hydrating cream mask | hand & tool massage for face, neck, and décolletage | sculpting cryosticks | Hydrojelly mask | SPF application.</p>
                <p>This treatment is a favorite, especially for “brides-to-be” looking to achieve a radiant glow before the big day. </p>
                <p>Please note: not recommended for active rosacea, cystic acne, or broken/injured skin.</p>
            </div>,
            href: 'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?menu=true&offerItems=sv%3A8360839&dppub=true&employeeId=1482022&pId=474146'
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
