import Hero from "@/components/london-server-hosting/Hero";
import OrderNow from "@/components/london-server-hosting/OrderNow";
import FAQs from "@/components/shared/FAQ";
import Footer from "@/components/shared/Footer";
import Navbar2 from "@/components/shared/Navbar2";
import PackagesPrices from "@/components/home/PackagePrices";
import Reviews from "@/components/shared/Review";
import Topbar from "@/components/shared/Topbar";
import Video from "@/components/shared/Video";
import PeopleCards from "@/components/wordpress-hosting/PeopleCards";
import BacktoTop from "@/components/shared/BacktoTop";
import Header from "@/components/shared/Header";
import Solution from "@/components/shared/Solution";
import CTA from "@/components/shared/CTA";

export const metadata = {
    title: "London Server Hosting UK: Best Web Hosting in UK"
}


export default function LondonServerHosting() {
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
            <OrderNow />
            <Reviews />
            <FAQs />
            <BacktoTop />
            <CTA />
            <Footer />
        </>
    );
}