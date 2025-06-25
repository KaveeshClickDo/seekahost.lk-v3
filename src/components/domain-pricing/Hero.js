import DomainSearchHomeHero from "../home/DomainSearchHomeHero";

export default function Hero() {
    return (
        <section className="relative min-h-[600px] w-full flex items-center bg-[#0A488A] overflow-hidden">
            <div className="container mx-auto px-6 xl:px-20 py-16">
                {/* Centered Content */}
                <div className="text-center text-white max-w-4xl mx-auto">
                    {/* Main Heading */}
                    <h1 className="text-2xl md:text-4xl font-bold mb-6">
                        Cheap Domain Name Registration Pricing
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-2">
                        All-In-One Click WordPress Blog hosting control panel to secured host private blog networks on unique multiple IP addresses.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-lg mx-auto my-10">
                        <DomainSearchHomeHero />
                    </div>

                    {/* Domain Extension Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
                        {[
                            { extension: '.com', price: '£7.34' },    // 9.99 USD × 0.7344
                            { extension: '.net', price: '£6.60' },    // 8.99 USD × 0.7344
                            { extension: '.org', price: '£5.86' },    // 7.99 USD × 0.7344
                            { extension: '.co.uk', price: '£4.85' },  // 6.99 USD × 0.7344
                            { extension: '.io', price: '£22.01' },    // 29.99 USD × 0.7344
                        ].map((domain, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-200 border border-white/20"
                            >
                                <div className="text-2xl font-bold mb-2">
                                    {domain.extension}
                                </div>
                                <div className="text-xl font-semibold text-blue-200">
                                    {domain.price}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}