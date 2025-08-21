import Hero from "@/components/cheap-web-hosting-with-cpanel/Hero";
import OrderNow1 from "@/components/cheap-web-hosting-with-cpanel/OrderNow-1";
import OrderNow2 from "@/components/cheap-web-hosting-with-cpanel/OrderNow-2";
import OrderNow3 from "@/components/cheap-web-hosting-with-cpanel/OrderNow-3";
import OrderNow4 from "@/components/cheap-web-hosting-with-cpanel/OrderNow-4";
import FAQs from "@/components/shared/FAQ";
import Footer from "@/components/shared/Footer";
import Navbar2 from "@/components/shared/Navbar2";
import PackagesPrices from "@/components/home/PackagePrices";
import Reviews from "@/components/shared/Review";
import Topbar from "@/components/shared/Topbar";
import ControlPanel from "@/components/cheap-web-hosting-with-cpanel/ControlPanel";
import PeopleCards from "@/components/shared/PeopleCards";
import ScreenshotSlider from "@/components/cheap-web-hosting-with-cpanel/ScreenshotSlider";
import BacktoTop from "@/components/shared/BacktoTop";
import Header from "@/components/shared/Header";

export const metadata = {
    title: "Cheap Web Hosting With cPanel - UK's Best Host"
}


export default function CheapWebHostingWithcPanel() {
    return (
        <>
            {/* <div className="hidden lg:block">
                <Topbar />
            </div>
            <Navbar2 /> */}
            <Header />
            <Hero />
            <PackagesPrices />
            <PeopleCards />
            <OrderNow1 />
            <ScreenshotSlider />
            <ControlPanel />
            <OrderNow2 />
            <OrderNow3 />
            <OrderNow4 />
            <Reviews />
            <FAQs />
            <BacktoTop />
            <Footer />
        </>
    );
}