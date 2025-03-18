import Hero from "@/components/home/Hero";
import Navbar from "@/components/shared/Navbar";
import Carousel from "@/components/home/Carousel";
import Solution from "@/components/home/Solution";
import Video from "@/components/home/Video";
import Reviews from "@/components/shared/Review";
import FAQs from "@/components/home/FAQ";
import Footer from "@/components/shared/Footer";

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
