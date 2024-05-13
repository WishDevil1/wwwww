import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Microsoft360sharePoint from "../../../../assets/Microsoft365sharepoint.mp4";
import IntuneCard from "./IntuneCard";
import IntuneFAQ from "./IntuneFAQ";

const MicrosoftIntune = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };
  const handleContactUsClick = () => {
    const contactFormSection = document.getElementById("contact-form-section");
    if (contactFormSection) {
      contactFormSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Helmet>
        {/* Title */}
        <title>
          Streamline Device Management with Microsoft 365 Intune | Getmax.ae
        </title>
        {/* Description */}
        <meta
          name="description"
          content="Optimize device management with Microsoft 365 Intune. Explore centralized control, security enforcement, and app management solutions tailored to your business needs. Partner with Getmax.ae for expert support and implementation."
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="http://localhost:5173/microsoft-365/microsoft-365-intune"
        />

        {/* Open Graph (OG) tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Enhance Security with Microsoft 365 Defender | Getmax.ae"
        />
        <meta
          property="og:description"
          content="Protect your organization with Microsoft 365 Defender. Explore advanced threat protection, security management, and endpoint security solutions tailored to safeguard your business. Partner with Getmax.ae for expert support and implementation."
        />
        <meta
          property="og:url"
          content="http://localhost:5173/microsoft-365-defender"
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
      "headline": "Streamline Device Management with Microsoft 365 Intune | Getmax.ae",
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
      "description": "Optimize device management with Microsoft 365 Intune. Explore centralized control, security enforcement, and app management solutions tailored to your business needs. Partner with Getmax.ae for expert support and implementation."
    }
    `}
        </script>
      </Helmet>
      <div className="bg-gradient-to-l from-gray-100 to-blue-300 pb-20 ">
        <main class="relative h-screen overflow-hidden bg-gradient-to-l from-gray-100 to-blue-300 dark:bg-gray-800">
          <div class="container mx-auto flex items-center justify-between ">
            <div class="w-full md:w-1/2 lg:w-2/5 text-center md:text-left">
              <h1 class="text-4xl md:text-6xl lg:text-6xl font-bold text-[#1b1c44] leading-tight mb-4 mt-12">
                Microsoft Intune:
                <br className="hidden lg:inline bg-orange-600" /> Empowering
                Endpoint Management
              </h1>
              <p class="text-lg text-[#1b1c44] mb-6 leading-relaxed">
                Your command center for endpoint management.
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
            <div class="relative hidden sm:block sm:w-1/3 lg:w-3/5 py-0 pl-[100px] mt-10  ">
              <img
                // src={HeroImage}
                src="https://techcommunity.microsoft.com/t5/image/serverpage/image-id/408602i3E978B0B399B2A06/image-size/large?v=v2&px=999"
                class="max-w-3xs m-auto md:max-w-3xl h-[500px] rounded-3xl "
              />
            </div>
          </div>
        </main>

        <section>
          <div className="p-6 pt-0 mt-0 mb-8 items-center text-center bg-gradient-to-l from-gray-100 to-blue-300">
            <h2 className="text-2xl font-semibold text-[#1b1c44] mb-2 mt-4">
              Three new products are now part of the Microsoft Intune Suite
            </h2>
            <p className="text-lg text-[#1b1c44] mb-0">
              Explore how Microsoft Intune enables IT to configure and protect
              endpoints for better hybrid work experiences.
            </p>
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
        <section class="overflow-hidden  py-8 sm:py-16">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div class="lg:pr-8 lg:pt-4">
                <div class="lg:max-w-lg">
                  <h2 class="text-base font-semibold leading-7 text-orange-600">
                    Produce faster
                  </h2>
                  <p class="mt-2 text-3xl font-bold tracking-tight text-[#1b1c44]  sm:text-4xl">
                    Experience Microsoft Intune Today
                  </p>
                  <p class="mt-6 text-lg leading-8 text-gray-800">
                    "Integrate Advanced Endpoint Management & Security with
                    Intune Suite"
                  </p>
                  <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    <div class="relative pl-9">
                      <dt class="inline font-semibold text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          class="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        >
                          <path d="M3.196 12.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 12.87z"></path>
                          <path d="M3.196 8.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 8.87z"></path>
                          <path d="M10.38 1.103a.75.75 0 00-.76 0l-7.25 4.25a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.76 0l7.25-4.25a.75.75 0 000-1.294l-7.25-4.25z"></path>
                        </svg>
                        Simplify endpoint management
                      </dt>
                      <dd class="inline">
                        Unify your endpoint management solutions and workflows
                        in one place, reducing complexity for IT and security
                        operations
                      </dd>
                    </div>
                    <div class="relative pl-9">
                      <dt class="inline font-semibold text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          class="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        Strengthen security posture
                      </dt>
                      <dd class="inline">
                        Ensure device health and compliance by using Microsoft
                        Security signals and advanced endpoint management
                        capabilities to mitigate cyberthreats and protect
                        corporate data.
                      </dd>
                    </div>
                    <div class="relative pl-9">
                      <dt class="inline font-semibold text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          class="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M14.5 10a4.5 4.5 0 004.284-5.882c-.105-.324-.51-.391-.752-.15L15.34 6.66a.454.454 0 01-.493.11 3.01 3.01 0 01-1.618-1.616.455.455 0 01.11-.494l2.694-2.692c.24-.241.174-.647-.15-.752a4.5 4.5 0 00-5.873 4.575c.055.873-.128 1.808-.8 2.368l-7.23 6.024a2.724 2.724 0 103.837 3.837l6.024-7.23c.56-.672 1.495-.855 2.368-.8.096.007.193.01.291.01zM5 16a1 1 0 11-2 0 1 1 0 012 0z"
                            clip-rule="evenodd"
                          ></path>
                          <path d="M14.5 11.5c.173 0 .345-.007.514-.022l3.754 3.754a2.5 2.5 0 01-3.536 3.536l-4.41-4.41 2.172-2.607c.052-.063.147-.138.342-.196.202-.06.469-.087.777-.067.128.008.257.012.387.012zM6 4.586l2.33 2.33a.452.452 0 01-.08.09L6.8 8.214 4.586 6H3.309a.5.5 0 01-.447-.276l-1.7-3.402a.5.5 0 01.093-.577l.49-.49a.5.5 0 01.577-.094l3.402 1.7A.5.5 0 016 3.31v1.277z"></path>
                        </svg>
                        Reduce overall cost{" "}
                      </dt>
                      <dd class="inline">
                        Increase efficiency by consolidating vendors and save
                        more with cost-effective licensing. Improve end-user
                        productivity and performance across devices.
                      </dd>
                    </div>
                  </dl>
                </div>
                <div class="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Start a free trial
                  </a>
                  <a
                    href="#"
                    class="text-sm font-semibold leading-6 text-gray-700"
                  >
                    See plan for pricing
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              <img
                src="https://techcommunity.microsoft.com/t5/image/serverpage/image-id/291923iDA322D2CD8152E0C/image-size/large?v=v2&px=999"
                alt="Product screenshot"
                class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width="2432"
                height="1442"
              />
            </div>
          </div>
        </section>
        <section class="sm:mt-6 lg:mt-0 mt-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="my-10 mx-auto max-w-7xl px-2 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-4 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row ">
            <div class="sm:text-center lg:text-left mt-16">
              <h1 class="text-3xl tracking-tight font-semibold text-gray-800 sm:text-5xl md:text-3xl">
                <span class="block xl:inline">
                  Microsoft Intune securely manages
                </span>
                <span class="block text-orange-600 xl:inline">
                  identities, manages apps, and manages devices
                </span>
              </h1>
              <p class="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Microsoft Intune is a cloud-based endpoint management solution.
                It manages user access to organizational resources and
                simplifies app and device management across your many devices,
                including mobile devices, desktop computers, and virtual
                endpoints.
              </p>
            </div>

            <div class="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
              <img
                class="h-66 w-full object-cover sm:h-72 md:h-100 lg:w-full lg:h-full rounded-2xl"
                src="https://learn.microsoft.com/en-us/mem/intune/fundamentals/media/what-is-intune/what-is-intune.png"
                alt=""
              />
            </div>
          </div>
        </section>
        <section>
          <div className=" px-2 pt-0 pb-10">
            <div id="features" className="mx-auto max-w-6xl">
              {/* <p className="text-center text-base font-semibold leading-7 text-primary-500">
                Features
              </p> */}
              <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Consolidate Endpoint Protection and Management in a Single
                Platform
              </h2>
              <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3 ">
                <li className="rounded-xl bg-white px-6 py-8 shadow-xl hover:shadow-md hover:-translate-y-1 transition duration-300">
                  <img
                    src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Icon_AdvancedSecurity_35x80_2x_RE4Kr2a?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=80&hei=35&qlt=100&fit=constrain"
                    alt=""
                    className="mx-auto h-10 w-18"
                  />
                  <h3 className="my-3 font-display font-medium">
                    Simplify endpoint management
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                    Cut costs and complexity by managing any device with a
                    single, unified tool already built into Microsoft 365. Gain
                    full visibility into the health, compliance, and security
                    status of your cloud and cloud-connected endpoints.
                  </p>
                </li>

                <li className="rounded-xl bg-white px-6 py-8 shadow-xl hover:-translate-y-1 transition duration-300 ">
                  <img
                    src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Icon_eDiscovery_35x80_2x_RE4Klrk?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=80&hei=35&qlt=100&fit=constrain"
                    alt=""
                    className="mx-auto h-10 w-18"
                  />
                  <h3 className="my-3 font-display font-medium">
                    Help protect a hybrid workforce
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                    Fortify your Zero Trust security architecture with a
                    management solution that builds resiliency and centralizes
                    endpoint security and identity-based device compliance. Help
                    protect data on company-owned and bring-your-own devices.
                  </p>
                </li>
                <li className="rounded-xl bg-white px-6 py-8 shadow-xl hover:-translate-y-1 transition duration-300">
                  <img
                    src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Icon_Reliability_35x80_2x_0_RE4Kr2u?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=80&hei=35&qlt=100&fit=constrain"
                    alt=""
                    className="mx-auto h-10 w-18"
                  />
                  <h3 className="my-3 font-display font-medium">
                    Provide better user experiences
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                    Empower IT to deliver the best possible endpoint experience
                    through zero-touch deployment, flexible, non-intrusive
                    mobile application management, and proactive recommendations
                    based on Microsoft Cloud data.
                  </p>
                </li>
                <li className="rounded-xl bg-white px-6 py-8 shadow-xl hover:-translate-y-1 transition duration-300">
                  <img
                    src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Icon_SecurityAcrossDevices_35x80_2x_RE4KyVt?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=80&hei=35&qlt=100&fit=constrain"
                    alt=""
                    className="mx-auto h-10 w-18"
                  />
                  <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                    Simplify endpoint management
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                    Unify your endpoint management solutions and workflows
                    together in one place, reducing complexity for IT and
                    security operations.
                  </p>
                </li>
                <li className="rounded-xl bg-white px-6 py-8 shadow-xl hover:-translate-y-1 transition duration-300">
                  <img
                    src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Icon_OutlookIntegration_35x80_2x_RE4KyVq?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=80&hei=35&qlt=100&fit=constrain"
                    alt=""
                    className="mx-auto h-10 w-18"
                  />
                  <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                    Strengthen security
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                    Ensure device health and compliance by using Microsoft
                    Security signals and advanced endpoint management
                    capabilities to mitigate cyberthreats and protect corporate
                    data.
                  </p>
                </li>
                <li className="rounded-xl bg-white px-6 py-8 shadow-xl hover:-translate-y-1 transition duration-300">
                  <img
                    src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Icon_AccessFromAnywhere_35x80_2x_RE4Klr7?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=80&hei=35&qlt=100&fit=constrain"
                    alt=""
                    className="mx-auto h-10 w-18"
                  />
                  <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                    Reduce overall costs
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                    Increase efficiency by consolidating vendors and save more
                    with cost-effective licensing. Improve end-user productivity
                    and performance across devices.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <IntuneCard />
        </section>
        <section>
          <div class="max-w-4xl mx-auto px-5 mt-[140px]">
            <div class="text-center">
              <h2 class="font-semibold text-3xl text-[#1b1c44]">
                Explore Microsoft Intune products and capabilities
              </h2>
              <p class="max-w-3xl mx-auto text-center mt-2 text-gray-700">
                Microsoft Intune empowers organizations to maximize productivity
                and streamline administration while maintaining robust endpoint
                management and security measures.
              </p>
            </div>

            <div class="grid md:grid-cols-2 gap-12 mt-10">
              <div class="flex gap-6 items-start">
                <span class="text-violet-600 bg-violet-500/10 p-3 rounded-full">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                  >
                    <path
                      d="M0.849976 1.74998C0.849976 1.25292 1.25292 0.849976 1.74998 0.849976H3.24998C3.74703 0.849976 4.14998 1.25292 4.14998 1.74998V2.04998H10.85V1.74998C10.85 1.25292 11.2529 0.849976 11.75 0.849976H13.25C13.747 0.849976 14.15 1.25292 14.15 1.74998V3.24998C14.15 3.74703 13.747 4.14998 13.25 4.14998H12.95V10.85H13.25C13.747 10.85 14.15 11.2529 14.15 11.75V13.25C14.15 13.747 13.747 14.15 13.25 14.15H11.75C11.2529 14.15 10.85 13.747 10.85 13.25V12.95H4.14998V13.25C4.14998 13.747 3.74703 14.15 3.24998 14.15H1.74998C1.25292 14.15 0.849976 13.747 0.849976 13.25V11.75C0.849976 11.2529 1.25292 10.85 1.74998 10.85H2.04998V4.14998H1.74998C1.25292 4.14998 0.849976 3.74703 0.849976 3.24998V1.74998ZM2.94998 4.14998V10.85H3.24998C3.74703 10.85 4.14998 11.2529 4.14998 11.75V12.05H10.85V11.75C10.85 11.2529 11.2529 10.85 11.75 10.85H12.05V4.14998H11.75C11.2529 4.14998 10.85 3.74703 10.85 3.24998V2.94998H4.14998V3.24998C4.14998 3.74703 3.74703 4.14998 3.24998 4.14998H2.94998ZM2.34998 1.74998H1.74998V2.34998V2.64998V3.24998H2.34998H2.64998H3.24998V2.64998V2.34998V1.74998H2.64998H2.34998ZM5.09998 5.99998C5.09998 5.50292 5.50292 5.09998 5.99998 5.09998H6.99998C7.49703 5.09998 7.89998 5.50292 7.89998 5.99998V6.99998C7.89998 7.03591 7.89787 7.07134 7.89378 7.10618C7.92861 7.10208 7.96405 7.09998 7.99998 7.09998H8.99998C9.49703 7.09998 9.89998 7.50292 9.89998 7.99998V8.99998C9.89998 9.49703 9.49703 9.89998 8.99998 9.89998H7.99998C7.50292 9.89998 7.09998 9.49703 7.09998 8.99998V7.99998C7.09998 7.96405 7.10208 7.92861 7.10618 7.89378C7.07134 7.89787 7.03591 7.89998 6.99998 7.89998H5.99998C5.50292 7.89998 5.09998 7.49703 5.09998 6.99998V5.99998ZM6.09998 5.99998H5.99998V6.09998V6.89998V6.99998H6.09998H6.89998H6.99998V6.89998V6.09998V5.99998H6.89998H6.09998ZM7.99998 7.99998H8.09998H8.89998H8.99998V8.09998V8.89998V8.99998H8.89998H8.09998H7.99998V8.89998V8.09998V7.99998ZM2.64998 11.75H2.34998H1.74998V12.35V12.65V13.25H2.34998H2.64998H3.24998V12.65V12.35V11.75H2.64998ZM11.75 1.74998H12.35H12.65H13.25V2.34998V2.64998V3.24998H12.65H12.35H11.75V2.64998V2.34998V1.74998ZM12.65 11.75H12.35H11.75V12.35V12.65V13.25H12.35H12.65H13.25V12.65V12.35V11.75H12.65Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <div>
                  <h3 class="font-semibold text-xl">
                    Microsoft Intune core capabilities
                  </h3>
                  <p class="mt-1 text-gray-500">
                    {" "}
                    Manage and protect cloud-connected endpoints across Windows,
                    Android, macOS, iOS, and Linux operating systems.
                  </p>
                  <Link className="inline-block">
                    <button
                      onClick={handleContactUsClick}
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

              <div class="flex gap-4 items-start">
                <span class="text-violet-600 bg-violet-500/10 p-3 rounded-full">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                  >
                    <path
                      d="M3.00014 2.73895C3.00014 2.94698 2.76087 3.06401 2.59666 2.93628L1.00386 1.69744C0.875177 1.59735 0.875177 1.40286 1.00386 1.30277L2.59666 0.063928C2.76087 -0.0637944 3.00014 0.0532293 3.00014 0.261266V1.00012H9.00009V0.261296C9.00009 0.0532591 9.23936 -0.0637646 9.40358 0.0639578L10.9964 1.3028C11.1251 1.40289 11.1251 1.59738 10.9964 1.69747L9.40358 2.93631C9.23936 3.06404 9.00009 2.94701 9.00009 2.73898V2.00012H3.00014V2.73895ZM9.50002 4.99998H2.50002C2.22388 4.99998 2.00002 5.22384 2.00002 5.49998V12.5C2.00002 12.7761 2.22388 13 2.50002 13H9.50002C9.77616 13 10 12.7761 10 12.5V5.49998C10 5.22384 9.77616 4.99998 9.50002 4.99998ZM2.50002 3.99998C1.67159 3.99998 1.00002 4.67156 1.00002 5.49998V12.5C1.00002 13.3284 1.67159 14 2.50002 14H9.50002C10.3284 14 11 13.3284 11 12.5V5.49998C11 4.67156 10.3284 3.99998 9.50002 3.99998H2.50002ZM14.7389 6.00001H14V12H14.7389C14.9469 12 15.064 12.2393 14.9362 12.4035L13.6974 13.9963C13.5973 14.125 13.4028 14.125 13.3027 13.9963L12.0639 12.4035C11.9362 12.2393 12.0532 12 12.2612 12H13V6.00001H12.2612C12.0532 6.00001 11.9361 5.76074 12.0639 5.59653L13.3027 4.00373C13.4028 3.87505 13.5973 3.87505 13.6974 4.00374L14.9362 5.59653C15.0639 5.76074 14.9469 6.00001 14.7389 6.00001Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <div>
                  <h3 class="font-semibold text-xl">
                    Microsoft Configuration Manager
                  </h3>
                  <p class="mt-1 text-gray-500">
                    {" "}
                    Manage on-premises endpoints, such as Windows PCs and
                    servers.
                  </p>
                  <Link className="inline-block">
                    <button
                      onClick={handleContactUsClick}
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

              <div class="flex gap-4 items-start">
                <span class="text-violet-600 bg-violet-500/10 p-3 rounded-full">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                  >
                    <path
                      d="M1 2C0.447715 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H1ZM1 3L14 3V3.92494C13.9174 3.92486 13.8338 3.94751 13.7589 3.99505L7.5 7.96703L1.24112 3.99505C1.16621 3.94751 1.0826 3.92486 1 3.92494V3ZM1 4.90797V12H14V4.90797L7.74112 8.87995C7.59394 8.97335 7.40606 8.97335 7.25888 8.87995L1 4.90797Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <div>
                  <h3 class="font-semibold text-xl">
                    Microsoft Intune Remote Help
                  </h3>
                  <p class="mt-1 text-gray-500">
                    {" "}
                    Enable secure, cloud-based helpdesk-to-user connections.
                  </p>
                  <Link className="inline-block">
                    <button
                      onClick={handleContactUsClick}
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

              <div class="flex gap-4 items-start">
                <span class="text-violet-600 bg-violet-500/10 p-3 rounded-full">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                  >
                    <path
                      d="M4.5 2C3.11929 2 2 3.11929 2 4.5C2 5.88072 3.11929 7 4.5 7C5.88072 7 7 5.88072 7 4.5C7 3.11929 5.88072 2 4.5 2ZM3 4.5C3 3.67157 3.67157 3 4.5 3C5.32843 3 6 3.67157 6 4.5C6 5.32843 5.32843 6 4.5 6C3.67157 6 3 5.32843 3 4.5ZM10.5 2C9.11929 2 8 3.11929 8 4.5C8 5.88072 9.11929 7 10.5 7C11.8807 7 13 5.88072 13 4.5C13 3.11929 11.8807 2 10.5 2ZM9 4.5C9 3.67157 9.67157 3 10.5 3C11.3284 3 12 3.67157 12 4.5C12 5.32843 11.3284 6 10.5 6C9.67157 6 9 5.32843 9 4.5ZM2 10.5C2 9.11929 3.11929 8 4.5 8C5.88072 8 7 9.11929 7 10.5C7 11.8807 5.88072 13 4.5 13C3.11929 13 2 11.8807 2 10.5ZM4.5 9C3.67157 9 3 9.67157 3 10.5C3 11.3284 3.67157 12 4.5 12C5.32843 12 6 11.3284 6 10.5C6 9.67157 5.32843 9 4.5 9ZM10.5 8C9.11929 8 8 9.11929 8 10.5C8 11.8807 9.11929 13 10.5 13C11.8807 13 13 11.8807 13 10.5C13 9.11929 11.8807 8 10.5 8ZM9 10.5C9 9.67157 9.67157 9 10.5 9C11.3284 9 12 9.67157 12 10.5C12 11.3284 11.3284 12 10.5 12C9.67157 12 9 11.3284 9 10.5Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <div>
                  <h3 class="font-semibold text-xl">
                    Microsoft Intune Endpoint Privilege Managementr
                  </h3>
                  <p class="mt-1 text-gray-500">
                    {" "}
                    Allow standard users to perform IT-approved tasks usually
                    reserved for administrators.
                  </p>
                  <Link className="inline-block">
                    <button
                      onClick={handleContactUsClick}
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

              <div class="flex gap-4 items-start">
                <span class="text-violet-600 bg-violet-500/10 p-3 rounded-full">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                  >
                    <path
                      d="M9.96424 2.68571C10.0668 2.42931 9.94209 2.13833 9.6857 2.03577C9.4293 1.93322 9.13832 2.05792 9.03576 2.31432L5.03576 12.3143C4.9332 12.5707 5.05791 12.8617 5.3143 12.9642C5.5707 13.0668 5.86168 12.9421 5.96424 12.6857L9.96424 2.68571ZM3.85355 5.14646C4.04882 5.34172 4.04882 5.6583 3.85355 5.85356L2.20711 7.50001L3.85355 9.14646C4.04882 9.34172 4.04882 9.6583 3.85355 9.85356C3.65829 10.0488 3.34171 10.0488 3.14645 9.85356L1.14645 7.85356C0.951184 7.6583 0.951184 7.34172 1.14645 7.14646L3.14645 5.14646C3.34171 4.9512 3.65829 4.9512 3.85355 5.14646ZM11.1464 5.14646C11.3417 4.9512 11.6583 4.9512 11.8536 5.14646L13.8536 7.14646C14.0488 7.34172 14.0488 7.6583 13.8536 7.85356L11.8536 9.85356C11.6583 10.0488 11.3417 10.0488 11.1464 9.85356C10.9512 9.6583 10.9512 9.34172 11.1464 9.14646L12.7929 7.50001L11.1464 5.85356C10.9512 5.6583 10.9512 5.34172 11.1464 5.14646Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <div>
                  <h3 class="font-semibold text-xl">Clean Code</h3>
                  <p class="mt-1 text-gray-500">
                    {" "}
                    We strictly follow a set of guidelines along with unit tests
                    to make sure your implementation as easy as possible.{" "}
                  </p>
                  <Link className="inline-block">
                    <button
                      onClick={handleContactUsClick}
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

              <div class="flex gap-4 items-start">
                <span class="text-violet-600 bg-violet-500/10 p-3 rounded-full">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                  >
                    <path
                      d="M7.28856 0.796908C7.42258 0.734364 7.57742 0.734364 7.71144 0.796908L13.7114 3.59691C13.8875 3.67906 14 3.85574 14 4.05V10.95C14 11.1443 13.8875 11.3209 13.7114 11.4031L7.71144 14.2031C7.57742 14.2656 7.42258 14.2656 7.28856 14.2031L1.28856 11.4031C1.11252 11.3209 1 11.1443 1 10.95V4.05C1 3.85574 1.11252 3.67906 1.28856 3.59691L7.28856 0.796908ZM2 4.80578L7 6.93078V12.9649L2 10.6316V4.80578ZM8 12.9649L13 10.6316V4.80578L8 6.93078V12.9649ZM7.5 6.05672L12.2719 4.02866L7.5 1.80176L2.72809 4.02866L7.5 6.05672Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <div>
                  <h3 class="font-semibold text-xl">
                    Microsoft Intune Enterprise Application Management
                  </h3>
                  <p class="mt-1 text-gray-500">
                    {" "}
                    Deploy and manage apps proactively, simply, and securely.
                  </p>
                  <Link className="inline-block">
                    <button
                      onClick={handleContactUsClick}
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
              <div class="flex gap-4 items-start">
                <span class="text-violet-600 bg-violet-500/10 p-3 rounded-full">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                  >
                    <path
                      d="M0.849976 1.74998C0.849976 1.25292 1.25292 0.849976 1.74998 0.849976H3.24998C3.74703 0.849976 4.14998 1.25292 4.14998 1.74998V2.04998H10.85V1.74998C10.85 1.25292 11.2529 0.849976 11.75 0.849976H13.25C13.747 0.849976 14.15 1.25292 14.15 1.74998V3.24998C14.15 3.74703 13.747 4.14998 13.25 4.14998H12.95V10.85H13.25C13.747 10.85 14.15 11.2529 14.15 11.75V13.25C14.15 13.747 13.747 14.15 13.25 14.15H11.75C11.2529 14.15 10.85 13.747 10.85 13.25V12.95H4.14998V13.25C4.14998 13.747 3.74703 14.15 3.24998 14.15H1.74998C1.25292 14.15 0.849976 13.747 0.849976 13.25V11.75C0.849976 11.2529 1.25292 10.85 1.74998 10.85H2.04998V4.14998H1.74998C1.25292 4.14998 0.849976 3.74703 0.849976 3.24998V1.74998ZM2.94998 4.14998V10.85H3.24998C3.74703 10.85 4.14998 11.2529 4.14998 11.75V12.05H10.85V11.75C10.85 11.2529 11.2529 10.85 11.75 10.85H12.05V4.14998H11.75C11.2529 4.14998 10.85 3.74703 10.85 3.24998V2.94998H4.14998V3.24998C4.14998 3.74703 3.74703 4.14998 3.24998 4.14998H2.94998ZM2.34998 1.74998H1.74998V2.34998V2.64998V3.24998H2.34998H2.64998H3.24998V2.64998V2.34998V1.74998H2.64998H2.34998ZM5.09998 5.99998C5.09998 5.50292 5.50292 5.09998 5.99998 5.09998H6.99998C7.49703 5.09998 7.89998 5.50292 7.89998 5.99998V6.99998C7.89998 7.03591 7.89787 7.07134 7.89378 7.10618C7.92861 7.10208 7.96405 7.09998 7.99998 7.09998H8.99998C9.49703 7.09998 9.89998 7.50292 9.89998 7.99998V8.99998C9.89998 9.49703 9.49703 9.89998 8.99998 9.89998H7.99998C7.50292 9.89998 7.09998 9.49703 7.09998 8.99998V7.99998C7.09998 7.96405 7.10208 7.92861 7.10618 7.89378C7.07134 7.89787 7.03591 7.89998 6.99998 7.89998H5.99998C5.50292 7.89998 5.09998 7.49703 5.09998 6.99998V5.99998ZM6.09998 5.99998H5.99998V6.09998V6.89998V6.99998H6.09998H6.89998H6.99998V6.89998V6.09998V5.99998H6.89998H6.09998ZM7.99998 7.99998H8.09998H8.89998H8.99998V8.09998V8.89998V8.99998H8.89998H8.09998H7.99998V8.89998V8.09998V7.99998ZM2.64998 11.75H2.34998H1.74998V12.35V12.65V13.25H2.34998H2.64998H3.24998V12.65V12.35V11.75H2.64998ZM11.75 1.74998H12.35H12.65H13.25V2.34998V2.64998V3.24998H12.65H12.35H11.75V2.64998V2.34998V1.74998ZM12.65 11.75H12.35H11.75V12.35V12.65V13.25H12.35H12.65H13.25V12.65V12.35V11.75H12.65Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <div>
                  <h3 class="font-semibold text-xl">
                    Microsoft Intune Advanced Analytics
                  </h3>
                  <p class="mt-1 text-gray-500">
                    {" "}
                    Elevate the end-user experience with AI, analytics, and
                    actionable insights
                  </p>
                  <Link className="inline-block">
                    <button
                      onClick={handleContactUsClick}
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
              <div class="flex gap-4 items-start">
                <span class="text-violet-600 bg-violet-500/10 p-3 rounded-full">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                  >
                    <path
                      d="M3.00014 2.73895C3.00014 2.94698 2.76087 3.06401 2.59666 2.93628L1.00386 1.69744C0.875177 1.59735 0.875177 1.40286 1.00386 1.30277L2.59666 0.063928C2.76087 -0.0637944 3.00014 0.0532293 3.00014 0.261266V1.00012H9.00009V0.261296C9.00009 0.0532591 9.23936 -0.0637646 9.40358 0.0639578L10.9964 1.3028C11.1251 1.40289 11.1251 1.59738 10.9964 1.69747L9.40358 2.93631C9.23936 3.06404 9.00009 2.94701 9.00009 2.73898V2.00012H3.00014V2.73895ZM9.50002 4.99998H2.50002C2.22388 4.99998 2.00002 5.22384 2.00002 5.49998V12.5C2.00002 12.7761 2.22388 13 2.50002 13H9.50002C9.77616 13 10 12.7761 10 12.5V5.49998C10 5.22384 9.77616 4.99998 9.50002 4.99998ZM2.50002 3.99998C1.67159 3.99998 1.00002 4.67156 1.00002 5.49998V12.5C1.00002 13.3284 1.67159 14 2.50002 14H9.50002C10.3284 14 11 13.3284 11 12.5V5.49998C11 4.67156 10.3284 3.99998 9.50002 3.99998H2.50002ZM14.7389 6.00001H14V12H14.7389C14.9469 12 15.064 12.2393 14.9362 12.4035L13.6974 13.9963C13.5973 14.125 13.4028 14.125 13.3027 13.9963L12.0639 12.4035C11.9362 12.2393 12.0532 12 12.2612 12H13V6.00001H12.2612C12.0532 6.00001 11.9361 5.76074 12.0639 5.59653L13.3027 4.00373C13.4028 3.87505 13.5973 3.87505 13.6974 4.00374L14.9362 5.59653C15.0639 5.76074 14.9469 6.00001 14.7389 6.00001Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <div>
                  <h3 class="font-semibold text-xl">Microsoft Cloud PKI</h3>
                  <p class="mt-1 text-gray-500">
                    {" "}
                    Simplify and automate cloud certificate management.
                  </p>
                  <Link className="inline-block">
                    <button
                      onClick={handleContactUsClick}
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
          </div>
        </section>
        <IntuneFAQ />
      </div>
    </>
  );
};

export default MicrosoftIntune;
