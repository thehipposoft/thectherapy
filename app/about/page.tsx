import About from "@/components/About";
import AboutComponent from "@/components/AboutPage/AboutComponent";
import BodyMindSoul from "@/components/AboutPage/BodyMindSoul";
import SeeYouSoon from "@/components/AboutPage/SeeYouSoon";
import FacialCareBanner from "@/components/FacialCareBanner";
import FacialGrid from "@/components/FacialGrid";
import { generateSeoMetadata } from "@/lib/seo";
import type { Metadata } from 'next'
 
export const metadata: Metadata = generateSeoMetadata({
  title: 'the.c.therapy | About Us - Holistic Beauty & Wellness',
  description: 'Learn about The C Therapy journey. We combine physiotherapy, aesthetic medicine, and holistic wellness to help you feel better inside and out. Discover our philosophy and approach to beauty.',
  keywords: ['about us', 'holistic beauty', 'wellness', 'therapy', 'physiotherapy', 'aesthetic medicine'],
  url: 'https://thectherapy.com.au/about',
})


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