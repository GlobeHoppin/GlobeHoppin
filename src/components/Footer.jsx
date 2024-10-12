import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "/logo.png";

function Footer() {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <footer className="bg-white dark:bg-gray-900 mx-auto w-full max-w-screen-xl">
        <div className="absolute mx-auto w-full max-w-screen-xl p-4 py-6 pl-5 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <NavLink to="/">
                <img alt="GlobeHoppin Logo" src={logo} className="h-8 w-auto" />
              </NavLink>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <NavLink to="/about" className="hover:underline">
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" className="hover:underline">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <NavLink to="" className="hover:underline ">
                      Github
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="" className="hover:underline">
                      Discord
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <NavLink to="/" className="hover:underline">
                GlobeHoppin
              </NavLink>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              {/* Social Media Links */}
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              {/* More social media icons ... */}
              {/* FAQ button */}
              <button
                onClick={toggleModal}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                FAQ
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* FAQ Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-5 rounded shadow-lg">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <div>
              <h3 className="font-semibold">Q1: What is GlobeHoppin?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                GlobeHoppin is a platform for discovering travel resources and connecting with fellow travelers.
              </p>
              <h3 className="font-semibold mt-3">Q2: How can I contact support?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                You can contact support through our contact page.
              </p>
              <h3 className="font-semibold mt-3">Q3: Where can I find the terms and conditions?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                The terms and conditions are available in the footer section of our website.
              </p>
            </div>
            <button
              onClick={toggleModal}
              className="mt-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
