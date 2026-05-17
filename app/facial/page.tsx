import FacialCareBanner from "@/components/FacialCareBanner";
import FacialGrid from "@/components/FacialGrid";
import { generateSeoMetadata } from "@/lib/seo";
import type { Metadata } from 'next'
 
export const metadata: Metadata = generateSeoMetadata({
  title: 'the.c.therapy | Premium Facial Treatments Melbourne',
  description: 'Discover our range of premium facial treatments including organic facials, express facials, skin hydration, skin renewal, and skin balance treatments designed for all skin types.',
  keywords: ['facial treatments', 'organic facials', 'skincare', 'facials Melbourne', 'skin care', 'beauty treatments'],
  url: 'https://thectherapy.com.au/facial',
})

export default function FacialPage() {
    return (
        <div className="pb-6 sm:pb-0">
            <FacialCareBanner />
            <FacialGrid />
        </div>
    );
}
