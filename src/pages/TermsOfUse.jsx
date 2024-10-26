import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import { Button } from "@headlessui/react";

const TermsOfUse = () => {
  return (
    <div className="flex flex-col items-center justify-evenly min-h-screen">
      <PageNav />
      <div className="mt-16 p-8 max-w-800 bg-gray-700">
        <div className="flex flex-col items-start justify-center">
          <h4 className="text-5xl font-bold text-white mb-8 self-center">
            Terms of Use
          </h4>
          <p className="text-gray-400 text-base leading-relaxed mb-3">
            Welcome to our Terms of Use page. Please read these terms carefully.
          </p>
          <h6 className="font-medium text-white text-lg">
            1. User Responsibilities
          </h6>
          <p className="text-gray-400 text-base leading-relaxed mb-3">
            You are responsible for ensuring that all information you provide is
            accurate and that your use of our travel services complies with
            applicable laws and regulations.
          </p>
          <h6 className="font-medium text-white text-lg">
            2. Services Offered
          </h6>
          <p className="text-gray-400 text-base leading-relaxed mb-3">
            We offer a range of travel services, including flight bookings,
            hotel reservations, tour packages, and car rentals. All services are
            subject to availability.
          </p>
          <h6 className="font-medium text-white text-lg">3. Payment Terms</h6>
          <p className="text-gray-400 text-base leading-relaxed mb-3">
            Certain services may require payment at the time of booking. All
            payments are non-refundable unless otherwise specified in the terms
            of the particular service.
          </p>
          <h6 className="font-medium text-white text-lg">
            4. Limitation of Liability
          </h6>
          <p className="text-gray-400 text-base leading-relaxed mb-3">
            We are not liable for any indirect, incidental, or consequential
            damages that may arise from the use of our travel services,
            including but not limited to delays, cancellations, or changes made
            by third-party providers.
          </p>
          <h6 className="font-medium text-white text-lg">
            5. Changes to Terms
          </h6>
          <p className="text-gray-400 text-base leading-relaxed mb-3">
            We reserve the right to modify these terms at any time. Please
            review these terms periodically to stay informed of any updates.
          </p>
          <h6 className="font-medium text-white text-lg">6. Contact Us</h6>
          <p className="text-gray-400 text-base leading-relaxed mb-3">
            If you have any questions regarding these terms or need assistance
            with your booking, please contact our customer service team.
          </p>
        </div>
        <div className="self-center flex flex-row items-center justify-evenly">
          <Button
            className="flex justify-center items-center py-2 px-4 text-sm font-semibold text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 transition-transform duration-200"
            onClick={() => alert("You rejected the terms.")}
          >
            Reject
          </Button>
          <Button
            className="flex justify-center items-center py-2 px-4 text-sm font-semibold text-white rounded-lg bg-indigo-600 shadow-sm hover:bg-indigo-500 hover:scale-105 transition-transform duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => alert("You accepted the terms.")}
          >
            Accept
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfUse;
