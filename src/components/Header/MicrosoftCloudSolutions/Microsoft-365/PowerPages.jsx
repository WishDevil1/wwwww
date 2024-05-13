

import React, { useState } from "react";

const PowerPages = ({ onSelectTab }) => {
  const [selectedPart, setSelectedPart] = useState(1);

  const handleClick = (part) => {
    setSelectedPart(selectedPart === part ? null : part);
    onSelectTab(part);
  };

  const partNames = [
    "Overview",
    "Microsoft Dataverse",
    "Security and Governance",
    "Connectors",
  ];

  const descriptions = [
    "Empower everyone in your organization to develop solutions with low-code tools.",
    "Do more with your data by using a low-code platform to secure and manage apps, workflows, and AI-powered tools.",
    "Easily manage, monitor, and secure your low-code investments with enterprise-grade compliance and governance.",
    "Connect data across your applications with over 1000 Power Platform connectors—and create unified solutions.",
  ];

  // Array of image URLs for each part
  const imageUrls = [
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PPL-1-Benefits_1-1?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1664&qlt=100&fmt=png-alpha&fit=constrain",
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PPL-1-Benefits_1-2?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1664&hei=1062&qlt=97&fit=constrain",
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PPL-1-Benefits_1-3?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1664&hei=1062&qlt=95&fit=constrain",
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PPL-1-Benefits_1-4?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1664&hei=1062&qlt=95&fit=constrain",
  ];

  return (
    <div className="flex justify-center">
      <div className="flex w-full">
        {/* Left column */}
        <div className="w-1/4 text-black font-semibold relative">
          {partNames.map((part, index) => (
            <div
              key={index}
              className={`cursor-pointer p-4 border-b border-gray-600 ${
                selectedPart === index + 1 ? "" : ""
              }`}
              onClick={() => handleClick(index + 1)}
              style={{
                transition: "transform 0.5s ease",
                transform: selectedPart === index + 1 ? "translateY(0)" : "",
              }}
            >
              {selectedPart === index + 1 ? ` ${part}` : `${part}`}
            </div>
          ))}
        </div>

        {/* Right column with content */}
        <div className="w-3/4 relative">
          <div className="right-column" style={{ maxHeight: "70vh", overflowY: "auto" }}>
            {descriptions.map((description, index) => (
              <div
                key={index}
                className="absolute top-0 right-0 w-full pb-20"
                style={{
                  transform: `translateX(${selectedPart === index + 1 ? "0%" : "100%"})`,
                  transition: "transform 0.5s ease",
                  paddingTop: "0px",
                }}
              >
                <div className={`px-8 ${selectedPart === index + 1 ? "" : "hidden"}`}>
                  {/* Add your text and image content for each part */}
                  <div className="mb-2 flex justify-center">
                    <div className="image-container">
                      <img
                        src={imageUrls[index]}
                        alt={`Part ${index + 1}`}
                        className="image border-8 border-gray-500 rounded-2xl max-w-full h-auto"
                        style={{ width: "700px", maxHeight: "400px" }} // Set the maximum height for the image
                      />
                    </div>
                  </div>
                  <p className="text-black flex text-center text-sm px-16">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerPages;
