import React, { useState } from "react";
import { Link } from "react-router-dom";

const DefenderCard = () => {
  const [open, setOpen] = useState("home");

  const handleTabOpen = (tabCategory) => {
    setOpen(tabCategory);
  };

  const getTabContent = (tab) => {
    switch (tab) {
      case "home":
        return {
          img: "https://securityonline.info/wp-content/uploads/2021/05/tech-report-1024x682.png",
          title: "Unified portal",
          description:
            " Detect and disrupt cyberthreats in near real time and streamline investigation and response",
          link: "https://teams.microsoft.com",
          buttonText: "Learn more about Microsoft unified XDR and SIEM",
        };

      case "about":
        return {
          img: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Defender-XDR?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=935&hei=518&qlt=100&fit=constrain",
          title: " Microsoft Defender XDR",
          description:
            "Achieve unified security and visibility across your clouds, platforms, and endpoints.",
          link: "https://example.com",
          buttonText: "Learn more about Microsoft Defender XDR",
        };
      case "team":
        return {
          img: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RE50ra9-tab2?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=935&hei=518&qlt=100&fit=constrain",
          title: "Unified portal",
          description:
            "Detect and disrupt cyberthreats in near real time and streamline investigation and response.",
          link: "https://example.com",
          buttonText: "Learn more about Microsoft unified XDR and SIEM",
        };

      case "service":
        return {
          img: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Interactive-demo4-832x468?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1942&hei=1092&qlt=100&fmt=png-alpha&fit=constrain",
          title: "Microsoft Defender XDR",
          description: "Identify and summarize data and user risks",
          link: "https://example.com",
          buttonText: "Learn more about Microsoft Defender",
        };
      case "blog":
        return {
          img: "https://www.microsoft.com/en-us/microsoft-365/blog/wp-content/uploads/sites/2/2023/11/Copilot-enhanced-with-Viva-gif.gif",
          title: "Discover the new Copilot App",
          description:
            "Get started with the new Copilot App and experience the future of productivity.",
          link: "https://example.com",
          buttonText: "Download App Copilot Kit",
        };
      default:
        return {};
    }
  };

  const tabContent = getTabContent(open);

  return (
    <>
      <div className="text-center mt-12">
        <h2 className="text-4xl font-semibold mb-2 mt-6 text-[#1b1c44]">
          Unified security operations platform
        </h2>
      </div>
      <section className="py-8 dark:bg-dark lg:py-8 ">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-5 gap-4">
              <CardButton
                onClick={() => handleTabOpen("home")}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.53 2.22a1 1 0 011.41 0L10 7.11l5.47-4.89a1 1 0 111.32 1.5l-6 5.39a1 1 0 01-1.32 0l-6-5.39a1 1 0 010-1.5zM9 8V2h2v6h4l-1 7H6l-1-7h4z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
                title="Unified portal"
                active={open === "home"}
              />
              <CardButton
                onClick={() => handleTabOpen("about")}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2.05a8 8 0 100 15.9 8 8 0 000-15.9zM10 18a7.95 7.95 0 006.3-3.14 7.95 7.95 0 00-12.6 0A7.95 7.95 0 0010 18zm0-13a1 1 0 100-2 1 1 0 000 2zm0 3a1 1 0 100 2 1 1 0 000-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
                title="Microsoft Defender"
                active={open === "about"}
              />
              <CardButton
                onClick={() => handleTabOpen("team")}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a5 5 0 100 10 5 5 0 000-10zm0-2a7 7 0 100 14 7 7 0 000-14zm4 7a4 4 0 11-8 0 4 4 0 018 0zm-8.97 2a1 1 0 00-.46 1.9c1.2.6 2.6.6 3.8 0a1 1 0 00-.46-1.9c-1.067.53-2.333.53-3.38 0zm3.44-2a3 3 0 00-4.94 0 1 1 0 11-1.52-1.3 5 5 0 018.32 0 a1 1 0 11-1.52 1.3z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
                title="Microsoft Sentinel"
                active={open === "team"}
              />

              <CardButton
                onClick={() => handleTabOpen("service")}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a8 8 0 00-5.59 13.59l5.66-5.66 5.66 5.66A8 8 0 1010 2zm-6 8a6 6 0 1112 0 6 6 0 01-12 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
                title="Data protection"
                active={open === "service"}
              />

              <CardButton
                onClick={() => handleTabOpen("blog")}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a8 8 0 00-5.59 13.59l5.66-5.66 5.66 5.66A8 8 0 1010 2zm-6 8a6 6 0 1112 0 6 6 0 01-12 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
                title="Defender"
                active={open === "blog"}
              />
            </div>
            <div className="mt-8 ">
              <TabContent
                img={tabContent.img}
                title={tabContent.title}
                description={tabContent.description}
                link={tabContent.link}
                buttonText={tabContent.buttonText}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const CardButton = ({ onClick, icon, title, active }) => {
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center justify-center w-full bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg p-4 text-base font-medium transform transition-all duration-300 shadow-md ${
        active
          ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white scale-105"
          : "text-[#3b3c4f] hover:bg-orange-600 hover:text-white"
      }`}
    >
      <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-r from-orange-600 to-pink-600 opacity-0 hover:opacity-100 z-0 transition-opacity duration-300"></div>
      <div className="z-10 relative flex items-center">
        {icon}
        <span>{title}</span>
      </div>
    </button>
  );
};

const TabContent = ({ img, title, description, link, buttonText }) => {
  const [showImage, setShowImage] = useState(false);

  const handleImageClick = () => {
    setShowImage(!showImage);
  };

  return (
    <div
      className={`p-1 grid grid-cols-1 md:grid-cols-2 rounded-3xl text-base leading-relaxed text-body-color dark:text-dark-6 transition-opacity duration-300 max-w-6xl items-center justify-center`}
    >
      {/* Text Content Section */}
      <div className="p-5 flex items-center justify-center">
        <div>
          <h2 className="text-3xl font-semibold text-[#1b1c44] mb-3 mt-0">
            {title}
          </h2>
          <p className="text-lg text-[#1b1c44] mb-3">{description}</p>
          <div className="flex flex-wrap gap-4 mt-5 justify-start">
            <Link to={link} target="_blank" rel="noopener noreferrer">
              <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-black scale-105 font-lg hover:text-white py-3 px-6 rounded-full focus:outline-none focus:ring focus:ring-blue-400">
                {buttonText}
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Image Section */}
      <div className="relative flex items-center justify-center">
        <div className="cursor-pointer" onClick={handleImageClick}>
          <img
            src={img}
            alt={title}
            className="mx-auto max-w-[600px] max-h-[400px] md:max-h-[600px] shadow-2xl rounded-3xl h-100 overflow-hidden border-8 border-gray-500 hover:border-gray-600 transition duration-300"
          />
        </div>
        {showImage && (
          <div
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50"
            onClick={handleImageClick}
          >
            <div className="max-w-3xl mx-auto">
              <img src={img} alt={title} className="mx-auto max-w-full" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DefenderCard;
