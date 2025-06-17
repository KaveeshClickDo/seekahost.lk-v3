import Image from 'next/image';

export default function Solution() {
  return (
    <section className="py-12 md:my-10">
      <div className="max-w-7xl mx-auto px-4 md:px-0">

        <div className="text-center mb-12">
          <h1 className="inline-block bg-blue-100 text-[#235E9D] text-sm md:text-lg px-3 py-1 rounded-full mb-4 font-medium">Our Solutions</h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            SeekaHost – <span className="font-normal">1 Click Solution for Hosting</span>
          </h2>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">

          <div className="bg-[#F4F7FA] rounded-lg shadow shadow-none hover:shadow-lg transition-shadow max-w-lg md:max-w-xl w-full">
            <div className="flex flex-col items-start p-8 text-left">
              <div className="mb-4">
                <Image
                  src="/images/shared/ddos-protected.svg"
                  alt="DDOS Protected"
                  width={75}
                  height={75}
                  className="w-[70px] h-[70px] md:w-[75px] md:h-[75px]"
                />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-[#324561]">DDOS Protected</h3>
              <p className="text-[#2E4360]">
                With real-time traffic filtering and intelligent threat detection, we ensure your site remains accessible and performs optimally under all conditions.
              </p>
            </div>
          </div>


          <div className="bg-[#F4F7FA] rounded-lg shadow shadow-none hover:shadow-lg transition-shadow max-w-lg md:max-w-xl w-full">
            <div className="flex flex-col items-start p-8 text-left">
              <div className="mb-4">
                <Image
                  src="/images/shared/instant-setup.svg"
                  alt="Instant Setup"
                  width={75}
                  height={75}
                  className="w-[70px] h-[70px] md:w-[75px] md:h-[75px]"
                />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-[#324561]">Instant Setup</h3>
              <p className="text-[#2E4360]">
                Experience immediate access to your hosting environment, allowing you to start developing and deploying your website or application right away.
              </p>
            </div>
          </div>

          <div className="bg-[#F4F7FA] rounded-lg shadow shadow-none hover:shadow-lg transition-shadow max-w-lg md:max-w-xl w-full">
            <div className="flex flex-col items-start p-8 text-left">
              <div className="mb-4">
                <Image
                  src="/images/shared/24-7-live-support.svg"
                  alt="24/7 Live Support"
                  width={75}
                  height={75}
                  className="w-[70px] h-[70px] md:w-[75px] md:h-[75px]"
                />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-[#324561]">24/7 Live Support</h3>
              <p className="text-[#2E4360]">
                Our expert support team is available around the clock to assist you with any hosting issues, ensuring your website runs smoothly at all times.
              </p>
            </div>
          </div>

          <div className="bg-[#F4F7FA] rounded-lg shadow shadow-none hover:shadow-lg transition-shadow max-w-lg md:max-w-xl w-full">
            <div className="flex flex-col items-start p-8 text-left">
              <div className="mb-4">
                <Image
                  src="/images/shared/guaranteed-uptime.svg"
                  alt="Guaranteed Uptime"
                  width={75}
                  height={75}
                  className="w-[70px] h-[70px] md:w-[75px] md:h-[75px]"
                />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-[#324561]">Guaranteed Uptime</h3>
              <p className="text-[#2E4360]">
                Benefit from our reliable hosting service with a 99.9% uptime guarantee, ensuring your website remains accessible and performs optimally.
              </p>
            </div>
          </div>

          <div className="bg-[#F4F7FA] rounded-lg shadow shadow-none hover:shadow-lg transition-shadow max-w-lg md:max-w-xl w-full">
            <div className="flex flex-col items-start p-8 text-left">
              <div className="mb-4">
                <Image
                  src="/images/shared/blog-management.svg"
                  alt="Blog Management"
                  width={75}
                  height={75}
                  className="w-[70px] h-[70px] md:w-[75px] md:h-[75px]"
                />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-[#324561]">Blog Management</h3>
              <p className="text-[#2E4360]">
                Streamline your blogging experience with optimized hosting solutions that offer seamless content creation, robust performance.
              </p>
            </div>
          </div>

          <div className="bg-[#F4F7FA] rounded-lg shadow shadow-none hover:shadow-lg transition-shadow max-w-lg md:max-w-xl w-full">
            <div className="flex flex-col items-start p-8 text-left">
              <div className="mb-4">
                <Image
                  src="/images/shared/periodic-malware-scanner.svg"
                  alt="Periodic Malware Scanner"
                  width={75}
                  height={75}
                  className="w-[70px] h-[70px] md:w-[75px] md:h-[75px]"
                />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-[#324561]">Periodic Malware Scanner</h3>
              <p className="text-[#2E4360]">
                Regular malware scans identify and eliminate threats before they compromise your website, ensuring consistent protection and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
