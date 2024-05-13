import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import DefenderCard from "./DefenderCard";
import microsoftDefenderGetmax from "../../../../assets/microsoftDefenderGetmax.png";
import GetmaxSecurity from "../../../../assets/getmaxSecurity.png";
import DefenderQNA from "./DefenderQNA"

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
        <title>Enhance Security with Microsoft 365 Defender | Getmax.ae</title>
        {/* Description */}
        <meta
          name="description"
          content="Protect your organization with Microsoft 365 Defender. Explore advanced threat protection, security management, and endpoint security solutions tailored to safeguard your business. Partner with Getmax.ae for expert support and implementation."
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="http://getmax.ae/microsoft-365/microsoft-365-defender"
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
      <div className="bg-gradient-to-l from-gray-100 to-blue-300 pb-20 ">
        <main class="relative h-screen overflow-hidden bg-gradient-to-l from-gray-100 to-blue-300 dark:bg-gray-800">
          <div class="container mx-auto flex items-center justify-between ">
            <div class="w-full md:w-1/2 lg:w-2/5 text-center md:text-left">
              <h1 class="text-4xl md:text-6xl lg:text-6xl font-semibold text-[#1b1c44] leading-tight mb-4 mt-12">
                Microsoft Defender
                <br className="hidden lg:inline bg-orange-600" /> Comprehensive
                Endpoint Protection
              </h1>

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
                src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Hero5050-DefenderBF-960x500-2x_RE4YdOc?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&qlt=100&fmt=png-alpha&fit=constrain"
                class="max-w-3xs m-auto md:max-w-3xl h-[500px] rounded-3xl "
              />
            </div>
          </div>
        </main>

        <section>
          <div class=" p-4 min-h-screen">
            <div
              aria-hidden="true"
              class="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
            >
              <div class="blur-[106px] h-56 bg-gradient-to-br  to-purple-400 from-blue-700"></div>
              <div class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400  to-indigo-600"></div>
            </div>
            <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
              <div class="md:w-3/3 lg:w-2/2 mt-12 text-gray-100  text-center pl-20">
                <h2 class="my-8 text-3xl font-semibold text-[#1b1c44] md:text-3xl">
                  Protect Your Email and Collaboration with Microsoft Defender
                </h2>
                <p class="text-gray-800">
                  {" "}
                  Explore how Microsoft Defender enables IT to configure and
                  protect endpoints for better hybrid work experiences.
                </p>
              </div>
              <div class="mt-10 grid divide-x divide-y bg-gray-100  divide-gray-700 overflow-hidden  rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4  lg:divide-y-0 xl:grid-cols-4 shadow-xl">
                <div class="group relative  transition hover:z-[1] hover:shadow-2xl  hover:shadow-gray-600/10">
                  <div class="relative space-y-8 py-12 p-8">
                    <img
                      src="https://www.svgrepo.com/show/164986/logo.svg"
                      loading="lazy"
                      width="200"
                      height="200"
                      class="w-12 h-12 rounded-full"
                      style={{ color: "transparent" }}
                    />
                    <div class="space-y-2">
                      <h5 class="text-2xl font-semibold text-black transition group-hover:text-secondary">
                        Strengthen email security without compromise
                      </h5>
                      <p class="text-gray-800 text-sm">
                        Help protect your organization against advanced
                        cyberattacks, such as BEC, with native email security
                        that automatically stops cyberattack progression and
                        boosts SecOps productivity.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="group relative transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                  <div class="relative space-y-8 py-12 p-8">
                    <img
                      src="https://www.svgrepo.com/show/120853/logo.svg"
                      loading="lazy"
                      width="200"
                      height="200"
                      class="w-12 h-12 rounded-full"
                      style={{ color: "transparent" }}
                    />
                    <div class="space-y-2">
                      <h5 class="text-2xl font-semibold text-black transition group-hover:text-secondary">
                        Get comprehensive security for collaboration tools
                      </h5>
                      <p class="text-gray-800 text-sm">
                        Protect against emerging phishing attacks that target
                        collaboration tools by protecting your Microsoft Teams
                        environment with a unified detection and response
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="group relative  transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                  <div class="relative space-y-8 py-12 p-8">
                    <img
                      src="https://www.svgrepo.com/show/120852/logo.svg"
                      loading="lazy"
                      width="200"
                      height="200"
                      class="w-12 h-12 rounded-full"
                      style={{ color: "transparent" }}
                    />
                    <div class="space-y-2">
                      <h5 class="text-2xl font-semibold text-black transition group-hover:text-secondary">
                        Boost Security with Leading AI and Automation
                      </h5>
                      <p class="text-gray-800 text-sm">
                        Get unparalleled accuracy with AI-enabled detection
                        capabilities. Gain a better understanding of your
                        organization's cyberthreat landscape and vulnerabilities
                        with advanced analytics and automated workflows.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="group relative transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                  <div class="relative space-y-8 py-12 p-8">
                    <img
                      src="https://www.svgrepo.com/show/120850/logo.svg"
                      loading="lazy"
                      width="200"
                      height="200"
                      class="w-12 h-12 rounded-full"
                      style={{ color: "transparent" }}
                    />
                    <div class="space-y-2">
                      <h5 class="text-2xl font-semibold text-black transition group-hover:text-secondary">
                        Defend Against Cyberattacks with XDR
                      </h5>
                      <p class="text-gray-800 text-sm">
                        Respond to sophisticated cyberattacks using email and
                        collaboration signals as part of your detection and
                        response in Microsoft Defender XDR. Use incident-based
                        detections to hunt across the entire cyberattack chain.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                    Microsoft 365 guidance for security & compliance
                  </p>
                  <p class="mt-6 text-lg leading-8 text-gray-800">
                    Get expert guidance for security and compliance in Microsoft
                    365. Ensure robust protection and adherence to regulations
                    effortlessly.
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
                        Microsoft Entra ID Governance
                      </dt>
                      <dd class="inline">
                        Microsoft Entra ID Governance allows you to balance your
                        organization's need for security and employee
                        productivity with the right processes and visibility.
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
                        Microsoft Entra ID Protection
                      </dt>
                      <dd class="inline">
                        Detect and respond to identity threats efficiently with
                        Microsoft Entra ID Protection, included in the P2 plan.
                        Safeguard your organization's identities with automated
                        responses and thorough investigation
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
                        Microsoft Defender for Business{" "}
                      </dt>
                      <dd class="inline">
                        Microsoft Defender for Business offers robust endpoint
                        security with advanced threat protection and automated
                        response capabilities. Safeguard your organization's
                        devices with ease and confidence
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
                src="https://www.microsoft.com/en-us/security/blog/wp-content/uploads/2022/10/CLO22_SecOps_001.jpg"
                alt="Product screenshot"
                class="w-[48rem] max-w-none rounded-xl mt-16 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width="2432"
                height="1442"
              />
            </div>
          </div>
        </section>
        <DefenderCard />
        <section>
          <div class="max-w-screen-xl mx-auto py-6 px-4 lg:py-2 lg:px-6">
            <div class="text-center mb-10">
              <h2 class="text-3xl tracking-tight font-semibold text-[#1b1c44]">
                Explore the Latest Marvels of Microsoft Security
              </h2>
            </div>

            <div class="flex flex-col md:flex-row">
              <div class="mr-0 md:mr-8 mb-6 md:mb-0">
                <img
                  class="w-1/2 md:w-full mx-auto rounded-3xl shadow-xl mt-24"
                  src={GetmaxSecurity}
                  alt="can_help_banner"
                />
              </div>

              <div class="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
                <div class="w-full sm:w-1/2 mb-4 px-2 ">
                  <div class="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                    <h3 class="text-2xl font-semibold  text-md mb-6">
                      Microsoft Defender:
                    </h3>
                    <p class="text-sm">
                      Microsoft Defender ensures robust protection, safeguarding
                      devices and data with advanced security features against
                      evolving cyber threats.evolving cyber threats
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
                <div class="w-full sm:w-1/2 mb-4 px-2 ">
                  <div class="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                    <h3 class="text-2xl font-semibold  text-md mb-6">
                      Microsoft Entra:
                    </h3>
                    <p class="text-sm">
                      {" "}
                      Empower your enterprise with cutting-edge solutions to
                      enhance productivity and streamline operations, driving
                      innovation at every turn.
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

                <div class="w-full sm:w-1/2 mb-4 px-2 ">
                  <div class="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                    <h3 class="text-2xl font-semibold  text-md mb-6">
                      Microsoft Priva:
                    </h3>
                    <p class="text-sm">
                      Redefining Privacy Management for Modern Businesses.
                      Protect sensitive data, streamline compliance, and build
                      trust with customers through comprehensive privacy
                      solutions.
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

                <div class="w-full sm:w-1/2 mb-4 px-2 ">
                  <div class="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                    <h3 class="text-2xl font-semibold  text-md mb-6">
                      Microsoft Sentinel:
                    </h3>
                    <p class="text-sm">
                      Your Next-Gen Security Operations Center. Harness the
                      power of AI and automation to detect and respond to
                      threats faster. Streamline threat intelligence and bolster
                      defenses.
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

                <div class="w-full sm:w-1/2 mb-4 px-2 ">
                  <div class="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                    <h3 class="text-2xl font-semibold text-md mb-6">
                      Microsoft purview:
                    </h3>
                    <p class="text-sm">
                      We use cutting-edge security measures to protect our
                      customers' sensitive information and ensure the safety of
                      all transactions made on our site.
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
                <div class="w-full sm:w-1/2 mb-4 px-2 ">
                  <div class="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                    <h3 class="text-2xl font-semibold text-md mb-6">
                      Security with Copilot:
                    </h3>
                    <p class="text-sm">
                      Microsoft Security with Copilot: Redefining Threat
                      Response. Enhance your security operations with AI-driven
                      insights and automated incident management.
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
          </div>
        </section>
        <DefenderQNA/>
      </div>
    </>
  );
};

export default MicrosoftIntune;
