import About from "@/components/About";
import AboutComponent from "@/components/AboutPage/AboutComponent";
import BodyMindSoul from "@/components/AboutPage/BodyMindSoul";
import SeeYouSoon from "@/components/AboutPage/SeeYouSoon";
import FacialCareBanner from "@/components/FacialCareBanner";
import FacialGrid from "@/components/FacialGrid";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'the.c.therapy | About',
  description: 'My journey began in physiotherapy. I immersed myself in physical therapies like postural global reeducation and also ventured into the world of aesthetic medicine, learning how to help people feel better physically. But deep down, I knew my heart was in something more holistic — where I could help people feel better inside and out.',
}


export default function AboutPage() {
    return (
        <div>
            <About aboutPage />
            <AboutComponent />
            <BodyMindSoul />
            <SeeYouSoon />
            <FacialCareBanner />
            <FacialGrid />
        </div>
    );
}