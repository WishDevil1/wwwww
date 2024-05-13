import React, { useState } from "react";

const IntuneCard = () => {
  const [selectedPart, setSelectedPart] = useState(1);

  const handleClick = (part) => {
    setSelectedPart(selectedPart === part ? null : part);
  };

  const partNames = [
    "Cross_platform endpoint management",
    "Build-in endpoint security",
    "Mobile Application management",
    "Endpoint analytics",
    "Specialty and shared devices for frontline workers",
  ];

  const descriptions = [
    "Manage cloud-connected, mobile, desktop, and virtual endpoints across platforms, including Windows, Mac, iOS, Android, and Linux operating systems.",
    "Reduce the risk of endpoint vulnerabilities with automatic cyberthreat detection and remediation..",
    "Help protect data without requiring mobile device enrollment while giving workers flexible, non-intrusive experiences.",
    "Improve user experiences every day with app and device health scores. Limit slowdowns that impact productivity with data-driven recommendations.",
    "Support the diverse technology needs of frontline workers with capabilities such as shared device mode, maintenance windows, and specialty device management.",
  ];

  // Array of image URLs for each part
  const imageUrls = [
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Intune_vert_tabs_925x600_A?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1850&qlt=100&fit=constrain",
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Intune_vert_tabs_925x600_B?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1850&qlt=100&fit=constrain",
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Intune_vert_tabs_925x600_C?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1850&qlt=100&fit=constrain",
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Intune_vert_tabs_925x600_D?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1850&qlt=100&fit=constrain",
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Intune_vert_tabs_925x600_E?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1850&qlt=100&fit=constrain",
  ];

  return (
    <>
      <div className="flex justify-center ">
        <h1 className="text-4xl font-semibold text-[#1b1c44] mb-12">
        Enhanced Features of Microsoft Intune
        </h1>
      </div>
      <div className="flex  px-8">
        {/* Left column */}
        <div className="w-1/4 text-black font-semibold relative">
          {[1, 2, 3, 4, 5,].map((part) => (
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
            {[1, 2, 3, 4, 5,].map((part) => (
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

export default IntuneCard;
