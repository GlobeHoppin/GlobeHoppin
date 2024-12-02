import Footer from "../components/Footer";
import PageNav from "../components/PageNav";

function PageNotFound() {
  return (
    <div>
      <PageNav />
      
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-6xl font-bold text-gray-100">404</h1>
        <p className="text-xl text-gray-600">Page not found</p>
        <p className="text-lg text-gray-500">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <button className="mt-8 px-6 py-2 text-lg text-white bg-gray-800 rounded-md shadow-md hover:bg-gray-700" onClick={() => window.location.href = "/"}>
          Go back home
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default PageNotFound;
