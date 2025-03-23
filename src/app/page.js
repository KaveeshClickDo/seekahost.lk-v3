import Hero from "@/components/home/Hero";
import Navbar from "@/components/shared/Navbar";
import Carousel from "@/components/shared/Carousel";
import Solution from "@/components/home/Solution";
import Video from "@/components/shared/Video";
import Reviews from "@/components/shared/Review";
import FAQs from "@/components/shared/FAQ";
import Footer from "@/components/shared/Footer";
import Script from "next/script";
import { siteSchema } from "./schema";
import WhySeekahost from "@/components/home/WhySeekahost";


export default function Home() {
  return (
    <>
      <Script
        id="schema-org-graph"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
      />
      <Navbar />
      <Hero />
      <Carousel />
      <Solution />
      <Video />
      <WhySeekahost />
      <Reviews />
      <FAQs />
      <Footer />
    </>

  );
}
