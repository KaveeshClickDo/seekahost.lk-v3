import Hero from "@/components/home/Hero";
import PackagePrices from "@/components/home/PackagePrices";
import Solution from "@/components/shared/Solution";
import Video from "@/components/shared/Video";
import Reviews from "@/components/shared/Review";
import FAQs from "@/components/shared/FAQ";
import Footer from "@/components/shared/Footer";
// import Script from "next/script";
// import { siteSchema } from "./schema";
import WhySeekahost from "@/components/home/WhySeekahost";
import Navbar2 from "@/components/shared/Navbar2";
import Topbar from "@/components/shared/Topbar";
import ConsultantImage from "@/components/home/ConsultantImage";
import BacktoTop from "@/components/shared/BacktoTop";
import PersonalConsultant from "@/components/home/PersonalConsultant";
import CTA from "@/components/shared/CTA";
import Header from "@/components/shared/Header";
import ScreenshotSlider from "@/components/home/ScreenshotSlider";
import PeopleCards from "@/components/home/PeopleCards";
import GetStarted from "@/components/home/GetStarted";
import LargeImageSlider from "@/components/home/LargeImageSlider";

export default function Home() {
  return (
    <>
      {/* <Script
        id="schema-org-graph"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
      /> */}
      {/* <div className="hidden lg:block">
        <Topbar />
      </div>
      <Navbar2 /> */}
      <Header />
      <ConsultantImage />
      <Hero />
      <div id="package-prices-section">
        <PackagePrices />
      </div>
      <Solution />
      <ScreenshotSlider />
      <Video />
      <GetStarted />
      <PeopleCards />
      <Reviews />
      <WhySeekahost />
      <LargeImageSlider />
      <FAQs />
      <BacktoTop />
      <div id="personal-consultant-section">
        <CTA />
      </div>
      <Footer />
    </>
  );
}