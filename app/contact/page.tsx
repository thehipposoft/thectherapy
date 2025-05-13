import Contact from "@/components/Contact";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'the.c.therapy | Contact',
  description: "Let's start to glow. Feeling good inside and out is possible.",
}

export default function ContactPage() {
    return(
        <div>
             <Contact />
         </div>
    )
}