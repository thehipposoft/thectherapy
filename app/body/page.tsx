import ImageTextLayout from "@/components/ImageTextLayout";
import ServicesLayout from "@/components/ServicesLayout";


const BODY_DATA = {
    title: 'Skin and body',
    category: 'Body',
    textColor: '#FFFFFF',
    image: '/assets/images/body/bodyBanner.webp',
    text: 'You can find different massage options, manual lymphatic drainage and physical therapy as postural global re-education massage. Also body scultping treatments like radiofrequency, fat cavitation, compression boots, & electrostimulation.',
    sections: [
        {
            image: '/assets/images/body/boots.webp',
            imagePosition: 'object-bottom',
            title: 'Compression Boots',
            paragraphs: <div className='flex flex-col gap-4'>
            </div>,
            href: 'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?menu=true&offerItems=sv%3A17196376&dppub=true&employeeId=1482022&pId=474146'
        },
        {
            image: '/assets/images/body/relaxing-massage.webp',
            title: 'Relaxing Oil Massage',
            paragraphs: <div className='flex flex-col gap-4'>
                <p>Enjoy the relaxing oil massage with acupressure and relaxing music and aromatherapy for the time that you need.</p>
            </div>,
            href: 'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?menu=true&offerItems=sv%3A7486313&dppub=true&employeeId=1482022&pId=474146'

        },
        {
            image: '/assets/images/body/lymphatic-massage.webp',
            title: 'Lymphatinc Drainage Massage',
            paragraphs: <div className='flex flex-col gap-4'>
                <p>A LDM is great for boost lymphatic system and remove al the liquid and toxins in between tissue. This will help to eliminate all the liquid accumulated in the body.</p>
            </div>,
            href: 'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?menu=true&offerItems=sv%3A7490846&dppub=true&employeeId=1482022&pId=474146'

        },
        {
            image: '/assets/images/body/anticelullite-massage.webp',
            title: 'Venus Return- anticelullite massage',
            paragraphs: <div className='flex flex-col gap-4'>
                <p>A massage to stimulates the blood circulation to boost the flow and help to eliminate toxines and cellulite.</p>
            </div>,
            href: 'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?menu=true&offerItems=sv%3A7490838&dppub=true&employeeId=1482022&pId=474146'

        },
        {
            image: '/assets/images/body/body-sculpting.png',
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

export default function BodyPage() {
    return (
        <div>
            <ServicesLayout props={BODY_DATA} />
            <ImageTextLayout data={BODY_DATA.sections} />
        </div>
    );
}