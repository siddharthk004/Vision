import React from "react";
import MainNavbar from "../Home/MainNavbar";

function Support() {
  return (
    <div>
      <MainNavbar />
      <div className="pt-[6vw] bg-gray-100 py-10 px-4 md:px-8 lg:px-16 ">
        <div className="container mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Need Help? We're Here for You!
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            Contact our support team for any questions, issues, or feedback.
          </p>

          {/* Support Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {/* Email Support */}
            <div className="bg-white shadow-md rounded-lg p-6 w-full">
              <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
                Email Us
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Send us an email and we'll respond as quickly as possible.
              </p>
              <a
                href="mailto:Agrivisionindia@gmail.com"
                className="inline-block mt-4 bg-blue-600 text-white px-5 py-2 rounded-md text-sm md:text-base hover:bg-blue-700 w-full"
              >
                Email Support
              </a>
            </div>

            {/* Phone Support */}
            <div className="bg-white shadow-md rounded-lg p-6 w-full">
              <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
                Call Us
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Talk directly to one of our customer support agents.
              </p>
              <a
                href="tel:+919876543210"
                className="inline-block mt-4 bg-green-600 text-white px-5 py-2 rounded-md text-sm md:text-base hover:bg-green-700 w-full"
              >
                Call Support
              </a>
            </div>

            {/* FAQ Section */}
            <div className="bg-white shadow-md rounded-lg p-6 w-full">
              <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
                FAQs
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Find answers to common questions in our FAQ section.
              </p>
              <a
                href="/faq"
                className="inline-block mt-4 bg-yellow-600 text-white px-5 py-2 rounded-md text-sm md:text-base hover:bg-yellow-700 w-full"
              >
                Visit FAQs
              </a>
            </div>
          </div>

          {/* Additional Contact Info */}
          <div className="mt-10 text-gray-600 text-sm md:text-base">
            <p>Still have questions? Reach us at:</p>
            <p className="mt-2">
              <span className="font-medium">Phone:</span> +91 9552450050
            </p>
            <p>
              <span className="font-medium">Email:</span> Agrivisionindia@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
