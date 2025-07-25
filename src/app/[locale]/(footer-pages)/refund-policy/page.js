import BacktoTop from "@/components/shared/BacktoTop";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export const metadata = {
    title: "Refund Policy"
}

export default function RefundPolicy() {
    return (
        <>
            <Header />
            <div className="min-h-screen">
                {/* Header */}
                <div className="pt-8">
                    <div className="max-w-4xl mx-auto px-6">
                        <h1 className="text-4xl font-bold text-center">Refund Policy</h1>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-6 py-12">
                    {/* Introduction */}
                    <div className="mb-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                        <p className="text-gray-700 leading-relaxed">
                            This Refund Policy shall be used as a guidance to explain when you, as a SeekaHost customer,
                            can request a refund regarding our products and services acquired from SeekaHost or through
                            us from our partners and/or affiliates.
                        </p>
                    </div>

                    {/* General Refund Rules */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-blue-500 pb-2">
                            General Refund Rules
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">We only offer one refund per product or service, if eligible.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">The product or service must be cancelled before we can issue a refund.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">No refund will be made if your products or service(s) are suspended or terminated for a valid cause.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">
                                    All refunds are processed in Pound Sterling(£ GBP) or USD ($): SeekaHost will not hold any responsibility
                                    for any fluctuations in the exchange rate(s) between the time of payment and the time of refund.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">
                                    Refunds will be credited to your SeekaHost account balance. Purchases made using SeekaHost account funds
                                    can only be refunded as an account credit. SeekaHost may refund payments made by credit card or PayPal to
                                    the source of payment, if applicable. SeekaHost is not responsible for any additional charges imposed by
                                    your credit card company or PayPal in the case of refund.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">
                                    Any processing or transaction fee(s) will be deducted from a refund. Additional refund requirements may
                                    apply based on specific terms and conditions provided to you at the time of the transaction.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Special Terms */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-blue-500 pb-2">
                            Special Terms
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">No refund is available for SSL Certificate & Domain Name Registration.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">
                                    In the case of an unsuccessful attempt to transfer a domain name to SeekaHost, we will automatically
                                    refund any fees paid as an account credit.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">
                                    No refund is available for the packages with Late Fee(which will be added for maintaining the data beyond the limits)
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Important Notice - Private Email Hosting */}
                    <section className="mb-10">
                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                            <p className="text-red-800 font-semibold">
                                No refund is available for private email hosting services, even if they are suspended or terminated
                                before the end of your contract term.
                            </p>
                        </div>
                    </section>

                    {/* Web Hosting Packages - No Refund */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-red-500 pb-2">
                            No refund is available for Web Hosting Packages, if the following applies:
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">Packages purchased with a 30% discount or more.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">Packages purchased during special events/exclusive offers.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">Misunderstanding of package features.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">Additional charges for upgrades or additional features are not eligible.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">Fees related to domain name registration or transfer.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">Renewals of web hosting & related services.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">Packages or services were suspended or terminated for a valid reason.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">
                                    Full refunds for packages are only available, if you request them within the first 7 days of your
                                    purchase and if the refund is eligible.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Web Hosting Packages - Refunds Available */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-green-500 pb-2">
                            Refunds are only available for Web Hosting Packages, if the following applies:
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">Delay of delivery of the purchased product.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">Failure of delivery of the purchased product.</p>
                            </div>
                        </div>
                    </section>

                    {/* Refund Clarification */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-blue-500 pb-2">
                            Refund Clarification
                        </h2>
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <p className="text-gray-700">
                                For more clarification on our refund policy, you can get information from our website chat support or
                                mail us at{' '}
                                <a
                                    href="mailto:billing@seekahost.co.uk"
                                    className="text-blue-600 hover:text-blue-800 underline font-medium"
                                >
                                    billing@seekahost.co.uk
                                </a>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            <BacktoTop />
            <Footer />
        </>
    );
}