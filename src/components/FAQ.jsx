import { useState } from "react";
import faqData from "../data/faqData.json";

function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);
  const [visibleFaqs, setVisibleFaqs] = useState(5); // Initially show 5 FAQs

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const loadMoreFaqs = () => {
    setVisibleFaqs((prevVisibleFaqs) => prevVisibleFaqs + 5); // Load 5 more FAQs
  };

  return (
    <section id="faq" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12">
      <div className="mx-auto w-full max-w-7xl px-45">
        <h2 className="text-5xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqData.slice(0, visibleFaqs).map((faq, index) => (
            <div key={index} className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700 transition-all duration-300 hover:border-gray-600">
              <button
                className="flex justify-between items-center w-full text-left px-5 py-4"
                onClick={() => toggleQuestion(index)}
              >
                <span className="font-medium text-white text-smc">{faq.question}</span>
                <svg
                  className={`w-4 h-4 text-gray-400 transform transition-transform duration-200 ${openQuestion === index ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`px-5 py-3 bg-gray-700 bg-opacity-50 transition-all duration-200 ease-in-out ${openQuestion === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className=" text-gray-400 text-base leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}

          {visibleFaqs < faqData.length && (
            <button
              onClick={loadMoreFaqs}
              className="mt-4 px-6 py-2 bg-violet-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 block mx-auto"
            >
              LOAD MORE
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
