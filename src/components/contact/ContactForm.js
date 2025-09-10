'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Honeypot spam protection
    if (honeypot) {
      console.log('Bot detected');
      return;
    }

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all required fields.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);
    setStatus('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Thank you! Your message has been sent successfully.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setStatus('Sorry, there was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-[#0A488A] py-16 px-4">
      <div className="max-w-xl mx-auto">
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Receive A Free Consultation
            <div className="w-32 h-1 rounded-lg bg-[#0A488A] mx-auto mt-2"></div>
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot field - hidden from users */}
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              style={{ display: 'none' }}
              tabIndex="-1"
              autoComplete="off"
            />

            {/* Name field */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-1 border-[#0A488A] rounded-lg focus:outline-none focus:border-[#0066CC] transition-colors"
              />
            </div>

            {/* Email and Phone row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-4 py-3 border-1 border-[#0A488A] rounded-2xl focus:outline-none focus:border-[#0066CC] transition-colors"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="px-4 py-3 border-1 border-[#0A488A] rounded-2xl focus:outline-none focus:border-[#0066CC] transition-colors"
              />
            </div>

            {/* Subject field */}
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border-1 border-[#0A488A] rounded-2xl focus:outline-none focus:border-[#0066CC] transition-colors"
              />
            </div>

            {/* Message field */}
            <div>
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-1 border-[#0A488A] rounded-2xl focus:outline-none focus:border-[#0066CC] transition-colors resize-vertical"
              ></textarea>
            </div>

            {/* Status message */}
            {status && (
              <div className={`text-center text-sm ${
                status.includes('Thank you') ? 'text-green-600' : 'text-red-600'
              }`}>
                {status}
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#0066CC] hover:bg-[#0A488A] text-white font-semibold py-3 px-6 rounded-lg cursor-pointer transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}