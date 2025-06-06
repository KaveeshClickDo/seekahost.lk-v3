import Image from 'next/image';

export default function Solution () {
  return (
    <section className="py-12 md:my-10">
      <div className="max-w-7xl mx-auto px-4 md:px-0">

        <div className="text-center mb-12">
          <h1 className="inline-block bg-blue-100 text-[#235E9D] text-sm md:text-lg px-3 py-1 rounded-full mb-4 font-medium">Our Solutions</h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            SeekaHost – <span className="font-normal">1 Click Solution for Hosting</span>
          </h2>

        </div>
        

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center">

          <div className="bg-[#E8F3FF] rounded-lg shadow hover:shadow-lg transition-shadow max-w-lg md:max-w-xl w-full">
            <div className="flex items-center p-8">
              <div className="flex-1">
                <h3 className="text-lg md:text-2xl font-bold mb-2">DDOS Protected</h3>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu augue eget nisl bibendum tincidunt.
                </p>
              </div>
              <div className="ml-4">
                <Image
                  src="/images/shared/ddos-protected.svg"
                  alt="DDOS Protected"
                  width={100}
                  height={100}
                  className="w-[70px] h-[70px] md:w-[100px] md:h-[100px]"
                />
              </div>
            </div>
          </div>


          <div className="bg-[#F4F4F4] rounded-lg shadow hover:shadow-lg transition-shadow max-w-lg md:max-w-xl w-full">
            <div className="flex items-center p-8">
              <div className="flex-1">
                <h3 className="text-lg md:text-2xl font-bold mb-2">Instant Setup</h3>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu augue eget nisl bibendum tincidunt.
                </p>
              </div>
              <div className="ml-4">
                <Image
                  src="/images/shared/instant-setup.svg"
                  alt="Instant Setup"
                  width={100}
                  height={100}
                  className="w-[70px] h-[70px] md:w-[100px] md:h-[100px]"
                />
              </div>
            </div>
          </div>


          <div className="bg-[#F4F4F4] rounded-lg shadow hover:shadow-lg transition-shadow max-w-lg md:max-w-xl w-full">
            <div className="flex items-center p-8">
              <div className="flex-1">
                <h3 className="text-lg md:text-2xl font-bold mb-2">24/7 Live Support</h3>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu augue eget nisl bibendum tincidunt.
                </p>
              </div>
              <div className="ml-4">
                <Image
                  src="/images/shared/24-7-live-support.svg"
                  alt="24/7 Live Support"
                  width={100}
                  height={100}
                  className="w-[70px] h-[70px] md:w-[100px] md:h-[100px]"
                />
              </div>
            </div>
          </div>


          <div className="bg-[#E8F3FF] rounded-lg shadow hover:shadow-lg transition-shadow max-w-lg md:max-w-xl w-full">
            <div className="flex items-center p-8">
              <div className="flex-1">
                <h3 className="text-lg md:text-2xl font-bold mb-2">Guaranteed Uptime</h3>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu augue eget nisl bibendum tincidunt.
                </p>
              </div>
              <div className="ml-4">
                <Image
                  src="/images/shared/guaranteed-uptime.svg"
                  alt="Guaranteed Uptime"
                  width={100}
                  height={100}
                  className="w-[70px] h-[70px] md:w-[100px] md:h-[100px]"
                />
              </div>
            </div>
          </div>


          <div className="bg-[#E8F3FF] rounded-lg shadow hover:shadow-lg transition-shadow max-w-lg md:max-w-xl w-full">
            <div className="flex items-center p-8">
              <div className="flex-1">
                <h3 className="text-lg md:text-2xl font-bold mb-2">Blog Management</h3>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu augue eget nisl bibendum tincidunt.
                </p>
              </div>
              <div className="ml-4">
                <Image
                  src="/images/shared/blog-management.svg"
                  alt="Blog Management"
                  width={100}
                  height={100}
                  className="w-[70px] h-[70px] md:w-[100px] md:h-[100px]"
                />
              </div>
            </div>
          </div>


          <div className="bg-[#F4F4F4] rounded-lg shadow hover:shadow-lg transition-shadow max-w-lg md:max-w-xl w-full">
            <div className="flex items-center p-8">
              <div className="flex-1">
                <h3 className="text-lg md:text-2xl font-bold mb-2">Periodic Malware Scanner</h3>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu augue eget nisl bibendum tincidunt.
                </p>
              </div>
              <div className="ml-4">
                <Image
                  src="/images/shared/periodic-malware-scanner.svg"
                  alt="Periodic Malware Scanner"
                  width={100}
                  height={100}
                  className="w-[70px] h-[70px] md:w-[100px] md:h-[100px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
