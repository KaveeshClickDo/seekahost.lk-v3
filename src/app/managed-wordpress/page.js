import FAQs from "@/components/shared/FAQ";
import Footer from "@/components/shared/Footer";
import Navbar2 from "@/components/shared/Navbar2";
import Reviews from "@/components/shared/Review";
import Topbar from "@/components/shared/Topbar";
import Video from "@/components/shared/Video";
import ControlPanel from "@/components/managed-wordpress/ControlPanel";
import Hero from "@/components/managed-wordpress/Hero";
import OrderNow1 from "@/components/managed-wordpress/OrderNow-1";
import OrderNow2 from "@/components/managed-wordpress/OrderNow-2";
import OrderNow3 from "@/components/managed-wordpress/OrderNow-3";
import PeopleCards from "@/components/managed-wordpress/PeopleCards";
import ScreenshotSlider from "@/components/managed-wordpress/ScreenshotSlider";
import BacktoTop from "@/components/shared/BacktoTop";
import PackagesPrices from "@/components/managed-wordpress/PackagePrice";
import Header from "@/components/shared/Header";

export const metadata = {
    title: "Managed WordPress Hosting Sri Lanka: Best WordPress Web Hosting"
}

export default function ManagedWordPress() {
    return (
        <>
            {/* <div className="hidden lg:block">
                <Topbar />
            </div>
            <Navbar2 /> */}
            <Header />
            <Hero />
            <div id="managed-wordpress-package-prices-section">
                <PackagesPrices />
            </div>
            <PeopleCards />
            <OrderNow1 />
            <ScreenshotSlider />
            <ControlPanel />
            <OrderNow2 />
            <Video />
            <OrderNow3 />
            <Reviews />
            <FAQs />
            <BacktoTop />
            <Footer />
        </>
    )
}