import Image from "next/image";

export default function UKDataCenters() {
  return (
    <section className="py-16 bg-[#0A488A] md:my-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-18 justify-center">
        <div className="w-full md:w-1/2">
          <div className="inline-block bg-blue-100 text-blue-800 text-sm md:text-lg px-3 py-1 rounded-full mb-4 font-medium">
            Data Centers
          </div>

          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white">
            Powered by UK-Based Data Centers
          </h2>

          <p className="text-blue-100 mb-8 text-lg">
            Hosting your website or application in the UK means faster performance for your local audience, improved SEO rankings, and compliance with UK & EU data regulations. Seekahost&apos;s UK data centers are built for speed, reliability, and security — giving your online presence a powerful local edge.
          </p>

          <ul className="space-y-1 mb-10">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-200 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              <div>
                <span className="text-white">Low Latency for UK & Europe</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-200 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              <div>
                <span className="text-white">Tier 3+ Infrastructure</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-200 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              <div>
                <span className="text-white">Green Hosting</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-200 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              <div>
                <span className="text-white">SEO Benefits</span>
              </div>
            </li>
          </ul>

          <div className="flex items-center gap-6">
            <button className="bg-transparent text-white border border-white px-6 py-2 rounded-full hover:bg-gray-100 hover:text-[#0A488A] transition-colors cursor-pointer font-bold">
              Get Started
            </button>
            <button className="flex items-center gap-2 text-white font-semibold hover:text-blue-100 transition-colors">
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Content - UK Map Image */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/cloud-servers/uk-map-data-centers.webp"
              alt="UK map showing data center locations"
              width={1111}
              height={1194}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}