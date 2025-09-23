import FAQs from "@/components/shared/FAQ";
import Footer from "@/components/shared/Footer";
import Navbar2 from "@/components/shared/Navbar2";
import Reviews from "@/components/shared/Review";
import Topbar from "@/components/shared/Topbar";
import Video from "@/components/shared/Video";
import ControlPanel from "@/components/woocommerce-hosting/ControlPanel";
import Hero from "@/components/woocommerce-hosting/Hero";
import OrderNow1 from "@/components/woocommerce-hosting/OrderNow-1";
import OrderNow2 from "@/components/woocommerce-hosting/OrderNow-2";
import OrderNow3 from "@/components/woocommerce-hosting/OrderNow-3";
import PeopleCards from "@/components/shared/PeopleCards";
import ScreenshotSlider from "@/components/home/ScreenshotSlider";
import BacktoTop from "@/components/shared/BacktoTop";
import PackagesPrices from "@/components/woocommerce-hosting/PackagePrice";
import Header from "@/components/shared/Header";

export const metadata = {
    title: "WooCommerce Hosting UK: Best WordPress Web Hosting"
}

export default function WooCommerceHosting() {
    return (
        <>
            {/* <div className="hidden lg:block">
                <Topbar />
            </div>
            <Navbar2 /> */}
            <Header />
            <Hero />
            <div id="woocommerce-package-prices-section">
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