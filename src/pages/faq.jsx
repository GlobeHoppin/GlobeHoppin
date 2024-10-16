import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import faqData from "../data/morefaq.json";

function FAQPage() {
  const [openQuestion, setOpenQuestion] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const goToHome = () => {
    navigate("/"); // Navigate to the home route
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12">
      <div className="mx-auto w-full max-w-7xl px-4"> {/* Changed px-45 to px-4 for Tailwind */}
        <h2 className="text-5xl font-bold text-white mb-8 text-center">All FAQs</h2>
        
        {/* FAQ Section */}
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
                <p className="text-gray-400 text-lg leading-relaxed">{faq.answer}</p> {/* Increased font size */}
              </div>
            </div>
          ))}
        </div>

        {/* Go Back to Home Button */}
        <div className="text-center mt-8">
          <button
            onClick={goToHome}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Go Back to Home
          </button>
        </div>
      </div>
    </section>
  );
}

export default FAQPage;
