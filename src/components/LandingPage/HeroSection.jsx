// import React from "react";

// const HeroSection = () => {
//   return (
//     <>
//       <section className="relative h-auto w-full bg-[#222831] min-h-[400px] overflow-hidden px-5 lg:px-20">

//         <div className="absolute top-0 right-0 h-[30%] w-[30%] bg-gradient-to-tr from-emerald-200 to-emerald-500 blur-[130px]"></div>
//         <div className="absolute bottom-0 left-0 h-[30%] w-[20%] bg-gradient-to-bl from-emerald-200 to-emerald-500 blur-[130px]"></div>
//         <div className="p-5  grid grid-cols-1 lg:grid-cols-2 gap-10 lg:px-5 lg:py-10">
//           <div>
//             <h1 className="text-3xl lg:text-4xl @6xl:text-5xl font-bold text-white ">
//               We are <span className="text-pink-500">always</span> there
//             </h1>
//             <h1 className="text-3xl lg:text-4xl @6xl:text-5xl font-bold text-white mt-4 ">
//               for your need
//             </h1>
//           </div>
//           <div>
//             <p className=" text-gray-300 ">
//               We are a remote design agency based in Montreal working with
//               clients around the world. As passionate designers we love building
//               products that are easy to use accessible engaging and delightful.
//             </p>
//             <button className=" text-pink-500 mt-4 uppercase ">
//               / Contact us
//             </button>
//           </div>
//         </div>
//       </section>
//       <img
//         src="https://utfs.io/f/df007e37-3b42-4ada-a272-8d5e63807d6b-k6t0zq.jpg"
//         alt=""
//         className="w-[80%] h-auto mx-auto -translate-y-32"
//       />
//     </>
//   );
// };

// export default HeroSection;

// import React, { useState } from "react";
// import ContactFormModal from "./ContactFormModal";

// const HeroSection = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleContactUsClick = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <section className="relative h-auto w-full bg-[#222831] min-h-[400px] overflow-hidden px-5 lg:px-20">
//         <div className="absolute top-0 right-0 h-[30%] w-[30%] bg-gradient-to-tr from-emerald-200 to-emerald-500 blur-[130px]"></div>
//         <div className="absolute bottom-0 left-0 h-[30%] w-[20%] bg-gradient-to-bl from-emerald-200 to-emerald-500 blur-[130px]"></div>
//         <div className="p-5  grid grid-cols-1 lg:grid-cols-2 gap-10 lg:px-5 lg:py-10">
//           <div>
//             <h1 className="text-3xl lg:text-4xl @6xl:text-4xl font-semibold text-white ">
//               Effortlessly transition to{" "}
//               <span className="text-orange-600">Microsoft 365</span> with the
//               assurance of a trusted partner
//             </h1>
//           </div>
//           <div>
//             <p className=" text-gray-300 ">
//               Exciting times ahead as we transition to Microsoft 365! Rest
//               assured, we're here to make this journey seamless for you. From
//               planning to post-implementation support, our team is your trusted
//               partner every step of the way. Let's unlock the full potential of
//               Microsoft 365 together!
//             </p>
//             <button
//               onClick={handleContactUsClick}
//               className="text-orange-600 mt-4 uppercase underline hover:text-orange-700"
//             >
//               Contact us
//             </button>
//           </div>
//         </div>
//       </section>
//       <img
//         src="https://utfs.io/f/df007e37-3b42-4ada-a272-8d5e63807d6b-k6t0zq.jpg"
//         alt=""
//         className="w-[80%] h-auto mx-auto -translate-y-32"
//       />
//       <ContactFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
//     </>
//   );
// };

// export default HeroSection;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import LandingContactUs from "./LandingContactUs";

// const HeroSection = () => {
//   const navigate = useNavigate();

//   const handleContactUsClick = () => {
//     // navigate("/microsoft-365/contactform");
//     navigate(<LandingContactUs />);
//   };

//   return (
//     <>
//       <section className="relative h-auto w-full bg-[#222831] min-h-[400px] overflow-hidden px-5 lg:px-20">
//         <div className="absolute top-0 right-0 h-[30%] w-[30%] bg-gradient-to-tr from-emerald-200 to-emerald-500 blur-[130px]"></div>
//         <div className="absolute bottom-0 left-0 h-[30%] w-[20%] bg-gradient-to-bl from-emerald-200 to-emerald-500 blur-[130px]"></div>
//         <div className="p-5  grid grid-cols-1 lg:grid-cols-2 gap-10 lg:px-5 lg:py-10">
//           <div>
//             <h1 className="text-3xl lg:text-4xl @6xl:text-4xl font-semibold text-white ">
//               Effortlessly transition to{" "}
//               <span className="text-orange-600">Microsoft 365</span> with the
//               assurance of a trusted partner
//             </h1>
//           </div>
//           <div>
//             <p className=" text-gray-300 ">
//               Exciting times ahead as we transition to Microsoft 365! Rest
//               assured, we're here to make this journey seamless for you. From
//               planning to post-implementation support, our team is your trusted
//               partner every step of the way. Let's unlock the full potential of
//               Microsoft 365 together!
//             </p>
//             <button
//               onClick={handleContactUsClick}
//               className="text-orange-600 mt-4 uppercase underline hover:text-orange-700"
//             >
//               Contact us
//             </button>
//           </div>
//         </div>
//       </section>
//       <img
//         src="https://utfs.io/f/df007e37-3b42-4ada-a272-8d5e63807d6b-k6t0zq.jpg"
//         alt=""
//         className="w-[80%] h-auto mx-auto -translate-y-32"
//       />
//     </>
//   );
// };

// export default HeroSection;

import React from "react";


const HeroSection = () => {
  const handleContactUsClick = () => {
    const contactFormSection = document.getElementById("contact-form-section");
    if (contactFormSection) {
      contactFormSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <section className="relative h-auto w-full bg-[#62738d] min-h-[400px] overflow-hidden px-5 lg:px-20">
        <div className="absolute top-0 right-0 h-[30%] w-[30%] bg-gradient-to-tr from-emerald-200 to-emerald-500 blur-[130px]"></div>
        <div className="absolute bottom-0 left-0 h-[30%] w-[20%] bg-gradient-to-bl from-emerald-200 to-emerald-500 blur-[130px]"></div>
        <div className="p-5  grid grid-cols-1 lg:grid-cols-2 gap-10 lg:px-5 lg:py-10">
          <div>
            <h1 className="text-3xl lg:text-4xl @6xl:text-4xl font-semibold text-[#1b1c44] ">
              Effortlessly transition to{" "}
              <span className="text-orange-600">Microsoft 365</span> with the
              assurance of a trusted partner
            </h1>
          </div>
          <div>
            <p className=" text-black ">
              Exciting times ahead as we transition to Microsoft 365! Rest
              assured, we're here to make this journey seamless for you. From
              planning to post-implementation support, our team is your trusted
              partner every step of the way. Let's unlock the full potential of
              Microsoft 365 together!
            </p>
            {/* <button
              onClick={handleContactUsClick}
              className="text-orange-600 mt-4 uppercase underline hover:text-orange-700"
            >
              Contact us
            </button> */}
          </div>
        </div>
      </section>
     
      <img
        src="https://utfs.io/f/df007e37-3b42-4ada-a272-8d5e63807d6b-k6t0zq.jpg"
        alt=""
        className="w-[80%] h-auto mx-auto -translate-y-32"
      />
    </>
  );
};

export default HeroSection;
