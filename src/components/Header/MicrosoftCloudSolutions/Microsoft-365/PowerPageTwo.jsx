import React, { useState } from "react";

const PowerPageTwo = ({ onSelectTab }) => {
  const [selectedPart, setSelectedPart] = useState(1);

  const handleClick = (part) => {
    setSelectedPart(selectedPart === part ? null : part);
    onSelectTab(part);
  };

  const partNames = [
    "Cloud ecosystem",
    "AI cababilities",
    "Enterprice-grand solution",
  ];

  const descriptions = [
    "Create more impact and possibilities by connecting your solutions to Microsoft Fabric, Azure, Microsoft 365, and Dynamics 365.",
    "Speed up app development, automate workflows, visualize data, and reduce repetitive tasks with AI-powered tools.",
    "Drive productivity and collaboration by enabling developers to create innovative, scalable solutions fast.",
  ];

  // Array of image URLs for each part
  const imageUrls = [
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PPL-1-Benefits_1-5?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1664&hei=1062&qlt=100&fit=constrain",
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PPL-1-Benefits_1-6?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1664&hei=1062&qlt=95&fit=constrain",
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PPL-1-Benefits_1-7?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1664&hei=1062&qlt=95&fit=constrain",
  ];

  return (
    <>
      <div className="flex justify-center "></div>
      <div className="flex">
        {/* Left column */}
        <div className="w-1/4 text-black font-semibold relative">
          {[1, 2, 3].map((part) => (
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
            {[1, 2, 3].map((part) => (
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
                  <div className="mb-2 flex justify-center ">
                    <div className="image-container">
                      <img
                        src={imageUrls[part - 1]}
                        alt={`Part ${part}`}
                        className="image border-8 border-gray-500 rounded-2xl max-w-full h-auto"
                        style={{ width: "700px", maxHeight: "400px" }} // Set the maximum height for the image
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

export default PowerPageTwo;


