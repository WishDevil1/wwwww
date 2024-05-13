import React from "react";

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import OutlookFAQ from "./OutlookFAQ";
import GetMaxImg from "../../../../assets/GetMaxImg.jpeg";

const cardData = [
  {
    logoUrl: "https://example.com/logo1.png",
    heading: "Advanced Security Capabilities",
    paragraph:
      "Exchange Online helps protect your information with advanced capabilities. Anti-malware and anti-spam filtering protects mailboxes.",
  },
  {
    logoUrl: "https://example.com/logo2.png",
    heading: "eDiscovery",
    paragraph:
      "Run In-Place eDiscovery across Exchange, SharePoint, and Skype for Business data from a single interface through the eDiscovery Center",
  },
  {
    logoUrl: "https://example.com/logo2.png",
    heading: "Exchange Online Protection",
    paragraph:
      "Protect against span and malware, while maintaing access to email",
  },
  {
    logoUrl: "https://example.com/logo2.png",
    heading: "Exchange Server",
    paragraph:
      "Work smarter, anywhere with business email on your own  servers. ",
  },
  {
    logoUrl: "https://example.com/logo2.png",
    heading: "Outlook integration",
    paragraph:
      "Integration with Outlook means they’ll enjoy a rich, familiar email experience with offline access.",
  },
  {
    logoUrl: "https://example.com/logo2.png",
    heading: "Access from anywhere",
    paragraph:
      "Provide your users with anywhere access to email, calendar, and contacts on all major browsers and across devices.",
  },
  {
    logoUrl: "https://example.com/logo2.png",
    heading: "Getmax FastTrack for Microsoft 365",
    paragraph:
      "GetMAx FastTrack for Microsoft 365 is our customer success service designed to help you move to Microsoft 365 smoothly and with confidence, and realize business value faster.",
  },
  {
    logoUrl: "https://example.com/logo2.png",
    heading: "Exchange Online Archiving",
    paragraph:
      "Solve archiving, compliance, regulatory, and eDiscovery challanges",
  },
];

const OutlookAndExchangeOnline = () => {
  return (
    <>
      <Helmet>
        {/* Title */}
        <title>
          Microsoft 365 Outlook & Exchange Online: Seamless Communication
          Solutions
        </title>
        {/* Description */}
        <meta
          name="description"
          content="Discover the power of Microsoft 365 Outlook and Exchange Online for seamless communication and collaboration. Explore robust email management, calendar synchronization, and advanced productivity tools for your business needs."
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="http://localhost:5173/microsoft-365/outlook-exchange-online"
        />

        {/* Open Graph (OG) tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Microsoft 365 Outlook & Exchange Online: Seamless Communication Solutions"
        />
        <meta
          property="og:description"
          content="Discover the power of Microsoft 365 Outlook and Exchange Online for seamless communication and collaboration. Explore robust email management, calendar synchronization, and advanced productivity tools for your business needs."
        />
        <meta
          property="og:url"
          content="http://localhost:5173/microsoft-365/outlook-exchange-online"
        />
        <meta
          property="og:site_name"
          content="GetMax.Ae Microsoft 365 Managed Services"
        />
        <meta property="article:publisher" content="" />
        <meta property="article:published_time" content="" />
        <meta property="article:modified_time" content="" />
        <meta
          property="og:image"
          content="microsoft-365/outlook-exchange-online"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="629" />

        {/* Twitter tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="Pankaj Jain" />
        <meta name="twitter:label2" content="Est. reading time" />
        <meta name="twitter:data2" content="3 minutes" />

        {/* Facebook tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="YOUR_WEBSITE_URL" />
        <meta
          property="og:title"
          content="Discover the power of Microsoft 365 Outlook and Exchange Online for seamless communication and collaboration. Explore robust email management, calendar synchronization, and advanced productivity tools for your business needs."
        />
        <meta
          property="og:description"
          content="Discover the power of Microsoft 365 Outlook and Exchange Online for seamless communication and collaboration. Explore robust email management, calendar synchronization, and advanced productivity tools for your business needs."
        />
        <meta property="og:image" content="" />

        {/* LinkedIn tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.linkedin.com/company/getmax/"
        />
        <meta
          property="og:title"
          content="Discover the power of Microsoft 365 Outlook and Exchange Online for seamless communication and collaboration. Explore robust email management, calendar synchronization, and advanced productivity tools for your business needs."
        />
        <meta
          property="og:description"
          content="Discover the power of Microsoft 365 Outlook and Exchange Online for seamless communication and collaboration. Explore robust email management, calendar synchronization, and advanced productivity tools for your business needs."
        />
        <meta
          property="og:image"
          content="microsoft-365/outlook-exchange-online"
        />
        <meta property="og:site_name" content="YOUR_WEBSITE_NAME" />

        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Maximizing Your Microsoft 365 Cloud: GetMax Solutions in Dubai",
      "author": {
        "@type": "Person",
        "name": "Pankaj Jain"
      },
      "datePublished": "",
      "dateModified": "",
      "image": {
        "@type": "ImageObject",
        "url": "",
        "width": 1200,
        "height": 629
      },
      "publisher": {
        "@type": "Organization",
        "name": "GetMax.Ae",
        "logo": {
          "@type": "ImageObject",
          "url": "",
          "width": 1854,
          "height": 503
        }
      },
      "mainEntityOfPage": "",
      "url": "",
      "description": "Discover the power of Microsoft 365 Outlook and Exchange Online for seamless communication and collaboration. Explore robust email management, calendar synchronization, and advanced productivity tools for your business needs."
    }
    `}
        </script>
      </Helmet>
      <div className=" bg-gradient-to-l from-gray-100 to-blue-300">
        <main class="relative h-screen overflow-hidden bg-gradient-to-l from-gray-100 to-blue-300 dark:bg-gray-800">
          <div class="container mx-auto flex items-center justify-between ">
            <div class="w-full md:w-1/2 lg:w-2/5 text-center md:text-left">
              <h1 class="text-4xl md:text-6xl lg:text-6xl font-bold text-[#1b1c44] leading-tight mb-4">
                Microsoft 365
                <br class="hidden lg:inline" /> Exchange Online
              </h1>
              <p class="text-lg text-[#1b1c44] mb-6 leading-relaxed">
                Optimize your business operations with top-tier email and
                calendar management tailored for success.
              </p>
              <div class="flex mt-8">
                <a
                  href="#"
                  class="px-4 py-2 mr-4 text-black uppercase bg-gradient-to-r from-orange-500 to-pink-500 border-2 border-transparent rounded-lg text-md hover:text-white"
                >
                  Get started
                </a>
                <a
                  href="#"
                  class="px-4 py-2 text-pink-500 uppercase bg-transparent border-2 border-pink-500 rounded-lg dark:text-white hover:bg-pink-500 hover:text-white text-md"
                >
                  Read more
                </a>
              </div>
            </div>
            <div class="relative hidden sm:block sm:w-1/3 lg:w-3/5 py-0 pl-9   ">
              <img
                // src={HeroImage}
                src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/ExchangeHero_2x_RE4gLlt-1?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2150&hei=1536&qlt=95&fmt=png-alpha&fit=constrain"
                class="max-w-xs m-auto md:max-w-3xl  "
              />
            </div>
          </div>
        </main>

        <section>
          <section className="relative h-auto w-full bg-[#222831] min-h-[400px] overflow-hidden px-5 lg:px-20 ">
            <div className="absolute top-0 right-0 h-[30%] w-[30%] bg-gradient-to-tr from-emerald-200 to-emerald-500 blur-[130px]"></div>
            <div className="absolute bottom-0 left-0 h-[30%] w-[20%] bg-gradient-to-bl from-emerald-200 to-emerald-500 blur-[130px]"></div>
            <div className="p-5  grid grid-cols-1 lg:grid-cols-2 gap-10 lg:px-5 lg:py-10">
              <div>
                <h1 className="text-3xl lg:text-4xl @6xl:text-4xl font-semibold text-white ">
                  Optimize Productivity: Merge Intelligent Inbox, Dynamic
                  Calendaring, Perfect Fit Solutions
                  {/* <span className="text-orange-600">Microsoft 365</span>  */}
                </h1>
              </div>
              <div>
                <p className=" text-gray-300 ">
                  Exciting times ahead as we transition to Microsoft 365! Rest
                  assured, our team is here to make this journey seamless for
                  you, from planning to post-implementation support. Let's
                  unlock the full potential of Microsoft 365 together and
                  elevate your email experience with enhanced search, custom
                  add-ins, seamless integration, and tailored features for
                  ultimate productivity
                </p>
                {/* <button
        
                className="text-orange-600 mt-4 uppercase underline hover:text-orange-700"
              >
                Contact us
              </button> */}
              </div>
            </div>
          </section>
          <img
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/CLO19_azureKinectDK_017_1920x1080_RE4oRFN?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&qlt=85&fit=constrain"
            alt=""
            className="w-[80%] h-auto mx-auto -translate-y-32"
          />
        </section>

        <section>
          <div className=" px-2 pt-0 pb-10">
            <div id="features" className="mx-auto max-w-6xl">
              {/* <p className="text-center text-base font-semibold leading-7 text-primary-500">
                Features
              </p> */}
              <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Enhanced features integrated
              </h2>
              <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
                <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
                  <img
                    src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Icon_AdvancedSecurity_35x80_2x_RE4Kr2a?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=80&hei=35&qlt=100&fit=constrain"
                    alt=""
                    className="mx-auto h-10 w-18"
                  />
                  <h3 className="my-3 font-display font-medium">
                    Advanced Security Capabilities
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                    Exchange Online safeguards your data with advanced measures.
                    Benefit from anti-malware and anti-spam filtering, ensuring
                    protection for your mailboxes.
                  </p>
                </li>
                <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
                  <img
                    src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Icon_eDiscovery_35x80_2x_RE4Klrk?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=80&hei=35&qlt=100&fit=constrain"
                    alt=""
                    className="mx-auto h-10 w-18"
                  />
                  <h3 className="my-3 font-display font-medium">eDiscovery</h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                    Easily conduct In-Place eDiscovery across Exchange,
                    SharePoint, and Skype for Business data, all from a single
                    interface within the eDiscovery Center.
                  </p>
                </li>
                <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
                  <img
                    src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Icon_Reliability_35x80_2x_0_RE4Kr2u?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=80&hei=35&qlt=100&fit=constrain"
                    alt=""
                    className="mx-auto h-10 w-18"
                  />
                  <h3 className="my-3 font-display font-medium">
                    Exchange Online Protection
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                    Secure uninterrupted email access while defending against
                    spam and malware threats. Benefit from our advanced
                    solutions for robust protection.
                  </p>
                </li>
                <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
                  <img
                    src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Icon_SecurityAcrossDevices_35x80_2x_RE4KyVt?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=80&hei=35&qlt=100&fit=constrain"
                    alt=""
                    className="mx-auto h-10 w-18"
                  />
                  <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                    Exchange Server
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                    Unlock unparalleled efficiency by harnessing the power of
                    business email hosted on your own servers. Experience
                    seamless collaboration across geographies.
                  </p>
                </li>
                <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
                  <img
                    src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Icon_OutlookIntegration_35x80_2x_RE4KyVq?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=80&hei=35&qlt=100&fit=constrain"
                    alt=""
                    className="mx-auto h-10 w-18"
                  />
                  <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                    Outlook integration
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                    Experience the convenience of accessing emails offline
                    without compromising on functionality, enhancing
                    productivity wherever work takes you
                  </p>
                </li>
                <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
                  <img
                    src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Icon_AccessFromAnywhere_35x80_2x_RE4Klr7?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=80&hei=35&qlt=100&fit=constrain"
                    alt=""
                    className="mx-auto h-10 w-18"
                  />
                  <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                    Access from anywhere
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                    Offer your users unparalleled flexibility with seamless
                    access to email contacts across all major browsers and
                    devices, enabling productivity from anywhere.
                  </p>
                </li>
                <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
                  <img
                    src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Icon_MicrosoftFastTrack_35x80_2x_RE4KyVn?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=80&hei=35&qlt=100&fit=constrain"
                    alt=""
                    className="mx-auto h-10 w-18"
                  />
                  <h3 className="my-3 font-display font-medium">
                    Getmax FastTrack for Microsoft 365
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                    GetMAx FastTrack for Microsoft 365 is our customer success
                    service designed to help you move to Microsoft 365 smoothly
                    and with confidence.
                  </p>
                </li>
                <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
                  <img
                    src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Icon_InPlaceArchive_35x80_2x_RE4Kr2m?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=80&hei=35&qlt=100&fit=constrain"
                    alt=""
                    className="mx-auto h-10 w-18"
                  />
                  <h3 className="my-3 font-display font-medium">
                    Exchange Online Archiving
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                    Overcome archiving, compliance, and eDiscovery hurdles
                    seamlessly. Our solution provides robust tools to ensure
                    regulatory adherence and simplify data management.
                  </p>
                </li>
                <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
                  <img
                    src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Icon_DataSafeguards_35x80_2x_RE4KiUz?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=80&hei=35&qlt=100&fit=constrain"
                    alt=""
                    className="mx-auto h-10 w-18"
                  />
                  <h3 className="my-3 font-display font-medium">
                    Data safeguards
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                    Data loss prevention and robust security measures in
                    Exchange Online ensure sensitive information is protected
                    from unauthorized access or accidental sharing.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* <section className="flex flex-wrap justify-center">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="max-w-lg rounded overflow-hidden shadow-lg m-4 bg-white hover:bg-gray-100 transition duration-300 relative"
          >
            <div className="px-6 py-4 relative flex items-center">
              <img
                className="w-16 h-16 object-cover rounded-full border-2 border-white"
                src={card.logoUrl}
                alt="logo"
              />
              <div className="pl-4">
                <h2 className="font-bold text-xl mb-2 text-gray-800">
                  {card.heading}
                </h2>
                <p className="text-gray-700 text-base">{card.paragraph}</p>
              </div>
            </div>
          </div>
        ))}
      </section> */}

        <section>
          <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
            <div className="w-full items-center mx-auto max-w-screen-lg">
              <div className="group grid w-full grid-cols-2">
                <div>
                  <div className="pr-12">
                    <h3 className="mb-4 font-semibold text-3xl text-orange-600">
                      What else?
                    </h3>
                    <ul
                      role="list"
                      className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-700"
                    >
                      <li>
                        <strong>Advanced Features:</strong> Exchange Online
                        offers a suite of advanced features for enhanced
                        productivity and security
                      </li>
                      <li>
                        <strong>Retention Policies:</strong> Facilitate
                        effective email and data management, ensuring compliance
                        and streamlining practices.
                      </li>
                      <li>
                        <strong>Data Loss Prevention (DLP):</strong> Empowers
                        users to safeguard sensitive information by identifying,
                        monitoring, and protecting against potential breaches or
                        leaks
                      </li>
                      <li>
                        <strong>Robust Spam Policies:</strong> Utilize
                        sophisticated filtering mechanisms to keep inboxes clean
                        and secure from unwanted or malicious emails
                      </li>
                      <li>
                        {" "}
                        <strong>Shared Mailboxes:</strong> Enable collaborative
                        communication within organizations.
                      </li>
                      <li>
                        <strong>Shared Calendars:</strong> Facilitate efficient
                        scheduling and coordination among team members.
                      </li>

                      <li>
                        <strong>Global Address Lists:</strong> Streamline
                        contact management for enhanced communication
                        efficiency.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pr-16 relative flex flex-col before:block before:absolute before:h-1/6 before:w-4 before:bg-blue-500 before:bottom-0 before:right-0 before:rounded-lg  before:transition-all group-hover:before:bg-orange-300 overflow-hidden">
                  {/* <div className="absolute top-0 right-0 bg-gray-100 w-4/6 px-12 py-14 flex flex-col justify-center rounded-xl group-hover:bg-sky-600 transition-all">
                    <span className="block mb-4 font-bold group-hover:text-orange-300">
                      HERE WE ARE
                    </span>
                    <h2 className="text-white font-semibold text-2xl">
                      Embark on your Exchange Online journey with GetMax,your
                      trusted Microsoft Cloud Solution Partner
                    </h2>
                  </div> */}
                  <div className="absolute top-0 right-0 bg-gray-600 bg-opacity-50 backdrop-blur-md w-4/6 px-12 py-14 flex flex-col justify-center rounded-xl  transition-all">
                    <span className="block mb-4 font-bold group-hover:text-orange-300">
                      HERE WE ARE
                    </span>
                    <h2 className="text-white font-semibold text-2xl">
                      Embark on your Exchange Online journey with GetMax, your
                      trusted Microsoft Cloud Solution Partner
                    </h2>
                  </div>

                  <a
                    className="font-bold text-sm flex mt-2 mb-8 items-center gap-2"
                    href="#"
                  >
                    {/* <span>MORE ABOUT US</span> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </a>
                  <div className="rounded-xl overflow-hidden">
                    <img src={GetMaxImg} alt="GetMaxImg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class=" pt-0 md:px-8">
          <div class="py-0 max-w-screen-xl lg:py-16">
            <div class="mx-auto max-w-3xl text-center pb-12 md:pb-20">
              <h2 class="text-3xl font-semibold sm:text-4xl mb-2 text-slate-900">
                Compare Plans for Exchange Online
              </h2>
            </div>
            <div class="space-y-6 lg:grid lg:grid-cols-2 sm:gap-6  lg:space-y-0 ">
              <div class="flex flex-col p-6 mx-auto max-w-md text-center rounded-xl shadow-2xl xl:p-8  border border-base-300 shadow-primary/10 border-primary/10 transition hover:border-primary-focus/20 hover:shadow-primary-focus/20 bg-white">
                <h3 class="mb-0 text-2xl font-semibold">
                  Exchange Online (Plan 1)
                </h3>

                <div class="flex justify-center items-baseline my-6">
                  <span class="mr-2 text-5xl font-bold">$4.00</span>
                  <span class="">user/month</span>
                </div>
                <div class="flex justify-center items-baseline mb-2 h-6">
                  <p class="font-light sm:text-sm">
                    (Annual subscription–auto renews )
                  </p>
                </div>
                <ul role="list" class="mb-8 space-y-4 text-left">
                  <li class="flex items-center space-x-3">
                    <svg
                      class="w-6 h-6 text-green-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                    </svg>

                    <span class="text-base-content/80">
                      50 GB mailbox and messages up to 150 MB
                    </span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <svg
                      class="w-6 h-6 text-green-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                    </svg>
                    <span class="text-base-content/80 pt-4">
                      Outlook on the web provides a premium <br /> browser-based
                      experience
                    </span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <svg
                      class="w-6 h-6 text-green-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                    </svg>
                    <span class="text-base-content/80 pt-4">
                      Focused Inbox makes it easy to track <br /> email that
                      matters most
                    </span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <svg
                      class="w-6 h-6 text-green-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                    </svg>
                    <span class="text-base-content/80 pt-4">
                      Automatically move old messages to <br />
                      an In-Place Archive
                    </span>
                  </li>
                </ul>
                <button class="w-full font-bold gap-2 shadow rounded-full p-2 bg-orange-600 text-white">
                  Buy Now
                </button>
              </div>
              <div class="flex flex-col p-6 mx-auto max-w-md text-center rounded-xl shadow-2xl xl:p-8  border border-base-300 shadow-primary/10 border-primary/10 transition hover:border-primary-focus/20 hover:shadow-primary-focus/20 bg-white">
                <h3 class="mb-0 text-2xl font-semibold">
                  Exchange Online (Plan 2)
                </h3>

                <div class="flex justify-center items-baseline my-6">
                  <span class="mr-2 text-5xl font-bold">$8.00</span>
                  <span class="">user/month</span>
                </div>
                <div class="flex justify-center items-baseline mb-2 h-6">
                  <p class="font-light sm:text-sm">
                    (Annual subscription–auto renews )
                  </p>
                </div>
                <ul role="list" class="mb-8 space-y-4 text-left">
                  <li class="flex items-center space-x-3">
                    <svg
                      class="w-6 h-6 text-green-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                    </svg>

                    <span class="text-base-content/80 pt-4">
                      Enclude everything in Exchange Online (Plan 1)
                    </span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <svg
                      class="w-6 h-6 text-green-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                    </svg>
                    <span class="text-base-content/80 pt-4">
                      100 GB mailbox and messages up to 150 MB
                    </span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <svg
                      class="w-6 h-6 text-green-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                    </svg>
                    <span class="text-base-content/80 ">
                      Built-in data loss prevention (DLP)
                    </span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <svg
                      class="w-6 h-6 text-green-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                    </svg>
                    <span class="text-base-content/80 pt-4">
                      Cloud voicemail provides call answering, <br />
                      dial-in UI, and automated attendant.
                    </span>
                  </li>
                </ul>
                <button class="w-full font-bold gap-2 shadow rounded-full p-2 bg-orange-600 text-white">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </section>
        <OutlookFAQ />
      </div>
    </>
  );
};

function FeatureCard({ bgColor, icon, title, description }) {
  return (
    <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
      <span className={`p-5 rounded-full ${bgColor} text-white shadow-lg`}>
        <i className={icon}></i>
      </span>
      <p className="text-xl font-medium text-slate-700 mt-3">{title}</p>
      <p className="mt-2 text-sm text-slate-500">{description}</p>
    </div>
  );
}

export default OutlookAndExchangeOnline;

//COMPONENTS

// import React, { useState, useEffect } from 'react';
// import './styles.css'; // Import your CSS file

// function ModalVideo() {
//   const [modalOpen, setModalOpen] = useState(false);

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === 'Escape') {
//         setModalOpen(false);
//       }
//     };

//     document.addEventListener('keydown', handleKeyDown);

//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

//   return (
//     <div className="relative font-inter antialiased">
//       <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
//         <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
//           <div className="flex justify-center">
//             {/* Modal video component */}
//             <div className={`${modalOpen ? '' : '[&_[x-cloak]]:hidden'}`}>
//               {/* Video thumbnail */}
//               <button
//                 className="relative flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-3xl group"
//                 onClick={() => setModalOpen(true)}
//                 aria-controls="modal"
//                 aria-label="Watch the video"
//               >
//                 <img
//                   className="rounded-3xl shadow-2xl transition-shadow duration-300 ease-in-out"
//                   src="https://cruip-tutorials.vercel.app/modal-video/modal-video-thumb.jpg"
//                   width="768"
//                   height="432"
//                   alt="Modal video thumbnail"
//                 />
//                 {/* Play icon */}
//                 <svg
//                   className={`absolute pointer-events-none group-hover:scale-110 transition-transform duration-300 ease-in-out ${modalOpen ? 'hidden' : ''}`}
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="72"
//                   height="72"
//                 >
//                   <circle className="fill-white" cx="36" cy="36" r="36" fillOpacity=".8" />
//                   <path className="fill-indigo-500 drop-shadow-2xl" d="M44 36a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 32 29V43a.999.999 0 0 0 1.573.82l10-7A.995.995 0 0 0 44 36V36c0 .001 0 .001 0 0Z" />
//                 </svg>
//               </button>
//               {/* End: Video thumbnail */}

//               {/* Modal backdrop */}
//               <div
//                 className={`fixed inset-0 z-[99999] bg-black bg-opacity-50 transition-opacity ${modalOpen ? '' : 'hidden'}`}
//                 onClick={() => setModalOpen(false)}
//                 aria-hidden="true"
//               ></div>
//               {/* End: Modal backdrop */}

//               {/* Modal dialog */}
//               <div
//                 id="modal"
//                 className={`fixed inset-0 z-[99999] flex px-4 md:px-6 py-6 ${modalOpen ? '' : 'hidden'}`}
//                 role="dialog"
//                 aria-modal="true"
//               >
//                 <div className="max-w-5xl mx-auto h-full flex items-center">
//                   <div className="w-full max-h-full rounded-3xl shadow-2xl aspect-video bg-black overflow-hidden" onClick={() => setModalOpen(false)}>
//                     <video
//                       autoPlay
//                       width="1920"
//                       height="1080"
//                       loop
//                       controls
//                       onClick={(e) => e.stopPropagation()}
//                     >
//                       <source src="https://cruip-tutorials.vercel.app/modal-video/video.mp4" type="video/mp4" />
//                       Your browser does not support the video tag.
//                     </video>
//                   </div>
//                 </div>
//               </div>
//               {/* End: Modal dialog */}
//             </div>
//             {/* End: Modal video component */}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default ModalVideo;

// import React from 'react';
// import './styles.css'; // Import your CSS file

// function Features() {
//   return (
//     <div className="px-3 md:lg:xl:px-40 border-t border-b py-20 bg-opacity-10" style={{ backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png')"}}>
//       <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl shadow-neutral-100 border">
//         <FeatureCard
//           bgColor="bg-red-500"
//           icon="fas fa-users"
//           title="Most Experienced Team"
//           description="Team BrainEdge education is a bunch of highly focused, energetic set of people."
//         />
//         <FeatureCard
//           bgColor="bg-orange-500"
//           icon="fas fa-file-alt"
//           title="Best Test Preparation"
//           description="Know where you stand and what next to do to succeed."
//         />
//         <FeatureCard
//           bgColor="bg-yellow-500"
//           icon="fas fa-graduation-cap"
//           title="Admission Process Guidance"
//           description="Professional advice for higher education abroad and select the top institutions worldwide."
//         />
//         <FeatureCard
//           bgColor="bg-lime-500"
//           icon="fas fa-chart-line"
//           title="Best Track Record"
//           description="Yet another year! Yet another jewel in our crown!"
//         />
//         <FeatureCard
//           bgColor="bg-teal-500"
//           icon="fas fa-clipboard-list"
//           title="Free Mock Exams"
//           description="Get Topic-Wise Tests, Section-Wise, and mock tests for your preparation."
//         />
//         <FeatureCard
//           bgColor="bg-indigo-500"
//           icon="fas fa-passport"
//           title="Genuine Visa Advice"
//           description="Visa process by helping you create the necessary documentation."
//         />
//       </div>
//       <div className="w-full bg-indigo-600 shadow-xl shadow-indigo-200 py-10 px-20 flex justify-between items-center">
//         <p className="text-white">
//           <span className="text-4xl font-medium">Still Confused ?</span> <br /> <span className="text-lg">Book For Free Career Consultation Today ! </span>
//         </p>
//         <button className="px-5 py-3 font-medium text-slate-700 shadow-xl hover:bg-white duration-150 bg-yellow-400">BOOK AN APPOINTMENT</button>
//       </div>
//     </div>
//   );
// }

// function FeatureCard({ bgColor, icon, title, description }) {
//   return (
//     <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
//       <span className={`p-5 rounded-full ${bgColor} text-white shadow-lg`}>
//         <i className={icon}></i>
//       </span>
//       <p className="text-xl font-medium text-slate-700 mt-3">{title}</p>
//       <p className="mt-2 text-sm text-slate-500">{description}</p>
//     </div>
//   );
// }

// export default Features;

// components

//  <section>
//       <div class="py-16">
//         <div class="mx-auto px-6 max-w-6xl text-gray-500">
//           <div class="text-center">
//             <h2 class="text-4xl  text-[#1b1c44] dark:text-white font-semibold">
//               Discover the Magnificent Features Awaited
//             </h2>
//             <p class="mt-6 text-gray-700 dark:text-gray-300">
//               Harum quae dolore inventore repudiandae? orrupti aut temporibus
//               ariatur.
//             </p>
//           </div>
//           <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
//             <div class="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
//               <div
//                 aria-hidden="true"
//                 class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-blue-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
//               ></div>
//               <div class="relative">
//                 <div class="border border-blue-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-blue-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
//                   <svg
//                     class="text-[#000014] dark:text-white"
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="1em"
//                     height="1em"
//                     viewBox="0 0 128 128"
//                   >
//                     <defs>
//                       <linearGradient
//                         id="deviconAstro0"
//                         x1="882.997"
//                         x2="638.955"
//                         y1="27.113"
//                         y2="866.902"
//                         gradientTransform="scale(.1)"
//                         gradientUnits="userSpaceOnUse"
//                       >
//                         <stop offset="0" stop-color="currentColor"></stop>
//                         <stop offset="1" stop-color="currentColor"></stop>
//                       </linearGradient>
//                       <linearGradient
//                         id="deviconAstro1"
//                         x1="1001.68"
//                         x2="790.326"
//                         y1="652.45"
//                         y2="1094.91"
//                         gradientTransform="scale(.1)"
//                         gradientUnits="userSpaceOnUse"
//                       >
//                         <stop offset="0" stop-color="#ff1639"></stop>
//                         <stop
//                           offset="1"
//                           stop-color="#ff1639"
//                           stop-opacity="0"
//                         ></stop>
//                       </linearGradient>
//                     </defs>
//                     <path
//                       fill="url(#deviconAstro0)"
//                       d="M81.504 9.465c.973 1.207 1.469 2.836 2.457 6.09l21.656 71.136a90.079 90.079 0 0 0-25.89-8.765L65.629 30.28a1.833 1.833 0 0 0-3.52.004L48.18 77.902a90.104 90.104 0 0 0-26.003 8.778l21.758-71.14c.996-3.25 1.492-4.876 2.464-6.083a8.023 8.023 0 0 1 3.243-2.398c1.433-.575 3.136-.575 6.535-.575H71.72c3.402 0 5.105 0 6.543.579a7.988 7.988 0 0 1 3.242 2.402Zm0 0"
//                     ></path>
//                     <path
//                       fill="#ff5d01"
//                       d="M84.094 90.074c-3.57 3.055-10.696 5.137-18.903 5.137c-10.07 0-18.515-3.137-20.754-7.356c-.8 2.418-.98 5.184-.98 6.954c0 0-.527 8.675 5.508 14.71a5.671 5.671 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.62 11.62 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938c2.989-1.894 6.309-4 8.594-8.222a15.513 15.513 0 0 0 1.875-7.41a15.55 15.55 0 0 0-.734-4.735m0 0"
//                     ></path>
//                     <path
//                       fill="url(#deviconAstro1)"
//                       d="M84.094 90.074c-3.57 3.055-10.696 5.137-18.903 5.137c-10.07 0-18.515-3.137-20.754-7.356c-.8 2.418-.98 5.184-.98 6.954c0 0-.527 8.675 5.508 14.71a5.671 5.671 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.62 11.62 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938c2.989-1.894 6.309-4 8.594-8.222a15.513 15.513 0 0 0 1.875-7.41a15.55 15.55 0 0 0-.734-4.735m0 0"
//                     ></path>
//                   </svg>
//                 </div>

//                 <div class="mt-6 pb-6 rounded-b-[--card-border-radius]">
//                   <h2 text-2xl font-semibold text-black >Advanced security capabilities</h2>
//                   <p class="text-gray-700 dark:text-gray-300">
//                     Amet praesentium deserunt ex commodi tempore fuga
//                     voluptatem. Sit, sapiente.
//                   </p>
//                 </div>

//                 <div class="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800">
//                   <a
//                     href="#"
//                     download="/"
//                     class="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center"
//                   >
//                     <span>Download</span>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="1em"
//                       height="1em"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         fill="none"
//                         stroke="currentColor"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="m17 13l-5 5m0 0l-5-5m5 5V6"
//                       ></path>
//                     </svg>
//                   </a>
//                   <a
//                     href="#"
//                     class="group flex items-center rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 size-8 justify-center"
//                   >
//                     <span class="sr-only">Source Code</span>
//                     <svg
//                       class="size-5"
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="1em"
//                       height="1em"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         fill="currentColor"
//                         d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
//                       ></path>
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div
//               href="#"
//               class="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900"
//             >
//               <div
//                 aria-hidden="true"
//                 class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-green-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
//               ></div>
//               <div class="relative">
//                 <div class="border border-green-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-green-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="0.98em"
//                     height="1em"
//                     viewBox="0 0 256 263"
//                   >
//                     <defs>
//                       <linearGradient
//                         id="logosSupabaseIcon0"
//                         x1="20.862%"
//                         x2="63.426%"
//                         y1="20.687%"
//                         y2="44.071%"
//                       >
//                         <stop offset="0%" stop-color="#249361"></stop>
//                         <stop offset="100%" stop-color="#3ecf8e"></stop>
//                       </linearGradient>
//                       <linearGradient
//                         id="logosSupabaseIcon1"
//                         x1="1.991%"
//                         x2="21.403%"
//                         y1="-13.158%"
//                         y2="34.708%"
//                       >
//                         <stop offset="0%"></stop>
//                         <stop offset="100%" stop-opacity="0"></stop>
//                       </linearGradient>
//                     </defs>
//                     <path
//                       fill="url(#logosSupabaseIcon0)"
//                       d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
//                     ></path>
//                     <path
//                       fill="url(#logosSupabaseIcon1)"
//                       fill-opacity="0.2"
//                       d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
//                     ></path>
//                     <path
//                       fill="#3ecf8e"
//                       d="M106.399 4.37c6.717-8.461 20.338-3.826 20.5 6.976l1.037 157.984H23.037c-19.241 0-29.973-22.223-18.008-37.292z"
//                     ></path>
//                   </svg>
//                 </div>

//                 <div class="mt-6 pb-6 rounded-b-[--card-border-radius]">
//                   <p class="text-gray-700 dark:text-gray-300">
//                     Amet praesentium deserunt ex commodi tempore fuga
//                     voluptatem. Sit, sapiente.
//                   </p>
//                 </div>

//                 <div class="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800">
//                   <a
//                     href="#"
//                     download="/"
//                     class="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center"
//                   >
//                     <span>Download</span>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="1em"
//                       height="1em"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         fill="none"
//                         stroke="currentColor"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="m17 13l-5 5m0 0l-5-5m5 5V6"
//                       ></path>
//                     </svg>
//                   </a>
//                   <a
//                     href="#i"
//                     class="group flex items-center rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 size-8 justify-center"
//                   >
//                     <span class="sr-only">Source Code</span>
//                     <svg
//                       class="size-5"
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="1em"
//                       height="1em"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         fill="currentColor"
//                         d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
//                       ></path>
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div class="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
//               <div
//                 aria-hidden="true"
//                 class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-red-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
//               ></div>
//               <div class="relative">
//                 <div class="border border-red-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-red-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="0.95em"
//                     height="1em"
//                     viewBox="0 0 256 271"
//                   >
//                     <defs>
//                       <linearGradient
//                         id="logosAngularIcon0"
//                         x1="25.071%"
//                         x2="96.132%"
//                         y1="90.929%"
//                         y2="55.184%"
//                       >
//                         <stop offset="0%" stop-color="#e40035"></stop>
//                         <stop offset="24%" stop-color="#f60a48"></stop>
//                         <stop offset="35.2%" stop-color="#f20755"></stop>
//                         <stop offset="49.4%" stop-color="#dc087d"></stop>
//                         <stop offset="74.5%" stop-color="#9717e7"></stop>
//                         <stop offset="100%" stop-color="#6c00f5"></stop>
//                       </linearGradient>
//                       <linearGradient
//                         id="logosAngularIcon1"
//                         x1="21.863%"
//                         x2="68.367%"
//                         y1="12.058%"
//                         y2="68.21%"
//                       >
//                         <stop offset="0%" stop-color="#ff31d9"></stop>
//                         <stop
//                           offset="100%"
//                           stop-color="#ff5be1"
//                           stop-opacity="0"
//                         ></stop>
//                       </linearGradient>
//                     </defs>
//                     <path
//                       fill="url(#logosAngularIcon0)"
//                       d="m256 45.179l-9.244 145.158L158.373 0zm-61.217 187.697l-66.782 38.105l-66.784-38.105L74.8 199.958h106.4zM128.001 72.249l34.994 85.076h-69.99zM9.149 190.337L0 45.179L97.627 0z"
//                     ></path>
//                     <path
//                       fill="url(#logosAngularIcon1)"
//                       d="m256 45.179l-9.244 145.158L158.373 0zm-61.217 187.697l-66.782 38.105l-66.784-38.105L74.8 199.958h106.4zM128.001 72.249l34.994 85.076h-69.99zM9.149 190.337L0 45.179L97.627 0z"
//                     ></path>
//                   </svg>
//                 </div>

//                 <div class="mt-6 pb-6 rounded-b-[--card-border-radius]">
//                   <p class="text-gray-700 dark:text-gray-300">
//                     Amet praesentium deserunt ex commodi tempore fuga
//                     voluptatem. Sit, sapiente.
//                   </p>
//                 </div>
//                 <div class="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800">
//                   <a
//                     href="#"
//                     download="/"
//                     class="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center"
//                   >
//                     <span>Download</span>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="1em"
//                       height="1em"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         fill="none"
//                         stroke="currentColor"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="m17 13l-5 5m0 0l-5-5m5 5V6"
//                       ></path>
//                     </svg>
//                   </a>
//                   <a
//                     href="#"
//                     class="group flex items-center rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 size-8 justify-center"
//                   >
//                     <span class="sr-only">Source Code</span>
//                     <svg
//                       class="size-5"
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="1em"
//                       height="1em"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         fill="currentColor"
//                         d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
//                       ></path>
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div class="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
//               <div
//                 aria-hidden="true"
//                 class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-gray-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
//               ></div>
//               <div class="relative">
//                 <div class="border border-gray-500/10 flex relative *:relative *:size-6 *:m-auto  text-gray-950 dark:text-white size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="1em"
//                     height="1em"
//                     viewBox="0 0 15 15"
//                   >
//                     <path
//                       fill="currentColor"
//                       d="m4.5 4.5l.405-.293A.5.5 0 0 0 4 4.5zm3 9.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM5 12V4.5H4V12zm-.905-7.207l6.5 9l.81-.586l-6.5-9zM10 4v6h1V4z"
//                     ></path>
//                   </svg>
//                 </div>

//                 <div class="mt-6 pb-6 rounded-b-[--card-border-radius]">
//                   <p class="text-gray-700 dark:text-gray-300">
//                     Amet praesentium deserunt ex commodi tempore fuga
//                     voluptatem. Sit, sapiente.
//                   </p>
//                 </div>
//                 <div class="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800">
//                   <a
//                     href="#"
//                     download="/"
//                     class="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center"
//                   >
//                     <span>Download</span>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="1em"
//                       height="1em"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         fill="none"
//                         stroke="currentColor"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="m17 13l-5 5m0 0l-5-5m5 5V6"
//                       ></path>
//                     </svg>
//                   </a>
//                   <a
//                     href="#"
//                     class="group flex items-center rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 size-8 justify-center"
//                   >
//                     <span class="sr-only">Source Code</span>
//                     <svg
//                       class="size-5"
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="1em"
//                       height="1em"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         fill="currentColor"
//                         d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
//                       ></path>
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div class="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
//               <div
//                 aria-hidden="true"
//                 class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-yellow-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
//               ></div>
//               <div class="relative">
//                 <div class="border border-yellow-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-yellow-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="0.73em"
//                     height="1em"
//                     viewBox="0 0 256 351"
//                   >
//                     <defs>
//                       <filter
//                         id="logosFirebase0"
//                         width="200%"
//                         height="200%"
//                         x="-50%"
//                         y="-50%"
//                         filterUnits="objectBoundingBox"
//                       >
//                         <feGaussianBlur
//                           in="SourceAlpha"
//                           result="shadowBlurInner1"
//                           stdDeviation="17.5"
//                         ></feGaussianBlur>
//                         <feOffset
//                           in="shadowBlurInner1"
//                           result="shadowOffsetInner1"
//                         ></feOffset>
//                         <feComposite
//                           in="shadowOffsetInner1"
//                           in2="SourceAlpha"
//                           k2="-1"
//                           k3="1"
//                           operator="arithmetic"
//                           result="shadowInnerInner1"
//                         ></feComposite>
//                         <feColorMatrix
//                           in="shadowInnerInner1"
//                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
//                         ></feColorMatrix>
//                       </filter>
//                       <filter
//                         id="logosFirebase1"
//                         width="200%"
//                         height="200%"
//                         x="-50%"
//                         y="-50%"
//                         filterUnits="objectBoundingBox"
//                       >
//                         <feGaussianBlur
//                           in="SourceAlpha"
//                           result="shadowBlurInner1"
//                           stdDeviation="3.5"
//                         ></feGaussianBlur>
//                         <feOffset
//                           dx="1"
//                           dy="-9"
//                           in="shadowBlurInner1"
//                           result="shadowOffsetInner1"
//                         ></feOffset>
//                         <feComposite
//                           in="shadowOffsetInner1"
//                           in2="SourceAlpha"
//                           k2="-1"
//                           k3="1"
//                           operator="arithmetic"
//                           result="shadowInnerInner1"
//                         ></feComposite>
//                         <feColorMatrix
//                           in="shadowInnerInner1"
//                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
//                         ></feColorMatrix>
//                       </filter>
//                       <path
//                         id="logosFirebase2"
//                         d="m1.253 280.732l1.605-3.131l99.353-188.518l-44.15-83.475C54.392-1.283 45.074.474 43.87 8.188z"
//                       ></path>
//                       <path
//                         id="logosFirebase3"
//                         d="m134.417 148.974l32.039-32.812l-32.039-61.007c-3.042-5.791-10.433-6.398-13.443-.59l-17.705 34.109l-.53 1.744z"
//                       ></path>
//                     </defs>
//                     <path
//                       fill="#ffc24a"
//                       d="m0 282.998l2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.845 43.114 6.951z"
//                     ></path>
//                     <use
//                       fill="#ffa712"
//                       fill-rule="evenodd"
//                       href="#logosFirebase2"
//                     ></use>
//                     <use
//                       filter="url(#logosFirebase0)"
//                       href="#logosFirebase2"
//                     ></use>
//                     <path
//                       fill="#f4bd62"
//                       d="m135.005 150.38l32.955-33.75l-32.965-62.93c-3.129-5.957-11.866-5.975-14.962 0L102.42 87.287v2.86z"
//                     ></path>
//                     <use
//                       fill="#ffa50e"
//                       fill-rule="evenodd"
//                       href="#logosFirebase3"
//                     ></use>
//                     <use
//                       filter="url(#logosFirebase1)"
//                       href="#logosFirebase3"
//                     ></use>
//                     <path
//                       fill="#f6820c"
//                       d="m0 282.998l.962-.968l3.496-1.42l128.477-128l1.628-4.431l-32.05-61.074z"
//                     ></path>
//                     <path
//                       fill="#fde068"
//                       d="m139.121 347.551l116.275-64.847l-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.126 24.126 0 0 0 23.513.005"
//                     ></path>
//                     <path
//                       fill="#fcca3f"
//                       d="M254.354 282.16L221.402 79.218c-1.03-6.35-7.558-8.977-12.103-4.424L1.29 282.6l114.339 63.908a23.943 23.943 0 0 0 23.334.006z"
//                     ></path>
//                     <path
//                       fill="#eeab37"
//                       d="M139.12 345.64a24.126 24.126 0 0 1-23.512-.005L.931 282.015l-.93.983l115.607 64.548a24.126 24.126 0 0 0 23.513.005l116.275-64.847l-.285-1.752z"
//                     ></path>
//                   </svg>
//                 </div>

//                 <div class="mt-6 pb-6 rounded-b-[--card-border-radius]">
//                   <p class="text-gray-700 dark:text-gray-300">
//                     Amet praesentium deserunt ex commodi tempore fuga
//                     voluptatem. Sit, sapiente.
//                   </p>
//                 </div>
//                 <div class="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800">
//                   <a
//                     href="#"
//                     download="/"
//                     class="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center"
//                   >
//                     <span>Download</span>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="1em"
//                       height="1em"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         fill="none"
//                         stroke="currentColor"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="m17 13l-5 5m0 0l-5-5m5 5V6"
//                       ></path>
//                     </svg>
//                   </a>
//                   <a
//                     href="#"
//                     class="group flex items-center rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 size-8 justify-center"
//                   >
//                     <span class="sr-only">Source Code</span>
//                     <svg
//                       class="size-5"
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="1em"
//                       height="1em"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         fill="currentColor"
//                         d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
//                       ></path>
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div class="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
//               <div
//                 aria-hidden="true"
//                 class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-sky-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
//               ></div>
//               <div class="relative">
//                 <div class="border border-sky-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-sky-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="1em"
//                     height="1em"
//                     viewBox="0 0 128 128"
//                   >
//                     <path
//                       fill="#0080ff"
//                       d="M64.142 102.96H39.24V78.522h24.903ZM39.24 122.131H20.373v-19.173H39.24Zm-18.866-19.173H4.53V87.167h15.843Zm43.394 24.814v-24.814c26.41 0 46.784-25.94 36.597-53.388c-3.775-10.15-11.694-18.42-22.26-22.181c-27.167-9.772-53.2 10.527-53.2 36.468H0c0-41.354 40.37-74.064 84.52-60.53c19.242 6.017 34.334 21.055 40.37 40.23c13.581 43.985-19.245 84.214-61.123 84.214Zm0 0"
//                     ></path>
//                   </svg>
//                 </div>

//                 <div class="mt-6 pb-6 rounded-b-[--card-border-radius]">
//                   <p class="text-gray-700 dark:text-gray-300">
//                     Amet praesentium deserunt ex commodi tempore fuga
//                     voluptatem. Sit, sapiente.
//                   </p>
//                 </div>
//                 <div class="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800">
//                   <a
//                     href="#"
//                     download="/"
//                     class="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center"
//                   >
//                     <span>Download</span>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="1em"
//                       height="1em"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         fill="none"
//                         stroke="currentColor"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="m17 13l-5 5m0 0l-5-5m5 5V6"
//                       ></path>
//                     </svg>
//                   </a>
//                   <a
//                     href="#"
//                     class="group flex items-center rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 size-8 justify-center"
//                   >
//                     <span class="sr-only">Source Code</span>
//                     <svg
//                       class="size-5"
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="1em"
//                       height="1em"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         fill="currentColor"
//                         d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
//                       ></path>
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
