import Hero from "@/components/free-business-listing/Hero";
import OrderNow1 from "@/components/free-business-listing/OrderNow1";
import FAQs from "@/components/shared/FAQ";
import Footer from "@/components/shared/Footer";
import Navbar2 from "@/components/shared/Navbar2";
import PackagesPrices from "@/components/home/PackagePrices";
import Reviews from "@/components/shared/Review";
import Topbar from "@/components/shared/Topbar";
import Video from "@/components/shared/Video";
import PeopleCards from "@/components/home/PeopleCards";
import BacktoTop from "@/components/shared/BacktoTop";
import Header from "@/components/shared/Header";
import Solution from "@/components/shared/Solution";
import CTA from "@/components/shared/CTA";

export const metadata = {
    title: "Free Business Listing : Best Web Hosting in UK"
}


export default function GoogleAds() {
    return (
        <>
            {/* <div className="hidden lg:block">
                <Topbar />
            </div>
            <Navbar2 /> */}
            <Header />
            <Hero />
            <OrderNow1 />
            <PeopleCards />
            <Reviews />
            <FAQs />
            <BacktoTop />
            <CTA />
            <Footer />
        </>
    );
}