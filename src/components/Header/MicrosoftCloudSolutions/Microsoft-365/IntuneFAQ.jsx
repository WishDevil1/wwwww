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

const IntuneFAQ = () => {
  const faqs = [
    {
      question: "What is Microsoft Intune?",
      answer:
        "Microsoft Intune is a cloud-based service that focuses on mobile device management (MDM) and mobile application management (MAM). It helps organizations manage the devices their employees use to access company data, as well as the applications on those devices.",
    },
    {
      question: "What devices can be managed with Intune?",
      answer:
        "Intune can manage a variety of devices, including Windows, macOS, iOS, and Android devices. It can also manage devices that are part of the Internet of Things (IoT).",
    },
    {
      question: "What are the key features of Intune?",
      answer:
        "Some key features of Intune include device enrollment, policy management, application management, conditional access, and compliance reporting.",
    },
    {
      question: "How does Intune protect company data on mobile devices?",
      answer:
        "Intune protects company data on mobile devices by enforcing policies that control how data is accessed, used, and shared. It can also remotely wipe company data from devices that are lost, stolen, or no longer in use.",
    },
    {
      question: "Can Intune be used to manage applications on devices?",
      answer:
        "Yes, Intune can be used to manage both company-owned and employee-owned (BYOD) devices. It can deploy, update, and remove applications, as well as enforce policies that control how applications are used.",
    },
    {
      question:
        "Does Intune integrate with other Microsoft services?",
      answer:
        "Yes, Intune integrates with other Microsoft services, such as Azure Active Directory (Azure AD), Microsoft Endpoint Configuration Manager, and Microsoft 365, to provide a comprehensive management solution.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-semibold text-[#1b1c44] mb-6 mx-8">
        Frequently Asked Questions
      </h1>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default IntuneFAQ;