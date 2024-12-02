import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import PageNav from "../components/PageNav";
import { getProfileFromSessionStorage, isSignedIn } from "../services/utils";

function Profile() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [profileData, setProfileData] = useState({});

    useEffect(() => {
      setIsLoggedIn(isSignedIn());
      if(!isSignedIn()){
        window.location.href = "/login";
      }
      
      setProfileData(getProfileFromSessionStorage());
    }, [isLoggedIn]);

    return (
        <div>
            <PageNav />
            <div className="flex flex-col items-center justify-center min-h-screen">
                <div className="w-full max-w-4xl p-4 rounded-lg shadow-md">
                    <h1 className="text-4xl font-bold text-gray-500">Profile</h1>
                    <h1 className="mt-4 text-4xl text-purple-300">Welcome back, <b style={{fontStyle: "italic"}}>{profileData.name}</b></h1>
                    <div className="mt-8 space-y-4">
                        <div className="flex items-center justify-between">
                            <p className="text-lg text-gray-100">Password: ****** (click to update)</p>
                            <button
                                className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                                onClick={() => {
                                    alert("Update password functionality is not implemented yet!");
                                }}
                            >
                                Update Password
                            </button>
                        </div>
                        <form
                            className="space-y-4"
                            onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.currentTarget);
                                const name = formData.get("name");
                                const email = formData.get("email");

                                if (name && email) {
                                    // Update profile data in session storage
                                    localStorage.setItem("profile", JSON.stringify({ name, email }));
                                    setProfileData({ name, email });
                                }
                            }}
                        >
                            <label className="block text-lg text-gray-100" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                                type="text"
                                name="name"
                                id="name"
                                defaultValue={profileData.name}
                            />
                            <label className="block text-lg text-gray-100" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="block w-full px-4 py-2 text-gray-400 bg-gray-100 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 cursor-not-allowed"
                                type="email"
                                name="email"
                                id="email"
                                disabled={true}
                                defaultValue={profileData.email}
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                            >
                                Update Profile
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Profile;
