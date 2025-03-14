import React from "react";

function Faq() {
  const faqs = [
    {
      question: "What is AgriVision?",
      answer:
        "AgriVision is an innovative platform designed to help farmers detect crop diseases and recommend pesticides based on crop leaf scans."
    },
    {
      question: "How do I scan a crop leaf?",
      answer:
        "You can use your smartphone or a scanner to capture a clear image of the crop leaf and upload it through our platform."
    },
    {
      question: "What types of crops are supported on AgriVision?",
      answer:
        "Currently, AgriVision supports detection for 14 major crop diseases, including those affecting cotton, wheat, and maize. More crops will be added in the future."
    },
    {
      question: "Are the pesticide recommendations safe to use?",
      answer:
        "Yes, our pesticide recommendations are based on expert agricultural research and are tailored to ensure the safety and efficacy of your crops."
    },
    {
      question: "Is there a cost for using AgriVision services?",
      answer:
        "Basic services like disease detection are free, but advanced analytics and additional recommendations may come with a nominal subscription fee."
    },
    {
      question: "How accurate are the disease detections?",
      answer:
        "Our detection algorithms are powered by AI and have an accuracy rate of over 90%. However, we recommend consulting with an agronomist for critical issues."
    },
    {
      question: "Can I get a detailed report of the detected disease?",
      answer:
        "Yes, you can download a detailed PDF report after the disease detection process is complete."
    },
    {
      question: "Does AgriVision work offline?",
      answer:
        "No, you need an active internet connection to upload crop leaf images and access the results."
    },
    {
      question: "Can I track my farming progress over time?",
      answer:
        "Yes, registered users can access their farming history, disease reports, and other analytics directly on their dashboard."
    },
    {
      question: "How do I contact support for AgriVision?",
      answer:
        "You can reach us at support@agrivision.com or call our 24/7 helpline at +123-456-7890."
    },
    {
      question: "What devices are compatible with AgriVision?",
      answer:
        "AgriVision works on any device with a browser, including smartphones, tablets, and desktop computers."
    },
    {
      question: "How do I create an account on AgriVision?",
      answer:
        "Click on the 'Sign Up' button on the home page, fill out the registration form, and verify your email address to get started."
    },
    {
      question: "Can I contribute to AgriVision's database?",
      answer:
        "Yes, we welcome contributions. You can share leaf images or information about diseases to help us improve our platform."
    },
    {
      question: "Is my data secure on AgriVision?",
      answer:
        "Absolutely! We use industry-standard encryption and privacy measures to ensure your data is secure and never shared without your consent."
    }
  ];

  return (
    <div className="faq-section bg-gray-100 py-10 px-5">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600 mb-10">
          Find answers to the most common questions about AgriVision.
        </p>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto text-left">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
