'use client';

// FAQ.js
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function FAQ() {
  // FAQ data array - replace with your actual FAQ content
  const faqData = [
    {
      id: "faq-1",
      question: "Dolor sit et, contetur met, consectetur",
      answer: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor"
    },
    {
      id: "faq-2",
      question: "Lorem ipsum dolor sit et, consectetur",
      answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      id: "faq-3",
      question: "Lorem ipsum dolor sit et, consectetur",
      answer: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium."
    },
    {
      id: "faq-4",
      question: "Lorem ipsum dolor sit et, consectetur",
      answer: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur."
    },
    {
      id: "faq-5",
      question: "Lorem ipsum dolor sit et, consectetur",
      answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    },
    {
      id: "faq-6",
      question: "Lorem ipsum dolor sit et, consectetur",
      answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    }
  ];

  // Single state to track which FAQ item is open
  const [openItemId, setOpenItemId] = useState(null);

  // Toggle function for a specific FAQ item
  const toggleFAQ = (id) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  // FAQ Item component with smooth transitions
  const FAQItem = ({ item }) => {
    const isOpen = openItemId === item.id;
    const contentRef = useRef(null);
    const [maxHeight, setMaxHeight] = useState('0px');

    useEffect(() => {
      if (contentRef.current) {
        setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
      }
    }, [isOpen]);

    return (
      <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleFAQ(item.id)}
        >
          <h4 className="font-medium text-gray-800">{item.question}</h4>
          <button className={`text-blue-600 cursor-pointer flex items-center justify-center w-6 h-6 transition-transform duration-600 ${isOpen ? 'transform rotate-180 bg-blue-600 text-white rounded-md' : ''}`}>
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            )}
          </button>
        </div>

        <div
          className="overflow-hidden transition-all duration-600 ease-in-out"
          style={{
            maxHeight,
            transitionProperty: 'max-height',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          ref={contentRef}
        >
          <div className="mt-2 text-gray-600 text-sm">
            {item.answer}
          </div>
        </div>
      </div>
    );
  };


  return (
    <section className="relative py-12 px-4">
      <Image
        src="/images/contact/contact-faq-bg.svg"
        alt="Background"
        fill
        priority
        className="absolute inset-0 object-cover z-0"
      />
      <div className="relative z-1">
        <div className="text-center mb-8">
          <h2 className="text-white text-md font-medium">FAQ</h2>
          <div className="relative inline-block">
            <h3 className="text-white text-2xl font-semibold"><span className="relative font-bold after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[4px] after:bg-[#FDB927] after:transform after:skew-x-65">Find out more</span></h3>
          </div>
        </div>

        {/* FAQ container with fixed columns */}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:gap-4 px-6 md:px-10">
          {/* Left column */}
          <div className="md:w-1/2 flex flex-col">
            <FAQItem item={faqData[0]} />
            <FAQItem item={faqData[2]} />
            <FAQItem item={faqData[4]} />
          </div>

          {/* Right column */}
          <div className="md:w-1/2 flex flex-col">
            <FAQItem item={faqData[1]} />
            <FAQItem item={faqData[3]} />
            <FAQItem item={faqData[5]} />
          </div>
        </div>
      </div>
    </section>
  );
}