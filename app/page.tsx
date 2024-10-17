import About from "@/components/About";
import Banner from "@/components/Banner";
import Products from "@/components/Products";
import SocialMedia from "@/components/SocialMedia";
import Testimonials from "@/components/Testimonials";
import Treatments from "@/components/Treatments";
import VoucherBanner from "@/components/VoucherBanner";
import FacialCareBanner from "@/components/FacialCareBanner";
import FacialGrid from "@/components/FacialGrid";

export default function Home({}) {
  return (
      <div>
        <Banner />
        <FacialCareBanner />
        <FacialGrid />
        <About />
        <Treatments />
        <Products />
        <Testimonials />
        <SocialMedia />
        <VoucherBanner />
      </div>
  );
}
