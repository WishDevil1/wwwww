import React from "react";

const HomeCardThree = () => {
  return (
    <div className="text-center pt-0 pb-8">
      <h1 className="text-4xl font-semibold text-[#1b1c44] mb-8">Contact Us</h1>
      <div className="max-w-4xl mx-auto">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full"
            src="https://forms.office.com/Pages/ResponsePage.aspx?id=W7lgQVpT-0yrUhhwtA7QkW0lP1HLj4pHpzw_e4EDUHRURUZCQVUyQkZGM0ZSTkxZSFVYMFcyS0FLOC4u&embed=true"
            frameBorder="0"
            style={{ border: "none" }}
            allowFullScreen
            title="Contact Form"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HomeCardThree;
