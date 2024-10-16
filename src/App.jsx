import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aboutpage from "./pages/Aboutpage";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Applayout from "./pages/Applayout";
import Contactpage from "./pages/Contactpage";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
import FAQPage from "./pages/faq"; // Import the FAQPage component
import "./App.css";

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
          <Route path="faq" element={<FAQPage />} /> {/* Add the FAQPage route */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
