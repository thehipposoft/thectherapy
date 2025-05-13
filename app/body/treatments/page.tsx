import ImageTextLayout from "@/components/ImageTextLayout";
import ServicesLayout from "@/components/ServicesLayout";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'the.c.therapy | Body Treatments',
  description: 'At The C Therapy, we offer a variety of body treatments to suit your unique needs. Choose from relaxing oil and customized massages, as well as aesthetic options like anti-cellulite and venous return therapies. We also provide manual lymphatic drainage and compression boots to enhance your wellness. Our body sculpting treatments, including radiofrequency, fat cavitation, and electrostimulation, are tailored to help you achieve your desired results.',
}

const BODY_DATA = {
    title: 'Skin and body',
    category: 'Body',
    textColor: '#FFFFFF',
    image: '/assets/images/body/bodytreatmentsbanner.webp',
    text: 'At The C Therapy, we offer a variety of body treatments to suit your unique needs. Choose from relaxing oil and customized massages, as well as aesthetic options like anti-cellulite and venous return therapies. We also provide manual lymphatic drainage and compression boots to enhance your wellness. Our body sculpting treatments, including radiofrequency, fat cavitation, and electrostimulation, are tailored to help you achieve your desired results.',
    sections: [
        {
            image: '/assets/images/body/boots.webp',
            imagePosition: 'object-bottom',
            title: 'Compression Boots',
            paragraphs: <div className='flex flex-col gap-4'>
                <p>Feel lighter and renewed with this powerful treatment designed to accelerate muscle recovery and relieve discomfort. This therapy boosts venous return, oxygenates muscles, and helps eliminate metabolic waste responsible for soreness and fatigue. Ideal for anyone experiencing inflammation, edema, tingling, or a heavy sensation in their legs, this treatment reduces swelling, optimizes muscle tissue pressure, and enhances performance, while providing a soothing massage for deep relaxation and overall well-being. Perfect for post-workout recovery or simply to improve circulation and muscle health.Give your legs the care they deserve!</p>
            </div>,
            href: 'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?menu=true&offerItems=sv%3A17196376&dppub=true&employeeId=1482022&pId=474146'
        },
        {
            image: '/assets/images/body/body-relax-banner.webp',
            title: 'Relaxing Oil Massage',
            paragraphs: <div className='flex flex-col gap-4'>
                <p>Indulge in our Relaxing Oil Massage, featuring acupressure, soothing music, and aromatherapy to create a serene atmosphere. This treatment is tailored to meet your specific needs, allowing for customized massage techniques that ensure a personalized experience focused on your relaxation and rejuvenation.</p>
            </div>,
            href: 'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?menu=true&offerItems=sv%3A7486313&dppub=true&employeeId=1482022&pId=474146'

        },
        {
            image: '/assets/images/body/lymphatic-massage.webp',
            title: 'Lymphatinc Drainage Massage',
            paragraphs: <div className='flex flex-col gap-4'>
                <p>Our Lymphatic Drainage Massage (LDM) is designed to enhance your lymphatic system and facilitate the removal of excess fluid and toxins from your body. This gentle, rhythmic massage technique helps reduce fluid accumulation, promoting overall wellness and rejuvenation. Experience the benefits of improved circulation and a lighter, more refreshed feeling as you support your body’s natural detoxification process.</p>
            </div>,
            href: 'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?menu=true&offerItems=sv%3A7490846&dppub=true&employeeId=1482022&pId=474146'

        },
        {
            image: '/assets/images/body/venus-massage.webp',
            title: 'Venus Return- anticelullite massage',
            paragraphs: <div className='flex flex-col gap-4'>
                <p>A massage to stimulates the blood circulation to boost the flow and help to eliminate toxines and cellulite.</p>
            </div>,
            href: 'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?menu=true&offerItems=sv%3A7490838&dppub=true&employeeId=1482022&pId=474146'

        },
        {
            image: '/assets/images/body/body-sculpting.webp',
            title: 'Body sculpting: Radiofrequency | Fat cavitation | Electroestimulation',
            paragraphs: 
                <div className='flex flex-col gap-4'>
                    <p>Depending on your needs it will be a session of one area:</p>
                    <p>Area 1: abdomen & waist</p>
                    <p>Area 2: buttocks & back legs </p>
                    <p>Area 3: back (flanks) & arms</p>
                    <p>• Radiofrequency. Is a device that lift & tone the skin by internal heat estimulting collagen production. Giving firmness to the area to treat with a lifting effect.</p>
                    <p>• Fat cavitation. Also known as non-surgical liposuction, consists of a painless reducing treatment with immediate effects whose objective is to eliminate the fat deposits present in the body without the need to carry out a surgical procedure. With the ultracavitador you can remove fat deposits from the abdomen, flanks, lower back, buttocks, trochanters and thighs.</p>
                    <p>• Electro stimulation. They are Russian and interferential wave currents that have been used for decades in sports and aesthetics as a very effective tool to achieve muscle hypertrophy, in order to model, gain muscle volume, or improve muscle characteristics to increase sports performance and tone, shape the body.</p>
                </div>
                ,
            href: 'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?menu=true&offerItems=sv%3A10318982&dppub=true&employeeId=1482022&pId=474146',
        },
    ],
}

export default function BodyTreatmentsPage() {
    return (
        <div>
            <ServicesLayout props={BODY_DATA} />
            <ImageTextLayout data={BODY_DATA.sections} />
        </div>
    );
}