'use client'
import React from "react";
import Script from "next/script"

const SchemaOrg = () => {
    return (
        <>
            {/* Organization Schema */}
            <Script
                strategy="afterInteractive"
                type="application/ld+json"
                id="schema-organization"
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "The C Therapy",
                        "url": "https://thectherapy.com.au/",
                        "logo": "https://thectherapy.com.au/logo-blanco.png",
                        "description": "Premium facial and body treatments, skincare consultations, and holistic wellness services in Melbourne",
                        "sameAs": [
                            "https://www.instagram.com/the.c.therapy",
                            "https://www.tiktok.com/@the.c.therapy"
                        ],
                        "contact": {
                            "@type": "ContactPoint",
                            "contactType": "Customer Service",
                            "telephone": "+61-426 536 724",
                            "email": "info@thectherapy.com.au"
                        }
                    }`,
                }}
            />

            {/* LocalBusiness Schema */}
            <Script
                strategy="afterInteractive"
                type="application/ld+json"
                id="schema-localbusiness"
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "The C Therapy",
                        "image": "https://thectherapy.com.au/logo-blanco.png",
                        "url": "https://thectherapy.com.au",
                        "telephone": "+61-426 536 724",
                        "email": "info@thectherapy.com.au",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "K3 High Street",
                            "addressLocality": "Melbourne",
                            "addressRegion": "VIC",
                            "postalCode": "3000",
                            "addressCountry": "AU"
                        },
                        "areaServed": "AU",
                        "priceRange": "$$",
                        "openingHoursSpecification": [
                            {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                "opens": "09:00",
                                "closes": "18:00"
                            },
                            {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": "Sunday",
                                "opens": "10:00",
                                "closes": "17:00"
                            }
                        ]
                    }`,
                }}
            />

            {/* Service Schema for Facials */}
            <Script
                strategy="afterInteractive"
                type="application/ld+json"
                id="schema-service-facials"
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Professional Facial Treatments",
                        "description": "Premium organic and professional facial treatments including express facials, skin hydration, skin renewal, skin balance, and skin ageless treatments",
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": "The C Therapy",
                            "url": "https://thectherapy.com.au"
                        },
                        "serviceType": "Beauty and Skincare Service",
                        "areaServed": "AU"
                    }`,
                }}
            />

            {/* Service Schema for Body Treatments */}
            <Script
                strategy="afterInteractive"
                type="application/ld+json"
                id="schema-service-body"
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Body Treatments & Massage Therapy",
                        "description": "Therapeutic body treatments including massages, lymphatic drainage, compression boots, and specialized body sculpting treatments",
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": "The C Therapy",
                            "url": "https://thectherapy.com.au"
                        },
                        "serviceType": "Wellness and Massage Service",
                        "areaServed": "AU"
                    }`,
                }}
            />
        </>
    )
}

export default SchemaOrg