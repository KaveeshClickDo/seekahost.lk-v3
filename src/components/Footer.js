
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full font-sans">
      <div className="flex justify-center items-center py-10">
        <div className="relative bg-blue-600 rounded-3xl p-10 md:p-16 w-full max-w-4xl flex flex-col md:flex-row items-center md:justify-between shadow-lg">


          <div className="text-white md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to make a secure future?
            </h2>
            <p className="text-white/90 text-base md:text-lg mb-6">
              Get your personalized insurance quote now and take the first step
              toward a worry-free future. Your security matters.
            </p>


            <div className="mt-6 flex items-center bg-white rounded-full px-4 py-2 shadow-md w-full max-w-md">
              <input
                type="text"
                placeholder="Email Address"
                className="flex-grow outline-none text-black px-2"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                Sign Up Free
              </button>
            </div>
          </div>


          <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
            <img
              src="phone-mockup.webp"
              alt="Phone Mockup"
              className="w-40 h-auto md:w-52 drop-shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#0F172A] text-white py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

          <div>
            <img
              src="logo.webp"
              alt="SeekaHost Logo"
              className="w-36 mb-4"
            />
            <p className="text-sm text-gray-300 mb-2">Web Hosting Company</p>
            <p className="text-sm text-gray-400">
              &copy; 2024 SeekaHost. All Rights Reserved.
            </p>
          </div>


          <div>
            <h4 className="font-semibold mb-3">Hosting Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>WordPress Hosting Plans</li>
              <li>Different Class IP Hosting</li>
              <li>SEO Hosting Class C IP</li>
              <li>Blog Hosting</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Domain Registration</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>WordPress Domain Registration</li>
              <li>Different Class IP Hosting</li>
              <li>WordPress Class IP Hosting</li>
              <li>SEO Hosting Class B IP</li>
            </ul>
          </div>


          <div>
            <h4 className="font-semibold mb-3">Support Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>WordPress Hosting Plans</li>
              <li>Different Class IP Hosting</li>
              <li>WordPress Class IP Hosting</li>
              <li>SEO Hosting Class B IP</li>
              <li>WordPress Blog Hosting</li>
            </ul>
          </div>
        </div>


        <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms &amp; Condition
            </a>
          </div>
          <div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
