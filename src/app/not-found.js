import Footer from '@/components/shared/Footer';
import Navbar2 from '@/components/shared/Navbar2';
import Topbar from '@/components/shared/Topbar';
import Link from 'next/link';

const BACKGROUND_CIRCLES = [
    { width: "180px", height: "180px", top: "15%", left: "10%", duration: "7s", delay: "0s" },
    { width: "120px", height: "120px", top: "70%", left: "20%", duration: "8s", delay: "0.5s" },
    { width: "150px", height: "150px", top: "25%", left: "70%", duration: "9s", delay: "1s" },
    { width: "200px", height: "200px", top: "80%", left: "80%", duration: "10s", delay: "1.5s" },
    { width: "100px", height: "100px", top: "40%", left: "40%", duration: "8s", delay: "2s" },
    { width: "130px", height: "130px", top: "60%", left: "60%", duration: "9s", delay: "2.5s" },
];

export default function NotFound() {
    return (
        <>
            <div className="hidden lg:block">
                <Topbar />
            </div>
            <Navbar2 />
            <div className="relative inset-0 w-[72%] h-5 bg-gradient-to-r from-[#09407A] to-[#136CC9] rounded-br-[100px]"></div>
            <div className="bg-white flex items-center justify-center px-4 py-12 relative overflow-hidden">

                <style dangerouslySetInnerHTML={{
                    __html: `
          @keyframes float {
            0% { transform: translate(0, 0); }
            50% { transform: translate(20px, -20px); }
            100% { transform: translate(0, 0); }
          }
          .floating-shape {
            animation-name: float;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
          }
        `
                }} />

                <div className="absolute inset-0 overflow-hidden">
                    {BACKGROUND_CIRCLES.map((circle, i) => (
                        <div
                            key={i}
                            className="floating-shape absolute rounded-full opacity-10 bg-[#1164BB]"
                            style={{
                                width: circle.width,
                                height: circle.height,
                                top: circle.top,
                                left: circle.left,
                                animationDuration: circle.duration,
                                animationDelay: circle.delay
                            }}
                        />
                    ))}
                </div>

                <div className="relative z-10 max-w-xl w-full text-center md:py-20">
                    <div className="text-9xl font-bold text-[#1164BB] mb-4">
                        404
                    </div>

                    <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-800">
                        Page Not Found
                    </h2>

                    <p className="text-gray-600 font-medium mb-8 max-w-md mx-auto">
                        The page you&apos;re looking for doesn&apos;t exist or has been moved.
                        Let&apos;s get you back on track.
                    </p>

                    <div>
                        <Link href="/" className="inline-flex items-center px-6 py-3 rounded-lg bg-[#1164BB] text-white font-medium hover:bg-[#0d5196] transition-colors duration-300 shadow-lg hover:shadow-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Return Home
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}