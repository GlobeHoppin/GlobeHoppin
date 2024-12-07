import { Disclosure, Menu } from "@headlessui/react";
import {
  ArrowRightEndOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import logo from "/logo.png";
import { useEffect, useState } from "react";
import { isSignedIn } from "../services/utils";

const navigation = [
  { name: "Pin your location", href: "/app", current: false },
  // { name: "MapComponent", href: "/MapComponent", current: false },
  { name: "About", href: "/about", current: false },
  { name: "Contact", href: "/contact", current: false },
  // { name: "BookingPage", href: "/BookingPage", current: false },
  // { name: "YourBookings", href: "/YourBookings", current: false },
  { name: "Guide", href: "/Famous", current: false },
  { name: "Trip Budget Calculator", href: "/trip-budget", current: false },
  // { name: "Review", href: "/review", current: false },
];


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function PageNav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    setIsLoggedIn(isSignedIn());
  }, [isLoggedIn]);

  return (
    <div>
      <Disclosure as="nav" className="bg-slate-950 fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </Disclosure.Button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <NavLink to="/">
                  <img
                    alt="Logo"
                    src={logo}
                    className="h-8 w-auto"
                    style={{
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform =
                        "perspective(500px) rotateX(15deg) rotateY(15deg) scale(1.1)";
                      e.target.style.boxShadow =
                        "0 10px 20px rgba(0, 0, 0, 0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "none";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </NavLink>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <NavLink
                    key={item.name}
                    to={item.href}
                    className="relative text-gray-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium group"
                  >
                    {item.name}
                    <span
                      className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full"
                    ></span>
                  </NavLink>
                  
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {isLoggedIn ? (
                <>
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          alt="Profile"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          className="h-8 w-8 rounded-full"
                        />
                      </Menu.Button>
                    </div>
                    <Menu.Items
                      transition
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <Menu.Item>
                        <NavLink
                          to="/profile"
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                        >
                          Your Profile
                        </NavLink>
                      </Menu.Item>
                      <Menu.Item>
                        <NavLink
                          to=""
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                        >
                          Logout
                        </NavLink>
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                </>
              ) : (
                <>
                  <Menu as="div" className="relative ml-3">
                    <div>
                      {/* Made changes here, hover:bg-indigo-600 rounded p-2 transition-all, Made join hover better */}
                      <Menu.Button className="relative flex font-bold text-gray-200 text-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 hover:bg-indigo-600 rounded p-2 transition-all">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        Join
                        <ArrowRightEndOnRectangleIcon className="h-6 w-6 text-gray-200" />
                      </Menu.Button>
                      <Menu.Items
                        transition
                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                      >
                        <Menu.Item>
                          <NavLink
                            to="/signin"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                          >
                            Sign In
                          </NavLink>
                        </Menu.Item>
                        <Menu.Item>
                          <NavLink
                            to="/signup"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                          >
                            Signup
                          </NavLink>
                        </Menu.Item>
                      </Menu.Items>
                    </div>
                  </Menu>
                </>
              )}
            </div>
          </div>
        </div>

        <Disclosure.Panel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Disclosure.Button
                key={item.name}
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                <NavLink
                  key={item.name}
                  to={item.href}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  {item.name}
                </NavLink>
              </Disclosure.Button>
            ))}
          </div>
        </Disclosure.Panel>
      </Disclosure>
    </div>
  );
}

export default PageNav;
