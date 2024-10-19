import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aboutpage from "./pages/Aboutpage";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import "./App.css";
import Applayout from "./pages/Applayout";
import Contactpage from "./pages/Contactpage";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
import TripBudgetCalculator from "./pages/TripBudgetCalculatorPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="app" element={<Applayout />} />
          <Route path="contact" element={<Contactpage />} />
          <Route path="about" element={<Aboutpage />} />
          <Route path="signin" element={<Loginpage />} />
          <Route path="register" element={<Registerpage />} />
          <Route path="trip-budget" element={<TripBudgetCalculator />} />
          {/* Add these routes if you need them */}
          <Route path="terms-of-use" element={<TermsOfUse />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
