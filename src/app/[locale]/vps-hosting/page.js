import FAQs from "@/components/shared/FAQ";
import Footer from "@/components/shared/Footer";
import Navbar2 from "@/components/shared/Navbar2";
import Reviews from "@/components/shared/Review";
import Topbar from "@/components/shared/Topbar";
import Video from "@/components/shared/Video";
import ControlPanel from "@/components/wordpress-hosting/ControlPanel";
import Hero from "@/components/vps-hosting/Hero";
import OrderNow1 from "@/components/wordpress-hosting/OrderNow-1";
import OrderNow2 from "@/components/wordpress-hosting/OrderNow-2";
import OrderNow3 from "@/components/wordpress-hosting/OrderNow-3";
import PeopleCards from "@/components/wordpress-hosting/PeopleCards";
import ScreenshotSlider from "@/components/wordpress-hosting/ScreenshotSlider";
import BacktoTop from "@/components/shared/BacktoTop";
import PackagesPrices from "@/components/dedicated-servers/PackagePrice";
import Header from "@/components/shared/Header";
import Solution from "@/components/vps-hosting/Solution";
import WhySeekahost from "@/components/vps-hosting/WhySeekahost";
import CTA from "@/components/shared/CTA";
import SecureScalable from "@/components/vps-hosting/SecureScalable";

export const metadata = {
    title: "VPS Hosting"
}

export default function VPSHosting() {
    return (
        <>
            {/* <div className="hidden lg:block">
                <Topbar />
            </div>
            <Navbar2 /> */}
            <Header />
            <Hero />
            <PackagesPrices />
            <Solution />
            <PeopleCards />
            <WhySeekahost />
            <Reviews />
            <SecureScalable />
            <FAQs />
            <CTA />
            <BacktoTop />
            <Footer />
        </>
    )
}