import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import TSL_Logo from "../assets/TSL_Logo.png";
export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "App" },
    { id: 3, text: "Curriculum" },
    { id: 4, text: "About" },
    { id: 5, text: "Contact" },
    { id: 6, text: "Join Waitlist!" },
  ];

  return (
    <div className="flex justify-between items-center h-24 max-w-[100%] mx-auto px-4 text-[#2489D3] font-roboto p-[5px] sm:p-[20px]">
      <img className="w-[60px] sm:w-auto" src={TSL_Logo} alt="TSL_logo image" />

      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4  rounded-xl m-2 cursor-pointer duration-300  font-bold active:text-[#3939C8] last:bg-[#3939C8] last:rounded-full last:text-[#FFFFFF] last:pt-4 last:pb-4 pl-6 pr-6 "
          >
            {item.text}
          </li>
        ))}
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full  bg-[#F0F7FF] ease-in-out duration-500 p-[5px]"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-30"
        }
      >
        <img src={TSL_Logo} alt="TSL_logo image" />

        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b  hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
