import Features from "@/components/nodejs-hosting/Features";
import Hero from "@/components/nodejs-hosting/Hero";
import OrderNow1 from "@/components/nodejs-hosting/OrderNow-1";
import OrderNow2 from "@/components/nodejs-hosting/OrderNow-2";
import FAQs from "@/components/shared/FAQ";
import Footer from "@/components/shared/Footer";
import Navbar2 from "@/components/shared/Navbar2";
import PackagesPrices from "@/components/home/PackagePrices";
import Reviews from "@/components/shared/Review";
import Topbar from "@/components/shared/Topbar";
import Video from "@/components/shared/Video";
import ScreenshotSlider from "@/components/wordpress-hosting/ScreenshotSlider";
import BacktoTop from "@/components/shared/BacktoTop";
import Header from "@/components/shared/Header";

export const metadata = {
    title: "NodeJS Hosting UK: Best NodeJs Hosting"
}


export default function NodeJSHosting() {
    return (
        <>
            {/* <div className="hidden lg:block">
                <Topbar />
            </div>
            <Navbar2 /> */}
            <Header />
            <Hero />
            <PackagesPrices />
            <ScreenshotSlider />
            <Features />
            <OrderNow1 />
            <Video />
            <OrderNow2 />
            <Reviews />
            <FAQs />
            <BacktoTop />
            <Footer />
        </>
    );
}