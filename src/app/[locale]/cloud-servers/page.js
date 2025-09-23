import FAQs from "@/components/shared/FAQ";
import Footer from "@/components/shared/Footer";
import Reviews from "@/components/shared/Review";
import Hero from "@/components/cloud-servers/Hero";
import PeopleCards from "@/components/shared/PeopleCards";
import BacktoTop from "@/components/shared/BacktoTop";
import PackagesPrices from "@/components/vps-hosting/PackagePrice";
import Header from "@/components/shared/Header";
import Solution from "@/components/cloud-servers/Solution";
import WhySeekahost from "@/components/cloud-servers/WhySeekahost";
import UKDataCenters from "@/components/cloud-servers/UKDataCenters";
import CTA from "@/components/shared/CTA";

export const metadata = {
    title: "Cloud Servers"
}

export default function CloudServers() {
    return (
        <>
            {/* <div className="hidden lg:block">
                <Topbar />
            </div>
            <Navbar2 /> */}
            <Header />
            <Hero />
            <div id="package-prices-section">
                <PackagesPrices />
            </div>
            <Solution />
            <PeopleCards />
            <WhySeekahost />
            <Reviews />
            <UKDataCenters />
            <FAQs />
            <CTA />
            <BacktoTop />
            <Footer />
        </>
    )
}