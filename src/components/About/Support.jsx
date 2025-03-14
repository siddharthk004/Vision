import React from 'react'
import MainNavbar from "../Home/MainNavbar";

function Support() {
  return (
    <div>
        <MainNavbar />
        <div className="mt-[3%] h-[93vh] support-section bg-gray-100 py-10 px-5">
      <div className="container mx-auto text-center mt-[10%]">
        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Need Help? We're Here for You!</h2>
        <p className="text-lg text-gray-600 mb-10">
          Contact our support team for any questions, issues, or feedback.
        </p>

        {/* Support Options */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* Email Support */}
          <div className="support-card bg-white shadow-md rounded-lg p-6 w-80">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Email Us</h3>
            <p className="text-gray-600">
              Send us an email and we'll respond as quickly as possible.
            </p>
            <a
              href="mailto:Agrivisionindia@gmail.com"
              className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Email Support
            </a>
          </div>

          {/* Phone Support */}
          <div className="support-card bg-white shadow-md rounded-lg p-6 w-80">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Call Us</h3>
            <p className="text-gray-600">
              Talk directly to one of our customer support agents.
            </p>
            <a
              href="tel:+919876543210"
              className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
            >
              Call Support
            </a>
          </div>

          {/* FAQ Section */}
          <div className="support-card bg-white shadow-md rounded-lg p-6 w-80">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">FAQs</h3>
            <p className="text-gray-600">
              Find answers to common questions in our FAQ section.
            </p>
            <a
              href="/faq"
              className="inline-block mt-4 bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700"
            >
              Visit FAQs
            </a>
          </div>
        </div>

        {/* Additional Contact Info */}
        <div className="mt-10 text-gray-600">
          <p>Still have questions? Reach us at:</p>
          <p className="mt-2">
            <span className="font-medium">Phone:</span> +919876543210
          </p>
          <p>
            <span className="font-medium">Email:</span> Agrivisionindia@gmail.com
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Support
