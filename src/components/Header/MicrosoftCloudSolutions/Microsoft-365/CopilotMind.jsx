// import React, { useState, useEffect } from "react";
// import CopilotSystem from "../../../../assets/CopilotSystem.mp4";

// const CopilotMind = () => {
//   const [selectedPart, setSelectedPart] = useState(1);

//   const handleClick = (part) => {
//     setSelectedPart(selectedPart === part ? null : part);
//   };

//   const partNames = [
//     "The Copilot System",
//     "Management Skills",
//     "Inspiration",
//     "Creativity",
//     "AI Adoption",
//   ];

//   const descriptions = [
//     "Learn why 70% of users said they were more productive with Copilot—and how your organization can be AI ready.",
//     "The key to accessing the true potential of generative AI? Management skills.",
//     "Those not-quite-right ideas can spark real inspiration.",
//     "Get creative with different asks, feedback, and refinements until you find what works best.",
//     "Find out what we’re learning about successful AI adoption from the companies getting it right.",
//   ];

//   // Array of image URLs for each part
//   const imageUrls = [
//     { CopilotSystem },
//     "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/accordion-tabs-1-1?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=400&hei=256&qlt=99&fmt=png-alpha&fit=constrain",
//     "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/accordion-tabs-1-2?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=400&hei=256&qlt=97&fmt=png-alpha&fit=constrain",
//     "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/accordion-tabs-1-3?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=400&hei=256&qlt=95&fmt=png-alpha&fit=constrain",
//     "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Accordion-1.5-The-right-way-to-AI-620x396?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=400&hei=256&qlt=100&fmt=png-alpha&fit=constrain",
//   ];

//   return (
//     <>
//       <div className="flex justify-center">
//         <h1 className="text-4xl font-semibold text-[#1b1c44] mb-8">
//           Transform Your Work Methodology with Innovative Strategies
//         </h1>
//       </div>
//       <div className="flex">
//         {/* Left column */}
//         <div className="w-1/4 text-black font-semibold relative">
//           {[1, 2, 3, 4, 5].map((part) => (
//             <div
//               key={part}
//               className={`cursor-pointer p-4 border-b border-gray-600 ${
//                 selectedPart === part ? "bg-blue-600" : ""
//               }`}
//               onClick={() => handleClick(part)}
//               style={{
//                 transition: "transform 0.5s ease",
//                 transform: selectedPart === part ? "translateY(0)" : "",
//               }}
//             >
//               {selectedPart === part
//                 ? `Description for ${partNames[part - 1]}`
//                 : `${partNames[part - 1]}`}
//             </div>
//           ))}
//         </div>

//         {/* Right column with content */}
//         <div className="w-3/4 relative">
//           <div
//             className="right-column"
//             style={{ maxHeight: "70vh", overflowY: "auto" }}
//           >
//             {[1, 2, 3, 4, 5].map((part) => (
//               <div
//                 key={part}
//                 className="absolute top-0 right-0 w-full pb-20"
//                 style={{
//                   transform: `translateX(${
//                     selectedPart === part ? "0%" : "100%"
//                   })`,
//                   transition: "transform 0.5s ease",
//                   paddingTop: "0px",
//                 }}
//               >
//                 <div
//                   className={`px-8 ${selectedPart === part ? "" : "hidden"}`}
//                 >
//                   {/* Add your text and image content for each part */}
//                   <h2 className="text-3xl font-semibold mb-4 text-orange-600 flex justify-center">
//                     {partNames[part - 1]}
//                   </h2>
//                   <div className="mb-4 flex justify-center">
//                     <div className="image-container">
//                       <img
//                         src={imageUrls[part - 1]}
//                         alt={`Part ${part}`}
//                         className="image border-8 border-gray-500 rounded-3xl"
//                       />
//                     </div>
//                   </div>
//                   <p className="text-black flex justify-center">
//                     {descriptions[part - 1]}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CopilotMind;

import React, { useState, useEffect } from "react";
import CopilotSystemVideo from "../../../../assets/CopilotSystem.mp4";
import NextgenerationAIPowerPlatform from "../../../../assets/copilot/NextgenerationAIPowerPlatform.mp4";
import CopilotTeamsIntelligent from "../../../../assets/copilot/CopilotTeamsIntelligent recap _ After the meeting.mp4";
import Microsoft365CopilotExcel from "../../../../assets/copilot/Microsoft365CopilotExcel.mp4";
import Microsoft365CopilotTeamsMeetings from "../../../../assets/copilot/Microsoft365CopilotTeamsMeetings.mp4";
import Microsoft365CopilotWord from "../../../../assets/copilot/Microsoft365CopilotWord.mp4";
import Microsoft365CopilotPowerPoint from "../../../../assets/copilot/Microsoft365CopilotPowerPoint.mp4";
import MicrosofoverseessecurityCopilot from "../../../../assets/copilot/Microsoft 365 Copilot_ Security & Privacy.mp4";

const CopilotMind = () => {
  const [selectedPart, setSelectedPart] = useState(1);

  const handleClick = (part) => {
    setSelectedPart(selectedPart === part ? null : part);
  };

  const partNames = [
    "The Copilot system",
    "Teams live meeting with Copilot",
    "Meeting recap with Copilot",
    "Innovate Excel system",
    "Revolutionize Word with Copilot",
    "Discover PowerPoint capabilities with Copilot",
    "Copilot with Microsoft Power Platform",
    "Microsoft oversees the security and compliance of Copilot",
  ];

  // Array of video URLs for each part
  const videoUrls = [
    CopilotSystemVideo, // Using the imported video
    Microsoft365CopilotTeamsMeetings,
    CopilotTeamsIntelligent,
    Microsoft365CopilotExcel,
    Microsoft365CopilotWord, // Add other video URLs for each part if needed
    Microsoft365CopilotPowerPoint,
    NextgenerationAIPowerPlatform,
    MicrosofoverseessecurityCopilot,
  ];

  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-4xl font-semibold text-[#1b1c44] mb-8">
          Transform Your Work Methodology with Innovative Strategies
        </h1>
      </div>
      <div className="flex">
        {/* Left column */}
        <div className="w-1/4 text-black font-semibold relative">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((part) => (
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
            {[1, 2, 3, 4, 5, 6, 7, 8].map((part) => (
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
                  {/* Add your text and video content for each part */}
                  <div className="mb-4 flex justify-center pt-16">
                    <div
                      className="video-container"
                      style={{
                        maxWidth: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }} // Center the video horizontally
                    >
                      <video
                        src={videoUrls[part - 1]}
                        alt={`Part ${part}`}
                        className="video border-8 border-blue-200 rounded-3xl"
                        controls
                        style={{ maxWidth: "70%" }} // Set maximum width
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CopilotMind;
