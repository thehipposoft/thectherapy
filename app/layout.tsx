import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import SchemaOrg from "@/components/SchemaOrg";
import MobileMenu from "@/components/commons/MobileMenu";
import MessageSticky from "@/components/commons/MessageSticky";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The C Theraphy",
  description: "A combination of nature and advanced technology. The c therapy will guide you on your journey to the best version of yourself.",
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
