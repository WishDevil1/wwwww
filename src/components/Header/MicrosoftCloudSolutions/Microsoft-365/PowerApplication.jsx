import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import OnedriveOne from "../../../../assets/onediveOne.mp4";
import OnedriveTwo from "../../../../assets/onedriveTwo.mp4";
import OnedriveThree from "../../../../assets/onedriveThree.mp4";
import OnedriveFour from "../../../../assets/onedriveFour.mp4";
import MicrosoftPowerPlatform from "../../../../assets/Microsoft-Power-Platform_videos_en-us-0x720-3266k.mp4";
import PowerCard from "./PowerCard";

const PowerApplication = () => {
  return (
    <>
      <div className="bg-gray-200 ">
        <Helmet>
          {/* Title */}
          <title>
            Unlock Efficiency with Microsoft 365 Power Applications | Getmax.ae
          </title>
          {/* Description */}
          <meta
            name="description"
            content="Empower your business with Microsoft 365 Power Applications. Explore custom app development, workflow automation, and data analysis solutions tailored to optimize your operations. Partner with Getmax.ae for expert support and implementation."
          />

          {/* Canonical URL */}
          <link rel="canonical" href="http://localhost:51730" />

          {/* Open Graph (OG) tags */}
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content=" Unlock Efficiency with Microsoft 365 Power Applications | Getmax.ae"
          />
          <meta
            property="og:description"
            content="Empower your business with Microsoft 365 Power Applications. Explore custom app development, workflow automation, and data analysis solutions tailored to optimize your operations. Partner with Getmax.ae for expert support and implementation"
          />
          <meta
            property="og:url"
            content="http://localhost:5173/microsoft-365/power-application"
          />
          <meta
            property="og:site_name"
            content="GetMax.Ae Microsoft 365 Managed Services"
          />
          <meta property="article:publisher" content="" />
          <meta property="article:published_time" content="" />
          <meta property="article:modified_time" content="" />
          <meta property="og:image" content="microsoft-365/power-application" />
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
          <meta property="og:title" content="c" />
          <meta
            property="og:description"
            content="Empower your business with Microsoft 365 Power Applications. Explore custom app development, workflow automation, and data analysis solutions tailored to optimize your operations. Partner with Getmax.ae for expert support and implementation"
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
            content="Unlock Efficiency with Microsoft 365 Power Applications | Getmax.ae"
          />
          <meta
            property="og:description"
            content="Empower your business with Microsoft 365 Power Applications. Explore custom app development, workflow automation, and data analysis solutions tailored to optimize your operations. Partner with Getmax.ae for expert support and implementation"
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
      "headline": "Unlock Efficiency with Microsoft 365 Power Applications | Getmax.ae",
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
      "description": "Empower your business with Microsoft 365 Power Applications. Explore custom app development, workflow automation, and data analysis solutions tailored to optimize your operations. Partner with Getmax.ae for expert support and implementation"
    }
    `}
          </script>
        </Helmet>

        <main class="relative h-screen overflow-hidden  dark:bg-gray-800">
          <div class="container mx-auto flex items-center justify-between ">
            <div class="w-full md:w-1/2 lg:w-2/5 text-center md:text-left">
              <h1 class="text-4xl md:text-6xl lg:text-6xl font-bold text-[#1b1c44] leading-tight mb-4">
                Microsoft Power
                <br class="hidden lg:inline" />{" "}
                <span class="text-orange-600">Platform</span>
              </h1>
              <p class="text-lg text-[#1b1c44] mb-6 leading-relaxed">
                Maximize team collaboration and efficiency with Microsoft Power
                Platform. Analyze data, build apps, automate processes, and
                create virtual agents to overcome challenges effectively.
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
              {/* <div className="text-start mt-4">
              <button
                onClick={handlePopupOpen}
                className="text-sm text-blue-700 hover:underline focus:outline-none"
              >
                Watch the video
              </button>
            </div> */}
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
          <div className=" px-2 pt-0 pb-10">
            <div id="features" className="mx-auto max-w-6xl">
              {/* <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl pt-10">
              Enhanced features integrated
            </h2> */}
              <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
                <li className="rounded-xl bg-white px-6 py-8 shadow-lg">
                  <img
                    src="https://learn.microsoft.com/en-us/learn/media/topics/cards/icon-card_certification_light.png"
                    alt=""
                    className="mx-auto h-14 w-22"
                  />
                  <h3 className="my-3 font-display font-medium">
                    Gain Accreditation
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                    Boost your career, attain recognition, and validate your
                    technical expertise through Microsoft Power Platform
                    certifications and examinations.
                  </p>
                </li>
                <li className="rounded-xl bg-white px-6 py-8 shadow-lg">
                  <img
                    src="https://learn.microsoft.com/en-us/training/media/topics/cards/icon-card_virtualtraining_light.png"
                    alt=""
                    className="mx-auto h-14 w-22"
                  />
                  <h3 className="my-3 font-display font-medium">
                    Online Training Events
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                    Explore Microsoft's Virtual Training Days: free,
                    instructor-led sessions in various languages and time zones
                    covering diverse topics for technical skill-building.
                  </p>
                </li>
                <li className="rounded-xl bg-white px-6 py-8 shadow-lg">
                  <img
                    src="https://learn.microsoft.com/en-us/training/media/topics/cards/icon-card_community_light.png"
                    alt=""
                    className="mx-auto h-14 w-22"
                  />
                  <h3 className="my-3 font-display font-medium">
                    Power Platform Community
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                    Engage in conversations, share updates, and exchange best
                    practices with fellow Microsoft professionals and peers in
                    the Power Platform Community.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="text-center mb-8 pt-8 ">
            <h1 className="text-4xl font-semibold text-[#1b1c44] mb-4">
              Here's what's buzzing and noteworthy
              {/* <span className="text-orange-600 font-bold">Offerings</span> */}
            </h1>
          </div>
          <div className="flex justify-center space-x-20 py-4">
            {/* Card 1 */}

            <div className="block rounded-lg bg-white shadow-md dark:bg-surface-dark w-80">
              <div
                className="relative overflow-hidden bg-cover bg-no-repeat"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                <img
                  className="rounded-t-lg"
                  src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Featured_News_image1?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=624&hei=266&qlt=94&fit=constrain"
                  alt="MigrationMicrosoftAzureCloudServices"
                />
                <a href="#!">
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>
              </div>
              <div className="px-6 py-6 text-surface dark:text-white">
                <h5 className="mb-2 text-lg font-semibold leading-tight text-black">
                  Automate Everything Feasible
                </h5>
                <p className="mb-4 text-sm text-start">
                  Discover how to establish organization-wide hyperautomation
                  using the latest AI functionalities in Power Automate.
                </p>
                <Link href="#" className="inline-block">
                  <button
                    variant="text"
                    className="flex items-center gap-2 text-[#1b1c44] text-sm font-medium "
                    // style={{ textTransform: "capitalize" }}
                  >
                    Talk to an expert
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>

            {/* Card 2 */}

            <div className="block rounded-lg bg-white shadow-md dark:bg-surface-dark w-80">
              <div
                className="relative overflow-hidden bg-cover bg-no-repeat"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                <img
                  className="rounded-t-lg"
                  src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Featured_News_image2?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=624&hei=268&qlt=95&fit=constrain"
                  alt="MigrationMicrosoftAzureCloudServices"
                />
                <a href="#!">
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>
              </div>
              <div className="px-6 py-6 text-surface dark:text-white">
                <h5 className="mb-2 text-lg font-semibold leading-tight text-black">
                  Accelerate Model-Driven App Development
                </h5>
                <p className="mb-4 text-sm text-start">
                  Master the swift integration of forms and other components
                  into your apps using Copilot seamlessly within Power Apps
                </p>
                <Link href="#" className="inline-block">
                  <button
                    variant="text"
                    className="flex items-center gap-2 text-[#1b1c44] text-sm font-medium "
                    // style={{ textTransform: "capitalize" }}
                  >
                    Talk to an expert
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="block rounded-lg bg-white shadow-md dark:bg-surface-dark w-80">
              <div
                className="relative overflow-hidden bg-cover bg-no-repeat"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                <img
                  className="rounded-t-lg"
                  src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Featured_News_image3?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=833&hei=358&qlt=85&fit=constrain"
                  alt="Microsoft 365DynamicsBusinessOperations"
                />
                <a href="#!">
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>
              </div>
              <div className="px-6 py-6 text-surface dark:text-white">
                <h5 className="mb-2 text-lg font-semibold leading-tight text-black">
                  Optimize Security and Governance Processes
                </h5>
                <p className="mb-4 text-sm text-start">
                  Discover strategies for enhancing governance and scaling
                  low-code development utilizing Copilot capabilities.
                </p>
                <Link href="#" className="inline-block">
                  <button
                    variant="text"
                    className="flex items-center gap-2 text-[#1b1c44] text-sm font-medium "
                    // style={{ textTransform: "capitalize" }}
                  >
                    Talk to an expert
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <PowerCard />

        <section className=" px-4 bg-gray-100 pt-[270px]">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-semibold text-center text-[#1b1c44] mb-6">
              Why Businesses Prefer Microsoft Power Platform
            </h1>
            {/* <p className="text-lg text-[#1b1c44] text-center pb-6">
              Discover how low-code solutions ignite innovation across teams.
            </p> */}
            <div className="flex justify-center items-center mb-8">
              <div className="relative">
                <video
                  className="w-full md:w-[640px] lg:w-[800px] h-[360px] md:h-[450px] lg:h-[450px]  overflow-hidden rounded-3xl "
                  src={MicrosoftPowerPlatform}
                  controls
                ></video>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="max-w-screen-xl mx-auto p-5 sm:p-4 md:px-16">
            <div class="rounded overflow-hidden flex flex-col max-w-6xl mx-auto">
              <a href="#">
                <img
                  class="w-full h-64 sm:h-72 md:h-80 object-cover rounded-t-lg shadow-md"
                  src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=625.0&amp;sharp=10&amp;w=1000"
                  alt="Sunset in the mountains"
                />
              </a>
              <div class="relative -mt-16 px-10 pt-5 pb-16 bg-white mx-10 rounded-lg">
                <a
                  href="#"
                  class="font-semibold text-3xl text-[#1b1c44]  transition duration-500 ease-in-out inline-block mb-2"
                >
                  Discover end-to-end business solutions that drive innovation.
                </a>
                <p class="text-gray-700 text-lg">
                  Effortlessly develop apps and workflows organization-wide
                  using low-code tools.
                </p>
              </div>
            </div>
          </div>
          <div className=" px-2 pt-0 pb-10">
            <div id="features" className="mx-auto max-w-6xl">
              <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
                <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
                  <img
                    src="https://www.microsoft.com/content/dam/microsoft/final/en-us/microsoft-brand/icons/Products_Logo_PBI.svg"
                    alt="Microsoft Power BI"
                    className="mx-auto h-10 w-18"
                  />
                  <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                    Microsoft Power BI
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                    Maximize efficiency with self-hosted business email,
                    fostering seamless collaboration across geographies.
                  </p>
                  <Link
                    to="#"
                    className="text-indigo-600 hover:text-indigo-800 transition duration-300 ease-in-out block mt-4 text-center"
                  >
                    Learn more
                  </Link>
                </li>
                <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
                  <img
                    src="https://www.microsoft.com/content/dam/microsoft/final/en-us/microsoft-brand/icons/Products_Logo_PAP.svg"
                    alt="Microsoft Power Apps"
                    className="mx-auto h-10 w-18"
                  />
                  <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                    Microsoft Power Apps
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                    Build and launch professional-grade apps and automate
                    workflows without additional coding.
                  </p>
                  <Link
                    to="#"
                    className="text-indigo-600 hover:text-indigo-800 transition duration-300 ease-in-out block mt-4 text-center"
                  >
                    Learn more
                  </Link>
                </li>
                <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
                  <img
                    src="https://www.microsoft.com/content/dam/microsoft/final/en-us/microsoft-brand/icons/Products_Logo_PAU.svg"
                    alt="Microsoft Power Automate"
                    className="mx-auto h-10 w-18"
                  />
                  <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                    Microsoft Power Automate
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                    Boost productivity by automating repetitive tasks and
                    workflows with process automation.
                  </p>
                  <Link
                    to="#"
                    className="text-indigo-600 hover:text-indigo-800 transition duration-300 ease-in-out block mt-4 text-center"
                  >
                    Learn more
                  </Link>
                </li>
                <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
                  <img
                    src="https://www.microsoft.com/content/dam/microsoft/final/en-us/microsoft-brand/icons/Products_Logo_PowerPages.svg"
                    alt="Microsoft Power Pages"
                    className="mx-auto h-10 w-18"
                  />
                  <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                    Microsoft Power Pages
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                    Create websites and customer solutions fast while securely
                    storing and managing data.
                  </p>
                  <Link
                    to="#"
                    className="text-indigo-600 hover:text-indigo-800 transition duration-300 ease-in-out block mt-4 text-center"
                  >
                    Learn more
                  </Link>
                </li>
                <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
                  <img
                    src="https://www.microsoft.com/content/dam/microsoft/final/en-us/microsoft-brand/icons/Products_Logo_PBI.svg"
                    alt="Microsoft Power BI"
                    className="mx-auto h-10 w-18"
                  />
                  <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                    Microsoft Power BI
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                    Maximize efficiency with self-hosted business email,
                    fostering seamless collaboration across geographies.
                  </p>
                  <Link
                    to="#"
                    className="text-indigo-600 hover:text-indigo-800 transition duration-300 ease-in-out block mt-4 text-center"
                  >
                    Learn more
                  </Link>
                </li>

                <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
                  <img
                    src="https://www.microsoft.com/content/dam/microsoft/final/en-us/microsoft-brand/icons/Products_Logo_PBI.svg"
                    alt="Microsoft Power BI"
                    className="mx-auto h-10 w-18"
                  />
                  <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                    Microsoft Power BI
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                    Maximize efficiency with self-hosted business email,
                    fostering seamless collaboration across geographies.
                  </p>
                  <Link
                    to="#"
                    className="text-indigo-600 hover:text-indigo-800 transition duration-300 ease-in-out block mt-4 text-center"
                  >
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 pt-0 px-4">
          <div>
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
              {/* Content Section */}
              <div className="lg:w-1/2 lg:ml-8">
                <h2 className="text-2xl md:text-2xl lg:text-2xl  text-[#1b1c44] mb-4">
                  Power App: Your Ultimate Backup Buddy
                </h2>
                <p className="text-sm text-[#1b1c44] mb-2 leading-relaxed">
                  Protect your valuable data against device failures, theft, or
                  unexpected disasters. With automatic backup features, your
                  files are continuously secured without any hassle. Rest easy
                  knowing that even in the face of adversity, your important
                  information remains safe and accessible.
                </p>
                <Link
                  to="/learn-more"
                  className="text-blue-500 hover:text-blue-700 transition duration-500 relative"
                >
                  Learn more
                </Link>
              </div>
              {/* Video Section */}
              <div className="lg:w-1/2 lg:mr-8 mb-8 lg:mb-0">
                <video
                  src={OnedriveOne}
                  alt="microsoft-365 onedrive image"
                  className="w-full h-auto"
                  autoPlay
                  muted // Add this to autoplay the video (usually required for autoplay)
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
                  className="w-full h-auto"
                  autoPlay
                  muted // Add this to autoplay the video (usually required for autoplay)
                  loop // Add this to loop the video
                />
              </div>
              {/* Content Section */}
              <div className="lg:w-1/2 lg:ml-8">
                <h2 className="text-2xl md:text-2xl lg:text-2xl text-[#1b1c44] mb-4">
                  Power Automation, Reconnect with Joy
                </h2>
                <p className="text-sm text-[#1b1c44] mb-2 leading-relaxed">
                  Capture and privately share cherished photos, videos, and
                  albums with loved ones. Whether it's a recent event or a
                  precious memory from the past, OneDrive brings your fondest
                  moments to life, together
                </p>
                <Link
                  to="/learn-more"
                  className="text-blue-500 hover:text-blue-700 transition duration-500 relative"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
              {/* Content Section */}
              <div className="lg:w-1/2 lg:ml-8">
                <h2 className="text-2xl md:text-2xl lg:text-2xl  text-[#1b1c44] mb-4">
                  Power BI
                </h2>
                <p className="text-sm text-[#1b1c44] mb-2 leading-relaxed">
                  our Content Safeguarded, Streamlined, and Always Up-to-Date on
                  the Go Effortlessly manage, edit, and arrange your files
                  across all devices, no matter where you are. Stay connected
                  even offline, with updates syncing seamlessly across your
                  devices.
                </p>
                <Link
                  to="/learn-more"
                  className="text-blue-500 hover:text-blue-700 transition duration-500 relative"
                >
                  Learn more
                </Link>
              </div>
              {/* Video Section */}
              <div className="lg:w-1/2 lg:mr-8 mb-8 lg:mb-0">
                <video
                  src={OnedriveThree}
                  alt="microsoft-365 onedrive image"
                  className="w-full h-auto"
                  autoPlay
                  muted // Add this to autoplay the video (usually required for autoplay)
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
                  src={OnedriveFour}
                  alt="microsoft-365 onedrive image"
                  className="w-full h-auto"
                  autoPlay
                  muted // Add this to autoplay the video (usually required for autoplay)
                  loop // Add this to loop the video
                />
              </div>
              {/* Content Section */}
              <div className="lg:w-1/2 lg:ml-8">
                <h2 className="text-2xl md:text-2xl lg:text-2xl text-[#1b1c44] mb-4">
                  Power Pages
                </h2>
                <p className="text-sm text-[#1b1c44] mb-2 leading-relaxed">
                  Seamlessly Integrate Your Digital World with Your Reality With
                  the OneDrive mobile app, carry your photos, videos, and files
                  wherever life leads you. Edit and share on the go, and
                  safeguard important documents and cherished memories by
                  scanning and storing them securely in the cloud.
                </p>
                <Link
                  to="/learn-more"
                  className="text-blue-500 hover:text-blue-700 transition duration-500 relative"
                >
                  Get the Mobile App Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PowerApplication;
