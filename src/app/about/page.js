import Navbar from "@/components/shared/Navbar";
import Timeline from "@/components/about/Timeline";
import Reviews from "@/components/shared/Review";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/about/Hero";
import WhatWeOffer from "@/components/about/WhatWeOffer";
import OurVision from "@/components/about/OurVision";
import Commitment from "@/components/about/Commitment";

export const metadata = {
    title: "About"
}

export default function about() {
    return (
        <>
            <Navbar />
            <Hero />
            <WhatWeOffer />
            <Timeline />
            <OurVision />
            <Reviews />
            <Commitment />
            <Footer />
        </>
    )
}