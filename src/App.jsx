import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aboutpage from "./pages/Aboutpage";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Contactpage from "./pages/Contactpage";
import BookingPage from "./pages/booking";
import Famous from "./pages/famous";
import YourBookings from "./pages/YourBookings";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
import FAQPage from "./pages/faq";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="app" element={<AppLayout />} />
          <Route path="contact" element={<Contactpage />} />

          <Route path="BookingPage" element={<BookingPage />} />
          <Route path="Famous" element={<Famous />} />

          <Route path="YourBookings" element={<YourBookings />} />

          <Route path="about" element={<Aboutpage />} />
          <Route path="signin" element={<Loginpage />} />
          <Route path="register" element={<Registerpage />} />

          {/* Resolved version - Adding the new routes */}
          <Route path="trip-budget" element={<TripBudgetCalculator />} />
          <Route path="terms-of-use" element={<TermsOfUse />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />

          {/* FAQ route */}
          <Route path="faq" element={<FAQPage />} /> {/* Add the FAQPage route */}

          {/* Catch-all route for page not found */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
