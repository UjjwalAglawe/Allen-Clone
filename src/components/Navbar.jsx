import React from "react";
import Allenimg from "../assets/allen.png";

function Navbar() {
  return (
    <div className="flex justify-between pl-40 pr-4 py-3 bg-white fixed top-0 w-full z-50">
      <span className="flex space-x-7 items-center">
        <img src={Allenimg} alt="Allen logo" className="h-7 w-auto pr-6 cursor-pointer" />
        <span className="hover:border-b-4 hover:rounded hover:border-blue-700 cursor-pointer">Courses</span>
        <span className="hover:border-b-4 hover:rounded hover:border-blue-700 cursor-pointer">Test Series</span>
        <span className="hover:border-b-4 hover:rounded hover:border-blue-700 cursor-pointer">Scholarship</span>
        <span className="hover:border-b-4 hover:rounded hover:border-blue-700 cursor-pointer">Results</span>
        <span className="hover:border-b-4 hover:rounded hover:border-blue-700 cursor-pointer">Study</span>
        <span className="hover:border-b-4 hover:rounded hover:border-blue-700 cursor-pointer">About us</span>
      </span>
      <span className="flex space-x-4 items-center pr-[150px]">
        <span className="font-semibold bg-blue-600 p-2 rounded-2xl text-white px-3 cursor-pointer hover:bg-blue-700">&#128222; Talk to us</span>
        <span className="border-2 font-semibold border-blue-700 rounded-full px-2 py-1 mx-3 flex items-center justify-center cursor-pointer hover:bg-gray-400">Login</span>
      </span>
    </div>
  );
}

export default Navbar;
