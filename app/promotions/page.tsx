import { generateSeoMetadata } from "@/lib/seo";
import type { Metadata } from 'next';
import PromotionsCompo from "./Promotions";

export const metadata: Metadata = generateSeoMetadata({
    title: 'the.c.therapy | Promotions & Offers',
    description: 'Check out the latest promotions, exclusive offers, and special discounts at The C Therapy. Enjoy amazing deals on our premium facial treatments, body therapies, and skincare products.',
    keywords: ['promotions', 'offers', 'discounts', 'deals', 'special offers'],
    url: 'https://thectherapy.com.au/promotions',
})

export default function PromotionsPage() {
    return (
        <PromotionsCompo />
    );
}