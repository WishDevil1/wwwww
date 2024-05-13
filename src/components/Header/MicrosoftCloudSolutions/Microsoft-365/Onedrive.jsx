import React from "react";
import { Link, useNavigate } from "react-router-dom";
import OnedriveVideo from "../../../../assets/sharepoint/When to use OneDrive and SharePoint.mp4";

const Onedrive = () => {
  const navigate = useNavigate();

  const handleStartOneDrive = () => {
    navigate("/microsoft-365/onedrive");
  };

  return (
    <>
      <section className="py-8">
      <div class="flex h-screen justify-center items-center dark:bg-slate-800 ">
        <div class="mx-auto mt-0 flex justify-center px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-8 lg:px-8">
          <div class="text-center ">
            <h1 class="text-4xl font-semibold tracking-tight text-gray-900 dark:text-slate-200 sm:text-5xl md:text-5xl">
              <span class="block xl:inline">
                <span class="mb-1 block text-slate-900 mt-14">
                  Microsoft 365
                </span>
                <span class="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                  OneDrive for Seamless File Storage and Sharing
                </span>
              </span>
            </h1>
            <div class="mt-5">
              <video
                class="w-[50%] h-auto border-2 border-gray-300 rounded-2xl shadow-lg ml-[300px] "
                controls
              >
                <source src={OnedriveVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center">
              <div class="rounded-md ">
                <Link
                  class="flex w-full items-center justify-center rounded-full border border-transparent bg-gradient-to-r from-pink-500 to-orange-600 px-8 py-3 text-base font-medium text-white  md:py-4 md:px-10 md:text-lg"
                  onClick={handleStartOneDrive}
                >
                  Start OneDrive
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

export default Onedrive;

{
  /* <section className="mt-10">
        <main className="relative h-screen overflow-hidden bg-gradient-to-l from-gray-100 to-blue-300 dark:bg-gray-800">
          <div className="container mx-auto flex items-center justify-between">
            <div className="w-full md:w-1/2 lg:w-2/5 text-center md:text-left">
              <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-[#1b1c44] leading-tight mb-4">
                Microsoft 365
                <br className="hidden lg:inline" />
                Access OneDrive for Seamless File Storage and Sharing
              </h1>
              <p className="text-lg text-[#1b1c44] mb-6 leading-relaxed">
                "If you're using Windows 11, you already have OneDrive installed
                on your PC. For other Windows versions, simply install OneDrive
                to begin."
              </p>
              <div className="flex mt-8">
                <button
                  onClick={handleStartOneDrive}
                  className="px-4 py-2 mr-4 text-black  bg-gradient-to-r from-orange-500 to-pink-500 border-2 border-transparent rounded-lg text-md hover:text-white"
                >
                  Start OneDrive
                </button>
                <Link
                  to="#"
                  className="px-4 py-2 text-pink-500 uppercase bg-transparent border-2 border-pink-500 rounded-lg dark:text-white hover:bg-pink-500 hover:text-white text-md"
                >
                  Download
                </Link>
              </div>
            </div>
            <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5 py-0 pl-9">
              <img
                src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/OneDriveforbusinessheroimage_RE4n1fX?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&qlt=100&fmt=png-alpha&fit=constrain"
                className="max-w-xs m-auto md:max-w-3xl"
              />
            </div>
          </div>
        </main>
      </section> */
}
