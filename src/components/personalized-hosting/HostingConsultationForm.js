"use client";

import { useState } from "react";
import { countries } from "@/data/countriesData";

export default function HostingConsultationForm() {
  const [formData, setFormData] = useState({
    country: "",
    inquiryType: "",
    hostingServiceType: "",
    websiteURL: "",
    websiteStatus: "",
    onlineMeeting: "",
    cms: "",
    meetingLanguage: "",
    supportNote: "",
    additionalDetails: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-sm overflow-hidden max-w-6xl mx-auto">
      {/* Left Column - Text Content */}
      <div className="w-full md:w-5/12 p-8 bg-white">
        <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4">
          Unlock Your Perfect Hosting Experience with a Customized Session!
        </h2>

        <p className="text-sm md:text-base text-gray-700 mb-4">
          Welcome to SeekaHost&apos;s Exclusive Sales Call Experience!
          <br />
          Our dedicated sales team specialists are here to help you discover the perfect hosting plan tailored precisely to your needs. Through a personalized session, we ensure you receive expert guidance, empowering you to make informed decisions with confidence. At SeekaHost, your journey to seamless hosting begins with the right advice.
        </p>

        <p className="text-sm md:text-base  text-gray-700 mb-4">
          Share your hosting requirements, technical background, and preferences, and let our experts navigate the options for you. Whether you&apos;re launching a new project or scaling an existing platform, we provide custom recommendations that fit your goals. With SeekaHost, finding the right solution is simple, effective, and stress-free.
        </p>

        <p className="text-sm md:text-base  text-gray-700 mb-4">
          Begin your path to hosting excellence with us. Together, we&apos;ll craft a solution that matches your ambitions and powers your online success. Thank you for choosing SeekaHost—we&apos;re excited to support you every step of the way!
        </p>

        <p className="text-sm text-gray-700">
          You can check our Privacy Policy:{" "}
          <a
            href="#"
            className="text-blue-500 hover:underline"
          >
            https://www.seekahost.lk/privacy-policy
          </a>
          . <br />Any consent given can be withdrawn anytime.
        </p>
      </div>

      {/* Right Column - Form */}
      <div className="w-full md:w-7/12 p-8 bg-white">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Country */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Country: <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
              >
                <option value="">Select...</option>
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Type of inquiry */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Type of inquiry: <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                required
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
              >
                <option value="">Select...</option>
                <option value="new">New Website</option>
                <option value="migration">Website Migration</option>
                <option value="upgrade">Service Upgrade</option>
                {/* Add more options as needed */}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Type of hosting service */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Type of hosting service you are interested in: <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                name="hostingServiceType"
                value={formData.hostingServiceType}
                onChange={handleChange}
                required
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
              >
                <option value="">Select...</option>
                <option value="shared">Shared Hosting</option>
                <option value="vps">VPS Hosting</option>
                <option value="dedicated">Dedicated Hosting</option>
                <option value="cloud">Cloud Hosting</option>
                <option value="wordpress">WordPress Hosting</option>
                {/* Add more options as needed */}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Website URL */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              What is your website URL? <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="websiteURL"
              value={formData.websiteURL}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Current website status */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Current website status: <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                name="websiteStatus"
                value={formData.websiteStatus}
                onChange={handleChange}
                required
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
              >
                <option value="">Select...</option>
                <option value="active">Active website</option>
                <option value="development">In development</option>
                <option value="planning">Planning stage</option>
                <option value="none">No website yet</option>
                {/* Add more options as needed */}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Online meeting with sales team via */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Online meeting with sales team via: <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                name="onlineMeeting"
                value={formData.onlineMeeting}
                onChange={handleChange}
                required
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
              >
                <option value="">Select...</option>
                <option value="zoom">Zoom</option>
                <option value="teams">Microsoft Teams</option>
                <option value="meet">Google Meet</option>
                <option value="skype">Skype</option>
                {/* Add more options as needed */}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Content Management System (CMS) */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Content Management System (CMS): <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                name="cms"
                value={formData.cms}
                onChange={handleChange}
                required
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
              >
                <option value="">Select...</option>
                <option value="wordpress">WordPress</option>
                <option value="drupal">Drupal</option>
                <option value="joomla">Joomla</option>
                <option value="shopify">Shopify</option>
                <option value="wix">Wix</option>
                <option value="custom">Custom Solution</option>
                <option value="none">None/Not Sure</option>
                {/* Add more options as needed */}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Language of online meeting */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Language of online meeting: <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                name="meetingLanguage"
                value={formData.meetingLanguage}
                onChange={handleChange}
                required
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
              >
                <option value="">Select...</option>
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
                <option value="german">German</option>
                <option value="portuguese">Portuguese</option>
                {/* Add more languages as needed */}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Support Note */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Note: The sales department does not have access to the necessary tools for support requests such as account lockdowns, refund requests or account recovery inquiries. <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                name="supportNote"
                value={formData.supportNote}
                onChange={handleChange}
                required
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
              >
                <option value="">Select...</option>
                <option value="understood">I understand</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Additional Details */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Help us prepare for the call - please share as much details as possible about your project, goals and anything else you think is important for us to consider: <span className="text-red-500">*</span>
            </label>
            <textarea
              name="additionalDetails"
              value={formData.additionalDetails}
              onChange={handleChange}
              rows="4"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-10 rounded-full focus:outline-none focus:shadow-outline transition duration-150"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}