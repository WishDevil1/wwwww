import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import DefenderCard from "./DefenderCard";
import microsoftDefenderGetmax from "../../../../assets/microsoftDefenderGetmax.png";
import GetmaxSecurity from "../../../../assets/getmaxSecurity.png";
import DefenderQNA from "./DefenderQNA";

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
          Maximize Collaboration with Microsoft 365 Collaboration Tools |
          Getmax.ae
        </title>
        {/* Description */}
        <meta
          name="description"
          content="Transform collaboration in your organization with Microsoft 365 Collaboration Tools. Explore seamless communication, document sharing, and teamwork solutions tailored to enhance productivity. Partner with Getmax.ae for expert support and implementation"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="http://localhost:5173/microsoft-365/microsoft-collaboration-tools"
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
      "headline": " Maximize Collaboration with Microsoft 365 Collaboration Tools | Getmax.ae",
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
      "description": "Transform collaboration in your organization with Microsoft 365 Collaboration Tools. Explore seamless communication, document sharing, and teamwork solutions tailored to enhance productivity. Partner with Getmax.ae for expert support and implementation"
    }
    `}
        </script>
      </Helmet>
      <div className="bg-gradient-to-l from-gray-100 to-blue-300  ">
        <section>
          <div class="px-7  max-w-7xl mx-auto flex flex-col gap-y-10 lg:flex-row items-center gap-x-10 justify-center py-10 lg:py-14 dark:bg-gray-800">
            <div class="lg:w-[650px] lg:px-5 flex flex-col gap-y-5">
              <h1 class="text-4xl md:text-5xl xl:text-[50px] leading-[1.2] md:max-w-xl md:mx-auto md:text-center lg:text-left lg:mx-0 lg:max-w-full font-semibold dark:text-white text-[#1b1c44]">
                Microsoft Collaboration: Achieve Together, Amplify Success
              </h1>
              <p class="text-sm  text-[#1b1c44] md:max-w-xl md:mx-auto lg:mx-0 lg:max-w-full md:text-center lg:text-left dark:text-gray-300">
                With efficient services available online, you can simplify your
                tasks and save valuable time.
              </p>
              <div class="flex gap-x-5 flex-col gap-y-2.5 lg:flex-row">
                <a
                  href="#"
                  class="flex w-full lg:w-fit items-center text-white justify-center rounded-lg bg-[#1053F3] px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
                >
                  <span>Talk to an expert</span>
                </a>
                <a
                  href="#"
                  class="flex w-full lg:w-fit items-center text-[#1053F3] justify-center rounded-lg border border-[#6A65FF] px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200 bg-[#5138EE]/10 dark:text-white dark:bg-transparent dark:border-gray-500/50"
                >
                  <span>Learn more</span>
                </a>
              </div>
            </div>
            <div class="hero-image md:px-2 lg:px-0 w-full lg:w-1/2 rounded-3xl md:pt-2 lg:pt-0 relative isolate z-10">
              <img
                class="rounded-3xl w-full"
                src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8c2VydmljZXxlbnwwfDB8fHwxNzEyMjIyNjQ3fDA&ixlib=rb-4.0.3&q=80&w=1080"
                alt=""
              />
            </div>
          </div>
        </section>

        <section>
          <div className="px-4">
            <div class="container mx-auto pt-12 pb-20">
              <h1 class="text-4xl font-bold text-gray-800 text-center mb-8">
                Work together from anywhere and at any time
              </h1>
              <p class="text-gray-700 text-lg text-center mb-12">
                Share and edit content in real-time with Microsoft Teams
                collaboration tools
              </p>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-white rounded-xl shadow-lg p-8">
                  <h2 class="text-2xl font-semibold text-gray-800 mb-4">
                    What is collaboration?
                  </h2>
                  <p class="text-gray-700 text-sm">
                    Collaboration is working together on a shared project or
                    goal. Use collaboration tools for business to easily create
                    and edit content with your team.
                  </p>
                  <a
                    href="#"
                    class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
                  >
                    Learn more
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
                <div class="bg-white rounded-xl shadow-lg p-8">
                  <h2 class="text-2xl font-semibold text-gray-800 mb-4">
                    Features of collaboration
                  </h2>
                  <p class="text-gray-700 text-sm">
                    Share files, co-author and edit content simultaneously,
                    automatically save everyone’s changes, communicate in
                    real-time, ideate in the Whiteboard app.
                  </p>
                  <a
                    href="#"
                    class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
                  >
                    Learn more
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
                <div class="bg-white rounded-xl shadow-lg p-8">
                  <h2 class="text-2xl font-semibold text-gray-800 mb-4">
                    Benefits of collaboration
                  </h2>
                  <p class="text-gray-700 text-sm">
                    Work effectively together: improve productivity, save time,
                    and accomplish more. Break down silos and bring your team
                    together, keeping everyone in the loop.
                  </p>
                  <a
                    href="#"
                    class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
                  >
                    Learn more
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonies" class="py-20">
          <div class="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
            <div class="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
              <div class="mb-12 space-y-5 md:mb-16 md:text-center">
                <h1 class="mb-5 text-3xl font-semibold text-[#1b1c44] md:text-center md:text-5xl">
                  Collaboration: Achieve Together, Amplify Succes
                </h1>
                <p class="text-xl  md:text-center md:text-2xl text-[#1b1c44]">
                  Unleash Potential, Achieve Together. Join forces, amplify
                  success, and reach new heights through unified teamwork
                </p>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              <ul class="space-y-8">
                <li class="text-sm leading-6">
                  <div class="relative group">
                    <div class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                    <a
                      href="https://twitter.com/kanyewest"
                      class="cursor-pointer"
                    >
                      <div class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                        <div class="flex items-center space-x-4">
                          <img
                            src="data:image/jpeg;base64,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"
                            class="w-12 h-12 bg-center bg-cover border rounded-full"
                            alt="Microsoft Word Getmax"
                          />
                          <div>
                            <h3 class="text-lg font-semibold text-white">
                              Microsoft 365 Word
                            </h3>
                          </div>
                        </div>
                        <p class="leading-normal text-gray-300 text-md">
                          Microsoft 365 Word is a powerful word processing
                          software that offers a wide range of features for
                          creating, editing, and formatting documents with ease.
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
                <li class="text-sm leading-6">
                  <div class="relative group">
                    <div class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                    <a
                      href="https://twitter.com/tim_cook"
                      class="cursor-pointer"
                    >
                      <div class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                        <div class="flex items-center space-x-4">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLLriDzkOsMHjHP7xjL391rILBNlnDn-p-61AkJSgT6nfPizSHEPWVeZlQLRCTRA87018&usqp=CAU"
                            class="w-12 h-12 bg-center bg-cover border rounded-full"
                            alt="Microsoft 365 Excle"
                          />
                          <div>
                            <h3 class="text-lg font-semibold text-white">
                              Microsoft 365 Excle
                            </h3>
                          </div>
                        </div>
                        <p class="leading-normal text-gray-300 text-md">
                          Microsoft 365 Excel is a comprehensive spreadsheet
                          application offering powerful data analysis and
                          visualization tools. With features for collaboration
                          and automation.
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
                <li class="text-sm leading-6">
                  <div class="relative group">
                    <div class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                    <a
                      href="https://twitter.com/kanyewest"
                      class="cursor-pointer"
                    >
                      <div class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                        <div class="flex items-center space-x-4">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0e2i806ZaB68DPhWp0JdD4bbHVwcRJ3G9W5g3YP9C2g&s"
                            class="w-12 h-12 bg-center bg-cover border rounded-full"
                            alt="Microsoft powerpoint"
                          />
                          <div>
                            <h3 class="text-lg font-semibold text-white">
                              Microsoft 365 PowerPoint
                            </h3>
                          </div>
                        </div>
                        <p class="leading-normal text-gray-300 text-md">
                          Microsoft 365 PowerPoint: Dynamic presentation
                          software with design, collaboration, and multimedia
                          features for engaging slideshows.
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
                <li class="text-sm leading-6">
                  <div class="relative group">
                    <div class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                    <a
                      href="https://twitter.com/tim_cook"
                      class="cursor-pointer"
                    >
                      <div class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                        <div class="flex items-center space-x-4">
                          <img
                            src="https://sm.pcmag.com/pcmag_au/review/m/microsoft-/microsoft-onenote_6xhc.jpg"
                            class="w-12 h-12 bg-center bg-cover border rounded-full"
                            alt="Microsoft 365 OneNote"
                          />
                          <div>
                            <h3 class="text-lg font-semibold text-white">
                              Microsoft 365 OneNote
                            </h3>
                          </div>
                        </div>
                        <p class="leading-normal text-gray-300 text-md">
                          Microsoft 365 OneNote is a versatile note-taking
                          application that allows users to capture ideas,
                          organize information, and collaborate effectively.
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
                <li class="text-sm leading-6">
                  <div class="relative group">
                    <div class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                    <a
                      href="https://twitter.com/satyanadella"
                      class="cursor-pointer"
                    >
                      <div class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                        <div class="flex items-center space-x-4">
                          <img
                            src="https://falabella.scene7.com/is/image/FalabellaPE/gsc_123320717_3644899_1?wid=800&hei=800&qlt=70"
                            class="w-12 h-12 bg-center bg-cover border rounded-full"
                            alt="  Microsoft 365 Visio"
                          />
                          <div>
                            <h3 class="text-lg font-semibold text-white">
                              Microsoft 365 Visio
                            </h3>
                          </div>
                        </div>
                        <p class="leading-normal text-gray-300 text-md">
                          Microsoft 365 Visio is a diagramming and visualization
                          tool that enables users to create professional
                          diagrams with ease. With a wide range of templates and
                          intuitive features.
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
                <li class="text-sm leading-6">
                  <div class="relative group">
                    <div class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                    <a
                      href="https://twitter.com/dan_schulman"
                      class="cursor-pointer"
                    >
                      <div class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                        <div class="flex items-center space-x-4">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Microsoft_Office_Sway_%282019%E2%80%93present%29.svg/2346px-Microsoft_Office_Sway_%282019%E2%80%93present%29.svg.png"
                            class="w-12 h-12 bg-center bg-cover border rounded-full"
                            alt="Microsoft 365 sway"
                          />
                          <div>
                            <h3 class="text-lg font-semibold text-white">
                              Microsoft 365 sway
                            </h3>
                          </div>
                        </div>
                        <p class="leading-normal text-gray-300 text-md">
                          Microsoft 365 Sway simplifies content creation and
                          storytelling with its dynamic presentation features
                          and intuitive interface, enhancing multimedia
                          capabilities.
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
                <li class="text-sm leading-6">
                  <div class="relative group">
                    <div class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                    <a
                      href="https://twitter.com/satyanadella"
                      class="cursor-pointer"
                    >
                      <div class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                        <div class="flex items-center space-x-4">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ_TpQEHmcFCi2dsjhlLtSdP6QDshwE2YUsA2UzquZmWkAxljCR7KSicS8f4K4p-h8zys&usqp=CAU"
                            class="w-12 h-12 bg-center bg-cover border rounded-full"
                            alt="Microsoft 365 Designer"
                          />
                          <div>
                            <h3 class="text-lg font-semibold text-white">
                              Microsoft 365 Designer
                            </h3>
                          </div>
                        </div>
                        <p class="leading-normal text-gray-300 text-md">
                          Microsoft 365 Designer streamlines content creation by
                          offering users a versatile tool to craft professional
                          documents, presentations, and graphics effortlessly.
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>

              <ul class="hidden space-y-8 sm:block">
                <li class="text-sm leading-6">
                  <div class="relative group">
                    <div class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                    <a href="https://twitter.com/paraga" class="cursor-pointer">
                      <div class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                        <div class="flex items-center space-x-4">
                          <img
                            src="https://www.techonmart.com/wp-content/uploads/2024/04/Microsoft-365-Engage-768x768.png"
                            class="w-12 h-12 bg-center bg-cover border rounded-full"
                            alt="Microsoft 365 Engage"
                          />
                          <div>
                            <h3 class="text-lg font-semibold text-white">
                              Microsoft 365 Engage
                            </h3>
                          </div>
                        </div>
                        <p class="leading-normal text-gray-300 text-md">
                          Microsoft 365 Engage is a comprehensive platform that
                          facilitates seamless collaboration and communication
                          within organizations. With integrated tools.
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
                <li class="text-sm leading-6">
                  <div class="relative group">
                    <div class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                    <a
                      href="https://twitter.com/tim_cook"
                      class="cursor-pointer"
                    >
                      <div class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                        <div class="flex items-center space-x-4">
                          <img
                            src="https://media.licdn.com/dms/image/C4E12AQF1R9EgIdF9tg/article-cover_image-shrink_600_2000/0/1652321479054?e=2147483647&v=beta&t=JQnQfy6BES0Qu_SPJIktlMpxh_pd6NgbUfGbGft4bQA"
                            class="w-12 h-12 bg-center bg-cover border rounded-full"
                            alt="Microsoft 365 Delve"
                          />
                          <div>
                            <h3 class="text-lg font-semibold text-white">
                              Microsoft 365 Delve
                            </h3>
                          </div>
                        </div>
                        <p class="leading-normal text-gray-300 text-md">
                          Microsoft 365 Delve is an intelligent discovery tool
                          that helps users discover relevant content and
                          connections across the Microsoft 365 ecosystem
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
                <li class="text-sm leading-6">
                  <div class="relative group">
                    <div class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                    <a href="https://twitter.com/paraga" class="cursor-pointer">
                      <div class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                        <div class="flex items-center space-x-4">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Microsoft_Project_%282019%E2%80%93present%29.svg/1200px-Microsoft_Project_%282019%E2%80%93present%29.svg.png"
                            class="w-12 h-12 bg-center bg-cover border rounded-full"
                            alt="Microsoft 365 Projects"
                          />
                          <div>
                            <h3 class="text-lg font-semibold text-white">
                              Microsoft 365 Projects
                            </h3>
                          </div>
                        </div>
                        <p class="leading-normal text-gray-300 text-md">
                          Microsoft 365 Projects is a project management tool
                          that enables teams to plan, collaborate, and track
                          progress effectively.
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
                <li class="text-sm leading-6">
                  <div class="relative group">
                    <div class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                    <a
                      href="https://twitter.com/tim_cook"
                      class="cursor-pointer"
                    >
                      <div class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                        <div class="flex items-center space-x-4">
                          <img
                            src="https://onlineacademiccommunity.uvic.ca/O365/wp-content/uploads/sites/4946/2020/06/planner-logo.png"
                            class="w-12 h-12 bg-center bg-cover border rounded-full"
                            alt="Microsoft 365 Planner"
                          />
                          <div>
                            <h3 class="text-lg font-semibold text-white">
                              Microsoft 365 Planner
                            </h3>
                          </div>
                        </div>
                        <p class="leading-normal text-gray-300 text-md">
                          Simplify task management with efficient planning,
                          assignment, and tracking features for enhanced team
                          collaboration and productivity.
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
                <li class="text-sm leading-6">
                  <div class="relative group">
                    <div class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                    <a
                      href="https://twitter.com/dan_schulman"
                      class="cursor-pointer"
                    >
                      <div class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                        <div class="flex items-center space-x-4">
                          <img
                            src="https://www.uvm.edu/it/kb/wp-content/uploads/2023/05/Bookings-Logo.png"
                            class="w-12 h-12 bg-center bg-cover border rounded-full"
                            alt="Microsoft 365 calendar and bookings"
                          />
                          <div>
                            <h3 class="text-lg font-semibold text-white">
                              Microsoft 365 calendar and bookings
                            </h3>
                          </div>
                        </div>
                        <p class="leading-normal text-gray-300 text-md">
                          Simplifying scheduling and appointment management for
                          businesses and individuals with integrated tools,
                          reducing conflicts and enhancing efficiency.
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
                <li class="text-sm leading-6">
                  <div class="relative group">
                    <div class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                    <a
                      href="https://twitter.com/satyanadella"
                      class="cursor-pointer"
                    >
                      <div class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                        <div class="flex items-center space-x-4">
                          <img
                            src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Icon-viva-learning?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=85"
                            class="w-12 h-12 bg-center bg-cover border rounded-full"
                            alt="Microsoft 365 viva learnings"
                          />
                          <div>
                            <h3 class="text-lg font-semibold text-white">
                              Microsoft 365 viva learnings
                            </h3>
                          </div>
                        </div>
                        <p class="leading-normal text-gray-300 text-md">
                          Empowering continuous learning with integrated
                          resources and personalized recommendations for
                          organizational growth and skill development.
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>

              <ul class="hidden space-y-8 lg:block">
                <li class="text-sm leading-6">
                  <div class="relative group">
                    <div class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                    <a
                      href="https://twitter.com/satyanadella"
                      class="cursor-pointer"
                    >
                      <div class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                        <div class="flex items-center space-x-4">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Microsoft_Stream.svg/1200px-Microsoft_Stream.svg.png"
                            class="w-12 h-12 bg-center bg-cover border rounded-full"
                            alt=" Microsoft 365 Streams"
                          />
                          <div>
                            <h3 class="text-lg font-semibold text-white">
                              Microsoft 365 Streams
                            </h3>
                            <p class="text-gray-500 text-md">
                              CEO of Microsoft
                            </p>
                          </div>
                        </div>
                        <p class="leading-normal text-gray-300 text-md">
                          Tortor dignissim convallis aenean et tortor at. At
                          ultrices mi tempus imperdiet nulla malesuada. Id
                          cursus metus aliquam eleifend mi. Quis ipsum
                          suspendisse ultrices gravida dictum fusce ut.
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
                <li class="text-sm leading-6">
                  <div class="relative group">
                    <div class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                    <a
                      href="https://twitter.com/dan_schulman"
                      class="cursor-pointer"
                    >
                      <div class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                        <div class="flex items-center space-x-4">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw46w5zVvoSIcmQNlmjWviYmN3M4RwC3XmOwe0P5vOug&s"
                            class="w-12 h-12 bg-center bg-cover border rounded-full"
                            alt="Microsoft 365 whiteboard"
                          />
                          <div>
                            <h3 class="text-lg font-semibold text-white">
                              Microsoft 365 whiteboard
                            </h3>
                            <p class="text-gray-500 text-md">CEO of PayPal</p>
                          </div>
                        </div>
                        <p class="leading-normal text-gray-300 text-md">
                          Quam pellentesque nec nam aliquam sem et tortor
                          consequat id. Enim sit amet venenatis urna cursus.
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
                <li class="text-sm leading-6">
                  <div class="relative group">
                    <div class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                    <a
                      href="https://twitter.com/satyanadella"
                      class="cursor-pointer"
                    >
                      <div class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                        <div class="flex items-center space-x-4">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_Pf8n4aUTq3gRh0lldnavbcaFi7DkR_ck8HTzJhttg&s"
                            class="w-12 h-12 bg-center bg-cover border rounded-full"
                            alt="Microsoft 365 Insights"
                          />
                          <div>
                            <h3 class="text-lg font-semibold text-white">
                              Microsoft 365 Insights
                            </h3>
                            <p class="text-gray-500 text-md">
                              CEO of Microsoft
                            </p>
                          </div>
                        </div>
                        <p class="leading-normal text-gray-300 text-md">
                          Tortor dignissim convallis aenean et tortor at. At
                          ultrices mi tempus imperdiet nulla malesuada. Id
                          cursus metus aliquam eleifend mi. Quis ipsum
                          suspendisse ultrices gravida dictum fusce ut.
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
                <li class="text-sm leading-6">
                  <div class="relative group">
                    <div class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                    <a
                      href="https://twitter.com/dan_schulman"
                      class="cursor-pointer"
                    >
                      <div class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                        <div class="flex items-center space-x-4">
                          <img
                            src="https://play-lh.googleusercontent.com/bocU4qigmyfnyh2_jBpW-16ViPa7YoT3Oj8lECr68l7hWkCyYPKYG5nQ3VJW3rd8H3Le"
                            class="w-12 h-12 bg-center bg-cover border rounded-full"
                            alt=" Microsoft 365 Loop"
                          />
                          <div>
                            <h3 class="text-lg font-semibold text-white">
                              Microsoft 365 Loop
                            </h3>
                            <p class="text-gray-500 text-md">CEO of PayPal</p>
                          </div>
                        </div>
                        <p class="leading-normal text-gray-300 text-md">
                          Quam pellentesque nec nam aliquam sem et tortor
                          consequat id. Enim sit amet venenatis urna cursus.
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
                <li class="text-sm leading-6">
                  <div class="relative group">
                    <div class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                    <a
                      href="https://twitter.com/satyanadella"
                      class="cursor-pointer"
                    >
                      <div class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                        <div class="flex items-center space-x-4">
                          <img
                            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Blade002_Area%20heading_Tell%20your%20story_247x139_2x?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=247&qlt=100&fmt=png-alpha&fit=constrain"
                            class="w-12 h-12 bg-center bg-cover border rounded-full"
                            alt="Microsoft 365 clipchamp"
                          />
                          <div>
                            <h3 class="text-lg font-semibold text-white">
                              Microsoft 365 clipchamp
                            </h3>
                            <p class="text-gray-500 text-md">
                              CEO of Microsoft
                            </p>
                          </div>
                        </div>
                        <p class="leading-normal text-gray-300 text-md">
                          Tortor dignissim convallis aenean et tortor at. At
                          ultrices mi tempus imperdiet nulla malesuada. Id
                          cursus metus aliquam eleifend mi. Quis ipsum
                          suspendisse ultrices gravida dictum fusce ut.
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
                <li class="text-sm leading-6">
                  <div class="relative group">
                    <div class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                    <a
                      href="https://twitter.com/dan_schulman"
                      class="cursor-pointer"
                    >
                      <div class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                        <div class="flex items-center space-x-4">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Microsoft_Forms_%282019-present%29.svg/1200px-Microsoft_Forms_%282019-present%29.svg.png"
                            class="w-12 h-12 bg-center bg-cover border rounded-full"
                            alt="microsoft 365 forms"
                          />
                          <div>
                            <h3 class="text-lg font-semibold text-white">
                              Microsoft 365 forms
                            </h3>
                            <p class="text-gray-500 text-md">CEO of PayPal</p>
                          </div>
                        </div>
                        <p class="leading-normal text-gray-300 text-md">
                          Quam pellentesque nec nam aliquam sem et tortor
                          consequat id. Enim sit amet venenatis urna cursus.
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
                <li class="text-sm leading-6">
                  <div class="relative group">
                    <div class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                    <a
                      href="https://twitter.com/dan_schulman"
                      class="cursor-pointer"
                    >
                      <div class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                        <div class="flex items-center space-x-4">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Microsoft_Kaizala_icon.svg/1200px-Microsoft_Kaizala_icon.svg.png"
                            class="w-12 h-12 bg-center bg-cover border rounded-full"
                            alt="Microsoft 365 kaizala"
                          />
                          <div>
                            <h3 class="text-lg font-semibold text-white">
                              Microsoft 365 kaizala
                            </h3>
                            <p class="text-gray-500 text-md">CEO of PayPal</p>
                          </div>
                        </div>
                        <p class="leading-normal text-gray-300 text-md">
                          Quam pellentesque nec nam aliquam sem et tortor
                          consequat id. Enim sit amet venenatis urna cursus.
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section class="overflow-hidden  ">
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
        <DefenderQNA />
      </div>
    </>
  );
};

export default MicrosoftIntune;
