import MapBox from "../components/MapBox";
import { getProfileFromSessionStorage, isSignedIn } from "../services/utils";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-hot-toast";

function Globe() {

  const [pin, setPin] = useState({});
  const [isViewMoreOpen, setIsViewMoreOpen] = useState(false);
  const [user] = useState(getProfileFromSessionStorage());
  const [isLogin] = useState(isSignedIn())
  const [showShareModal, setShowShareModal] = useState(false);
  const userId = user?._id;

  const generateShareableLink = () => {
    const shareableLink = `${window.location.origin}/share/${userId}`;
    return shareableLink;
  };

  const generateEmbedCode = () => {
    const embedCode = `<iframe src="${window.location.origin}/embed/${userId}" width="100%" height="600"></iframe>`;
    return embedCode;
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  const ShareButton = () => (
    <button
      onClick={() => setShowShareModal(true)}
      className="text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    >
      Share Globe
    </button>
  );

  const ShareModal = () => (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black opacity-30"></div>
        <div className="relative bg-white dark:bg-gray-800 rounded-lg p-8 max-w-lg w-full">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Share Your Globe
          </h3>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Shareable Link
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                readOnly
                value={generateShareableLink()}
                className="flex-1 px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <button
                onClick={() => copyToClipboard(generateShareableLink())}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Copy
              </button>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Embed Code
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                readOnly
                value={generateEmbedCode()}
                className="flex-1 px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <button
                onClick={() => copyToClipboard(generateEmbedCode())}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Copy
              </button>
            </div>
          </div>

          <button
            onClick={() => setShowShareModal(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="relative isolate min-h-[calc(100vh-4rem)]">
        <div className="h-full flex flex-col">
          <div className="text-center py-4 lg:py-6 px-4">
            <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Explore Your World
            </h1>
            <p className="mt-2 text-sm lg:text-lg text-gray-600 dark:text-gray-400">
              Discover and share amazing places around the globe
            </p>
          </div>

          <div className="flex-1 flex flex-col lg:flex-row gap-4 px-2 lg:px-8 h-full">
            <div className="w-full lg:w-[70%] h-[80vh] rounded-2xl overflow-hidden shadow-xl border border-gray-200/50 dark:border-gray-700/50 relative">
              <MapBox />
            </div>

            <div className="w-full lg:w-[30%] flex flex-col gap-4">
              {isLogin && (
                <div className="flex flex-col sm:flex-row lg:flex-col gap-2 px-2">
                  <NavLink
                    to="/pin"
                    className="flex-1 group flex items-center justify-center px-4 py-2 lg:px-6 lg:py-3 text-sm lg:text-base font-semibold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <span className="bg-white bg-opacity-20 rounded-full p-1.5 mr-2">
                      <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                    Add New Pin
                  </NavLink>
                  <ShareButton />
                </div>
              )}

              <div className="flex-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden">
                <div className="p-3 lg:p-4 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white flex items-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    Your Pins
                  </h2>
                </div>
                
                <div className="overflow-y-auto h-[300px] lg:h-[calc(100vh-20rem)]">
                  <div className="grid grid-cols-1 gap-4 p-4">
                    {user?.pins?.map((pin, index) => (
                      <div 
                        key={index} 
                        className="group bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700"
                      >
                        <div className="p-4">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                            {pin.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 mb-3 line-clamp-2">
                            {pin.description}
                          </p>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => {
                                setPin(pin);
                                setIsViewMoreOpen(true);
                              }}
                              className="flex-1 px-3 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                            >
                              View
                            </button>
                            <NavLink 
                              to={`/pin`} 
                              state={{ pin }}
                              className="flex-1 px-3 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 text-center transition-colors duration-200 dark:bg-gray-700 dark:text-blue-400 dark:hover:bg-gray-600"
                            >
                              Edit
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {isViewMoreOpen && (
            <div className="fixed inset-0 z-[60] overflow-hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-2 lg:p-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl lg:rounded-2xl w-full max-w-4xl max-h-[90vh] lg:max-h-[85vh] shadow-2xl">
                <div className="sticky top-0 bg-white dark:bg-gray-800 p-3 lg:p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                  <h2 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">{pin.title}</h2>
                  <button
                    onClick={() => setIsViewMoreOpen(false)}
                    className="rounded-full p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="overflow-y-auto p-4 lg:p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
                    <div className="space-y-6">
                      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                        <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
                        <dl className="space-y-4">
                          {[
                            { label: "Description", value: pin.description },
                            { label: "Location", value: `${pin.latitude}, ${pin.longitude}` },
                            { label: "Added by", value: pin.user.name },
                            { label: "Date Added", value: new Date(pin.dateAdded).toLocaleString() }
                          ].map((item, index) => (
                            <div key={index}>
                              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">{item.label}</dt>
                              <dd className="mt-1 text-sm text-gray-900 dark:text-white">{item.value}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                      
                      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                        <h3 className="text-lg font-semibold mb-4">Travel Details</h3>
                        <dl className="space-y-4">
                          {[
                            { label: "Start Date", value: new Date(pin.travelStartDate).toLocaleString() },
                            { label: "End Date", value: new Date(pin.travelEndDate).toLocaleString() },
                            { label: "Category", value: pin.pinCategory },
                            { label: "Style", value: pin.pinStyle }
                          ].map((item, index) => (
                            <div key={index}>
                              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">{item.label}</dt>
                              <dd className="mt-1 text-sm text-gray-900 dark:text-white">{item.value}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                        <h3 className="text-lg font-semibold mb-4">Places</h3>
                        <div className="space-y-2">
                          {pin.places.map((place, index) => (
                            <div key={index} className="text-sm">
                              <span className="font-medium">{place.locationName}</span>
                              <p className="text-gray-500 dark:text-gray-400">{place.address}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                        <h3 className="text-lg font-semibold mb-4">Journal</h3>
                        <div className="prose dark:prose-invert max-w-none text-sm">
                          <div dangerouslySetInnerHTML={{__html: pin.journal}} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {showShareModal && <ShareModal />}
        </div>
      </div>
    </div>
  );
}

export default Globe;
