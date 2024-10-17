'use client'
import React from "react";
import Script from "next/script"

const SchemaOrg = () => {
    return (
        <>
            <Script
                strategy="afterInteractive"
                type="application/ld+json"
                id="schema-org"
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "C-Therapy",
                        "url": "https://thectherapy.com.au/",
                        "logo": "https://thectherapy.com.au/assets/logo-with-bg.jpg",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+61 414 286 242",
                            "contactType": "customer service",
                            "areaServed": "AU",
                            "availableLanguage": "en"
                        },
                        "sameAs": [
                            "https://www.tiktok.com/@the.c.therapy",
                            "https://www.instagram.com/the.c.therapy/",
                        ]
                    }`,
                }}
            />
        </>
    )
}

export default SchemaOrg