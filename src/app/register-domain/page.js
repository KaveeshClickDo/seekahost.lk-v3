import Solution from "@/components/shared/Solution";
import Video from "@/components/shared/Video";
import Hero from "@/components/register-domain/Hero";
import OrderNow from "@/components/register-domain/OrderNow";
import PackagesPrices from "@/components/home/PackagePrices";
import Reviews from "@/components/shared/Review";
import FAQs from "@/components/shared/FAQ";
import Footer from "@/components/shared/Footer";
import Topbar from "@/components/shared/Topbar";
import Navbar2 from "@/components/shared/Navbar2";
import BacktoTop from "@/components/shared/BacktoTop";
import CTA from "@/components/shared/CTA";

export const metadata = {
    title: "Register Domain"
}

export default function registerDomain() {

    return (
        <>
            <div className="hidden lg:block">
                <Topbar />
            </div>
            <Navbar2 />
            <Hero />
            <OrderNow />
            <Solution />
            <Video />
            <PackagesPrices />
            <Reviews />
            <FAQs />
            <BacktoTop />
            <CTA />
            <Footer />
        </>
    )
}