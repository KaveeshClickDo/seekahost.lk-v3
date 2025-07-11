import Hero from "@/components/small-business-hosting/Hero";
import OrderNow1 from "@/components/small-business-hosting/OrderNow-1";
import FAQs from "@/components/shared/FAQ";
import Footer from "@/components/shared/Footer";
import Navbar2 from "@/components/shared/Navbar2";
import PackagesPrices from "@/components/home/PackagePrices";
import Reviews from "@/components/shared/Review";
import Topbar from "@/components/shared/Topbar";
import Video from "@/components/small-business-hosting/Video";
import PeopleCards from "@/components/wordpress-hosting/PeopleCards";
import BacktoTop from "@/components/shared/BacktoTop";
import Header from "@/components/shared/Header";
import Solution from "@/components/shared/Solution";
import CTA from "@/components/shared/CTA";

export const metadata = {
    title: "Small Business Web Hosting UK: Best Business Web Hosting"
}


export default function SmallBusinessHosting() {
    return (
        <>
            {/* <div className="hidden lg:block">
                <Topbar />
            </div>
            <Navbar2 /> */}
            <Header />
            <Hero />
            <PackagesPrices />
            <Video />
            <Solution />
            <PeopleCards />
            <OrderNow1 />
            <Reviews />
            <FAQs />
            <BacktoTop />
            <CTA />
            <Footer />
        </>
    );
}