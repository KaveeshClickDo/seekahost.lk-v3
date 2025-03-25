import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="flex justify-center items-center py-10">
        <div className="relative bg-blue-600 rounded-3xl px-4 md:px-16 w-full max-w-4xl flex flex-col md:flex-row items-center md:justify-between shadow-lg">


          <div className="text-white md:w-2/3 py-10 md:py-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ready to make a secure future?
            </h2>
            <p className="text-white/90 text-base md:text-xl mb-6">
              Get your personalized insurance quote now and take the first step
              toward a worry-free future. Your security matters.
            </p>


            <div className="mt-6 flex items-center bg-white rounded-full px-4 py-2 shadow-md w-full max-w-md">
              <input
                type="text"
                placeholder="Email Address"
                className="flex-grow outline-none text-black"
              />
              <button className="bg-blue-600 text-white px-4 lg:px-6 py-2 rounded-full hover:bg-blue-700 transition">
                <span className="max-[400px]:hidden">Sign Up Free</span>
                <span className="hidden max-[400px]:inline">Sign Up</span>
              </button>
            </div>
          </div>


          <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
            <Image
              src="/images/shared/phone-mockup.webp"
              alt="Phone Mockup"
              width={292}
              height={369}
              className="w-60 h-auto drop-shadow-lg md:mt-[38%]"
              priority
            />
          </div>
        </div>
      </div>

      <div className="bg-[#001F40] text-white py-10">
        <div className="container mx-auto px-5">
          <div className="mb-8">
            <div className="mb-4">
              <Image src="/images/shared/footer-logo.webp" alt="SeekaHost" width={147} height={62} />
            </div>
            <hr className="border-gray-700 w-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg md:text-xl font-medium mb-4">About</h3>
              <p className="text-gray-300 mb-2 md:text-lg">© 2024 SeekaHost™ Ltd.</p>
              <p className="text-gray-300 md:text-lg">Web Hosting Company</p>

              <div className="flex mt-6 space-x-2">
                <Link href="#" className="border border-white rounded-full p-2 hover:bg-white hover:text-navy-950 transition-colors">
                  <span className="text-sm">ig</span>
                </Link>
                <Link href="#" className="border border-white rounded-full p-2 hover:bg-white hover:text-navy-950 transition-colors">
                  <span className="text-sm">tw</span>
                </Link>
                <Link href="#" className="border border-white rounded-full p-2 hover:bg-white hover:text-navy-950 transition-colors">
                  <span className="text-sm">fb</span>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-medium mb-4">Hosting Services</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg">WordPress Hosting Plans</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg">Different Class IP Hosting</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg">SEO Hosting A-Class IP</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg">WordPress Website Hosting</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg">WordPress Blog Hosting</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-medium mb-4">Domain Registration</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg">WordPress Hosting Plans</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg">Different Class IP Hosting</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg">SEO Hosting A-Class IP</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg">WordPress Website Hosting</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg">WordPress Blog Hosting</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-medium mb-4">Support Services</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg">WordPress Hosting Plans</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg">Different Class IP Hosting</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg">SEO Hosting A-Class IP</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg">WordPress Website Hosting</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg">WordPress Blog Hosting</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              Copyright © Seekahost 2024
            </div>
            <div className="text-gray-400 text-sm">
              <Link href="#" className="hover:text-white">Privacy Policy</Link>
              <span className="mx-2">|</span>
              <Link href="#" className="hover:text-white">Terms & Condition</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}