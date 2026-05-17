import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import SchemaOrg from "@/components/SchemaOrg";
import Hotjar from "./Hotjar";
import MobileMenu from "@/components/commons/MobileMenu";
import MessageSticky from "@/components/commons/MessageSticky";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "the.c.therapy | Premium Facial & Body Treatments Melbourne",
    description: "Experience the best of nature and advanced technology. Discover premium facial treatments, body therapies, skincare consultations, and holistic wellness services at The C Therapy in Melbourne.",
    keywords: [
      "facial treatments",
      "body massage",
      "skincare",
      "holistic therapy",
      "beauty treatments",
      "Melbourne",
      "K3 High Street",
    ],
    alternates: {
      canonical: "https://thectherapy.com.au",
    },
    openGraph: {
      title: "the.c.therapy | Premium Facial & Body Treatments Melbourne",
      description: "Experience the best of nature and advanced technology. Discover premium facial treatments, body therapies, and holistic wellness services.",
      type: "website",
      url: "https://thectherapy.com.au",
      siteName: "The C Therapy",
      locale: "en_AU",
      images: [
        {
          url: "https://thectherapy.com.au/assets/images/commons/og-image.png",
          width: 1200,
          height: 630,
          alt: "The C Therapy - Premium Facial & Body Treatments",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "the.c.therapy | Premium Facial & Body Treatments Melbourne",
      description: "Experience the best of nature and advanced technology.",
      images: ["https://thectherapy.com.au/assets/images/commons/og-image.png"],
      creator: "@the.c.therapy",
    },
    metadataBase: new URL("https://thectherapy.com.au"),
    authors: [{ name: "The C Therapy" }],
    creator: "The C Therapy",
    publisher: "The C Therapy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <GoogleAnalytics />
          <Hotjar />
          <SchemaOrg />
          <SmoothScroll>
            <header>
              <MobileMenu />
              <Header />
            </header>
              {children}
            <footer>
              <MessageSticky />
              <Footer />
            </footer>
          </SmoothScroll>
      </body>
    </html>
  );
}
