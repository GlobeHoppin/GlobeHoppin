import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import ImageWithCursorEffect from "../components/ImageWithCursorEffect";

function Aboutpage() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const typingText = "We'll Love to see your Travel Memories...";

  useEffect(() => {
    if (index < typingText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + typingText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const restartTimeout = setTimeout(() => {
        setText("");
        setIndex(0);
      }, 2000);
      return () => clearTimeout(restartTimeout);
    }
  }, [index, typingText]);

  const testimonials = [
    {
      name: "Jane Doe",
      role: "Adventure Traveler",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "GlobeHoppin helped me discover places I'd never even considered visiting. Their platform made my trip unforgettable!",
      rating: 4,
      location: "New York, USA"
    },
    {
      name: "John Smith",
      role: "Family Traveler",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "The team at GlobeHoppin truly understands what makes a travel adventure special. Can't wait to book my next trip!",
      rating: 5,
      location: "London, UK"
    },
    {
      name: "Alex Lee",
      role: "Solo Traveler",
      image: "https://randomuser.me/api/portraits/men/64.jpg",
      text: "Amazing service, stunning destinations, and a super easy booking process. My family had a blast on our latest vacation!",
      rating: 5,
      location: "Sydney, Australia"
    }
  ];

  return (
    <div className="min-h-screen w-full pt-16">
      {/* Hero Section */}
      <div className="relative h-screen w-full">
        <div className="absolute inset-0">
          <img
            src="https://nextvacay.com/wp-content/uploads/2022/07/KW-why-travel-is-important.jpg.webp"
            alt="Travel Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>

        <div className="relative h-full w-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight animate-fade-in">
                    {text}
                  </h1>
                  <p className="text-xl text-gray-200 leading-relaxed max-w-2xl animate-fade-in-up">
                    At GlobeHoppin, we deeply value the remarkable travel stories shared by our community. 
                    Each adventure inspires us to design even more unforgettable travel experiences.
                  </p>
                </div>
                <div className="flex flex-wrap gap-6 animate-fade-in-up delay-200">
                  <NavLink
                    to="/contact"
                    className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
                  >
                    Contact Us
                    <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </NavLink>
                  <NavLink
                    to="/#faq"
                    className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white border-2 border-white hover:bg-white hover:text-gray-900 rounded-full transition-all duration-300"
                  >
                    Learn More
                  </NavLink>
                </div>
              </div>

              {/* Right Content - Image Effect */}
              <div className="hidden lg:block animate-fade-in-left">
                <ImageWithCursorEffect />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Real stories from real travelers who have experienced the GlobeHoppin difference
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-500/30"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                    <p className="text-sm text-blue-600 dark:text-blue-400">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="absolute inset-0 bg-grid-white/[0.1] bg-[length:16px_16px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-100 mb-12 max-w-2xl mx-auto">
            Join our community of travelers and start sharing your adventures with the world.
            Create memories that last a lifetime.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <NavLink
              to="/contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/signup"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Join Now
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutpage;
