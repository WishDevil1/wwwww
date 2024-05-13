// import React from "react";

// const TeamDropdown = ({ isOpen, setIsOpen, options }) => {
//   return (
//     <div
//       className={`absolute top-full left-0 bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 transform ${
//         isOpen ? "opacity-100 mt-2" : "opacity-0"
//       }`}
//     >
//       {options.map((option, index) => (
//         <a
//           key={index}
//           href={option.link}
//           className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//         >
//           {option.text}
//         </a>
//       ))}
//     </div>
//   );
// };

// export default TeamDropdown;


import React from "react";

const TeamDropdown = ({ isOpen, setIsOpen, options }) => {
  return (
    <div
      className={`absolute bottom-full left-0 bg-white shadow-lg rounded-lg overflow-hidden transition-opacity duration-300 ${
        isOpen ? "opacity-100 translate-y-2" : "opacity-0 -translate-y-2"
      } ${isOpen ? "pointer-events-auto" : "pointer-events-none"} z-10`}
    >
      {options.map((option, index) => (
        <a
          key={index}
          href={option.link}
          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
        >
          {option.text}
        </a>
      ))}
    </div>
  );
};

export default TeamDropdown;



