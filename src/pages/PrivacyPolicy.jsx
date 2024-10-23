import Footer from "../components/Footer";
import PageNav from "../components/PageNav";


const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col items-center justify-evenly min-h-screen">
      <PageNav />
      <div className="p-8 max-w-800 bg-gray-700">
        <div className="flex flex-col items-start justify-center">
          <h4 className="text-5xl font-bold text-white mb-8 self-center">Privacy Policy</h4>
          <p className="text-gray-400 text-base leading-relaxed mb-3">
            Welcome to our Privacy Policy page. Your privacy is critically
            important to us.
          </p>
          <h6 className="font-medium text-white text-lg">
            1. Information We Collect
          </h6>
          <p className="text-gray-400 text-base leading-relaxed mb-3">
            We collect several types of information for various purposes to
            provide and improve our service to you.
          </p>
          <h6 className="font-medium text-white text-lg">
            2. How We Use Your Information
          </h6>
          <p className="text-gray-400 text-base leading-relaxed mb-3">
            We use the data we collect to operate, maintain, and improve our
            services. This includes using your data to understand how users
            interact with our services and to communicate updates.
          </p>
          <h6 className="font-medium text-white text-lg">3. Cookies</h6>
          <p className="text-gray-400 text-base leading-relaxed mb-3">
            We use cookies and similar tracking technologies to track the
            activity on our website and hold certain information.
          </p>
          <h6 className="font-medium text-white text-lg">
            4. Data Protection Rights
          </h6>
          <p className="text-gray-400 text-base leading-relaxed mb-3">
            You have the right to access, update, or delete your personal
            information. If you make a request, we have one month to respond to
            you.
          </p>
          <h6 className="font-medium text-white text-lg">
            5. Changes to This Privacy Policy
          </h6>
          <p className="text-gray-400 text-base leading-relaxed mb-3">
            We may update our Privacy Policy from time to time. You are advised
            to review this page periodically for any changes.
          </p>
          <h6 className="font-medium text-white text-lg">6. Contact Us</h6>
          <p className="text-gray-400 text-base leading-relaxed">
            If you have any questions about this Privacy Policy, please contact
            us.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
