import BacktoTop from "@/components/shared/BacktoTop";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export const metadata = {
    title: "Privacy Policies"
}

export default function PrivacyPolicy() {
    return (
        <>
            <Header />
            <div className="min-h-screen">
                {/* Header */}
                <div className="pt-8">
                    <div className="max-w-7xl mx-auto px-6">
                        <h1 className="text-3xl font-bold text-center">Privacy Policies</h1>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto px-6 py-12">
                    {/* Introduction */}
                    <section className="mb-10">
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                            <p className="text-gray-700 leading-relaxed">
                                SEEKAHOST is committed to protecting the privacy of our clients and using this information responsibly.
                                Please read below for detailed information about our GDPR Compliance, Terms & Policies and Data Deletion Request.
                            </p>
                        </div>
                    </section>

                    {/* Re-Marketing Campaign Opt-Out */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-blue-500 pb-2">
                            RE-MARKETING CAMPAIGN OPT-OUT
                        </h2>
                        <div className="bg-yellow-50 p-6 rounded-lg">
                            <p className="text-gray-700 leading-relaxed">
                                If you would like to opt-out of our re-marketing campaign, kindly visit <a href="https://www.seekahost.co.uk/opt-out.php" className="text-blue-600 hover:text-blue-800 underline font-medium">
                                    this page
                                </a>.
                                You will be automatically
                                removed from our re-marketing Audience set. This is subject to Facebook Terms and Conditions / Google Terms
                                and Conditions. You should visit the page from the same device you see ads from SEEKAHOST. If you face any
                                difficulties, you should email us to{' '}
                                <a href="mailto:support@seekahost.com" className="text-blue-600 hover:text-blue-800 underline font-medium">
                                    support@seekahost.com
                                </a>{' '}
                                and we will help you opt-out of the re-marketing ads.
                            </p>
                        </div>
                    </section>

                    {/* Terms & Conditions */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-blue-500 pb-2">
                            TERMS & CONDITIONS
                        </h2>

                        {/* Introduction */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-slate-700 mb-4">INTRODUCTION</h3>
                            <p className="text-gray-700 leading-relaxed">
                                These terms of use relate to your accessing and use of the <a href="https://www.seekahost.co.uk/" className="text-blue-600 hover:text-blue-800 underline font-medium">
                                    www.seekahost.co.uk
                                </a> website and all related
                                pages and describe the manner in which you may use these websites. By using this website, you are deemed
                                to have read, understood and agree to these terms of use.
                            </p>
                        </div>

                        {/* Who Are We */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-slate-700 mb-4">WHO ARE WE?</h3>
                            <p className="text-gray-700 font-medium">
                                SEEKAHOST – Domain Registrar & Web Hosting Providers.
                            </p>
                        </div>

                        {/* Disclaimer */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-slate-700 mb-4">DISCLAIMER</h3>
                            <div className="bg-red-50 p-6 rounded-lg">
                                <p className="text-gray-700 leading-relaxed">
                                    The information on this website is provided on an "as is" basis. To the fullest extent permitted by law,
                                    SEEKAHOST: excludes all representations and warranties relating to this website and its contents or which
                                    is a may be provided by any affiliates or any other third party, including in relation to any inaccuracies
                                    or omissions in this website and/or the Company's literature; and excludes all liability for damages arising
                                    out of or in connection with your use of this website. This includes, without limitation, direct loss, loss
                                    of business or profits (whether or not the loss of such profits was foreseeable, arose in the normal course
                                    of things or you have advised this Company of the possibility of such potential loss), damage caused to your
                                    computer, computer software, systems and programs and the data thereon or any other direct or indirect,
                                    consequential and incidental damages. SEEKAHOST does not however exclude liability for death or personal
                                    injury caused by its negligence. The above exclusions and limitations apply only to the extent permitted by
                                    law. None of your statutory rights as a consumer are affected.
                                </p>
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-slate-700 mb-4">AVAILABILITY</h3>
                            <p className="text-gray-700 leading-relaxed">
                                You are solely responsible for evaluating the fitness for a particular purpose of any downloads, programs
                                and text available through this website. SEEKAHOST does not warrant that the service from this website will
                                be uninterrupted, timely or error free, although it is provided to the best of our ability. By using this
                                service, you thereby indemnify this Company, its employees, agents and affiliates against any loss or damage,
                                in whatever manner, however caused.
                            </p>
                        </div>

                        {/* Pricing */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-slate-700 mb-4">PRICING</h3>
                            <div className="bg-orange-50 p-4 rounded-lg">
                                <p className="text-gray-700 font-medium">
                                    SeekaHost has the liberty of changing the price and resources of any package with/without any prior notice
                                    to the customer.
                                </p>
                            </div>
                        </div>

                        {/* Links */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-slate-700 mb-4">LINKS</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-slate-600 mb-2">Links to this website:</h4>
                                    <p className="text-gray-700">
                                        You may not create a link to any page of this website without our prior written consent. If you do create
                                        a link to a page of this website you do so at your own risk and the exclusions and limitations set out
                                        above will apply to your use of this website by linking to it.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-600 mb-2">Links from this website:</h4>
                                    <p className="text-gray-700">
                                        We do not monitor or review the content of other party's websites which are linked to from this website.
                                        Opinions expressed or material appearing on such websites are not necessarily shared or endorsed by us
                                        and should not be regarded as the publisher of such opinions or material. You should evaluate the security
                                        and trustworthiness of any other website connected to this website and read their privacy policy and terms
                                        of use statements. SEEKAHOST will not accept any responsibility for any loss or damage in whatever manner,
                                        howsoever caused, resulting from your disclosure to third parties of personal information.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Encryption */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-slate-700 mb-4">ENCRYPTION</h3>
                            <div className="bg-green-50 p-6 rounded-lg">
                                <p className="text-gray-700 leading-relaxed">
                                    Information you supply through this website is encrypted. This means information you submit through this
                                    website may is encrypted and transferred to the web server.<br /> This site uses a secure server (SSL) to encrypt
                                    all of your personal information. We use strong security measures to prevent the loss, misuse and alteration
                                    of your information once it is in our records.
                                </p>
                            </div>
                        </div>

                        {/* Hacking */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-slate-700 mb-4">HACKING</h3>
                            <div className="bg-red-50 p-4 rounded-lg">
                                <p className="text-gray-700 font-medium">
                                    You may not, nor may you allow others to, directly or indirectly, attempt or actually disrupt, impair or
                                    interfere with, alter or modify this website.
                                </p>
                            </div>
                        </div>

                        {/* Copyright */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-slate-700 mb-4">COPYRIGHT</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Information on this website is for information only. All material on this website is the property of SEEKAHOST.
                                Copyright and other relevant intellectual property rights exist on all text, images, audio, software, files
                                and video on this website. All rights are reserved. You must not copy, reproduce, retransmit, photocopy,
                                distribute, disseminate, sell, publish, broadcast, circulate, frame, create derivative works of or store the
                                information received through this website, in whole or in part, without the express prior written consent of
                                SEEKAHOST.
                            </p>
                            <p className="text-gray-700">
                                Users may not post any information from the website to newsgroups, mail lists, electronic bulletin boards,
                                or any other public forum without the prior written consent from SEEKAHOST.
                            </p>
                        </div>
                    </section>
                    {/* Changes to Terms */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-blue-500 pb-2">
                            CHANGES TO TERMS OF USE
                        </h2>
                        <div className="bg-orange-50 p-6 rounded-lg">
                            <p className="text-gray-700 leading-relaxed">
                                SEEKAHOST reserve the right to make changes to these terms of use at any time. Every time you visit this
                                website you agree to the current terms of use.
                            </p>
                        </div>
                    </section>

                    {/* Questions */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-blue-500 pb-2">
                            QUESTIONS
                        </h2>
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <p className="text-gray-700 leading-relaxed">
                                If you have any questions regarding these terms of use please contact us using the details in the 'contact us' section.
                            </p>
                        </div>
                    </section>
                    {/* Usage & Storage of Information */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-blue-500 pb-2">
                            USAGE & STORAGE OF INFORMATION
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">We will send emails with respect to the enquiry received on the website.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">
                                    We send emails and make phone calls for inquiry generated from the website contact forms / income phone
                                    calls to numbers listed on the website / Social Media messages / comments / offline enquiries.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">
                                    The web host stores all data with respect to this website / enquiry. By using this site, you also agree
                                    to Web Host terms and conditions.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">
                                    Even after your "Request to Delete Data", we may still store your past emails / message correspondence
                                    for our internal reference & taxation.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">
                                    Request to Delete Data will not be applicable if you have Active Orders in SEEKAHOST.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">
                                    We will not store Other Registrar Login Details provided by you to configure or to get other supports.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">
                                    We will not be responsible for the Content loss or any other data loss in your website hosted in our servers.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">
                                    We save Customer Data (from enquiries), Upload to Facebook for Re-Marketing.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">
                                    We use Customer Data to send email campaigns with latest offers and promotions.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">
                                    We store Customer Data in our Internal Servers / Software used to store and access client records.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">
                                    We also use Tawk.to chat application. By using / submitting enquiry on Chat, you agree to Tawk.to terms
                                    and conditions, privacy policy.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Account Termination */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-red-500 pb-2">
                            ACCOUNT TERMINATION
                        </h2>
                        <div className="bg-red-50 p-6 rounded-lg">
                            <p className="text-gray-700 leading-relaxed">
                                If your Invoices were in overdue for more than a month, then it will be considered as an Acceptance for any
                                action taken by SEEKAHOST. Even after termination of your Domains, your Information's provided during the
                                Account creation will remain in Our Database. No Proper Response for the tickets and Unpaid Invoices will
                                be considered as the Acceptance for Termination.
                            </p>
                        </div>
                    </section>

                    {/* Website Cookies/Trackers/Privacy */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-green-500 pb-2">
                            WEBSITE COOKIES / TRACKERS / PRIVACY
                        </h2>
                        <div className="space-y-6">
                            <p className="text-gray-700 leading-relaxed">
                                We use cookies to keep track of how our visitors are using our website. Cookies are little files that are
                                stored on your computer's hard-drive and contain information about your interaction with our website. They
                                make your running of our website smoother, but they also provide us with traffic information, letting us know
                                how many people are visiting different parts of the site. Though cookies give us information on the visitors
                                to our website, they can in no way be used to identify those visitors. We make absolutely no attempt to
                                associate information gathered from cookies with personally identifiable information gathered from any other
                                source. Cookies are used purely as a statistical and analytic tool.
                            </p>

                            <div className="bg-green-50 p-6 rounded-lg">
                                <h3 className="text-lg font-semibold text-slate-700 mb-4">Personal Information</h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Any personal information you do provide to us is kept in the strictest of confidence. We will not share
                                    this information with any third party. Under the Data Protection Act 1998 you are at liberty to request
                                    details of any personal information we hold about you.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-2">
                                    We use Cookies for Google Analytics
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-2">
                                    We use Facebook Pixels for Re-Marketing Ads on Facebook & Instagram
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-2">
                                    We use Cookies to show re-marketing ads on Google Display Network
                                </p>
                                <p className="text-red-500 leading-relaxed">
                                    WE NEVER SELL YOUR DATA
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* IP Address */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-blue-500 pb-2">
                            IP ADDRESS
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            We may use your IP address to help diagnose problems with our server and to administer our Web site. Your IP
                            address also may be used to gather broad demographic information and to recognize website user traffic patterns
                            and site usage. This information aids us in merchandising and in developing the design and layout of the site.
                            We may also collect and share information about the pages that you visit on our site, but this information is
                            not personally identifiable.
                        </p>
                    </section>

                    {/* Choice/Opt-Out */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-blue-500 pb-2">
                            CHOICE/OPT-OUT
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            If you do not wish to receive announcements or special offers from us or third parties, you can do the following:
                        </p>
                        <div className="bg-yellow-50 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold text-slate-700 mb-4">Email Newsletters</h3>
                            <p className="text-gray-700 leading-relaxed">
                                You may, from time to time, receive information from us about new features, new services and special offers
                                we think you'll find valuable. You can always opt-out using the "unsubscribe" link on the email. You can
                                also use the above "Request" form to delete your information.
                            </p>
                        </div>
                    </section>

                    {/* Billing Policy */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-orange-500 pb-2">
                            BILLING POLICY
                        </h2>
                        <div className="space-y-6">
                            <p className="text-gray-700 leading-relaxed">
                                SeekaHost customers are expected to abide by all terms and policies, violation of terms can and will cause
                                termination of the account. You are subject to SeekaHost Terms of Service (ToS) which may be updated by us
                                from time to time with/without notice to you.
                            </p>

                            <div>
                                <h3 className="text-lg font-semibold text-slate-700 mb-4">Payments</h3>
                                <div className="bg-orange-50 p-6 rounded-lg">
                                    <p className="text-gray-700 leading-relaxed">
                                        Payments are upfront for Domain Name, Web Hosting, SSL Certificate, Support, Maintenance and other services
                                        of SeekaHost. The client is responsible for all payments/invoices, which are due upon receipt. If an invoice
                                        is on due and crossed the next one/more billing cycle as well, then the customer has to pay all the remaining
                                        invoice left between till their current billing cycle to active the package/domains. If the client doesn't
                                        make all payments within 5 days, SeekaHost will hold the right to charge a late fee of 10% per month or $2
                                        (whichever is greater) for any late or absent payments not met within 5 days from the due date. Invoices that
                                        are not paid in full by the next billing cycle will incur a 10% late charge or $2 late fee, whichever is
                                        greater. This late charge will be added every month the invoice remains unpaid.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-slate-700 mb-4">BackUp After Termination</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    If you fail to clear Invoice within next 30 days of due date, SeekaHost holds the right to terminate your
                                    accounts with/without any prior notice. If you are in need of Website backup, you can confirm the availability
                                    based on your plan and the additional charges will be confirmed by the billing team based on your packages.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-slate-700 mb-4">Suspended/Terminated Accounts</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                        <p className="text-gray-700">
                                            If the payment was not made on time (or) if your account was facing any problem with the malware/spam
                                            contents, the account will be suspended without any prior notice.
                                        </p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                        <p className="text-gray-700">
                                            Unpaid Invoices within 5 days from the due date will lead to account suspension.
                                        </p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                        <p className="text-gray-700">
                                            If the payment due was crossed more than 30 days else the client has requested for immediate cancellation,
                                            the website will be terminated without any prior information/notices.
                                        </p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                        <p className="text-gray-700">Malware removal is chargable depends on the situation.</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                        <p className="text-gray-700">
                                            If the client doesn't respond for the suspension tickets that caused due to Phishing Content, Malware
                                            Issues, Spam Mails or other related issues.
                                        </p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                        <p className="text-gray-700">
                                            We don't encourage copyrights owned by any person's content/any files to be used in your website, which
                                            is apparently hosted with us. If we recieve complaints on copyrights of your website(s), we will
                                            suspend/terminate the domains.
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                                    <p className="text-gray-700 text-sm">
                                        As a part of this context, SeekaHost emphasize that we serves as a medium that deliver's customers website
                                        content over online, whereas the legal copyrights claim by Complaining Party over any kind of files in the
                                        website(s) hosted with us has no interference with SeekaHost.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Your Agreement */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-blue-500 pb-2">
                            YOUR AGREEMENT
                        </h2>
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <p className="text-gray-700 leading-relaxed">
                                By using our Web site or using our services, you agree to the collection and use of information as set forth
                                in this privacy policy. We may from time to time update this policy. We will post any changes to our policy
                                on this page so that you are always aware of what information we collect and how we use it.
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