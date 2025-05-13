import SkinConsultation from "@/components/SkinConsultation";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'the.c.therapy | Facials - Skin Ageless',
  description: "We recommend you to start with a skin consultation as is the most important part of every treatment to discuss your skin needs and Carolina will advise you on that day the best options whether you need help on your skincare or what facial is right for you.",
}

export default function ServicesPage() {
    return (
        <div>
            <SkinConsultation />
        </div>
    );
}
