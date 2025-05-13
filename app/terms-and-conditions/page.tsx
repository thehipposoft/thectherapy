import TermsAndConditions from "@/components/terms-and-conditions";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'the.c.therapy | Terms & Conditions',
    description: "GIFTCARDS/ E-VOUCHERS. Terms and Conditions: Please note that the following Terms and Conditions apply to our gift cards, e-vouchers, and any current discounts or promotions:",
  }

export default function TermsAndConditionsPage() {
    return (
        <div className="">
            <TermsAndConditions />
        </div>
    );
}
