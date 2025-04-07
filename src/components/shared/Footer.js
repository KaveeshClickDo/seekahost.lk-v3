import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="flex justify-center items-center py-10">
        <div className="relative bg-[#1276DF] rounded-3xl px-4 md:px-16 w-full max-w-4xl flex flex-col md:flex-row items-center md:justify-between shadow-lg">


          <div className="text-white md:w-2/3 py-10 md:py-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Ready to make a secure future?
            </h2>
            <p className="text-white/90 text-base md:text-xl mb-6 font-medium">
              Get your personalized insurance quote now and take the first step
              toward a worry-free future. Your security matters.
            </p>


            <div className="mt-6 flex items-center bg-white rounded-full px-4 py-2 shadow-md w-full max-w-md font-medium">
              <input
                type="text"
                placeholder="Email Address"
                className="flex-grow outline-none text-black"
              />
              <button className="bg-[#1276DF] text-white font-medium px-4 lg:px-6 py-2 rounded-full hover:bg-blue-700 transition">
                <span className="max-[400px]:hidden">Sign Up Free</span>
                <span className="hidden max-[400px]:inline">Sign Up</span>
              </button>
            </div>
          </div>


          <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
            <Image
              src="/images/shared/phone-mockup.webp"
              alt="Phone Mockup"
              width={240}
              height={303}
              className="w-60 h-auto drop-shadow-lg md:mt-[38%]"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#001F40] text-white py-10">
        <div className="container mx-auto px-5">
          <div className="mb-8">
            <div className="mb-4">
              <Image src="/images/shared/footer-logo.png" alt="SeekaHost" width={147} height={62} />
            </div>
            <hr className="border-gray-700 w-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            <div>
              <h3 className="text-lg md:text-xl font-medium mb-4">About</h3>
              <p className="text-gray-300 mb-2 md:text-lg font-medium">© 2025 SeekaHost™ Ltd.</p>
              <p className="text-gray-300 md:text-lg font-medium">Web Hosting Company</p>

              <div className="flex md:flex-col mt-6">
                <div className="flex">
                  <Link href="#">
                    <div className="p-2">
                      <Image
                        src="/images/socialmedia-icons/youtube.svg"
                        alt="youtube"
                        width={40}
                        height={40}
                      />
                    </div>
                  </Link>
                  <Link href="#">
                    <div className="p-2">
                      <Image
                        src="/images/socialmedia-icons/twitter.svg"
                        alt="Twitter"
                        width={40}
                        height={40}
                      />
                    </div>
                  </Link>
                  <Link href="#">
                    <div className="p-2">
                      <Image
                        src="/images/socialmedia-icons/facebook.svg"
                        alt="Facebook"
                        width={40}
                        height={40}
                      />
                    </div>
                  </Link>
                </div>
                <div className="flex">
                  <Link href="#">
                    <div className="p-2">
                      <Image
                        src="/images/socialmedia-icons/linkedin.svg"
                        alt="Linkedin"
                        width={40}
                        height={40}
                      />
                    </div>
                  </Link>
                  <Link href="#">
                    <div className="p-2">
                      <Image
                        src="/images/socialmedia-icons/whatsapp.svg"
                        alt="Whatsapp"
                        width={40}
                        height={40}
                      />
                    </div>
                  </Link>
                  <Link href="#">
                    <div className="p-2">
                      <Image
                        src="/images/socialmedia-icons/tiktok.svg"
                        alt="Tiktok"
                        width={40}
                        height={40}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-medium mb-5">Hosting Services</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg font-medium">WordPress Hosting Plans</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg font-medium">Different Class IP Hosting</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg font-medium">SEO Hosting A-Class IP</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg font-medium">WordPress Website Hosting</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg font-medium">WordPress Blog Hosting</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg font-medium">Best SEO Hosting</Link></li>
              </ul>

              <h3 className="text-lg md:text-xl font-medium mb-5 mt-8">Our Company</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg font-medium">About SeekaHost™</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg font-medium">SeekaHost™ University</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg font-medium">SeekaHost Blog</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg font-medium">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-medium mb-5">Domain Registration</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg font-medium">Domain Name Search</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg font-medium">Buy Domains Names</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg font-medium">Domain Registration Guide</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg font-medium">Private Name Servers</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg font-medium">Expired Domains For PBN</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg font-medium">Free SSL Certificate</Link></li>
              </ul>

              <h3 className="text-lg md:text-xl font-medium mb-5 mt-10">Email Hosting Solutions</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg font-medium">Domain Email Address</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg font-medium">Email Hosting Plans</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg font-medium">Access Webmail Login</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-medium mb-5">Support Services</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg font-medium">Small Business Web Design</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg font-medium">Private Blog Network Guide</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg font-medium">PBN SEO Tutorials</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg font-medium">WordPress Technical Support</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg font-medium">Frequently Asked Questions</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg font-medium">Client Area Login</Link></li>
              </ul>

              <h3 className="text-lg md:text-xl font-medium mb-5 mt-10">Community & Resources</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg font-medium">PBN Demystified</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg font-medium">Domain Expiration Checker</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white md:text-lg font-medium">Guide To Create A Blog</Link></li>
              </ul>
            </div>
          </div>
          <hr className="border-gray-700 w-full" />

          <div className="mt-12 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0 font-medium">
              Copyright © Seekahost 2025 <br />
              <Link href="#" className="hover:text-white">Privacy Policy</Link>
              <span className="mx-2">|</span>
              <Link href="#" className="hover:text-white">Terms & Condition</Link>
            </div>
            <div className="text-gray-300 text-sm font-medium mt-2">
              Pay with confidence & security <br />
              <Image
                src="/images/shared/payment-methods-new.png"
                alt="payment methods"
                width={500}
                height={51}
                className="mt-1"
              />
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
}