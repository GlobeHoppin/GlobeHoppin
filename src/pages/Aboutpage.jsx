import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import PageNav from "../components/PageNav";
import { useEffect, useState } from "react";
import ImageWithCursorEffect from "../components/ImageWithCursorEffect";

function Aboutpage() {
  // Typing text state for animation
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
      // Restart typing after a brief pause
      const restartTimeout = setTimeout(() => {
        setText(""); // Reset the text
        setIndex(0); // Reset the index
      }, 2000); // Adjust delay before restarting
      return () => clearTimeout(restartTimeout);
    }
  }, [index, typingText]);

  return (
    <>
      <div className="relative isolate">    
  {/* Padding on all sides was preventing the element from taking the full screen size.
  Removing or adjusting it will allow full-width and height display. */}


        <PageNav />
        <div
          className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12 sm:py-24 text-gray-200 lg:py-12"
          style={{
            backgroundImage:
              "url(https://nextvacay.com/wp-content/uploads/2022/07/KW-why-travel-is-important.jpg.webp)", // Background image URL
            backgroundSize: "cover", // Ensures the background image covers the entire div
            backgroundPosition: "center", // Centers the background image
            height: "90vh", // Adjust the height as needed
            position: "relative", // Set position relative for absolute children
          }}
        >
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-gray-800 to-transparent" // Gradient from dark gray to transparent
            style={{
              zIndex: 0, // Set zIndex to ensure it's behind the content
              opacity: 5, // Adjust opacity as needed
            }}
          />

          {/* Left side: Typing text */}
          <div
            className="relative z-10 space-y-5" // Added z-10 to ensure it's above the gradient
            style={{
              maxWidth: "600px", // Adjust the maximum width as needed
              width: "100%", // Ensures full width is used within the max limit
              marginLeft: "40px", // Centers the text
            }}
          >
            <h1
              className="text-3xl font-extrabold tracking-tight leading-none text-white md:text-4xl lg:text-5xl"
              style={{
                fontSize: "4rem", // Adjust the font size as necessary
              }}
            >
              {text}
            </h1>
            <p
              className="text-lg font-normal text-white lg:text-sl"
              style={{
                fontSize: "1rem", // Adjust the font size as necessary
              }}
            >
              At GlobeHoppin, we deeply value the remarkable travel stories
              shared by our community. Each adventure inspires us to design even
              more unforgettable travel experiences, enhancing the journey for
              all. Your unique tales not only motivate us but also connect
              fellow travelers, creating a tapestry of shared memories and
              inspiration. Join us in celebrating these adventures and crafting
              new ones together!
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
              <NavLink
                to="/contact"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Contact Us
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </NavLink>
              <NavLink
                to="/#faq" // Add path to navigate FAQ section from home page
                className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
              >
                FAQ
              </NavLink>
            </div>
          </div>

          {/* Right side: Image with motion */}
          {/* THhis is cursor effect changes made  */}
          <ImageWithCursorEffect />
        </div>

        {/* Additional Content: Testimonials and Client Reviews */}
        <div className="py-12 bg-gray-800 text-gray-200">
          <h2 className="text-center text-3xl font-extrabold mb-8">
            What Our Clients Say
          </h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Testimonial 1 */}
              <div className="mx-6 p-8 bg-gray-900 rounded-lg shadow-lg text-center transition-transform duration-300 transform hover:scale-105">
                {/* Avatar */}
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Jane Doe"
                  className="w-16 h-16 rounded-full mx-auto mb-4 border-4 border-yellow-500"
                />
                <div className="text-lg font-semibold mb-2">Jane Doe</div>
                <p className="text-sm font-light mb-4">
                  &quot;GlobeHoppin helped me discover places I&apos;d never
                  even considered visiting. Their platform made my trip
                  unforgettable!&quot;
                </p>
                <div className="flex justify-center text-yellow-500">★★★★☆</div>
              </div>

              {/* Testimonial 2 */}
              <div className="mx-6 p-8 bg-gray-900 rounded-lg shadow-lg text-center transition-transform duration-300 transform hover:scale-105">
                {/* Avatar */}
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="John Smith"
                  className="w-16 h-16 rounded-full mx-auto mb-4 border-4 border-yellow-500"
                />
                <div className="text-lg font-semibold mb-2">John Smith</div>
                <p className="text-sm font-light mb-4">
                  &quot;The team at GlobeHoppin truly understands what makes a
                  travel adventure special. Can&apos;t wait to book my next
                  trip!&quot;
                </p>
                <div className="flex justify-center text-yellow-500">★★★★★</div>
              </div>

              {/* Testimonial 3 */}
              <div className="mx-6 p-5 bg-gray-900 rounded-lg shadow-lg text-center transition-transform duration-300 transform hover:scale-105">
                {/* Avatar */}
                <img
                  src="https://randomuser.me/api/portraits/men/64.jpg"
                  alt="Alex Lee"
                  className="w-16 h-16 rounded-full mx-auto mb-4 border-4 border-yellow-500"
                />
                <div className="text-lg font-semibold mb-2">Alex Lee</div>
                <p className="text-sm font-light mb-4">
                  &quot;Amazing service, stunning destinations, and a super easy
                  booking process. My family had a blast on our latest
                  vacation!&quot;
                </p>
                <div className="flex justify-center text-yellow-500">★★★★★</div>
              </div>
            </div>
          </div>
        </div>

        {/* More About Us Section */}
        <div className="py-12 bg-gray-700 text-gray-300 text-center">
          <h2 className="text-2xl font-extrabold mb-4">Why Choose Us?</h2>
          <p className="text-lg mb-6">
            At GlobeHoppin, we not only bring you closer to exciting travel
            experiences but also ensure a personalized journey that reflects
            your unique style. From mountain peaks to serene beaches, our
            community’s memories inspire us to continue exploring the world.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <NavLink
              to="/contact"
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 hover:scale-105 transition-transform duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/register"
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 hover:scale-105 transition-transform duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Join Us
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Aboutpage;
