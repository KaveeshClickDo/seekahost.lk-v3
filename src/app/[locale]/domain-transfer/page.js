import Solution from "@/components/domain-transfer/Solution";
import Video from "@/components/domain-transfer/Video";
import Hero from "@/components/domain-transfer/Hero";
import Reviews from "@/components/shared/Review";
import FAQs from "@/components/shared/FAQ";
import Footer from "@/components/shared/Footer";
import Topbar from "@/components/shared/Topbar";
import Navbar2 from "@/components/shared/Navbar2";
import BacktoTop from "@/components/shared/BacktoTop";
import CTA from "@/components/shared/CTA";
import Header from "@/components/shared/Header";
import OrderNow1 from "@/components/domain-transfer/OrderNow-1";

export const metadata = {
    title: "Domain Transfer"
}

export default function domainTransfer() {

    return (
        <>
            {/* <div className="hidden lg:block">
                <Topbar />
            </div>
            <Navbar2 /> */}
            <Header />
            <Hero />
            <Solution />
            <Video />
            <OrderNow1 />
            <Reviews />
            <FAQs />
            <BacktoTop />
            <CTA />
            <Footer />
        </>
    )
}