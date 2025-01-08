import { NavLink } from "react-router-dom";
import signupimg from "/signupimg.png";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../services/apiConnector";

function Registerpage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [cPass, setCPass] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (pass !== cPass) {
      toast.error("Passwords do not match!");
      return;
    }
    
    const toastId = toast.loading("Creating your account...");
    try {
      await signup({ email, name, password: pass });
      toast.success("Welcome to GlobeHoppin! 🌎");
      navigate("/");
    } catch (error) {
      console.log("SIGNUP API ERROR............", error);
      toast.error("Signup failed. Please try again.");
    }
    toast.dismiss(toastId);
  }

  return (
    <div className="min-h-screen dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-7xl mx-auto">
          {/* Left Side - Welcome Content - Hidden on mobile */}
          <div className="hidden lg:flex flex-1 flex-col text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Join Our Global Community
              </span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-xl">
              Start tracking your adventures and connecting with fellow travelers around the world.
            </p>
            <div className="relative">
              <img
                src={signupimg}
                alt="Travel Adventures"
                className="max-w-md mx-auto lg:mx-0 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </div>

          {/* Right Side - Sign Up Form */}
          <div className="w-full lg:flex-1 max-w-md">
            {/* Mobile Header - Shown only on mobile */}
            <div className="lg:hidden text-center mb-8">
              <h1 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Join GlobeHoppin
                </span>
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Start your journey with us today
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 lg:p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Create your account
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Already have an account?{" "}
                  <NavLink to="/signin" className="text-blue-600 hover:text-blue-700 font-medium">
                    Sign in
                  </NavLink>
                </p>
              </div>

              <form onSubmit={submitHandler} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    value={cPass}
                    onChange={(e) => setCPass(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-[1.02]"
                >
                  Create Account
                </button>

                <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
                  By signing up, you agree to our{" "}
                  <NavLink to="/terms" className="text-blue-600 hover:underline">
                    Terms of Service
                  </NavLink>{" "}
                  and{" "}
                  <NavLink to="/privacy" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </NavLink>
                </p>
              </form>
            </div>

            {/* Social Proof - Optional */}
            <div className="mt-8 text-center hidden sm:block">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Trusted by travelers from over 50+ countries
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registerpage;
