import Timeline from "@/components/about/Timeline";
import Reviews from "@/components/shared/Review";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/about/Hero";
import WhatWeOffer from "@/components/about/WhatWeOffer";
import OurVision from "@/components/about/OurVision";
import Commitment from "@/components/about/Commitment";
import Topbar from "@/components/shared/Topbar";
import Navbar2 from "@/components/shared/Navbar2";
import BacktoTop from "@/components/shared/BacktoTop";
import CTA from "@/components/shared/CTA";

export const metadata = {
    title: "About Us"
}

export default function about() {
    return (
        <>
            <div className="hidden lg:block">
                <Topbar />
            </div>
            <Navbar2 />
            <Hero />
            <WhatWeOffer />
            <Timeline />
            <OurVision />
            <Reviews />
            <Commitment />
            <BacktoTop />
            <CTA />
            <Footer />
        </>
    )
}