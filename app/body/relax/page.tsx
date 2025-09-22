import ImageTextLayout from "@/components/ImageTextLayout";
import ServicesLayout from "@/components/ServicesLayout";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'the.c.therapy | Body Relax',
  description: 'You can enjoy of our spa packages of facial and massage for retreat yourself with a indulgence spa day.',
}


const BODY_DATA = {
    title: 'Skin and body Relax',
    category: 'Body',
    textColor: '#333333',
    image: '/assets/images/body/body-relax-banner.webp',
    text: 'You can enjoy of our spa packages of facial and massage for retreat yourself with a indulgence spa day.',
    sections: [
        {
            image: '/assets/images/body/selenite-express.webp',
            imagePosition: 'object-bottom',
            title: 'The Selenite Express',
            paragraphs: <div className='flex flex-col gap-4'>
                <p>Treat yourself to a mini spa day with our Selenite Express, featuring a rejuvenating 30-minute customized facial tailored to your skin’s needs, followed by a soothing 30-minute relaxing oil back massage. This perfect express treatment allows you to retreat and revitalize in just one hour.</p>
            </div>,
            href: 'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?menu=true&offerItems=sv%3A7512557&dppub=true&employeeId=1482022&pId=474146'
        },
        {
            image: '/assets/images/body/mums-time.webp',
            title: "Mum's Me Time",
            paragraphs: <div className='flex flex-col gap-4'>
                <p>A perfect spa day for mum’s to be with an organic hydrating facial and relaxing oil massage in the area of your choice like: face, neck , décolletage and arms & foot massage. This is a pick me up for relaxing yourself with a nurturing facial and calming and pain free massage.</p>
                <p>Duration: 60 minutes</p>
            </div>,
            href: 'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?menu=true&offerItems=sv%3A8554737&dppub=true&employeeId=1482022&pId=474146'

        },
        {
            image: '/assets/images/body/crystal-relax.webp',
            title: 'The Crystal Relaxation',
            paragraphs: <div className='flex flex-col gap-4'>
                <p>Immerse yourself in the ultimate rejuvenation with our Crystal Relaxation treatment. This indulgent experience begins with a 30-minute relaxing oil body massage and is followed by a 45-minute facial, providing a complete spa escape.</p>
                <p>Enjoy a back and legs massage using mushroom bial stones and healing stones to rebalance your energy. Your facial will include a double cleanse, exfoliation, a cream mask alternative, crystal healing tools, and guasha massage, finished with a soothing scalp massage. Complete your experience with customized skincare and SPF for a radiant, protected glow.</p>
            </div>,
            href: 'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?menu=true&offerItems=sv%3A7512529&dppub=true&employeeId=1482022&pId=474146',
        },
    ],
}

export default function BodyRelaxPage() {
    return (
        <div>
            <ServicesLayout props={BODY_DATA} />
            <ImageTextLayout data={BODY_DATA.sections} />
        </div>
    );
}