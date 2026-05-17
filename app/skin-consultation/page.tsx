import SkinConsultation from "@/components/SkinConsultation";
import { generateSeoMetadata } from "@/lib/seo";
import type { Metadata } from 'next'
 
export const metadata: Metadata = generateSeoMetadata({
  title: 'the.c.therapy | Free Skin Consultation - Personalized Treatment Plan',
  description: 'Get a personalized skin consultation with our expert. Discuss your skin concerns and receive expert recommendations for the best facial and skincare treatment options for your unique skin needs.',
  keywords: ['skin consultation', 'free consultation', 'skin analysis', 'skin care advice', 'personalized treatment'],
  url: 'https://thectherapy.com.au/skin-consultation',
})

export default function ServicesPage() {
    return (
        <div>
            <SkinConsultation />
        </div>
    );
}
