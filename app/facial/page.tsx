import FacialCareBanner from "@/components/FacialCareBanner";
import FacialGrid from "@/components/FacialGrid";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'the.c.therapy | Facials',
  description: "Discover our main Facial services and start to glow immediately.",
}

export default function FacialPage() {
    return (
        <div className="pb-6 sm:pb-0">
            <FacialCareBanner />
            <FacialGrid />
        </div>
    );
}
