import ImageTextLayout from "@/components/ImageTextLayout";
import ServicesLayout from "@/components/ServicesLayout";


const BODY_DATA = {
    title: 'Skin and body relax',
    category: 'Body',
    textColor: '#FFFFFF',
    image: '/assets/images/body/bodyBanner.webp',
    text: 'You can find different massage options, manual lymphatic drainage and physical therapy as postural global re-education massage. Also body scultping treatments like radiofrequency, fat cavitation, compression boots, & electrostimulation.',
    sections: [
        {
            image: '/assets/images/facials/skinBalance.webp',
            title: 'Relaxing oil massage',
            paragraphs: <div className='flex flex-col gap-4'>
                <p>Enjoy the relaxing oil massage with acupressure and relaxing music and aromatherapy for the time that you need.</p>
            </div>,
            href: 'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?allOffer=true&menu=true'
        },
        {
            image: '/assets/images/facials/skinBalance.webp',
            title: 'GPR+ massage',
            paragraphs: <div className='flex flex-col gap-4'>
                <p>Combination of 30’ therapeutic Global Postural Re-education and 30’ massage for relax, relief muscular pain or tension.</p>
            </div>,
            href: 'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?allOffer=true&menu=true'

        },
        {
            image: '/assets/images/facials/skinBalance.webp',
            title: 'GPR (global postural re-education)',
            paragraphs: <div className='flex flex-col gap-4'>
                <p>A physical technique through postures and breathing that will help you return to a good physiological posture and pain relief: neck, shoulders, upper or lower back, upper and lower limbs and consequently relieving muscle tension.</p>
            </div>,
            href: 'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?allOffer=true&menu=true'

        },
        {
            image: '/assets/images/facials/skinBalance.webp',
            title: 'Lymphatic drainage massage',
            paragraphs: <div className='flex flex-col gap-4'>
                <p>A LDM is great for boost lymphatic system and remove al the liquid and toxins in between tissue. This will help to eliminate all the liquid accumulated in the body.</p>
            </div>,
            href: 'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?allOffer=true&menu=true'

        },
        {
            image: '/assets/images/facials/skinBalance.webp',
            title: 'Venus Return- anticelullite massage',
            paragraphs: <div className='flex flex-col gap-4'>
                <p>A massage to stimulates the blood circulation to boost the flow and help to eliminate toxines and cellulite.</p>
            </div>,
            href: 'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?allOffer=true&menu=true'

        },
        {
            image: '/assets/images/facials/skinBalance.webp',
            title: 'Body sculpting: Radiofrequency | Fat cavitation | Compression boots',
            paragraphs: <div className='flex flex-col gap-4'>
                <p>Achieve your desired body transformation with our tailored treatment sessions targeting specific areas such as the abdomen, waist, buttocks, back, and arms. Our cutting-edge services include: </p>
                <p>+Radiofrequency: Lift and tone your skin by stimulating collagen production through internal heat, resulting in a firmer, more lifted appearance.</p>
                <p>+Fat Cavitation: Experience painless, non-surgical liposuction that eliminates fat deposits in targeted areas, delivering immediate results. </p>
                <p>+Electro Stimulation: Enhance muscle tone and shape with Russian and interferential wave currents, proven to be effective in sports and aesthetics.</p>
                <p>Click to book now and start your journey to a more sculpted and toned body.</p>
            </div>,
            href: 'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?allOffer=true&menu=true'
        },
    ],
}

export default function BodyPage() {
    return (
        <div>
            <ServicesLayout props={BODY_DATA} />
            <ImageTextLayout data={BODY_DATA.sections} />
        </div>
    );
}