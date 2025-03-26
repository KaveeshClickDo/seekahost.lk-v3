'use client';

import { useState } from 'react';
import { FiPlus, FiMinus } from "react-icons/fi";

export default function FAQs() {

    const faqs = [
        {
            question: 'Lorem ipsum sit amet ?',
            answer:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            question: 'Lorem ipsum dolor sit amet adipiscing?',
            answer:
                'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
        {
            question: 'Lorem ipsum dolor sit amet elit?',
            answer:
                'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            question: 'Lorem ipsum dolor sit amet?',
            answer:
                'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
            <p className="inline-block bg-blue-100 text-[#235E9D] text-sm md:text-lg px-3 py-1 rounded-full mb-4">Frequently Asked Question</p>
            <h2 className="text-center text-3xl md:text-5xl font-semibold mb-8">
                Questions about our services
            </h2>
            <div className="space-y-4">
                {faqs.map((item, index) => (
                    <div
                        key={index}
                        className="bg-gray-50 rounded-lg shadow-sm p-6 transition-colors"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="flex justify-between items-center w-full text-left cursor-pointer"
                        >
                            <span className="text-lg md:text-2xl font-medium">
                                {item.question}
                            </span>
                            <span className="text-2xl font-bold">
                                {openIndex === index ? <FiMinus className="w-5 h-5" /> : <FiPlus className="w-5 h-5" />}
                            </span>
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 mt-2' : 'max-h-0'
                                }`}
                        >
                            <hr className="border-gray-300 my-2" />
                            <p className="text-gray-700 mt-2 md:text-xl font-medium">{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
