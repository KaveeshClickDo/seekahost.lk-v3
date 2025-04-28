'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { faqData } from '@/data/faqData';

export default function FAQ() {

  const leftColumnFAQs = faqData.filter((_, index) => index % 2 === 0);
  const rightColumnFAQs = faqData.filter((_, index) => index % 2 === 1);

  const [openItemId, setOpenItemId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenItemId(openItemId === id ? null : id);
  };

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
          <h4 className="font-medium md:text-xl">{item.question}</h4>
          <button aria-label={isOpen ? "Collapse" : "Expand"} className={`text-blue-600 cursor-pointer flex items-center justify-center w-6 h-6 transition-transform duration-600 ${isOpen ? 'transform rotate-180 bg-blue-600 text-white rounded-md' : ''}`}>
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
          <div className="mt-2 text-gray-600 md:text-lg font-medium">
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
      <div className="relative z-1 md:my-10">
        <div className="text-center mb-8">
          <h2 className="text-white text-md md:text-xl font-medium">FAQ</h2>
          <div className="relative inline-block">
            <h3 className="text-white text-2xl md:text-4xl font-semibold"><span className="relative font-bold after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[4px] after:bg-[#FDB927] after:transform after:skew-x-65">Find out more</span></h3>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:gap-4 px-6 md:px-10">
          <div className="md:w-1/2 flex flex-col">
            {leftColumnFAQs.map(faq => (
              <FAQItem key={faq.id} item={faq} />
            ))}
          </div>

          <div className="md:w-1/2 flex flex-col">
            {rightColumnFAQs.map(faq => (
              <FAQItem key={faq.id} item={faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}