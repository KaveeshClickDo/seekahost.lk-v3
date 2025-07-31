import Image from "next/image";

export default function WhySeekahost() {
  return (
    <section className="py-16 bg-white md:my-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-18 justify-center">
        <div className="w-full md:w-1/2">
          <div className="inline-block bg-blue-100 text-blue-800 text-sm md:text-lg px-3 py-1 rounded-full mb-4 font-medium">
            Why Us
          </div>

          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-gray-900">
            Why Choose SeekaHost VPS Hosting?
          </h2>

          <p className="text-gray-600 mb-8 text-lg">
            At SeekaHost, we deliver more than just a virtual server — we deliver performance, control, and reliability. Our VPS hosting is designed for tech-savvy users, developers, business owners, and anyone who needs scalable resources and full control without the high costs of dedicated servers.
          </p>

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
              src="/images/vps-hosting/why-seekahost.webp"
              alt="Happy person with arms outstretched celebrating SeekaHost VPS hosting"
              width={1480}
              height={1232}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}