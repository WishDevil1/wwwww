import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-200 rounded-lg mb-4">
      <button
        className="flex justify-between items-center w-full p-4  hover:bg-gray-200 focus:outline-none"
        onClick={toggleAnswer}
      >
        <span className="text-lg font-medium text-gray-800">{question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 text-gray-600 transition-transform transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-50">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

const OutlookFAQ = () => {
  const faqs = [
    {
      question:
        "What is Exchange Online, and how does it differ from traditional email servers?",
      answer:
        "Exchange Online is a cloud-based messaging platform provided by Microsoft as part of Office 365. Unlike traditional email servers hosted on-premises, Exchange Online offers the advantages of scalability, reliability, and accessibility from anywhere with an internet connection.",
    },
    {
      question: "How does Exchange Online ensure data security and privacy?",
      answer:
        "SharePoint Online offers a variety of features, including document management, team collaboration, intranet and portals, workflow automation, enterprise search, and business intelligence.",
    },
    {
      question: "How can SharePoint Online benefit my organization?",
      answer:
        "Exchange Online implements various security measures, including encryption, data loss prevention (DLP) policies, multi-factor authentication (MFA), and advanced threat protection (ATP). These features work together to safeguard data and protect against unauthorized access, data breaches, and malicious attacks.",
    },
    {
      question:
        "Can I access Exchange Online from different devices and platforms?",
      answer:
        "Yes, Exchange Online is accessible from a wide range of devices and platforms, including desktop computers, laptops, tablets, and smartphones. Users can access their emails, calendars, contacts, and tasks using clients such as Outlook desktop, Outlook on the web (OWA), and the Outlook mobile app.",
    },
    {
      question:
        "How does Exchange Online handle email migration from on-premises servers or other email platforms?",
      answer:
        "Exchange Online provides tools and resources to facilitate seamless email migration, whether from on-premises Exchange servers, other email platforms, or even third-party email services. These migration tools help preserve data integrity and minimize downtime during the transition process.",
    },
   
  ];

  return (
    <div className="max-w-4xl mx-auto mt-0">
      <h1 className="text-3xl font-semibold text-[#1b1c44] mb-6 mx-8">
        Frequently Asked Questions
      </h1>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default OutlookFAQ;
