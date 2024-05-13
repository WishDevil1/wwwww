import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ReactPlayer from "react-player";
import Microsoft360sharePoint from "../../../../assets/Microsoft365sharepoint.mp4";
import SharepointCard from "./SharepointCard";
import SharepointColaboration from "./SharepointColaboration";
import Onedrive from "./Onedrive";
import SharepointFAQ from "./SharePointFAQ";
import OnedriveOne from "../../../../assets/sharepoint/How to use SharePoint _ Microsoft.mp4";
import OnedriveTwo from "../../../../assets/sharepoint/Overview of Microsoft Syntex.mp4";
import OnedriveThree from "../../../../assets/sharepoint/Turn content into knowledge with Microsoft SharePoint Syntex.mp4";
import OnedriveFour from "../../../../assets/sharepoint/Creating contracts management solution in Microsoft 365 with SharePoint Syntex.mp4";
import OnedriveFive from "../../../../assets/sharepoint/IntroducingMicrosoftSyntexplugins for Microsoft 365 Copilot.mp4";
import SharePointPrice from "./SharePointPrice";
const SharePointAndOneDrive = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Helmet>
        {/* Title */}
        <title>
          Microsoft 365 SharePoint & OneDrive: Secure Data Management Solutions
        </title>
        {/* Description */}
        <meta
          name="description"
          content="Discover Microsoft 365 SharePoint & OneDrive for secure data management and collaboration. Explore advanced document sharing, version control, and cloud storage solutions tailored to your business needs"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="http://localhost:5173/microsoft-365/sharepoint-one-drive"
        />

        {/* Open Graph (OG) tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content=" Microsoft 365 SharePoint & OneDrive: Secure Data Management Solutions"
        />
        <meta
          property="og:description"
          content="Discover Microsoft 365 SharePoint & OneDrive for secure data management and collaboration. Explore advanced document sharing, version control, and cloud storage solutions tailored to your business needs"
        />
        <meta
          property="og:url"
          content="http://localhost:5173/microsoft-365/sharepoint-one-drive"
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
          content="microsoft-365/sharepoint-one-drive"
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
          content="Microsoft 365 SharePoint & OneDrive: Secure Data Management Solutions"
        />
        <meta
          property="og:description"
          content="Discover Microsoft 365 SharePoint & OneDrive for secure data management and collaboration. Explore advanced document sharing, version control, and cloud storage solutions tailored to your business needs"
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
          content="Microsoft 365 SharePoint & OneDrive: Secure Data Management Solutions"
        />
        <meta
          property="og:description"
          content="Discover Microsoft 365 SharePoint & OneDrive for secure data management and collaboration. Explore advanced document sharing, version control, and cloud storage solutions tailored to your business needs"
        />
        <meta
          property="og:image"
          content="microsoft-365/solutions-and-offerings"
        />
        <meta property="og:site_name" content="YOUR_WEBSITE_NAME" />

        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Microsoft 365 SharePoint & OneDrive: Secure Data Management Solutions",
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
      "description": "Discover Microsoft 365 SharePoint & OneDrive for secure data management and collaboration. Explore advanced document sharing, version control, and cloud storage solutions tailored to your business needs"
    }
    `}
        </script>
      </Helmet>
      <div className="bg-gradient-to-l from-gray-100 to-blue-300 ">
        <main class="relative h-screen overflow-hidden bg-gradient-to-l from-gray-100 to-blue-300 dark:bg-gray-800">
          <div class="container mx-auto flex items-center justify-between ">
            <div class="w-full md:w-1/2 lg:w-2/5 text-center md:text-left">
              <h1 class="text-4xl md:text-6xl lg:text-6xl font-bold text-[#1b1c44] leading-tight mb-4">
                Microsoft 365
                <br class="hidden lg:inline" /> Sharepoint Online
              </h1>
              <p class="text-lg text-[#1b1c44] mb-6 leading-relaxed">
                Your Mobile, Intelligent Intranet Solution
              </p>
              <div class="flex mt-8">
                <Link
                  href="#"
                  class="px-4 py-2 mr-4 text-black uppercase bg-gradient-to-r from-orange-500 to-pink-500 border-2 border-transparent rounded-lg text-md hover:text-white"
                >
                  Get started
                </Link>
                <Link
                  href="#"
                  class="px-4 py-2 text-pink-500 uppercase bg-transparent border-2 border-pink-500 rounded-lg dark:text-white hover:bg-pink-500 hover:text-white text-md"
                >
                  Read more
                </Link>
              </div>
              <div className="text-start mt-4">
                <button
                  onClick={handlePopupOpen}
                  className="text-sm text-blue-700 hover:underline focus:outline-none"
                >
                  Watch the video
                </button>
              </div>
            </div>
            <div class="relative hidden sm:block sm:w-1/3 lg:w-3/5 py-0 pl-9   ">
              <img
                // src={HeroImage}
                src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/SharePointHero_RE4oulx?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&qlt=100&fmt=png-alpha&fit=constrain"
                class="max-w-xs m-auto md:max-w-4xl  "
              />
            </div>
          </div>
        </main>
        <section>
          <div className="p-6 pt-0 mt-0 mb-8 items-center text-center bg-gradient-to-l from-gray-100 to-blue-300">
            <h2 className="text-3xl font-semibold text-[#1b1c44] mb-2 mt-4">
              Empower your team with seamless collaboration and easy access to
              knowledge and applications
            </h2>
            <section className=" py-16 px-4">
              <div>
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
                  {/* Content Section */}
                  <div className="lg:w-1/2 lg:mr-8">
                    <h2 className="text-2xl md:text-2xl lg:text-2xl  text-[#1b1c44] mb-4">
                      Using Microsoft SharePoint Effectively
                    </h2>
                    <p className="text-lg text-[#1b1c44] mb-2 leading-relaxed">
                      Embrace SharePoint: Your collaboration hub. Share,
                      streamline, innovate – achieve together
                    </p>
                  </div>
                  {/* Video Section */}
                  <div className="lg:w-1/2 lg:ml-8 mb-8 lg:mb-0">
                    <video
                      src={OnedriveOne}
                      alt="microsoft-365 onedrive image"
                      className="w-full h-auto rounded-3xl"
                      controls
                      loop // Add this to loop the video
                    />
                  </div>
                </div>
              </div>
              <div className="mt-20">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
                  {/* Video Section */}
                  <div className="lg:w-1/2 lg:mr-8 mb-8 lg:mb-0">
                    <video
                      src={OnedriveTwo}
                      alt="microsoft-365 onedrive image"
                      className="w-full h-auto rounded-3xl"
                      controls // Add this to autoplay the video (usually required for autoplay)
                      loop // Add this to loop the video
                    />
                  </div>
                  {/* Content Section */}
                  <div className="lg:w-1/2 lg:ml-8">
                    <h2 className="text-2xl md:text-2xl lg:text-2xl text-[#1b1c44] mb-4">
                      Overview of Microsoft Syntex
                    </h2>
                    <p className="text-lg text-[#1b1c44] mb-2 leading-relaxed">
                      Unlocking new horizons in content management, empowered by
                      AI automation within SharePoint Syntex.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-20">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
                  {/* Content Section */}
                  <div className="lg:w-1/2 lg:mr-8">
                    <h2 className="text-2xl md:text-2xl lg:text-2xl  text-[#1b1c44] mb-4">
                      Turn content into knowledge with Microsoft Syntex
                    </h2>
                    <p className="text-lg text-[#1b1c44] mb-2 leading-relaxed">
                      Optimize content management with SharePoint Online Syntex.
                      Automate classification, boost productivity.
                    </p>
                  </div>
                  {/* Video Section */}
                  <div className="lg:w-1/2 lg:ml-8 mb-8 lg:mb-0">
                    <video
                      src={OnedriveThree}
                      alt="microsoft-365 onedrive image"
                      className="w-full h-auto rounded-3xl"
                      controls // Add this to autoplay the video (usually required for autoplay)
                      loop // Add this to loop the video
                    />
                  </div>
                </div>
              </div>
              <div className="mt-20">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
                  {/* Video Section */}
                  <div className="lg:w-1/2 lg:ml-8 mb-8 lg:mb-0">
                    <video
                      src={OnedriveFour}
                      alt="microsoft-365 onedrive image"
                      className="w-full h-auto rounded-3xl"
                      controls
                      loop // Add this to loop the video
                    />
                  </div>
                  {/* Content Section */}
                  <div className="lg:w-1/2 lg:ml-8">
                    <h2 className="text-2xl md:text-2xl lg:text-2xl text-[#1b1c44] mb-4">
                      Contract management solution with Sharepoint Syntex
                    </h2>
                    <p className="text-lg text-[#1b1c44] mb-2 leading-relaxed">
                      Build an advanced contract management solution with
                      SharePoint Online Syntex, optimizing processes with
                      automation and compliance features
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-20">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
                  {/* Content Section */}
                  <div className="lg:w-1/2 lg:mr-8">
                    <h2 className="text-2xl md:text-2xl lg:text-2xl text-[#1b1c44] mb-4">
                      SharePoint Syntex plugins for Microsoft 365 Copilot
                    </h2>
                    <p className="text-lg text-[#1b1c44] mb-2 leading-relaxed">
                      Enhance Microsoft 365 Copilot with Microsoft Syntex
                      plugins, revolutionizing productivity and automation
                    </p>
                  </div>
                  {/* Video Section */}
                  <div className="lg:w-1/2 lg:ml-8 mb-8 lg:mb-0 ">
                    <video
                      src={OnedriveFive}
                      alt="microsoft-365 onedrive image"
                      className="w-full h-auto rounded-3xl"
                      controls // Add this to loop the video
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
          {showPopup && (
            <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-80 z-50">
              <div className="bg-white p-4 rounded-lg shadow-2xl relative">
                <button
                  className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                  onClick={handlePopupClose}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="aspect-w-16 aspect-h-9">
                  <ReactPlayer
                    url={Microsoft360sharePoint}
                    controls
                    playing
                    config={{
                      file: {
                        attributes: {
                          muted: true,
                        },
                      },
                    }}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          )}
        </section>
        <section>
          <SharepointCard />
          <SharepointColaboration />
          {/* OneDrive Section */}
          <Onedrive />
          <SharePointPrice/>
          <SharepointFAQ />
        </section>
      </div>
    </>
  );
};

export default SharePointAndOneDrive;
