"use client";

export default function SeePlansButton() {

    const scrollToWpPackagePrices = () => {
        const wpPackagePricesSection = document.getElementById("wordpress-package-prices-section");
        if (wpPackagePricesSection) {
            wpPackagePricesSection.scrollIntoView({ behavior: "smooth" });
        }
      };

    return (
        <div
            className="inline-block bg-white text-[#0066CC] md:text-lg font-medium border border-none px-10 py-2 rounded-md hover:bg-gray-200 transition-colors cursor-pointer mt-6"
            onClick={scrollToWpPackagePrices}
        >
            See Plans
        </div>
    );
}