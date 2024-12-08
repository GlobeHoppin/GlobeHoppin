import MapBox from "../components/MapBox";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import { getProfileFromSessionStorage, isSignedIn } from "../services/utils";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Applayout() {

  const [pin, setPin] = useState({});
  const [isViewMoreOpen, setIsViewMoreOpen] = useState(false);
  const [user] = useState(getProfileFromSessionStorage());
  const [isLogin] = useState(isSignedIn())

  return (
    <>
      <PageNav />

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto py-5 sm:py-48 lg:py-5">
          <div className="flex justify-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome to the Map</h1>
          </div>
          {
            isLogin ? (
              <div className="grid justify-center mt-4 space-y-6 mx-auto max-w-screen-xl">
                <NavLink
                  to="/pin"
                  className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Add a New Pin
                </NavLink>
              </div>
            ) : (
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                You need to login to add a new pin and view it on the map.
                <NavLink to="/signin">
                  <span className="text-blue-500 hover:underline">
                    Signin
                  </span>
                </NavLink>
              </p>
            )
          }
          <section className="py-8">
            <div className="mx-auto max-w-screen-xl">
              <div className="flex flex-col w-full gap-2">
                <div
                  className="flex-1 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg"
                  style={{ width: "100%", height: "100%" }}
                >
                  <MapBox />
                </div>
                {user && user.pins && user.pins.length > 0 ? (
                  <div
                    className="flex-1 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 overflow-y-auto"
                    style={{ height: "600px" }}
                  >
                    <div className="space-y-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {
                        user.pins.map((pin, index) => (
                          <div key={index} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="col-span-2 text-center">
                              <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                  {pin.title}
                                </h5>
                              </a>
                              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                {pin.description}
                              </p>
                            </div>
                            <div className="flex items-center justify-center space-x-2">
                              <button
                                onClick={() => {
                                  setPin(pin);
                                  setIsViewMoreOpen(true);
                                }}
                                className="inline-flex items-center px-4 py-3 text-base font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 transition duration-150 ease-in-out"
                              >
                                View more
                              </button>
                              <NavLink to={`/pin`} state={{ pin }}>
                                <button
                                  className="inline-flex items-center px-4 py-3 text-base font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800 transition duration-150 ease-in-out"
                                >
                                  Edit
                                </button>
                              </NavLink>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                    {
                      isViewMoreOpen && (
                        <div className="mt-4">
                          <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                              {pin.title}
                            </h2>
                            <dl className="grid grid-cols-2 gap-4">
                              <dt className="font-semibold text-gray-900 dark:text-white">
                                Description
                              </dt>
                              <dd className="text-gray-700 dark:text-gray-400">
                                {pin.description}
                              </dd>
                              <dt className="font-semibold text-gray-900 dark:text-white">
                                Latitude
                              </dt>
                              <dd className="text-gray-700 dark:text-gray-400">
                                {pin.latitude}
                              </dd>
                              <dt className="font-semibold text-gray-900 dark:text-white">
                                Longitude
                              </dt>
                              <dd className="text-gray-700 dark:text-gray-400">
                                {pin.longitude}
                              </dd>
                              <dt className="font-semibold text-gray-900 dark:text-white">
                                User
                              </dt>
                              <dd className="text-gray-700 dark:text-gray-400">
                                {pin.user.name}
                              </dd>
                              <dt className="font-semibold text-gray-900 dark:text-white">
                                Color
                              </dt>
                              <dd className="text-gray-700 dark:text-gray-400">
                                {pin.color}
                              </dd>
                              <dt className="font-semibold text-gray-900 dark:text-white">
                                Pin Style
                              </dt>
                              <dd className="text-gray-700 dark:text-gray-400">
                                {pin.pinStyle}
                              </dd>
                              <dt className="font-semibold text-gray-900 dark:text-white">
                                Date Added
                              </dt>
                              <dd className="text-gray-700 dark:text-gray-400">
                                {new Date(pin.dateAdded).toLocaleString()}
                              </dd>
                              <dt className="font-semibold text-gray-900 dark:text-white">
                                Tags
                              </dt>
                              <dd className="text-gray-700 dark:text-gray-400">
                                {pin.tags.join(", ")}
                              </dd>
                              <dt className="font-semibold text-gray-900 dark:text-white">
                                Visibility
                              </dt>
                              <dd className="text-gray-700 dark:text-gray-400">
                                {pin.visibility}
                              </dd>
                              <dt className="font-semibold text-gray-900 dark:text-white">
                                Photos
                              </dt>
                              <dd className="text-gray-700 dark:text-gray-400">
                                {pin.photos.join(", ")}
                              </dd>
                              <dt className="font-semibold text-gray-900 dark:text-white">
                                Pin Category
                              </dt>
                              <dd className="text-gray-700 dark:text-gray-400">
                                {pin.pinCategory}
                              </dd>
                              <dt className="font-semibold text-gray-900 dark:text-white">
                                Travel Start Date
                              </dt>
                              <dd className="text-gray-700 dark:text-gray-400">
                                {new Date(pin.travelStartDate).toLocaleString()}
                              </dd>
                              <dt className="font-semibold text-gray-900 dark:text-white">
                                Travel End Date
                              </dt>
                              <dd className="text-gray-700 dark:text-gray-400">
                                {new Date(pin.travelEndDate).toLocaleString()}
                              </dd>
                              <dt className="font-semibold text-gray-900 dark:text-white">
                                Places
                              </dt>
                              <dd className="text-gray-700 dark:text-gray-400">
                                {pin.places.map(place => `${place.locationName} - ${place.address}`).join(", ")}
                              </dd>
                              <dt className="font-semibold text-gray-900 dark:text-white">
                                Images
                              </dt>
                              <dd className="text-gray-700 dark:text-gray-400">
                                {pin.images.join(", ")}
                              </dd>
                              <dt className="font-semibold text-gray-900 dark:text-white">
                                Memories
                              </dt>
                              <dd className="text-gray-700 dark:text-gray-400">
                                {pin.memories.join(", ")}
                              </dd>
                              <dt className="font-semibold text-gray-900 dark:text-white">
                                Journal
                              </dt>
                            </dl>
                            <dd className="text-gray-700 dark:text-gray-400" dangerouslySetInnerHTML={{__html: pin.journal}} />
                          </div>
                        </div>
                      )
                    }
                  </div>
                ) : (
                  <></>
                )
                }
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default Applayout;
