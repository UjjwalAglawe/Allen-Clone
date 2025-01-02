import React, { useState } from "react";
import dropdownImage from "../assets/dropdown pix.avif"; // Replace with the actual path to your image

const DropdownSection = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <div className="p-6 pl-[250px] font-sans bg-white">
        <h2 className="text-2xl font-bold pb-9">ALLEN App Advantage</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left Section with Dropdowns */}
        <div className="space-y-6">
          {/* Dropdown 1 */}
          <div className="border-b border-gray-300">
            <button
              className="w-full text-left py-4 px-2 text-lg font-semibold flex justify-between items-center"
              onClick={() => toggleDropdown("dropdown1")}
            >
              400 Lakh+ Questions Practised
              <span
                className={`transform transition-transform ${
                  openDropdown === "dropdown1" ? "rotate-180" : ""
                }`}
              >
                &#9660;
              </span>
            </button>
            {openDropdown === "dropdown1" && (
              <div className="px-2 py-2 text-gray-700">
                Boost your score with practice! Pick topics & difficulty level,
                and let AI target your weak areas.
              </div>
            )}
          </div>

          {/* Dropdown 2 */}
          <div className="border-b border-gray-300">
            <button
              className="w-full text-left py-4 px-2 text-lg font-semibold flex justify-between items-center"
              onClick={() => toggleDropdown("dropdown2")}
            >
              10 Lakh+ hours of Learning Content consumed
              <span
                className={`transform transition-transform ${
                  openDropdown === "dropdown2" ? "rotate-180" : ""
                }`}
              >
                &#9660;
              </span>
            </button>
            {openDropdown === "dropdown2" && (
              <div className="px-2 py-2 text-gray-700">
                Access in-depth learning materials across topics and master your
                subjects effectively.
              </div>
            )}
          </div>

          {/* Dropdown 3 */}
          <div className="border-b border-gray-300">
            <button
              className="w-full text-left py-4 px-2 text-lg font-semibold flex justify-between items-center"
              onClick={() => toggleDropdown("dropdown3")}
            >
              10 Lakh+ Doubts Solved
              <span
                className={`transform transition-transform ${
                  openDropdown === "dropdown3" ? "rotate-180" : ""
                }`}
              >
                &#9660;
              </span>
            </button>
            {openDropdown === "dropdown3" && (
              <div className="px-2 py-2 text-gray-700">
                Get instant solutions to your doubts from top educators and
                AI-powered assistance.
              </div>
            )}
          </div>
        </div>

        {/* Right Section with Image */}
        <div>
          <img
            src={dropdownImage}
            alt="App Illustration"
            className="rounded-lg shadow-md  w-[644px] h-[378px]"
          />
        </div>
      </div>
    </div>
  );
};

export default DropdownSection;
