import { NavLink } from "react-router-dom";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import {
  MapPinIcon,
  CameraIcon,
  ChatBubbleBottomCenterTextIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import FlowChart from "./Flowchart";
import FAQ from "../components/FAQ";
import { useEffect, useState } from "react";
import { isSignedIn } from "../services/utils";

function Homepage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    setIsLoggedIn(isSignedIn());
  }, [isLoggedIn]);

  const features = [
    {
      name: "Pin Your Location",
      description: "Add some Description",
      icon: MapPinIcon,
    },
    {
      name: "Log Your Experience",
      description: "Add some Description",
      icon: ChatBubbleBottomCenterTextIcon,
    },
    {
      name: "Add Pictures and Memorable Moment",
      description: "Add some Description",
      icon: CameraIcon,
    },
    {
      name: "Share Travel log with your Close ones",
      description: "Add some Description",
      icon: ShareIcon,
    },
  ];

  const data = [
    {
      imageLink:
        "https://www.travelandleisure.com/thmb/tI_b5crpL54kwpahq2MxEK0crBw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-istanbul-WHENTURKEY0923-44a65552a3774c1aa878722306c7f8f4.jpg",
    },
    {
      imageLink: "https://etimg.etb2bimg.com/photo/97052424.cms",
    },
    {
      imageLink:
        "https://media.istockphoto.com/id/466842820/photo/petronas-towers.jpg?s=612x612&w=0&k=20&c=X_Kl-W_ulJEzjvaaT8gRNTQWHboyLKaedXol5EPhGdI=",
    },
    {
      imageLink:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/15/6d/d6/paris.jpg?w=1400&h=1400&s=1",
    },
    {
      imageLink:
        "https://www.travelandleisure.com/thmb/91pb8LbDAUwUN_11wATYjx5oF8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    },
  ];

  return (
    <>
      <div>
        <PageNav />
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-100 ring-1 ring-gray-100 hover:ring-gray-300">
                We will Keep Announcing our next feature.{" "}
                <NavLink to="" className="font-semibold text-indigo-600">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Read Blogs <span aria-hidden="true">&rarr;</span>
                </NavLink>
              </div>
            </div>
            <div className="text-center">
              <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                You Travel the World
                </span>
              </h1>
              <p className="text-gray-100 sm:text-lg md:mb-12 md:text-xl">
                Discover hidden gems, share experiences, and capture your
                journeys with our app.
              </p>

              {/* Changes Made below added: [py-3 grid gap-3], modified To: [md:flex md:justify-center md:gap-x-6 md:w-full] */}

              {
                !isLoggedIn ? (
                  <div className="py-3 grid gap-3 md:flex md:justify-center md:gap-x-6 md:w-full">
                    <NavLink
                      to="/signin"
                      className="rounded-md bg-indigo-600 px-4 py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Signin
                    </NavLink>

                    {/* Changes Made here text-gray-900 to  text-white, adjusted padding and text-sm to text-lg(to make visible better) */}

                    <NavLink
                      to="/signup"
                      className="rounded-md px-4 py-2 text-lg font-semibold text-white border border-white-900 hover:border-blue-500"
                    >
                      Signup
                    </NavLink>
                  </div>
                ): <div></div>
              }
        
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-900 py-16">
          <h2 className="text-3xl font-bold text-center text-white mb-10">
            Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-4">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center"
              >
                <feature.icon className="h-16 w-16 text-indigo-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.name}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
              <br />
          <FlowChart/>
            ))}
          </div>
        </div>
        {/* Image Gallery Section */}
        <div className="py-16">
          <h2 className="text-3xl font-bold text-center text-white mb-10">
            Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
            {data.map((item, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={item.imageLink}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-56 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <section id="faq">
          {/* FAQ Section */}
          <FAQ /> {/* This will render the FAQ section */}
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Homepage;
