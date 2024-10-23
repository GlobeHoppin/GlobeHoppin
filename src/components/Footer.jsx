import { NavLink } from "react-router-dom";
import logo from "/logo.png";
import { BsDiscord, BsDribbble, BsGithub, BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
function Footer() {
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
                    <a href="/PrivacyPolicy" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                  <NavLink to="/TermsOfUse" className="hover:underline">
                      Terms of Use
                    </NavLink>
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
              <a href="#">
                <FaFacebookF
                  className="text-gray-500 hover:text-white ml-4 cursor-pointer hover:scale-125 duration-200"
                  title="facebook"
                />
              </a>
              <a href="#">
                <BsDiscord
                  className="text-gray-500 ml-4 cursor-pointer hover:text-white duration-200 hover:scale-125"
                  title="discord"
                />
              </a>
              <a href="#">
                <BsTwitterX
                  className="text-gray-500 ml-4 cursor-pointer hover:text-white hover:scale-125 duration-200"
                  title="twitter"
                />
              </a>
              <a href="#">
                <BsGithub
                  className="text-gray-500 hover:text-white ml-4 cursor-pointer duration-200 hover:scale-125"
                  title="github"
                />
              </a>
              <a href="#">
                <BsDribbble
                  className="text-gray-500 hover:text-white duration-200 hover:scale-125 ml-4 cursor-pointer"
                  title="dribble"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
