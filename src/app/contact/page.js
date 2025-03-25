import FAQ from "@/components/contact/FAQ"
import GetStarted from "@/components/contact/GetStarted"
import Hero from "@/components/contact/Hero"
import Solution from "@/components/contact/Solution"
import Footer from "@/components/shared/Footer"
import Navbar from "@/components/shared/Navbar"

export const metadata = {
    title: "Contact Us",
    description: "Contact Now Sri Lanka Web hosting services company offering domains and WordPress hosting packages with cheap monthly pay plans to get online. Best 24/7 support Lanka Host!",
}

// export async function generateMetadata({ params }){
//     const newTitle = params;

//     return {
//         title: newTitle
//     };
// }

export default function contact () {
    return (
        <>
        <Navbar />
        <Hero />
        <Solution />
        <FAQ />
        <GetStarted />
        <Footer />
        </>
    )
}