import Solution from "@/components/register-domain/Solution";
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
import Header from "@/components/shared/Header";
import PeopleCards from "@/components/shared/PeopleCards";
import PopularDomains from "@/components/register-domain/PopularDomains";

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
            <PopularDomains />
            <Video />
            <OrderNow />
            <Solution />  
            <PeopleCards />          
            <Reviews />
            <FAQs />
            <BacktoTop />
            <CTA />
            <Footer />
        </>
    )
}