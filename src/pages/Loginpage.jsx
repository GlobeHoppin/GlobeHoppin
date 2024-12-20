import { NavLink } from "react-router-dom";
import PageNav from "../components/PageNav";
import loginimg from "/loginimg.png";
import Footer from "../components/Footer";
import { toast } from "react-hot-toast";
import { signin } from "../services/apiConnector"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Loginpage() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Loading...");
		try {
      await signin({email, password});
			toast.success("Login Successful");
			navigate("/");
		} catch (error) {
			console.log("LOGIN API ERROR............", error);
			toast.error("Login Failed");
		}
		toast.dismiss(toastId);  
  }

  return (
    <>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <PageNav />
        <div className="mx-auto text-gray-200">
          <div className="grid md:grid-cols-2">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-40">
                <div className="text-center">
                  <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                    Log Into Your World
                    </span>
                  </h1>
                  <p className="text-gray-100 sm:text-2xl mt-2">
                    GlobeHoppin keeps track of your adventures.
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <img
                      src={loginimg}
                      alt="Login Page Image"
                      width="300px"
                      height="300px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                  <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                      </h1>
                      <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Your email
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="name@email.com"
                            required=""
                          />
                        </div>
                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id="remember"
                                aria-describedby="remember"
                                type="checkbox"
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                required=""
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label className="text-gray-500 dark:text-gray-300">
                                Remember me
                              </label>
                            </div>
                          </div>
                          <a
                            href="#"
                            className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                          >
                            Forgot password?
                          </a>
                        </div>
                        <button
                          type="submit"
                          className="w-full text-white bg-blue-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-700 dark:hover:bg-blue-700 dark:focus:ring-primary-800"
                        >
                          Sign in
                        </button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                          Don’t have an account yet?{" "}
                          <NavLink
                            to="/signup"
                            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                          >
                            Sign up
                          </NavLink>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Loginpage;
