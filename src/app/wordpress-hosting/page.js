import FAQs from "@/components/shared/FAQ";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import PackagesPrices from "@/components/shared/PackagePrices";
import Reviews from "@/components/shared/Review";
import Video from "@/components/shared/Video";
import ControlPanel from "@/components/wordpress-hosting/ControlPanel";
import Hero from "@/components/wordpress-hosting/Hero";
import OrderNow1 from "@/components/wordpress-hosting/OrderNow-1";
import OrderNow2 from "@/components/wordpress-hosting/OrderNow-2";
import OrderNow3 from "@/components/wordpress-hosting/OrderNow-3";
import PeopleCards from "@/components/wordpress-hosting/PeopleCards";
import Screenshot from "@/components/wordpress-hosting/Screenshot";
import ScreenshotSlider from "@/components/wordpress-hosting/ScreenshotSlider";
import ScreenshotSlider2 from "@/components/wordpress-hosting/ScreenshotSlider2";

export const metadata = {
    title: "WordPress Hosting Sri Lanka: Best WordPress Web Hosting"
}

export default function WordpressHosting() {
    return (
        <>
        <Navbar />
        <Hero />
        <PackagesPrices />
        <PeopleCards />
        <OrderNow1 />
        <ScreenshotSlider />
        <ControlPanel />
        <OrderNow2 />
        <Video />
        <OrderNow3 />
        <Reviews />
        <FAQs />
        <Footer />

        {/* <Screenshot /> */}
        {/* <ScreenshotSlider2 /> */}
        
        </>
    )
}