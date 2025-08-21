import BacktoTop from "@/components/shared/BacktoTop";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export const metadata = {
    title: "Terms and Conditions"
}

export default function TermsConditions() {
    return (
        <>
            <Header />
            <div className="min-h-screen">
                {/* Header */}
                <div className="pt-8">
                    <div className="max-w-4xl mx-auto px-6">
                        <h1 className="text-4xl font-bold text-center">SeekaHost Terms and Conditions of Service</h1>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-6 py-12">
                    {/* Introduction */}
                    <div className="mb-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                        <p className="text-gray-700 leading-relaxed">
                            Please read these Terms and Conditions carefully before ordering any products/services from SeekaHost. All contracts that SeekaHost may enter into, for the provision of the SeekaHost’s services, shall be governed by these Terms and Conditions, and SeekaHost will ask their customer for the customer’s acceptance of these Terms and Conditions if the customer use the{' '}
                            <a
                                href="https://www.seekahost.co.uk"
                                className="text-blue-600 hover:text-blue-800 underline font-medium"
                            >
                                https://www.seekahost.co.uk
                            </a>
                            {' '}website and buy domains names and/or web hosting services.
                        </p>
                    </div>

                    {/* Definitions */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-blue-500 pb-2">
                            1. Definitions
                        </h2>
                        <div className="space-y-4 text-sm">
                            <p className="text-gray-700">1.1 Except to the extent expressly provided otherwise, in these Terms and Conditions:</p>
                            <div className="space-y-3 ml-4">
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                    <p className="text-gray-700">
                                        <strong>&quot;Business Day&quot;</strong> means any weekday other than a bank or public holiday in England;
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                    <p className="text-gray-700">
                                        <strong>&quot;Business Hours&quot;</strong> means the hours of 09:00 to 17:00 GMT/BST on a Business Day;
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                    <p className="text-gray-700">
                                        <strong>&quot;Charges&quot;</strong> means the following amounts:<br /><br />

                                        <strong>(a)</strong> the amounts/fees specified and regularly updated on the SeekaHost website <a
                                            href="https://www.seekahost.co.uk"
                                            className="text-blue-600 hover:text-blue-800 underline font-medium"
                                        >https://www.seekahost.co.uk</a> and in the Customer contract; and

                                        <br /><br /><strong>(b)</strong> such amounts as may be agreed by the parties in writing within a contract from time to time;

                                        <br /><br />All charges and fees will be listed in every Customer’s confirmation email after purchasing their web hosting plans with SeekaHost. They will also have an account on the SeekaHost website that they will be able access online via their individual login. Here, all the monthly or annual costs will be displayed in their overview and they can be managed via their custom account (<a
                                            href="https://www.seekahost.co.uk"
                                            className="text-blue-600 hover:text-blue-800 underline font-medium"
                                        >client area</a>).
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                    <p className="text-gray-700">
                                        <strong>&quot;Contract&quot;</strong> means a contract/agreement made under these Terms and Conditions between the Host and the Customer;
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                    <p className="text-gray-700">
                                        <strong>&quot;Customer&quot;</strong> means the person or entity identified as such in the SeekaHost web hosting contract;
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                    <p className="text-gray-700">
                                        <strong>&quot;Customer Confidential Information&quot;</strong> means any information disclosed by the Customer to the Host during the Term (whether disclosed in writing, orally or otherwise) that, at the time of disclosure, was marked as confidential, was described by the Customer as confidential, or should have been reasonably understood by the Host to be confidential;
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                    <p className="text-gray-700">
                                        <strong>&quot;Customer Indemnity Event&quot;</strong> has the meaning given to it in Clause 14.3;
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                    <p className="text-gray-700">
                                        <strong>&quot;Customer Personal Data&quot;</strong> means any Personal Data that is processed by the Host on behalf of the Customer in relation to the Contract, but excluding data with respect to which the Host is a data controller;
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                    <p className="text-gray-700">
                                        <strong>&quot;Data Protection Laws&quot;</strong> means all applicable laws relating to the processing of Personal Data including, while it is in force and applicable to Customer Personal Data, the General Data Protection Regulation (Regulation (EU) 2016/679);
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                    <p className="text-gray-700">
                                        <strong>&quot;Effective Date&quot;</strong> means the date upon which the parties execute an online contract; or, following the Customer completing and submitting the online Services Order Form published by SeekaHost’s website <a
                                            href="https://www.seekahost.co.uk"
                                            className="text-blue-600 hover:text-blue-800 underline font-medium"
                                        >https://www.seekahost.co.uk</a>, the date upon which the Host sends to the Customer an order confirmation via email;
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                    <p className="text-gray-700">
                                        <strong>&quot;Force Majeure Event&quot;</strong> means an event, or a series of related events, that is outside the reasonable control of the party affected (including failures of the internet or any public telecommunications network, hacker attacks, denial of service attacks, virus or other malicious software attacks or infections, power failures, industrial disputes affecting any third party, changes to the law, disasters, explosions, fires, floods, riots, terrorist attacks and wars);
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                    <p className="text-gray-700">
                                        <strong>&quot;Host&quot;</strong> means SeekaHost, a company incorporated in England (registration number 11490390) having its registered office at 147 182-184, High Street North, London, England, E6 2JA;
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                    <p className="text-gray-700">
                                        <strong>&quot;Host Indemnity Event&quot;</strong> has the meaning given to it in Clause 14.1;
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                    <p className="text-gray-700">
                                        <strong>&quot;Hosted Data&quot;</strong> means all data, works and materials: uploaded to or stored on the Hosting Platform by the Customer, or by any third party using any software made available by means of the Hosting Platform; transmitted by the Hosting Platform at the instigation of the Customer, or at the instigation of any third party using any software made available by means of the Hosting Platform; or supplied by the Customer to the Host for uploading to, transmission by or storage on the Hosting Platform; In addition to this, we never access (or) modify (or) update to the customer’s website without gathering access from the customer themself, this mean we never access without the knowledge/permission provided by the customer.
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                    <p className="text-gray-700">
                                        <strong>&quot;Hosting Platform&quot;</strong> means the platform managed by SeekaHost and used by the Host to provide the Hosting Services, including the application, database, system and server software used to provide the Hosting Services, and the computer hardware on which that application, database, system and server software is installed;
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                    <p className="text-gray-700">
                                        <strong>&quot;Hosting Services&quot;</strong> means the hosting of the website(s) identified in the Online Services Order Form in accordance with the technical requirements specified therein;
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                    <p className="text-gray-700">
                                        <strong>&quot;Intellectual Property Rights&quot;</strong> means all intellectual property rights wherever in the world, whether registrable or un-registrable, registered or unregistered, including any application or right of application for such rights (and these “intellectual property rights” include copyright and related rights, database rights, confidential information, trade secrets, know-how, business names, trade names, trademarks, service marks, passing off rights, unfair competition rights, patents, petty patents, utility models, semi-conductor topography rights and rights in designs);
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                    <p className="text-gray-700">
                                        <strong>&quot;Minimum Term&quot;</strong> means, in respect of the Contract, the period specified in the Online Services Order Form;
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                    <p className="text-gray-700">
                                        <strong>&quot;Personal Data&quot;</strong> has the meaning given to it in the Data Protection Laws, which is applicable in the United Kingdom;
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                    <p className="text-gray-700">
                                        <strong>&quot;Online Services Order Form&quot;</strong> means an online order form published by SeekaHost and completed and submitted by the Customer, or otherwise agreed by or on behalf of each party, in each case incorporating these Terms and Conditions by reference;
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                    <p className="text-gray-700">
                                        <strong>&quot;Term&quot;</strong> means the term of the Contract, commencing in accordance with Clause 2.1 and ending in accordance with Clause 2.2]; and
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                    <p className="text-gray-700">
                                        <strong>&quot;Terms and Conditions&quot;</strong> means all the documentation containing the provisions of the Contract, namely the main body of these Terms and Conditions, Schedule 1 (Acceptable Use Policy) and the Online Services Order Form, including any amendments to that documentation from time to time.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Term */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-blue-500 pb-2">
                            2. Term
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">2.1 The Contract shall come into force upon the Effective Date.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">2.2 The Contract shall continue in force indefinitely, subject to termination in accordance with Clause 17.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">2.3 Unless the parties expressly agree otherwise in writing, each Online Services Order Form shall create a distinct contract under these Terms and Conditions.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-blue-500 pb-2">
                            3. Implementation of Hosting Services
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">3.1 SeekaHost shall implement the Hosting Services by transferring the relevant website(s) from the development servers of the Host and installing the relevant website(s) on the live servers of the Host, or by assisting with the transfer of the relevant website(s) from any third party host and installing the relevant website(s) on the live servers of the Host (as appropriate).</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">3.2 SeekaHost shall complete the implementation of the Hosting Services within the period mentioned on respective packages following the Effective Date or new business day upon which the Host has access to all the constituent elements of the relevant website(s).</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">3.3 Within the mentioned period following SeekaHost notifying the Customer in writing (email) that the implementation of the Hosting Services is complete, the Customer shall comprehensively test the relevant website(s) and shall send to SeekaHost a written notice via email setting out the results of those tests if something needs to be corrected. Upon receipt of a notice that the tests have been satisfactorily completed, SeekaHost shall publish the relevant website(s) on its live servers.</p>
                            </div>
                        </div>
                    </section>

                    {/* Hosting Services */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-blue-500 pb-2">
                            4. Hosting Services
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">4.1 SeekaHost shall provide the Hosting Services to the Customer from the date of implementation of the Hosting Services until the end of the agreed Term.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">4.2 SeekaHost shall use reasonable endeavours to maintain the availability of the Hosting Services to the Customer during the relevant period but does not guarantee 100% availability.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">4.3 SeekaHost may from time to time suspend the Hosting Services for the purposes of scheduled maintenance, providing that such scheduled maintenance must be carried out in accordance with this Clause 4.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">4.4 SeekaHost shall ensure that all scheduled maintenance is announced at least 24 hours prior and carried out during more convenient hours to impact Customer websites as little as possible (outside Business Hours where possible). Immediate Maintenance can be carried in unforeseen circumstances with a sudden notice to avoid a major disaster.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">4.5 Limits in respect of the storage capacity, bandwidth and processor utilisation for the Hosting Services are set out in the Online Services Order Form. The Customer acknowledges that SeekaHost may use technical measures to enforce those limits. If, nonetheless, the Hosting Services exceed those limits, the parties shall endeavour to agree a suitable variation to these Terms and Conditions; and if the parties cannot agree such a variation within a reasonable period (being not more than 10 Business Days) following notice from SeekaHost to the Customer requesting such variation, and resource utilisation continues to exceed those limits, the Customer shall be deemed to be in material breach of the Contract.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">4.6 The Customer acknowledges that the Hosting Services may be interrupted as a result of a hardware failure and that SeekaHost will not be in breach of the Contract or otherwise liable to the Customer by virtue of such interruption, providing that the Host must use reasonable endeavours to remedy the interruption as soon as reasonably practicable.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">4.7 The Customer must comply with Schedule 1 (Acceptable Use Policy), and must ensure that all persons using the Hosting Services with the authority of the Customer comply with Schedule 1 (Acceptable Use Policy).</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">4.8 The Customer must not use the Hosting Services for any purpose which is illegal, unlawful, fraudulent or infringes any third party’s legal rights, or in any way which is liable to put SeekaHost in breach of a contractual obligation owed by the Host to any third party infrastructure, network or telecommunications service provider.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">4.9 The Hosting Services are provided to the Customer only and the Customer must not resell or sub-license the Hosting Services to any third party.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">4.10 For the avoidance of doubt, the Customer has no right to administrative or other privileged access to the Hosting Platform or to the software code (including object code, intermediate code and source code) of the Hosting Platform, either during or after the Term.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">4.11 SeekaHost may suspend the provision of the Hosting Services if any amount due to be paid by the Customer to the Host under the Contract is overdue, and the Host has given to the Customer at least 7 Days written notice, following the amount becoming overdue, of its intention to suspend the Hosting Services on this basis. For overdue invoices, a late fee of $2 or 10%(higher price will be added) will be added on/after 5 days from the due date.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-green-500 pb-2">
                            5. Helpdesk
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">5.1 The Host shall make available, a 24-hour email and live chat helpdesk facility for the purpose of providing support to the Customer in relation to the Hosting Services and providing support to SeekaHost’s other customers.</p>
                            </div>
                        </div>
                    </section>

                    {/* Customer Obligations */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-green-500 pb-2">
                            6. Customer Obligations
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">
                                    6.1 Save to the extent that the parties have agreed otherwise in writing, the Customer must provide to SeekaHost, or procure for SeekaHost, such:
                                    <br /><br />
                                    (a) co-operation, support and advice;
                                    <br /><br />
                                    (b) information and documentation as requested in the client area and knowledge center; and
                                    <br /><br />
                                    (c) governmental, legal and regulatory licences, consents and permits,
                                    <br /><br />
                                    as are reasonably necessary to enable SeekaHost to perform its obligations under the Contract.
                                </p>
                            </div>

                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">
                                    6.2 The Customer must provide to SeekaHost, or procure for SeekaHost, such access to the Customer&apos;s computer hardware, software, networks and systems as may be reasonably required by SeekaHost to enable SeekaHost to perform its obligations under the Contract.
                                </p>
                            </div>

                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">
                                    6.3 Save as expressly provided in these Terms and Conditions, the Customer shall be responsible for obtaining and where relevant paying for any licences of third-party software that may be required for the use of the Hosting Services.
                                </p>
                            </div>

                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">
                                    6.4 The Customer shall be responsible for ensuring that its passwords relating to the Hosting Services are securely constructed, kept securely and not disclosed to any unauthorised person; and the Customer must notify SeekaHost as soon as practicable if the Customer becomes aware that any password relating to the Hosting Services has been or may have been compromised or misused.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-blue-500 pb-2">
                            7. Hosted Data
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">7.1 The Customer hereby grants to SeekaHost a non-exclusive licence to copy, reproduce, store, distribute, publish, export, adapt, edit and translate the Hosted Data to the extent reasonably required for the performance of SeekaHost&apos;s obligations and the exercise of SeekaHost&apos;s rights under the Contract, together with the right to sub-license these rights to its own hosting, connectivity and telecommunications service providers to the extent reasonably required for the performance of SeekaHost&apos;s obligations and the exercise of SeekaHost&apos;s rights under the Contract.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">7.2 The Customer warrants to SeekaHost that the Hosted Data when used by SeekaHost in accordance with the Contract will not infringe the Intellectual Property Rights or other legal rights of any person, and will not breach the provisions of any law, statute or regulation, in any jurisdiction and under any applicable law.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">7.3 If SeekaHost reasonably suspects that any element of the Hosted Data breaches Clause 7.2, or breaches any provision of Schedule 1 (Acceptable Use Policy), SeekaHost may edit or delete the relevant Hosted Data to the extent reasonably necessary to ensure that it no longer breaches that provision.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">7.4 SeekaHost shall create a back-up copy of the Hosted Data at least weekly shall ensure that each such copy is sufficient to enable SeekaHost to restore the Hosting Services to the state they were in at the time the back-up was taken, and shall retain and securely store each such copy for a minimum period of 30 days.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">7.5 Within the period of 1 Business Day following receipt of a written request from the Customer, the Host shall use all reasonable endeavours to restore to the Hosting Platform the Hosted Data stored in any back-up copy created and stored by the Host in accordance with Clause 7.4. The Customer acknowledges that this process will overwrite the Hosted Data stored on the Hosting Platform prior to the restoration. It will be applicable only for the packages mentioned &quot;guaranteed backup&quot; along with its features.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">7.6 Save to the extent expressly provided otherwise in these Terms and Conditions, the Customer shall be responsible for creating and maintaining back-ups of the Hosted Data and any other relevant data relating to the Hosting Services, and if necessary for restoring such data to the Hosting Platform.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">7.7 Upon the date of effective termination of the Contract, SeekaHost shall make available to the Customer for download an electronic copy of the Hosted Data (as constituted upon that date). SeekaHost shall however have no obligations under this Clause 7.7 to make available such Hosted Data if any amounts payable by the Customer to SeekaHost under the Contract are due but unpaid upon that date. The Customer acknowledges that whilst SeekaHost may delete the Hosted Data from its computer systems following termination, the Host may also retain such Hosted Data after termination for legal compliance and/or technical reasons, subject in each case to the other provisions of the Contract.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-blue-500 pb-2">
                            8. No assignment of Intellectual Property Rights
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">8.1 Nothing in these Terms and Conditions shall operate to assign or transfer any Intellectual Property Rights from the Host to the Customer, or from the Customer to the Host.</p>
                            </div>
                        </div>
                    </section>

                    {/* Charges */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-blue-500 pb-2">
                            9. Charges
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">9.1 The Customer shall pay the Charges to SeekaHost in accordance with these Terms and Conditions.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">9.2 All amounts stated in or in relation to these Terms and Conditions are, unless the context requires otherwise, stated exclusive of any applicable value added taxes, which will be added to those amounts and payable by the Customer to SeekaHost.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">9.3 SeekaHost may elect to vary any element of the Charges by giving to the Customer not less than 30 days written notice of the variation expiring on any anniversary of the date of execution of the Contract, providing that no such variation shall result in an aggregate percentage increase in the relevant element of the Charges during the Term that exceeds 2% over the percentage increase, during the same period, in the Retail Prices Index (all items) published by the UK Office for National Statistics.</p>
                            </div>
                        </div>
                    </section>

                    {/* Payments */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-blue-500 pb-2">
                            10. Payments
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">10.1 SeekaHost shall issue invoices for the Charges to the Customer on or before the due dates set out in the Online Services Order Form.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">10.2 The Customer must pay the Charges to SeekHost within the due date following the receipt of an invoice issued in accordance with this Clause 10.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">10.3 The Customer must pay all the invoices in due after their last payment to activate their appropriate package.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">10.4 The Customer must pay the Charges by debit card, credit card, direct debit, bank transfer, PayPal or other forms of online payment (using such payment details as are notified by the Host to the Customer from time to time).</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">10.5 If the Customer does not pay any amount properly due to SeekaHost under these Terms and Conditions, SeekaHost may:
                                    <br /><br />
                                    (a) late fee from the Customer on overdue invoices at the rate of $2 or 10%(Higher Price will be added) of the Invoice amount or
                                    <br /><br />
                                    (b) claim interest and statutory compensation from the Customer pursuant to the Late Payment of Commercial Debts (Interest) Act 1998.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Important Notice - Fraud Prevention */}
                    <section className="mb-10">
                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                            <p className="text-red-800 font-semibold">
                                If the transaction or purchase feels suspicious by the billing team, then the team will request proofs to verify your identity. If you fail to respond or verify with the proofs within 24 hours, the particular products or services will be deleted from the account and it won&apos;t be eligible for the refund.
                            </p>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-green-500 pb-2">
                            11. SeekaHost’s confidentiality obligations
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">11.1 SeekaHost must: <br /><br />(a) keep the Customer Confidential Information strictly confidential; <br /><br />(b) not disclose the Customer Confidential Information to any person without the Customer&apos;s prior written consent, and then only under conditions of confidentiality no less onerous than those contained in these Terms and Conditions; <br /><br />(c) use the same degree of care to protect the confidentiality of the Customer Confidential Information as the Host uses to protect the Host&apos;s own confidential information of a similar nature, being at least a reasonable degree of care; and <br /><br />(d) act in good faith at all times in relation to the Customer Confidential Information.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">11.2 Notwithstanding Clause 11.1, SeekaHost may disclose the Customer Confidential Information to the Host&apos;s officers, employees, professional advisers, insurers, agents and subcontractors who are bound by a written agreement or professional obligation to protect the confidentiality of the Customer Confidential Information.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">11.3 This Clause 11 imposes no obligations upon SeekaHost with respect to Customer Confidential Information that: <br /><br />(a) is known to SeekaHost before disclosure under these Terms and Conditions and is not subject to any other obligation of confidentiality; <br /><br />(b) is or becomes publicly known through no act or default of SeekaHost; or <br /><br />(c) is obtained by SeekaHost from a third party in circumstances where the Host has no reason to believe that there has been a breach of an obligation of confidentiality.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">11.4 The restrictions in this Clause 11 do not apply to the extent that any Customer Confidential Information is required to be disclosed by any law or regulation, by any judicial or governmental order or request, or pursuant to disclosure requirements relating to the listing of the stock of the Host on any recognised stock exchange.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">11.5 The provisions of this Clause 11 shall continue in force indefinitely following the termination of the Contract.</p>
                            </div>
                        </div>
                    </section>

                    {/* Data Protection */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-green-500 pb-2">
                            12. Data Protection
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">12.1 SeekaHost and Each party shall comply with the Data Protection Laws with respect to the processing of the Customer Personal Data.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">12.2 The Customer warrants to SeekaHost that it has the legal right to disclose all Personal Data that it does in fact disclose to the Host under or in connection with the Contract.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">12.3 The Customer shall only supply to SeekaHost, and the Host shall only process, in each case under or in relation to the Contract, the Personal Data of the Customer of the following types: names, DOB, addresses, email addresses, telephone numbers, bank details; and SeekaHost shall only process the Customer Personal Data for the following purposes: domain registration, web hosting,, customer communication, internal administration.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">12.4 SeekaHost shall only process the Customer Personal Data during the Term and for not more than 30 days following the end of the Term, subject to the other provisions of this Clause 12.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">12.5 SeekaHost shall only process the Customer Personal Data on the documented instructions of the Customer (including with regard to transfers of the Customer Personal Data to any place outside the European Economic Area, as set out in these Terms and Conditions or any other document agreed by the parties in writing.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">12.6 SeekaHost shall promptly inform the Customer if, in the opinion of the Host, an instruction of the Customer relating to the processing of the Customer Personal Data infringes the Data Protection Laws.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">12.7 Notwithstanding any other provision of these Terms and Conditions, SeekaHost may process the Customer Personal Data if and to the extent that the Host is required to do so by applicable law. In such a case, the Host shall inform the Customer of the legal requirement before processing, unless that law prohibits such information on important grounds of public interest.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">12.8 SeekaHost shall ensure that persons authorised to process the Customer Personal Data have committed themselves to confidentiality or are under an appropriate statutory obligation of confidentiality.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">12.9 SeekaHost and the Customer shall each implement appropriate technical and organisational measures to ensure an appropriate level of security for the Customer Personal Data, including the measures specified in the privacy policy.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">12.10 SeekaHost must not engage any third party to process the Customer Personal Data without the prior specific or general written authorisation of the Customer. In the case of a general written authorisation, the Host shall inform the Customer at least 7 days in advance of any intended changes concerning the addition or replacement of any third party processor, and if the Customer objects to any such changes before their implementation, then the Customer may terminate the Contract on [7 days&apos;] written notice to the Host, providing that such notice must be given within the period of [7 days] following the date that the Host informed the Customer of the intended changes. The Host shall ensure that each third party processor is subject to the same legal obligations as those imposed on the Host by this Clause 12.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">12.11 As at the Effective Date, SeekaHost is hereby authorised by the Customer to engage, as sub-processors with respect to Customer Personal Data, [third parties within the following categories: cpanel, AWS, WHMCS, OVH and Google].</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">12.12 SeekaHost shall, insofar as possible and taking into account the nature of the processing, take appropriate technical and organisational measures to assist the Customer with the fulfilment of the Customer&apos;s obligation to respond to requests exercising a data subject&apos;s rights under the Data Protection Laws.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">12.13 SeekaHost shall assist the Customer in ensuring compliance with the obligations relating to the security of processing of personal data, the notification of personal data breaches to the supervisory authority, the communication of personal data breaches to the data subject, data protection impact assessments and prior consultation in relation to high-risk processing under the Data Protection Laws. The Host may charge the Customer [at its standard time-based charging rates] for any work performed by the Host at the request of the Customer pursuant to this Clause 12.13.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">12.14 SeekaHost shall make available to the Customer all information necessary to demonstrate the compliance of the Host with its obligations under this Clause 12 and the Data Protection Laws.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">12.15 SeekaHost shall, at the choice of the Customer, delete or return all of the Customer Personal Data to the Customer after the provision of services relating to the processing, and shall delete existing copies save to the extent that GDPR law requires storage of the relevant Personal Data.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">12.16 SeekaHost shall allow for and contribute to audits, including inspections, conducted by the Customer or another auditor mandated by the Customer in respect of the compliance of the Host&apos;s processing of Customer Personal Data with the Data Protection Laws and this Clause 12. The Host may charge the Customer [at its standard time-based charging rates] for any work performed by the Host at the request of the Customer pursuant to this Clause 12.16.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">12.17 If any changes or prospective changes to the Data Protection Laws result or will result in one or both parties not complying with the Data Protection Laws in relation to processing of Personal Data carried out under these Terms and Conditions, then the parties shall use their best endeavours promptly to agree such variations to these Terms and Conditions as may be necessary to remedy such non-compliance.</p>
                            </div>
                        </div>
                    </section>

                    {/* Limitations and Exclusions of Liability */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-yellow-500 pb-2">
                            13. Warranties
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">13.1 SeekaHost shall provide the Hosting Services in accordance with the standards of skill and care reasonably expected from a leading service provider in the Host&apos;s industry.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">13.2 SeekaHost warrants to the Customer that: <br /><br />(a) the Host has the legal right and authority to enter into the Contract and to perform its obligations under these Terms and Conditions; <br /><br />(b) the Host will comply with all applicable legal and regulatory requirements applying to the exercise of the Host&apos;s rights and the fulfilment of the Host&apos;s obligations under these Terms and Conditions; and <br /><br />(c) the Host has or has access to all necessary know-how, expertise and experience to perform its obligations under these Terms and Conditions.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">13.3 The Customer warrants to the Host that it has the legal right and authority to enter into the Contract and to perform its obligations under these Terms and Conditions.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">13.4 All of the parties&apos; warranties and representations in respect of the subject matter of the Contract are expressly set out in these Terms and Conditions. To the maximum extent permitted by applicable law, no other warranties or representations concerning the subject matter of the Contract will be implied into the Contract or any related contract.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-yellow-500 pb-2">
                            14. Indemnities
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">14.1 SeekaHost shall indemnify and shall keep indemnified the Customer against any and all liabilities, damages, losses, costs and expenses (including legal expenses and amounts reasonably paid in settlement of legal claims) suffered or incurred by the Customer and arising directly or indirectly as a result of any breach by the Host of these Terms and Conditions.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">14.2 The Customer must: <br /><br />(a) upon becoming aware of an actual or potential Host Indemnity Event, notify the Host; <br /><br />(b) provide to the Host all such assistance as may be reasonably requested by the Host in relation to the Host Indemnity Event; <br /><br />(c) allow the Host the exclusive conduct of all disputes, proceedings, negotiations and settlements with third parties relating to the Host Indemnity Event; and <br /><br />(d) not admit liability to any third party in connection with the Host Indemnity Event or settle any disputes or proceedings involving a third party and relating to the Host Indemnity Event without the prior written consent of the Host, and the Host&apos;s obligation to indemnify the Customer under Clause 14.1 shall not apply unless the Customer complies with the requirements of this Clause 14.2.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">14.3 The Customer shall indemnify and shall keep indemnified the Host against any and all liabilities, damages, losses, costs and expenses (including legal expenses and amounts reasonably paid in settlement of legal claims) suffered or incurred by the Host and arising directly or indirectly as a result of any breach by the Customer of these Terms and Conditions.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">14.4 The Host must: <br /><br />(a) upon becoming aware of an actual or potential Customer Indemnity Event, notify the Customer; <br /><br />(b) provide to the Customer all such assistance as may be reasonably requested by the Customer in relation to the Customer Indemnity Event; <br /><br />(c) allow the Customer the exclusive conduct of all disputes, proceedings, negotiations and settlements with third parties relating to the Customer Indemnity Event; and <br /><br />(d) not admit liability to any third party in connection with the Customer Indemnity Event or settle any disputes or proceedings involving a third party and relating to the Customer Indemnity Event without the prior written consent of the Customer, and the Customer&apos;s obligation to indemnify the Host under Clause 14.3 shall not apply unless the Host complies with the requirements of this Clause 14.4.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">14.5 The indemnity protection set out in this Clause 14 shall be subject to the limitations and exclusions of liability set out in the Contract.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-yellow-500 pb-2">
                            15. Limitations and exclusions of liability
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">15.1 Nothing in these Terms and Conditions will: (a) limit or exclude any liability for death or personal injury resulting from negligence; <br /><br />(b) limit or exclude any liability for fraud or fraudulent misrepresentation; <br /><br />(c) limit any liabilities in any way that is not permitted under applicable law; or <br /><br />(d) exclude any liabilities that may not be excluded under applicable law.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">15.2 The limitations and exclusions of liability set out in this Clause 15 and elsewhere in these Terms and Conditions: <br /><br />(a) are subject to Clause 15.1; and <br /><br />(b) govern all liabilities arising under these Terms and Conditions or relating to the subject matter of these Terms and Conditions, including liabilities arising in contract, in tort (including negligence) and for breach of statutory duty, except to the extent expressly provided otherwise in these Terms and Conditions.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">15.3 SeekaHost shall not be liable to the Customer in respect of any losses arising out of a Force Majeure Event.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">15.4 SeekaHost shall not be liable to the Customer in respect of any loss of profits or anticipated savings.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">15.5 SeekaHost shall not be liable to the Customer in respect of any loss of revenue or income.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">15.6 SeekaHost shall not be liable to the Customer in respect of any loss of use or production.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">15.7 Neither party shall be liable to the other party in respect of any loss of business, contracts or opportunities.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">15.8 Neither party shall be liable to the other party in respect of any loss or corruption of any data, database or software; providing that this Clause 15.8 shall not protect the Host unless the Host has fully complied with its obligations under Clause 7.4 and Clause 7.5.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">15.9 SeekaHost shall not be liable to the Customer in respect of any special, indirect or consequential loss or damage.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">15.10 The liability of each party to the other party under the Contract in respect of any event or series of related events shall not exceed the greater of: <br /><br />(a) product price; and <br /><br />(b) the total amount paid and payable by the Customer to the Host under the Contract in the 12-month period preceding the commencement of the event or events.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">15.11 The aggregate liability of each party to the other party under the Contract shall not exceed the greater of: <br /><br />(a) product price; and <br /><br />(b) the total amount paid and payable by the Customer to the Host under the Contract.</p>
                            </div>
                        </div>
                    </section>

                    {/* Termination */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-red-500 pb-2">
                            16. Force Majeure Event
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">16.1 If a Force Majeure Event gives rise to a failure or delay in either party performing any obligation under the Contract (other than any obligation to make a payment), that obligation will be suspended for the duration of the Force Majeure Event.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">16.2 A party that becomes aware of a Force Majeure Event which gives rise to, or which is likely to give rise to, any failure or delay in that party performing any obligation under the Contract, must: <br /><br />(a) promptly notify the other; and <br /><br />(b) inform the other of the period for which it is estimated that such failure or delay will continue.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">16.3 A party whose performance of its obligations under the Contract is affected by a Force Majeure Event must take reasonable steps to mitigate the effects of the Force Majeure Event.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-red-500 pb-2">
                            17. Termination
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">17.1 SeekaHost may terminate the Contract by giving to the Customer [not less than 30 days’] written notice of termination, expiring after the end of the Minimum Term. The Customer may terminate the Contract by giving to the Host [not less than 30 days’] written notice of termination, expiring after the end of the Minimum Term.</p>
                            </div>
                            <h2 className="text-xl font-semibold text-slate-800 mb-6">
                                OR
                            </h2>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">17.1 Either party may terminate the Contract by giving to the other party [not less than 30 days&apos;] written notice of termination, expiring after the end of the Minimum Term.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">17.2 Either party may terminate the Contract immediately by giving written notice of termination to the other party if: <br /><br />(a) the other party commits any breach of the Contract, and the breach is not remediable; <br /><br />(b) the other party commits a breach of the Contract, and the breach is remediable but the other party fails to remedy the breach within the period of 7 days following the giving of a written notice to the other party requiring the breach to be remedied; or <br /><br />(c) the other party persistently breaches the Contract (irrespective of whether such breaches collectively constitute a material breach).</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">17.3 Either party may terminate the Contract immediately by giving written notice of termination to the other party if: <br /><br />(a) the other party: <br /><br />(i) is dissolved; <br /><br />(ii) ceases to conduct all (or substantially all) of its business; <br /><br />(iii) is or becomes unable to pay its debts as they fall due; <br /><br />(iv) is or becomes insolvent or is declared insolvent; or <br /><br />(v) convenes a meeting or makes or proposes to make any arrangement or composition with its creditors; <br /><br />(b) an administrator, administrative receiver, liquidator, receiver, trustee, manager or similar is appointed over any of the assets of the other party; <br /><br />(c) an order is made for the winding up of the other party, or the other party passes a resolution for its winding up (other than for the purpose of a solvent company reorganisation where the resulting entity will assume all the obligations of the other party under the Contract); or <br /><br />(d) if that other party is an individual: <br /><br />(i) that other party dies; <br /><br />(ii) as a result of illness or incapacity, that other party becomes incapable of managing his or her own affairs; or <br /><br />(iii) that other party is the subject of a bankruptcy petition or order.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">17.4 SeekaHost may terminate the Contract immediately by giving written notice to the Customer if: <br /><br />(a) any amount due to be paid by the Customer to the Host under the Contract is unpaid by the due date and remains unpaid upon the date that that written notice of termination is given; and <br /><br />(b) the Host has given to the Customer at least [30 days&apos;] written notice, following the failure to pay, of its intention to terminate the Contract in accordance with this Clause 17.4.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-red-500 pb-2">
                            18. Effects of termination
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">18.1 Upon the termination of the Contract, all of the provisions of these Terms and Conditions shall cease to have effect, save that the following provisions of these Terms and Conditions shall survive and continue to have effect (in accordance with their express terms or otherwise indefinitely): [Clauses 1, 4.10, 7.7, 10.2, 10.5, 11, 12.1, 12.3, 12.4, 12.5, 12.6, 12.7, 12.8, 12.9, 12.10, 12.11, 12.12, 12.13, 12.14, 12.15, 12.16, 12.17, 14, 15, 18, 21 and 22].</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">18.2 Except to the extent that these Terms and Conditions expressly provides otherwise, the termination of the Contract shall not affect the accrued rights of either party.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">18.3 Within [30 days] following the termination of the Contract for any reason: <br /><br />(a) the Customer must pay to the Host any Charges in respect of Hosting Services provided to the Customer before the termination of the Contract; and <br /><br />(b) the Host must refund to the Customer any Charges paid by the Customer to the Host in respect of Hosting Services that were to be provided to the Customer after the termination of the Contract, without prejudice to the parties&apos; other legal rights.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-red-500 pb-2">
                            19. Notices
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">19.1 Any notice from one party to the other party under these Terms and Conditions must be given by one of the following methods (using the relevant contact details set out in Clause 19.2 and the Online Services Order Form): <br /><br />(a) delivered via email, in which case the notice shall be deemed to be received upon delivery (email notification that email has been opened); providing that, if the stated time of deemed receipt is not within Business Hours, then the time of deemed receipt shall be when Business Hours next begin after the stated time.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">19.2 SeekaHost&apos;s contact details for notices under this Clause 19 are found on this website. Email: support@seekahost.co.uk</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">19.3 The addressee and contact details set out in Clause 19.2 and in the Online Services Order Form may be updated from time to time by a party giving written notice of the update to the other party in accordance with this Clause 19.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-red-500 pb-2">
                            20. Subcontracting
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">20.1 SeekaHost must not subcontract any of its obligations under the Contract without the prior written consent of the Customer, providing that the Customer must not unreasonably withhold or delay the giving of such consent.</p>
                            </div>
                            <h2 className="text-xl font-semibold text-slate-800 mb-6">
                                OR
                            </h2>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">20.1 Subject to any express restrictions elsewhere in these Terms and Conditions, the Host may subcontract any of its obligations under the Contract, providing that the Host must give to the Customer, promptly following the appointment of a subcontractor, a written notice specifying the subcontracted obligations and identifying the subcontractor in question.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">20.2 SeekaHost shall remain responsible to the Customer for the performance of any subcontracted obligations.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-red-500 pb-2">
                            21. General
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">21.1 No breach of any provision of the Contract shall be waived except with the express written consent of the party not in breach.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">21.2 If any provision of the Contract is determined by any court or other competent authority to be unlawful and/or unenforceable, the other provisions of the Contract will continue in effect. If any unlawful and/or unenforceable provision would be lawful or enforceable if part of it were deleted, that part will be deemed to be deleted, and the rest of the provision will continue in effect (unless that would contradict the clear intention of the parties, in which case the entirety of the relevant provision will be deemed to be deleted).</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">21.3 The Contract may not be varied except by a written document signed by or on behalf of each of the parties.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">21.4 The Customer hereby agrees that the Host may assign the Host&apos;s contractual rights and obligations under the Contract to any successor to all or a substantial part of the business of the Host, if necessary. The Customer must not without the prior written consent of the Host assign, transfer or otherwise deal with any of the Customer&apos;s contractual rights or obligations under the Contract.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">21.5 The Contract is made for the benefit of the parties, and is not intended to benefit any third party or be enforceable by any third party. The rights of the parties to terminate, rescind, or agree any amendment, waiver, variation or settlement under or relating to the Contract are not subject to the consent of any third party.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">21.6 Subject to Clause 15.1, these Terms and Conditions shall constitute the entire agreement between the parties in relation to the subject matter of these Terms and Conditions, and shall supersede all previous agreements, arrangements and understandings between the parties in respect of that subject matter.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">21.7 The Contract shall be governed by and construed in accordance with English law.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">21.8 The courts of England shall have exclusive jurisdiction to adjudicate any dispute arising under or in connection with the Contract.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-red-500 pb-2">
                            22. Interpretation
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">22.1 In these Terms and Conditions, a reference to a statute or statutory provision includes a reference to: <br /><br />(a) that statute or statutory provision as modified, consolidated and/or re-enacted from time to time; and <br /><br />(b) any subordinate legislation made under that statute or statutory provision.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">22.2 The Clause headings do not affect the interpretation of these Terms and Conditions.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">22.3 References in these Terms and Conditions to &quot;calendar months&quot; are to [the 12 named periods (January, February and so on) into which a year is divided].</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">22.4 In these Terms and Conditions, general words shall not be given a restrictive interpretation by reason of being preceded or followed by words indicating a particular class of acts, matters or things.</p>
                            </div>
                        </div>
                    </section>

                    {/* Acceptable Use Policy */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-red-500 pb-2">
                            Schedule 1 - Acceptable Use Policy
                        </h2>

                        <h3 className="text-lg font-semibold text-slate-700 mb-4">Introduction</h3>
                        <div className="space-y-4 mb-6">
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">1.1 This acceptable use policy (the “Policy“) sets out the rules governing: <br /><br />(a) the use of our [hosting services, connectivity services, communications services and related services] (the “Services“); and <br /><br />(b) the transmission, storage and processing of content by you, or by any person on your behalf, using the Services (“Content“).</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">1.2 References in this Policy to “you” are to any customer for the Services and any individual user of the Services (and “your” should be construed accordingly); and references in this Policy to “us” are to SeekaHost (and “we” and “our” should be construed accordingly).</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">1.3 By using the Services, you agree to the rules set out in this Policy.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">1.4 We will ask for your express agreement to the terms of this Policy before you upload or submit any Content or otherwise use the Services.</p>
                            </div>
                        </div>

                        <h3 className="text-lg font-semibold text-slate-700 mb-4">General usage rules</h3>
                        <div className="space-y-4 mb-6">
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">2.1 You must not use the Services in any way that causes, or may cause, damage to the Services or impairment of the availability or accessibility of the Services.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">2.2 You must not use the Services: <br /><br />(a) in any way that is unlawful, illegal, fraudulent, deceptive or harmful; or <br /><br />(b) in connection with any unlawful, illegal, fraudulent, deceptive or harmful purpose or activity.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">2.3 You must ensure that all Content complies with the provisions of this Policy.</p>
                            </div>
                        </div>

                        <h3 className="text-lg font-semibold text-slate-700 mb-4">Unlawful Content</h3>
                        <div className="space-y-4 mb-6">
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">3.1 Content must not be illegal or unlawful, must not infringe any person&apos;s legal rights, and must not be capable of giving rise to legal action against any person (in each case in any jurisdiction and under any applicable law).</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">3.2 Content, and the use of Content by us in any manner licensed or otherwise authorised by you, must not: <br /><br />(a) be libellous or maliciously false; <br />(b) be obscene or indecent; <br />(c) infringe any copyright, moral right, database right, trademark right, design right, right in passing off, or other intellectual property right; <br />(d) infringe any right of confidence, right of privacy or right under data protection legislation; <br />(e) constitute negligent advice or contain any negligent statement; <br />(f) constitute an incitement to commit a crime, instructions for the commission of a crime or the promotion of criminal activity; <br />(g) be in contempt of any court, or in breach of any court order; <br />(h) constitute a breach of racial or religious hatred or discrimination legislation; <br />(i) be blasphemous; <br />(j) constitute a breach of official secrets legislation; or <br />(k) constitute a breach of any contractual obligation owed to any person.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">3.3 You must ensure that Content is not and has never been the subject of any threatened or actual legal proceedings or other similar complaint.</p>
                            </div>
                        </div>

                        <h3 className="text-lg font-semibold text-slate-700 mb-4">Graphic material</h3>
                        <div className="space-y-4 mb-6">
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">4.1 Content must be appropriate for all persons who have access to or are likely to access the Content in question.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">4.2 Content must not depict violence in an explicit, graphic or gratuitous manner.</p>
                            </div>
                        </div>

                        <h3 className="text-lg font-semibold text-slate-700 mb-4">Marketing and spam</h3>
                        <div className="space-y-4 mb-6">
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">5.1 You must not without our written permission use the Services for any purpose relating to the marketing, advertising, promotion, sale or supply of any product, service or commercial offering.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">5.2 Content must not constitute or contain spam, and you must not use the Services to store or transmit spam – which for these purposes shall include all unlawful marketing communications and unsolicited commercial communications.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">5.3 You must not send any spam or other marketing communications to any person using any email address or other contact details made available through the Services or that you find using the Services.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">5.4 You must not use the Services to promote, host or operate any chain letters, Ponzi schemes, pyramid schemes, matrix programs, multi-level marketing schemes, &quot;get rich quick&quot; schemes or similar letters, schemes or programs.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">5.5 You must not use the Services in any way which is liable to result in the blacklisting of any of our IP addresses.</p>
                            </div>
                        </div>

                        <h3 className="text-lg font-semibold text-slate-700 mb-4">Monitoring</h3>
                        <div className="space-y-4 mb-6">
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">6.1 You acknowledge that we may actively monitor the Content and the use of the Services.</p>
                            </div>
                        </div>

                        <h3 className="text-lg font-semibold text-slate-700 mb-4">Data mining</h3>
                        <div className="space-y-4 mb-6">
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">7.1 You must not conduct any systematic or automated data scraping, data mining, data extraction or data harvesting, or other systematic or automated data collection activity, by means of or in relation to the Services.</p>
                            </div>
                        </div>

                        <h3 className="text-lg font-semibold text-slate-700 mb-4">Harmful software</h3>
                        <div className="space-y-4 mb-6">
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">8.1 The Content must not contain or consist of, and you must not promote, distribute or execute by means of the Services, any viruses, worms, spyware, adware or other harmful or malicious software, programs, routines, applications or technologies.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700">8.2 The Content must not contain or consist of, and you must not promote, distribute or execute by means of the Services, any software, programs, routines, applications or technologies that will or may have a material negative effect upon the performance of a computer or introduce material security risks to a computer.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <BacktoTop />
            <Footer />
        </>
    );
}