import { NavLink } from "react-router-dom";
import logo from "/logo.png";

function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-r from-teal-500 via-blue-500 to-pink-300 text-white w-full">
        <div className="relative mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <NavLink to="/">
                <img alt="GlobeHoppin Logo" src={logo} className="h-12 w-auto" />
              </NavLink>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-8 text-m font-bold uppercase">Resources</h2>
                <ul className="font-medium">
                  <li className="mb-4">
                    <NavLink
                      to="/about"
                      className="hover:text-yellow-400 transition-transform duration-300 hover:scale-105 hover:rotate-1 hover:underline"
                    >
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      className="hover:text-yellow-400 transition-transform duration-300 hover:scale-105 hover:rotate-1 hover:underline"
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-8 text-m font-bold uppercase">Follow us</h2>
                <ul className="font-medium">
                  <li className="mb-4">
                    <NavLink
                      to="#"
                      className="hover:text-yellow-400 transition-transform duration-300 hover:scale-105 hover:rotate-1 hover:underline"
                    >
                      Github
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="#"
                      className="hover:text-yellow-400 transition-transform duration-300 hover:scale-105 hover:rotate-1 hover:underline"
                    >
                      Discord
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-8 text-m font-bold uppercase">Legal</h2>
                <ul className="font-medium">
                  <li className="mb-4">
                    <a
                      href="#"
                      className="hover:text-yellow-400 transition-transform duration-300 hover:scale-105 hover:rotate-1 hover:underline"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-yellow-400 transition-transform duration-300 hover:scale-105 hover:rotate-1 hover:underline"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-300 opacity-50 sm:mx-auto" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm sm:text-center">
              © 2023{" "}
              <NavLink
                to="/"
                className="hover:text-yellow-400 transition-transform duration-300 hover:scale-105 hover:rotate-1 hover:underline"
              >
                GlobeHoppin
              </NavLink>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:mt-0">
              <a
                href="#"
                className="hover:text-yellow-400 transition-transform duration-300 hover:scale-105 hover:rotate-1 hover:underline"
              >
                {/* SVG icon */}
                <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 19">
                  <path d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              {/* More social icons */}
              <a href="#" className="hover:text-yellow-400 transition-transform duration-300 hover:scale-105 hover:rotate-1 hover:underline ml-5">
                <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 16">
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span className="sr-only">Discord community</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
