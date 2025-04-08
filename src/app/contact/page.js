import FAQ from "@/components/contact/FAQ"
import GetStarted from "@/components/contact/GetStarted"
import Hero from "@/components/contact/Hero"
import Solution from "@/components/contact/Solution"
import Footer from "@/components/shared/Footer"
import Navbar2 from "@/components/shared/Navbar2"
import Topbar from "@/components/shared/Topbar"
import BacktoTop from "@/components/shared/BacktoTop";
import SignUpIsland from "@/components/shared/SignUpIsland"

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

export default function contact() {
    return (
        <>
            <div className="hidden lg:block">
                <Topbar />
            </div>
            <Navbar2 />
            <Hero />
            <Solution />
            <FAQ />
            <GetStarted />
            <BacktoTop />
            <SignUpIsland />
            <Footer />
        </>
    )
}