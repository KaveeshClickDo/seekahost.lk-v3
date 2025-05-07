import HostingConsultationForm from "@/components/personalized-hosting/HostingConsultationForm";
import BacktoTop from "@/components/shared/BacktoTop";
import Footer from "@/components/shared/Footer";
import Navbar2 from "@/components/shared/Navbar2";
import Topbar from "@/components/shared/Topbar";

export default function PersonalizedHosting() {
    return (
        <>
            <div className="hidden lg:block">
                <Topbar />
            </div>
            <Navbar2 />
            <div className="relative inset-0 w-[72%] h-5 bg-gradient-to-r from-[#09407A] to-[#136CC9] rounded-br-[100px] mb-10"></div>
            <HostingConsultationForm />
            <BacktoTop />
            <Footer />
        </>
    );
}