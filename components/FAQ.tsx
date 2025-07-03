"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do you accept insurance?",
    answer: "No, but I provide a superbill for self-submission to your insurance provider.",
  },
  {
    question: "Are online sessions available?",
    answer: "Yes — all virtual sessions are conducted via Zoom.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "I require a 24-hour notice for cancellations to avoid being charged the full session fee.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full flex justify-between items-center p-4 text-left text-gray-800 font-medium hover:bg-gray-50 transition"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-sm text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
