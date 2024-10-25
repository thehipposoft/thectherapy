import ImageTextLayout from "@/components/ImageTextLayout";
import ServicesLayout from "@/components/ServicesLayout";


const BODY_DATA = {
    title: 'Skin and body Relax',
    category: 'Body',
    textColor: '#FFFFFF',
    image: '/assets/images/body/body-relax-banner.webp',
    text: 'You can enjoy of our spa packages of facial and massage for retreat yourself with a indulgence spa day.',
    sections: [
        {
            image: '/assets/images/body/selenite-express.webp',
            imagePosition: 'object-bottom',
            title: 'The Selenite Express',
            paragraphs: <div className='flex flex-col gap-4'>
                <p>Enjoy of a 30’ facial and 30’ relaxing oil back massage and retreat yourself.</p>
            </div>,
            href: 'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?menu=true&offerItems=sv%3A7512557&dppub=true&employeeId=1482022&pId=474146'
        },
        {
            image: '/assets/images/body/mums-time.webp',
            title: "Mum's Me Time",
            paragraphs: <div className='flex flex-col gap-4'>
                <p>A perfect spa day for mum’s to be with an organic hydrating facial and relaxing oil massage in the area of your choice like: face, neck , décolletage and arms & foot massage. This is a pick me up for relaxing yourself with a nurturing facial and calming and pain free massage. Duration 75’</p>
            </div>,
            href: 'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?menu=true&offerItems=sv%3A8554737&dppub=true&employeeId=1482022&pId=474146'

        },
        {
            image: '/assets/images/body/crystal-relax.webp',
            title: 'The Crystal Relaxation',
            paragraphs: <div className='flex flex-col gap-4'>
                <p>It's a bit of everything what you need . Enjoy a spa day of 45' facial and 45' of relaxing oil body massage. Perfect for have an indulgence time and retreat yourself. From head to toes. </p>
                <p>Back & legs massage with healing stones| face :Double cleanse | exfoliation | cream mask alternative | Cristal healing tools & Cryosticks face massage| scalp massage | skincare & SPF</p>
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