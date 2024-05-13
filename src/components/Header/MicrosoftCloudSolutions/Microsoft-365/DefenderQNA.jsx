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

const DedenderQNA = () => {
  const faqs = [
    {
      question: "How is Teams Premium diffrenent than Teams",
      answer:
        "Teams Premium is a new offering that builds on the current Teams experience with additional features that help make Teams meetings even more personalized, intelligent, and protected. It also enables premium capabilities for additional meeting scenarios, including Virtual Appointments and webinars.",
    },
    {
      question: "Who is Teams Premium for?",
      answer:
        "Teams Premium is for organizations that want to get the most out of their virtual meetings by making them more personalized, intelligent, and protected. It is available as an add-on subscription for commercial, government, and nonprofit users licensed for Microsoft Teams.",
    },
    {
      question: "Where can I learn more about Teams Premium?",
      answer:
        "Learn more about Teams Premium from the Teams blog. You may also sign up to stay informed about the latest Teams Premium news, updates, and announcements.",
    },
    {
      question: "Where can I try Virtual Appointments?",
      answer:
        "Users licensed for Microsoft Teams can start using basic virtual appointment capabilities today with Bookings. Get started by creating a Bookings schedule. Enhanced capabilities will become available at launch.",
    },
    {
      question: "How are Teams Premium webinars different from Teams webinars?",
      answer:
        "New webinar experiences in Teams Premium help deepen connections and engagement with internal and external audiences. Current webinar functionality includes registration for up to 1,000 attendees, a co-organizer role, interactivity with Q&A, attendee reporting, and Microsoft Dynamics 365 marketing compatibility. With Teams Premium, you’ll get advanced functionality, including a registration waitlist and manual approvals, automated reminder emails, a virtual green room for hosts and presenters, and controls to manage what attendees see.",
    },
    {
      question:
        "Can I use Microsoft Mesh immersive sppaces and avatars in Teams?",
      answer:
        "Avatars and immersive spaces are available to use in Microsoft 365 and Office 365 subscriptions that have a Teams license, or with a standalone offering of Teams Essentials for small and medium-sized business customers or Teams Enterprise for enterprise customers. Administrators enable avatars and immersive spaces in the Teams admin center. To get started with avatars in Teams, simply turn off the camera in any Teams meeting, and from the More menu, select Effects and avatars, then choose from your custom avatars. Immersive spaces in Teams is available in any Teams meeting. To join an immersive space, select the View menu and then select Immersive space (3D).",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-semibold text-[#1b1c44] mb-10 mx-8 ">
        Frequently Asked Questions
      </h1>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default DedenderQNA;