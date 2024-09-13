import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import PageNav from "../components/PageNav";

function Aboutpage() {
  return (
    <>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <PageNav />
        <div className="mx-auto py-12 sm:py-48 text-gray-200 lg:py-12">
          <section className="bg-center bg-no-repeat bg-[url('https://nextvacay.com/wp-content/uploads/2022/07/KW-why-travel-is-important.jpg.webp')] bg-gray-700 bg-blend-multiply">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                We&apos;ll Love to see your Travel Memories
              </h1>
              <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                Here at GlobeHoppin we focus on people&apos;s amazing travel
                journey story, fun experience, and all the things which makes a
                travel happy and adventurous. Join us.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                <NavLink
                  to="/contact"
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                >
                  Contact
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
                  to=""
                  className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
                >
                  FAQ
                </NavLink>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Aboutpage;
