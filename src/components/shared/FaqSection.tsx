"use client"

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-10 border-t border-gray-200">
      <h3 className="text-2xl font-semibold text-gray-800">FAQs</h3>
      <div className="mt-4 space-y-4">
        {faqs?.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <h4 className="text-lg font-semibold text-gray-900">
                {faq.question}
              </h4>
              <FontAwesomeIcon
                icon={openIndex === index ? faChevronUp : faChevronDown}
                className="text-gray-600"
              />
            </div>
            {openIndex === index && (
              <div className="mt-2 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQSection;
