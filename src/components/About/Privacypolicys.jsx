import React from 'react'
import MainNavbar from '../Home/MainNavbar'

function Privacypolicys() {
  return (
    <div>
        <MainNavbar />
      <div className="privacy-policy bg-gray-50 py-10 px-5 mt-[3%]">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Privacy Policy</h2>
        <p className="text-lg text-gray-600 mb-10">
          Your privacy is important to us. This policy explains how we collect, use, and protect your information.
        </p>

        {/* Policy Details */}
        <div className="text-left max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">1. Information We Collect</h3>
          <p className="text-gray-600 mb-6">
            We may collect personal information such as your name, email address, phone number, and payment details
            when you use our services.
          </p>

          <h3 className="text-2xl font-semibold text-gray-700 mb-4">2. How We Use Your Information</h3>
          <p className="text-gray-600 mb-6">
            The information collected is used to provide and improve our services, process transactions, and
            communicate with you regarding updates or promotions.
          </p>

          <h3 className="text-2xl font-semibold text-gray-700 mb-4">3. Data Protection</h3>
          <p className="text-gray-600 mb-6">
            We implement industry-standard security measures to protect your personal information from unauthorized
            access, disclosure, or destruction.
          </p>

          <h3 className="text-2xl font-semibold text-gray-700 mb-4">4. Sharing Your Information</h3>
          <p className="text-gray-600 mb-6">
            We do not sell your personal information to third parties. However, we may share it with trusted partners
            to enhance our services, comply with legal obligations, or protect our rights.
          </p>

          <h3 className="text-2xl font-semibold text-gray-700 mb-4">5. Your Rights</h3>
          <p className="text-gray-600 mb-6">
            You have the right to access, update, or delete your personal information. Please contact us if you wish
            to exercise any of these rights.
          </p>

          <h3 className="text-2xl font-semibold text-gray-700 mb-4">6. Updates to This Policy</h3>
          <p className="text-gray-600 mb-6">
            We may update this privacy policy from time to time. Please review this page periodically for changes.
          </p>

          <h3 className="text-2xl font-semibold text-gray-700 mb-4">7. Contact Us</h3>
          <p className="text-gray-600 mb-6">
            If you have any questions about our privacy practices, please contact us at:
          </p>
          <p className="text-gray-600 mb-6">
            <span className="font-medium">Email:</span> Agrivisionindia@gmail.com
          </p>
          <p className="text-gray-600 mb-6">
            <span className="font-medium">Phone:</span> +919876543210
          </p>
        </div>

        {/* Back to Home Button */}
        <div className="mt-10">
          <a
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Privacypolicys
