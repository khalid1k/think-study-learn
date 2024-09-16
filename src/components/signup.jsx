import React from "react";
import login_image from "../assets/login.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
export function SignUp() {
  const [passValue, setPassValue] = useState({
    password: "",
    showPassword: false,
  });
  const [phoneNumber, setPhoneNumer] = useState("");
  const [course, setCourse] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const handlePasswordChange = (prop) => (event) => {
    setPassValue({ ...passValue, [prop]: event.target.value });
  };
  const handleClickShowPassword = () =>
    setPassValue({ ...passValue, showPassword: !passValue.showPassword });
  const [rememberME, setRememberME] = useState(false);
  return (
    <div className="flex flex-col md:flex-row sm:pt-3">
      <figure className="w-full md:w-1/2 lg:w-full">
        <img
          className="w-full h-auto object-cover rounded-l-lg"
          src={login_image}
          alt="image"
        />
      </figure>
      <div className="pt-3 pb-7 sm:pt-0 pr-6 pl-6 sm:pr-[48px] sm:pl-[48px] w-full md:w-1/3">
        <h2 className="text-[#2489D3] text-2xl xl:text-[30px] 2xl:text-[42px]  font-bold font-roboto">
          Think Study Learn
        </h2>
        <p className="text-[#2489D3] text-lg sm:mt-10 mt-4 font-semibold">
          Welcome!
        </p>

        <div className="w-full max-w-full  mt-6 sm:mt-2">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 ml-4"
              htmlFor="phone"
            >
              Login
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="number"
              placeholder="Phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumer(e.target.value)}
            />
          </div>
          <div className="mb-6 relative -z-10">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 ml-4"
              htmlFor="password"
            >
              Password
            </label>
            <div className="eye_div">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type={passValue.showPassword ? "text" : "password"}
                onChange={handlePasswordChange("password")}
                value={passValue.password}
                id="password"
                placeholder="Eneter password"
              />
              <div
                className="icon_button absolute right-4 top-9"
                onClick={handleClickShowPassword}
              >
                {passValue.showPassword ? (
                  <FiEye className="h-6 font-extralight" />
                ) : (
                  <FiEyeOff className="h-6 font-extralight" />
                )}
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 ml-4"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 ml-4"
              htmlFor="college"
            >
              College
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="college"
              type="text"
              placeholder="Enter College Name"
              onChange={(e) => setCollegeName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 ml-4"
              htmlFor="city"
            >
              City
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="city"
              type="text"
              placeholder="Enter City"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 ml-4"
              htmlFor="course"
            >
              Course
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="course"
              type="text"
              placeholder="Enter course eg. (Pre-Eng)"
              onChange={(e) => setCourse(e.target.value)}
            />
          </div>
        </div>
        <button className="pt-[10px] pb-[10px] pl-6 pr-6 bg-gradient-to-r from-[#3A3AED] to-[#1616D1] text-[#FFFFFF] mt-8 w-full rounded-md">
          Sign Up
        </button>

        <p className="text-center mt-3 justify-center  md:mt-[50px] ">
          <span className="text-[12px] ">
            Already have an account &nbsp; &nbsp;
          </span>{" "}
          <span className="text-[12px] text-[#007AFF] hover:text-blue-800">
            <Link to="/">Login now</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
