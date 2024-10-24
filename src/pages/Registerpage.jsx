import PageNav from "../components/PageNav";
import { NavLink } from "react-router-dom";
import signupimg from "/signupimg.png";
import Footer from "../components/Footer";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../services/operations/authAPI"
import toast from "react-hot-toast"

function Registerpage() {
  const navigate = useNavigate();
	const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

		if (password !== cpassword) {
			toast.error("Passwords Do Not Match");
			return;
		}

		// Send data to backend for create account
		dispatch(
			signUp(name, email, password, navigate)
		);
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
                       Signup In Our  World                
                    </span>
                  </h1>
                  <p className="text-gray-100 sm:text-2xl mt-2">
                    GlobeHoppin keeps track of your adventures.
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <img
                      src={signupimg}
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
                        Create an account
                      </h1>
                      <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Your Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter your name"
                            required=""
                          />
                        </div>
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
                            placeholder="••••••••"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                          />
                        </div>
                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Confirm password
                          </label>
                          <input
                            type="password"
                            name="confirm-password"
                            id="confirm-password"
                            value={cpassword}
                            onChange={(e)=>setCpassword(e.target.value)}
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full text-white bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-700 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                          Create an Account
                        </button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                          Already have an account?{" "}
                          <NavLink
                            to="/signin"
                            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                          >
                            Login
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

export default Registerpage;
