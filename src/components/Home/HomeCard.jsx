import React from "react";
import { Link } from "react-router-dom";
import TransitionMicrosoft365ModernWorkplace from "../../assets/TransitionMicrosoft 365'sModernWorkplace.jpg";
import MigrationMicrosoftAzureCloudServices from "../../assets/MigrationMicrosoftAzureCloudServices.jpg";
import Microsoft365DynamicsBusinessOperations from "../../assets/Microsoft365DynamicsBusinessOperations.jpg";
import DeploymentMicrosoftModernWorkplace from "../../assets/DeploymentMicrosoftModernWorkplace.jpg";

import DeploymentMicrosoft365TeamsTelephony from "../../assets/DeploymentMicrosoft365TeamsTelephony.png";
import AccelerateMicrosoft365SecurityDeployment from "../../assets/AccelerateMicrosoft365SecurityDeployment.png";
import DevelopmentHosingMigrationWebsites from "../../assets/DevelopmentHosingMigrationWebsites.png";
import SetupIntegrationHardware from "../../assets/SetupIntegrationHardware.jpg";
import ITsupportservicesbothremotesite from "../../assets/ITsupportservicesbothremotesite.jpg";

import { Button } from "@material-tailwind/react";

const HomeCard = () => {
  const handleContactUsClick = () => {
    const contactFormSection = document.getElementById("contact-form-section");
    if (contactFormSection) {
      contactFormSection.scrollIntoView({ behavior: "smooth" });
    }}
  return (
    <>
      <div className="text-center mb-8 pt-8 ">
        <h1 className="text-4xl font-semibold text-[#1b1c44] mb-4">
          Our Solutions &{" "}
          <span className="text-orange-600 font-bold">Offerings</span>
        </h1>
      </div>
     
      <section>
        <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
          <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-20">
            <div className=" shadow-lg bg-white  flex flex-col justify-between leading-normal rounded-xl">
              <img
                src={TransitionMicrosoft365ModernWorkplace}
                class="w-full mb-3 rounded-t-xl"
              />
              <div class="p-6 pt-2">
                <div class="mb-0">
                  <a
                    href="#"
                    className="text-gray-900 font-semibold text-lg mb-2  inline-block"
                  >
                    Transition to Microsoft 365's Modern Workplace
                  </a>
                  <p class="text-gray-700 text-sm mb-2">
                    Effortlessly shift from outdated workspace systems to the
                    integrated Microsoft 365 suite. Streamline operations,
                    foster collaboration, and elevate productivity through
                    seamless migration
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
            <div className=" shadow-lg bg-white  flex flex-col justify-between leading-normal rounded-xl">
              <img
                src={MigrationMicrosoftAzureCloudServices}
                class="w-full mb-3 rounded-t-xl"
              />
              <div class="p-6 pt-2">
                <div class="mb-0">
                  <a
                    href="#"
                    className="text-gray-900 font-semibold text-lg mb-2  inline-block"
                  >
                    Migration to Microsoft Azure Cloud Services
                  </a>
                  <p class="text-gray-700 text-sm mb-2">
                    Advance your business with a seamless migration to Microsoft
                    Azure Cloud Services. Leverage scalable infrastructure,
                    advanced security, and unmatched flexibility for exponential
                    growth.
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
            <div className=" shadow-lg bg-white  flex flex-col justify-between leading-normal rounded-xl">
              <img
                src={Microsoft365DynamicsBusinessOperations}
                class="w-full mb-3 rounded-t-xl"
              />
              <div class="p-6 pt-2">
                <div class="mb-0">
                  <a
                    href="#"
                    className="text-gray-900 font-semibold text-lg mb-2  inline-block"
                  >
                    Microsoft 365 Dynamics for Business Operations
                  </a>
                  <p class="text-gray-700 text-sm mb-2">
                    Effortlessly embrace Microsoft 365 Dynamics to revolutionize
                    business operations. Seamlessly integrate powerful CRM and
                    ERP solutions for unparalleled efficiency and streamlined
                    workflows.
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
          <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-20 mt-8">
            <div className=" shadow-lg bg-white flex flex-col justify-between leading-normal rounded-xl">
              <img
                src={DeploymentMicrosoftModernWorkplace}
                class="w-full mb-3 rounded-t-xl"
              />
              <div class="p-6 pt-2">
                <div class="mb-0">
                  <a
                    href="#"
                    className="text-gray-900 font-semibold text-lg mb-2  inline-block"
                  >
                    Deployment of Microsoft 365 Modern Workplace
                  </a>
                  <p class="text-gray-700 text-sm mb-2">
                    Embrace the future of work with Microsoft 365 Modern
                    Workplace. Revolutionize productivity and collaboration
                    using tools like Microsoft Teams and Power, enhancing
                    success with streamlined workflows.
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
            <div className=" shadow-lg bg-white flex flex-col justify-between leading-normal rounded-xl">
              <img
                src={DeploymentMicrosoft365TeamsTelephony}
                class="w-full mb-3 rounded-t-xl"
              />
              <div class="p-6 pt-2">
                <div class="mb-0">
                  <a
                    href="#"
                    className="text-gray-900 font-semibold text-lg mb-2  inline-block"
                  >
                    Deployment of Microsoft 365 Teams Telephony
                  </a>
                  <p class="text-gray-700 text-sm mb-2">
                    Enhance communication with Microsoft 365 Teams Telephony.
                    Seamlessly integrate voice services for efficient calling
                    and collaboration, boosting productivity and connectivity
                    within your platform.
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
            <div className=" shadow-lg bg-white flex flex-col justify-between leading-normal rounded-xl">
              <img
                src={AccelerateMicrosoft365SecurityDeployment}
                class="w-full mb-3 rounded-t-xl"
              />
              <div class="p-6 pt-2">
                <div class="mb-0">
                  <a
                    href="#"
                    className="text-gray-900 font-semibold text-lg mb-2  inline-block"
                  >
                    Accelerate Microsoft 365 Security Deployment
                  </a>
                  <p class="text-gray-700 text-sm mb-2">
                    Enhance security with Microsoft 365. Protect your
                    organization against evolving threats and ensure peace of
                    mind with advanced threat protection and identity management
                    features in security deployment.
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
          <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-20 mt-8">
            <div className=" shadow-lg bg-white flex flex-col justify-between leading-normal rounded-xl">
              <img
                src={DevelopmentHosingMigrationWebsites}
                class="w-full mb-3 rounded-t-xl"
              />
              <div class="p-6 pt-2">
                <div class="mb-0">
                  <a
                    href="#"
                    className="text-gray-900 font-semibold text-lg mb-2  inline-block"
                  >
                    Development, Hosting, and Migration of Websites
                  </a>
                  <p class="text-gray-700 text-sm mb-2">
                    Elevate your online presence effortlessly. We offer complete
                    solutions from captivating designs to reliable hosting and
                    seamless migration, ensuring a smooth journey.
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
            <div className=" shadow-lg bg-white flex flex-col justify-between leading-normal rounded-xl">
              <img
                src={SetupIntegrationHardware}
                class="w-full mb-3 rounded-t-xl"
              />
              <div class="p-6 pt-2">
                <div class="mb-0">
                  <a
                    href="#"
                    className="text-gray-900 font-semibold text-lg mb-2  inline-block"
                  >
                    Setup and Integration of IT Hardware
                  </a>
                  <p class="text-gray-700 text-sm mb-2">
                    Optimize IT infrastructure seamlessly. Integrate hardware
                    for peak performance. Our services configure your setup
                    expertly, ensuring smooth operations and streamlined
                    efficiency.
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
            <div className=" shadow-lg bg-white flex flex-col justify-between leading-normal rounded-xl">
              <img
                src={ITsupportservicesbothremotesite}
                class="w-full mb-3 rounded-t-xl"
              />
              <div class="p-6 pt-2">
                <div class="mb-0">
                  <a
                    href="#"
                    className="text-gray-900 font-semibold text-lg mb-2  inline-block"
                  >
                    IT support services, both remotely and on-site
                  </a>
                  <p class="text-gray-700 text-sm mb-2">
                    We provide IT support services both remotely and on-site,
                    offering efficient troubleshooting, software installations,
                    hardware repairs, and network setups tailored to your needs
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
    </>
  );
};

export default HomeCard;
<div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 px-10">
       
        
        
      </div>