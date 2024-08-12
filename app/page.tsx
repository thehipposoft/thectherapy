import About from "@/components/About";
import Announcement from "@/components/Announcement";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Products from "@/components/Products";
import SocialMedia from "@/components/SocialMedia";
import Testimonials from "@/components/Testimonials";
import Treatments from "@/components/Treatments";
import VoucherBanner from "@/components/VoucherBanner";

export default function Home() {
  return (
    <div>
      <Announcement />
      <Header />
      <Banner />
      <About />
      <Products />
      <Treatments />
      <Testimonials />
      <SocialMedia />
      <VoucherBanner />
    </div>
  );
}
