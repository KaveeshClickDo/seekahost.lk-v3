"use client";

import { useState } from "react";
import Image from "next/image";

export default function ConsultantImage() {
  const [showConsultantImage, setShowConsultantImage] = useState(true);

  const scrollToPackagePrices = () => {
    const packagePricesSection = document.getElementById("package-prices-section");
    if (packagePricesSection) {
      packagePricesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!showConsultantImage) return null;

  return (
    <div className="hidden lg:block fixed right-2 top-7/16 transform -translate-y-1/2 z-10">
      <Image
        src="/images/home/Personal-Consultant.png"
        alt="Personal Consultant"
        width={201}
        height={320}
        className="object-contain"
      />
      <button 
        onClick={() => setShowConsultantImage(false)}
        className="absolute top-25 right-1 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors"
        aria-label="Close"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <div 
        className="absolute bg-[#6CFF00] w-11/12 text-center right-0 font-semibold py-2 cursor-pointer hover:bg-[#5ee600] transition-colors"
        onClick={scrollToPackagePrices}
      >
        See Plans
      </div> 
      <div className="absolute bg-[#4C9BF1] w-11/12 text-center -bottom-20 right-0 font-semibold py-2 rounded-b-xl">
        Personal consultant
      </div>
    </div>
  );
}