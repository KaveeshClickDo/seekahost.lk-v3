import Image from "next/image";

export default function WhySeekahost() {
  return (
    <section className="py-16 bg-white md:my-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-18 justify-center">
        <div className="w-full md:w-1/2">
          <div className="inline-block bg-blue-100 text-[#235E9D] text-sm md:text-lg px-3 py-1 rounded-full mb-4 font-medium">
            Features
          </div>

          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Built for Speed, Scale & Stability
          </h2>

          <p className="text-gray-600 mb-8 text-lg">
            Seekahost Cloud Servers are engineered to deliver lightning-fast performance with the flexibility modern businesses demand. Whether you&apos;re running a high-traffic website, a SaaS platform, or mission-critical apps, our cloud infrastructure adapts in real time.
          </p>

          <ul className="space-y-1 mb-10">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              <div>
                <span className="text-gray-900">Instant Scalability</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              <div>
                <span className="text-gray-900">High Availability</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              <div>
                <span className="text-gray-900">Blazing-Fast SSD Storage</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              <div>
                <span className="text-gray-900">Optimized for Speed</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              <div>
                <span className="text-gray-900">Global Reach</span>
              </div>
            </li>
          </ul>

          <div className="flex items-center gap-6">
            <button className="bg-[#0A488B] text-white border border-[#0A488B] px-6 py-2 rounded-full hover:bg-blue-900 transition-colors cursor-pointer font-bold">
              Get Started
            </button>
            <button className="flex items-center gap-2 text-gray-700 font-semibold hover:text-gray-900 transition-colors">
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/cloud-servers/why-seekahost.webp"
              alt="Person working on laptop with cloud infrastructure"
              width={1176}
              height={1142}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}