import Image from 'next/image';

export default function Features() {
  return (
    <section className="py-12 md:mt-10 md:mb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-0">

        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Hosting Features
          </h2>
          <p className="text-gray-700 mb-8 mx-auto">
            Discover powerful tools and benefits included as standard with our hosting services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">

          {/* 1 */}
          <div className="bg-[#F4F7FA] rounded-lg shadow-sm hover:shadow-2xl hover:shadow-[#0A488B]/20 transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-105 max-w-lg md:max-w-xl w-full group cursor-pointer overflow-hidden relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-50/0 before:via-blue-50/30 before:to-purple-50/0 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500">
            <div className="flex flex-col items-start p-8 text-left relative z-10">
              <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <Image
                  src="/images/cheap-web-hosting-with-cpanel/unlimited-website-hosting.svg"
                  alt="Unlimited Website Hosting"
                  width={75}
                  height={75}
                  className="w-[70px] h-[70px] md:w-[75px] md:h-[75px] drop-shadow-sm group-hover:drop-shadow-lg transition-all duration-300"
                />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-[#324561] group-hover:text-[#0A488B] transition-colors duration-300">Unlimited Website Hosting</h3>
              <p className="text-[#2E4360] group-hover:text-[#1E3A5F] transition-colors duration-300">
                Host as many websites as you want under one account—no restrictions, no extra fees.
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="bg-[#F4F7FA] rounded-lg shadow-sm hover:shadow-2xl hover:shadow-[#0A488B]/20 transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-105 max-w-lg md:max-w-xl w-full group cursor-pointer overflow-hidden relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-50/0 before:via-blue-50/30 before:to-purple-50/0 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500">
            <div className="flex flex-col items-start p-8 text-left relative z-10">
              <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <Image
                  src="/images/cheap-web-hosting-with-cpanel/easy-cpanel-management.svg"
                  alt="Easy cPanel Management"
                  width={75}
                  height={75}
                  className="w-[70px] h-[70px] md:w-[75px] md:h-[75px] drop-shadow-sm group-hover:drop-shadow-lg transition-all duration-300"
                />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-[#324561] group-hover:text-[#0A488B] transition-colors duration-300">Easy cPanel Management</h3>
              <p className="text-[#2E4360] group-hover:text-[#1E3A5F] transition-colors duration-300">
                Manage your hosting effortlessly with cPanel, the industry's most trusted and user-friendly control panel.
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className="bg-[#F4F7FA] rounded-lg shadow-sm hover:shadow-2xl hover:shadow-[#0A488B]/20 transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-105 max-w-lg md:max-w-xl w-full group cursor-pointer overflow-hidden relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-50/0 before:via-blue-50/30 before:to-purple-50/0 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500">
            <div className="flex flex-col items-start p-8 text-left relative z-10">
              <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <Image
                  src="/images/cheap-web-hosting-with-cpanel/blazing-fast-ssd-storage.svg"
                  alt="Blazing-Fast SSD Storage"
                  width={75}
                  height={75}
                  className="w-[70px] h-[70px] md:w-[75px] md:h-[75px] drop-shadow-sm group-hover:drop-shadow-lg transition-all duration-300"
                />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-[#324561] group-hover:text-[#0A488B] transition-colors duration-300">Blazing-Fast SSD Storage</h3>
              <p className="text-[#2E4360] group-hover:text-[#1E3A5F] transition-colors duration-300">
                Experience lightning-speed performance with 100% SSD-powered web space for maximum reliability.
              </p>
            </div>
          </div>

          {/* 4 */}
          <div className="bg-[#F4F7FA] rounded-lg shadow-sm hover:shadow-2xl hover:shadow-[#0A488B]/20 transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-105 max-w-lg md:max-w-xl w-full group cursor-pointer overflow-hidden relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-50/0 before:via-blue-50/30 before:to-purple-50/0 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500">
            <div className="flex flex-col items-start p-8 text-left relative z-10">
              <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <Image
                  src="/images/cheap-web-hosting-with-cpanel/secure-reliable-email-delivery.svg"
                  alt="Secure & Reliable Email Delivery"
                  width={75}
                  height={75}
                  className="w-[70px] h-[70px] md:w-[75px] md:h-[75px] drop-shadow-sm group-hover:drop-shadow-lg transition-all duration-300"
                />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-[#324561] group-hover:text-[#0A488B] transition-colors duration-300">Secure & Reliable Email Delivery</h3>
              <p className="text-[#2E4360] group-hover:text-[#1E3A5F] transition-colors duration-300">
                Powered by MailChannels, enjoy dependable, secure, and spam-free email delivery every time.
              </p>
            </div>
          </div>

          {/* 5 */}
          <div className="bg-[#F4F7FA] rounded-lg shadow-sm hover:shadow-2xl hover:shadow-[#0A488B]/20 transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-105 max-w-lg md:max-w-xl w-full group cursor-pointer overflow-hidden relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-50/0 before:via-blue-50/30 before:to-purple-50/0 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500">
            <div className="flex flex-col items-start p-8 text-left relative z-10">
              <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <Image
                  src="/images/cheap-web-hosting-with-cpanel/free-ssl-certificates.svg"
                  alt="Free SSL Certificates"
                  width={75}
                  height={75}
                  className="w-[70px] h-[70px] md:w-[75px] md:h-[75px] drop-shadow-sm group-hover:drop-shadow-lg transition-all duration-300"
                />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-[#324561] group-hover:text-[#0A488B] transition-colors duration-300">Free SSL Certificates</h3>
              <p className="text-[#2E4360] group-hover:text-[#1E3A5F] transition-colors duration-300">
                Protect your websites with unlimited SSL certificates from Let's Encrypt—keeping your data and visitors safe.
              </p>
            </div>
          </div>

          {/* 6 */}
          <div className="bg-[#F4F7FA] rounded-lg shadow-sm hover:shadow-2xl hover:shadow-[#0A488B]/20 transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-105 max-w-lg md:max-w-xl w-full group cursor-pointer overflow-hidden relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-50/0 before:via-blue-50/30 before:to-purple-50/0 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500">
            <div className="flex flex-col items-start p-8 text-left relative z-10">
              <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <Image
                  src="/images/cheap-web-hosting-with-cpanel/drag-drop-website-builder.svg"
                  alt="Drag & Drop Website Builder"
                  width={75}
                  height={75}
                  className="w-[70px] h-[70px] md:w-[75px] md:h-[75px] drop-shadow-sm group-hover:drop-shadow-lg transition-all duration-300"
                />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-[#324561] group-hover:text-[#0A488B] transition-colors duration-300">Drag & Drop Website Builder</h3>
              <p className="text-[#2E4360] group-hover:text-[#1E3A5F] transition-colors duration-300">
                Build your site in minutes with our free website builder, featuring 200+ ready-to-use templates.
              </p>
            </div>
          </div>

          {/* 7 */}
          <div className="bg-[#F4F7FA] rounded-lg shadow-sm hover:shadow-2xl hover:shadow-[#0A488B]/20 transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-105 max-w-lg md:max-w-xl w-full group cursor-pointer overflow-hidden relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-50/0 before:via-blue-50/30 before:to-purple-50/0 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500">
            <div className="flex flex-col items-start p-8 text-left relative z-10">
              <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <Image
                  src="/images/cheap-web-hosting-with-cpanel/automated-daily-backups.svg"
                  alt="Automated Daily Backups"
                  width={75}
                  height={75}
                  className="w-[70px] h-[70px] md:w-[75px] md:h-[75px] drop-shadow-sm group-hover:drop-shadow-lg transition-all duration-300"
                />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-[#324561] group-hover:text-[#0A488B] transition-colors duration-300">Automated Daily Backups</h3>
              <p className="text-[#2E4360] group-hover:text-[#1E3A5F] transition-colors duration-300">
                Stay worry-free with free daily backups using JetBackup, ensuring your data is always safe and recoverable.
              </p>
            </div>
          </div>

          {/* 8 */}
          <div className="bg-[#F4F7FA] rounded-lg shadow-sm hover:shadow-2xl hover:shadow-[#0A488B]/20 transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-105 max-w-lg md:max-w-xl w-full group cursor-pointer overflow-hidden relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-50/0 before:via-blue-50/30 before:to-purple-50/0 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500">
            <div className="flex flex-col items-start p-8 text-left relative z-10">
              <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <Image
                  src="/images/cheap-web-hosting-with-cpanel/advanced-spam-protection.svg"
                  alt="Advanced Spam Protection"
                  width={75}
                  height={75}
                  className="w-[70px] h-[70px] md:w-[75px] md:h-[75px] drop-shadow-sm group-hover:drop-shadow-lg transition-all duration-300"
                />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-[#324561] group-hover:text-[#0A488B] transition-colors duration-300">Advanced Spam Protection</h3>
              <p className="text-[#2E4360] group-hover:text-[#1E3A5F] transition-colors duration-300">
                Smart filtering keeps unwanted emails and malware out of your inbox for a safer experience.
              </p>
            </div>
          </div>

          {/* 9 */}
          <div className="bg-[#F4F7FA] rounded-lg shadow-sm hover:shadow-2xl hover:shadow-[#0A488B]/20 transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-105 max-w-lg md:max-w-xl w-full group cursor-pointer overflow-hidden relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-50/0 before:via-blue-50/30 before:to-purple-50/0 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500">
            <div className="flex flex-col items-start p-8 text-left relative z-10">
              <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <Image
                  src="/images/cheap-web-hosting-with-cpanel/guaranteed-100-uptime.svg"
                  alt="Guaranteed 100% Uptime"
                  width={75}
                  height={75}
                  className="w-[70px] h-[70px] md:w-[75px] md:h-[75px] drop-shadow-sm group-hover:drop-shadow-lg transition-all duration-300"
                />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-[#324561] group-hover:text-[#0A488B] transition-colors duration-300">Guaranteed 100% Uptime</h3>
              <p className="text-[#2E4360] group-hover:text-[#1E3A5F] transition-colors duration-300">
                Enjoy uninterrupted connectivity with our load-balanced, high-speed network infrastructure.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}