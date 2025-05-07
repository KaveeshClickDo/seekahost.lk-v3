"use client";

export default function SeePlansButton() {

    const scrollToAgPackagePrices = () => {
        const agPackagePricesSection = document.getElementById("agency-package-prices-section");
        if (agPackagePricesSection) {
            agPackagePricesSection.scrollIntoView({ behavior: "smooth" });
        }
      };

    return (
        <div
            className="inline-block bg-white text-[#0066CC] font-bold border border-none px-10 py-2 rounded-md hover:bg-gray-200 transition-colors cursor-pointer mt-7"
            onClick={scrollToAgPackagePrices}
        >
            See Plans
        </div>
    );
}