import About from "@/components/About";
import AboutComponent from "@/components/AboutPage/AboutComponent";
import BodyMindSoul from "@/components/AboutPage/BodyMindSoul";
import SeeYouSoon from "@/components/AboutPage/SeeYouSoon";
import FacialCareBanner from "@/components/FacialCareBanner";
import FacialGrid from "@/components/FacialGrid";

export default function AboutPage() {
    return (
        <div>
            <About aboutPage />
            <AboutComponent />
            <BodyMindSoul />
            <SeeYouSoon />
            <FacialCareBanner />
            <FacialGrid />
        </div>
    );
}