import Hero from "@/components/agency-hosting/Hero";
import OrderNow3 from "@/components/agency-hosting/OrderNow-3";
import PackagesPrices from "@/components/agency-hosting/PackagePrice";
import PeopleCards from "@/components/shared/PeopleCards";
import OrderNow1 from "@/components/agency-hosting/OrderNow-1";
import OrderNow2 from "@/components/agency-hosting/OrderNow-2";
import BacktoTop from "@/components/shared/BacktoTop";
import Footer from "@/components/shared/Footer";
import Navbar2 from "@/components/shared/Navbar2";
import Topbar from "@/components/shared/Topbar";
import Reviews from "@/components/shared/Review";
import FAQs from "@/components/shared/FAQ";
import TalkSpecialist from "@/components/agency-hosting/TalkSpecialist";
import Header from "@/components/shared/Header";

export const metadata = {
    title: "Agency Web Hosting"
}

export default function Agency() {

    return (
        <>
            {/* <div className="hidden lg:block">
                <Topbar />
            </div>
            <Navbar2 /> */}
            <Header />
            <Hero />
            <div id="agency-package-prices-section">
                <PackagesPrices />
            </div>
            <TalkSpecialist />
            <OrderNow1 />
            <PeopleCards />
            <OrderNow2 />
            <OrderNow3 />
            <Reviews />
            <FAQs />
            <BacktoTop />
            <Footer />
        </>
    );
}