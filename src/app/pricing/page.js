import PackagesPrices from "@/components/pricing/PackagesPrices";
import BacktoTop from "@/components/shared/BacktoTop";
import FAQs from "@/components/shared/FAQ";
import Footer from "@/components/shared/Footer";
import Navbar2 from "@/components/shared/Navbar2";
import Reviews from "@/components/shared/Review";
import Topbar from "@/components/shared/Topbar";
import PeopleCards from "@/components/wordpress-hosting/PeopleCards";

export const metadata = {
    title: "Pricing"
}

export default function Pricing() {
    return (
        <>
            <div className="hidden lg:block">
                <Topbar />
            </div>
            <Navbar2 />
            <div className="relative inset-0 w-[72%] h-5 bg-gradient-to-r from-[#09407A] to-[#136CC9] rounded-br-[100px]"></div>
            <PackagesPrices />
            <Reviews />
            <PeopleCards />
            <FAQs />
            <BacktoTop />
            <Footer />
        </>
    );
}