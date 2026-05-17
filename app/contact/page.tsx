import Contact from "@/components/Contact";
import { generateSeoMetadata } from "@/lib/seo";
import type { Metadata } from 'next'
 
export const metadata: Metadata = generateSeoMetadata({
  title: 'the.c.therapy | Contact Us - Melbourne Clinic',
  description: 'Get in touch with The C Therapy in Melbourne. Contact us for booking appointments, skin consultations, and inquiries about our facial and body treatments.',
  keywords: ['contact', 'booking', 'appointment', 'consultation', 'Melbourne', 'inquiry'],
  url: 'https://thectherapy.com.au/contact',
})

export default function ContactPage() {
    return(
        <div>
             <Contact />
         </div>
    )
}