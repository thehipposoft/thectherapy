import React from 'react';

const TermsAndConditions = () => {
    return (
        <div className='flex flex-col md:w-[900px] w-[90vw] mx-auto gap-12 py-24 md:py-12 relative z-20'>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-3xl'>GIFTCARDS/ E-VOUCHERS.</h2>
                    <h1 className='text-2xl'>Terms and Conditions:</h1>
                    <p className='pt-2'>Please note that the following Terms and Conditions apply to our gift cards, e-vouchers, and any current discounts or promotions:</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <h4 className='underline text-xl'>Gift Card/E-Voucher Terms & Conditions:</h4>
                    <ul className='flex flex-col gap-3'>
                        <li>1.	Valid exclusively for facial and body services. Each gift card or e-voucher is for one-time use per person only and is non-transferable.</li>
                        <li>2.	Gift cards and e-vouchers are non-refundable and cannot be exchanged for cash or used to purchase skincare products or memberships.</li>
                        <li>3.	They cannot be combined or accumulated for the purchase of a single service.</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-2'>
                    <h4 className='underline text-xl'>Discount Terms & Conditions:</h4>
                    <ul>
                        <li>1.	Discounts cannot be combined with other promotional offers or discounts.</li>
                        <li>2.	If a product or service is already discounted, no additional discounts will apply.</li>
                    </ul>
                    <p>By purchasing a gift-card or e-voucher, you agree to these terms and conditions.For any questions or further clarification, please don’t hesitate to contact us.</p>
                </div>
            </div>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-3xl'>MEMBERSHIPS</h2>
                    <h1 className='text-2xl'>Terms and Conditions:</h1>
                </div>
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col gap-4'>
                        <h4 className='underline text-xl'>1. Payment and Discounts:</h4>
                        <ul className='flex flex-col gap-3'>
                            <li>• Memberships are offered with pre-applied discounts for multiple sessions or during specific promotions.</li>
                            <li>• Discounts associated with memberships cannot be combined with other offers or promotions.</li>
                            <li>• Membership payments cannot be made using gift cards or e-vouchers.</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h4 className='underline text-xl'>2. Gift Cards and E-Vouchers:</h4>
                        <ul className='flex flex-col gap-3'>
                            <li>• Gift cards and e-vouchers are valid only for redemption on individual treatments at their original prices.</li>
                            <li>• They cannot be applied toward membership purchases or payments.</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h4 className='underline text-xl'>3. Usage and Validity:</h4>
                        <ul className='flex flex-col gap-3'>
                            <li>• Memberships have a validity period from the date of purchase. All sessions included in the membership must be used within this time frame.</li>
                            <li>• Sessions not used within validity period will be considered expired and marked as completed.</li>
                            <li>• Membership benefits are non-transferable and intended exclusively for the registered member.</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h4 className='underline text-xl'>4. Rescheduling and Cancellations:</h4>
                        <ul className='flex flex-col gap-3'>
                            <li>• To reschedule a session, please contact us at least 72 hours before the scheduled appointment.</li>
                            <li>• Late cancellations or failure to reschedule within this timeframe will result in the session being forfeited.</li>
                            <li>• Members will receive reminders to help manage appointments effectively.</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h4 className='underline text-xl'>5. General Terms:</h4>
                        <ul className='flex flex-col gap-3'>
                            <li>• Membership terms and conditions are subject to change at the discretion of the studio.</li>
                            <li>• Memberships are non-refundable.</li>
                        </ul>
                        <p>By purchasing a membership, you agree to these terms and conditions. For further inquiries, please contact us directly.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;