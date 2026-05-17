import TermsAndConditions from "@/components/terms-and-conditions";
import { generateSeoMetadata } from "@/lib/seo";
import type { Metadata } from 'next'

export const metadata: Metadata = generateSeoMetadata({
    title: 'the.c.therapy | Terms & Conditions',
    description: 'Read our Terms and Conditions regarding gift cards, e-vouchers, discounts, and promotions at The C Therapy.',
    keywords: ['terms and conditions', 'gift cards', 'vouchers', 'promotions'],
    url: 'https://thectherapy.com.au/terms-and-conditions',
  })

export default function TermsAndConditionsPage() {
    return (
        <div className="">
            <TermsAndConditions />
        </div>
    );
}
