import ServicesLayout from '@/components/ServicesLayout';
import ImageTextLayout from '@/components/ImageTextLayout';
import React from 'react';

const SKINAGELESS_DATA = {
    title: 'Skin Ageless',
    category: 'Facials',
    textColor: '#FFFFFF',
    image: '/assets/images/facials/skin-relax.webp',
    text: 'Stop the time and take your skin another level of glow and plumpness by stimulating & boosting  your own collagen production in a natural way & your skin will waken up & glow up like never before with this facials.',
    sections: [
        {
            image: '/assets/images/facials/skin-ageless/infusion-facial.webp',
            title: 'The Infusion Facil',
            paragraphs: <div className='flex flex-col gap-2'>
                <p>A rejuvenating treatment that delivers a custom blend of active ingredients directly into your skin for maximum effectiveness. Using a specialized nano infusion device, we apply a custom blend of hyaluronic acid, DMAE, vitamin C+E, Argilerine, stem cells, peptides, and epidermal growth factors to your skin. These potent ingredients are delivered through microneedle channels, gently created by pyramid-shaped silicone or steel needles ensure the deep penetration of these powerful serums. Also provides gentle exfoliation to reveal smoother, more radiant skin. Say goodbye to fine lines, wrinkles, and dullness as your skin is revitalized from within.</p>
                <p>Experience the transformative power of our Nano Infusion Facial and uncover a more youthful, glowing complexion. </p>
                <p className='pt-4'>Double cleanse | enzyme peel | nano infusion on face and neck with actives serums | Hydrojelly mask | scalp or neck & arms massage | Skincare & SPF.</p>
            </div>,
            href: 'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?allOffer=true&menu=true'
        },
        {
            image: '/assets/images/facials/skin-ageless/radiofrecuency.webp',
            title: 'The Organic Facial',
            paragraphs: <div className='flex flex-col gap-2'>
                <p>Radiofrequency facial rejuvenation manages to tighten the skin through controlled thermal damage to its deepest layers, which produces a reduction in fine wrinkles, deep wrinkles, scars, stretch marks with a lifting effect.</p>
                <p>Double cleanse | exfoliation | Radiofrequency | Cream mask | SPF application</p>
            </div>,
            href: 'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?allOffer=true&menu=true'
        },
        {
            image: '/assets/images/facials/skin-ageless/facial-bloom.webp',
            title: 'The Facial Bloom',
            paragraphs: <div className='flex flex-col gap-4'>
                <p>Our Collagen Therapy Induction treatment is a cutting-edge medical procedure designed to visibly reduce wrinkles and treat acne scarring. Through a series of controlled micro-injuries created by microneedles, this therapy stimulates the skin's natural healing process, resulting in a fresher, more radiant complexion.</p>
                <p>The benefits of The Facial Bloom are numerous:</p>
                <ul>
                    <li>Reduction of acne scarring</li>
                    <li>Strenghtening of the skin structure</li>
                    <li>Increased natural collagen formation</li>
                    <li>Minimization of fine lines and wrinkles</li>
                    <li>Reduction of pore size and improvement of skin texture.</li>
                </ul>
                <p>Unveil the transformative effects of this facial with a revitalized & glowing complexion.</p>
                <p>Double cleanse | enzyme peel | microneedling on face & neck with actives serums| Collagen Sheet mask | scalp or neck & arms massage | Skincare & SPF.</p>
            </div>,
            href: 'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?allOffer=true&menu=true'
        },

    ],
}

export default function SkinAgelessPage() {
    return (
        <div>
            <ServicesLayout props={SKINAGELESS_DATA} />
            <ImageTextLayout data={SKINAGELESS_DATA.sections} />
        </div>
    );
}
