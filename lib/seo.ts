import { Metadata } from 'next'

interface SeoMetadataProps {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'product'
  author?: string
}

export function generateSeoMetadata({
  title,
  description,
  keywords = [],
  image = 'https://thectherapy.com.au/assets/images/commons/og-image.png',
  url = 'https://thectherapy.com.au',
  type = 'website',
  author = 'The C Therapy',
}: SeoMetadataProps): Metadata {
  return {
    title,
    description,
    keywords: ['the c therapy', 'facial', 'skincare', 'massage', 'treatments', ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      type: type as any,
      url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: 'The C Therapy',
      locale: 'en_AU',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@the.c.therapy',
    },
    authors: [{ name: author }],
    creator: author,
    publisher: 'The C Therapy',
    metadataBase: new URL('https://thectherapy.com.au'),
  }
}

// Helper for business schema
export function generateBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'The C Therapy',
    image: 'https://thectherapy.com.au/logo-blanco.png',
    url: 'https://thectherapy.com.au',
    telephone: '+61-XXXXX-XXXXX', // Update with actual phone
    email: 'info@thectherapy.com.au',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'K3 High Street',
      addressLocality: 'Melbourne',
      addressRegion: 'VIC',
      postalCode: '3000',
      addressCountry: 'AU',
    },
    areaServed: 'AU',
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: [
      'https://www.instagram.com/the.c.therapy',
      'https://www.tiktok.com/@the.c.therapy',
    ],
  }
}

// Helper for breadcrumb schema
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  }
}

// Helper for service/treatment schema
export function generateServiceSchema(service: {
  name: string
  description: string
  price?: string
  duration?: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'The C Therapy',
      url: 'https://thectherapy.com.au',
    },
    ...(service.price && { price: service.price }),
    ...(service.duration && { duration: service.duration }),
    ...(service.image && { image: service.image }),
  }
}
