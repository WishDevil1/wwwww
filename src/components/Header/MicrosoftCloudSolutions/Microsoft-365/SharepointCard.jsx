
import React, { useState } from "react";

const SharepointCard = () => {
  const [selectedPart, setSelectedPart] = useState(1);

  const handleClick = (part) => {
    setSelectedPart(selectedPart === part ? null : part);
  };

  const partNames = [
    "Effortless Sharing and Seamless Collaboration Software",
    "Empower and Enlighten Your Organization",
    "Unlock the Power of Collective Wisdom",
    "Revolutionize Your Business Processes",
    "Elevate the Impact of Your Content",
    "Leverage the Collective Intelligence",
    "Create Content-Centric Apps",
  ];

  const descriptions = [
    "Unlock seamless teamwork with SharePoint in Microsoft 365. Empower teams with dynamic sites, effortless collaboration, and secure file sharing across all devices.",
    "Enhance unity and keep employees informed with your intranet. Boost efficiency with home sites, portals, and personalized news, fostering compelling communication across all platforms.",
    "Instantly access insights with SharePoint's robust search. Seamlessly connect and collaborate with Microsoft Viva Engage for accelerated knowledge sharing and informed decision-making.",
    "Boost efficiency with streamlined processes using SharePoint Lists, Microsoft Power Automate, and Power Apps. Craft immersive digital experiences tailored for any device.",
    "Harness the Power of AI for Content Insights, Translation, Auto-Assembly, and Annotations Seamlessly Integrated into Microsoft 365 and Microsoft Teams.",
    "Expand and build content applications with high-volume containers, data, and robust APIs for enhanced functionality. Maximize scalability, streamline operations, and elevate user experiences through seamless integration and advanced feature sets",
    "Leverage AI-Powered Security and Compliance Measures to Analyze and Safeguard Content Throughout Its Lifecycle. Benefit from Backup/Restore Capabilities and Advanced Content Management Features for Enhanced Protection.",
  ];

  // Array of image URLs for each part
  const imageUrls = [
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/01_Storyblade-SharePoint_RE27KzZ?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&qlt=100&fmt=png-alpha&fit=constrain",
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/02_Storyblade-SharePoint_RE27Fnx?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&hei=700&qlt=100&fmt=png-alpha&fit=constrain",
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/03_Storyblade-SharePoint_RE27KAH?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&qlt=100&fmt=png-alpha&fit=constrain",
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/04_Storyblade-SharePoint_RE3TdW1?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&hei=700&qlt=100&fmt=png-alpha&fit=constrain",
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Blade005_Enhance_750x510_2x_RE59GEE?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&qlt=100&fmt=png-alpha&fit=constrain",
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Blade006_Connect_750x510_2x_RE59wjc?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=826&qlt=100&fmt=png-alpha&fit=constrain",
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Blade007_Manage_750x510_2x_RE59wjt?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&qlt=100&fmt=png-alpha&fit=constrain",
  ];

  return (
    <>
      <div className="flex justify-center ">
        <h1 className="text-4xl font-semibold text-[#1b1c44] mb-12">
          Elevate Your Collaboration Experience with Sharepoint
        </h1>
      </div>
      <div className="flex">
        {/* Left column */}
        <div className="w-1/4 text-black font-semibold relative">
          {[1, 2, 3, 4, 5, 6, 7].map((part) => (
            <div
              key={part}
              className={`cursor-pointer p-4 border-b border-gray-600 ${
                selectedPart === part ? "" : ""
              }`}
              onClick={() => handleClick(part)}
              style={{
                transition: "transform 0.5s ease",
                transform: selectedPart === part ? "translateY(0)" : "",
              }}
            >
              {selectedPart === part
                ? ` ${partNames[part - 1]}`
                : `${partNames[part - 1]}`}
            </div>
          ))}
        </div>

        {/* Right column with content */}
        <div className="w-3/4 relative">
          <div
            className="right-column"
            style={{ maxHeight: "70vh", overflowY: "auto" }}
          >
            {[1, 2, 3, 4, 5, 6, 7].map((part) => (
              <div
                key={part}
                className="absolute top-0 right-0 w-full pb-20"
                style={{
                  transform: `translateX(${
                    selectedPart === part ? "0%" : "100%"
                  })`,
                  transition: "transform 0.5s ease",
                  paddingTop: "0px",
                }}
              >
                <div
                  className={`px-8 ${selectedPart === part ? "" : "hidden"}`}
                >
                  {/* Add your text and image content for each part */}
                  {/* <h2 className="text-3xl font-semibold mb-4 text-orange-600 flex justify-center">
                    {partNames[part - 1]}
                  </h2> */}
                  <div className="mb-2 flex justify-center">
                    <div className="image-container">
                      <img
                        src={imageUrls[part - 1]}
                        alt={`Part ${part}`}
                        className="image border-8 border-gray-500 rounded-2xl max-w-full h-auto"
                        style={{ width: "600px", maxHeight: "400px" }} // Set the maximum height for the image
                      />
                    </div>
                  </div>
                  <p className="text-black flex text-center text-sm px-16">
                    {descriptions[part - 1]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SharepointCard;
