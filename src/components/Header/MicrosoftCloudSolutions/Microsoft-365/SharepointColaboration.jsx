import React from "react";
import { Link } from "react-router-dom";

const SharepointColaboration = () => {
  return (
    <>
      <div className="container mx-auto pt-12">
        <h1 className="text-4xl font-semibold text-center  text-[#1b1c44]">
          Explore Microsoft 365 Collaboration Articles
        </h1>
      </div>
      <div class="px-2 pt-16 w-full flex justify-center">
        <div class="bg-white lg:mx-2 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
          <div class="lg:w-1/2  ">
            <div
              className="lg:scale-110 h-80 bg-cover bg-center lg:h-full rounded-b-none border lg:rounded-lg"
              style={{
                backgroundImage:
                  "url('https://techcommunity.microsoft.com/t5/image/serverpage/image-id/465373iF59CC64B07B75056/image-size/large?v=v2&px=999')",
              }}
            ></div>
          </div>

          <div class="pt-16 pb-8 px-6 lg:px-16 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg bg-orange-100 bg-opacity-50 backdrop-blur-md">
            <p class="mt-4 ">
              Microsoft 365 SharePoint Online offers the flexibility to tailor
              custom pages and intranet sites to fit your industry's specific
              needs and workflows. Within the Microsoft 365 SharePoint homepage,
              you have the capability to embed custom web parts and apps,
              enhancing functionality and improving user experience.
              Additionally, there's a wealth of templates available in the
              lookbook to kickstart your design process and streamline
              development.
            </p>
            <div class="mt-8">
              <a
                href="#"
                class="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded-lg"
              >
                Explore Templates
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SharepointColaboration;



{
  /* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      
        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">
              Boost Team Collaboration
            </h3>
            <p className="text-gray-700 mb-4">
              Discover strategies to enhance team collaboration with intranet
              software.
            </p>
            <Link
              to="/boost-collaboration"
              className="text-blue-500 hover:underline"
            >
              Read more
            </Link>
          </div>
        </div>
      
        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">
              Enterprise Content Management (ECM)
            </h3>
            <p className="text-gray-700 mb-4">
              Explore the comprehensive overview of enterprise content
              management (ECM) software.
            </p>
            <Link to="/ecm-software" className="text-blue-500 hover:underline">
              Read more
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">
              Unified Communications (UC)
            </h3>
            <p className="text-gray-700 mb-4">
              Get essential insights into unified communications (UC) for
              businesses.
            </p>
            <Link
              to="/unified-communications"
              className="text-blue-500 hover:underline"
            >
              Read more
            </Link>
          </div>
        </div>
      </div> */
}
