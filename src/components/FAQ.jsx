import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import faqData from "../data/faqData.json";

function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const handleKnowMoreClick = () => {
    navigate("/faq"); // Change the URL to /faq
  };

  return (
    <section id="faq" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12">
      <div className="mx-auto w-full max-w-7xl px-4">
        <h2 className="text-5xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700 transition-all duration-300 hover:border-gray-600"
            >
              <button
                className="flex justify-between items-center w-full text-left px-5 py-4"
                onClick={() => toggleQuestion(index)}
              >
                <span className="font-medium text-white text-lg">{faq.question}</span> {/* Increased font size */}
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
                className={`px-5 py-3 bg-gray-700 bg-opacity-50 transition-all duration-200 ease-in-out ${
                  openQuestion === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-400 text-base leading-relaxed">{faq.answer}</p> {/* Keep or increase font size if needed */}
              </div>
            </div>
          ))}
        </div>
        {/* Know More button */}
        <div className="mt-8 text-center">
          <button
            className="bg-blue-500 text-white font-semibold py-2 px-6 rounded hover:bg-blue-600 transition duration-300"
            onClick={handleKnowMoreClick}
          >
            Know More
          </button>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
