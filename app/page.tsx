import About from "@/components/About";
import Banner from "@/components/Banner";
import Products from "@/components/Products";
import SocialMedia from "@/components/SocialMedia";
import Testimonials from "@/components/Testimonials";
import Treatments from "@/components/Treatments";
import VoucherBanner from "@/components/VoucherBanner";
import Transition from "@/components/Transition"
import MobileMenu from "@/components/commons/MobileMenu";
import PopUp from "@/components/commons/PopUp";

export default function Home({}) {
  return (
      <div>
        <MobileMenu />
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
