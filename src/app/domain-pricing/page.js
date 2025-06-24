import Solution from "@/components/shared/Solution";
import Video from "@/components/shared/Video";
import Hero from "@/components/domain-pricing/Hero";
import OrderNow from "@/components/register-domain/OrderNow";
import PackagesPrices from "@/components/home/PackagePrices";
import Reviews from "@/components/shared/Review";
import FAQs from "@/components/shared/FAQ";
import Footer from "@/components/shared/Footer";
import Topbar from "@/components/shared/Topbar";
import Navbar2 from "@/components/shared/Navbar2";
import BacktoTop from "@/components/shared/BacktoTop";
import CTA from "@/components/shared/CTA";
import Header from "@/components/shared/Header";
import TLDPriceTable from "@/components/domain-pricing/TLDPriceTable";

export const metadata = {
    title: "Register Domain"
}

export default function registerDomain() {

    return (
        <>
            {/* <div className="hidden lg:block">
                <Topbar />
            </div>
            <Navbar2 /> */}
            <Header />
            <Hero />
            <TLDPriceTable />
            <OrderNow />
            <Solution />
            <Reviews />
            <FAQs />
            <BacktoTop />
            <CTA />
            <Footer />
        </>
    )
}