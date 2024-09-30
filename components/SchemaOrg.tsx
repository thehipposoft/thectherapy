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
                        "name": "The.c.therapy",
                        "url": "https://thectherapy.com.au/",
                        "logo": "https://thectherapy.com.au/logo-blanco.png",
                        "sameAs": [
                            "https://www.instagram.com/the.c.therapy",
                            "https://www.tiktok.com/@the.c.therapy"
                        ]
                    }`,
                }}
            />
        </>
    )
}

export default SchemaOrg