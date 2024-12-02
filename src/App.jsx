import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aboutpage from "./pages/Aboutpage";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";


// import TermsOfUse from "./pages/TermsOfUse";

// import PrivacyPolicy from "./pages/PrivacyPolicy";

// import TermsOfUse from "./pages/TermsOfUse";
// import PrivacyPolicy from "./pages/PrivacyPolicy";

import "./App.css";

import Applayout from "./pages/Applayout";
import Contactpage from "./pages/Contactpage";
import BookingPage from "./pages/booking";


import MapComponent from "./pages/MapComponent";





import Famous from "./pages/famous";

import YourBookings from "./pages/YourBookings";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";

import FAQPage from "./pages/faq"; // Import the FAQPage component
import "./App.css";

import TripBudgetCalculator from "./pages/TripBudgetCalculatorPage";
import ReviewsAndRatings from "./pages/Review";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="app" element={<Applayout />} />
          <Route path="contact" element={<Contactpage />} />
          <Route path="BookingPage" element={<BookingPage />} />
          <Route path="Famous" element={<Famous />} />
          <Route path="YourBookings" element={<YourBookings />} />
          <Route path="MapComponent" element={<MapComponent />} />
          {/* <Route path="PrivacyPolicy" element={<PrivacyPolicy />} /> */}
          {/* <Route path="TermsOfUse" element={<TermsOfUse />} /> */}
          <Route path="BookingPage" element={<BookingPage />} />
          <Route path="Famous" element={<Famous />} />
          <Route path="YourBookings" element={<YourBookings />} />
          <Route path="about" element={<Aboutpage />} />
          <Route path="signin" element={<Loginpage />} />
          <Route path="signup" element={<Registerpage />} />
          {/* <Route path="PrivacyPolicy" element={<PrivacyPolicy />} /> */}
          <Route path="faq" element={<FAQPage />} />{" "}
          {/* Add the FAQPage route */}
          <Route path="trip-budget" element={<TripBudgetCalculator />} />
          <Route path="review" element={<ReviewsAndRatings />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
