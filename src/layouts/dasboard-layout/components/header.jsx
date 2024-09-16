import React from "react";
import { CiCircleMore } from "react-icons/ci";
export const Header = ({ toggleLeftSidebar, toggleRightSidebar }) => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md sm:hidden">
      <button
        onClick={toggleLeftSidebar}
        className="md:hidden text-[#4747D7] focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <h1 className="text-xl font-semibold text-[#4747D7]">
        Think Study Learn
      </h1>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <button
            onClick={toggleRightSidebar}
            className="text-[#4747D7] focus:outline-none"
          >
            <CiCircleMore className="text-[#4747D7] w-7 h-7" />
          </button>
        </div>
      </div>
    </header>
  );
};
