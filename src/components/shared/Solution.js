import Image from 'next/image';

export default function Solution() {
  return (
    <section className="py-12 md:mt-10 md:mb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-0">

        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            SeekaHost – 1 Click Solution for Hosting
          </h2>
          <p className="text-gray-700 mb-8 mx-auto">Protecting your beloved with our comprehensive full and credible insurance coverage you can</p>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">

          <div className="bg-[#F4F7FA] rounded-lg shadow shadow-none hover:shadow-lg transition-shadow max-w-lg md:max-w-xl w-full">
            <div className="flex flex-col items-start p-8 text-left">
              <div className="mb-4">
                <Image
                  src="/images/shared/high-speed-performance.svg"
                  alt="High-Speed Performance"
                  width={75}
                  height={75}
                  className="w-[70px] h-[70px] md:w-[75px] md:h-[75px]"
                />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-[#324561]">High-Speed Performance</h3>
              <p className="text-[#2E4360]">
                Powered by high-performance CPUs for fast load times and smooth handling of high traffic.
              </p>
            </div>
          </div>


          <div className="bg-[#F4F7FA] rounded-lg shadow shadow-none hover:shadow-lg transition-shadow max-w-lg md:max-w-xl w-full">
            <div className="flex flex-col items-start p-8 text-left">
              <div className="mb-4">
                <Image
                  src="/images/shared/24-7-expert-support.svg"
                  alt="24/7 Expert Support"
                  width={75}
                  height={75}
                  className="w-[70px] h-[70px] md:w-[75px] md:h-[75px]"
                />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-[#324561]">24/7 Expert Support</h3>
              <p className="text-[#2E4360]">
                Round-the-clock technical support from UK hosting specialists.
              </p>
            </div>
          </div>

          <div className="bg-[#F4F7FA] rounded-lg shadow shadow-none hover:shadow-lg transition-shadow max-w-lg md:max-w-xl w-full">
            <div className="flex flex-col items-start p-8 text-left">
              <div className="mb-4">
                <Image
                  src="/images/shared/unlimited-ssd-storage.svg"
                  alt="Unlimited SSD Storage"
                  width={75}
                  height={75}
                  className="w-[70px] h-[70px] md:w-[75px] md:h-[75px]"
                />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-[#324561]">Unlimited SSD Storage</h3>
              <p className="text-[#2E4360]">
                Fast, reliable SSD storage with no limits for optimal site performance.
              </p>
            </div>
          </div>

          <div className="bg-[#F4F7FA] rounded-lg shadow shadow-none hover:shadow-lg transition-shadow max-w-lg md:max-w-xl w-full">
            <div className="flex flex-col items-start p-8 text-left">
              <div className="mb-4">
                <Image
                  src="/images/shared/uk-based-servers.svg"
                  alt="UK-Based Servers"
                  width={75}
                  height={75}
                  className="w-[70px] h-[70px] md:w-[75px] md:h-[75px]"
                />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-[#324561]">UK-Based Servers</h3>
              <p className="text-[#2E4360]">
                Local UK servers ensure top speed and seamless user experience for UK audiences.
              </p>
            </div>
          </div>

          <div className="bg-[#F4F7FA] rounded-lg shadow shadow-none hover:shadow-lg transition-shadow max-w-lg md:max-w-xl w-full">
            <div className="flex flex-col items-start p-8 text-left">
              <div className="mb-4">
                <Image
                  src="/images/shared/simple-n-scalable-interface.svg"
                  alt="Simple & Scalable Interface"
                  width={75}
                  height={75}
                  className="w-[70px] h-[70px] md:w-[75px] md:h-[75px]"
                />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-[#324561]">Simple & Scalable Interface</h3>
              <p className="text-[#2E4360]">
                Clean, user-friendly dashboard with flexible hosting options.
              </p>
            </div>
          </div>

          <div className="bg-[#F4F7FA] rounded-lg shadow shadow-none hover:shadow-lg transition-shadow max-w-lg md:max-w-xl w-full">
            <div className="flex flex-col items-start p-8 text-left">
              <div className="mb-4">
                <Image
                  src="/images/shared/built-in-ddos-protection.svg"
                  alt="Built-In DDoS Protection"
                  width={75}
                  height={75}
                  className="w-[70px] h-[70px] md:w-[75px] md:h-[75px]"
                />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-[#324561]">Built-In DDoS Protection</h3>
              <p className="text-[#2E4360]">
                Advanced security to keep your site safe from malicious traffic attacks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
