import MapBox from "../components/MapBox";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import { getProfileFromSessionStorage, isSignedIn } from "../services/utils";
import { useState } from "react";
import { addPin } from "../services/apiConnector";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

function Applayout() {

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
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  onClick={() => {
                    const formElement = document.getElementById('add-pin-form');
                    formElement.style.display = formElement.style.display === 'none' || !formElement.style.display ? 'block' : 'none';
                  }}
                >
                  Add a New Pin
                </button>
                <form id="add-pin-form" className="space-y-6 mx-auto max-w-screen-xl" style={{display: 'none'}}>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="rounded-md shadow-sm">
                      <label htmlFor="latitude" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Latitude
                      </label>
                      <input type="number" step="0.000001" name="latitude" id="latitude" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div className="rounded-md shadow-sm">
                      <label htmlFor="longitude" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Longitude
                      </label>
                      <input type="number" step="0.000001" name="longitude" id="longitude" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                  </div>
                  <div className="rounded-md shadow-sm">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Pin Name
                    </label>
                    <input type="text" name="title" id="name" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  </div>
                  <div className="rounded-md shadow-sm">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Pin Description
                    </label>
                    <textarea name="description" id="description" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" rows="3" />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="rounded-md shadow-sm">
                      <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Start Date
                      </label>
                      <input type="date" name="travelStartDate" id="startDate" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div className="rounded-md shadow-sm">
                      <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        End Date
                      </label>
                      <input type="date" name="travelEndDate" id="endDate" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                  </div>
                  <div className="rounded-md shadow-sm">
                    <label htmlFor="color" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Pin Color
                    </label>
                    <input type="color" name="color" id="color" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-full shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  </div>
                  
                  <button type="submit" className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={async (e) => {
                      e.preventDefault();
                      const formElement = e.target.closest('form');
                      const formData = new FormData(formElement);
                      const body = Object.fromEntries([...formData].map(
                        ([key, value]) => [key, value]
                      ));
                      const toastId = toast.loading("Loading...");
                      try {
                        await addPin(body);
                        toast.success("Add Pin Successful");
                        window.location.reload();
                        const formElement = document.getElementById('add-pin-form');
                        formElement.style.display === 'none'
                      } catch (error) {
                        console.log("ADD PIN API ERROR............", error);
                        toast.error("Add Pin Failed");
                      }
                      toast.dismiss(toastId); 
                    }}
                  >
                    Add Pin
                  </button>
                </form>
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
                          <div key={index} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 grid grid-cols-3 gap-4">
                            <div className="col-span-2">
                              <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                  {pin.title}
                                </h5>
                              </a>
                              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                {pin.address}
                              </p>
                            </div>
                            <div className="flex items-center justify-center">
                              <a
                                href="#"
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                              >
                                Read more
                              </a>
                            </div>
                          </div>
                        ))
                      }
                    </div>
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
