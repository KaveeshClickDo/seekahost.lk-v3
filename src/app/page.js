import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import Solution from "@/components/Solution";
import Video from "@/components/Video";
import Reviews from "@/components/Review";
import FAQs from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Carousel />
      <Solution />
      <Video />
      <Reviews />
      <FAQs />
      <Footer />
    </>

  );
}
