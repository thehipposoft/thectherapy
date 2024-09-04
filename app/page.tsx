import About from "@/components/About";
import Banner from "@/components/Banner";
import Products from "@/components/Products";
import SocialMedia from "@/components/SocialMedia";
import Testimonials from "@/components/Testimonials";
import Treatments from "@/components/Treatments";
import VoucherBanner from "@/components/VoucherBanner";
import Transition from "@/components/Transition"

export default function Home({}) {
  return (
      <Transition>
        <Banner />
        <About />
        <Products />
        <Treatments />
        <Testimonials />
        <SocialMedia />
        <VoucherBanner />
      </Transition>
  );
}
