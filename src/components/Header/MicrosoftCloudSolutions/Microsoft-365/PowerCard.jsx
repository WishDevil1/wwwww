import React, { useState } from "react";
import PowerPages from "./PowerPages";
import PowerPageTwo from "./PowerPageTwo";

const PowerCard = () => {
  const [open, setOpen] = useState("home");

  const handleTabOpen = (tabCategory) => {
    setOpen(tabCategory);
  };

  return (
    <>
      <div className="text-center pb-10">
        <h2 className="text-4xl font-semibold mt-4 text-[#1b1c44]">
        Empower your business with innovation.
        </h2>
      </div>
      <section className="py-8 dark:bg-dark lg:py-0">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
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
                title="About Microsoft Power Platform"
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
                title="Why Microsoft Power Platform"
                active={open === "about"}
              />
            </div>
            <div className="mt-8">{open === "home" && <PowerPages />}</div>
            <div className="mt-8">{open === "about" && <PowerPageTwo />}</div>
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

export default PowerCard;
