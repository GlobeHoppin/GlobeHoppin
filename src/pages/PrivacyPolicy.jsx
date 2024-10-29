import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

function PrivacyPolicy() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Adjust the duration as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="relative isolate px-6 pt-14 lg:px-8 bg-gradient-to-r from-blue-50 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <PageNav />
        <div className="-mt-6 mx-auto py-12 sm:py-24 lg:py-16 text-gray-200 max-w-3xl">
          <section className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8 lg:p-12">
            <h2
              className={`mb-8 text-5xl font-thin tracking-wide text-center text-gray-800 dark:text-gray-200 transition-transform duration-700 ${
                isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
              }`}
            >
              Privacy Policy
            </h2>
            <p className="mb-10 text-lg font-light text-center text-gray-600 dark:text-gray-400">
              Learn how we collect, use, and safeguard your personal information when you use our services.
            </p>

            {/* Information Collection Section */}
            <div className="space-y-10">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  Information Collection
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We gather various types of information, including:
                </p>
                <ul className="list-disc list-inside mt-4 text-gray-700 dark:text-gray-300 space-y-2">
                  <li><strong>Personal Information:</strong> Includes name, email, and profile data provided directly by you.</li>
                  <li><strong>Usage Data:</strong> Information like pages visited and interactions, to enhance user experience.</li>
                  <li><strong>Location Data:</strong> Collected to enable location-specific features and improve app functionality.</li>
                </ul>
              </div>

              {/* Use of Information Section */}
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  Use of Information
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We use your data to:
                </p>
                <ul className="list-disc list-inside mt-4 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Provide personalized content and features</li>
                  <li>Analyze trends to enhance our services</li>
                  <li>Ensure security and resolve technical issues</li>
                  <li>Send updates and notifications based on your interests</li>
                </ul>
              </div>

              {/* Data Sharing and Disclosure Section */}
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  Data Sharing and Disclosure
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We respect your privacy and limit data sharing as follows:
                </p>
                <ul className="list-disc list-inside mt-4 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Trusted partners for service improvements</li>
                  <li>Legal obligations and compliance with authorities</li>
                  <li>Potential business mergers or acquisitions</li>
                </ul>
              </div>

              {/* Data Security Section */}
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  Data Security
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We implement robust security practices to protect your data, including encryption, secure access, and regular monitoring. However, no data transmission over the internet is fully secure.
                </p>
              </div>

              {/* Your Rights Section */}
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  Your Rights
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  You can:
                </p>
                <ul className="list-disc list-inside mt-4 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Request access to your data</li>
                  <li>Correct inaccurate information</li>
                  <li>Request data deletion in certain situations</li>
                  <li>Withdraw consent for data processing</li>
                </ul>
              </div>

              {/* Changes to Privacy Policy Section */}
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  Changes to this Privacy Policy
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Our policy may change periodically. We encourage you to review it regularly for updates.
                </p>
              </div>

              {/* Contact Us Section */}
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  Contact Us
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  For any questions or concerns, reach out to us at:
                </p>
                <address className="not-italic mt-2 text-gray-700 dark:text-gray-300">
                  support@globehoppin.com
                </address>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
