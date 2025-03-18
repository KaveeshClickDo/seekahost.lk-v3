import Image from 'next/image';

export default function Solution () {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h1 className="inline-block bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full mb-4">Our Solutions</h1>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            SeekaHost – 1 Click Solution for Hosting
          </h2>

        </div>
        

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center lg:mx-35">

          <div className="bg-[#DEF2FF] rounded-lg shadow hover:shadow-lg transition-shadow max-w-md w-full">
            <div className="flex items-center p-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">DDOS Protected</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu augue eget nisl bibendum tincidunt.
                </p>
              </div>
              <div className="ml-4">
                <Image
                  src="ddos-protected.svg"
                  alt="DDOS Protected"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>


          <div className="bg-[#F4F4F4] rounded-lg shadow hover:shadow-lg transition-shadow max-w-md w-full">
            <div className="flex items-center p-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Instant Setup</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu augue eget nisl bibendum tincidunt.
                </p>
              </div>
              <div className="ml-4">
                <Image
                  src="instant-setup.svg"
                  alt="Instant Setup"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>


          <div className="bg-[#F4F4F4] rounded-lg shadow hover:shadow-lg transition-shadow max-w-md w-full">
            <div className="flex items-center p-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">24/7 Live Support</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu augue eget nisl bibendum tincidunt.
                </p>
              </div>
              <div className="ml-4">
                <Image
                  src="24-7-live-support.svg"
                  alt="24/7 Live Support"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>


          <div className="bg-[#DEF2FF] rounded-lg shadow hover:shadow-lg transition-shadow max-w-md w-full">
            <div className="flex items-center p-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Guaranteed Uptime</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu augue eget nisl bibendum tincidunt.
                </p>
              </div>
              <div className="ml-4">
                <Image
                  src="guaranteed-uptime.svg"
                  alt="Guaranteed Uptime"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>


          <div className="bg-[#DEF2FF] rounded-lg shadow hover:shadow-lg transition-shadow max-w-md w-full">
            <div className="flex items-center p-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Blog Management</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu augue eget nisl bibendum tincidunt.
                </p>
              </div>
              <div className="ml-4">
                <Image
                  src="blog-management.svg"
                  alt="Blog Management"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>


          <div className="bg-[#F4F4F4] rounded-lg shadow hover:shadow-lg transition-shadow max-w-md w-full">
            <div className="flex items-center p-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Periodic Malware Scanner</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu augue eget nisl bibendum tincidunt.
                </p>
              </div>
              <div className="ml-4">
                <Image
                  src="periodic-malware-scanner.svg"
                  alt="Periodic Malware Scanner"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
